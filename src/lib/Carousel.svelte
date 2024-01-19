<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	import { selectedImageIndex } from '../store';
	import CarouselLeft from './assets/CarouselLeft.svelte';
	import CarouselRight from './assets/CarouselRight.svelte';
	import HoverButton from './HoverButton.svelte';

	// TODO get images from backend
	import carousel from './mock/carousel.png';
	import carousel2 from './mock/carousel2.png';
	const images = [carousel, carousel2, carousel, carousel2];

	let flyTransitionConfigConfig = {};
	function moveLeft() {
		flyTransitionConfigConfig = { x: '100%', duration: 1500 };
		if ($selectedImageIndex <= 0) {
			selectedImageIndex.update(() => images.length - 1);
		} else {
			selectedImageIndex.update((value) => value - 1);
		}
	}

	function moveRight() {
		flyTransitionConfigConfig = { x: '-100%', duration: 1500 };
		if ($selectedImageIndex >= images.length - 1) {
			selectedImageIndex.update(() => 0);
		} else {
			selectedImageIndex.update((value) => value + 1);
		}
	}

	function setSelected(index: number) {
		selectedImageIndex.update(() => index);
	}

	let interval: any;
	function carouselTimer() {
		interval = setInterval(() => {
			moveRight();
		}, 4500);
	}

	$: {
		clearInterval(interval);
		carouselTimer();
	}

	onMount(() => {
		return () => clearInterval(interval);
	});
</script>

<div class="h-[40vh] md:h-[526px] relative">
	<div
		class="overflow-hidden"
		on:pointerenter={() => clearInterval(interval)}
		on:pointerleave={() => carouselTimer()}
	>
		{#each images as image, index}
			{#if index === $selectedImageIndex}
				<div
					out:fade
					in:fly={flyTransitionConfigConfig}
					class="bg-cover bg-center absolute inset-0 flex items-center justify-center"
					style="background-image: url({image})"
				>
					<div class="text-left absolute w-2/5 left-1/2">
						<div class="flex flex-col gap-3">
							<p class="text-xs md:text-sm text-[#323334] font-roboto font-bold">
								HEADLINE LOREM IP SUM
							</p>
							<p
								class="text-lg md:text-[44px] leading-snug text-[#323334] font-gravitas font-bold mb-4"
							>
								Flower Bouquet Long Title Example
							</p>
						</div>
						<HoverButton text="SHOP NOW" />
					</div>
				</div>
			{/if}
		{/each}
		<div>
			<button on:click={moveLeft}>
				<CarouselLeft
					class="cursor-pointer absolute top-1/2 left-[72px] transform -translate-y-1/2 fill-[#323334]/20 hover:fill-[#323334]/60"
				/>
			</button>
			<button on:click={moveRight}>
				<CarouselRight
					class="cursor-pointer absolute top-1/2 right-[72px] transform -translate-y-1/2 fill-[#323334]/20 hover:fill-[#323334]/60"
				/>
			</button>
			<div class="absolute bottom-6 right-10 flex flex-row gap-4">
				{#each { length: images.length } as _, index}
					{#if index === $selectedImageIndex}
						<button
							in:fade={{ duration: 1500 }}
							on:click={() => setSelected(index)}
							class="h-4 w-10 rounded-full bg-[#323334]/70"
						/>
					{:else}
						<button
							on:click={() => setSelected(index)}
							class="h-4 w-4 rounded-full bg-[#323334]/20"
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
