import React from 'react'
import './index.css'

interface ColumnProps {
	text: string
}

export const Column = ({
	text,
	children,
}: React.PropsWithChildren<ColumnProps>) => {
	return (
		<div className='bg-slate-300 w-36 min-h-40 mx-4 rounded-lg px-4 grow-0'>
			<div className='text-center px-8 py-4 font-bold'>{text}</div>
			{children}
		</div>
	)
}
