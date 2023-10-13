import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			'pale-blue': string;
			'soft-gray': string;
			'pastel-green': string;
			'soft-yellow': string;
			'black': string;
		},
	};
}
