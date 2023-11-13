<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<div class="max-w-screen-2xl mx-auto">
	<Header />
	<slot />
	<Footer />
</div>
