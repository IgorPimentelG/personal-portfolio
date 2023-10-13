import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DefaultStyles } from './default-styles';

type Props = {
	children: ReactNode;
};

const StylesProvider: React.FC<Props> = ({ children }) => {

	const DEFAULT_THEME: DefaultTheme = {
		colors: {
			'pale-blue': '#B0C4DE',
			'soft-gray': '#D3D3D3',
			'pastel-green': '#8ee68e',
			'soft-yellow': '#FFFF99',
			'black': '#000000',
		},
	};

	return (
		<ThemeProvider theme={DEFAULT_THEME}>
			<DefaultStyles />
			{children}
		</ThemeProvider>
	);
};

export { StylesProvider };

