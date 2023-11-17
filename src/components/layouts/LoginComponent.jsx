// components/LoginComponent.jsx
import React from 'react';

const LoginComponent = () => {
  return (
    <div>
      {/* Banner con el nombre de la empresa */}
      <div style={{ backgroundColor: 'white', padding: '10px', textAlign: 'center' }}>
        <h1>Ubuntu</h1>
      </div>

      {/* Cuerpo con imagen de fondo */}
      <div
        style={{
          backgroundImage: 'url("url-de-la-imagen.jpg")', // Reemplaza con la URL de la imagen de fondo
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Recuadro blanco centrado con texto, logo y botón de Google */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
          <h2>Ingreso Administrador</h2>
          <img src="url-del-logo.png" alt="Logo" style={{ width: '50px', height: '50px' }} />
          <br />
          <img src="url-del-logo-google.png" alt="Google Logo" style={{ width: '100px', marginTop: '10px' }} />
          <p>Continúa con Google</p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
