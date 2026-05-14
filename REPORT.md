# Benchmark Report

Generated: 2026-05-14T18:13:20.236Z  
Total configs: 7

## dir-c Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| bun / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  2.43s |  965µs |  28.7ms |  29.1ms |  824.2ms |  824.8ms |  797.0ms |  692.1ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  51.51s |  40.7ms |  383.1ms |  460.2ms |  1.72s |  15.73s |  1.69s |  15.68s  |

## dir Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| bun / ubuntu-latest | x64 | 16 |
| node 24 / macos-latest | arm64 | 16 |
| node 24 / ubuntu-latest | x64 | 16 |
| node 24 / windows-latest | x64 | 16 |
| node 22 / ubuntu-latest | x64 | 16 |
| node 20 / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  2.41s |  5.2ms |  68.3ms |  19.0ms |  792.0ms |  829.5ms |  866.3ms |  759.6ms  |
|  node 24 / macos-latest |  1.73s |  1.7ms |  37.8ms |  8.8ms |  37.2ms |  59.9ms |  46.4ms |  29.5ms  |
|  node 24 / ubuntu-latest |  2.66s |  3.7ms |  85.7ms |  31.1ms |  60.0ms |  99.9ms |  68.2ms |  48.1ms  |
|  node 24 / windows-latest |  4.85s |  3.7ms |  62.0ms |  28.9ms |  70.9ms |  92.3ms |  67.3ms |  56.2ms  |
|  node 22 / ubuntu-latest |  3.61s |  3.1ms |  69.8ms |  24.0ms |  56.3ms |  98.5ms |  66.1ms |  51.8ms  |
|  node 20 / ubuntu-latest |  3.64s |  3.4ms |  72.9ms |  25.4ms |  64.0ms |  103.0ms |  69.2ms |  57.4ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  51.55s |  1.7ms |  596.3ms |  25.7ms |  1.72s |  15.95s |  1.74s |  15.68s  |
|  node 24 / macos-latest |  43.07s |  1.1ms |  285.1ms |  12.0ms |  79.4ms |  405.4ms |  80.6ms |  512.5ms  |
|  node 24 / ubuntu-latest |  52.58s |  1.1ms |  552.9ms |  23.8ms |  117.9ms |  704.2ms |  117.9ms |  666.9ms  |
|  node 24 / windows-latest |  83.96s |  1.1ms |  584.0ms |  30.4ms |  165.1ms |  954.2ms |  145.5ms |  956.7ms  |
|  node 22 / ubuntu-latest |  68.12s |  985µs |  565.5ms |  27.3ms |  160.3ms |  705.6ms |  128.4ms |  679.4ms  |
|  node 20 / ubuntu-latest |  71.96s |  1.0ms |  660.8ms |  30.3ms |  137.5ms |  782.5ms |  135.7ms |  762.9ms  |

## Fastest per Operation

- **`add-large`**:
   + 🥇 `Storage dir, node 24, macos latest` (43.07s)
   + 🥈 `Storage dir-c, bun latest, ubuntu latest` (51.51s)
   + 🥉 `Storage dir, bun latest, ubuntu latest` (51.55s)

- **`add-small`**:
   + 🥇 `Storage dir, node 24, macos latest` (1.73s)
   + 🥈 `Storage dir, bun latest, ubuntu latest` (2.41s)
   + 🥉 `Storage dir-c, bun latest, ubuntu latest` (2.43s)

- **`find-paginated-large`**:
   + 🥇 `Storage dir, node 24, macos latest` (12.0ms)
   + 🥈 `Storage dir, node 24, ubuntu latest` (23.8ms)
   + 🥉 `Storage dir, bun latest, ubuntu latest` (25.7ms)

- **`find-paginated-small`**:
   + 🥇 `Storage dir, node 24, macos latest` (8.8ms)
   + 🥈 `Storage dir, bun latest, ubuntu latest` (19.0ms)
   + 🥉 `Storage dir, node 22, ubuntu latest` (24.0ms)

- **`find-search-large`**:
   + 🥇 `Storage dir, node 24, macos latest` (285.1ms)
   + 🥈 `Storage dir-c, bun latest, ubuntu latest` (383.1ms)
   + 🥉 `Storage dir, node 24, ubuntu latest` (552.9ms)

- **`find-search-small`**:
   + 🥇 `Storage dir-c, bun latest, ubuntu latest` (28.7ms)
   + 🥈 `Storage dir, node 24, macos latest` (37.8ms)
   + 🥉 `Storage dir, node 24, windows latest` (62.0ms)

- **`findOne-large`**:
   + 🥇 `Storage dir, node 22, ubuntu latest` (985µs)
   + 🥈 `Storage dir, node 20, ubuntu latest` (1.0ms)
   + 🥉 `Storage dir, node 24, ubuntu latest` (1.1ms)

- **`findOne-small`**:
   + 🥇 `Storage dir-c, bun latest, ubuntu latest` (965µs)
   + 🥈 `Storage dir, node 24, macos latest` (1.7ms)
   + 🥉 `Storage dir, node 22, ubuntu latest` (3.1ms)

- **`remove-search-large`**:
   + 🥇 `Storage dir, node 24, macos latest` (512.5ms)
   + 🥈 `Storage dir, node 24, ubuntu latest` (666.9ms)
   + 🥉 `Storage dir, node 22, ubuntu latest` (679.4ms)

- **`remove-search-small`**:
   + 🥇 `Storage dir, node 24, macos latest` (29.5ms)
   + 🥈 `Storage dir, node 24, ubuntu latest` (48.1ms)
   + 🥉 `Storage dir, node 22, ubuntu latest` (51.8ms)

- **`removeOne-large`**:
   + 🥇 `Storage dir, node 24, macos latest` (80.6ms)
   + 🥈 `Storage dir, node 24, ubuntu latest` (117.9ms)
   + 🥉 `Storage dir, node 22, ubuntu latest` (128.4ms)

- **`removeOne-small`**:
   + 🥇 `Storage dir, node 24, macos latest` (46.4ms)
   + 🥈 `Storage dir, node 22, ubuntu latest` (66.1ms)
   + 🥉 `Storage dir, node 24, windows latest` (67.3ms)

- **`update-search-large`**:
   + 🥇 `Storage dir, node 24, macos latest` (405.4ms)
   + 🥈 `Storage dir, node 24, ubuntu latest` (704.2ms)
   + 🥉 `Storage dir, node 22, ubuntu latest` (705.6ms)

- **`update-search-small`**:
   + 🥇 `Storage dir, node 24, macos latest` (59.9ms)
   + 🥈 `Storage dir, node 24, windows latest` (92.3ms)
   + 🥉 `Storage dir, node 22, ubuntu latest` (98.5ms)

- **`updateOne-large`**:
   + 🥇 `Storage dir, node 24, macos latest` (79.4ms)
   + 🥈 `Storage dir, node 24, ubuntu latest` (117.9ms)
   + 🥉 `Storage dir, node 20, ubuntu latest` (137.5ms)

- **`updateOne-small`**:
   + 🥇 `Storage dir, node 24, macos latest` (37.2ms)
   + 🥈 `Storage dir, node 22, ubuntu latest` (56.3ms)
   + 🥉 `Storage dir, node 24, ubuntu latest` (60.0ms)

