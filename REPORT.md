# Benchmark Report

Generated: 2026-05-17T22:21:04.487Z

Total results: 36

## Notes

- All timings are computed as the average of 3 benchmark runs per operation.
- Benchmarks are executed on GitHub Actions runners using default hosted virtual machines (no dedicated or self-hosted hardware).

## bin Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| bun / macos-latest | arm64 | 16 |
| bun / ubuntu-latest | x64 | 16 |
| bun / windows-latest | x64 | 16 |
| node 24 / macos-latest | arm64 | 16 |
| node 24 / ubuntu-latest | x64 | 16 |
| node 24 / windows-latest | x64 | 16 |
| node 22 / ubuntu-latest | x64 | 16 |
| node 20 / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / macos-latest |  164.87μs |  1.6ms |  447.3ms |  407.3ms |  951.1ms |  367.97μs |  308.79μs |  117.71μs  |
|  bun / ubuntu-latest |  166.10μs |  1.7ms |  608.2ms |  551.6ms |  1.10s |  442.29μs |  468.48μs |  181.89μs  |
|  bun / windows-latest |  361.16μs |  4.3ms |  1.20s |  1.10s |  2.35s |  549.97μs |  608.43μs |  310.50μs  |
|  node 24 / macos-latest |  119.48μs |  910.07μs |  436.8ms |  396.1ms |  797.4ms |  278.90μs |  147.10μs |  74.01μs  |
|  node 24 / ubuntu-latest |  216.45μs |  1.8ms |  738.4ms |  690.2ms |  1.41s |  757.14μs |  312.99μs |  177.54μs  |
|  node 24 / windows-latest |  429.15μs |  2.0ms |  1.66s |  1.61s |  3.08s |  429.70μs |  428.30μs |  231.03μs  |
|  node 22 / ubuntu-latest |  228.90μs |  2.1ms |  762.5ms |  699.9ms |  1.44s |  814.36μs |  412.25μs |  192.89μs  |
|  node 20 / ubuntu-latest |  216.73μs |  1.5ms |  792.0ms |  715.3ms |  1.45s |  332.04μs |  320.81μs |  177.21μs  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / macos-latest |  156.76μs |  800.15μs |  8.44s |  7.72s |  16.29s |  16.46s |  8.15s |  7.48s  |
|  bun / ubuntu-latest |  165.79μs |  666.16μs |  11.30s |  11.40s |  21.63s |  22.40s |  11.54s |  11.44s  |
|  bun / windows-latest |  340.24μs |  600.43μs |  24.22s |  22.69s |  48.81s |  53.07s |  27.12s |  26.41s  |
|  node 24 / macos-latest |  111.01μs |  1.0ms |  6.85s |  6.78s |  14.81s |  15.24s |  7.26s |  6.63s  |
|  node 24 / ubuntu-latest |  198.13μs |  520.15μs |  14.50s |  13.99s |  28.47s |  28.51s |  14.83s |  14.29s  |
|  node 24 / windows-latest |  361.07μs |  652.40μs |  28.21s |  26.91s |  53.57s |  55.69s |  27.84s |  23.67s  |
|  node 22 / ubuntu-latest |  201.25μs |  479.12μs |  14.30s |  14.11s |  27.95s |  28.31s |  14.79s |  14.23s  |
|  node 20 / ubuntu-latest |  204.12μs |  486.63μs |  14.81s |  14.38s |  28.52s |  28.90s |  15.26s |  14.79s  |

## dir-c Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| bun / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  203.35μs |  1.1ms |  27.6ms |  26.9ms |  738.0ms |  772.7ms |  764.6ms |  648.6ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / ubuntu-latest |  220.71μs |  107.0ms |  345.8ms |  430.2ms |  1.64s |  15.16s |  1.58s |  14.36s  |

