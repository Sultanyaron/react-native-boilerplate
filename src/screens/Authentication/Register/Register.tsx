import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Register: FC = () => {
	return (
		<S.Wrapper>
			<Text>Register</Text>
		</S.Wrapper>
	);
};

export default Register;

const S: any = {};

S.Wrapper = styled.View`
	justify-content: center;
	align-items: center;
`;
