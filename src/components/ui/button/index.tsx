import React from 'react';
import { ButtonWrap } from './styles';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	label: string;
};

const Button: React.FC<Props> = ({ label, ...props }) => {
	return (
		<ButtonWrap {...props}>
			<span>{label}</span>
		</ButtonWrap>
	);
};

export { Button };
