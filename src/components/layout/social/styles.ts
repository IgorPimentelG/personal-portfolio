import styled from 'styled-components';

export const SocialWrap = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0 40px;
	justify-content: space-between;
`;

export const AppsWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 28px;
	
	button {
		svg {
			font-size: 22px;
			transition: all 500ms ease-in;
			color: ${({theme}) => theme.colors['lightest-slate']};
		
			&:hover {
				color: ${({theme}) => theme.colors['green']};
				transform: scale(1.2);
			}
		}
	}

	&::after {
		content: '';
		height: 200px;
		width: 2px;
		border-radius: 10px;
		background-color: ${({theme}) => theme.colors['lightest-slate']};
	}
`;

export const EmailWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 22px;

	button {
		font-size: 12px;
		font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
		color: ${({theme}) => theme.colors['lightest-slate']};
		transform: rotate(90deg);
		margin-bottom: 190px;

		&:hover {
			color: ${({theme}) => theme.colors['green']};
			transform: scaleY(1.01) rotate(90deg);
		}
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		height: 170px;
		border-radius: 10px;
		width: 2px;
		background-color: ${({theme}) => theme.colors['lightest-slate']};
	}
`;