## dir Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| bun / macos-latest | arm64 | 16 |
| bun / ubuntu-latest | x64 | 16 |
| bun / windows-latest | x64 | 16 |
| node 24 / macos-latest | arm64 | 16 |
| node 24 / ubuntu-latest | x64 | 16 |
| node 24 / windows-latest | x64 | 16 |
| node 22 / ubuntu-latest | x64 | 16 |
| node 20 / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / macos-latest |  143.00μs |  2.8ms |  35.2ms |  8.5ms |  391.8ms |  401.1ms |  384.8ms |  317.7ms  |
|  bun / ubuntu-latest |  238.48μs |  4.6ms |  66.8ms |  17.1ms |  793.0ms |  832.4ms |  833.3ms |  714.0ms  |
|  bun / windows-latest |  563.28μs |  8.6ms |  80.4ms |  22.2ms |  900.4ms |  934.2ms |  881.2ms |  770.1ms  |
|  node 24 / macos-latest |  185.38μs |  1.8ms |  33.5ms |  9.6ms |  30.2ms |  53.3ms |  37.2ms |  25.2ms  |
|  node 24 / ubuntu-latest |  271.17μs |  3.1ms |  64.0ms |  25.1ms |  58.7ms |  87.8ms |  62.3ms |  47.1ms  |
|  node 24 / windows-latest |  456.62μs |  3.6ms |  63.9ms |  25.6ms |  79.5ms |  107.0ms |  74.3ms |  60.5ms  |
|  node 22 / ubuntu-latest |  303.46μs |  3.3ms |  70.6ms |  22.1ms |  61.8ms |  89.4ms |  63.4ms |  56.1ms  |
|  node 20 / ubuntu-latest |  273.93μs |  3.1ms |  72.4ms |  22.7ms |  60.7ms |  95.4ms |  66.9ms |  54.4ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / macos-latest |  149.05μs |  963.04μs |  312.3ms |  11.8ms |  931.5ms |  8.04s |  903.5ms |  8.22s  |
|  bun / ubuntu-latest |  254.40μs |  1.8ms |  589.7ms |  24.5ms |  1.70s |  15.95s |  1.71s |  15.52s  |
|  bun / windows-latest |  576.38μs |  1.8ms |  683.3ms |  31.1ms |  1.91s |  18.87s |  1.92s |  17.51s  |
|  node 24 / macos-latest |  183.29μs |  766.50μs |  281.5ms |  12.8ms |  91.0ms |  384.0ms |  72.3ms |  345.6ms  |
|  node 24 / ubuntu-latest |  257.31μs |  931.45μs |  534.3ms |  22.8ms |  118.7ms |  707.4ms |  114.6ms |  671.7ms  |
|  node 24 / windows-latest |  436.35μs |  2.3ms |  626.2ms |  24.9ms |  155.0ms |  1.04s |  151.4ms |  1.01s  |
|  node 22 / ubuntu-latest |  291.16μs |  1.4ms |  598.4ms |  27.3ms |  148.8ms |  757.5ms |  123.8ms |  696.3ms  |
|  node 20 / ubuntu-latest |  265.22μs |  957.27μs |  634.5ms |  30.1ms |  131.3ms |  773.9ms |  128.7ms |  735.9ms  |

