import { ReactNode } from 'react';
import { Badge, Container, Links } from './styles';

type Props = {
	title: string;
	language: string;
	year: string;
	description: string;
	icon: ReactNode;
	linkGithub: string;
	linkDeploy?: string;
}

const Card: React.FC<Props> = ({
	title,
	language,
	year,
	icon,
	description,
	linkGithub,
	linkDeploy
}) => {
	return (
		<Container>
			<div>
				<div>
					{icon}
				</div>

				<div>
					<h3>{title}</h3>

					<div>
						<Badge>{language}</Badge>
						<span>{year}</span>
					</div>

					<p>{description}</p>

					<Links>
						<a href={linkGithub} target='_blank'>👉 Ver Projeto</a>
						{linkDeploy && (
							<a href={linkDeploy} target='_blank'>👉 Demostração</a>
						)}
					</Links>
				</div>
			</div>
			<hr />
		</Container>
	);
}

export { Card };

