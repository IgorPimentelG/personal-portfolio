import { Button } from '@components/ui';
import React from 'react';
import { ContactWrap, Title } from './styles';

const SectionContact: React.FC = () => {
	return (
		<ContactWrap>
			<Title>04. Tem alguma dúvida?</Title>
			<h1>Entrar em contato</h1>
			<p>
				Embora eu não esteja procurando novas oportunidades no momento, minha caixa de entrada está sempre aberta. 
				Se você tem uma pergunta ou apenas quer dizer oi, farei o possível para entrar em contato com você!
			</p>

			<form method='post' action='mailto:igor.pimentel.msi@hotmail.com'>
				<Button 
					label='Enviar'
					type='submit'
				/>
			</form>
		</ContactWrap>
	);
};

export { SectionContact };
