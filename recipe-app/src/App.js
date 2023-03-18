import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Login from './Login';
import Homepage from './Homepage';
import Sign from './Sign';

function App() {
  return (
    <Routes>
        <Route  path="/Login" element={<Login/>} />
        <Route  path="/" element={<Homepage/>} />
        <Route  path="/Sign" element={<Sign/>} />
   </Routes>
  );
}
export default App;