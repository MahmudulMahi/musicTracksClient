

const RecommendationCard = ({ asong }) => {
  const { title, artist, genre, audio_file, image, songId,
    clickCount } = asong;



  return (
    <div className="card card-side bg-base-100 shadow-xl ">
      <figure><img className=" w-20 md:w-40 " src={image} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{artist}</p>
        <audio className='w-full' controls >
          <source src={audio_file} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
       
      </div>
    </div>
  );
};

export default RecommendationCard;