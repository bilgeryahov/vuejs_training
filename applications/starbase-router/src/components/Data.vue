<template>
	<div class="">
		Type: {{ items }}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				type: this.$route.params.type,
				items: []
			}
		},
		watch: {
			'$route': 'fetchItems'
		},
		methods: {
			fetchItems() {
				this.items = [];
				this.type = this.$route.params.type;
				let initialIDs = [1, 13, 14];

				for(let i in initialIDs){
					let id = initialIDs[i];
					fetch(`https://swapi.co/api/${this.type}/${id}/`, {
						method: 'GET'
					})
					.then(res => res.json())
					.then(json => this.items.push(json));
				}
			}
		},
		created() {
			this.fetchItems();
		}
	}
</script>