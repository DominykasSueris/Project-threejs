import './style.css'
import * as TEXTURES from './textures.js'
import * as OBJECTS from './objects.js'
import * as LIGHTS from './lights.js'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'

const gui = new dat.GUI()
const scene = new THREE.Scene()
const canvas = document.querySelector('canvas.webgl')

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(1.5, 1.5, 3)
scene.add(camera)

const controls = new OrbitControls(camera, canvas);

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {

    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

const backgroundFog = new THREE.Fog('black', 5, 15)
scene.fog = backgroundFog

scene.add(LIGHTS.pointLight)
scene.add(LIGHTS.directionalLight)
gui.add(LIGHTS.directionalLight, 'intensity').min(0).max(4).step(0.02)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true

scene.add(OBJECTS.stars)
scene.add(OBJECTS.concreteSphere)
scene.add(OBJECTS.boxGroup)
scene.add(OBJECTS.plane)
gui.add(OBJECTS.planeMaterial, 'metalness').min(0).max(1).step(0.001)

const fontLoader = new THREE.FontLoader()
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const titleJavaScript = new THREE.Mesh(createTextGeometry('Javascript Three.js', font), TEXTURES.metalMaterial)
        titleJavaScript.name = 'JavaScriptThreeJsText'
        titleJavaScript.position.set(2, 0, 0)
        titleJavaScript.rotation.set(4.7, 6.28, 5.56)
        titleJavaScript.castShadow = true
        scene.add(titleJavaScript)

        const titleHtmlCss = new THREE.Mesh(createTextGeometry('Html Css', font), TEXTURES.metalMaterial)
        titleHtmlCss.name = 'HtmlCss'
        titleHtmlCss.position.set(-4, 0, -2)
        titleHtmlCss.castShadow = true
        scene.add(titleHtmlCss)
    }
)

const createTextGeometry = (text, font) => {
    return new THREE.TextGeometry(text, {
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 15,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
    })
}

const availableMaterials = [TEXTURES.metalMaterial, TEXTURES.blueMaterial, TEXTURES.brownMaterial, TEXTURES.greenMaterial, TEXTURES.redMaterial]

document.getElementById('buttonColor').addEventListener('click', (e) => {
    const textMeshOne = scene.getObjectByName('HtmlCss')
    const textMeshTwo = scene.getObjectByName('JavaScriptThreeJsText')
    textMeshOne.material = availableMaterials[(availableMaterials.indexOf(textMeshOne.material) + 1) % availableMaterials.length]
    textMeshTwo.material = availableMaterials[(availableMaterials.indexOf(textMeshTwo.material) + 1) % availableMaterials.length]
})

const clock = new THREE.Clock()

const click = () => {

    const elapsedTime = clock.getElapsedTime()

    const pointLightAngle = elapsedTime * 0.5
    LIGHTS.pointLight.position.y = Math.cos(pointLightAngle) * 2

    const starsAngle = elapsedTime * 0.25
    OBJECTS.stars.rotation.y = (Math.PI * starsAngle) * 0.1

    requestAnimationFrame(click)

    controls.update()

    renderer.render(scene, camera)

}

click()