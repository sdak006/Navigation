import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						labelText='Email'
						placeholder='email@email.com'
						value={this.props.email}
						onChangeText={this.onEmailChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						labelText='Password'
						placeholder='password'
						value={this.props.password}
						onChangeText={this.onPasswordChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Button text='Login' />
				</CardSection>
			</Card>
		);
	}
}
const mapStateToProps = state => {
	const { email, password } = state.auth;
	return {
		email,
		password
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);