import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../../screens';

const AuthStack = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='Register' component={Register} />
		</Stack.Navigator>
	);
};

export default AuthStack;
