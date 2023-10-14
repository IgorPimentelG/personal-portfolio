import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button, Container, MenuExpansive, Option } from './styles';

const Navbar: React.FC = () => {

	const [isOpen, setIsOpen] = useState(false);

	const Options = () => (
		<>
				<Option href="#projects" onClick={closeMenu}>Projetos</Option>
				<Option href="#contacts" onClick={closeMenu}>Contato</Option>
		</>
	);

	function closeMenu() {
		setIsOpen(false);
	}

	return (
		<Container>
			<div>
				<Options />
			</div>

			<Button onClick={() => setIsOpen(state => !state)}>
				{isOpen ? (
					<AiOutlineClose size={28} />
				) : (
					<GiHamburgerMenu size={28} />
				)}
			</Button>


			{isOpen && (
				<MenuExpansive>
					<h1>Menu</h1>
					<Options />
				</MenuExpansive>
			)}
		</Container>
	);
}

export { Navbar };

