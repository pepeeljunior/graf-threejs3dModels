import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Escena, cámara y render
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometría
const geometry = new THREE.DodecahedronGeometry(1);

// 🟢 Verde (velocidad normal)
const shape1 = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
shape1.position.x = -2;
scene.add(shape1);

// 🔵 Azul (más rápido)
const shape2 = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0x0000ff })
);
scene.add(shape2);

// 🔴 Rojo (mucho más rápido)
const shape3 = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
shape3.position.x = 2;
scene.add(shape3);

// Luces
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(5, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// Cámara
camera.position.z = 6;

// 🎬 Animación con diferentes velocidades
function animate() {
    // 🟢 normal
    shape1.rotation.x += 0.01;
    shape1.rotation.y += 0.01;

    // 🔵 más rápido
    shape2.rotation.x += 0.03;
    shape2.rotation.y += 0.03;

    // 🔴 MUCHO más rápido
    shape3.rotation.x += 0.06;
    shape3.rotation.y += 0.06;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);