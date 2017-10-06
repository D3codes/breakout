export default class Paddle {
  constructor(x, ball) {
    this.x = this.startingX = x
    this.width = 100
    this.direction = undefined
    this.ball = ball

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    window.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('keyup', this.handleKeyUp)

    this.hit = new Audio('paddle.wav')
  }

  update() {
    //Check if ball hit top of paddle
    if(
      this.ball.y+10 >= 750 &&
      this.ball.y+10 <= 760 &&
      this.ball.x > this.x &&
      this.ball.x < this.x+this.width
    ) {
      this.hit.play()
      if(this.direction) this.ball.dy = -2
      else this.ball.dy = -1
    }

    //Move paddle
    if(this.direction) {
      if(this.direction === 'right' && this.x < 700) this.x+=2
      else if(this.direction === 'left' && this.x > 0) this.x-=2
    }
  }

  render(ctx) {
    ctx.save()
    ctx.fillStyle = 'white'
    ctx.fillRect(this.x, 750, this.width, 10)
    ctx.restore()
  }

  handleKeyDown(event) {
    event.preventDefault()
    switch(event.key) {
      case 'a':
      case 'ArrowLeft':
        this.direction = 'left'
        break
      case 'd':
      case 'ArrowRight':
        this.direction = 'right'
        break
      default:
    }
  }

  handleKeyUp(event) {
    event.preventDefault()
    this.direction = undefined
  }

  reset() {
    this.x = this.startingX
  }
}
