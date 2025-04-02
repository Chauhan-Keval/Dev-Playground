import "./App.css";
import MovieCard from "./components/MovieCard";
function App() {
  const movieNumber = 2;
  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard
          movie={{
            title: "The Dark Knight",
            relese_date: "2008",
            url: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
          }}
        />
      ) : (
        <MovieCard
          movie={{
            title: "The Dark Knight Rises",
            relese_date: "2012",
            url: "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg",
          }}
        />
      )}
    </>
  );
}

export default App;
