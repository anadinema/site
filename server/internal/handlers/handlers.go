package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

// Handler holds shared dependencies for all route handlers.
type Handler struct {
	db *pgxpool.Pool
}

func New(db *pgxpool.Pool) *Handler {
	return &Handler{db: db}
}

// ── Helpers ───────────────────────────────────────────────────────────────

func writeJSON(c *gin.Context, status int, v any) {
	c.JSON(status, v)
}

// ── Posts ─────────────────────────────────────────────────────────────────

func (h *Handler) ListPosts(c *gin.Context) {
	// TODO: SELECT id, slug, title, tag, published_at FROM posts
	//       WHERE published_at IS NOT NULL ORDER BY published_at DESC
	writeJSON(c, http.StatusOK, []any{})
}

func (h *Handler) GetPost(c *gin.Context) {
	slug := c.Param("slug")
	// TODO: SELECT * FROM posts WHERE slug = $1 AND published_at IS NOT NULL
	_ = slug
	c.String(http.StatusNotImplemented, "not implemented")
}

func (h *Handler) CreatePost(c *gin.Context) {
	// TODO: INSERT INTO posts (slug, title, tag, body) VALUES (...)
	c.String(http.StatusNotImplemented, "not implemented")
}

func (h *Handler) UpdatePost(c *gin.Context) {
	slug := c.Param("slug")
	_ = slug
	// TODO: UPDATE posts SET ... WHERE slug = $1
	c.String(http.StatusNotImplemented, "not implemented")
}

func (h *Handler) DeletePost(c *gin.Context) {
	slug := c.Param("slug")
	_ = slug
	// TODO: DELETE FROM posts WHERE slug = $1
	c.Status(http.StatusNoContent)
}

// ── Projects ──────────────────────────────────────────────────────────────

func (h *Handler) ListProjects(c *gin.Context) {
	// TODO: SELECT * FROM projects ORDER BY year DESC
	writeJSON(c, http.StatusOK, []any{})
}

func (h *Handler) CreateProject(c *gin.Context) {
	c.String(http.StatusNotImplemented, "not implemented")
}

func (h *Handler) UpdateProject(c *gin.Context) {
	c.String(http.StatusNotImplemented, "not implemented")
}

// ── Photos ────────────────────────────────────────────────────────────────

func (h *Handler) ListPhotos(c *gin.Context) {
	// TODO: SELECT * FROM photos ORDER BY created_at DESC
	writeJSON(c, http.StatusOK, []any{})
}

func (h *Handler) CreatePhoto(c *gin.Context) {
	c.String(http.StatusNotImplemented, "not implemented")
}

func (h *Handler) DeletePhoto(c *gin.Context) {
	c.Status(http.StatusNoContent)
}

// ── Lists ─────────────────────────────────────────────────────────────────

func (h *Handler) ListLists(c *gin.Context) {
	// TODO: SELECT l.*, COUNT(i.id) AS item_count
	//       FROM lists l LEFT JOIN list_items i ON i.list_id = l.id
	//       GROUP BY l.id ORDER BY l.created_at DESC
	writeJSON(c, http.StatusOK, []any{})
}

func (h *Handler) GetList(c *gin.Context) {
	slug := c.Param("slug")
	// TODO: SELECT l.*, json_agg(i ORDER BY i.created_at) AS items
	//       FROM lists l LEFT JOIN list_items i ON i.list_id = l.id
	//       WHERE l.slug = $1 GROUP BY l.id
	_ = slug
	c.String(http.StatusNotImplemented, "not implemented")
}

func (h *Handler) CreateList(c *gin.Context) {
	c.String(http.StatusNotImplemented, "not implemented")
}

func (h *Handler) AddListItem(c *gin.Context) {
	c.String(http.StatusNotImplemented, "not implemented")
}

func (h *Handler) DeleteListItem(c *gin.Context) {
	c.Status(http.StatusNoContent)
}
