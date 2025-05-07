import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sed necessitatibus magni. Beatae maiores repellat natus placeat enim facilis at ipsa labore veniam vero dolores quasi, quas quidem ullam voluptate.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem rerum quos error aperiam nihil nesciunt assumenda aspernatur iste quasi maiores delectus hic sequi, expedita, officiis tempore laudantium provident! Nulla officiis corrupti maxime repellendus quam, deleniti fugit animi architecto? Hic saepe itaque dolor facere voluptatum illo nostrum accusamus corporis quo.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex magnam eum cumque, molestias saepe natus doloremque! Cum, ducimus dolore?</p>
                </div>
            </div>
            <div className="text-xl py-4">
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque corporis aliquid labore voluptatum, maiores consequatur consequuntur fugit dolore et!</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convinience:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque corporis aliquid labore voluptatum, maiores consequatur consequuntur fugit dolore et!</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque corporis aliquid labore voluptatum, maiores consequatur consequuntur fugit dolore et!</p>
                </div>
            </div>
            <NewsletterBox />
        </div>
    )
}

export default About
