package middleware

import (
	"strings"

	"github.com/gin-gonic/gin"
)

// RequireAuth checks for a valid Bearer token on admin routes.
// The token is a long random secret set in AUTH_SECRET env var.
// For multi-user access, swap this for a proper session/JWT check.
func RequireAuth(secret string) gin.HandlerFunc {
	return func(c *gin.Context) {
		if secret == "" {
			// No secret configured — block all admin access
			c.String(403, "admin access not configured")
			c.Abort()
			return
		}

		auth := c.GetHeader("Authorization")
		token, found := strings.CutPrefix(auth, "Bearer ")
		if !found || token != secret {
			c.String(401, "unauthorized")
			c.Abort()
			return
		}

		c.Next()
	}
}
