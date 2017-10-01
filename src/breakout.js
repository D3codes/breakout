import Ball from './ball'
import Paddle from './paddle'
import Brick from './brick'

export default class Breakout {
  constructor() {
    this.level = 1
    this.score = 0
    this.lives = 3

    this.paddle = new Paddle(400)
    this.ball = new Ball(400, 600, 2, 2, this.paddle)
    this.bricks = []
    var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple',
    'lightblue', 'pink', 'lightgreen', 'darkblue']
    for(var i = 50; i <= 110; i+=30) {
      var color = colors[Math.floor(Math.random()*colors.length)]
      for(var j = 0; j <= 750; j+=50) {
        this.bricks.push(new Brick(j, i, 50, color))
      }
    }
    //Create the back buffer canvas
    this.backBufferCanvas = document.createElement('canvas')
    this.backBufferCanvas.width = 800
    this.backBufferCanvas.height = 800
    this.backBufferContext = this.backBufferCanvas.getContext('2d')
    //Create the screen buffer canvas
    this.screenBufferCanvas = document.createElement('canvas')
    this.screenBufferCanvas.width = 800
    this.screenBufferCanvas.height = 800
    document.body.appendChild(this.screenBufferCanvas)
    this.screenBufferContext = this.screenBufferCanvas.getContext('2d')
    //Bind class functions
    this.update = this.update.bind(this)
    this.render = this.render.bind(this)
    this.loop = this.loop.bind(this)
    //Start the game loop
    this.interval = setInterval(this.loop, 10)
  }

  update() {
    this.ball.update()
    this.paddle.update()
    this.bricks.forEach((brick) => {
      brick.update()
    })
  }

  render() {
    this.backBufferContext.fillStyle = '#000'
    this.backBufferContext.fillRect(0, 0, 800, 800)

    this.ball.render(this.backBufferContext)
    this.paddle.render(this.backBufferContext)
    this.bricks.forEach((brick) => {
      brick.render(this.backBufferContext)
    })

    this.screenBufferContext.drawImage(this.backBufferCanvas, 0, 0)
  }

  loop() {
    this.update()
    this.render()
  }
}
