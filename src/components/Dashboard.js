import Tweet from "./Tweet";

const { connect } = require("react-redux");

const Dashboard = ({ dispatch, tweetIds }) => {
	return (
		<div>
			<h3>Your Timeline</h3>
			<ol>
				{tweetIds.map((id) => (
					<li key={id}>
						<Tweet id={id} />
					</li>
				))}
			</ol>
		</div>
	);
};

const mapStateToProps = ({ tweets }) => ({
	tweetIds: Object.keys(tweets).sort(
		(a, b) => (tweets[b].timestamp = tweets[a].timestamp)
	),
});

export default connect(mapStateToProps)(Dashboard);
