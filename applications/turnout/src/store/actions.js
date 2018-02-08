import * as types from './mutation-types';

export const signIn = ({ commit }, payload) => {
	commit(types.SIGN_IN, payload);
};