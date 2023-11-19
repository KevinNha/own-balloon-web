<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	import { selectedImageIndex } from '../store';
	import CarouselLeft from './assets/CarouselLeft.svelte';
	import CarouselRight from './assets/CarouselRight.svelte';

	// TODO get images from backend
	import carousel from './mock/carousel.png';
	import carousel2 from './mock/carousel2.png';
	const images = [carousel, carousel2, carousel, carousel2];

	let flyTransitionConfigConfig = {};
	function moveLeft() {
		flyTransitionConfigConfig = { x: '100%', duration: 1500 };
		if ($selectedImageIndex == 0) {
			selectedImageIndex.update(() => images.length - 1);
		} else {
			selectedImageIndex.update((value) => value - 1);
		}
	}

	function moveRight() {
		flyTransitionConfigConfig = { x: '-100%', duration: 1500 };
		if ($selectedImageIndex == images.length - 1) {
			selectedImageIndex.update(() => 0);
		} else {
			selectedImageIndex.update((value) => value + 1);
		}
	}

	let interval: any;
	function carouselTimer() {
		interval = setInterval(() => {
			moveRight();
		}, 4500);
	}
	onMount(() => {
		carouselTimer();

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="min-h-[300px] max-h-[500px] h-[30vh] relative">
	<div class="overflow-hidden">
		{#each images as image, index}
			{#if index === $selectedImageIndex}
				<div
					on:pointerover={() => clearInterval(interval)}
					on:pointerout={() => carouselTimer()}
					out:fade
					in:fly={flyTransitionConfigConfig}
					class="bg-cover bg-center absolute inset-0 flex items-center justify-center"
					style="background-image: url({image})"
				>
					<div class="text-left absolute w-1/3 left-1/2">
						<div class="flex flex-col gap-3">
							<p class="text-sm text-[#323334] font-roboto font-bold">HEADLINE LOREM IP SUM</p>
							<p class="text-3xl text-[#323334] font-gravitas font-bold mb-4">
								Flower Bouquet Long Title Example
							</p>
						</div>
						<button class="bg-[#323334] text-white py-2 px-4">Shop Now</button>
					</div>
					<button on:click={moveLeft}>
						<CarouselLeft
							class="cursor-pointer absolute top-1/2 left-10 transform -translate-y-1/2 fill-[#323334]/20 hover:fill-[#323334]/60"
						/>
					</button>
					<button on:click={moveRight}>
						<CarouselRight
							class="cursor-pointer absolute top-1/2 right-10 transform -translate-y-1/2 fill-[#323334]/20 hover:fill-[#323334]/60"
						/>
					</button>
				</div>
			{/if}
		{/each}
	</div>
</div>
