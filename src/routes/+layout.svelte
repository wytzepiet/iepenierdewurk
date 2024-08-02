<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { browser } from '$app/environment';
	import '../app.css';

	if (browser) {
		gsap.registerPlugin(ScrollTrigger);
	}

	onMount(async () => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	});
	let { children } = $props();
</script>

<div class="flex flex-col items-center w-screen overflow-x-hidden">
	{@render children()}
</div>
