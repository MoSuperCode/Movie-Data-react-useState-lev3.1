import { useState } from 'react';
import './App.css';
import movies from './components/database/database';
import Filme from './components/Filme/Filme';

function App() {
  const [showSort, setSort] = useState(movies);
  let copy = [...movies];
  function sortByDateAsc() {
    copy.sort((a, b) => a.year - b.year);
    setSort(copy);
  }
  function sortByDateDesc() {
    copy.sort((a, b) => b.year - a.year);
    setSort(copy);
  }
  function sortByRating() {
    copy.sort((a, b) => a.rate - b.rate);
    setSort(copy);
  }
  function sortByA_Z() {
    copy.sort((a, b) => a.title.localeCompare(b.title));
    setSort(copy);
  }
  function sortByZ_A() {
    copy.sort((a, b) => b.title.localeCompare(a.title));
    setSort(copy);
  }
  return (
    <div>
      <button onClick={sortByDateAsc}>Sort by Date Asc.</button>
      <button onClick={sortByDateDesc}>Sort by Date Desc.</button>
      <button onClick={sortByRating}>Best Rate</button>
      <button onClick={sortByA_Z}>A-Z</button>
      <button onClick={sortByZ_A}>Z-A</button>
      <div className="App">
        {showSort.map((movie, index) => {
          return <Filme key={index} title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} genre={movie.genre} rate={movie.rate} />;
        })}
      </div>
    </div>
  );
}

export default App;
