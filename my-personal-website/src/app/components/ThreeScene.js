import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Trees
    const createTree = (x, z) => {
      const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2);
      const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.set(x, 1, z);

      const leavesGeometry = new THREE.SphereGeometry(1, 8, 8);
      const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
      leaves.position.set(x, 2.5, z);

      scene.add(trunk);
      scene.add(leaves);
    };

    for (let i = -10; i <= 10; i += 5) {
      for (let j = -10; j <= 10; j += 5) {
        createTree(i, j);
      }
    }

    // Earth with texture
    const earthGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/earth.jpg'),
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(0, 3, 0);
    scene.add(earth);

    // Clouds
    const cloudsGeometry = new THREE.SphereGeometry(1.55, 32, 32);
    const cloudsMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/earthcloudmaptrans.jpg'),
      transparent: true,
    });
    const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    clouds.position.set(0, 3, 0);
    scene.add(clouds);

    // Mountains (using GLTFLoader to load a model)
    const loader = new GLTFLoader();
    loader.load('https://threejsfundamentals.org/threejs/resources/models/mountains/scene.gltf', (gltf) => {
      const model = gltf.scene;
      model.scale.set(5, 5, 5);
      model.position.set(-5, 0, -5);
      scene.add(model);
    });

    // Water (using simple plane with texture)
    const waterGeometry = new THREE.PlaneGeometry(100, 100);
    const waterMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e90ff,
      opacity: 0.6,
      transparent: true,
    });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -1;
    scene.add(water);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.001;
      clouds.rotation.y += 0.0015;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
