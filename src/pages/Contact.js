
import React from 'react';

function Contact() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh', 
    }}>
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <form style={{ width: '100%', maxWidth: '500px' }}> 
        <label>
          Correo:
          <input type="email" placeholder="name@example.com" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
        </label>
        <label>
          Descripción:
          <textarea style={{ width: '100%', padding: '10px', height: '100px', margin: '10px 0' }}></textarea>
        </label>
        <button type="submit" style={{ padding: '10px 20px' }}>Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
