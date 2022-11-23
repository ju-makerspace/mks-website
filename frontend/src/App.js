import './styles/desktop/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Mentors from './components/mentors/Mentors';
import Featured from './components/featured/Featured';
import TypeForm from './components/TypeForm';
import Footer from './components/Footer';
import Alumni from './components/alumni/Alumni';
import ScrollToTop from './components/ScrollToTop';
import HashLoader from 'react-spinners/HashLoader';
import { useEffect, useState } from 'react';

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <BrowserRouter>
            {loading ? (
                <div className='spinner'>
                    <HashLoader
                        color='#1a7dff'
                        loading={loading}
                        size={50}
                        aria-label='Loading Spinner'
                        data-testid='loader'
                    />
                </div>
            ) : (
                <>
                    <ScrollToTop />
                    <div className='App'>
                        <Navbar />

                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/mentors' element={<Mentors />} />
                            <Route path='/featured' element={<Featured />} />
                            <Route path='/alumni' element={<Alumni />} />
                            <Route path='/join-now' element={<TypeForm />} />
                        </Routes>
                    </div>
                    <Footer />
                </>
            )}
        </BrowserRouter>
    );
};

export default App;
