<script lang="ts">
	import { onMount } from 'svelte';

	const time = 1500;
	onMount(() => {
		const bounds = { length: 0, top: Infinity, left: Infinity };
		const paths = document.querySelectorAll('.logo path');
		paths.forEach((p) => {
			const path = p as SVGPathElement;
			bounds.length = Math.max(path.getTotalLength(), bounds.length);
			bounds.top = Math.min(bounds.top, path.getBoundingClientRect().top);
			bounds.left = Math.min(bounds.left, path.getBoundingClientRect().left);
		});
		paths.forEach((p) => {
			const path = p as SVGPathElement;

			const length = path.getTotalLength();
			path.style.strokeDasharray = length.toString();
			path.style.strokeDashoffset = length.toString();

			const duration = Math.max(length / bounds.length, 0.5) * time;
			// path.style.animationDuration = `${duration}ms`;

			const rect = (el: HTMLElement) => el.getBoundingClientRect();
			const logo = document.querySelector('.logo') as HTMLElement;
			const left = (path.getBoundingClientRect().left - bounds.left) / logo.clientWidth;
			const top =
				(path.getBoundingClientRect().top - bounds.top) / logo.getBoundingClientRect().width;
			const delay = Math.min(top + left, bounds.length / length) * time; // If the line is longer, it should start sooner
			path.style.animationDelay = `${delay}ms`;

			const pathLength = path.getTotalLength();
			const durationIncrement = duration / pathLength;
			// Function to place circles along the path

			for (let i = 0; i <= pathLength; i += 2) {
				const point = path.getPointAtLength(i);
				const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
				line.setAttribute('x1', point.x.toString());
				line.setAttribute('y1', point.y.toString());
				line.setAttribute('x2', point.x.toString());
				line.setAttribute('y2', point.y.toString());

				line.setAttribute('stroke', 'white');

				line.style.animationDelay = `${delay + 1000 + i * durationIncrement}ms`;
				line.classList.add('point');
				path.parentElement?.appendChild(line);
			}
		});
	});
</script>

