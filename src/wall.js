import Brick from './brick'

export default class Wall {
  constructor(level, ball) {
    var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple',
    'lightblue', 'pink', 'lightgreen', 'darkblue']

    this.bricks = []
    var rows
    if(level/3 <= 1) rows = 3
    else if(level/3 <= 2) rows = 4
    else if(level/3 <= 3) rows = 5
    else rows = 6

    for(var i = 50; i <= 50+(rows-1)*30; i+=30) {
      var color = colors[Math.floor(Math.random()*colors.length)]
      for(var j = 0; j <= 750; j+=50) {
        this.bricks.push(new Brick(j, i, 50, color, ball))
      }
    }

  }

  update() {
    var brokenBricks = 0
    this.bricks.forEach((brick, index) => {
      if(brick.update()) {
        this.bricks.splice(index, 1)
        brokenBricks++
      }
    })
    return {
      brokenBricks: brokenBricks,
      bricksRemaining: this.bricks.length
    }
  }

  render(ctx) {
    this.bricks.forEach((brick) => {
      brick.render(ctx)
    })
  }
}
