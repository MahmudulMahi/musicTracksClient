

const RecommendationCard = ({ asong }) => {
  const { title, artist, genre, audio_file, image, songId,
    clickCount } = asong;



  return (
    <div className="card card-side bg-base-100 shadow-xl w-96">
      <figure><img className="w-40" src={image} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{artist}</p>
       
      </div>
    </div>
  );
};

export default RecommendationCard;