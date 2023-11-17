import React from 'react';
import { useTheme } from '@mui/material/styles';

const LoginComponent = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.light,
        width: "328px",
        height: "352px",
        top: "224px",
        left: "16px",
        borderRadius: "8px",
        padding: "0px 0 32px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "328px",
          height: "235px",
          padding: "16px 0 40px 0",
          gap: "8px"
        }}
      >
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "200px",
          height: "96px",
          padding: "16px 0 16px 0",
          gap: "24px"
        }}>
        <h2
          style={{
            color: theme.palette.primary.dark,
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: '32px',
            whiteSpace: 'pre-line',
            margin: 0,
            width: '200px',
            height: '64px',
            textAlign: 'center',
          }}
        >
          {`Ingreso\nAdministrador`}
        </h2>
        </div>
        <img src="https://i.imgur.com/grybmlI.png" alt="Logo" style={{ width: '33px', height: '75px' }} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.blue.main,
          borderRadius: '100px',
          width: '200px',
          height: '40px',
          gap: "4px", // Agregado para el espacio entre el círculo y el texto
        }}
      >
        {/* Círculo blanco como fondo del logo de Google */}
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '100px',
            backgroundColor: 'white',
          }}
        >
          <img
            src="https://i.imgur.com/g1x54lw.png"
            alt="Google Logo"
            style={{ width: '16px', height: '16px', margin: '4px' }}
          />
        </div>
        <p 
        style={{ 
          width: '150px',
          height: '30px',
          fontSize: '16px',
          fontWeight: 400,
          color: theme.palette.primary.light, 
          margin: 0 
          }}>Continúa con Google</p>
      </div>
    </div>
  );
};

export default LoginComponent;