## memory Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| bun / macos-latest | arm64 | 16 |
| bun / ubuntu-latest | x64 | 16 |
| bun / windows-latest | x64 | 16 |
| node 24 / macos-latest | arm64 | 16 |
| node 24 / ubuntu-latest | x64 | 16 |
| node 24 / windows-latest | x64 | 16 |
| node 22 / ubuntu-latest | x64 | 16 |
| node 20 / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / macos-latest |  12.36μs |  1.1ms |  33.2ms |  1.0ms |  12.4ms |  33.9ms |  23.9ms |  15.2ms  |
|  bun / ubuntu-latest |  13.23μs |  1.4ms |  51.9ms |  1.5ms |  19.2ms |  49.8ms |  37.5ms |  26.5ms  |
|  bun / windows-latest |  15.14μs |  1.3ms |  76.8ms |  3.2ms |  33.3ms |  76.4ms |  57.5ms |  41.1ms  |
|  node 24 / macos-latest |  11.74μs |  498.04μs |  31.5ms |  1.2ms |  18.5ms |  51.5ms |  28.2ms |  15.1ms  |
|  node 24 / ubuntu-latest |  13.19μs |  736.37μs |  37.7ms |  2.1ms |  27.9ms |  59.0ms |  43.7ms |  22.8ms  |
|  node 24 / windows-latest |  14.86μs |  1.0ms |  49.9ms |  2.6ms |  30.1ms |  74.3ms |  48.7ms |  31.9ms  |
|  node 22 / ubuntu-latest |  15.22μs |  796.76μs |  49.5ms |  2.0ms |  26.9ms |  71.3ms |  46.0ms |  24.6ms  |
|  node 20 / ubuntu-latest |  14.40μs |  750.79μs |  52.9ms |  2.3ms |  28.4ms |  72.8ms |  43.0ms |  31.3ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / macos-latest |  12.72μs |  224.19μs |  261.7ms |  5.6ms |  284.9ms |  236.6ms |  538.4ms |  235.3ms  |
|  bun / ubuntu-latest |  13.26μs |  344.69μs |  455.5ms |  14.1ms |  405.2ms |  407.3ms |  765.0ms |  356.2ms  |
|  bun / windows-latest |  14.46μs |  305.80μs |  525.0ms |  13.9ms |  483.6ms |  462.8ms |  938.4ms |  416.9ms  |
|  node 24 / macos-latest |  12.26μs |  189.33μs |  189.3ms |  8.7ms |  260.9ms |  190.1ms |  536.3ms |  164.6ms  |
|  node 24 / ubuntu-latest |  12.27μs |  214.31μs |  277.0ms |  12.0ms |  325.2ms |  280.8ms |  661.3ms |  255.2ms  |
|  node 24 / windows-latest |  13.11μs |  297.17μs |  408.7ms |  14.2ms |  415.3ms |  410.4ms |  852.5ms |  381.0ms  |
|  node 22 / ubuntu-latest |  12.04μs |  206.93μs |  303.6ms |  12.6ms |  338.1ms |  296.3ms |  681.4ms |  270.7ms  |
|  node 20 / ubuntu-latest |  12.09μs |  202.22μs |  314.4ms |  12.5ms |  364.6ms |  311.8ms |  726.1ms |  287.8ms  |

## sqlite-better Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| node 24 / macos-latest | arm64 | 16 |
| node 24 / ubuntu-latest | x64 | 16 |
| node 24 / windows-latest | x64 | 16 |
| node 22 / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  node 24 / macos-latest |  506.95μs |  728.56μs |  6.8ms |  7.2ms |  2.1ms |  1.80s |  969.29μs |  43.2ms  |
|  node 24 / ubuntu-latest |  663.28μs |  797.51μs |  7.9ms |  9.5ms |  2.0ms |  2.08s |  1.2ms |  38.1ms  |
|  node 24 / windows-latest |  1.7ms |  995.33μs |  8.4ms |  10.9ms |  3.1ms |  5.33s |  3.4ms |  69.4ms  |
|  node 22 / ubuntu-latest |  689.03μs |  931.39μs |  8.8ms |  9.3ms |  2.2ms |  2.15s |  1.1ms |  34.0ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  node 24 / macos-latest |  533.65μs |  647.85μs |  200.6ms |  227.9ms |  2.7ms |  99.26s |  1.4ms |  900.6ms  |
|  node 24 / ubuntu-latest |  637.11μs |  216.37μs |  204.9ms |  231.0ms |  1.5ms |  124.50s |  942.17μs |  793.3ms  |
|  node 24 / windows-latest |  1.6ms |  592.70μs |  243.2ms |  237.7ms |  2.9ms |  320.74s |  2.3ms |  1.59s  |
|  node 22 / ubuntu-latest |  642.49μs |  261.68μs |  400.0ms |  308.1ms |  1.5ms |  125.38s |  974.09μs |  813.5ms  |

