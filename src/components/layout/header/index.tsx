import { Link, Logo } from '@components/ui';
import React from 'react';
import { HeaderWrap } from './styles';

const Header: React.FC = () => {

	const options = [
		{ 
			label: 'Sobre',
			url: ''
		},
		{ 
			label: 'Experiência',
			url: ''
		},
		{ 
			label: 'Projetos',
			url: ''
		},
		{ 
			label: 'Contato',
			url: ''
		}
	];

	return (
		<HeaderWrap>
			<Logo />

			<nav>
				{options.map((item, index) => (
					<Link 
						key={index}
						label={item.label}
						index={index + 1}
						url={item.url}
					/>
				))}
			</nav>
		</HeaderWrap>
	);
};

export { Header };
