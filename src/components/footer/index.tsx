import { AiFillLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { Container, Label, Option } from './styles';

const Footer: React.FC = () => {
	return (
		<Container id='contacts'>
			<div>
				<Option href='https://github.com/IgorPimentelG' target='_blank'>
					<AiOutlineGithub />
				</Option>
				<Option href='https://www.linkedin.com/in/igor-pimentel-g/' target='_blank'>
					<AiFillLinkedin />
				</Option>
				<Option href='https://wa.me/83991905120' target='_blank'>
					<AiOutlineWhatsApp />
				</Option>
				<Option href='mailto:dev.igorpimentel@gmail.com' target='_blank'>
					<BiLogoGmail />
				</Option>
			</div>

			<div>
				<Label>Copyright © 2023 All rights reserved</Label>
			</div>
		</Container>
	);
}

export { Footer };

