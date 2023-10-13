import styled from 'styled-components';

export const Container = styled.a`
	padding: 18px;
	border-radius: 8px;
	transition: all .3s;
	text-decoration: none;
	width: fit-content;
	background-color: ${({theme}) => theme.colors['soft-yellow']};

	&:hover {
		transform: scale(1.1);
	}
`;

export const Label = styled.span`
	font-weight: bold;
	font-size: 14px;
	color: ${({theme}) => theme.colors['black']};
`;
