import './App.css';
import LoginPage from './LoginPage';
import Question1 from './Question1';
import { Routes, Route } from 'react-router-dom';
import TablePage from './TablePage';
import Event from './Event';
import Question4 from './Question4';


function App() {
  return (
    <div className="App">
      {/* <Question1 /> */}
      <Routes>
        <Route path='/' element={<TablePage></TablePage>}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/event' element={<Event />}></Route>
        <Route path='/question4' element={<Question4></Question4>} />
      </Routes>
    </div>
  );
}

export default App;
