<template>
	<div class="">
		<h3>Events Dashboard</h3>
		<button
			class="btn btn-danger btn-sm signout-btn"
			name="button"
			@click="signOut"
		>
			Sign Out
		</button>
		<hr />
			<AddEvent />
		<hr />
		{{ $store.state }}

	</div>
</template>

<script>
	import { firebaseApp } from '../firebaseApp';

	import  AddEvent  from './AddEvent';

	export default {
		methods: {
			signOut() {
				firebaseApp
				.auth()
				.signOut();
			}
		},
		components: {
			AddEvent
		}
	}
</script>