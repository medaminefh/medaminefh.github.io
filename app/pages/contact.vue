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
							required
							class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
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
							required
							class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
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
						rows="5"
						required
						class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
						placeholder="Tell me about your project..."
					></textarea>
				</div>

				<button
					type="submit"
					class="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
				>
					Send Message
				</button>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: "Mohamed Amine Fhal | Contact",
	meta: [
		{
			name: "description",
			content:
				"Get in touch with Mohamed Amine Fhal for collaboration and projects.",
		},
	],
});

const submitForm = () => {
	// In a real application, you'd integrate with an API like Formspree, Resend, etc.
	alert("Thanks for your message! This is a demo form for the portfolio.");
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
