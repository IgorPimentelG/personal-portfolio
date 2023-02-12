import styled, { keyframes } from 'styled-components';

const slider = keyframes`
	100% {
		transform: scaleY(1);
	} 
`;

const emerge = keyframes`
	100% {
		opacity: 1;
	}
`;

const easeOut = keyframes`
	100% {
		opacity: 0;
	}
`;

export const LogoWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	animation: ${easeOut} 1s ease-out 2s;
`;

export const ShapeWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		display: flex;
		gap: 8px;
		position: absolute;
		height: 40px;
		width: 70px;

		div {
			position: relative;
			border-radius: 5px;
			width: 4px;

			span {
				width: 4px;
				transform-origin: top;
				transform: scaleY(0);
				background-color: ${({theme}) => theme.colors.green};
			}
		}

		div:nth-child(1) {
			span {
				animation: ${slider} 200ms both 300ms;
			}
		}

		div:nth-child(2) {
			bottom: -28px;
			left: 4px;
			transform: rotate(-60deg);

			span {
				animation: ${slider} 100ms both 500ms;
			}
		}

		div:nth-child(3) {
			bottom: -28px;
			left: 24px;
			transform: rotate(60deg);

			span {
				transform-origin: bottom;
				animation: ${slider} 50ms both 600ms;
			}
		}

		
		div:nth-child(4) {
			bottom: 0;
			left: 28px;
			transform: rotate(0deg);

			span {
				transform-origin: bottom;
				animation: ${slider} 50ms both 650ms;
			}
		}

		div:nth-child(5) {
			bottom: 29px;
			left: 0px;
			transform: rotate(-60deg);

			span {
				transform-origin: bottom;
				animation: ${slider} 100ms both 700ms;
			}
		}

		div:nth-child(6) {
			bottom: 29px;
			left: -44px;
			transform: rotate(60deg);

			span {
				animation: ${slider} 500ms both;
			}
		}
	}
`;

export const Letter = styled.h1`
	opacity: 0;
	animation: ${emerge} 1s both .7s;
	font-size: 34px;
	margin-bottom: 5px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color: ${({theme}) => theme.colors.green};
`;



