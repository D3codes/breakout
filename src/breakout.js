import Ball from './ball'
import Paddle from './paddle'
import Wall from './wall'

export default class Breakout {
  constructor() {
    this.level = 1
    this.score = 0
    this.lives = 3

    this.paddle = new Paddle(400)
    this.ball = new Ball(100, 400, 2, 2, this.paddle)
    this.wall = new Wall(this.level, this.ball)

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
    this.interval = setInterval(this.loop, 7)
  }

  update() {
    var outOfBounds = !this.ball.update()
    this.paddle.update()
    var bricks = this.wall.update()
    this.score += bricks.brokenBricks*10
    if(bricks.bricksRemaining === 0) {
      this.level++
      this.newLevel()
    }

    if(outOfBounds) {
      this.lives--
      if(this.lives < 0) this.gameOver = true
      else {
        this.ball.newBall()
      }
    }

    if(this.gameOver) {
      this.level = 1
      this.lives = 3
      this.score = 0
      this.gameOver = false
      this.newLevel()
    }
  }

  render() {
    this.backBufferContext.fillStyle = '#000'
    this.backBufferContext.fillRect(0, 0, 800, 800)

    this.ball.render(this.backBufferContext)
    this.paddle.render(this.backBufferContext)
    this.wall.render(this.backBufferContext)

    this.backBufferContext.fillStyle = 'white'
    this.backBufferContext.font = '20px Verdana'
    this.backBufferContext.fillText('Lives: ' + this.lives, 10, 25)
    this.backBufferContext.fillText('Score: ' + this.score, 355, 25)
    this.backBufferContext.fillText('Level: ' + this.level, 700, 25)

    this.screenBufferContext.drawImage(this.backBufferCanvas, 0, 0)
  }

  loop() {
    this.update()
    this.render()
  }

  newLevel() {
    this.ball = new Ball(100, 400, 2, 2, this.paddle)
    this.wall = new Wall(this.level, this.ball)
    this.paddle.reset()
  }
}
