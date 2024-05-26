import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Router> 
      <div>
        <h1>My App</h1>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
    </>
    
  );
}

export default App;
