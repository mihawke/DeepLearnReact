import styles from './styles/App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}
export default App;
