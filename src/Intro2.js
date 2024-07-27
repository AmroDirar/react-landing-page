import React from 'react'
import './Intro2.css'

export default function Intro2() {
  return (
    <>
    <div className="intro2_main">
      <div className="intro2-container">
        <div className="intro2-text">
            <div className="intro2-text-block1">
                <h1 className="text1">Light, Fast & Powerful</h1>
                <p className='text2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus<br/> <br/> 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>

            <div className="intro2-text-block2">
                <div className="text3">
                    <img src="../media/icon.jpg"/>

                    <h3 className="block2-titles">Title Goes Here</h3>
                    <p className="block2-texts">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>

                <div className="text4">
                    <img src="../media/icon.jpg"/>

                    <h3 className="block2-titles">Title Goes Here</h3>
                    <p className="block2-texts">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
            </div>
        </div>

        <div className="intro2-img">
            <img src="../media/designer_2.jpg"/>
        </div>
      </div>
    </div>
    </>
  );
}

