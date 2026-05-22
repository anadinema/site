---
title: pgx vs database/sql — when it actually matters
tag: go
date: oct 25
year: 2025
order: 6
---

For many services, both work.

Pick `pgx` when you need Postgres-specific types, protocol control, or better observability hooks.
Pick `database/sql` when portability and ecosystem defaults matter more than specialized tuning.
