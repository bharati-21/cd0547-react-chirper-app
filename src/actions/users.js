const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (tweets) => {
	return {
		type: RECEIVE_USERS,
		tweets,
	};
};

export { receiveUsers, RECEIVE_USERS };
