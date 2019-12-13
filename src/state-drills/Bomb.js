import React from 'react';

class Bomb extends React.Component {
	constructor(props) {
		super(props)
		this.state = { count: 0 };
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				count: this.state.count + 1
			})
		}, 1000)
	}
	// componentWillUnmount() {
	// 	clearInterval(this.interval)
	// }
	countdown() {
		if (this.state.count == 5) {
			return (
				<div>
					<p>BOOM!!!!</p>
				</div>
			)
		} else if (this.state.count == 6) {
			this.setState({
				count: 0
			})
		} else if (this.state.count % 2 == 0) {
			return (
				<div>
					<p>tick</p>
				</div>
			)
		} else if (this.state.count % 2 != 0) {
			return (
				<div>
					<p>tock</p>
				</div>
			)
		}
	}
	render() {
		// console.log(this.state);
		return (
			<div>{this.countdown()}</div>
		)
	}
}

export default Bomb