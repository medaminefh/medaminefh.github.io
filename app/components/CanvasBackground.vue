<template>
	<div class="fixed inset-0 z-0 pointer-events-auto overflow-hidden">
		<!-- Use windowSize to automatically adjust to screen -->
		<TresCanvas alpha window-size>
			<TresPerspectiveCamera
				:position="[0, 0, 15]"
				:fov="45"
				:near="0.1"
				:far="1000"
				ref="cameraRef"
			/>

			<TresScene>
				<TresAmbientLight :intensity="0.5" />
				<TresDirectionalLight
					:position="[5, 5, 5]"
					:intensity="1"
					color="#a5b4fc"
				/>

				<!-- Icosahedron for a cool geometric shape -->
				<TresMesh ref="shapeRef">
					<TresIcosahedronGeometry :args="[4, 1]" />
					<TresMeshStandardMaterial
						color="#3730a3"
						wireframe
						:transparent="true"
						:opacity="0.3"
					/>
				</TresMesh>

				<TresMesh ref="innerShapeRef">
					<TresIcosahedronGeometry :args="[3, 0]" />
					<TresMeshStandardMaterial
						color="#4f46e5"
						:metalness="0.8"
						:roughness="0.2"
						flatShading
					/>
				</TresMesh>

				<!-- Stars/Particles in background -->
				<TresPoints ref="pointsRef">
					<TresBufferGeometry :position="[particlesPosition, 3]" />
					<TresPointsMaterial
						:size="0.05"
						color="#a5b4fc"
						:transparent="true"
						:opacity="0.8"
					/>
				</TresPoints>
			</TresScene>
		</TresCanvas>
	</div>
</template>

<script setup lang="ts">
import { ref, shallowRef, onMounted, onUnmounted } from "vue";
import { useRenderLoop } from "@tresjs/core";

const shapeRef = shallowRef(null);
const innerShapeRef = shallowRef(null);
const pointsRef = shallowRef(null);
const cameraRef = shallowRef(null);

// Mouse tracking
const mouseX = ref(0);
const mouseY = ref(0);
const targetX = ref(0);
const targetY = ref(0);

const onMouseMove = (event: MouseEvent) => {
	mouseX.value = (event.clientX / window.innerWidth) * 2 - 1;
	mouseY.value = -(event.clientY / window.innerHeight) * 2 + 1;
};

onMounted(() => {
	window.addEventListener("mousemove", onMouseMove);
});

onUnmounted(() => {
	window.removeEventListener("mousemove", onMouseMove);
});

// Create random particles
const particleCount = 1500;
const particlesPosition = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
	particlesPosition[i] = (Math.random() - 0.5) * 40;
}

const { onLoop } = useRenderLoop();

onLoop(({ elapsed }) => {
	// Smooth mouse interpolation
	targetX.value = targetX.value + (mouseX.value - targetX.value) * 0.05;
	targetY.value = targetY.value + (mouseY.value - targetY.value) * 0.05;

	if (shapeRef.value && shapeRef.value.rotation) {
		shapeRef.value.rotation.x = elapsed * 0.1 + targetY.value * 0.5;
		shapeRef.value.rotation.y = elapsed * 0.2 + targetX.value * 0.5;
	}

	if (innerShapeRef.value && innerShapeRef.value.rotation) {
		innerShapeRef.value.rotation.x = -elapsed * 0.15;
		innerShapeRef.value.rotation.y = -elapsed * 0.25;
	}

	if (pointsRef.value && pointsRef.value.rotation) {
		pointsRef.value.rotation.y = elapsed * 0.03;
		pointsRef.value.rotation.x = elapsed * 0.02;
	}

	if (cameraRef.value && cameraRef.value.position) {
		cameraRef.value.position.x = targetX.value * 2;
		cameraRef.value.position.y = targetY.value * 2;
		if (typeof cameraRef.value.lookAt === "function") {
			cameraRef.value.lookAt(0, 0, 0);
		}
	}
});
</script>
