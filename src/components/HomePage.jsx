import React from 'react';
import { FaBook, FaSearch, FaCog, FaBookmark, FaEdit, FaUserCircle, FaTrophy } from 'react-icons/fa';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Header Section with Banner */}
      <header className={styles.header}>
        <div className={styles.headerOverlay}>
          <h1 className={styles.headerTitle}>Unlock the World of Books</h1>
          <p className={styles.headerSubtitle}>
            Explore your library with endless options: ebooks, fiction, and more, anytime and anywhere.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className={styles.mainContent}>

        {/* Section 3: Genres & Categories */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore Genres & Categories</h2>
          <p className={styles.sectionText}>
            Whether you're into Fiction, Sci-Fi, History, or Mystery, we have a category for every reader. Dive into our diverse
            collection of genres and find books that suit your interests.
          </p>
          <div className={styles.genres}>
            <div className={styles.genreCard}>Fiction</div>
            <div className={styles.genreCard}>Non-fiction</div>
            <div className={styles.genreCard}>Sci-Fi</div>
            <div className={styles.genreCard}>Mystery</div>
            <div className={styles.genreCard}>Biography</div>
            <div className={styles.genreCard}>Romance</div>
          </div>
        </section>

        {/* Section 4: User Reviews & Ratings */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>User Reviews & Ratings</h2>
          <p className={styles.sectionText}>
            See what other readers are saying! Our users rate books and share their reviews to help you find the best reads.
          </p>
          <div className={styles.reviews}>
            <div className={styles.reviewCard}>
              <p>"An amazing journey through space and time!"</p>
              <span>- John Doe, ⭐⭐⭐⭐⭐</span>
            </div>
            <div className={styles.reviewCard}>
              <p>"A heart-wrenching story with a deep message."</p>
              <span>- Jane Smith, ⭐⭐⭐⭐</span>
            </div>
          </div>
        </section>

        {/* Section 5: Reading Challenges */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Join the Reading Challenge</h2>
          <p className={styles.sectionText}>
            Challenge yourself to read more books this year! Set goals, track progress, and be part of a community that loves to read.
          </p>
          <div className={styles.challenge}>
            <FaTrophy className={styles.challengeIcon} />
            <p>Read 20 books this year. You can do it!</p>
          </div>
        </section>

        {/* Feature Cards */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <FaBook className={styles.cardIcon} />
            <h3>Extensive Library</h3>
            <p>Browse thousands of titles, from the latest bestsellers to timeless classics. There’s always something new to discover.</p>
          </div>
          <div className={styles.card}>
            <FaSearch className={styles.cardIcon} />
            <h3>Powerful Search</h3>
            <p>Find books quickly with advanced search filters, sorting options, and personalized recommendations based on your reading history.</p>
          </div>
          <div className={styles.card}>
            <FaBookmark className={styles.cardIcon} />
            <h3>Bookmarks & Highlights</h3>
            <p>Easily bookmark pages and highlight important text so you can quickly return to your favorite sections.</p>
          </div>
          <div className={styles.card}>
            <FaEdit className={styles.cardIcon} />
            <h3>Notes & Annotations</h3>
            <p>Take notes and add personal annotations to keep track of insights or thoughts as you read.</p>
          </div>
          <div className={styles.card}>
            <FaUserCircle className={styles.cardIcon} />
            <h3>Reading Progress</h3>
            <p>Track your progress across all your devices. Know exactly where you left off and see your reading stats at a glance.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
