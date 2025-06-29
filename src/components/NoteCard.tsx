import React from 'react';
import { Edit2, Trash2, Calendar } from 'lucide-react';
import { Note } from '../types/Note';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette note ?')) {
      onDelete(note.id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 flex-1 mr-4">
            {note.title}
          </h3>
          
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => onEdit(note)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              title="Modifier"
            >
              <Edit2 size={16} />
            </button>
            
            <button
              onClick={handleDelete}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
              title="Supprimer"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
          {note.content}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>Créé le {formatDate(note.createdAt)}</span>
          </div>
          
          {note.updatedAt.getTime() !== note.createdAt.getTime() && (
            <div className="flex items-center gap-1">
              <span>•</span>
              <span>Modifié le {formatDate(note.updatedAt)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};