## sqlite Adapter

| Runtime / OS | Arch | Ops |
|---|---|---|
| bun / macos-latest | arm64 | 16 |
| bun / ubuntu-latest | x64 | 16 |
| bun / windows-latest | x64 | 16 |
| node 24 / macos-latest | arm64 | 16 |
| node 24 / ubuntu-latest | x64 | 16 |
| node 24 / windows-latest | x64 | 16 |
| node 22 / ubuntu-latest | x64 | 16 |

### Small Collection (users, 10k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / macos-latest |  372.00μs |  1.5ms |  3.0ms |  3.0ms |  1.5ms |  1.17s |  988.96μs |  23.6ms  |
|  bun / ubuntu-latest |  696.29μs |  2.2ms |  6.3ms |  6.6ms |  2.5ms |  2.21s |  1.6ms |  34.0ms  |
|  bun / windows-latest |  869.63μs |  1.9ms |  4.5ms |  4.9ms |  2.2ms |  2.92s |  1.7ms |  38.0ms  |
|  node 24 / macos-latest |  386.54μs |  677.79μs |  6.0ms |  8.7ms |  1.7ms |  1.22s |  843.28μs |  28.2ms  |
|  node 24 / ubuntu-latest |  616.79μs |  776.62μs |  9.5ms |  14.7ms |  4.0ms |  1.97s |  1.1ms |  39.4ms  |
|  node 24 / windows-latest |  1.7ms |  1.2ms |  10.7ms |  16.8ms |  4.4ms |  5.43s |  2.2ms |  70.9ms  |
|  node 22 / ubuntu-latest |  995.93μs |  868.50μs |  12.3ms |  18.1ms |  2.3ms |  3.21s |  1.3ms |  52.5ms  |

### Large Collection (posts, 200k)

| Runtime / OS | `add` | `findOne` | `find-search` | `find-paginated` | `updateOne` | `update-search` | `removeOne` | `remove-search` |
|---|---|---|---|---|---|---|---|---|
|  bun / macos-latest |  368.29μs |  697.64μs |  62.3ms |  55.6ms |  1.2ms |  70.47s |  961.89μs |  529.6ms  |
|  bun / ubuntu-latest |  673.15μs |  478.92μs |  152.0ms |  132.3ms |  2.0ms |  127.60s |  1.2ms |  649.2ms  |
|  bun / windows-latest |  885.21μs |  528.10μs |  117.4ms |  105.6ms |  2.0ms |  167.91s |  1.4ms |  799.1ms  |
|  node 24 / macos-latest |  424.71μs |  1.2ms |  274.2ms |  321.3ms |  3.8ms |  70.78s |  1.0ms |  702.6ms  |
|  node 24 / ubuntu-latest |  599.76μs |  252.62μs |  366.7ms |  327.3ms |  1.5ms |  116.81s |  901.19μs |  850.7ms  |
|  node 24 / windows-latest |  1.6ms |  644.20μs |  391.3ms |  405.4ms |  2.8ms |  324.94s |  2.2ms |  1.68s  |
|  node 22 / ubuntu-latest |  969.02μs |  228.01μs |  459.8ms |  360.2ms |  1.7ms |  189.93s |  1.2ms |  1.07s  |

## Fastest per Operation

### **`add-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 bin/24 (111.01μs) | 🥈 dir/bun (149.05μs) | 🥉 bin/bun (156.76μs)  |
|  ubuntu-latest | 🥇 bin/bun (165.79μs) | 🥈 bin/24, bin/22, bin/20 (201.17μs) | 🥉 dir-c/bun (220.71μs)  |
|  windows-latest | 🥇 bin/bun (340.24μs) | 🥈 bin/24 (361.07μs) | 🥉 dir/24 (436.35μs)  |

