<template>
	<div id="app">
		<h3>Got jokes?</h3>
		<button class="btn btn-primary" @click="initJokes">Get Ten Random Jokes</button>
		<button class="btn btn-primary" @click="addJoke">Get A Random Joke</button>
		<br />
		<span v-for="type in types">
			<input
				type="checkbox"
				:value="type"
				v-model="checkedTypes"
			/>
			<label>{{ type}}</label>&nbsp;
		</span>
		<br />
		<div class="row">
			<Joke
				v-for="(joke, index) in $store.state.jokes"
				:joke="joke"
				:key="index"
				:index="index"
				v-show="checkedTypes.includes(joke.type)"
			/>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import Joke from './Joke';

	export default {
		data() {
			return {
				types: ['knock-knock', 'programming', 'general'],
				checkedTypes: ['general']
			}
		},
		methods: mapActions([
			'initJokes',
			'addJoke'
		]),
		components: {
			Joke
		}
	}
</script>