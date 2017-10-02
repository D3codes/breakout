export default class Brick {
  constructor(x, y, width, color, ball) {
    this.x = x
    this.y = y
    this.width = width
    this.color = color
    this.ball = ball
  }

  update() {
    //Check if ball hit brick from bottom or top
    if(
      this.ball.x+this.ball.dx-10 >= this.x &&
      this.ball.x+this.ball.dx+10 <= this.x+this.width &&
      ((this.ball.y > this.y+30 && this.ball.y+this.ball.dy <= this.y+30) ||
      (this.ball.y < this.y && this.ball.y+this.ball.dy >= this.y))
    ) {
      this.ball.dy = -this.ball.dy
      return true
    }

    //Check if ball hit brick from left or right
    if(
      this.ball.y+this.ball.dy >= this.y &&
      this.ball.y+this.ball.dy <= this.y+30 &&
      ((this.ball.x < this.x && this.ball.x+this.ball.dx >= this.x) ||
      (this.ball.x > this.x+this.width && this.ball.x+this.ball.dx <= this.x+this.width))
    ) {
      this.ball.dx = -this.ball.dx
      return true
    }

    //Checkif ball hit corner of brick
    if(
      (
        this.ball.y >= this.y &&
        this.ball.y <= this.y+30 &&
        this.ball.x >= this.x &&
        this.ball.x <= this.x+this.width
      ) || (
        this.ball.y+this.ball.dy >= this.y &&
        this.ball.y+this.ball.dy <= this.y+30 &&
        this.ball.x+this.ball.dx >= this.x &&
        this.ball.x+this.ball.dx <= this.x+this.width
      )
    ) {
      this.ball.dy = -this.ball.dy
      return true
    }

    return false
  }

  render(ctx) {
    ctx.save()
    ctx.fillStyle = this.color
    ctx.fillRect(this.x+2, this.y+2, this.width-2, 28)
    ctx.restore()
  }
}
