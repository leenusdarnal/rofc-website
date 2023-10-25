<script lang="ts">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	let visible = false
	onMount(() => {
		visible = true
	})
</script>

{#if visible}
	<img
		src="ROFC_LOGO.webp"
		alt="logo"
		width="120"
		transition:fly={{ duration: 2000, delay: 100 }}
	/>
{/if}
