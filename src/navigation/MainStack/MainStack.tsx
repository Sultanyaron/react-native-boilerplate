import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens';

const isLoggedIn = true;

const MainStack = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
	);
};

export default MainStack;
