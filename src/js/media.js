import { Mesh, Program, Texture } from 'ogl'

import fragment from '../shaders/fragment.glsl'
import vertex from '../shaders/vertex.glsl'

export default class {
  constructor({ element, geometry, gl, scene, screen, viewport }) {
    this.element = element
    this.image = this.element.querySelector('img')

    this.geometry = geometry
    this.gl = gl
    this.scene = scene
    this.screen = screen
    this.viewport = viewport

    this.createMesh()
    // this.createBounds()

    // this.onResize()
  }

  createMesh() {
    const image = new Image()
    const texture = new Texture(this.gl)

    image.src = this.image.src
    image.onload = _ => {
      texture.image = image
    }

    const program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        tMap: { value: texture },
        uScreenSizes: { value: [0, 0] },
        uImageSize: { value: [0, 0] }
      },
      transparent: true
    })

    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program
    })

    this.plane.setParent(this.scene)
  }

  onResize() { }

  update() { }
}