<script lang="ts">
	export let item: Item;
</script>

<!-- TODO Category color mapping -->
<!-- TODO image links to product detail page -->
<!-- TODO clicking shopping cart adds to cart (global store)-->
<div class="flex flex-col gap-4 items-center">
	<div class="w-full h-min overflow-hidden">
		<img
			class="w-full hover:scale-110 transition duration-500 object-cover cursor-pointer"
			src={item.imageURL}
			alt={`Balloon image for ${item.productName}`}
		/>
	</div>
	<div class="flex flex-col self-start text-center font-bold gap-4">
		<div
			class="rounded-full w-fit bg-[#5C90F6]/10 text-[#5C90F6] px-2.5 py-1 text-xs md:text-sm lg:text-xs"
		>
			{item.category.toUpperCase()}
		</div>
		<p class="text-sm md:text-base lg:text-sm text-left">
			{item.productName} - {item.colors.replaceAll(',', ' / ')}
		</p>
		<div class="flex flex-row items-center gap-3">
			<p class="text-base md:text-lg lg:text-base whitespace-break-spaces">
				${Number(item.cost).toFixed(2)}
			</p>
			{#if item.prevCost}
				<p
					class="text-xs md:text-md lg:text-xs font-normal line-through decoration-[#F56E76]/40 decoration-4"
				>
					&nbsp;&nbsp;${Number(item.prevCost).toFixed(2)}&nbsp;&nbsp;
				</p>
			{/if}
		</div>
	</div>
</div>
