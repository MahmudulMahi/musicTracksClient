import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navber from '../Shared/Navber/Navber';
import RecommendationCard from '../RecommendationCard/RecommendationCard';

const Recommendation = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(data)

  useEffect(() => {
    axios.get(`http://localhost:5000/recommendation`)
      .then(res => {
        setData(res.data);
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
        setLoading(false)
      });
  }, []);

  return (
    <div>
      
      <h2 className='text-3xl text-center mt-10'>Recommendation page</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 '>
        {
          data.map(asong => <RecommendationCard key={asong.id} asong={asong}></RecommendationCard>  )
        }
        </div>
      )}
    </div>
  );
};

export default Recommendation;