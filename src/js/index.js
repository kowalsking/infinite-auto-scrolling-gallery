import { Renderer, Camera, Transform, Plane } from 'ogl'
import '../styles/index.css'
import Media from './media.js'

class App {
  constructor() {
    this.createRenderer()
    this.createCamera()
    this.createScene()

    this.onResize()
    this.createMedias()

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
    this.camera.position.z = 5
  }

  createScene() {
    this.scene = new Transform()
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl)
  }

  createMedias() {
    this.mediasElements = document.querySelectorAll('.demo-1__gallery__figure')
    this.medias = Array.from(this.mediasElements).map(element => {
      let media = new Media({
        element,
        geometry: this.planeGeometry,
        gl: this.gl,
        scene: this.scene,
        screen: this.screen,
        viewport: this.viewport
      })

      return media
    })
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

    if (this.medias) {
      this.medias.forEach(media => media.onResize({
        screen: this.screen,
        viewport: this.viewport
      }))
    }
  }

  update() {
    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })

    if (this.medias) {
      this.medias.forEach(media => media.update())
    }

    window.requestAnimationFrame(this.update.bind(this))
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
    window.addEventListener('mousewheel', this.onWheel.bind(this))
    window.addEventListener('wheel', this.onWheel.bind(this))
  }
}

new App()
