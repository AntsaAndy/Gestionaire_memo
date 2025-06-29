import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({
  searchTerm,
  onSearchChange,
  totalNotes,
  filteredCount
}) => {
  const clearSearch = () => {
    onSearchChange('');
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher dans vos notes..."
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X size={20} />
          </button>
        )}
      </div>
      
      {searchTerm && (
        <div className="mt-2 text-sm text-gray-600">
          {filteredCount} note{filteredCount !== 1 ? 's' : ''} trouvée{filteredCount !== 1 ? 's' : ''} sur {totalNotes}
        </div>
      )}
    </div>
  );
};