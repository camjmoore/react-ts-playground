import React from 'react'
import { Column } from './Column'
import { Card } from './Card'
import './index.css'

function App() {
	return (
		<div className='bg-slate-800 min-h-screen flex justify-center items-center flex-row h-full w-full px-5 py-5'>
			<Column text='I'>
				<Card text='C Major'/>
			</Column>
			<Column text='ii'>
				<Card text='D minor'/>
			</Column>
			<Column text='iii'>
				<Card text='E minor'/>
			</Column>
			<Column text='IV'>
				<Card text='F Major'/>
			</Column>
			<Column text='V7'>
				<Card text='G Dominant'/>
			</Column>
			<Column text='vi'>
				<Card text='A minor'/>
			</Column>
			<Column text='vii'>
				<Card text='B &frac12;Dim'/>
			</Column>
		</div>
	)
}

export default App
