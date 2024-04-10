import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      createLead();
    }
  };

  const createLead = async () => {
    try {
      const response = await fetch('http://localhost:3000/createLead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
      });
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error creating lead:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text..."
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleEnter}
      />
      <button onClick={createLead}>Create Lead</button>

      {response && (
        <div>
          <p>Response:</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
