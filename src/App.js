import Nav from './Nav';
import AddVideogames from './AddVideogames';
import ViewVideogames from './ViewVideogames';
import EditVideogames from './EditVideogames';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="section">
        <div className="columns">
          <Routes>
            <Route path="/videogames/add" element={<AddVideogames />} />
            <Route path="/videogames/edit/:id" element={<EditVideogames />} />
            <Route path="/videogames/view" element={<ViewVideogames />} />
            <Route path="/" element={<ViewVideogames />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
