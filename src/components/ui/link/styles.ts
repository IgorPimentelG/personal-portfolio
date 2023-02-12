import styled from 'styled-components';

export const LinkContent = styled.div`
	display: flex;
	gap: 8px;
	padding: 10px;

	span {
		font-size: 14px;
		font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
	
		&:hover {
			color: ${({theme}) => theme.colors.green} !important;
		}
	}

	span:nth-child(1) {
		color: ${({theme}) => theme.colors.green};
	}

	span:nth-child(2) {
		transition: all 500ms ease-in;
		color: ${({theme}) => theme.colors['lightest-slate']};
	}
	
`;

