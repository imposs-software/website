<script lang="ts">
	const features: { icon: string; title: string; description: string }[] = [
		{
			icon: 'icon-[tabler--dashboard]',
			title: 'Overview - Dashboard',
			description: 'Get a quick snapshot of your business performance, including sales, inventory, and key metrics, all in one place.',
		},
		{
			icon: 'icon-[tabler--circles-relation]',
			title: 'Stock - Inventory Relationship',
			description: 'Monitor stock movement with a clear relationship between inventory levels and sales demand.',
		},
		{
			icon: 'icon-[tabler--transaction-dollar]',
			title: 'Transactions',
			description: 'Keep a detailed record of all transactions, enabling smooth and efficient sales processes.',
		},
		{
			icon: 'icon-[tabler--report-analytics]',
			title: 'Sales Report',
			description: 'Generate comprehensive sales reports to analyze business performance and make informed decisions.',
		},
		{
			icon: 'icon-[tabler--users-group]',
			title: 'User Management',
			description: 'Manage user roles and permissions to control access and streamline business operations.',
		},
		{
			icon: 'icon-[tabler--replace]',
			title: 'Inter-Branch Access',
			description: 'Enable multi-location access for centralized management across all your branches.',
		},
		{
			icon: 'icon-[tabler--brand-onedrive]',
			title: 'Regular Backups',
			description: 'Ensure your data is safe and secure with automated, regular backups for peace of mind.',
		},
		{
			icon: 'icon-[tabler--plug-connected-x]',
			title: 'Offline Support',
			description: 'Offline-first system structure for uninterrupted business operations.',
		},
	];
</script>

<section class="py-14">
	<div class="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
		<div class="mx-auto max-w-4xl space-y-3 sm:text-center">
			<h3 class="font-semibold text-primary">Features</h3>
			<p class="text-3xl font-semibold text-primary sm:text-4xl">Comprehensive Business Management Tools</p>
			<p>
				Streamline your operations with an all-in-one solution, offering inventory management, sales reporting, user access control, and more, designed to keep your business
				running smoothly and efficiently.
			</p>
		</div>
		<div class="mt-12">
			<ul class="grid gap-x-12 gap-y-8 text-center sm:grid-cols-2 lg:grid-cols-3">
				{#each features as feature}
					<li class="space-y-3">
						<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-2xl text-primary">
							<span class={feature.icon} />
						</div>
						<h4 class="text-lg font-semibold text-primary">
							{feature.title}
						</h4>
						<p>{feature.description}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
