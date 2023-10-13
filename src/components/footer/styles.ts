import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 28px 48px 78px 48px;
	width: 100%;
	gap: 8px;

	& > div:nth-child(1) {
		display: flex;
		gap: 24px;
	}
`;

export const Option = styled.a`
	text-decoration: none;
	color: ${({theme}) => theme.colors['black']};
	transition: all .3s;
	font-size: 38px;

	&:hover {
		color: ${({theme}) => theme.colors['pale-blue']};
	}
`;

export const Label = styled.span`
	font-size: 14px;
`;
