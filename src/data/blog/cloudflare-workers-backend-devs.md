---
title: Notes on Cloudflare Workers for backend devs
tag: infra
date: jan 26
year: 2026
order: 4
---

Workers remove server management, but edge constraints change architecture choices.

Cold starts are tiny, but CPU and runtime limits demand short request paths.
Push long jobs to queues and keep edge handlers focused on fast policy and routing.
