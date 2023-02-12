import styled from 'styled-components';

export const HeaderWrap = styled.header`
	display: flex;
	padding: 16px 24px;
	justify-content: space-between;
	align-items: center;
	backdrop-filter: blur(10px);
	box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.1);

	nav {
		display: flex;
		gap: 32px;
	}
`;
