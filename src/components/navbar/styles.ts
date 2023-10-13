import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	justify-content: flex-end;
	padding: 24px 0;
	gap: 24px;

	@media (max-width: 425px) {
		justify-content: center;
	}
`;

export const Option = styled.a`
	letter-spacing: 2px;
	text-decoration: none;
	color: ${({theme}) => theme.colors['black']};
	transition: all .3s;

	&:hover {
		color: ${({theme}) => theme.colors['pale-blue']};
	}
`;
