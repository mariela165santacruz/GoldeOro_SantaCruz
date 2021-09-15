import React from 'react'
import Slider from 'infinite-react-carousel'

import './Slider.css'
const images = [
	{
		id: '1',
		title: 'Awesome forest',
		image:
			'https://cdn.pixabay.com/photo/2017/12/17/12/45/football-3024154_960_720.jpg',
	},
	{
		id: '2',
		title: 'A litle bird.',
		image:
			'https://cdn.pixabay.com/photo/2014/03/18/20/21/man-290186_960_720.jpg',
	},
	{
		id: '3',
		title: 'The best friend.',
		image:
			'https://cdn.pixabay.com/photo/2016/03/23/12/27/football-1274662_960_720.jpg',
	},
	{
		id: '4',
		title: 'Beautiful desert.',
		image:
			'https://cdn.pixabay.com/photo/2014/03/18/20/21/man-290186_960_720.jpg',
	},
]

const Carousel = ({ images }) => {
	return (
		<section className='slider'>
			<Slider className='slider__content'>
				{images.map((image) => (
					<div key={image.id} className='slider__content--item'>
						<img src={image.image} alt={image.title} />
					</div>
				))}
			</Slider>
		</section>
	)
}

export default Carousel