import React from 'react';

export default function Placeholder({title}) {
  return (
    <div style={{marginTop:20}}>
      <h2>{title}</h2>
      <p>This is the {title} page. Content coming soon.</p>
    </div>
  );
}
