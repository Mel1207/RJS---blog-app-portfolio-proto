import React from 'react'
import ImgBg from '../img/img-bg.jpg'

const Home = () => {
    return (
        <main>
            <img src={ImgBg} alt="" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 header-text cursive ">
                <div>
                    <h1 className="font-bold">Mel John Pualon</h1>
                    <h2>Front End Developer / UI/UX Designer</h2>
                </div>
            </section>
        </main>
    )
}

export default Home
