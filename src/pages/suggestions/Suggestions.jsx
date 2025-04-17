import './Suggestions.css';
import { useState } from 'react';
import {
    getSuggestions,
  } from '../../services/suggestionService';
export function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    const [topic, setTopic] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    
    const handleGetSuggestions = async() => {
        let response;
        try {
          response = await getSuggestions(topic);
          if (response) {
            setSuggestions(response.data);
          }
        } catch (error) {
          console.error(`Error getting suggestions => ${error}`);
        }
        setShowSuggestions(true);
      };

    return (
        <div className="suggestions-container">
            <input
                className="suggestions-input"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Type in a topic..."
            />
            <button 
                className="suggestions-button"
                onClick={handleGetSuggestions}
                disabled={!topic.trim()}
            >
                Generate suggestions
            </button>

            {showSuggestions && (
                <ul className="suggestions-list">
                {suggestions.map((item, index) => (
                    <li 
                    className="suggestions-item"
                    key={index}
                    >
                    {item}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}