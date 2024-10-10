import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const light = new THREE.DirectionalLight(0xCAE8FF, 1);
light.position.set(5, 15, 5).normalize();
scene.add(light);


function createMaterial(color) {
  return new THREE.MeshStandardMaterial({ color });
}

// Floor
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = createMaterial(0xF5D28B ); 
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Walls
const wallMaterial = createMaterial(0xffffff); 

const backWall = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 0.1), wallMaterial);
backWall.position.set(0, 5, -10);
scene.add(backWall);

const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, 10, 20), wallMaterial);
leftWall.position.set(-10, 5, 0);
scene.add(leftWall);


// Elevated Bed
const bedFrameGeometry = new THREE.BoxGeometry(10, 0.5, 10);
const bedFrameMaterial = createMaterial(0xFFFFFF); 
const bedFrame = new THREE.Mesh(bedFrameGeometry, bedFrameMaterial);
bedFrame.position.set(-5, 5, -7);
scene.add(bedFrame);

// Bed Mattress
const mattGeometry = new THREE.BoxGeometry(8.75, 0.4, 8.75);
const mattMaterial = createMaterial(0x424278); 
const matt = new THREE.Mesh(mattGeometry, mattMaterial);
matt.position.set(-5, 5.25, -7);
scene.add(matt);

//Bed Pillar
const pillarGeometry = new THREE.BoxGeometry(0.75, 6, 0.75);
const pillarMaterial = createMaterial(0xFFFFFF); 
const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
pillar.position.set(-0.5, 2, -2.5);
scene.add(pillar);

//Ladder1
const lad1Geometry = new THREE.BoxGeometry(4, 1, 0.5);
const lad1Material = createMaterial(0xFFFFFF); 
const lad1 = new THREE.Mesh(lad1Geometry, lad1Material);
lad1.position.set(-6, 5, -1);
scene.add(lad1);

//Ladder2
const lad2Geometry = new THREE.BoxGeometry(4, 1, 0.5);
const lad2Material = createMaterial(0xFFFFFF); 
const lad2 = new THREE.Mesh(lad2Geometry, lad2Material);
lad2.position.set(-6, 1, -1);
scene.add(lad2);

//Ladder3
const lad3Geometry = new THREE.BoxGeometry(4, 1, 0.5);
const lad3Material = createMaterial(0xFFFFFF); 
const lad3 = new THREE.Mesh(lad3Geometry, lad3Material);
lad3.position.set(-6, 3, -1);
scene.add(lad3);

//Under Bed Carpet
const carpetGeometry = new THREE.BoxGeometry(10, 0.4, 10);
const carpetMaterial = createMaterial(0x3E3E3E); 
const carpet = new THREE.Mesh(carpetGeometry, carpetMaterial);
carpet.position.set(-5, 0.01, -7);
scene.add(carpet);

// Pillow left
const pillowGeometry = new THREE.BoxGeometry(4, 0.2, 2);
const pillowMaterial = createMaterial(0x1B1CB2); 
const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillow.position.set(-7.25, 5.5, -8.3);
scene.add(pillow);

// Pillow right
const pillow2Geometry = new THREE.BoxGeometry(4, 0.2, 2);
const pillow2Material = createMaterial(0x1B1CB2); 
const pillow2 = new THREE.Mesh(pillow2Geometry, pillow2Material);
pillow2.position.set(-2.75, 5.5, -8.3);
scene.add(pillow2);

//drawer
const drawerGeometry = new THREE.BoxGeometry(7, 4, 2);
const drawerMaterial = createMaterial(0x442100); 
const drawer = new THREE.Mesh(drawerGeometry, drawerMaterial);
drawer.position.set(-5.25, 1, -9.3);
scene.add(drawer);

//deskleg1
const desklgGeometry = new THREE.BoxGeometry(0.75, 4, 3);
const desklgMaterial = createMaterial(0xFFFFFF); 
const desklg = new THREE.Mesh(desklgGeometry, desklgMaterial);
desklg.position.set(2, 1, -9.3);
scene.add(desklg);

//deskleg2
const desklg2Geometry = new THREE.BoxGeometry(0.75, 4, 3);
const desklg2Material = createMaterial(0xFFFFFF); 
const desklg2 = new THREE.Mesh(desklg2Geometry, desklg2Material);
desklg2.position.set(8, 1, -9.3);
scene.add(desklg2);

//desktable
const desktblGeometry = new THREE.BoxGeometry(6, 0.75, 3);
const desktblMaterial = createMaterial(0x442100); 
const desktbl = new THREE.Mesh(desktblGeometry, desktblMaterial);
desktbl.position.set(5, 2 , -9.4);
scene.add(desktbl);

//desktable area carpet
const deskcarpetGeometry = new THREE.BoxGeometry(5, 0.4, 5);
const deskcarpetMaterial = createMaterial(0x3E3E3E); 
const deskcarpet = new THREE.Mesh(deskcarpetGeometry, deskcarpetMaterial);
deskcarpet.position.set(5, 0.01, -6);
scene.add(deskcarpet);

//chair base
const chairGeometry = new THREE.BoxGeometry(2, 3, 2);
const chairMaterial = createMaterial(0x424278); 
const chair = new THREE.Mesh(chairGeometry, chairMaterial);
chair.position.set(5, 0.01, -6);
scene.add(chair);

//chair height
const chairhtGeometry = new THREE.BoxGeometry(2, 8, 0.5);
const chairhtMaterial = createMaterial(0x424278); 
const chairht = new THREE.Mesh(chairhtGeometry, chairhtMaterial);
chairht.position.set(5, 0.01, -4.75);
scene.add(chairht);

//PC
const pcGeometry = new THREE.BoxGeometry(4, 2, 0.25);
const pcMaterial = createMaterial(0x000000);
const pc = new THREE.Mesh(pcGeometry, pcMaterial);
pc.position.set(6.1, 5, -7);
scene.add(pc);

//color of the wall of the desk
const clrwllGeometry = new THREE.BoxGeometry(10, 12, 1.65);
const clrwllMaterial = createMaterial(0x444444);
const clrwll = new THREE.Mesh(clrwllGeometry, clrwllMaterial);
clrwll.position.set(5.1, 4.2, -10.75);
scene.add(clrwll);

//Backdrop
const backGeometry = new THREE.BoxGeometry(7, 5, 2);
const backMaterial = createMaterial(0x1B1CB2);
const back = new THREE.Mesh(backGeometry, backMaterial);
back.position.set(5, 5.5, -10.75);
scene.add(back);

//Window2
const wind2Geometry = new THREE.BoxGeometry(2, 5, 7);
const wind2Material = createMaterial(0xB8F2F2);
const wind2 = new THREE.Mesh(wind2Geometry, wind2Material);
wind2.position.set(-10.75, 5.5, 5 );
scene.add(wind2);

//path carpet
const pathcarpetGeometry = new THREE.BoxGeometry(15, 0.4, 5);
const pathcarpetMaterial = createMaterial(0x3E3E3E);
const pathcarpet = new THREE.Mesh(pathcarpetGeometry, pathcarpetMaterial);
pathcarpet.position.set(1, 0.01, 5);
scene.add(pathcarpet);



// Animate and render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Set the camera position
camera.position.z = 15;
camera.position.y = 15;
camera.position.x = 15;
camera.lookAt(0, 0, 0);



animate();
