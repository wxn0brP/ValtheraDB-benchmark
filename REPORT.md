# Benchmark Report

Generated: 2026-05-15T14:50:52.985Z

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
|  bun / ubuntu-latest |  199.36μs |  1.1ms |  26.5ms |  26.2ms |  733.4ms |  752.5ms |  735.1ms |  636.5ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  215.70μs |  105.9ms |  345.5ms |  430.3ms |  1.58s |  14.38s |  1.58s |  14.32s  |

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
|  bun / ubuntu-latest |  203.17μs |  5.7ms |  69.1ms |  17.5ms |  731.4ms |  752.8ms |  746.6ms |  644.5ms  |
|  node 24 / macos-latest |  396.46μs |  2.5ms |  49.7ms |  17.9ms |  51.8ms |  77.9ms |  51.6ms |  38.5ms  |
|  node 24 / ubuntu-latest |  347.60μs |  3.1ms |  60.2ms |  23.8ms |  54.2ms |  86.9ms |  60.1ms |  45.0ms  |
|  node 24 / windows-latest |  589.86μs |  3.7ms |  63.4ms |  24.0ms |  73.3ms |  104.4ms |  73.5ms |  61.1ms  |
|  node 22 / ubuntu-latest |  353.53μs |  3.0ms |  69.9ms |  21.1ms |  60.5ms |  99.9ms |  62.6ms |  51.1ms  |
|  node 20 / ubuntu-latest |  275.03μs |  3.4ms |  73.7ms |  25.2ms |  63.4ms |  96.2ms |  66.9ms |  53.8ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  221.08μs |  1.7ms |  612.6ms |  26.4ms |  1.56s |  14.56s |  1.60s |  14.54s  |
|  node 24 / macos-latest |  400.78μs |  2.4ms |  338.3ms |  13.9ms |  101.3ms |  509.8ms |  95.6ms |  498.6ms  |
|  node 24 / ubuntu-latest |  338.37μs |  938.04μs |  555.9ms |  22.8ms |  120.7ms |  692.1ms |  115.3ms |  657.2ms  |
|  node 24 / windows-latest |  555.63μs |  1.2ms |  604.9ms |  31.2ms |  149.9ms |  1.02s |  137.7ms |  958.4ms  |
|  node 22 / ubuntu-latest |  339.81μs |  1.0ms |  570.9ms |  27.8ms |  141.8ms |  709.6ms |  123.1ms |  677.0ms  |
|  node 20 / ubuntu-latest |  266.86μs |  976.77μs |  637.0ms |  29.6ms |  131.0ms |  790.9ms |  132.1ms |  757.4ms  |

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
|  bun / ubuntu-latest |  12.81μs |  941.25μs |  46.8ms |  1.6ms |  18.4ms |  48.6ms |  33.2ms |  25.1ms  |
|  node 24 / macos-latest |  11.84μs |  517.58μs |  31.8ms |  700.65μs |  17.8ms |  41.4ms |  28.2ms |  14.7ms  |
|  node 24 / ubuntu-latest |  12.31μs |  730.44μs |  40.1ms |  1.1ms |  23.3ms |  60.0ms |  48.5ms |  24.6ms  |
|  node 24 / windows-latest |  13.09μs |  789.75μs |  40.5ms |  1.1ms |  24.1ms |  60.4ms |  46.9ms |  22.5ms  |
|  node 22 / ubuntu-latest |  13.80μs |  735.04μs |  43.8ms |  976.26μs |  25.5ms |  61.6ms |  48.6ms |  28.6ms  |
|  node 20 / ubuntu-latest |  12.17μs |  549.09μs |  44.8ms |  790.88μs |  21.1ms |  47.6ms |  28.5ms |  20.2ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  12.72μs |  259.69μs |  404.6ms |  7.3ms |  396.7ms |  379.3ms |  755.8ms |  349.5ms  |
|  node 24 / macos-latest |  11.83μs |  159.60μs |  172.5ms |  7.0ms |  278.8ms |  193.2ms |  542.7ms |  158.6ms  |
|  node 24 / ubuntu-latest |  12.26μs |  165.03μs |  323.8ms |  10.2ms |  353.7ms |  331.0ms |  697.2ms |  308.9ms  |
|  node 24 / windows-latest |  12.20μs |  179.40μs |  296.6ms |  9.0ms |  365.9ms |  298.4ms |  728.4ms |  274.7ms  |
|  node 22 / ubuntu-latest |  12.01μs |  145.53μs |  292.3ms |  11.5ms |  339.7ms |  293.5ms |  679.5ms |  271.5ms  |
|  node 20 / ubuntu-latest |  11.91μs |  166.78μs |  232.0ms |  9.6ms |  276.1ms |  242.2ms |  546.2ms |  218.9ms  |

