<script lang="ts">
	import Carousel from '$lib/Carousel.svelte';
	import CategoryCard from '$lib/CategoryCard.svelte';
	import ItemCard from '$lib/ItemCard.svelte';
	import RightArrow from '$lib/assets/RightArrow.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const featuredItems: Item[] = data.items;
	const categories: Category[] = data.categories;
</script>

<div class="flex flex-col">
	<div class="left-0 right-0 relative">
		<Carousel />
	</div>
	<div class="mx-[72px] flex flex-col">
		<div class="flex flex-col gap-9 mt-12 mb-20">
			<div>
				<h1 class="font-gravitas text-xs md:text-2xl self-center">Services</h1>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
				{#each categories as category}
					<div class="col-span-3">
						<CategoryCard categoryItem={category} />
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-9 mt-12 mb-20">
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
				{#each featuredItems as item}
					<div class="col-span-3 mb-6">
						<ItemCard {item} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
