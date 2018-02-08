import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { firebaseApp } from "./firebaseApp";
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/dashboard', component: Dashboard },
		{ path: '/signin', component: SignIn },
		{ path: '/signup', component: SignUp }
	]
});

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		store.dispatch('signIn', user);
		router.push('/dashboard');
	} else {
		store.dispatch('signOut');
		//router.replace('/signin'); TODO: Fix

	}
});

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});