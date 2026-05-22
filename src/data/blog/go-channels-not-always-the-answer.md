---
title: "Go channels aren't always the answer"
tag: go
date: may 26
year: 2026
order: 1
---

Channels look elegant, but not every problem needs fan-in and fan-out.

If ownership is simple, prefer plain function calls and explicit return values.
Use channels where coordination across goroutines is core requirement, not default style.
