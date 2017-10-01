export default class Brick {
  constructor(x, y, width, color) {
    this.x = x
    this.y = y
    this.width = width
    this.color = color
  }

  update() {

  }

  render(ctx) {
    ctx.save()
    ctx.fillStyle = this.color
    ctx.fillRect(this.x+2, this.y+2, this.width-2, 28)
    ctx.restore()
  }
}
