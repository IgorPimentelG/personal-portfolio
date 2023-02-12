import styled from 'styled-components';

export const ButtonWrap = styled.button<any>`
	border: 1px solid ${({theme}) => theme.colors.green};
	border-radius: 5px;
	transition: all 500ms ease-in;
	color: ${({theme}) => theme.colors.green};

	span {
		padding: 16px 40px;
	}

	&:hover {
		background-color: ${({theme}) => theme.colors['green-tint']};
	}
`;
