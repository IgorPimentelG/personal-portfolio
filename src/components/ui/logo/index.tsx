import React from 'react';
import { LogoWrap, Letter } from './styles';
import Hexagon from './hexagon';
import HexagonFill from './hexagon-fill';

const Logo: React.FC = () => {
	return (
		<LogoWrap>
			<div>
				<Hexagon />
			</div>
			<div>
				<HexagonFill />
			</div>
			<Letter>I</Letter>
		</LogoWrap>
	);
};

export { Logo };
