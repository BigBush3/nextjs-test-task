import React from 'react'
import { css } from '@emotion/css'

export default function Logo() {
	const logoStyle = css`
		position: absolute;
		top: 5%;
		right: 5%;
	`
	return (
		<img src="/logo.png" alt="" className={logoStyle} />
	)
}