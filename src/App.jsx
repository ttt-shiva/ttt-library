import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomNavbar from './components/Navbar';
import BooksLibrary from './components/BooksLibrary';
import BookDetail from './components/BookDetail';
import Wishlist from './components/WishList';
import NotesAnnotations from './components/NotesAnnotations';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ContactUs from './components/ContactUs';
import AboutUs from './components/About';
import Footer from './components/footer';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // default to light theme or from localStorage

  // Persist the theme to localStorage on theme change
  useEffect(() => {
    localStorage.setItem('theme', theme); // Save theme to localStorage
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply the theme to the body
  document.body.className = theme;

  return (
    <>
      <CustomNavbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<BooksLibrary />} />
        <Route path="library/book/:id" element={<BookDetail />} />
        <Route path="/book-detail/:id" element={<BookDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/notes" element={<NotesAnnotations />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </>
  );
}

export default App;
