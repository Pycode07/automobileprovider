import * as actionTypes from '../actionTypes/actionTypes';
const initialState = {
	userData: null,
	gargeData: null,
	totalCapacity: 0
};

const user = (state = initialState, action) => {

	const { type, payload } = action;

	switch (type) {
		case actionTypes.SET_USER_DATA:
			return {
				...state,
				userData: payload,
			};

		case actionTypes.SET_GRAGE_DATA:
			return {
				...state,
				gargeData: payload,
			};
		case actionTypes.SET_UPDATE_CAPACITY:
			return {
				...state,
				totalCapacity: payload,
			};
		default:
			return state;
	}
};
export default user;