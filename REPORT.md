# Benchmark Report

Generated: 2026-05-14T19:06:11.618Z  
Total configs: 13

## dir-c Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| bun / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  2.43s |  1.0ms |  28.7ms |  29.1ms |  824.2ms |  824.8ms |  797.0ms |  692.1ms  |

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
|  node 22 / ubuntu-latest |  68.12s |  1.0ms |  565.5ms |  27.3ms |  160.3ms |  705.6ms |  128.4ms |  679.4ms  |
|  node 20 / ubuntu-latest |  71.96s |  1.0ms |  660.8ms |  30.3ms |  137.5ms |  782.5ms |  135.7ms |  762.9ms  |

## memory Adapter

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
|  bun / ubuntu-latest |  129.9ms |  1.0ms |  57.7ms |  1.7ms |  20.6ms |  50.2ms |  40.2ms |  26.8ms  |
|  node 24 / macos-latest |  118.2ms |  1.0ms |  30.3ms |  3.1ms |  20.1ms |  41.0ms |  26.4ms |  12.9ms  |
|  node 24 / ubuntu-latest |  117.9ms |  1.0ms |  53.0ms |  2.2ms |  34.0ms |  62.4ms |  53.6ms |  21.8ms  |
|  node 24 / windows-latest |  124.7ms |  1.0ms |  41.3ms |  1.0ms |  23.0ms |  65.6ms |  50.9ms |  23.7ms  |
|  node 22 / ubuntu-latest |  136.0ms |  1.0ms |  48.7ms |  1.3ms |  26.4ms |  66.4ms |  51.4ms |  27.9ms  |
|  node 20 / ubuntu-latest |  133.2ms |  1.0ms |  61.3ms |  1.0ms |  28.7ms |  81.7ms |  46.4ms |  29.0ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  2.55s |  1.0ms |  409.8ms |  9.9ms |  403.5ms |  377.5ms |  764.9ms |  341.0ms  |
|  node 24 / macos-latest |  2.52s |  1.0ms |  236.9ms |  14.1ms |  362.8ms |  219.8ms |  538.7ms |  174.6ms  |
|  node 24 / ubuntu-latest |  2.48s |  1.0ms |  266.5ms |  11.6ms |  322.0ms |  276.3ms |  638.8ms |  247.9ms  |
|  node 24 / windows-latest |  2.44s |  1.0ms |  325.1ms |  11.2ms |  366.4ms |  341.2ms |  734.0ms |  310.5ms  |
|  node 22 / ubuntu-latest |  2.46s |  1.0ms |  355.3ms |  12.3ms |  403.3ms |  358.1ms |  736.6ms |  332.8ms  |
|  node 20 / ubuntu-latest |  2.40s |  1.0ms |  313.7ms |  10.7ms |  366.5ms |  312.1ms |  723.0ms |  295.6ms  |

## Fastest per Operation

### **`add-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (43.07s) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun, dir/bun (51.53s) | 🥈 dir/24 (52.58s) | 🥉 dir/22 (68.12s)  |
|  windows-latest | 🥇 dir/24 (83.96s) | - | -  |

### **`add-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (1.73s) | - | -  |
|  ubuntu-latest | 🥇 dir/bun, dir-c/bun (2.42s) | 🥈 dir/24 (2.66s) | 🥉 dir/22, dir/20 (3.62s)  |
|  windows-latest | 🥇 dir/24 (4.85s) | - | -  |

### **`find-paginated-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (12.0ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (23.8ms) | 🥈 dir/bun (25.7ms) | 🥉 dir/22 (27.3ms)  |
|  windows-latest | 🥇 dir/24 (30.4ms) | - | -  |

### **`find-paginated-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (8.8ms) | - | -  |
|  ubuntu-latest | 🥇 dir/bun (19.0ms) | 🥈 dir/22 (24.0ms) | 🥉 dir/20 (25.4ms)  |
|  windows-latest | 🥇 dir/24 (28.9ms) | - | -  |

### **`find-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (285.1ms) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun (383.1ms) | 🥈 dir/24 (552.9ms) | 🥉 dir/22 (565.5ms)  |
|  windows-latest | 🥇 dir/24 (584.0ms) | - | -  |

### **`find-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (37.8ms) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun (28.7ms) | 🥈 dir/bun (68.3ms) | 🥉 dir/22 (69.8ms)  |
|  windows-latest | 🥇 dir/24 (62.0ms) | - | -  |

### **`findOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (1.1ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22, dir/20, dir/24 (1.0ms) | 🥈 dir/bun (1.7ms) | 🥉 dir-c/bun (40.7ms)  |
|  windows-latest | 🥇 dir/24 (1.1ms) | - | -  |

### **`findOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (1.7ms) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun (1.0ms) | 🥈 dir/22 (3.1ms) | 🥉 dir/20 (3.4ms)  |
|  windows-latest | 🥇 dir/24 (3.7ms) | - | -  |

### **`remove-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (512.5ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (666.9ms) | 🥈 dir/22 (679.4ms) | 🥉 dir/20 (762.9ms)  |
|  windows-latest | 🥇 dir/24 (956.7ms) | - | -  |

### **`remove-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (29.5ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (48.1ms) | 🥈 dir/22 (51.8ms) | 🥉 dir/20 (57.4ms)  |
|  windows-latest | 🥇 dir/24 (56.2ms) | - | -  |

### **`removeOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (80.6ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (117.9ms) | 🥈 dir/22 (128.4ms) | 🥉 dir/20 (135.7ms)  |
|  windows-latest | 🥇 dir/24 (145.5ms) | - | -  |

### **`removeOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (46.4ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (66.1ms) | 🥈 dir/24 (68.2ms) | 🥉 dir/20 (69.2ms)  |
|  windows-latest | 🥇 dir/24 (67.3ms) | - | -  |

### **`update-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (405.4ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24, dir/22 (704.9ms) | 🥈 dir/20 (782.5ms) | 🥉 dir-c/bun (15.73s)  |
|  windows-latest | 🥇 dir/24 (954.2ms) | - | -  |

### **`update-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (59.9ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (98.5ms) | 🥈 dir/24 (99.9ms) | 🥉 dir/20 (103.0ms)  |
|  windows-latest | 🥇 dir/24 (92.3ms) | - | -  |

### **`updateOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (79.4ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (117.9ms) | 🥈 dir/20 (137.5ms) | 🥉 dir/22 (160.3ms)  |
|  windows-latest | 🥇 dir/24 (165.1ms) | - | -  |

### **`updateOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (37.2ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (56.3ms) | 🥈 dir/24 (60.0ms) | 🥉 dir/20 (64.0ms)  |
|  windows-latest | 🥇 dir/24 (70.9ms) | - | -  |

