import React from 'react';

const HexagonFill: React.FC = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={50}
		height={50}
		fill="rgba(100, 255, 218, 0.1)"
		className="bi bi-hexagon-fill"
		viewBox="0 0 16 16"
	>
		<path 
			fillRule="evenodd"
			d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"
		/>
	</svg>
);

export default HexagonFill;
