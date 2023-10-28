<script lang="ts">
	import chirpImage from '$lib/images/chirp_project.webp'
</script>

<div class="mt-10 flex flex-col gap-10 px-3 md:px-20">
	<h1 class="text-3xl font-semibold text-cyan-600">Chirp</h1>
	<h3 class="text-2xl">A fun emoji sharing project like twitter</h3>
	<p class="break-normal px-2 text-xl">
		Chirp is a fun website where people can share their thoughts like twitter but via emojis
	</p>

	<div class="px-2 md:flex md:justify-between">
		<span class="flex gap-20 md:flex-col md:gap-2">
			<p class="font-semibold">Client</p>
			<p class="font-light">T3 Project</p>
		</span>

		<span class="mt-8 flex flex-row gap-16 md:mt-0 md:flex-col md:gap-2">
			<p class="font-semibold">Services</p>
			<p class="flex flex-col font-light">
				<span> Visual Design </span>
				<spam> UI & UX Design </spam>
				<spam> Frontend Code </spam>
				<spam> Backend Code </spam>
				<spam> Development </spam>
				<spam> Deployment </spam>
			</p>
		</span>

		<span class="mt-10 flex flex-row gap-14 md:mt-0 md:flex-col md:gap-2">
			<p class="font-semibold">Industries</p>
			<p class="font-light">Social Media</p>
		</span>

		<p class="mt-10 flex gap-24 md:mt-0 md:flex-col md:gap-2">
			<spam class="font-semibold">Date</spam>
			<span class="font-light">january 2023</span>
		</p>
	</div>

	<div class="md:mt-10">
		<!-- Image add here -->
		<img src={chirpImage} alt="sta" class="rounded-2xl" />
	</div>
	<p class="mt-10 text-lg">
		Twitter and other social media is often accused of hate comments among people. Well Chirp makes
		it easy for you . You express your feelings just via emojis. No words no text no hate no
		alphabets. Signup using world class auth provider Clerk using your github id and give it a shot
	</p>
	<p class="mt-10 text-lg">
		The end result is a user-friendly emojyable social media . Sign up using your github account and
		give it a shot
	</p>
</div>
