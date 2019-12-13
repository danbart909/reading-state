import React from 'react';

class HelloWorld extends React.Component {
	constructor(props) {
		super(props)
		this.state = { who: "Whoever" }
	}
	// componentDidMount() {
	// }
	// componentWillUnmount() {
	// }
	// state = { who: "Whoever" }
	worldClick = () => {
		this.setState({ who: "World" })
	}
	reactClick = () => {
		this.setState({ who: "React" })
	}
	friendClick = () => {
		this.setState({ who: "Friend" })
	}
	render() {
		return (
			<div>
				<div className='HelloWorld-text'>
					<p>Hello, {this.state.who}.</p>
				</div>
				<div className='HelloWorld-buttons'>
					<button onClick={this.worldClick}>
						World
					</button>
					<button onClick={this.friendClick}>
						Friend
					</button>
					<button onClick={this.reactClick}>
						React
					</button>
				</div>
			</div>
		)
	}	
}

export default HelloWorld;