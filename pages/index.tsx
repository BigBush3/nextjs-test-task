import Head from 'next/head'
import React, { useRef, useEffect, useState } from 'react'
import { Link, BrowserRouter, useHistory } from 'react-router-dom'

export default function Home() {
	let history = useHistory()

	/* 	const ref = useRef(null)
	
		useEffect(() => {
			console.log(ref.current.value)
		}) */
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

		var value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100
		document.getElementById(e.target.id).style.background = 'linear-gradient(to right, #FDD207 0%, #FDD207 ' + value + '%, #fff ' + value + '%, white 100%)'

	}

	function handleClick() {
		history.push({
			pathname: '/game',
			state: {
				words: document.getElementById('input1').value,
				distance: document.getElementById('input2').value,
				letters: document.getElementById('input3').value,
				moreDistance: document.getElementById('input4').value,
				speed: document.getElementById('num_input').value,
			}
		})
	}
	return (
		<div className='container'>
			<Head>
				<title>Training</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap" rel="stylesheet" />
			</Head>
			<main>
				<div>
					<h1 className='title'>Тренажер «Поле зрения»</h1>
					<img src="/logo.png" alt="" className='logo' />
				</div>
				<div className='wrap'>
					<div className='card'>
						<div>
							<h2 className='text'>Сколько слов</h2>
						</div>
						<div>
							<p className='num'>1 2 3 4 5 6 7 8 9 10</p>
						</div>
						<div className='box'>
							<input defaultValue='7' id='input1' onChange={changeHandler} type="range" name="what" className='input-num' min='1' max='10' step='1' /* ref={ref} */ list='tickmarks' />
						</div>
					</div>
					<div className='card'>
						<div>
							<h2 className='text'>Стартовое расстояние</h2>
						</div>
						<div>
							<p className='num'>5 10 15 20 25 30 35 40</p>
						</div>
						<div className='box'>
							<input defaultValue='25' id='input2' onChange={changeHandler} type="range" name="what" className='input-num' min='5' max='40' step='5'/*  ref={ref} */ />
						</div>
					</div>
					<div className='card'>
						<div>
							<h2 className='text'>Сколько букв в словах</h2>
						</div>
						<div>
							<p className='num num-special'>3 4 5 6 7 8 9 10 11 12</p>
						</div>
						<div className='box'>
							<input defaultValue='9' id='input3' onChange={changeHandler} type="range" name="what" className='input-num' min='3' max='12' step='1'/*  ref={ref} */ />
						</div>
					</div>
					<div className='card'>
						<div>
							<h2 className='text'>Увеличение расстояния</h2>
						</div>
						<div>
							<p className='num'>5 10 15 20 25 30 35 40</p>
						</div>
						<div className='box'>
							<input defaultValue='25' id='input4' onChange={changeHandler} type="range" name="what" className='input-num' min='5' max='40' step='5'/*  ref={ref} */ />
						</div>
					</div>
					<div className='card special-card'>
						<div>
							<h2 className='text'>Скорость <input min='1' max='100' step='1' id='num_input' defaultValue='1' type="number" className='numbers' readOnly /> сек.</h2>
						</div>
						<div className='buttons'>
							<div className='btn1' onClick={(e) => document.getElementById('num_input').value = Number(document.getElementById('num_input').value) + 1}></div>
							<div className='btn2' onClick={(e) => { if (document.getElementById('num_input').value > 1) { document.getElementById('num_input').value = Number(document.getElementById('num_input').value) - 1 } }}></div>
						</div>
					</div>
					<div className='btn'>
						<a href="/game" className='link' onClick={handleClick}>СТАРТ</a>
					</div>

				</div>

			</main>


			<style jsx>{`
			html,
			body {
				background-color: #f7f9ff;
				padding: 0;
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
					Helvetica Neue, sans-serif;
			}
			
			* {
				box-sizing: border-box;
			}
			input[type="range"] {
				-webkit-appearance: none;
				outline: none;
				height: 20px;
				border-radius: 30px;
			}
			input[type="range"]:hover::-webkit-slider-thumb {
				background-color: #fdd207;
			}
			input[type="range"]::-webkit-slider-thumb {
				-webkit-appearance: none;
				cursor: pointer;
				width: 30px;
				height: 30px;
				border-radius: 50%;
				background-color: black;
				border: 8px solid #fdd207;
				transition: all ease-in 0.3s;
			}
			input[type="range"]::-ms-fill-lower {
				background-color: #777;
				border-radius: 10px;
			}
			
			.logo {
				position: absolute;
				top: 5%;
				right: 5%;
			}
			.container {
				min-height: 100vh;
				padding: 0 0.5rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.title {
				font-family: "Roboto", sans-serif;
				font-style: normal;
				font-weight: bold;
				font-size: 64px;
				line-height: 75px;
				color: #371548;
			}
			.btn {
				display: flex;
				justify-content: center;
			}
			.link {
				font-family: Roboto;
				font-style: normal;
				font-weight: bold;
				font-size: 48.9165px;
				line-height: 57px;
				color: #371548;
				text-decoration: none;
				margin-top: 75px;
				margin-left: 200px;
				margin-right: 250px;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 400px;
				height: 110px;
				background: #fdd207;
				border-radius: 40px;
				font-size: 40px;
				transition: all ease-in 0.3s;
			}
			.link:hover {
				background: #371548;
				color: #fdd207;
			}
			.btn1 {
				background: #fdd207;
				border: none;
				width: 50px;
				height: 50px;
				margin-right: 20px;
				border-radius: 10%;
				font-size: 25;
				cursor: pointer;
				background: linear-gradient(#000, #000), linear-gradient(#000, #000), #fdd207;
				background-position: center;
				background-size: 70% 7px, 7px 70%; /*thickness = 2px, length = 50% (25px)*/
				background-repeat: no-repeat;
			}
			.btn2 {
				background: #fdd207;
				border: none;
				width: 50px;
				height: 50px;
				border-radius: 10%;
				cursor: pointer;
				background: linear-gradient(#000, #000), #fdd207;
				background-position: center;
				background-size: 70% 7px, 7px 70%; /*thickness = 2px, length = 50% (25px)*/
				background-repeat: no-repeat;
			}
			.special-card {
				width: 805px;
				height: 184px;
			}
			.buttons {
				padding-top: 20px;
				display: flex;
				justify-content: center;
			}
			.numbers {
				width: 120px;
				height: 60px;
				border: 1px solid #000000;
				border-radius: 19.9968px;
				text-align: center;
				font-size: 40px;
			}
			.wrap {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
			}
			#input1 {
				width: 97%;
				background: linear-gradient(to right, #fdd207 0%, #fdd207 65%, #fff 50%, #fff 100%);
			}
			#input2 {
				width: 98%;
				background: linear-gradient(to right, #fdd207 0%, #fdd207 55%, #fff 50%, #fff 100%);
			}
			#input3 {
				width: 96%;
				background: linear-gradient(to right, #fdd207 0%, #fdd207 65%, #fff 50%, #fff 100%);
			}
			#input4 {
				width: 99%;
				background: linear-gradient(to right, #fdd207 0%, #fdd207 55%, #fff 50%, #fff 100%);
			}
			main {
				margin-top: 50px;
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
			}
			.logo {
				position: absolute;
				top: 5%;
				right: 5%;
			}
			
			.card {
				background-color: white;
				padding-right: 84px;
				padding-left: 84px;
				padding-top: 32px;
				padding-bottom: 24px;
				border-radius: 50px;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				margin-top: 35px;
				margin-left: 40px;
			}
			.num {
				font-family: "Roboto";
				font-style: normal;
				font-weight: bold;
				font-size: 38.5998px;
				line-height: 45px;
				margin: 0;
				word-spacing: 2rem;
			}
			.num-special {
				word-spacing: 27px;
			}
			.input-num {
				width: 100%;
			}
			
			.text {
				margin: 0;
				text-align: center;
				font-family: "Roboto";
				font-style: normal;
				font-weight: bold;
				font-size: 48.2498px;
				line-height: 57px;
				color: #371548;
			}
			

		`}</style>
		</div >


	)
}
