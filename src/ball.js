export default class Ball {
  constructor(x, y, dx, dy, paddle) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.paddle = paddle
  }

  update() {
    if(this.x >= 790 || this.x <= 10) this.dx = -this.dx
    if(this.y <= 10) this.dy = -this.dy

    if(
      this.y+5 >= 750 &&
      this.y < 760 &&
      this.x > this.paddle.x &&
      this.x < this.paddle.x + this.paddle.width
    ) {
      if(this.paddle.direction) this.dy = -4
      else this.dy = -2
    }

    if(this.y >= 790) {
      //GAMEOVER
    }

    this.x += this.dx
    this.y += this.dy
  }

  render(ctx) {
    ctx.save()
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 10, 0, Math.PI*2)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }
}
