import * as THREE from 'three'

export const pointLight = new THREE.PointLight(0xffffff, 1, 100)
pointLight.position.set(3.5, 3, 3)
pointLight.castShadow = true

export const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.position.set(1, 1, 1)
directionalLight.castShadow = true
directionalLight.shadow.radius = 5

directionalLight.shadow.mapSize.width = 1024
directionalLight.shadow.mapSize.height = 1024