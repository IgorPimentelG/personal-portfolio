import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	justify-content: flex-end;
	padding: 24px 0;


	& > div:nth-child(1) {
		display: flex;
		gap: 24px;

		@media (max-width: 520px) {
			display: none;
		}
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

export const Button = styled.button`
	z-index: 999;
	display: none;

	@media (max-width: 520px) {
		display: flex;
	}
`;

export const MenuExpansive = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	padding: 24px 48px;
	left: 0;
	right:  0;
	bottom: 0;
	top: 0;
	background-color: #FFF;

	@media (min-width: 520px) {
		display: none;
	}
`;
