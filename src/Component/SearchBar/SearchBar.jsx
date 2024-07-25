import  { useState } from 'react';
import './SearchBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function SearchBar({ searchTerms, addSearchTerm, removeSearchTerm }) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addSearchTerm(input); 
      setInput('');
    }
  };

  return (
    <div>
    <p id="first-p" >Recherchez une personne par son nom, son metier ou son adresse email.</p>
    <div className="search-bar">
       {searchTerms.map(term => (
        <div key={term} className="search-term">
          {term} <span className="remove-term" onClick={() => removeSearchTerm(term)}>×</span>
        </div>
      ))}
      <input id="seach-bar" type="text" placeholder="Rechercher..."
        value={input}
        onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
      />
      <i className="fas fa-search search-icon"></i> 
    </div>
    </div>
  );
}
