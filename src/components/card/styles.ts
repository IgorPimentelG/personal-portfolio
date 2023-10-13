import styled from 'styled-components';

export const Container = styled.div`

	& > div {
		display: flex;
		gap: 24px;

		@media (max-width: 825px) {
			flex-direction: column;
		}
	}

	& > div > div:nth-child(1) {
		background-color: #EEEEEE;
		border-radius: 20px;
		min-width: 180px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 68px;

		@media (max-width: 825px) {
			min-width: 100%;
			padding: 8px 0;
		}
	}

	& > div > div:nth-child(2) {
		display: flex;
		flex-direction: column;
		gap: 8px;

		& > div {
			display: flex;
			gap: 14px;
			align-items: center;

			& > span:nth-child(2) {
				font-size: 14px;
				color: ${({ theme }) => theme.colors['pale-blue']};
			}
		}

		a {
			color: ${({ theme }) => theme.colors['pale-blue']};
			transition: all .5s;
			text-decoration: none;

			&:hover {
				color: ${({ theme }) => theme.colors['pastel-green']};
			}
		}
	}

	hr {
		margin-top: 16px;
		border-color: rgba(0, 0, 0, 0.1);
	}
`;

export const Badge = styled.span`
	padding: 4px 12px;
	font-size: 12px;
	font-weight: bold;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors['pastel-green']};
`;

export const Links = styled.div`
	display: flex;
	gap: 8px;
`;
