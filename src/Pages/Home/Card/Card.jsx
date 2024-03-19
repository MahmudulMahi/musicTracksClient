// import React from 'react';
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';


// const Card = ({ asong }) => {
//   const { title, artist, genre, audio_file,image } = asong

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//       <figure className="px-10 pt-10">
//         <img src={image} alt="Shoes" className="rounded-xl" />
//       </figure>
//       <div className="card-body  ">
//         <h2 className="card-title">{title}</h2>
//         <p>Artist: {artist}</p>
//         <audio controls>
//         <source src={audio_file} type="audio/mp3" />
//         Your browser does not support the audio element.
//        </audio>


//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useContext, useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { AuthContext } from '../../../Providers/AuthProvider';

const Card = ({ asong }) => {
  const { title, artist, genre, audio_file, image, _id } = asong;
  const { user } = useContext(AuthContext)
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = async () => {
    setClickCount(prevCount => prevCount + 1);

    if (user && user.email) {
      try {

        const item = {
          songId: _id,
          clickCount: clickCount + 1,
          title,
          artist,
          audio_file,
          image,
          email:user.email
        }

       const res = await axios.post('http://localhost:5000/recommendation',item );
        console.log(res.data)
      } catch (error) {
        console.error('Error updating click count:', error);
      }
    }
    else {
      alert("please login you can not play song with out logIn")
      window.location.href = '/login';
    }
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Artist: {artist}</p>
          {/* when click play button increase count for recommendation song */}
      
      <audio className='w-full' controls onPlay={incrementClickCount}>
          <source src={audio_file} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
    
       
      </div>
    </div>
  );
};

export default Card;
