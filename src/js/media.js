import { Mesh, Program, Texture } from 'ogl'

import fragment from '../shaders/fragment.glsl'
import vertex from '../shaders/vertex.glsl'

export default class {
  constructor({ element, geometry, gl, scene, screen, viewport }) {
    this.element = element
    this.image = this.element.querySelector('img')

    console.log(this.image)
    this.geometry = geometry
    this.gl = gl
    this.scene = scene
    this.screen = screen
    this.viewport = viewport

    // this.createMesh()
    // this.createBounds()

    // this.onResize()
  }

  onResize() { }

  update() { }
}