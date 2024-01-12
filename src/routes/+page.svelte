<script lang="ts">
	import { setContext } from 'svelte';
	import { goto } from '$app/navigation';
	import Carousel from '$lib/Carousel.svelte';
	import CategoryCard from '$lib/CategoryCard.svelte';
	import ItemCard from '$lib/ItemCard.svelte';
	import HoverButton from '$lib/HoverButton.svelte';
	import RightArrow from '$lib/assets/RightArrow.svelte';
	import AboutUsImage from '$lib/assets/AboutUsImage.png';
	import type { PageData } from './$types';
	import Contact from '$lib/Contact.svelte';

	export let data: PageData;
	const featuredItems: Item[] = data.items.sort((a, b) => a.order - b.order);
	const categories: Category[] = data.categories.sort((a, b) => a.order - b.order);
	setContext('categories', categories);

	const gradientText1 =
		'bg-gradient-to-r from-[#EE9AE5] to-[#B383ED]/100 text-transparent bg-clip-text';
	const gradientText2 =
		'bg-gradient-to-r from-[#B383ED] to-[#7D6EF4]/100 text-transparent bg-clip-text';
	const gradientText3 =
		'bg-gradient-to-r from-[#7D6EF4] to-[#5961F9]/100 text-transparent bg-clip-text';
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
					<div class="col-span-3">
						<ItemCard {item} />
					</div>
				{/each}
			</div>
			<div class="justify-center flex">
				<HoverButton text="SHOP ALL" onClickHandler={() => goto('/shop')} />
			</div>
		</div>
	</div>
	<div class="pt-12 pb-20 flex flex-row gap-6 justify-center bg-[#FAFAFA]">
		<div class="flex flex-col gap-9 mt-12 w-[526px]">
			<h1 class="font-gravitas text-xs md:text-2xl">About us</h1>
			<p class="font-roboto font-bold md:text-2xl">
				It's amazing how something <span class={gradientText1}>as simple as a balloon</span> can be
				<span class={gradientText2}>elevated in value</span>
				through our hands, becoming a part of someone else's
				<span class={gradientText3}>celebrating moment</span>
			</p>
			<div>
				<HoverButton text="READ OUR STORY" />
			</div>
		</div>
		<div class="w-[526px] px-32">
			<img src={AboutUsImage} alt="About us" />
		</div>
	</div>
	<Contact />
</div>
