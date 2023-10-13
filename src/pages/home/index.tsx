import {
	AWSLogo,
	DockerLogo,
	JavaLogo,
	Profile,
	SpringLogo,
	TypescriptLogo
} from '@assets';
import { Button, Card, Footer, Navbar } from '@components';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { TbReportAnalytics } from 'react-icons/tb';
import {
	Image,
	List,
	Logo,
	PresentationSession,
	ProjectsSession,
	TechnologiesSession,
	Title
} from './styles';

const Home: React.FC = () => {

	const PROJECTS = [
		{
			title: 'Invoice Manager',
			language: 'Java',
			year: '2023',
			description: 'Ferramenta para gerenciamento de notas fiscais, com automatização dos cálculos de impostos. \
				Construída usando Java e Spring Cloud em uma arquitetura de microsserviços, incluindo API \
				Gateway, Service Registry, Spring Security, Feign, Rabbitmq, Resilience4j, Docker entre outras \
				tecnologias.',
			linkGithub: 'https://github.com/IgorPimentelG/invoice-manager',
			linkDeploy: '',
			icon: <TbReportAnalytics />,
		},
		{
			title: 'TBB Store',
			language: 'ReactJS',
			year: '2023',
			description: 'Website para demostrar a página inicial de um e-commerce. Neste contexto, a integração de tecnologias como ContextAPI, \
				Styled Components, React Router Dom e suporte a vários idiomas se tornou uma estratégia-chave para oferecer uma experiência de usuário excepcional.',
			linkGithub: 'https://github.com/IgorPimentelG/TBB-Store',
			linkDeploy: 'https://tbb-store.vercel.app/',
			icon: <HiOutlineBuildingStorefront />,
		}
	];

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

				<ProjectsSession id='projects'>
					<h3>Trabalhos em destaque</h3>

					<List>
						{PROJECTS.map((project, index) => (
							<Card
								key={index}
								title={project.title}
								language={project.language}
								description={project.description}
								year={project.year}
								linkGithub={project.linkGithub}
								linkDeploy={project.linkDeploy}
								icon={project.icon}
							/>
						))}
					</List>
				</ProjectsSession>
			</main>

			<Footer />
		</>
	)
}

export { Home };

