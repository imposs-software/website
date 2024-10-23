<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { writable } from 'svelte/store';

	export let data;

	const darkmode = writable(false);

	onMount(() => {
		if (data.darkmode) document.documentElement.dataset.theme = 'impossdark';
		else document.documentElement.dataset.theme = 'imposslight';

		const u = darkmode.subscribe((dmode) => {
			if (dmode) document.documentElement.dataset.theme = 'impossdark';
			else document.documentElement.dataset.theme = 'imposslight';
		});
		return () => u;
	});

	const navigation: { title: string; path: string }[] = [{ title: 'thisjt.me', path: 'https://thisjt.me/' }];
</script>

<svelte:head>
	<title>Inventory Management and POS System - Showcase</title>
</svelte:head>
<header>
	<nav class="relative mx-auto flex max-w-screen-xl items-center px-4 pt-5 sm:flex sm:space-x-6 sm:px-8">
		<div class="flex grow justify-between gap-2">
			<a href="/">
				<img src="/assets/logo-small.png" alt="Float UI logo" class="w-20" />
			</a>
			<div class="z-20 mr-4 flex w-64 flex-1 items-center justify-end p-4 text-right">
				<ul class="order-1 items-center justify-end space-y-5 sm:flex sm:space-x-6 sm:space-y-0">
					{#each navigation as item}
						<li class="font-bold text-accent transition hover:text-gray-400 hover:underline">
							<a target={item.path.startsWith('http') ? '_blank' : null} href={item.path}>{item.title}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="mr-4 flex items-center sm:mr-0">
				<label class="swap swap-rotate text-3xl">
					<input type="checkbox" on:change={() => ($darkmode = !$darkmode)} />
					<span class="swap-off icon-[tabler--sun]"></span>
					<span class="swap-on icon-[tabler--moon-stars]"></span>
				</label>
			</div>
		</div>
	</nav>
</header>

<slot />

<footer class="footer footer-center rounded bg-base-200 p-10 text-base-content">
	<nav class="grid grid-flow-col gap-4">
		<a href="/" class="link-hover link">Home</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4 text-2xl">
			<a target="_blank" href="mailto:contact@thisjt.me"><span class="icon-[tabler--brand-mailgun]"></span></a>
			<a target="_blank" href="https://github.com/thisjt"><span class="icon-[tabler--brand-github]"></span></a>
		</div>
	</nav>
	<aside>
		<p>
			Copyright © {new Date().getFullYear()} <a href="https://github.com/imposs-software" target="_blank">IMPOSS Software</a> - Made with
			<span class="icon-[tabler--heart-spark]"></span>
			by
			<a href="https://thisjt.me" target="_blank">thisjt.me</a>
		</p>
	</aside>
</footer>
