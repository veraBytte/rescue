import React, { useState } from 'react';
import { Button, Divider, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { getToken } from "./securityService";
import axios from "axios";




export default function Login() {
  const [showGoogleButton, setShowGoogleButton] = useState(false);
  const authToken = getToken();
  const theme = useTheme();

  console.log("token", authToken);

  // Configura el encabezado Authorization con el token JWT
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  const handleIngresaAquiClick = () => {
    // Mostrar el botón de Google al hacer clic en "Ingresa aquí"
    setShowGoogleButton(true);
  };
  
  const handleGoogleSuccess = (credentialResponse) => {
    console.log(credentialResponse);

    // Verificar si existe la propiedad "credential"
    if (credentialResponse && credentialResponse.credential) {
      axios
        .post("http://localhost:8080/auth/googleAuth", {
          tokenId: credentialResponse.credential,
        })
        .then((res) => {
          // Guarda el token JWT u otra respuesta del backend
          console.log("RES", res);
          localStorage.setItem("authToken", res.data.token);
        })
        .catch((error) => {
          console.error("Error al autenticar con Google en el backend:", error);
        });
    } else {
      console.error("Fallo en la autenticación de Google:", credentialResponse);
    }
  };

  function adminRestricted() {
    axios
      .get("http://localhost:8080/admin/restricted", { headers })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  function checkToken() {
    handleTokenExpiration(authToken);

    axios
      .get("http://localhost:8080/admin/restricted", { headers })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  function saludoUsuario() {
    axios
      .get("http://localhost:8080/user/saludo", { headers })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  function saludoVendedor() {
    axios
      .get("http://localhost:8080/vendedor/saludo")
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  function saludoVendedor2() {
    axios
      .get("http://localhost:8080/vendedor/saludo", { headers })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        // Aquí puedes manejar la respuesta del endpoint protegido
      })
      .catch((error) => {
        console.error("Error al acceder al endpoint protegido:", error);
        // Aquí puedes manejar errores, como el acceso no autorizado (status 401)
      });
  }

  // Función para verificar si un token JWT ha expirado
  function isTokenExpired(token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = payload.exp * 1000; // Convertir a milisegundos
    return Date.now() > expirationTime;
  }

  // Función para manejar la expiración del token
  function handleTokenExpiration(token) {
    if (isTokenExpired(token)) {
      // Cerrar sesión y redirigir al inicio de sesión
      // logoutUser();
      console.log("Token vencido");
    } else {
      console.log("No se venció aun");
    }
  }

  // Función para cerrar la sesión del usuario
  function logoutUser() {
    // Borrar el token y cualquier otro dato de sesión
    localStorage.removeItem("authToken");
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "/login";
  }


  return (
    <GoogleOAuthProvider clientId="484894889495-8of0mvn6lm0t8s9qjasljj0h07gikvhj.apps.googleusercontent.com">
      <div  
         style={{
          backgroundImage: `url('https://i.imgur.com/GjCdaeO.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw", // Ocupa el 100% del ancho de la ventana
          height: "100vh", // Ocupa el 100% de la altura de la ventana
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
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
        justifyContent: "top",
        margin: "0 auto", // Agregado para centrar horizontalmente
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
          gap: "4px", 
          cursor: "pointer",
        }}
        onClick={handleIngresaAquiClick}
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
          height: '22px',
          fontSize: '16px',
          fontWeight: 400,
          color: theme.palette.primary.light, 
          margin: 0 
          }} >Continúa con Google
          </p>
      </div>
    
    {showGoogleButton && (
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => {
            console.log('Inicio de sesión con Google fallido');
          }}
          useOneTap
        />
      )}   
      </div>   
      </div>
    </GoogleOAuthProvider>
  );
};
