package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// CloudflareSecret rejects any request that doesn't carry the correct
// X-CF-Secret header. Set this header in a Cloudflare Transform Rule
// so only Cloudflare-proxied traffic can reach the API.
//
// If secret is empty (e.g. local dev), the check is skipped.
func CloudflareSecret(secret string) gin.HandlerFunc {
	return func(c *gin.Context) {
		if secret != "" && c.GetHeader("X-CF-Secret") != secret {
			c.String(http.StatusForbidden, "forbidden")
			c.Abort()
			return
		}
		c.Next()
	}
}

// CORS sets permissive headers for the allowed origin only.
func CORS(origin string) gin.HandlerFunc {
	if origin == "" {
		origin = "*" // local dev only — always set this in production
	}
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", origin)
		c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if c.Request.Method == http.MethodOptions {
			c.Status(http.StatusNoContent)
			c.Abort()
			return
		}
		c.Next()
	}
}
