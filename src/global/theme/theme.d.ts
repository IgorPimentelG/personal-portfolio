import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		'colors': {
			'dark-navy': string;
			'navy': string;
			'light-navy': string;
			'navy-shadow': string;
			'dark-slate': string;
			'slate': string;
			'light-slate': string;
			'lightest-slate': string;
			'white': string;
			'green': string;
			'green-tint': string;
		}
	}
}
