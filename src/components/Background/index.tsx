import { useEffect } from 'react'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

import './index.scss'

export default function CanvasBackground() {
  // let frames = 0;
  // let currentTime = Date.now();

  useEffect(() => {
    // Setting up a scene
    const scene = new THREE.Scene()

    const container = document.getElementById('background')!
    const canvas = document.getElementById('canvas')!

    const camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      100
    )

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.offsetWidth, container.offsetHeight)
    camera.position.setZ(30)

    renderer.render(scene, camera)

    window.addEventListener('resize', onWindowResize, false)

    function onWindowResize() {
      camera.aspect = container.offsetWidth / container.offsetHeight
      camera.updateProjectionMatrix()

      renderer.setSize(container.offsetWidth, container.offsetHeight)
    }

    // Setting up an object
    const donut = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshStandardMaterial({
      color: 0xff6347,
    })
    const torus = new THREE.Mesh(donut, material)

    scene.add(torus)

    // Lights
    const ambientLight = new THREE.AmbientLight(0x555555)

    scene.add(ambientLight)

    // Helpers
    const gridHelper = new THREE.GridHelper(200, 50)
    scene.add(gridHelper)

    const controls = new OrbitControls(camera, renderer.domElement)

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24)
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
      const star = new THREE.Mesh(geometry, material)
      const [x, y, z] = Array(3)
        .fill(0)
        .map(() => THREE.MathUtils.randFloatSpread(100))

      star.position.set(x, y, z)
      scene.add(star)
    }

    Array(200).fill(0).forEach(addStar)

    const spaceBackground = new THREE.TextureLoader().load('sata_antagi.png')
    scene.background = spaceBackground

    // Update the scene with every frame update, in an infinite loop
    function animate() {
      requestAnimationFrame(animate)

      torus.rotation.x += 0.003
      torus.rotation.y += 0.002
      torus.rotation.z += 0.001

      controls.update()

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
