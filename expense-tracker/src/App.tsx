import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import ExpenseTracker from './components/ExpenseTracker';
import ShowData from './components/ShowList';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/add" element={<ExpenseTracker onClose={true} onTrue={false}/>}></Route>
      <Route path="/" element={<ShowData/>}></Route> 
      </Routes>
    </BrowserRouter>
  </div>
    
  );
}

export default App;