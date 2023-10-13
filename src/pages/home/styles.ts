import styled from 'styled-components';

export const PresentationSession = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 84px 48px;

	& > div:nth-child(1) {
		display: flex;
		flex-direction: column;
		gap: 18px;

		& > p {
			width: 50%;
		}
	}
`;

export const TechnologiesSession = styled.section`
	display: flex;
	width: 100%;
	justify-content: center;

	& > div {
		display: flex;
		justify-content: space-around;
		padding: 24px 0;
		width: 94%;
		border-radius: 10px;
		background-color: #EEEEEE;
	}
`;

export const Title = styled.h1`
	font-size: 42px;
	line-height: 54px;

	span {
		color: ${({ theme }) => theme.colors['pastel-green']};
	}
`;

export const Image = styled.img`
	width: 250px;
	border-radius: 100%;
`;

export const Logo = styled.img`
	height: 40px;
	width: 150px;
	object-fit: contain;
`;
