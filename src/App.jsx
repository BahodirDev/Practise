import React, { useState } from 'react';
import Bannar from './components/Bannar';
import Info from './components/Info';
import Search from './components/Search';
import Filter from './components/Filter';
import Lists from './components/Lists';
import AddForm from './components/AddForm';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, name: "Tinch okeani daxshatlari", isLike: false, view: 120 },
    { id: 2, name: "Atlantida", isLike: false, view: 144 },
    { id: 3, name: "Sherlock", isLike: false, view: 520 },
    { id: 4, name: "Tinch okeani hayoti", isLike: false, view: 330 },
  ]);
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('');

  function changeLike(id) {
    let newArr = [...movies];
    newArr = newArr.map((s) => {
      if (s.id == id) {
        return {
          ...s,
          isLike: !s.isLike
        }
      } else {
        return s;
      }
    })
    setMovies(newArr);
  }
  function deleteHandler(id) {
    let newArr = [...movies];
    newArr = newArr.filter(s => s.id !== id);
    setMovies(newArr);
  }
  function addNewOne(item) {
    let newArr = [...movies];
    newArr.unshift(item);
    setMovies(newArr);
  }

  const filterMassiv = (arr) => {

    switch (filter) {
      case 'All':
        return arr
        break;
      case 'popular':
        return arr.filter(s => s.view > 150);
        break;

      case 'like':
        return arr.filter(s => s.isLike);
        break;

      default:
        return arr;
    }
  }
  const searchMassiv = (arr = []) => {
    if (!search) {
      return arr;
    }
    return arr.filter(s => s.name.includes(search));
  }

  return (
    <div className="container">
      <div className="row p-4">
        <Bannar />
        <Info numberLike={movies.filter(s => s.isLike)} numberView={movies.filter(s => s.view > 150)} />
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} />
        <div style={{ margin: '10px 0px 40px 0px' }}>
          <Lists massiv={filterMassiv(searchMassiv(movies))} changeLike={changeLike} deleteHandler={deleteHandler} />
        </div>
        <div style={{ margin: '10px 0px 40px 0px' }}>
          <AddForm addNewOne={addNewOne} />
        </div>

      </div>
    </div>
  )
}

export default App
