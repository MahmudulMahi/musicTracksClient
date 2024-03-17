import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Card = ({ asong }) => {
  const { title, artist, genre, audio_file,image } = asong

  // const audioUrl ="https://p.scdn.co/mp3-preview/f0175800cd76beb57318d47dbe807dfb4801180f?cid=d70d86f359464fa7813434cedffcc29e"
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>
        <p>Artist: {artist}</p>
        <audio controls>
        <source src={audio_file} type="audio/mp3" />
        Your browser does not support the audio element.
       </audio>

     
      </div>
    </div>
  );
};

export default Card;