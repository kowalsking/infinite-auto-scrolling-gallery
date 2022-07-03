import { Renderer, Camera, Transform } from 'ogl'
import './styles/index.css'

class App {
  constructor() {
    this.createRenderer()
    this.createCamera()
    this.createScene()

    this.onResize()

    this.update()

    this.addEventListeners()
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

  /**
   * Wheel.
   */

  onWheel() { }

  /**
   * Resize.
   */

  onResize() {
    this.screen = {
      height: window.innerHeight,
      width: window.innerWidth
    }

    this.renderer.setSize(this.screen.width, this.screen.height)

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height
    })

    const fov = this.camera.fov * (Math.PI / 180)
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect

    this.viewport = {
      height,
      width
    }
  }

  update() {
    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })

    window.requestAnimationFrame(this.update.bind(this))
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
    window.addEventListener('mousewheel', this.onWheel.bind(this))
    window.addEventListener('wheel', this.onWheel.bind(this))
  }
}

new App()
