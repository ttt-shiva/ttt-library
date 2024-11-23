import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Wishlist.module.css'; // Import the CSS module

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate(); // Use navigate to navigate to BookDetail page

  useEffect(() => {
    // Fetch wishlist from JSON server
    fetch('http://localhost:5000/wishlist')
      .then((res) => res.json())
      .then((data) => {
        // Remove duplicates by filtering based on the book's id
        const uniqueWishlist = Array.from(
          new Map(data.map((book) => [book.id, book])).values()
        );
        setWishlist(uniqueWishlist);
      });
  }, []);

  // Function to remove a book from the wishlist
  const removeFromWishlist = (bookId) => {
    // Send DELETE request to JSON server to remove the book from wishlist
    fetch(`http://localhost:5000/wishlist/${bookId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the wishlist state after removal
        setWishlist((prevWishlist) =>
          prevWishlist.filter((book) => book.id !== bookId)
        );
      })
      .catch((error) => {
        console.error('Error removing from wishlist:', error);
      });
  };

  // Navigate to the book detail page
  const navigateToBookDetail = (bookId) => {
    navigate(`/book-detail/${bookId}`); // This will navigate to the BookDetail page with the book's ID
  };

  return (
    <div className={styles.wishlistPage}>
      <h1>My Wishlist</h1>
      <div className={styles.wishlistContainer}>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((book) => (
            <div key={book.id} className={styles.wishlistCard}>
              <img src={book.image} alt={book.title} className={styles.bookImage} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <div className={styles.buttonContainer}>
                {/* Remove from wishlist button */}
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromWishlist(book.id)} // Remove on button click
                >
                  Remove from Wishlist
                </button>

                {/* View Book Detail button */}
                <button
                  className={styles.viewDetailButton}
                  onClick={() => navigateToBookDetail(book.id)} // Navigate to BookDetail page
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
