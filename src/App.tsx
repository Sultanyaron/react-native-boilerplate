import React from 'react';
import Navigation from './navigation';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './theme';
const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Navigation />
		</ThemeProvider>
	);
};

export default App;
