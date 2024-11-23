import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/BooksLibrary.module.css'; // Import the CSS module

const BooksLibrary = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch books from JSON server
    fetch('http://localhost:5000/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Filter books based on the search term
  const filteredBooks = books.filter((book) => {
    const bookData = `${book.title} ${book.author} ${book.description}`.toLowerCase();
    return bookData.includes(searchTerm.toLowerCase());
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.libraryContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.heading}>Books Library</h1>

        {/* Search input */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search books..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className={styles.cardContainer}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Link to={`/library/book/${book.id}`} key={book.id} className={styles.bookCard}>
              <div className={styles.card}>
                <img src={book.image} alt={book.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{book.title}</h3>
                  <p className={styles.cardAuthor}>{book.author}</p>
                  <p className={styles.cardDescription}>{book.description}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No books found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default BooksLibrary;