### **`add-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 bin/24 (119.48μs) | 🥈 dir/bun (143.00μs) | 🥉 bin/bun (164.87μs)  |
|  ubuntu-latest | 🥇 bin/bun (166.10μs) | 🥈 dir-c/bun (203.35μs) | 🥉 bin/24, bin/20 (216.59μs)  |
|  windows-latest | 🥇 bin/bun (361.16μs) | 🥈 bin/24 (429.15μs) | 🥉 dir/24 (456.62μs)  |

### **`find-paginated-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/bun (11.8ms) | 🥈 dir/24 (12.8ms) | 🥉 sqlite/bun (55.6ms)  |
|  ubuntu-latest | 🥇 dir/24 (22.8ms) | 🥈 dir/bun (24.5ms) | 🥉 dir/22 (27.3ms)  |
|  windows-latest | 🥇 dir/24 (24.9ms) | 🥈 dir/bun (31.1ms) | 🥉 sqlite/bun (105.6ms)  |

### **`find-paginated-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 sqlite/bun (3.0ms) | 🥈 sqlite-better/24 (7.2ms) | 🥉 dir/bun, sqlite/24 (8.6ms)  |
|  ubuntu-latest | 🥇 sqlite/bun (6.6ms) | 🥈 sqlite-better/22, sqlite-better/24 (9.4ms) | 🥉 sqlite/24 (14.7ms)  |
|  windows-latest | 🥇 sqlite/bun (4.9ms) | 🥈 sqlite-better/24 (10.9ms) | 🥉 sqlite/24 (16.8ms)  |

### **`find-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 sqlite/bun (62.3ms) | 🥈 sqlite-better/24 (200.6ms) | 🥉 sqlite/24 (274.2ms)  |
|  ubuntu-latest | 🥇 sqlite/bun (152.0ms) | 🥈 sqlite-better/24 (204.9ms) | 🥉 dir-c/bun (345.8ms)  |
|  windows-latest | 🥇 sqlite/bun (117.4ms) | 🥈 sqlite-better/24 (243.2ms) | 🥉 sqlite/24 (391.3ms)  |

### **`find-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 sqlite/bun (3.0ms) | 🥈 sqlite/24 (6.0ms) | 🥉 sqlite-better/24 (6.8ms)  |
|  ubuntu-latest | 🥇 sqlite/bun (6.3ms) | 🥈 sqlite-better/24 (7.9ms) | 🥉 sqlite-better/22 (8.8ms)  |
|  windows-latest | 🥇 sqlite/bun (4.5ms) | 🥈 sqlite-better/24 (8.4ms) | 🥉 sqlite/24 (10.7ms)  |

### **`findOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 sqlite-better/24 (647.85μs) | 🥈 sqlite/bun (697.64μs) | 🥉 dir/24, bin/bun (783.33μs)  |
|  ubuntu-latest | 🥇 sqlite-better/24 (216.37μs) | 🥈 sqlite/22 (228.01μs) | 🥉 sqlite/24, sqlite-better/22 (257.15μs)  |
|  windows-latest | 🥇 sqlite/bun (528.10μs) | 🥈 sqlite-better/24, bin/bun (596.57μs) | 🥉 sqlite/24, bin/24 (648.30μs)  |

### **`findOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 sqlite/24 (677.79μs) | 🥈 sqlite-better/24 (728.56μs) | 🥉 bin/24 (910.07μs)  |
|  ubuntu-latest | 🥇 sqlite/24, sqlite-better/24 (787.06μs) | 🥈 sqlite/22 (868.50μs) | 🥉 sqlite-better/22 (931.39μs)  |
|  windows-latest | 🥇 sqlite-better/24 (995.33μs) | 🥈 sqlite/24 (1.2ms) | 🥉 sqlite/bun (1.9ms)  |

### **`remove-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (345.6ms) | 🥈 sqlite/bun (529.6ms) | 🥉 sqlite/24 (702.6ms)  |
|  ubuntu-latest | 🥇 sqlite/bun (649.2ms) | 🥈 dir/24 (671.7ms) | 🥉 dir/22 (696.3ms)  |
|  windows-latest | 🥇 sqlite/bun (799.1ms) | 🥈 dir/24 (1.01s) | 🥉 sqlite-better/24 (1.59s)  |

