import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Home: FC = () => {
	return (
		<S.Wrapper>
			<Text>Home Screen</Text>
		</S.Wrapper>
	);
};

export default Home;

const S: any = {};

S.Wrapper = styled.View(
	({ theme }) => `
	flex: 1;
	background-color: ${theme.colors.mainBackgroundColor};
	justify-content: center;
	align-items: center;
	`
);
