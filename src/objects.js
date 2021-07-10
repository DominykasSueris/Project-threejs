import * as THREE from 'three'
import * as TEXTURES from './textures.js'

const concreteSphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const concreteSphereMaterial = new THREE.MeshStandardMaterial({
    map: TEXTURES.concreteBall,
    normalMap: TEXTURES.concreteBallNormalMap,
    displacementMap: TEXTURES.concreteBallDisplacementMap,
    displacementScale: 0.02
})

export const concreteSphere = new THREE.Mesh(concreteSphereGeometry, concreteSphereMaterial);
concreteSphere.position.y = 0.5
concreteSphere.castShadow = true

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({
    map: TEXTURES.meshBox,
    normalMap: TEXTURES.meshBoxlNormalMap,
    metalnessMap: TEXTURES.meshBoxMetalnessMap,
    displacementMap: TEXTURES.meshBoxDisplacementMap
})

const boxNumberOne = new THREE.Mesh(geometry, material)
boxNumberOne.position.set(2, 0.5, -2.5)

const boxNumberTwo = new THREE.Mesh(geometry, material)
boxNumberTwo.position.set(-3, 0.5, 2.5)

const boxNumberThree = new THREE.Mesh(geometry, material)
boxNumberThree.position.set(4, 0.5, 6)

export const boxGroup = new THREE.Group()
boxGroup.add(boxNumberOne, boxNumberTwo, boxNumberThree)

boxNumberOne.castShadow = true
boxNumberTwo.castShadow = true
boxNumberThree.castShadow = true

const planeGeometry = new THREE.PlaneGeometry(35, 35)
export const planeMaterial = new THREE.MeshStandardMaterial({
    map: TEXTURES.floor,
    normalMap: TEXTURES.floorNormalMap,
    roughnessMap: TEXTURES.floorRoughnesssMap,
    displacementMap: TEXTURES.floorDisplacementMap,
    displacementScale: 0.1
})

export const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.position.y = 0
plane.rotation.x = -Math.PI / 2
plane.receiveShadow = true
plane.metalness = 0.7
plane.roughness = 0.2

const amountOfStars = 300
const starsGeometry = new THREE.BufferGeometry()
const starsPosition = new Float32Array(amountOfStars * 3)

for (let i = 0; i < amountOfStars; i++) {

    const i3 = i * 3
        //x
    starsPosition[i3 + 0] = (Math.random() - 0.5) * 15
        //y
    starsPosition[i3 + 1] = (Math.random() + 0.1) * 15
        //z
    starsPosition[i3 + 2] = (Math.random() - 0.5) * 15
}

starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPosition, 3))

const starsMaterial = new THREE.PointsMaterial({
    map: TEXTURES.starsTexture,
    color: 'white',
    size: 0.7,
    sizeAttenuation: true
})

export const stars = new THREE.Points(starsGeometry, starsMaterial)
starsMaterial.transparent = true
starsMaterial.alphaMap = TEXTURES.starsTexture
starsMaterial.blending = THREE.AdditiveBlending