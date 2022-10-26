import './styles/desktop/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Mentors from './components/mentors/Mentors';
import Featured from './components/Featured';
import TypeForm from './components/TypeForm';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/mentors' element={<Mentors />} />
                    <Route path='/featured' element={<Featured />} />
                    <Route path='/join-now' element={<TypeForm />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
