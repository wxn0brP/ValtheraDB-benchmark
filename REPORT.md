# Benchmark Report

Generated: 2026-05-14T22:11:30.394Z
Total results: 13

## Notes

- All timings are computed as the median of 10 benchmark runs per operation.
- Benchmarks are executed on GitHub Actions runners using default hosted virtual machines (no dedicated or self-hosted hardware).

## dir-c Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| bun / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  2.01s |  1.1ms |  26.5ms |  26.4ms |  731.8ms |  746.2ms |  739.9ms |  637.7ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  43.41s |  105.3ms |  345.7ms |  424.8ms |  1.57s |  14.26s |  1.55s |  14.26s  |

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
|  bun / ubuntu-latest |  1.96s |  5.0ms |  69.2ms |  17.0ms |  703.3ms |  725.4ms |  706.3ms |  614.4ms  |
|  node 24 / macos-latest |  2.49s |  1.9ms |  37.9ms |  9.6ms |  37.7ms |  64.7ms |  42.0ms |  30.9ms  |
|  node 24 / ubuntu-latest |  3.23s |  3.0ms |  59.1ms |  23.3ms |  53.6ms |  89.2ms |  59.2ms |  42.9ms  |
|  node 24 / windows-latest |  6.67s |  3.7ms |  64.1ms |  27.9ms |  79.2ms |  102.5ms |  73.0ms |  58.1ms  |
|  node 22 / ubuntu-latest |  2.17s |  2.4ms |  53.5ms |  17.3ms |  45.0ms |  73.6ms |  50.2ms |  41.3ms  |
|  node 20 / ubuntu-latest |  2.14s |  2.6ms |  55.3ms |  18.4ms |  49.9ms |  75.9ms |  53.0ms |  42.4ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  42.51s |  1.6ms |  569.7ms |  24.0ms |  1.49s |  13.90s |  1.52s |  13.83s  |
|  node 24 / macos-latest |  50.93s |  1.8ms |  304.2ms |  13.1ms |  79.5ms |  435.3ms |  81.3ms |  431.8ms  |
|  node 24 / ubuntu-latest |  62.87s |  1.0ms |  534.8ms |  22.8ms |  117.4ms |  659.4ms |  113.0ms |  622.1ms  |
|  node 24 / windows-latest |  125.56s |  1.4ms |  612.8ms |  32.6ms |  196.0ms |  1.28s |  177.5ms |  1.20s  |
|  node 22 / ubuntu-latest |  40.06s |  1.0ms |  459.3ms |  21.3ms |  111.6ms |  598.8ms |  98.7ms |  565.8ms  |
|  node 20 / ubuntu-latest |  41.53s |  1.0ms |  511.1ms |  23.8ms |  106.5ms |  631.1ms |  101.6ms |  600.5ms  |

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
|  bun / ubuntu-latest |  126.2ms |  1.0ms |  48.8ms |  1.6ms |  18.9ms |  49.4ms |  34.1ms |  25.7ms  |
|  node 24 / macos-latest |  122.0ms |  1.0ms |  39.7ms |  1.0ms |  21.5ms |  53.5ms |  41.3ms |  15.6ms  |
|  node 24 / ubuntu-latest |  125.3ms |  1.0ms |  39.9ms |  1.0ms |  22.1ms |  60.5ms |  51.3ms |  26.2ms  |
|  node 24 / windows-latest |  125.5ms |  1.0ms |  38.8ms |  1.1ms |  21.9ms |  57.7ms |  43.1ms |  24.6ms  |
|  node 22 / ubuntu-latest |  131.1ms |  1.0ms |  41.8ms |  1.0ms |  22.4ms |  60.2ms |  48.0ms |  28.9ms  |
|  node 20 / ubuntu-latest |  131.0ms |  1.0ms |  43.2ms |  1.0ms |  21.1ms |  71.1ms |  40.5ms |  25.4ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  2.54s |  1.0ms |  414.6ms |  7.4ms |  398.9ms |  380.6ms |  751.1ms |  347.4ms  |
|  node 24 / macos-latest |  2.55s |  1.0ms |  200.9ms |  7.3ms |  336.4ms |  230.6ms |  656.7ms |  206.7ms  |
|  node 24 / ubuntu-latest |  2.44s |  1.0ms |  327.2ms |  10.4ms |  358.0ms |  332.8ms |  717.8ms |  310.5ms  |
|  node 24 / windows-latest |  2.46s |  1.0ms |  292.5ms |  9.8ms |  354.1ms |  292.2ms |  701.2ms |  273.4ms  |
|  node 22 / ubuntu-latest |  2.43s |  1.0ms |  277.4ms |  12.0ms |  334.1ms |  276.6ms |  666.8ms |  258.0ms  |
|  node 20 / ubuntu-latest |  2.42s |  1.0ms |  290.2ms |  12.0ms |  344.5ms |  300.9ms |  683.7ms |  278.0ms  |

