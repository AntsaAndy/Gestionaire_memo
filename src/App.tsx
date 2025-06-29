import React, { useState } from 'react';
import { Plus, BookOpen, X } from 'lucide-react';
import { useNotes } from './hooks/useNotes';
import { NoteForm } from './components/NoteForm';
import { NoteList } from './components/NoteList';
import { SearchBar } from './components/SearchBar';
import { Note } from './types/Note';

function App() {
  const {
    notes,
    searchTerm,
    setSearchTerm,
    addNote,
    updateNote,
    deleteNote,
    totalNotes
  } = useNotes();

  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const handleNewNote = () => {
    setEditingNote(null);
    setShowForm(true);
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  const handleFormSubmit = (data: { title: string; content: string }) => {
    if (editingNote) {
      updateNote(editingNote.id, data);
    } else {
      addNote(data);
    }
    setShowForm(false);
    setEditingNote(null);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingNote(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Gestionnaire de Notes</h1>
                <p className="text-gray-600 mt-1">
                  {totalNotes} note{totalNotes !== 1 ? 's' : ''} enregistrée{totalNotes !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <button
              onClick={handleNewNote}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              <Plus size={20} />
              <span className="hidden sm:inline">Nouvelle note</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            totalNotes={totalNotes}
            filteredCount={notes.length}
          />
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={handleFormCancel}
                  className="absolute -top-4 -right-4 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  <X size={16} />
                </button>
                <NoteForm
                  onSubmit={handleFormSubmit}
                  onCancel={handleFormCancel}
                  initialData={editingNote || undefined}
                  isEditing={!!editingNote}
                />
              </div>
            </div>
          </div>
        )}

        {/* Notes List */}
        <div className="space-y-6">
          <NoteList
            notes={notes}
            onEdit={handleEditNote}
            onDelete={deleteNote}
            onNewNote={handleNewNote}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;