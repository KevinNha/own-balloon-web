<script lang="ts">
	export let categoryItem: Category;
	let hovered: boolean;

	function handleMouseIn() {
		hovered = true;
	}

	function handleMouseOut() {
		hovered = false;
	}
</script>

<div
	class="flex flex-col items-center bg-[#FAFAFA]"
	on:mouseover={handleMouseIn}
	on:mouseout={handleMouseOut}
	on:focus={handleMouseIn}
	on:blur={handleMouseOut}
	role="presentation"
>
	<div class="w-full h-min overflow-hidden">
		{#if categoryItem.imageURL}
			<img
				class={hovered ? `w-full scale-125 object-cover` : 'w-full'}
				src={`${categoryItem.imageURL}`}
				alt={`Category image for ${categoryItem.name}`}
			/>
		{:else}
			<p>Loading image...</p>
		{/if}
	</div>
	<div class="flex flex-col self-start text-center font-bold gap-9 my-9 mx-6">
		<p class="text-sm md:text-base lg:text-sm text-left">
			CATEGORY{categoryItem.id}: {categoryItem.name.toUpperCase()}
		</p>
		<button
			class={hovered
				? `bg-[#323334] mt-4 text-xs text-white py-4 px-8 bg-gradient-135 from-[#EE9AE5] to-[#5961F9]/100`
				: 'bg-[#323334] mt-4 text-xs text-white py-4 px-8'}
		>
			SHOP NOW
		</button>
	</div>
</div>
