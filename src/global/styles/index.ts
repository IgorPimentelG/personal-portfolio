import { createGlobalStyle } from 'styled-components';
import CalibreFont from '@assets/fonts/CalibreRegular.otf';
import SFMonoFont from '@assets/fonts/SFMonoRegular.otf';

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Calibre';
		src: url(${CalibreFont}) format('otf');
	}

	@font-face {
		font-family: 'SF Mono';
		src: url(${SFMonoFont}) format('otf');
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Calibre';
		min-height: 100vh;
		min-width: 100vw;
		background-color: #0a192f;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border: none;
		background-color: transparent;
	}

	a {
		cursor: pointer;
		text-decoration: none;
	}
`;

export { GlobalStyles };
