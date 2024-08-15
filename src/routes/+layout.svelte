<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { browser } from '$app/environment';
	import '../app.css';
	import 'lenis/dist/lenis.css';

	if (browser) {
		gsap.registerPlugin(ScrollTrigger);
	}

	onMount(async () => {
		const lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	});
	let { children } = $props();
</script>

<div class="flex flex-col items-center w-screen overflow-x-hidden">
	{@render children()}
</div>
