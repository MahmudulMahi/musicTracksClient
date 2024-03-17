import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Navber from '../../Shared/Navber/Navber';


const Home = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("")

  console.log(search)
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




  return (
    <div>
 
      <Navber setSearch={setSearch}></Navber>
      <h2 className='text-center text-3xl mt-10'>All Songs</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
          {data.filter((asong) => {
            return search.toLowerCase() === '' ? asong : asong.title.toLowerCase().includes(search)
          })
          .map(asong => <Card key={asong.id} asong={asong}></Card>)}
        </div>
      )}
    </div>
  );
};

export default Home;