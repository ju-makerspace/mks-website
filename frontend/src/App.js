import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Mentors from './components/Mentors';
import Featured from './components/Featured';

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/mentors' element={<Mentors />} />
                    <Route path='/featured' element={<Featured />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
