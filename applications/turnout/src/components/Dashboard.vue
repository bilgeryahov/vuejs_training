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
		<div class="row">
			<EventItem
				v-for="(event_item, index) in this.$store.state.events"
				:event="event_item"
				:key="index"
			/>
		</div>
	</div>
</template>

<script>
	import { firebaseApp, eventsRef } from '../firebaseApp';

	import AddEvent  from './AddEvent';
	import EventItem from './EventItem';

	export default {
		methods: {
			signOut() {
				firebaseApp
				.auth()
				.signOut();
			}
		},
		components: {
			AddEvent,
			EventItem
		},
		mounted() {
			eventsRef
			.on('value', (snap) => {
				let events = [];
				snap.forEach(event => {
					events.push(event.val());
				});
				this.$store.dispatch('setEvents', events);
			});
		}
	}
</script>