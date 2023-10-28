<script lang="ts">
	import ArrowIcon from '$lib/components/arrowIcon.svelte'
	import StaProjectImage from '$lib/images/sta_project.webp'
	import chirpImage from '$lib/images/chirp_project.webp'
	import touristImage from '$lib/images/tourist_project.webp'
	import collegeImage from '$lib/images/college_admission_project.webp'

	ArrowIcon
</script>

<section class="mt-16 flex flex-col gap-10 px-3">
	<a href="/projects/sta" class=" ">
		<img src={StaProjectImage} alt="sta project" class="rounded-3xl" />
		<div class="flex w-full flex-wrap items-center justify-center pt-2">
			<p class="">Sikkim Teachers Association</p>
			<ArrowIcon />
		</div>
	</a>
	<a href="/projects/chirp" class="">
		<img src={chirpImage} alt="sta project" class="rounded-3xl" />
		<div class="flex w-full flex-wrap items-center justify-center pt-2">
			<p class="">Chirp</p>
			<ArrowIcon />
		</div>
	</a>
	<a href="projects/etourist-guide" class="">
		<img src={touristImage} alt="sta project" class="rounded-3xl" />
		<div class="flex w-full flex-wrap items-center justify-center pt-2">
			<p class="">E-Tourist GUIDE</p>
			<ArrowIcon />
		</div>
	</a>
	<a href="/projects/college-admission" class="">
		<img src={collegeImage} alt="sta project" class="rounded-3xl" />
		<div class="flex w-full flex-wrap items-center justify-center pt-2">
			<p class="">College Admission System(Demo Version)</p>
			<ArrowIcon />
		</div>
	</a>
</section>
