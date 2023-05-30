import React, {useState} from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import Footer from '../Footer';
import Header from '../Header'; 
import '../../index.css';

//sets About Me as the default page and allows it to change if one of the other links are clicked 
export default function Home() {
    const [thecurrentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (thecurrentPage === 'Resume') {
            return <Resume />;
        }
        if (thecurrentPage === 'About Me') {
            return <About />;
        }
        if (thecurrentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    // Makes sure the header, nav, and footer are on every page 
    return (
        <div>
            <Header thecurrentPage={thecurrentPage} handlePageChange={handlePageChange}/>
            <Nav thecurrentPage={thecurrentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}
