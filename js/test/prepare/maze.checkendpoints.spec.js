describe('Maze checkEndPoints', function() {

  var maze, mazeConfig;

  beforeEach(function() {
    mazeConfig = {
      maze: '7 5\n1110001\n0010001\n1111111\n0000101\n1111101',
      start: [
        { x: 6, y: 0, label: 'A' },
        { x: 0, y: 4, label: 'B' },
        { x: 6, y: 4, label: 'C' }
      ],
      end: [ { x: 0, y: 0, label: 'X' } ]
    };
  });

  it('Should throw an Error with message `At least one end point should be specified`', function() {
    mazeConfig.end = [];

    maze = new Maze(mazeConfig);

    expect(maze.checkEndPoints.bind(maze)).toThrowError('At least one end point should be specified');
  });

  it('Should call `bind` method of function `checkPoint` one time and `checkPoint` it self at least once', function() {
    maze = new Maze(mazeConfig);

    maze.parseMazeString();
    maze.checkMaze();

    spyOn(maze, 'checkPoint').and.callThrough();
    spyOn(maze.checkPoint, 'bind').and.callThrough();

    maze.checkEndPoints();

    expect(maze.checkPoint).toHaveBeenCalledTimes(1);
    expect(maze.checkPoint.bind).toHaveBeenCalledTimes(1);
  });

});
