import { Renderer, Camera, Transform } from 'ogl'

class App {
  constructor() {
    this.createRenderer()
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true
    })

    this.gl = this.renderer.gl
    console.log('Renderer')
    document.body.append(this.gl.canvas)
  }
}

new App()

console.log('Working!')