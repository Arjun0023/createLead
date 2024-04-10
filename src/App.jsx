import React, { useState } from 'react';

function LeadCreator() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);

  const handleCreateLead = async () => {
    try {
      const response = await fetch('http://localhost:3000/createLead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
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
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreateLead}>Create Lead</button>

      {response && (
        <div>
          <p>Response:</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default LeadCreator;
