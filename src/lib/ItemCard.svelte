<script lang="ts">
	import { getContext } from 'svelte';

	export let item: Item;

	const categories: Category[] = getContext('categories');
	const cost = item.cost.split(' ')[0];

	const categoryData = categories.find((category) => category.id === item.categoryId);
	const categoryColor = categoryData?.colorHex;
</script>

<!-- TODO image links to product detail page -->
<!-- TODO add cart icon - clicking adds to cart (global store)-->
<div class="flex flex-col gap-6 items-center">
	<div class="w-full h-min overflow-hidden">
		{#if item.imageURL}
			<img
				class="w-full hover:scale-110 object-cover cursor-pointer"
				src={`${item.imageURL}`}
				alt={`Balloon image for ${item.productName}`}
			/>
		{:else}
			<p>Loading image...</p>
		{/if}
	</div>
	<div class="flex flex-col self-start text-center font-bold gap-6 mb-6 w-full">
		<div class="flex flex-col gap-4">
			<div
				class={`rounded-full w-fit px-2.5 py-1 text-xs md:text-sm lg:text-xs`}
				style="background-color: {categoryColor}1A; color: {categoryColor}"
			>
				{categoryData?.name.toUpperCase()}
			</div>
			<p class="text-sm md:text-base lg:text-sm text-left">
				{item.productName}
				{item.colors ? ' - ' + item.colors.replaceAll(',', ' / ') : ''}
			</p>
		</div>
		<div class="flex flex-row items-center gap-3">
			<p class="text-base md:text-lg lg:text-base whitespace-break-spaces">
				${Number(cost).toFixed(2)}{item.cost.split(' ').length === 2 ? '~' : ''}
			</p>
			{#if item.prevCost}
				<div class="bg-[#F56E76]/40 h-1">
					<p class="relative text-xs md:text-md lg:text-xs font-normal bottom-1.5">
						&nbsp;&nbsp;{Number(item.prevCost).toFixed(2)}&nbsp;&nbsp;
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>
