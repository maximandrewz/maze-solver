# Decision tree implementation [![Build Status](https://travis-ci.org/maximandrewz/maze-solver.svg?branch=master)](https://travis-ci.org/maximandrewz/maze-solver)

## Maze Solver

The problem is very simple: you need to find the way out of the maze.

Maze is given as a rectangular matrix of `0` and `1` characters.

```
1110001
0010001
1111111
0000101
1111101
```

**Maze string** should contain width and height of the maze in first line.
The maze itself will follow, with 1 depicting passages and 0 for impassable
walls. You have to provide to maze solver Entry and Exit points and it will find
the shortest path for you. See code below for configuration example:

```
{
  maze: '31 29
1111101011101111101110111011111
1010001010000000100010001010100
1011111111111110101010111110111
1000000000100010101010100010100
1010111110101110111110111010111
1010001000100000001000000010100
1111101111111110101110111110111
0000001000000010101000101010000
1111101011101111101111101010111
1000101010000010000000100000101
1011101110111110101111101110101
1000000010100000101000001010001
1011111010111111111111101011111
1000100000100000000000101010101
1111111011101011101110101010101
0010000000101000100010000000100
1111111110101111111111111111101
1010000000101010100010000000001
1011101111111010101110111111111
1000101000100000101000000000100
1011111110111110101011101111111
1010001000000010001000101010001
1010111110101110111110111010101
1000001010100010000010001010100
1110111011101111101110101011111
1000101000100000001000101000101
1110101011111111101110111110101
1000101000001000001000001000101
1110101011111110111111111011101',
  start: [
    { x: 30, y:  0, label: 'A' },
    { x: 30, y: 28, label: 'B' },
    { x:  0, y: 28, label: 'C' }
  ],
  end: [ { x: 0, y: 0, label: 'X' } ]
}
```

Result will show how many steps and in which direction from the given point you have to make
to reach the goal. Where `U` denotes step up, `L` is one step left, `R` and `D` are steps right and down respectively.
The result will be produced in compact way where number denotes the number of steps in the current direction, like this:

```
[ '4L6D4L4D4L2D8L2U4R4U4L4U8L2U2L',
  '4U4L4U2L8D6L4U2R2U2L4U2R2U8L2D2L8U4R4U4L4U8L2U2L',
  '12U2R2D2R2D2R2U4R8U4R4U4L4U8L2U2L' ]
```
The result is an array sorted by the starting point label name.
