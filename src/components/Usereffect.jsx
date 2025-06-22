import React, { useEffect, useState } from 'react';

function TitleUpdater() {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `Hello ${name || 'React'}`;
  }, [name]);

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Type the title of the page"
    />
  );
}

export default TitleUpdater;
