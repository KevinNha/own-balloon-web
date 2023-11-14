<script>
	import Instagram from '$lib/assets/Instagram.svelte';
	import Logo from '$lib/assets/Logo.svelte';
</script>

<div>
	<div class="grid grid-cols-12 bg-[#323334] px-[72px] py-12">
		<div class="flex flex-col gap-6 col-span-3">
			<Logo class="w-36 h-16 fill-white" />
			<p class="font-sm text-white/50">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
			</p>
			<div class="font-bold text-white flex flex-col gap-2">
				<p>Burnaby, British Columbia, CA</p>
				<p>+1 778 325 4602</p>
				<p>info@ownballoon.com</p>
				<a class="w-2" target="_blank" href="https://www.instagram.com/own_balloon/">
					<Instagram />
				</a>
			</div>
		</div>
		<div class="col-start-7 col-span-2">
			<div class="flex flex-col gap-6">
				<p class="font-bold text-white">SHOP</p>
				<div class="flex flex-col gap-2 text-white/50 text-sm font-light">
					<p>Balloon Garland</p>
					<p>Balloon Flower Bouquet</p>
				</div>
			</div>
		</div>
		<div class="col-start-9 col-span-2">
			<div class="flex flex-col gap-6 font-bold text-white">
				<p class="font-bold text-white">INFO</p>
				<div class="flex flex-col gap-2 text-white/50 text-sm font-light">
					<a href="/about">Our Story</a>
					<a href="/contact">Contact Us</a>
					<p>Sustainability</p>
				</div>
			</div>
		</div>
		<div class="col-start-11 col-span-2">
			<div class="flex flex-col gap-6 font-bold text-white">
				<p class="font-bold text-white">SUPPORT</p>
				<div class="flex flex-col gap-2 text-white/50 text-sm font-light">
					<p>Terms and Condition</p>
					<p>FAQ</p>
					<p>Delivery Policy</p>
					<p>Refund Policy</p>
				</div>
			</div>
		</div>
	</div>
	<div class="flex justify-center bg-[#222222] text-white py-3">
		Own Balloon © &ndash; All rights reserved
	</div>
</div>
