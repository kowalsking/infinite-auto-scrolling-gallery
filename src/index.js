import { Renderer, Camera, Transform } from '../../ogl-master'

class App {
  constructor() {
    this.createRenderer()
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true
    })

    this.gl = this.renderer.gl
    document.body.append(this.gl.canvas)
  }
}

// new App()

console.log('Working!')