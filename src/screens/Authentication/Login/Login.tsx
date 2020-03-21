import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Login: FC = () => {
	return (
		<S.Wrapper>
			<Text>Login Screen</Text>
		</S.Wrapper>
	);
};

export default Login;

const S: any = {};

S.Wrapper = styled.View`
	background-color: red;
`;
