export type Project = {
	slug: string;
	title: string;
	eyebrow: string;
	summary: string;
	impact: string;
	role: string;
	tools: string[];
	image: string;
	liveUrl: string;
	repoUrl?: string;
	status?: string;
};

export const featuredProjects: Project[] = [
	{
		slug: "pnpo",
		title: "Private Nurse Patient Organizer",
		eyebrow: "Healthcare desktop product",
		summary:
			"Offline-first patient organizer for Tunisian private nurses, covering patients, appointments, visit notes, medication tracking, payments, reports, and encrypted backups.",
		impact:
			"Turns paper-heavy daily care work into a focused desktop workflow with security and continuity built in.",
		role: "Product strategy, UI system, frontend implementation",
		tools: ["Desktop UX", "Offline-first", "Security", "Healthcare"],
		image: "/project-pnpo.png",
		liveUrl: "https://pnpo.vercel.app/",
		status: "Recent build",
	},
	{
		slug: "eventizer-b2b",
		title: "Eventizer B2B",
		eyebrow: "Event access platform",
		summary:
			"B2B event application with participant badge-linked authentication through email, phone, and QR flows for faster check-in and controlled access.",
		impact:
			"Shows practical event operations thinking: multi-channel login, OTP flow, and a clean interface for participant entry.",
		role: "Auth experience, product interface, responsive app shell",
		tools: ["B2B SaaS", "OTP", "QR Login", "Responsive UI"],
		image: "/project-eventizer-b2b.png",
		liveUrl: "https://eventizer-b2b.vercel.app/",
		status: "Recent build",
	},
	{
		slug: "agario-extension",
		title: "Agar.io Personal Toolkit",
		eyebrow: "Browser extension and userscript",
		summary:
			"Landing page and install flow for a gameplay toolkit with configurable hotkeys, compact stats, mini-map overlay, stop toggle, and Tampermonkey delivery.",
		impact:
			"Packages niche gameplay utility into a credible product page with clear benefits and low-friction installation.",
		role: "Extension UX, landing page, feature communication",
		tools: ["Userscript", "Browser Extension", "Hotkeys", "Game UI"],
		image: "/project-agario-extension.png",
		liveUrl: "https://agario-extension.vercel.app/",
		status: "Live",
	},
	{
		slug: "rachid-fhal",
		title: "Rachid Fhal",
		eyebrow: "Multilingual author platform",
		summary:
			"Arabic and French literary website for Tunisian author Rachid Fhal, presenting biography, books, blog content, and a premium editorial visual system.",
		impact:
			"Balances right-to-left content, cultural tone, book presentation, and accessible navigation across languages.",
		role: "Editorial design, multilingual frontend, content structure",
		tools: ["RTL UI", "Multilingual", "Publishing", "Vercel"],
		image: "/project-rachid-fhal.png",
		liveUrl: "https://rachidfhal.vercel.app/",
		status: "Live",
	},
	{
		slug: "klondike",
		title: "Klondike Solitaire",
		eyebrow: "Interactive card game",
		summary:
			"Fully playable Klondike game with draw modes, undo, hint, auto move, move tracking, and precise drag-based card interactions.",
		impact:
			"Demonstrates state modeling, game rules, interaction timing, and responsive browser-based gameplay.",
		role: "Game logic, interaction design, Vue frontend",
		tools: ["Vue 3", "Game State", "Drag API", "Netlify"],
		image: "/project-klondike.png",
		liveUrl: "https://klondikevue.netlify.app/",
		repoUrl: "https://github.com/medaminefh/klondike",
		status: "Open source",
	},
];

export const archiveProjects = [
	{
		title: "Neuro Nest",
		summary:
			"Accessible support platform for autonomy-focused services for people with disabilities.",
		tools: ["Vue", "Tailwind CSS"],
		url: "https://neuro-nest-beta.vercel.app/",
	},
	{
		title: "E-commerce Platform",
		summary:
			"Nuxt commerce app with product, user, and order administration workflows.",
		tools: ["Nuxt", "Vue", "Tailwind CSS"],
		url: "https://e-commerce-nuxt-ts.vercel.app/",
		repoUrl: "https://github.com/medaminefh/E-commerce_nuxt_ts",
	},
	{
		title: "JS Kitchen",
		summary:
			"Cooking-themed JavaScript fundamentals exercises and beginner-friendly code challenges.",
		tools: ["HTML", "CSS", "JavaScript"],
		url: "https://js-kitchen.vercel.app/index.html",
	},
	{
		title: "Trello Clone",
		summary:
			"Kanban board with Nuxt and native drag-and-drop planning interactions.",
		tools: ["Nuxt", "Drag API", "Tailwind CSS"],
		url: "https://medaminefh.github.io/Trello-clone/",
		repoUrl: "https://github.com/medaminefh/Trello-clone",
	},
];
