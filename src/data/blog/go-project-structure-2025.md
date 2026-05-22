---
title: How I structure my Go projects in 2025
tag: go
date: feb 26
year: 2026
order: 3
---

I optimize for discoverability first: clear boundaries, boring names, and shallow packages.

Domain logic stays independent from transport.
This keeps HTTP, CLI, and background workers replaceable without rewriting core behavior.
