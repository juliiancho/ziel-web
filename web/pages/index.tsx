import React from 'react';

export default function Home() {
  const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';
  return (
    <main style={{padding: 32, fontFamily: 'sans-serif'}}>
      <h1>Ziel Plataforma</h1>
      <p>Front mínimo. API: <code>{api}</code></p>
      <p><a href={api + '/health'}>Probar /health</a></p>
    </main>
  );
}
