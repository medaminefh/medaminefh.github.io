<template>
	<div class="section-shell section-stack">
		<section class="split-grid" aria-labelledby="contact-title">
			<div class="section-heading reveal">
				<p class="eyebrow">Contact</p>
				<h1 id="contact-title">Tell me what you are building.</h1>
				<p class="lead">
					Send a short note about the product, timeline, and where you need help.
					I am most useful on frontend product work, Vue and Nuxt apps, WebGL polish,
					workflow tools, and launch optimization.
				</p>

				<div class="contact-links">
					<a href="https://github.com/medaminefh" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/mohamed-amine-fhal"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-secondary"
					>
						LinkedIn
					</a>
				</div>
			</div>

			<div class="contact-card reveal" style="--delay: 90ms">
				<form class="contact-form" @submit.prevent="submitForm">
					<div class="form-row">
						<div class="form-field">
							<label for="name">Name</label>
							<input
								id="name"
								v-model="formData.name"
								name="name"
								type="text"
								required
								:disabled="isSubmitting"
								class="form-control"
								placeholder="Jane Doe"
							/>
						</div>

						<div class="form-field">
							<label for="email">Email</label>
							<input
								id="email"
								v-model="formData.email"
								name="email"
								type="email"
								required
								:disabled="isSubmitting"
								class="form-control"
								placeholder="jane@example.com"
							/>
						</div>
					</div>

					<div class="form-field">
						<label for="message">Message</label>
						<textarea
							id="message"
							v-model="formData.message"
							name="message"
							rows="6"
							required
							:disabled="isSubmitting"
							class="form-control"
							placeholder="Tell me about the product, stack, and timeline."
						></textarea>
					</div>

					<div class="recaptcha-wrap">
						<div
							id="recaptcha-widget"
							class="g-recaptcha"
							data-sitekey="6LeNth4tAAAAABwn-m9oXOaJetBZJ65AcdJggv-T"
							data-theme="dark"
							data-callback="onCaptchaVerified"
							data-expired-callback="onCaptchaExpired"
						></div>
					</div>

					<button type="submit" :disabled="isSubmitting || !isVerified" class="btn btn-primary submit-btn">
						{{ isSubmitting ? "Sending..." : "Send message" }}
					</button>

					<p v-if="submitStatus === 'success'" class="form-status success">
						Message sent. I will get back to you as soon as possible.
					</p>
					<p v-if="submitStatus === 'error'" class="form-status error">
						The message could not be sent. Please try again.
					</p>
				</form>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

const baseUrl = "https://medaminefh.github.io";

useSeoMeta({
	title: "Contact",
	description:
		"Contact Mohamed Amine Fhal for Vue, Nuxt, WebGL, frontend product work, business workflow tools, SEO, and performance projects.",
	ogTitle: "Contact Mohamed Amine Fhal",
	ogDescription:
		"Start a conversation about software development, product frontend, WebGL, SEO, or business tool projects.",
	ogImage: `${baseUrl}/og-image.png`,
	ogUrl: `${baseUrl}/contact`,
	twitterCard: "summary_large_image",
});

useHead({
	link: [{ rel: "canonical", href: `${baseUrl}/contact` }],
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

		if (!response.ok) {
			throw new Error("Form submission failed");
		}

		submitStatus.value = "success";
		formData.name = "";
		formData.email = "";
		formData.message = "";
		isVerified.value = false;
		(window as any).grecaptcha?.reset();
	} catch (error) {
		submitStatus.value = "error";
	} finally {
		isSubmitting.value = false;
	}
};
</script>

<style scoped>
.contact-links {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
}

.contact-form {
	display: grid;
	gap: 18px;
}

.form-row {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 14px;
}

textarea.form-control {
	resize: vertical;
	min-height: 160px;
}

.recaptcha-wrap {
	display: flex;
	justify-content: center;
	min-height: 78px;
	padding-block: 4px;
	overflow-x: auto;
}

.submit-btn {
	width: 100%;
}

.form-status {
	padding: 12px 14px;
	border-radius: 8px;
	font-size: 0.92rem;
	font-weight: 750;
}

.form-status.success {
	border: 1px solid rgba(55, 214, 161, 0.34);
	background: rgba(55, 214, 161, 0.11);
	color: #9af0cf;
}

.form-status.error {
	border: 1px solid rgba(255, 107, 95, 0.34);
	background: rgba(255, 107, 95, 0.11);
	color: #ffb0a9;
}

@media (max-width: 760px) {
	.form-row {
		grid-template-columns: 1fr;
	}
}
</style>
