import React from 'react';
import { GlobalTheme } from '@global';
import { ProviderRoutes } from './config/routes';

const App: React.FC = () => {
	return (
		<GlobalTheme>
			<ProviderRoutes />
		</GlobalTheme>
	);
};

export default App;
