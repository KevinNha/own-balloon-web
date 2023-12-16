<script>
	import HoverButton from '$lib/HoverButton.svelte';
</script>

<div class="my-20 flex flex-col gap-12 w-full">
	<div class="flex justify-center">
		<div class="flex flex-col gap-6 w-1/2">
			<h1 class="font-gravitas text-xs md:text-2xl text-center">contact us</h1>
			<p class="font-roboto font-bold text-center">
				PLEASE FILL OUT THE FORM BELOW OR EMAIL US AT
				<a
					class="bg-gradient-to-r from-[#7D6EF4] to-[#5961F9] text-transparent bg-clip-text"
					href="mailto:info@ownballoon.com"
				>
					INFO@OWNBALLOON.COM
				</a>
			</p>
		</div>
	</div>
	<div class="flex justify-center w-full font-roboto font-bold">
		<form class="flex flex-col gap-8 w-1/2" method="POST">
			<label class="flex flex-col gap-2">
				NAME*
				<input
					name="name"
					class="p-4 border border-solid border-[#989999] text-[#323334] text-lg font-normal"
					type="text"
					required
				/>
			</label>
			<label class="flex flex-col gap-2">
				EMAIL*
				<input
					name="email"
					class="p-4 border border-solid border-[#989999] text-[#323334] text-lg font-normal"
					type="email"
					required
				/>
			</label>
			<label class="flex flex-col gap-2">
				MESSAGE*
				<textarea
					name="message"
					class="p-4 border border-solid border-[#989999] text-[#323334] text-lg font-normal"
					required
				/>
			</label>
			<p class="font-normal text-lg">I have more information about the event (Optional)</p>
			<div class="flex justify-center">
				<HoverButton text="SUBMIT" />
			</div>
		</form>
	</div>
</div>
