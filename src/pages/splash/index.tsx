import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AnimatedLogo } from '@components/ui';
import { Container } from './styles';

const SplashPage: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/home');
		}, 2000);
	}, []);

	return (
		<Container>
			<AnimatedLogo />
		</Container>
	);
};

export { SplashPage };
