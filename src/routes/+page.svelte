<script lang="ts">
	import kom from '$lib/images/kom.webp';
	import Logo from '$lib/components/logo.svelte';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import LittleImages from '$lib/components/littleImages.svelte';

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
		<h1 class="opacity-0 absolute">Iepen Ierdewurk</h1>
	</div>

	<!-- <div class="h-[100vh]"></div> -->
	<img src={kom} alt="background" class="kom h-screen object-contain" />

	<!-- <div>
		<h2>Wij snakken naar Tichelaar.</h2>
		<p>Daarom laten we ons Makkumer erfgoed nu tot leven komen met een speciale aardewerktoer.</p>
	</div> -->

	<div class="h-[200px]"></div>
	<div>
		<div class="font-lovelo text-6xl">
			<h2>Documentaire</h2>
			<h1 class="font-bold">Het Geluk van Makkum</h1>
		</div>
	</div>

	<div class="my-5"><LittleImages /></div>

	<div>
		<p class="max-w-md">
			De natuur is gul geweest voor Makkum, met schelpen en klei in overvloed. Dat is het geluk van
			Makkum, daardoor ontstond hier een bloeiende nijverheid in de 17e eeuw. Makkum werd welvarend!

			<br /><br />
			In deze korte documentaire gaan we op zoek naar het ontstaan van deze bloei en groei en wat er
			nu nog van over is.
		</p>

		<div class="h-[200px]"></div>
		<div>
			<div class="font-lovelo text-6xl">
				<h2>Tentoonstelling</h2>
				<h1 class="font-bold">Gezonken schat</h1>
			</div>
		</div>
		<p class="max-w-md">
			Deze tentoonstelling laat aardewerk zien dat gevonden is in aan boord van een scheepswrak uit
			de achttiende eeuw. Het aardewerk verteld een fascinerend verhaal over de geschiedenis van de
			scheepvaart op de Zuiderzee en Oostzee. Daarmee gaat een wereld open van de Vrachtvaarders van
			Europa, de locale nijverheid en de economische bloei van 1600 tot 1800.
		</p>
	</div>
	<div class="h-[200px]"></div>
	<div class="flex flex-wrap items-center gap-4">
		<img src="/podwalk-min.png" alt="" class="max-w-sm" />
		<div>
			<div>
				<div class="font-lovelo text-6xl">
					<h2>GPS-wandeling</h2>
					<h1 class="font-bold">Podwalk</h1>
				</div>
			</div>
			<p class="max-w-md">
				Benieuwd naar de rijke handelsgeschiedenis van Makkum in de periode voor 1800? Stap in het
				verhaal van Makkum en doe de podwalk!
			</p>
		</div>
	</div>
	<div class="h-[200px]"></div>
	<div
		class="relative flex flex-col p-8 gap-8 text-center font-lovelo font-light text-8xl text-black"
	>
		<div class="h-[200px]"></div>
		<h2>
			<span class="bg-white pt-5">
				4 augustus t/m september <br />
				woensdag t/m zaterdag <br />
				11:00 tot 17:00 <br />
				Turfmarkt 65, Makkum
			</span>
		</h2>
	</div>
</main>

<style>
	.kom {
		transform-origin: 50% 45%;
	}
</style>
