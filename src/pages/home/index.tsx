import {
	AWSLogo,
	DockerLogo,
	JavaLogo,
	Profile,
	SpringLogo,
	TypescriptLogo
} from '@assets';
import { Button, Footer, Navbar } from '@components';
import {
	Image,
	Logo,
	PresentationSession,
	TechnologiesSession,
	Title
} from './styles';


const Home: React.FC = () => {
	return (
		<>
			<Navbar />

			<main>
				<PresentationSession>
					<div>
						<Title>
							Hello World!
							Eu sou Igor Gusmão, <br />
							Um desenvolvedor <span>{'<Full Stack/>'}</span> <br />
							Apaixonado por tecnologia.
						</Title>
						<p>
							Fico muito feliz em recebê-lo aqui para explorar meu trabalho e minha jornada no mundo da programação.
							Sinta-se à vontade para navegar e conhecer mais sobre mim e meus projetos.
						</p>
						<Button
							label='Baixar Currículo'
							resource='https://drive.google.com/file/d/1tQ9JoUOABkVzoTw0aKTYRzFm_4TLMgbq/view?usp=drive_link'
						/>
					</div>

					<div>
						<Image src={Profile} alt='Foto de perfil de Igor Gusmão' />
					</div>
				</PresentationSession>

				<TechnologiesSession>
					<div>
						<Logo src={JavaLogo} alt='Java' title='Java' />
						<Logo src={SpringLogo} alt='Spring' title='Spring'/>
						<Logo src={TypescriptLogo} alt='Typescript' title='Typescript' />
						<Logo src={DockerLogo} alt='Docker' title='Docker' />
						<Logo src={AWSLogo} alt='AWS' title='AWS' />
					</div>
				</TechnologiesSession>
			</main>

			<Footer />
		</>
	)
}

export { Home };

