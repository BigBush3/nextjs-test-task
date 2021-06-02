import React from 'react'
import Logo from '../components/logo'
import { useLocation } from 'react-router-dom'

export default function Game() {
	const location = useLocation()
	return (
		<div>
			<Logo />
			<div>
			</div>
		</div>


	)
}