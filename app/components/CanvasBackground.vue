<template>
	<div class="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
		<TresCanvas alpha window-size>
			<TresPerspectiveCamera
				ref="cameraRef"
				:position="[0, 1.6, 17]"
				:fov="42"
				:near="0.1"
				:far="1000"
			/>

			<TresAmbientLight :intensity="0.62" />
			<TresDirectionalLight :position="[6, 5, 4]" :intensity="1.35" color="#f0c66b" />
			<TresPointLight :position="[-5, -2, 8]" :intensity="0.9" color="#37d6a1" />

			<TresGroup ref="rigRef" :position="[2.8, -0.45, -4]">
				<TresMesh ref="coreRef">
					<TresTorusKnotGeometry :args="[2.25, 0.18, 180, 18]" />
					<TresMeshStandardMaterial
						color="#d8a23a"
						:metalness="0.82"
						:roughness="0.28"
						:transparent="true"
						:opacity="0.86"
					/>
				</TresMesh>

				<TresMesh ref="ringOneRef" :rotation="[1.18, 0.24, 0]">
					<TresTorusGeometry :args="[4.2, 0.018, 8, 180]" />
					<TresMeshBasicMaterial color="#37d6a1" :transparent="true" :opacity="0.42" />
				</TresMesh>

				<TresMesh ref="ringTwoRef" :rotation="[0.2, 1.08, 0.72]">
					<TresTorusGeometry :args="[5.25, 0.012, 8, 180]" />
					<TresMeshBasicMaterial color="#8b5cf6" :transparent="true" :opacity="0.34" />
				</TresMesh>

				<TresMesh ref="frameRef" :rotation="[0.6, 0.3, 0.2]">
					<TresOctahedronGeometry :args="[5.7, 0]" />
					<TresMeshBasicMaterial color="#38bdf8" wireframe :transparent="true" :opacity="0.15" />
				</TresMesh>
			</TresGroup>

			<TresPoints ref="pointsRef">
				<TresBufferGeometry :position="[fieldPositions, 3]" />
				<TresPointsMaterial
					:size="0.036"
					color="#dbe7ef"
					:transparent="true"
					:opacity="0.62"
				/>
			</TresPoints>
		</TresCanvas>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, shallowRef } from "vue";

const rigRef = shallowRef<any>(null);
const coreRef = shallowRef<any>(null);
const ringOneRef = shallowRef<any>(null);
const ringTwoRef = shallowRef<any>(null);
const frameRef = shallowRef<any>(null);
const pointsRef = shallowRef<any>(null);
const cameraRef = shallowRef<any>(null);

const pointerX = ref(0);
const pointerY = ref(0);
const smoothX = ref(0);
const smoothY = ref(0);
let animationFrameId: number | null = null;
let startTime = 0;

const onPointerMove = (event: PointerEvent) => {
	pointerX.value = (event.clientX / window.innerWidth) * 2 - 1;
	pointerY.value = -(event.clientY / window.innerHeight) * 2 + 1;
};

const particleCount = 950;
const fieldPositions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i += 1) {
	const offset = i * 3;
	const lane = (i % 19) - 9;
	const depth = Math.floor(i / 19) % 50;
	fieldPositions[offset] = lane * 1.25 + (Math.random() - 0.5) * 0.28;
	fieldPositions[offset + 1] = (Math.random() - 0.5) * 16;
	fieldPositions[offset + 2] = -depth * 0.72 + (Math.random() - 0.5) * 0.42;
}

const animate = (timestamp: number) => {
	const elapsed = (timestamp - startTime) / 1000;

	smoothX.value += (pointerX.value - smoothX.value) * 0.055;
	smoothY.value += (pointerY.value - smoothY.value) * 0.055;

	if (rigRef.value?.rotation) {
		rigRef.value.rotation.x = smoothY.value * 0.12;
		rigRef.value.rotation.y = elapsed * 0.055 + smoothX.value * 0.22;
		rigRef.value.position.x = 2.8 + smoothX.value * 0.5;
		rigRef.value.position.y = -0.45 + smoothY.value * 0.28;
	}

	if (coreRef.value?.rotation) {
		coreRef.value.rotation.x = elapsed * 0.22;
		coreRef.value.rotation.y = elapsed * 0.18;
	}

	if (ringOneRef.value?.rotation) {
		ringOneRef.value.rotation.z = elapsed * 0.11;
	}

	if (ringTwoRef.value?.rotation) {
		ringTwoRef.value.rotation.z = -elapsed * 0.08;
	}

	if (frameRef.value?.rotation) {
		frameRef.value.rotation.x = 0.6 + elapsed * 0.035;
		frameRef.value.rotation.y = 0.3 + elapsed * 0.045;
	}

	if (pointsRef.value?.rotation) {
		pointsRef.value.rotation.y = -0.12 + smoothX.value * 0.025;
		pointsRef.value.position.z = (elapsed * 0.36) % 2;
	}

	if (cameraRef.value?.position && typeof cameraRef.value.lookAt === "function") {
		cameraRef.value.position.x = smoothX.value * 0.55;
		cameraRef.value.position.y = 1.6 + smoothY.value * 0.36;
		cameraRef.value.lookAt(0, 0, -4);
	}

	animationFrameId = window.requestAnimationFrame(animate);
};

onMounted(() => {
	startTime = performance.now();
	window.addEventListener("pointermove", onPointerMove, { passive: true });
	animationFrameId = window.requestAnimationFrame(animate);
});

onUnmounted(() => {
	window.removeEventListener("pointermove", onPointerMove);

	if (animationFrameId !== null) {
		window.cancelAnimationFrame(animationFrameId);
	}
});
</script>
