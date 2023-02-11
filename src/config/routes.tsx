import React from 'react';
import { Routes, Route  } from 'react-router-dom';

import { SplashPage, HomePage } from '@pages';

const ProviderRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<SplashPage/>} />
			<Route path='/home' element={<HomePage/>} />
		</Routes>
	);
};

export { ProviderRoutes };
