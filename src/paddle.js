export default class Paddle {
  constructor(x) {
    this.x = x
    this.width = 100
    this.direction = undefined

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    window.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('keyup', this.handleKeyUp)
  }

  update() {
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
    }
  }

  handleKeyUp(event) {
    event.preventDefault()
    this.direction = undefined
  }
}
