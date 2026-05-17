package main

import (
	"log/slog"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"github.com/anadinema/site/server/internal/db"
	"github.com/anadinema/site/server/internal/handlers"
	"github.com/anadinema/site/server/internal/middleware"
)

func main() {
	// Load .env in development; in production, env vars are injected directly.
	if err := godotenv.Load(); err != nil {
		slog.Info("no .env file found, using environment variables")
	}

	pool, err := db.Connect(os.Getenv("DATABASE_URL"))
	if err != nil {
		slog.Error("failed to connect to database", "err", err)
		os.Exit(1)
	}
	defer pool.Close()

	r := gin.New()

	// ── Global middleware ──────────────────────────────────────────
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	r.Use(middleware.CORS(os.Getenv("ALLOWED_ORIGIN")))
	r.Use(middleware.CloudflareSecret(os.Getenv("CF_SECRET")))

	// ── Public routes ──────────────────────────────────────────────
	h := handlers.New(pool)

	r.GET("/posts", h.ListPosts)
	r.GET("/posts/:slug", h.GetPost)
	r.GET("/projects", h.ListProjects)
	r.GET("/photos", h.ListPhotos)
	r.GET("/lists", h.ListLists)
	r.GET("/lists/:slug", h.GetList)

	// ── Admin routes (require session) ────────────────────────────
	admin := r.Group("/")
	admin.Use(middleware.RequireAuth(os.Getenv("AUTH_SECRET")))

	admin.POST("/posts", h.CreatePost)
	admin.PUT("/posts/:slug", h.UpdatePost)
	admin.DELETE("/posts/:slug", h.DeletePost)

	admin.POST("/projects", h.CreateProject)
	admin.PUT("/projects/:slug", h.UpdateProject)

	admin.POST("/lists", h.CreateList)
	admin.POST("/lists/:slug/items", h.AddListItem)
	admin.DELETE("/lists/:slug/items/:id", h.DeleteListItem)

	admin.POST("/photos", h.CreatePhoto)
	admin.DELETE("/photos/:id", h.DeletePhoto)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	slog.Info("server starting", "port", port)
	if err := r.Run(":" + port); err != nil {
		slog.Error("server error", "err", err)
		os.Exit(1)
	}
}
