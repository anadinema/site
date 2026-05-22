---
title: Understanding Postgres EXPLAIN output
tag: db
date: mar 25
year: 2025
order: 9
---

`EXPLAIN ANALYZE` tells where time goes, not just which index exists.

Focus on rows estimates vs actuals, scan type, and sort/hash spill behavior.
Those three usually reveal root cause faster than random index changes.
