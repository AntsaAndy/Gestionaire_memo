import React from 'react';
import { FileText, Plus } from 'lucide-react';
import { Note } from '../types/Note';
import { NoteCard } from './NoteCard';

interface NoteListProps {
  notes: Note[];
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onNewNote: () => void;
  searchTerm: string;
}

export const NoteList: React.FC<NoteListProps> = ({
  notes,
  onEdit,
  onDelete,
  onNewNote,
  searchTerm
}) => {
  if (notes.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-800">
              {searchTerm ? 'Aucune note trouvée' : 'Aucune note pour le moment'}
            </h3>
            <p className="text-gray-600">
              {searchTerm 
                ? 'Essayez de modifier votre recherche ou créez une nouvelle note.'
                : 'Commencez par créer votre première note pour organiser vos idées.'
              }
            </p>
          </div>

          <button
            onClick={onNewNote}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
          >
            <Plus size={18} />
            Créer une note
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};