import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function BadgeEarth3D({ className = "" }) {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lighting optimized for badge cards
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight1.position.set(3, 3, 3);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-3, -3, -3);
    scene.add(directionalLight2);

    // Blue environmental lighting for recycling theme
    const pointLight = new THREE.PointLight(0x3b82f6, 0.6, 8);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    camera.position.z = 1.5; // Closer for badge card
    camera.position.x = -0.01;
    camera.position.y = 0.01;

    // Load Earth model
    const loader = new GLTFLoader();
    loader.load(
      "/models/planet_earth.glb",
      (gltf) => {
        const model = gltf.scene;

        // Center and scale model for badge card
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 1.2 / maxDim; // Smaller scale for badge card
        model.scale.multiplyScalar(scale);

        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale;
        model.position.z = -center.z * scale;

        // Add gentle rotation animation
        model.userData = { rotationSpeed: 0.005 };

        scene.add(model);
        setLoading(false);
      },
      (progress) => {
        // Loading progress
      },
      (error) => {
        console.error("Error loading Earth model:", error);
        setError("Failed to load Earth model");
        setLoading(false);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the Earth model
      scene.traverse((child) => {
        if (child.userData.rotationSpeed) {
          child.rotation.y += child.userData.rotationSpeed;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl">🌍</div>
        </div>
      )}
    </div>
  );
}
