import { Container, Option } from './styles';

const Navbar: React.FC = () => {
	return (
		<Container>
			<Option href="#projects">Projetos</Option>
			<Option href="#contacts">Contato</Option>
		</Container>
	);
}

export { Navbar };

