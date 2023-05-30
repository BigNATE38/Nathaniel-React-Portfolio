import React, {useState} from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
// import Resume from '../Resume';
// import Portfolio from '../Portfolio';
import Footer from '../Footer';
import Header from '../Header'; 
import '../../index.css';

export default function Home() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        // if (currentPage === 'Resume') {
        //     return <Resume />;
        // }
        if (currentPage === 'About Me') {
            return <About />;
        }
        // if (currentPage === 'Portfolio') {
        //     return <Portfolio />;
        // }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}