## Fastest per Operation

### **`add-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (50.93s) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (40.06s) | 🥈 dir/20 (41.53s) | 🥉 dir/bun (42.51s)  |
|  windows-latest | 🥇 dir/24 (125.56s) | - | -  |

### **`add-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (2.49s) | - | -  |
|  ubuntu-latest | 🥇 dir/bun (1.96s) | 🥈 dir-c/bun (2.01s) | 🥉 dir/20 (2.14s)  |
|  windows-latest | 🥇 dir/24 (6.67s) | - | -  |

### **`find-paginated-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (13.1ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (21.3ms) | 🥈 dir/24 (22.8ms) | 🥉 dir/20, dir/bun (23.9ms)  |
|  windows-latest | 🥇 dir/24 (32.6ms) | - | -  |

### **`find-paginated-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (9.6ms) | - | -  |
|  ubuntu-latest | 🥇 dir/bun (17.0ms) | 🥈 dir/22 (17.3ms) | 🥉 dir/20 (18.4ms)  |
|  windows-latest | 🥇 dir/24 (27.9ms) | - | -  |

### **`find-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (304.2ms) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun (345.7ms) | 🥈 dir/22 (459.3ms) | 🥉 dir/20 (511.1ms)  |
|  windows-latest | 🥇 dir/24 (612.8ms) | - | -  |

### **`find-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (37.9ms) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun (26.5ms) | 🥈 dir/22 (53.5ms) | 🥉 dir/20 (55.3ms)  |
|  windows-latest | 🥇 dir/24 (64.1ms) | - | -  |

### **`findOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (1.8ms) | - | -  |
|  ubuntu-latest | 🥇 dir/20 (1.0ms) | 🥈 dir/22 (1.0ms) | 🥉 dir/24 (1.0ms)  |
|  windows-latest | 🥇 dir/24 (1.4ms) | - | -  |

### **`findOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (1.9ms) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun (1.1ms) | 🥈 dir/22 (2.4ms) | 🥉 dir/20 (2.6ms)  |
|  windows-latest | 🥇 dir/24 (3.7ms) | - | -  |

### **`remove-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (431.8ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (565.8ms) | 🥈 dir/20 (600.5ms) | 🥉 dir/24 (622.1ms)  |
|  windows-latest | 🥇 dir/24 (1.20s) | - | -  |

### **`remove-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (30.9ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (41.3ms) | 🥈 dir/20 (42.4ms) | 🥉 dir/24 (42.9ms)  |
|  windows-latest | 🥇 dir/24 (58.1ms) | - | -  |

### **`removeOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (81.3ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (98.7ms) | 🥈 dir/20 (101.6ms) | 🥉 dir/24 (113.0ms)  |
|  windows-latest | 🥇 dir/24 (177.5ms) | - | -  |

### **`removeOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (42.0ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (50.2ms) | 🥈 dir/20 (53.0ms) | 🥉 dir/24 (59.2ms)  |
|  windows-latest | 🥇 dir/24 (73.0ms) | - | -  |

### **`update-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (435.3ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (598.8ms) | 🥈 dir/20 (631.1ms) | 🥉 dir/24 (659.4ms)  |
|  windows-latest | 🥇 dir/24 (1.28s) | - | -  |

### **`update-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (64.7ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (73.6ms) | 🥈 dir/20 (75.9ms) | 🥉 dir/24 (89.2ms)  |
|  windows-latest | 🥇 dir/24 (102.5ms) | - | -  |

### **`updateOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (79.5ms) | - | -  |
|  ubuntu-latest | 🥇 dir/20 (106.5ms) | 🥈 dir/22 (111.6ms) | 🥉 dir/24 (117.4ms)  |
|  windows-latest | 🥇 dir/24 (196.0ms) | - | -  |

### **`updateOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (37.7ms) | - | -  |
|  ubuntu-latest | 🥇 dir/22 (45.0ms) | 🥈 dir/20 (49.9ms) | 🥉 dir/24 (53.6ms)  |
|  windows-latest | 🥇 dir/24 (79.2ms) | - | -  |

