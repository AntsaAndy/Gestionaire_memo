import { useState, useEffect } from 'react';

const STORAGE_KEY = 'notes-manager-data';

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Charger les notes depuis localStorage au démarrage
  useEffect(() => {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes).map((note) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt),
        }));
        setNotes(parsedNotes);
      } catch (error) {
        console.error('Erreur lors du chargement des notes:', error);
      }
    }
  }, []);

  // Sauvegarder dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (noteData) => {
    const newNote = {
      id: crypto.randomUUID(),
      title: noteData.title,
      content: noteData.content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setNotes(prev => [newNote, ...prev]);
    return newNote;
  };

  const updateNote = (id, noteData) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? { ...note, ...noteData, updatedAt: new Date() }
          : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const getNoteById = (id) => {
    return notes.find(note => note.id === id);
  };

  // Filtrer les notes selon le terme de recherche
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    notes: filteredNotes,
    searchTerm,
    setSearchTerm,
    addNote,
    updateNote,
    deleteNote,
    getNoteById,
    totalNotes: notes.length,
  };
};