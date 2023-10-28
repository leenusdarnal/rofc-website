<script lang="ts">
	import Logo from '$lib/components/Logo.svelte'
	import { fly } from 'svelte/transition'
</script>

<div class="mt-5 flex items-center justify-between px-3 sm:px-10">
	<Logo />
	<div class="flex gap-16">
		<a href="/works" class=" hover:scale-110 hover:text-gray-400">Works</a>
		<a href="/contacts" class=" hover:scale-110 hover:text-gray-400">Contacts</a>
	</div>
</div>
