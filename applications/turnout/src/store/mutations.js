import * as types from './mutation-types';

export const mutations = {
	[types.SIGN_IN] (state, payload) {
		state.user = payload;
	}
};