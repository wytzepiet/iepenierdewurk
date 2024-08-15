<script lang="ts">
	import { onMount } from 'svelte';

	const numItems = 77;
	const startScale = 0.9;
	const gridElements: HTMLElement[] = [];
	const grid: { el: HTMLImageElement; x: number; y: number; scale: number; distance: number }[] =
		[];

	function initGridItem(el: HTMLImageElement) {
		let minHeight = 2;
		let maxHeight = 4;
		let minWidth = 3;
		let maxWidth = 5;

		let columns = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
		let rows = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
		el.style.gridArea = 'span ' + rows + ' / span ' + columns;
		el.style.scale = startScale.toString();
		el.style.backgroundColor = 'rgba(0, 0, 0, ' + Math.random() + ')';

		let rect = el.getBoundingClientRect();
		grid.push({
			el: el,
			x: rect.left + el.offsetWidth / 2,
			y: rect.top + el.offsetHeight / 2 + window.scrollY,
			scale: startScale,
			distance: 10000
		});
	}

	function scaleGridItems(e: MouseEvent) {
		const range = window.innerWidth * 0.12;
		grid.forEach((item) => {
			let distX = e.pageX - item.x;
			let distY = e.pageY - item.y;
			let dist = Math.sqrt(distX * distX + distY * distY);

			item.distance = dist;
			if (dist < range) {
				let scale = ((range - dist) * 2) / range;
				scale = scale + startScale;
				item.scale = scale;
				item.el.style.scale = scale.toString();
				item.el.style.zIndex = scale.toFixed(0);
				item.el.classList.add('in-range');
			} else if (item.scale != startScale) {
				item.scale = startScale;
				item.el.style.scale = startScale.toString();
				item.el.style.zIndex = '0';
				item.el.classList.remove('in-range');
			}
		});
	}
</script>

<svelte:window on:mousemove={scaleGridItems} />

<div class="grid margin" id="grid">
	{#each Array(numItems) as _, i}
		<img
			bind:this={gridElements[i]}
			use:initGridItem
			class="object-cover grid-item"
			src={`shots/${i + 1}.jpeg`}
			alt=""
		/>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(40, 1fr);
		grid-auto-rows: 2.5vw;
	}
	.grid-item {
		transition: scale 1s;
	}
	.grid-item:global(.in-range) {
		transition: scale 0.2s;
	}
</style>
