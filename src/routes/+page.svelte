<script lang="ts">
	// @ts-ignore
	import kom from '$lib/images/groteKom.jpg?w=2000&format=webp';
	import Logo from '$lib/components/logo.svelte';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.from('.kom', {
			scale: 5,
			opacity: 0,
			scrollTrigger: {
				scrub: true,

				end: window.innerHeight
			}
		});
	});
</script>

<main class="text-white flex flex-col items-center">
	<div class="relative w-full h-screen flex justify-center items-center z-10">
		<Logo />
		<!-- <CanvasLogo /> -->
	</div>

	<!-- <div class="h-[100vh]"></div> -->
	<img src={kom} alt="background" class="kom h-screen object-contain" />

	<div class="relative flex flex-col p-8 gap-8 text-center font-lovelo font-light text-8xl">
		<h1>4 augustus t/m september</h1>
		<h1>woensdag t/m zaterdag</h1>
		<h1>11:00 tot 17:00</h1>
		<h1>Turfmarkt 65, Makkum</h1>
	</div>
</main>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes slideUp {
		from {
			scale: 4;
			translate: 0px 20px;
		}
		to {
			scale: 1;
			translate: 0px 0px;
		}
	}
	.kom {
		transform-origin: 50% 45%;
	}
	/* .kom {
		animation:
			fadeIn 4s 1s both,
			slideUp 3s 1s cubic-bezier(0.33, 1, 0.68, 1) both;
	} */
</style>
