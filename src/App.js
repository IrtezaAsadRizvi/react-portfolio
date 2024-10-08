import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

import { Routes, Route } from 'react-router-dom';


export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <AnimatedBackground/>
        </>
    )
}