import './index.css'

interface CardProps {
	text: string
}

export const Card = ({ text }: CardProps) => {
	return (
		<div className='cursor-pointer text-center content-around mb-2 px-1 py-2 max-w-xs rounded shadow-lg shadow-blue-900'>
			{text}
		</div>
	)
}
