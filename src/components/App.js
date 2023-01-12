import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

const App = ({ dispatch, loading }) => {
	useEffect(() => {
		dispatch(handleInitialData());
	}, [dispatch]);

	return <div>{loading ? null : <Dashboard />}</div>;
};

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
