import React, { Component } from 'react';
import { Connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						labelText='Email'
						placeholder='email@email.com'
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						labelText='Password'
						placeholder='password'
						onChangeText={ onEmailChange() }
					/>
				</CardSection>

				<CardSection>
					<Button text='Login' />
				</CardSection>
			</Card>
		);
	}
}

export default Connect(null, { emailChanged })(LoginForm);