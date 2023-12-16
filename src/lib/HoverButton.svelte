<script lang="ts">
	export let text: string;
	export let onClickHandler: () => any = () => null;
</script>

<button
	class="bg-[#323334] mt-4 text-xs text-white py-4 px-8 hover:bg-gradient-135 hover:from-[#EE9AE5] hover:to-[#5961F9]/100"
	on:click={onClickHandler}
>
	{text}
</button>
