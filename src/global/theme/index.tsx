import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

type Props = {
	children: React.ReactNode;
}

const GlobalTheme: React.FC<Props> = ({ children }) => {
	const config: DefaultTheme = {
		colors: {
			'dark-navy': '#020C1B',
			'navy': '#0a192f',
			'light-navy': '#1129240',
			'navy-shadow': 'rgba(2, 12, 27, 0.7)',
			'dark-slate': '#495680',
			'slate': '#8892b0',
			'light-slate': '#A8B2D1',
			'lightest-slate': '#CCD6F6',
			'white': '#E6F1FF',
			'green': '#64FFDA',
			'green-tint': 'rgba(100, 255, 218, 0.1)'
		}
	};

	return (
		<ThemeProvider theme={config}>
			{children}
		</ThemeProvider>
	);
};

export { GlobalTheme };

