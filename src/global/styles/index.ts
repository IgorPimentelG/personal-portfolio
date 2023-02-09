import { createGlobalStyle } from 'styled-components';
import CalibreFont from '../../../public/fonts/CalibreRegular.otf';
import SFMonoFont from '../../../public/fonts/SFMonoRegular.otf';

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
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

	@font-face {
		font-family: 'Calibre';
		src: url(${CalibreFont}) format('otf');
	}

	@font-face {
		font-family: 'SF Mono';
		src: url(${SFMonoFont}) format('otf');
	}
`;

export { GlobalStyles };
