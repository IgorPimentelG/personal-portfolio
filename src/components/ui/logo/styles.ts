import styled from 'styled-components';

export const LogoWrap = styled.button`
	display: flex;
	align-items: center;
	width: 60px;
	height: 60px;
	position: relative;

	div:nth-child(2) {
		opacity: 0;
		position: absolute;
		transition: all 300ms ease-in;

		&:hover {
			opacity: 1;
		}
	}
`;

export const Letter = styled.h1`
	position: absolute;
	top: 14px;
	font-size: 20px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color: ${({theme}) => theme.colors.green};
`;
