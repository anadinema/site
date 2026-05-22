---
title: Tracing a latency spike in production
tag: ops
date: apr 26
year: 2026
order: 2
---

Latency spikes are usually queueing plus one slow dependency.

Start with percentile charts, then correlate with deploys, DB wait classes, and external call timings.
Most incidents resolve faster when every boundary logs duration with shared trace IDs.
