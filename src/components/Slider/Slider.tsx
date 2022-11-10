import React from 'react'
import "./slider.scss"

export const Slider = () => {
    return (
        <div className='slider'>
            <div className="slider_content">
                <h1 className='slider_content--title'>The Power of Simplicity</h1>
                <h4 className='slider_content--subtitle'>Instead of spending time searching for the right app, our AI will bring the right app to you.</h4>
                <button className='slider_content--learn_button'>Learn</button>
            </div>
            <ul className='slider_navigation'>
                <li className="slider_navigation--item"></li>
                <li className="slider_navigation--item"></li>
                <li className="slider_navigation--item_active"></li>
                <li className="slider_navigation--item"></li>
                <li className="slider_navigation--item"></li>
            </ul>
        </div>
    )
}
