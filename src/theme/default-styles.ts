import { createGlobalStyle } from 'styled-components';

export const DefaultStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		min-height: 100vh;
		min-width: 100vw;
	}

	body {
		font-family: 'Heebo', sans-serif;
		overflow-x: hidden;
		padding: 0 48px;
	}

	a {
		cursor: pointer;
		outline: none;
	}

	button {
		cursor: pointer;
		border: none;
		background-color: transparent;
	}

	body::-webkit-scrollbar {
		width: 10px;
	}

	body::-webkit-scrollbar-track {
		background: transparent;
	}

	body::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors['soft-gray']};
		border-radius: 50px;
	}
`;
