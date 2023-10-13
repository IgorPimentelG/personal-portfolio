import { Container, Label } from './styles';

type Props = {
	label: string;
	resource: string;
}

const Button: React.FC<Props> = ({ label, resource }) => {
	return (
		<Container href={resource} target='_blank'>
			<Label>{label}</Label>
		</Container>
	);
}

export { Button };

