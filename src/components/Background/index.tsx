import { useEffect } from 'react'

import * as THREE from 'three'

import './index.scss'

export default function CanvasBackground() {
  // let frames = 0;
  // let currentTime = Date.now();

  useEffect(() => {
    const container = document.getElementById('background')!
    const canvas = document.getElementById('canvas')!

    // Setting up a scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x07000a)

    const camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      300
    )

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
    camera.position.setZ(2)

    renderer.render(scene, camera)

    window.addEventListener('resize', onWindowResize, false)

    function onWindowResize() {
      camera.aspect = container.offsetWidth / container.offsetHeight
      camera.updateProjectionMatrix()

      renderer.setSize(container.offsetWidth, container.offsetHeight)
    }

    let mouseX = 0
    let mouseY = 0

    document.addEventListener('mousemove', animateParticles)

    function animateParticles(event: globalThis.MouseEvent) {
      mouseY = window.innerHeight / 2 - event.clientY
      mouseX = window.innerWidth / 2 - event.clientX
    }

    // Setting up objects
    const staticTorusGeo = new THREE.TorusGeometry(0.7, 0.2, 16, 100)
    const staticTorusMaterial = new THREE.PointsMaterial({
      size: 0.005,
    })
    const staticTorus = new THREE.Points(staticTorusGeo, staticTorusMaterial)
    staticTorus.rotateY(10)

    const torusGeo = new THREE.TorusGeometry(0.7, 0.2, 16, 100)
    const torusMaterial = new THREE.PointsMaterial({
      color: 0x2f2f2f,
      size: 0.005,
    })
    const torus = new THREE.Points(torusGeo, torusMaterial)

    // Generating stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 5500
    const positionArray = new Float32Array(starsCount * 3)
    const colorArray = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 8
      colorArray[i] = Math.abs(Math.random() * 255)
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positionArray, 3)
    )
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.00001,
      color: 0x444444,
    })
    const stars = new THREE.Points(starsGeometry, starsMaterial)

    scene.add(staticTorus, torus, stars)

    // Update the scene with every frame update, in an infinite loop
    function animate() {
      requestAnimationFrame(animate)

      staticTorus.rotation.y += 0.0002
      staticTorus.rotation.x += 0.0001

      torus.rotation.x += 0.0005
      torus.rotation.y += 0.0002
      torus.rotation.z += 0.0005

      stars.rotation.x -= 0.00015
      stars.rotation.y += 0.00015
      stars.rotation.z -= 0.00015

      scene.rotateZ(0.0003)

      scene.rotateY(-mouseY * 0.000001)
      scene.rotateX(-mouseX * 0.0000005)

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return (
    <div id="background">
      <canvas id="canvas" />
    </div>
  )
}
