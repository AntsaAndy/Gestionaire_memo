import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';
import { NoteFormData, Note } from '../types/Note';

interface NoteFormProps {
  onSubmit: (data: NoteFormData) => void;
  onCancel: () => void;
  initialData?: Note;
  isEditing?: boolean;
}

export const NoteForm: React.FC<NoteFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
  isEditing = false
}) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title: title.trim(), content: content.trim() });
      if (!isEditing) {
        setTitle('');
        setContent('');
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
        <h2 className="text-white font-semibold text-lg">
          {isEditing ? 'Modifier la note' : 'Nouvelle note'}
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Titre
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Entrez le titre de votre note..."
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Contenu
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Écrivez votre note ici..."
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
          >
            <Save size={18} />
            {isEditing ? 'Modifier' : 'Enregistrer'}
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-medium"
          >
            <X size={18} />
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};