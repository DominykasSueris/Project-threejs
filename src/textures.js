import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()
export const metalMaterial = new THREE.MeshMatcapMaterial({ matcap: textureLoader.load('textures/matcaps/metal.png') })
export const brownMaterial = new THREE.MeshMatcapMaterial({ matcap: textureLoader.load('textures/matcaps/brown.png') })
export const blueMaterial = new THREE.MeshMatcapMaterial({ matcap: textureLoader.load('textures/matcaps/blue.png') })
export const greenMaterial = new THREE.MeshMatcapMaterial({ matcap: textureLoader.load('textures/matcaps/green.png') })
export const redMaterial = new THREE.MeshMatcapMaterial({ matcap: textureLoader.load('textures/matcaps/red.png') })
export const concreteBall = textureLoader.load('textures/Concrete_001_COLOR.png')
export const concreteBallNormalMap = textureLoader.load('textures/Concrete_001_NRM.png')
export const concreteBallDisplacementMap = textureLoader.load('textures/Concrete_001_DISP.png')

export const starsTexture = textureLoader.load('textures/particles/star.png')

export const meshBox = textureLoader.load('textures/Metal_plate_001_COLOR.png')
export const meshBoxDisplacementMap = textureLoader.load('textures/Metal_plate_001_DISP.png')
export const meshBoxlNormalMap = textureLoader.load('textures/Metal_plate_001_NORM.png')
export const meshBoxMetalnessMap = textureLoader.load('textures/Metal_plate_001_SPEC.png')

export const floor = textureLoader.load('textures/Sand_002_COLOR.jpg')
export const floorDisplacementMap = textureLoader.load('textures/Sand_002_DISP.jpg')
export const floorNormalMap = textureLoader.load('textures/Sand_002_NRM.jpg')
export const floorRoughnesssMap = textureLoader.load('textures/Sand_002_SPEC.jpg')