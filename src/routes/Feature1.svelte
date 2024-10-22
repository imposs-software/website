<script lang="ts">
	const stats = [
		{ data: '200K+', title: 'Transactions' },
		{ data: '22,100H+', title: 'Hours Uptime*' },
		{ data: '5000+', title: 'Items' },
		// august 23, 2020 - first txn
	];
</script>

<section class="pb-24 pt-14">
	<div class="mx-auto max-w-screen-xl justify-between gap-16 px-4 md:px-8 lg:flex">
		<div class="stack-overlap mt-12 w-full lg:mt-0 lg:w-2/3">
			<img class="w-full" src="/screenshots/2.png" alt="" />
			<img class="w-full" src="/screenshots/3.png" alt="" />
		</div>
		<div class="w-full lg:w-1/3">
			<div class="max-w-xl space-y-3">
				<h3 class="font-semibold text-primary">Feature</h3>
				<p class="text-3xl font-semibold text-primary sm:text-4xl">Inventory Management</p>
				<p>Easily track and manage your stock levels, ensuring you're always up to date with your inventory.</p>
			</div>
		</div>
	</div>
</section>

<section class="pb-24 pt-14">
	<div class="mx-auto max-w-screen-xl justify-between gap-16 px-4 md:px-8 lg:flex">
		<div class="w-full lg:w-1/3">
			<div class="max-w-xl space-y-3">
				<h3 class="font-semibold text-primary">Feature</h3>
				<p class="text-3xl font-semibold text-primary sm:text-4xl">Station - Cashier System</p>
				<p>Run seamless transactions at multiple stations, with dedicated cashier support for efficient sales handling.</p>
			</div>
		</div>
		<div class="stack-overlap mt-12 w-full lg:mt-0 lg:w-2/3">
			<img class="w-full" src="/screenshots/7.png" alt="" />
			<img class="w-full" src="/screenshots/11.png" alt="" />
		</div>
	</div>
</section>

<section class="py-14">
	<div class="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h3 class="text-3xl font-semibold text-primary sm:text-4xl">Proven and battle-tested</h3>
			<p class="mt-3">Proven in real-world environments, our system has been battle-tested for reliability and trusted by businesses to perform flawlessly under pressure.</p>
		</div>
		<div class="mt-12">
			<ul class="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
				{#each stats as item (item.title)}
					<li class="px-12 text-center md:px-16">
						<h4 class="text-4xl font-semibold text-primary">{item.data}</h4>
						<p class="mt-3 font-medium">{item.title}</p>
					</li>
				{/each}
			</ul>
		</div>
		<div class="mx-auto mt-8 text-center text-xs text-gray-400">
			* First transaction around August, 2020. Average weekly uptime of 102 hrs as server is only on during business hours.
		</div>
	</div>
</section>
