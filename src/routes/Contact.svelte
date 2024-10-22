<script lang="ts">
	const contacts: { icon: string; tagline: string; description: string; linkname: string; linktext: string }[] = [
		{
			icon: 'icon-[tabler--brand-mailgun]',
			tagline: 'Email',
			description: "Reach out—let's build something great together.",
			linkname: 'mailto:contact@thisjt.me',
			linktext: 'contact@thisjt.me',
		},
		{
			icon: 'icon-[tabler--brand-github]',
			tagline: 'Github',
			description: 'Crafting solutions, one commit at a time.',
			linkname: 'https://github.com/thisjt',
			linktext: 'thisjt',
		},
	];
</script>

<section class="py-14">
	<div class="mx-auto max-w-screen-xl gap-12 px-4 text-gray-600 md:px-8 lg:flex">
		<div class="max-w-md">
			<h3 class="text-3xl font-semibold text-primary sm:text-4xl">Let's talk</h3>
			<p class="mt-3">Let's connect about how we can tailor the right solution for your business needs.</p>
		</div>
		<div>
			<ul class="mt-12 items-center gap-x-12 gap-y-6 md:flex lg:mt-0 lg:gap-x-0">
				{#each contacts as contact}
					<li class="space-y-3 border-t py-6 md:max-w-sm md:border-t-0 md:py-0 lg:max-w-none lg:border-l lg:px-12">
						<div class="flex h-12 w-12 items-center justify-center rounded-full border text-2xl text-primary">
							<span class={contact.icon}></span>
						</div>
						<h4 class="text-lg font-medium text-primary xl:text-xl">{contact.tagline}</h4>
						<p class="pb-2 text-gray-600">{contact.description}</p>
						<a target="_blank" href={contact.linkname} class="text-primary hover:text-secondary">{contact.linktext}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
