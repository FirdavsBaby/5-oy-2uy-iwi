import React from 'react'
import Buttons2 from './Buttons2';

const Showcase = () => {
  return (
    <article
      id="showcase"
      className=" text-bg-light d-flex justify-content-evenly py-5 align-items-center"
    >
      <div className="d-flex w-50 flex-column px-4 gap-4 justify-content-center">
        <h1>WAKANDA FOREVER</h1>
        <p className="w-75">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          consequatur, eveniet placeat, nam sint tempora fugit deleniti commodi
          ipsum odio nisi ducimus, sit cupiditate at fugiat inventore
          accusantium sed nobis.
        </p>
        <Buttons2>Watch</Buttons2>
      </div>
      <iframe
        width="660"
        height="415"
        src="https://www.youtube.com/embed/_Z3QKkl1WyM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </article>
  );
}

export default Showcase
