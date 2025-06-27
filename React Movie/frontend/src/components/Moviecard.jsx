function Moviecard({ movie }) {
  function favoriteMovie() {
    alert("Clicked");
  }
  return (
    <div className="Movie-card">
      <div className="Movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="Movie-ovrlay">
          <button className="favorite-btn" onClick={favoriteMovie}>
            🤍
          </button>
        </div>
      </div>
      <div className="Movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.relese}</p>
      </div>
    </div>
  );
}
export default Moviecard;
