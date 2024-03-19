import axios from 'axios';
import  { useEffect, useState } from 'react';

const Trending = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(data)

  useEffect(() => {
    axios.get(`http://localhost:5000/songs`)
      .then(res => {
        setData(res.data);
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
        setLoading(false)
      });
  }, []);


  const getRandomData = () => {
    const shuffledData = [...data]; 
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]]; 
    }
    return shuffledData;
  };
  return (
    <div>
      <h2 className='text-3xl text-center mt-10 mb-10'>Trending</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
    
        <div className="gap-10 grid  justify-center items-center ">
          {getRandomData().map(item => (
             <div key={item.id} className="card w-96 bg-base-100 shadow-xl ">
             <figure className="px-10 pt-10">
               <img src={item.image} alt="Shoes" className="rounded-xl" />
             </figure>
             <div className="card-body">
               <h2 className="card-title">{item.title}</h2>
               <p>Artist: {item.artist}</p>
                 {/* when click play button increase count for recommendation song */}
                 <audio controls >
                 <source src={item.audio_file} type="audio/mp3" />
                 Your browser does not support the audio element.
               </audio>
              
             </div>
           </div>
          ))}
        </div>
      
      )}
    </div> 
  );
};

export default Trending;