<script>
	import Cart from './assets/Cart.svelte';
	import Search from './assets/Search.svelte';
	import Logo from '$lib/assets/Logo.svelte';
	import { page } from '$app/stores';

	const gradientText =
		'bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] inline-block text-transparent bg-clip-text';
</script>

<div class="mx-[74px] my-[48px] flex flex-col flex gap-6">
	<div class="flex flex-row justify-between max-h-60">
		<a href="/" class="col-span-2">
			<Logo class="w-36 h-16" />
		</a>
		<div class="flex flex-row self-center gap-6">
			<Search />
			<Cart />
		</div>
	</div>
	<div class="border-y border-solid border-black py-3">
		<div class="flex flex-row gap-16 justify-center font-bold text-sm">
			<a class={$page.url.pathname == '/' ? gradientText : ''} href="/">HOME</a>
			<a class={$page.url.pathname == '/shop' ? gradientText : ''} href="/shop">SHOP</a>
			<a class={$page.url.pathname == '/gallery' ? gradientText : ''} href="/gallery">GALLERY</a>
			<a class={$page.url.pathname == '/about' ? gradientText : ''} href="/about">OUR STORY</a>
			<a class={$page.url.pathname == '/contact' ? gradientText : ''} href="/contact">CONTACT US</a>
		</div>
	</div>
</div>
