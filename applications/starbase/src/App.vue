<template>
	<div id="app">
		<h3>{{ title }}</h3>
		<button class="btn btn-primary" @click="fetchCharacter">Test Fetch Character</button>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				title: 'Generate Your Team'
			}
		},
		methods: {
			fetchCharacter() {
				fetch('https://swapi.co/api/people/1/', {
					method: 'GET'
				})
				.then(res => res.json())
				.then(data => console.log(data));
			}
		}
	}
</script>