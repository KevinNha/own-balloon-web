<script lang="ts">
	import Carousel from '$lib/Carousel.svelte';
	import ItemCard from '$lib/ItemCard.svelte';
	import RightArrow from '$lib/assets/RightArrow.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const items: Item[] = data.items;
</script>

<div class="flex flex-col gap-6">
	<div class="left-0 right-0 relative">
		<Carousel />
	</div>
	<div class="mx-[74px] my-[48px]">
		<div class="flex flex-row justify-between">
			<h1 class="font-gravitas text-xs md:text-2xl self-center">Featured Items</h1>
			<div
				class="font-bold text-xs md:text-base lg:text-base items-center tracking-tight flex flex-row gap-1 cursor-pointer"
			>
				<p>SHOP NOW</p>
				<RightArrow class="w-8 h-9" />
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
			{#each items as item}
				<div class="col-span-3 mb-6">
					<ItemCard {item} />
				</div>
			{/each}
		</div>
	</div>
</div>
