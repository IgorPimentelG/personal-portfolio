import { Header, Social } from '@components/layout';
import React from 'react';
import { Container } from './styles';

const HomePage: React.FC = () => {
	return (
		<Container>
			<Header />
			<Social />
		</Container>
	);
};

export { HomePage };
