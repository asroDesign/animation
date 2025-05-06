<script setup>
import * as THREE from 'three';
import { ref, onMounted } from 'vue';

const props = defineProps({
  video_url:String
})
const canvasRef = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // ایجاد ویدئو به‌عنوان تکسچر
  const video = document.createElement('video');
  video.src = props.video_url //'/videos/sample.webm';
  video.loop = true;
  video.muted = true;
  video.play();

  const videoTexture = new THREE.VideoTexture(video);
  const geometry = new THREE.PlaneGeometry(16, 9);
  const material = new THREE.MeshBasicMaterial({ map: videoTexture });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  camera.position.z = 10;

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
});
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>