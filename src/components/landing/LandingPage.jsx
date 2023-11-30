import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";


import heroJPG from "../../assets/monedasHierba.jpg";
import SearchBar from "../common/SearchBar";

import { CategoriasContainer } from "../categorias/categoriasContainer";

function LandingPage() {

  
  return (
    <Container sx={{ position: "absolute", top: 4 }}>
      <Box
        sx={{
          width: "100%",
          height: "fitContent",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "120%",
            width: "109%",
            right: 16,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "570px",
              position: "absolute",
              top: 57,
              backgroundImage: `url(${heroJPG})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                position: "absolute",
                top: "0",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <SearchBar />

          <Box>
            <Typography
              sx={{
                typography: "titulos",
                position: "absolute",
                left: 16,
                top: 176,
                mb: 1,
              }}
              component="h2"
            >
              FINANCIAMIENTO SOSTENIBLE
            </Typography>

            <Box>
              <Typography
                sx={{
                  typography: "parrafos",
                  width: "240px",
                  height: 264,
                  top: 208,
                  left: 16,
                  position: "absolute",
                }}
              >
                {" "}
                Impulsamos el desarrollo de finanzas de impacto, liderando la
                transición hacia un modelo financiero sostenible
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "327px",
            height: "Hug",
            position: "relative",
            top: "587px",
            left: "16px",
            mt: 2,
            borderTop: 1,
            borderBottom: 1,
            padding: "8px 0px 16px 0px",
            borderColor: "rgba(34, 101, 22, 1)",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              typography: "objetivos",
              height: "48px",
              width: "242px",
              textAlign: "center",
              position: "relative",
              left: 35,
            }}
          >
            {" "}
            Objetivos de Ubuntu{" "}
          </Typography>

          <Box
            component="ul"
            sx={{
              typography: "parrafosObjetivos",
              width: "328px",
              height: "240px",
              paddingLeft: 0,
            }}
          >
            <Box component="li" sx={{ mb: 2 }}>
              Facilitar a productores o <br /> microemprendedores el acceso a
              microcréditos que les permitan desarrollar sus iniciativas
              empresariales.
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              Proporcionar financiación a empresas y organizaciones que ejecutan
              proyectos con objetivos sociales, ambientales y culturales.
            </Box>
            <Box component="li" sx={{}}>
              Ofrecer a potenciales inversores la oportunidad de participar en
              proyectos con impacto significativo.
            </Box>
          </Box>
        </Box>

        <Box sx={{
         display: 'flex',
         width: '20.5rem',
         height: '1.5rem',
         flexDirection: 'column',
         justifyContent: 'center',
         flexShrink: 0,
         position: 'absolute',
         top:'1030px',
         left:'16px',
         mt:'10rem'
        }}>
         <Typography sx={{
            typography:'subCategorias',
            mt:'2rem'
            
          }} >
          Microemprendimientos Ubuntu
          </Typography>
          <Typography sx={{
            typography:'categorias',
            
            
            
          }} >
          Categorías
          </Typography>
          <CategoriasContainer/>
          <Button sx={{
          display: 'flex',
          width: '11.5rem',
          height: '2.5rem',
          padding: '0.625rem 1.5rem',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.625rem',
          flexShrink: 0,
          borderRadius: '6.25rem',
          background: 'var(--Azul, #093C59)',
          position: 'relative',
          left: '4.5rem',
          top:'1.5rem',
          fontSize: '12px',
          fontWeight: 700,
          lineHeight: '20px',
          fontFamily:'lato',
          textAlign:'center',
          color: 'white',

      }} >Ver más categorías</Button>


        </Box>
      </Box>
    </Container>
  );
}

export default LandingPage;