## Fastest per Operation

### **`add-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (400.78μs) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun, dir/bun (218.39μs) | 🥈 dir/20 (266.86μs) | 🥉 dir/24, dir/22 (339.09μs)  |
|  windows-latest | 🥇 dir/24 (555.63μs) | - | -  |

### **`add-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (396.46μs) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun, dir/bun (201.27μs) | 🥈 dir/20 (275.03μs) | 🥉 dir/24, dir/22 (350.57μs)  |
|  windows-latest | 🥇 dir/24 (589.86μs) | - | -  |

### **`find-paginated-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (13.9ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (22.8ms) | 🥈 dir/bun (26.4ms) | 🥉 dir/22 (27.8ms)  |
|  windows-latest | 🥇 dir/24 (31.2ms) | - | -  |

### **`find-paginated-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (17.9ms) | - | -  |
|  ubuntu-latest | 🥇 dir/bun (17.5ms) | 🥈 dir/22 (21.1ms) | 🥉 dir/24 (23.8ms)  |
|  windows-latest | 🥇 dir/24 (24.0ms) | - | -  |

### **`find-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (338.3ms) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun (345.5ms) | 🥈 dir/24 (555.9ms) | 🥉 dir/22 (570.9ms)  |
|  windows-latest | 🥇 dir/24 (604.9ms) | - | -  |

### **`find-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (49.7ms) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun (26.5ms) | 🥈 dir/24 (60.2ms) | 🥉 dir/bun (69.1ms)  |
|  windows-latest | 🥇 dir/24 (63.4ms) | - | -  |

### **`findOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (2.4ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24, dir/20, dir/22 (972.19μs) | 🥈 dir/bun (1.7ms) | 🥉 dir-c/bun (105.9ms)  |
|  windows-latest | 🥇 dir/24 (1.2ms) | - | -  |

### **`findOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (2.5ms) | - | -  |
|  ubuntu-latest | 🥇 dir-c/bun (1.1ms) | 🥈 dir/22, dir/24 (3.1ms) | 🥉 dir/20 (3.4ms)  |
|  windows-latest | 🥇 dir/24 (3.7ms) | - | -  |

### **`remove-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (498.6ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (657.2ms) | 🥈 dir/22 (677.0ms) | 🥉 dir/20 (757.4ms)  |
|  windows-latest | 🥇 dir/24 (958.4ms) | - | -  |

### **`remove-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (38.5ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (45.0ms) | 🥈 dir/22 (51.1ms) | 🥉 dir/20 (53.8ms)  |
|  windows-latest | 🥇 dir/24 (61.1ms) | - | -  |

### **`removeOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (95.6ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (115.3ms) | 🥈 dir/22 (123.1ms) | 🥉 dir/20 (132.1ms)  |
|  windows-latest | 🥇 dir/24 (137.7ms) | - | -  |

### **`removeOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (51.6ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (60.1ms) | 🥈 dir/22 (62.6ms) | 🥉 dir/20 (66.9ms)  |
|  windows-latest | 🥇 dir/24 (73.5ms) | - | -  |

### **`update-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (509.8ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (692.1ms) | 🥈 dir/22 (709.6ms) | 🥉 dir/20 (790.9ms)  |
|  windows-latest | 🥇 dir/24 (1.02s) | - | -  |

### **`update-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (77.9ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (86.9ms) | 🥈 dir/20 (96.2ms) | 🥉 dir/22 (99.9ms)  |
|  windows-latest | 🥇 dir/24 (104.4ms) | - | -  |

### **`updateOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (101.3ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (120.7ms) | 🥈 dir/20 (131.0ms) | 🥉 dir/22 (141.8ms)  |
|  windows-latest | 🥇 dir/24 (149.9ms) | - | -  |

### **`updateOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (51.8ms) | - | -  |
|  ubuntu-latest | 🥇 dir/24 (54.2ms) | 🥈 dir/22 (60.5ms) | 🥉 dir/20 (63.4ms)  |
|  windows-latest | 🥇 dir/24 (73.3ms) | - | -  |

