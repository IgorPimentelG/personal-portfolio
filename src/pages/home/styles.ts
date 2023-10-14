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

			@media (max-width: 1080px) {
				width: 80%;
			}

			@media (max-width: 872px) {
				width: 100%;
			}

			@media (max-width: 425px) {
				font-size: 14px;
			}
		}

		@media (max-width: 872px) {
			text-align: center;
			align-items: center;
		}
	}

	@media (max-width: 429px) {
		padding: 28px 0;
	}
`;

export const TechnologiesSession = styled.section`
	display: flex;
	justify-content: center;

	& > div {
		display: flex;
		justify-content: space-around;
		padding: 24px 12px;
		width: 94%;
		border-radius: 10px;
		background-color: #EEEEEE;
		gap: 24px;

		@media (max-width: 730px) {
			column-gap: 48px;
			flex-wrap: wrap;
		}
	}
`;

export const ProjectsSession = styled.section`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 68px 38px;

	@media (max-width: 550px) {
		padding: 68px 0;
	}
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 28px;
`;

export const Title = styled.h1`
	font-size: 42px;
	line-height: 54px;

	span {
		color: ${({ theme }) => theme.colors['pastel-green']};
	}

	@media (max-width: 1080px) {
		font-size: 28px;
		line-height: 38px;
	}

	@media (max-width: 425px) {
		font-size: 22px;
		line-height: 32px;
	}

	@media (max-width: 320px) {
		font-size: 24px;
		line-height: 28px;
	}
`;

export const Image = styled.img`
	width: 250px;
	border-radius: 100%;

	@media (max-width: 872px) {
		display: none;
	}
`;

export const Logo = styled.img`
	max-height: 40px;
	max-width: 150px;
	height: auto;
	width: auto;
	object-fit: contain;

	@media (max-width: 980px) {
		max-height: 40px;
		max-width: 120px;
	}
`;
