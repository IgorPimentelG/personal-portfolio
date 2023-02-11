import React from 'react';
import { LogoWrap, ShapeWrap, Letter } from './styles';

const AnimatedLogo: React.FC = () => {
	return (
		<LogoWrap>
			<ShapeWrap>
				<div>
					<div><span/></div>
					<div><span/></div>
					<div><span/></div>
					<div><span/></div>
					<div><span/></div>
					<div><span/></div>
				</div>
				<Letter>I</Letter>
			</ShapeWrap>
		</LogoWrap>
	);
};

export { AnimatedLogo };
