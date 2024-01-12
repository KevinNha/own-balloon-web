<script lang="ts">
	import Contact from '$lib/Contact.svelte';

	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<Contact submitted={form?.success}/>