import { Renderer, Camera, Transform } from 'ogl'
import './styles/index.css'

class App {
  constructor() {
    this.createRenderer()
    this.createCamera()

    this.createScene()
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true
    })

    this.gl = this.renderer.gl
    document.body.append(this.gl.canvas)
  }

  createCamera() {
    this.camera = new Camera(this.gl)
    this.camera.fov = 45
    this.camera.z = 5
  }

  createScene() {
    this.scene = new Transform()
  }
}

new App()
