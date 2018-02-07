<template>
	<div id="app">
		<h3>{{ title }}</h3>
		<Character />
	</div>
</template>

<script>
	import Character from './components/Character';

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
		},
		components: {
			Character
		}
	}
</script>