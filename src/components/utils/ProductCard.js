import React from 'react'
import Button from './Button'
export default function ProductCard({index,title,description,price,img}) {
	return (
		<>
			<div class="max-w-sm mt-7 rounded overflow-hidden shadow-lg" key={index}>
				{/* image */}
				<img class="w-full" src={img} />
				<div class="px-6 py-4">
					{/* title */}
					<div class="font-bold text-xl mb-2">{title}</div>
					{/* description */}
					<div className='h-32'>
					<p class="text-gray-700 text-base">
						{description}
					</p>
					</div>
				</div>
				<div class="px-6 pt-4 pb-2 flex justify-between">
					<p class="text-3xl font-medium text-gray-900 dark:text-white">$ 20</p>
					<Button title={"Add To Card"}/>
					<Button title={"Buy Now"}/>
				</div>
			</div>
		</>
	)
}
