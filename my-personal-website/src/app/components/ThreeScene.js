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
    renderer.shadowMap.enabled = true; // Enable shadow maps
    currentMount.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Set higher intensity
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Increased intensity
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true; // Enable shadows for the light
    directionalLight.shadow.mapSize.width = 1024; // Shadow map resolution
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Character model (simple geometry for now)
    const characterGeometry = new THREE.BoxGeometry(1, 2, 1);
    const characterMaterial = new THREE.MeshStandardMaterial({ color: 0xffcc99 });
    const character = new THREE.Mesh(characterGeometry, characterMaterial);
    character.position.set(0, 1, 0);
    character.castShadow = true;
    scene.add(character);

    // Add trees
    const createTree = (x, z) => {
      const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 32);
      const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.set(x, 1, z);
      trunk.castShadow = true;
      trunk.receiveShadow = true;

      const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

      // Create multiple spheres for leaves
      const leavesGeometry1 = new THREE.SphereGeometry(1, 32, 32);
      const leaves1 = new THREE.Mesh(leavesGeometry1, leavesMaterial);
      leaves1.position.set(x, 2.5, z);
      leaves1.castShadow = true;
      leaves1.receiveShadow = true;

      const leavesGeometry2 = new THREE.SphereGeometry(0.8, 32, 32);
      const leaves2 = new THREE.Mesh(leavesGeometry2, leavesMaterial);
      leaves2.position.set(x - 0.5, 3, z - 0.5);
      leaves2.castShadow = true;
      leaves2.receiveShadow = true;

      const leavesGeometry3 = new THREE.SphereGeometry(0.8, 32, 32);
      const leaves3 = new THREE.Mesh(leavesGeometry3, leavesMaterial);
      leaves3.position.set(x + 0.5, 3, z + 0.5);
      leaves3.castShadow = true;
      leaves3.receiveShadow = true;

      scene.add(trunk);
      scene.add(leaves1);
      scene.add(leaves2);
      scene.add(leaves3);
    };

    // Clear area around the character
    for (let i = -10; i <= 10; i += 5) {
      for (let j = -10; j <= 10; j += 5) {
        if (Math.abs(i) > 2 && Math.abs(j) > 2) {
          createTree(i, j);
        }
      }
    }

    // Add interactive items (e.g., tents, campfire)
    const interactiveItems = [];

    const createInteractiveItem = (x, z, name) => {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      const item = new THREE.Mesh(geometry, material);
      item.position.set(x, 0.5, z);
      item.name = name;
      item.castShadow = true;
      item.receiveShadow = true;
      scene.add(item);
      interactiveItems.push(item);
    };

    createInteractiveItem(5, 5, 'Tent');
    createInteractiveItem(-5, -5, 'Campfire');

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
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

    // Handle mouse click
    const handleClick = (event) => {
      event.preventDefault();

      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(interactiveItems);

      if (intersects.length > 0) {
        const item = intersects[0].object;
        alert(`You clicked on: ${item.name}`);
      }
    };
    window.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;

