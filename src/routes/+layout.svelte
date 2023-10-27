<script>
	import Footer from '$lib/components/Footer.svelte'
	import Navbar from '$lib/components/Navbar.svelte'
	import '../app.css'
</script>

<div class="font- min-h-screen bg-black p-1 text-white">
	<Navbar />
	<slot />
	<Footer />
</div>
