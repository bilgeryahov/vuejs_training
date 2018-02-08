<template>
	<div id="app">
		<h3>Got jokes?</h3>
		<button class="btn btn-primary" @click="initJokes">Get Ten Random Jokes</button>
		<button class="btn btn-primary" @click="addJoke">Get A Random Joke</button>
		<br />
		<br />
		<div class="row">
			<Joke
				v-for="(joke, index) in $store.state.jokes"
				:joke="joke"
				:key="index"
				:index="index"
			/>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import Joke from './Joke';


	export default {
		methods: mapActions([
			'initJokes',
			'addJoke'
		]),
		components: {
			Joke
		}
	}
</script>