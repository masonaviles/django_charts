import Chart from "chart.js/auto";
import gsap from "gsap";
import * as THREE from "three";
import Toastify from "toastify-js";

// Animate heading
gsap.from("h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

// Setup dark mode toggle
const html = document.getElementById("html-root");
const toggle = document.getElementById("theme-toggle");

function applyTheme() {
  const saved = localStorage.getItem("theme");
  if (
    saved === "dark" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

applyTheme();

toggle?.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Setup Three.js background canvas (optional)
const sceneContainer = document.createElement("div");
sceneContainer.style.position = "fixed";
sceneContainer.style.top = 0;
sceneContainer.style.left = 0;
sceneContainer.style.zIndex = -1;
sceneContainer.style.pointerEvents = "none";
sceneContainer.style.width = "100vw";
sceneContainer.style.height = "100vh";
document.body.appendChild(sceneContainer);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
sceneContainer.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
