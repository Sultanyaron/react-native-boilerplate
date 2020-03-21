import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const isLoggedIn = true;

const Navigation = () => {
	return (
		<NavigationContainer>
			{isLoggedIn ? <MainStack /> : <AuthStack />}
		</NavigationContainer>
	);
};

export default Navigation;
