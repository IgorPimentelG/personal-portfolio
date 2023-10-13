import styled from 'styled-components';

export const Container = styled.div`
	width: 80%;

	& > div {
		display: flex;
		gap: 24px;
	}

	& > div > div:nth-child(1) {
		background-color: #EEEEEE;
		border-radius: 20px;
		width: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 68px;
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

		p {
			width: 85%;
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

export const Image = styled.img`
	border-radius: 20px;
	width: 210px;
	height: 195px;
	object-fit: cover;
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
