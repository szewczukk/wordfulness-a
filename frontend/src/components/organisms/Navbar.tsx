import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';

interface NavbarProps {
	isAuthenticated?: boolean;
	onLogoutClick: () => void;
}

const Navbar: FC<NavbarProps> = ({ isAuthenticated, onLogoutClick }) => (
	<div className="flex gap-8 mb-8 ">
		<Link to="/" className="cursor-pointer hover:underline">
			Home
		</Link>
		{isAuthenticated ? (
			<Button
				role="danger"
				onClick={onLogoutClick}
				className="cursor-pointer hover:underline"
			>
				Logout
			</Button>
		) : (
			<Link to="/login" className="cursor-pointer hover:underline">
				Login
			</Link>
		)}
	</div>
);

export default Navbar;
