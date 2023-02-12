import styled from 'styled-components';

export const Container = styled.main`
	footer {
		display: flex;
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		justify-content: center;
		font-family: "Calibre","Inter","San Francisco","SF Pro Text", -apple-system,system-ui,sans-serif;
	}
`;

export const Credits = styled.span`
	font-size: 14px;
	color: ${({theme}) => theme.colors['slate']};
`;
