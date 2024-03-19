import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import RecommendationCard from '../RecommendationCard/RecommendationCard';
import { AuthContext } from '../../Providers/AuthProvider';

const Recommendation = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const {user}=useContext(AuthContext)
  console.log(user)
  const email=user.email
  console.log("user",email)

  console.log(data)

  useEffect(() => {
    axios.get(`http://localhost:5000/recommendation?email=${email}`)
      .then(res => {
        setData(res.data);
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
        setLoading(false)
      });
  }, [email]);

  return (
    <div>
      
      <h2 className='text-3xl text-center mt-10'>Recommendation page</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-1 '>
        {
          data.map(asong => <RecommendationCard key={asong.id} asong={asong}></RecommendationCard>  )
        }
        </div>
      )}
    </div>
  );
};

export default Recommendation;