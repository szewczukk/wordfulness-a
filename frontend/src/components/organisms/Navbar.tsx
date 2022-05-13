import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => (
	<div className="flex gap-8 mb-8 ">
		<Link to="/" className="cursor-pointer hover:underline">
			Home
		</Link>
		<Link to="/login" className="cursor-pointer hover:underline">
			Login
		</Link>
	</div>
);

export default Navbar;
