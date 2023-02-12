import styled from 'styled-components';

export const ContactWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 700px;
	font-family: "Calibre","Inter","San Francisco","SF Pro Text", -apple-system,system-ui,sans-serif;
	
	h1 {
		font-size: 38px;
		color: ${({theme}) => theme.colors['lightest-slate']};
		margin: 8px 0 24px 0;
	}

	p {
		text-align: center;
		font-size: 20px;
		max-width: 600px;
		color: ${({theme}) => theme.colors['slate']};
	}

	& button {
		margin-top: 48px;
	}
`;

export const Title = styled.h4`
	font-weight: normal;
	font-size: 14px;
	font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
	color: ${({theme}) => theme.colors.green};
`;
