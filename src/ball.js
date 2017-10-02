export default class Ball {
  constructor(x, y, dx, dy) {
    this.x = this.startingX = x
    this.y = this.startingY = y
    this.dx = this.startingDX = dx
    this.dy = this.startingDY = dy
  }

  update() {
    //Check if ball went out of bounds
    if(this.y >= 790) return false

    //Check if ball hit edge
    if(this.x >= 790 || this.x <= 10) this.dx = -this.dx
    if(this.y <= 10) this.dy = -this.dy

    //Update location of ball
    this.x += this.dx
    this.y += this.dy

    return true
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

  newBall() {
    this.x = this.startingX
    this.y = this.startingY
    this.dx = this.startingDX
    this.dy = this.startingDY
  }
}