<div class="logo">
	<svg
		viewBox="0 0 2317 747"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xml:space="preserve"
		style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
	>
		<defs>
			<filter id="roughen">
				<feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" />
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
			</filter>
		</defs>
		<g id="Artboard1" transform="matrix(1.02934,0,0,1.09609,-118.153,-487.215)">
			<g transform="matrix(1.47352,0,0,1.38378,-508.832,-234.536)">
				<g class="inner_g">
					<path
						d="M895.045,889.05L895.315,815.91L913.194,815.91C983.446,815.91 984.746,925.349 913.194,925.349L895.045,925.349"
					/>
					<path d="M1158.55,575.219L1158.55,707.815L1445.78,707.815" />
					<path
						d="M1140.47,961.871L1046.74,961.895L1046.74,780.647L1046.94,631.405L1126,744.094L1511.25,744.094C1518.79,744.094 1526.01,747.092 1531.33,752.426C1536.65,757.76 1539.63,764.992 1539.61,772.525C1539.55,792.928 1539.49,816.834 1539.49,816.834L1539.49,896.317C1539.49,936.832 1479.08,936.946 1479.08,896.317L1479.08,816.834"
					/>
					<path
						d="M862.735,707.815L862.735,562.89L956.463,563.161L1010.91,562.87L1042.06,563.063L1122.52,675.56L1122.52,562.87"
					/>
					<path
						d="M1010.91,599.149C1010.91,599.149 1010.71,728.294 1010.71,859.265C1010.71,925.349 972.821,961.624 913.07,961.624L894.921,961.624L811.611,961.536L761.497,889.208C831.973,889.208 832.51,780.311 761.497,780.311L726.281,780.448L690.253,780.448L635.534,780.311L480.315,780.311L480.315,925.349"
					/>
					<path
						d="M956.463,744.094L726.478,744.094L726.478,671.767L761.694,671.767C832.17,671.767 832.707,562.87 761.694,562.87L542.004,562.87L542.004,707.835"
					/>
					<path
						d="M480.512,562.87L480.512,743.824L542.004,744.094L635.731,743.824L690.293,744.094L690.45,599.169"
					/>
					<path
						d="M444.016,780.311L444.016,961.265L541.806,961.536L690.253,961.265L690.253,816.61"
					/>
					<path
						d="M748.623,852.909L758.246,852.909C783.249,852.909 782.212,816.61 758.246,816.61L726.281,816.61"
					/>
					<path d="M635.534,816.61L578.105,816.61L578.105,852.909L618.739,852.909" />
					<path
						d="M858.893,925.349L858.893,780.448L913.07,780.448C937.04,780.909 956.166,787.934 970.577,798.973"
					/>
					<path
						d="M726.478,599.169L758.443,599.169C782.409,599.169 783.446,635.468 758.443,635.468L748.82,635.468"
					/>
					<path d="M635.731,599.169L578.303,599.169L578.303,635.468L618.936,635.468" />
					<path d="M635.731,599.169L578.303,599.169L578.303,635.468L618.936,635.468" />
					<g transform="matrix(1,0,0,-1,0,1275.4)">
						<path d="M635.731,567.569L578.303,567.569L578.303,603.868L618.936,603.868" />
					</g>
					<g transform="matrix(1,0,0,1,320.732,-0.0198132)">
						<path d="M635.731,599.169L578.303,599.169L578.303,635.468L618.936,635.468" />
					</g>
					<g transform="matrix(1,0,0,-1,320.732,1275.38)">
						<path d="M635.731,567.569L578.303,567.569L578.303,603.868L618.936,603.868" />
					</g>
					<path d="M444.213,512.622L444.213,744.094" />
					<path d="M726.478,961.536L726.478,901.987L774.025,969.052" />
					<path d="M1806.04,925.572L1806.04,780.559" />
					<g transform="matrix(1,0,0,1,5.68434e-14,233.241)">
						<path d="M635.534,583.369L578.105,583.369L578.105,619.668L618.739,619.668" />
					</g>
					<g transform="matrix(1,0,0,-1,5.68434e-14,1508.65)">
						<path d="M635.534,583.369L578.105,583.369L578.105,619.668L618.739,619.668" />
					</g>
					<g transform="matrix(1,0,0,1,5.68434e-14,233.241)">
						<path d="M541.806,583.369L541.806,692.035" />
					</g>
					<g transform="matrix(1,0,0,1,196.67,235.554)">
						<path
							d="M886.371,545.364L979.17,545.364L1055.39,733.498L1091.57,644.549L1127.72,733.498L1194.8,581.392"
						/>
					</g>
					<g transform="matrix(1,0,0,1,196.67,235.554)">
						<path
							d="M1019.38,544.01L1055.23,632.671L1091.41,543.722L1127.55,632.671L1164.03,544.01L1205.72,544.822L1245.3,544.822L1245.3,662.93C1245.3,750.783 1379.66,750.222 1379.66,662.93L1379.66,545.364L1440.54,544.822L1511.85,545.117C1582.87,545.117 1582.33,654.014 1511.85,654.014L1561.97,726.341L1645.94,726.341L1645.94,667.2L1687.12,726.341"
						/>
					</g>
					<g transform="matrix(1,0,0,1,523.658,236.747)">
						<path d="M616.811,580.199L559.383,580.199L559.383,616.498L600.016,616.498" />
					</g>
					<g transform="matrix(1,0,0,-1,520,1512.72)">
						<path d="M620.469,587.15L563.041,587.15L563.041,623.449L603.674,623.449" />
					</g>
					<g transform="matrix(1,0,0,1,959.223,233.489)">
						<path d="M678.055,728.135L678.055,583.481" />
					</g>
					<g transform="matrix(1,0,0,1,959.223,0.247963)">
						<path d="M714.28,961.647L714.28,902.098L757.714,961.647" />
					</g>
					<g transform="matrix(1,0,0,1,959.223,233.489)">
						<path
							d="M714.083,583.481L746.048,583.481C770.014,583.481 771.051,619.78 746.048,619.78L736.425,619.78"
						/>
					</g>
					<path d="M1927.94,780.559L1864.72,871.227L1927.94,961.895" />
					<path d="M1842.34,780.559L1842.61,839.701L1883.79,780.559" />
				</g>
			</g>
		</g>
	</svg>
</div>

<style>
	.logo {
		/* animation: scale 5s cubic-bezier(0.65, 0, 0.35, 1) both; */
		transform-origin: center;
		width: 80%;
	}
	.logo :global(path) {
		fill: none;
		/* stroke: black; */
		stroke-linecap: round;
		stroke-width: 0.5em;
		/* animation: dash both; */
	}

	:global(.point) {
		stroke-linecap: round;
		animation: grow 0.7s ease-out both;
	}
	@keyframes grow {
		0% {
			stroke-width: 0;
		}
		15% {
			stroke-width: 1em;
		}
		100% {
			stroke-width: 0.4em;
		}
	}
</style>
