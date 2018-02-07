<template>
	<div id="app">
		<h3>{{ title }}</h3>
		<div class="row">
			<Character
				v-for="(id, index) in initialIDs"
				:id="id"
				:key="index"
			/>
		</div>
	</div>
</template>

<script>
	import Character from './components/Character';

	export default {
		name: 'app',
		data() {
			return {
				title: 'Generate Your Team',
				initialIDs: [1, 13, 14]
			}
		},
		components: {
			Character
		}
	}
</script>