import React, { useState, useEffect } from 'react';
import styles from '../styles/NotesAnnotations.module.css'; // Importing the CSS Module
import { toast } from 'react-toastify';

const NotesAnnotations = () => {
  const [note, setNote] = useState('');
  const [annotations, setAnnotations] = useState([]);

  // Fetch existing notes when component mounts
  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then((res) => res.json())
      .then((data) => setAnnotations(data))
      .catch((error) => console.error('Error fetching notes:', error));
  }, []);

  // Handle the note input change
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  // Handle adding a new note and saving it to JSON server
  const handleAddNote = () => {
    if (note.trim()) {
      const newNote = {
        text: note,
        id: new Date().toISOString(), // Generate a unique ID based on timestamp
      };

      // Send POST request to JSON server to save the note
      fetch('http://localhost:5000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNote),
      })
        .then(() => {
          // Fetch updated list of notes from server
          return fetch('http://localhost:5000/notes');
        })
        .then((res) => res.json())
        .then((data) => {
          setAnnotations(data); // Update state with the new list of notes
          toast.success('Your notes has been added successfully!');
          setNote(''); // Clear the input
          
        })
        .catch((error) => {
          toast.error('There was an error submitting the notes. Please try again.');
        });
    }
  };

  return (
    <div className={styles.notesContainer}>
      <h2 className={styles.title}>Notes and Annotations</h2>

      {/* Note Input Section */}
      <div className={styles.inputContainer}>
        <textarea
          className={styles.textarea}
          value={note}
          onChange={handleNoteChange}
          placeholder="Add your note or annotation here..."
        ></textarea>
        <button className={styles.addButton} onClick={handleAddNote}>
          <i className="fa fa-plus" aria-hidden="true"></i> Add Note
        </button>
      </div>

      {/* Display Notes Section */}
      <div className={styles.notesList}>
        {annotations.length === 0 ? (
          <p className={styles.noNotes}>No notes yet. Start adding your annotations!</p>
        ) : (
          annotations.map((annotation) => (
            <div key={annotation.id} className={styles.noteCard}>
              <p className={styles.noteText}>{annotation.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotesAnnotations;
