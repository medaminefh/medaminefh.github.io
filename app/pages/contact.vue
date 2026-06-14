<template>
	<div
		class="flex-1 w-full max-w-2xl mx-auto flex flex-col gap-10 animate-fade-in-up"
	>
		<div class="text-center mb-6">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
			<p class="text-gray-400 text-lg">
				Interested in collaborating? Drop me a message and let's discuss how we
				can work together.
			</p>
		</div>

		<div class="glass p-8">
			<form class="flex flex-col gap-6" @submit.prevent="submitForm">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="flex flex-col gap-2">
						<label for="name" class="text-sm font-medium text-gray-300"
							>Name</label
						>
						<input
							type="text"
							id="name"
							name="name"
							v-model="formData.name"
							required
							:disabled="isSubmitting"
							class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-50"
							placeholder="John Doe"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="email" class="text-sm font-medium text-gray-300"
							>Email</label
						>
						<input
							type="email"
							id="email"
							name="email"
							v-model="formData.email"
							required
							:disabled="isSubmitting"
							class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-50"
							placeholder="john@example.com"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<label for="message" class="text-sm font-medium text-gray-300"
						>Message</label
					>
					<textarea
						id="message"
						name="message"
						v-model="formData.message"
						rows="5"
						required
						:disabled="isSubmitting"
						class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
						placeholder="Tell me about your project..."
					></textarea>
				</div>

				<!-- Google reCAPTCHA v2 Widget -->
				<div class="flex justify-center my-2">
					<div
						id="recaptcha-widget"
						class="g-recaptcha"
						data-sitekey="6LeNth4tAAAAABwn-m9oXOaJetBZJ65AcdJggv-T"
						data-theme="dark"
						data-callback="onCaptchaVerified"
						data-expired-callback="onCaptchaExpired"
					></div>
				</div>

				<button
					type="submit"
					:disabled="isSubmitting || !isVerified"
					class="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
				>
					<svg
						v-if="isSubmitting"
						class="animate-spin h-5 w-5 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					{{ isSubmitting ? "Sending..." : "Send Message" }}
				</button>

				<div
					v-if="submitStatus === 'success'"
					class="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center text-sm"
				>
					Message sent successfully! I will get back to you as soon as possible.
				</div>

				<div
					v-if="submitStatus === 'error'"
					class="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-center text-sm"
				>
					Oops! There was a problem submitting your form. Please try again.
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

useHead({
	title: "Mohamed Amine Fhal | Contact",
	meta: [
		{
			name: "description",
			content:
				"Get in touch with Mohamed Amine Fhal for collaboration and projects.",
		},
	],
	script: [
		{
			src: "https://www.google.com/recaptcha/api.js",
			async: true,
			defer: true,
		},
	],
});

const formData = reactive({
	name: "",
	email: "",
	message: "",
});

const isSubmitting = ref(false);
const isVerified = ref(false);
const submitStatus = ref<"success" | "error" | null>(null);

// Callbacks for window reCAPTCHA events
onMounted(() => {
	(window as any).onCaptchaVerified = () => {
		isVerified.value = true;
	};
	(window as any).onCaptchaExpired = () => {
		isVerified.value = false;
	};
});

const submitForm = async () => {
	if (!isVerified.value) return;
	
	isSubmitting.value = true;
	submitStatus.value = null;

	// Fetch token from recaptcha response
	const recaptchaResponse = (window as any).grecaptcha?.getResponse();

	try {
		const response = await fetch("https://formspree.io/f/mykaljpg", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				...formData,
				"g-recaptcha-response": recaptchaResponse,
			}),
		});

		if (response.ok) {
			submitStatus.value = "success";
			formData.name = "";
			formData.email = "";
			formData.message = "";
			isVerified.value = false;
			// Reset the reCAPTCHA widget visually
			(window as any).grecaptcha?.reset();
		} else {
			submitStatus.value = "error";
		}
	} catch (error) {
		submitStatus.value = "error";
	} finally {
		isSubmitting.value = false;
	}
};
</script>

<style scoped>
.animate-fade-in-up {
	animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
