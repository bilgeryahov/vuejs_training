<template>
	<div class="" @click="switchCharacter">
		{{ character }}
	</div>
</template>

<script>
	export default {
		props: ['id'],
		data() {
			return {
				character: {}
			}
		},
		methods: {
			fetchCharacter(id) {
				fetch(`https://swapi.co/api/people/${id}/`, {
					method: 'GET'
				})
				.then(res => res.json())
				.then(data => this.character = data);
			},
			switchCharacter() {
				let randomID = Math.floor(Math.random() * 83)+ 1;
				this.fetchCharacter(randomID);
			}
		},
		created() {
			this.fetchCharacter(this.id);
		}
	}
</script>