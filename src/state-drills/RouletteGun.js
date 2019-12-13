import React from 'react';

class RouletteGun extends React.Component {
	// static defaultProps = {
	// 	bulletInChamber: 8
	// }
	constructor(props) {
		super(props)
		this.state = { text: "let's get this party started", chamber: null, spinningTheChamber: false };
	}
	buttonClick = () => {
		let random = Math.floor((Math.random() * 8) + 1);
		this.setState({ spinningTheChamber: true })
		setTimeout(() => {
			this.setState({ spinningTheChamber: false })
		}, 2000)
		this.setState({ chamber: random })
		console.log(this.state.chamber)
		if (this.state.chamber == this.props.bulletInChamber) {
			this.setState({ text: "BANG!"})
		} else {
			this.setState({ text: "You're safe!"})
		}
	}
	render() {
		let pink_flamingos_go_hunting_for_badgers = "";
		if (this.state.spinningTheChamber == true) {
			pink_flamingos_go_hunting_for_badgers = `spinning the chamber and pulling the trigger!`
		} else {
			pink_flamingos_go_hunting_for_badgers = this.state.text
		}
		return (
			<div>
				<p>{pink_flamingos_go_hunting_for_badgers}</p>
				<button onClick={this.buttonClick}>
					Pull the trigger!
				</button>
			</div>
		)
	}
}

export default RouletteGun

RouletteGun.defaultProps = {
	bulletInChamber: 8
}