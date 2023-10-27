<script lang="ts">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	let visible = false
	onMount(() => {
		visible = true
	})
</script>

<!-- {#if visible} -->
<a href="/">
	<img
		src="ROFC_LOGO.webp"
		alt="logo"
		width="120"
		class="transition duration-1000 ease-in animate-in slide-in-from-top-12"
	/>
</a>

<!-- {/if} -->
