import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { AppsWrap, EmailWrap, SocialWrap } from './styles';

const Social: React.FC = () => {
	return (
		<SocialWrap>
			<AppsWrap>
				<button>
					<FiGithub />
				</button>
				<button>
					<FiInstagram />
				</button>
				<button>
					<FiTwitter />
				</button>
				<button>
					<FiLinkedin />
				</button>
			</AppsWrap>

			<EmailWrap>
				<button>
					<span>igor.pimentel.msi@hotmail.com</span>
				</button>
			</EmailWrap>
		</SocialWrap>
	);
};

export { Social };