### **`remove-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 bin/24 (74.01μs) | 🥈 bin/bun (117.71μs) | 🥉 sqlite/bun (23.6ms)  |
|  ubuntu-latest | 🥇 bin/20, bin/24, bin/bun (178.88μs) | 🥈 bin/22 (192.89μs) | 🥉 sqlite-better/22, sqlite/bun (34.0ms)  |
|  windows-latest | 🥇 bin/24 (231.03μs) | 🥈 bin/bun (310.50μs) | 🥉 sqlite/bun (38.0ms)  |

### **`removeOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 sqlite/bun (961.89μs) | 🥈 sqlite/24 (1.0ms) | 🥉 sqlite-better/24 (1.4ms)  |
|  ubuntu-latest | 🥇 sqlite/24, sqlite-better/24, sqlite-better/22 (939.15μs) | 🥈 sqlite/bun, sqlite/22 (1.2ms) | 🥉 dir/24 (114.6ms)  |
|  windows-latest | 🥇 sqlite/bun (1.4ms) | 🥈 sqlite/24, sqlite-better/24 (2.3ms) | 🥉 dir/24 (151.4ms)  |

### **`removeOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 bin/24 (147.10μs) | 🥈 bin/bun (308.79μs) | 🥉 sqlite/24 (843.28μs)  |
|  ubuntu-latest | 🥇 bin/24, bin/20 (316.90μs) | 🥈 bin/22 (412.25μs) | 🥉 bin/bun (468.48μs)  |
|  windows-latest | 🥇 bin/24 (428.30μs) | 🥈 bin/bun (608.43μs) | 🥉 sqlite/bun (1.7ms)  |

### **`update-search-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 dir/24 (384.0ms) | 🥈 dir/bun (8.04s) | 🥉 bin/24 (15.24s)  |
|  ubuntu-latest | 🥇 dir/24 (707.4ms) | 🥈 dir/22 (757.5ms) | 🥉 dir/20 (773.9ms)  |
|  windows-latest | 🥇 dir/24 (1.04s) | 🥈 dir/bun (18.87s) | 🥉 bin/bun (53.07s)  |

### **`update-search-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 bin/24 (278.90μs) | 🥈 bin/bun (367.97μs) | 🥉 dir/24 (53.3ms)  |
|  ubuntu-latest | 🥇 bin/20 (332.04μs) | 🥈 bin/bun (442.29μs) | 🥉 bin/24 (757.14μs)  |
|  windows-latest | 🥇 bin/24 (429.70μs) | 🥈 bin/bun (549.97μs) | 🥉 dir/24 (107.0ms)  |

### **`updateOne-large`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 sqlite/bun (1.2ms) | 🥈 sqlite-better/24 (2.7ms) | 🥉 sqlite/24 (3.8ms)  |
|  ubuntu-latest | 🥇 sqlite/24, sqlite-better/24, sqlite-better/22 (1.5ms) | 🥈 sqlite/22 (1.7ms) | 🥉 sqlite/bun (2.0ms)  |
|  windows-latest | 🥇 sqlite/bun (2.0ms) | 🥈 sqlite/24, sqlite-better/24 (2.8ms) | 🥉 dir/24 (155.0ms)  |

### **`updateOne-small`**:

| System | 🥇 | 🥈 | 🥉 |
|---|---|---|---|
|  macos-latest | 🥇 sqlite/bun (1.5ms) | 🥈 sqlite/24 (1.7ms) | 🥉 sqlite-better/24 (2.1ms)  |
|  ubuntu-latest | 🥇 sqlite-better/24 (2.0ms) | 🥈 sqlite-better/22, sqlite/22 (2.3ms) | 🥉 sqlite/bun (2.5ms)  |
|  windows-latest | 🥇 sqlite/bun (2.2ms) | 🥈 sqlite-better/24 (3.1ms) | 🥉 sqlite/24 (4.4ms)  |

