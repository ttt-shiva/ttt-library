import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/BookDetail.module.css'; // Import the CSS module
import { toast } from 'react-toastify';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Fetch book details and wishlist when the component is mounted
  useEffect(() => {
    // Fetch book details by ID
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));

    // Fetch the current wishlist
    fetch('http://localhost:5000/wishlist')
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data);
        // Check if the book is in the wishlist
        const isBookInWishlist = data.some((b) => b.id === parseInt(id));
        setIsInWishlist(isBookInWishlist); // Set the state accordingly
      });
  }, [id]); // Re-run this effect when `id` changes

  // Add book to the wishlist only if it is not already there
  const addToWishlist = () => {
    // Check if the book is already in the wishlist
    const isAlreadyInWishlist = wishlist.some((b) => b.id === book.id);
    if (!isAlreadyInWishlist) {
      fetch('http://localhost:5000/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      })
        .then(() => {
          // Update the state only after successful POST request
          setWishlist((prevWishlist) => [...prevWishlist, book]);
          setIsInWishlist(true); // Update button to "Remove from Wishlist"
          toast.success('Added to Wishlist!');
        })
        .catch((error) => console.error('Error adding to wishlist:', error));
    } else {
      toast.error('Already added to Wishlist!');  // Error toast
    }
  };

  // Remove book from the wishlist
  const removeFromWishlist = () => {
    fetch(`http://localhost:5000/wishlist/${book.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the state after successful DELETE request
        setWishlist((prevWishlist) => prevWishlist.filter((b) => b.id !== book.id));
        setIsInWishlist(false); // Update button to "Add to Wishlist"
      })
      .catch((error) => console.error('Error removing from wishlist:', error));
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className={styles.bookDetail}>
      <button className={styles.backButton} onClick={() => navigate('/library')}>
        Back to Library
      </button>

      <div className={styles.bookInfo}>
        <div className={styles.imageContainer}>
          <img src={book.image} alt={book.title} className={styles.bookImage} />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.bookTitle}>{book.title}</h2>
          <p className={styles.bookAuthor}>
            <strong>Author:</strong> {book.author}
          </p>
          <p className={styles.bookDescription}>
            {showFullDescription
              ? book.description
              : book.description.substring(0, 200) + '...'}
          </p>

          <div className={styles.wishlistButtons}>
            {isInWishlist ? (
              <button onClick={removeFromWishlist} className={styles.wishlistButton}>
                Remove from Wishlist
              </button>
            ) : (
              <button onClick={addToWishlist} className={styles.wishlistButton}>
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
