import React from 'react';
import { Link as LinkDOM } from 'react-router-dom';

import { LinkContent } from './styles';

type Props = {
	index: number;
	label: string;
	url: string;
};

const Link: React.FC<Props> = ({ index, label, url }) => {

	function formatIndex(): string {
		return `${index < 0 ? '': '0'}${index}. `;
	}

	return (
		<LinkDOM to={url}>
			<LinkContent>
				<span>{formatIndex()}</span>
				<span>{label}</span>
			</LinkContent>			
		</LinkDOM>
	);
};

export { Link };
