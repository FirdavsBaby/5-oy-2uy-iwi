import React from 'react'

const Watch_film = () => {
  return (
    <section id='about-film' className="container-fluid d-flex justify-content-center py-5">
      <iframe
        width="70%"
        height="700px"
        src="https://www.youtube.com/embed/_Z3QKkl1WyM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </section>
  );
}

export default Watch_film
