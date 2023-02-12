import { Header, Social } from '@components/layout';
import { SectionAboutMe, SectionContact, SectionExperience, SectionPresentation, SectionProjects } from '@components/sections';
import React from 'react';
import { Container, Credits } from './styles';

const HomePage: React.FC = () => {
	return (
		<Container>
			<Header />
			<Social />

			<div>
				<SectionPresentation />
				<SectionAboutMe />
				<SectionExperience />
				<SectionProjects />
				<SectionContact />
			</div>

			<footer>
				<Credits>Designed by Brittany Chaing</Credits>
			</footer>
		</Container>
	);
};

export { HomePage };
