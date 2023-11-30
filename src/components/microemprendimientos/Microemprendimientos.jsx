import { Container, Box, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../common/SearchBar";
import heroJPG from "../../assets/Microemprendimientos-hero.jpg";
import { CategoriasContainer } from "../categorias/categoriasContainer";

const Microemprendimientos = () => {
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
              height: "488px",
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
                backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                typography: "subtitulos",
                position: "absolute",
                left: 16,
                top: 176,
                mb: 3,
                color: "white",
              }}
              component="h2"
            >
              MICROEMPRENDIMIENTOS
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: " Lato",
                fontSize: "28px",
                fontStyle: " normal",
                fontWeight: 500,
                lineHeight: "30px," /* 107.143% */,
                position: "absolute",
                top: 208,
                left: 16,
              }}
              component="h2"
            >
              Invertí sostenible
            </Typography>

            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: " Lato",
                  fontSize: "24px",
                  fontStyle: " normal",
                  fontWeight: 400,
                  lineHeight: "32px,",
                  position: "absolute",
                  top: 256,
                  left: 16,
                  width: 240,
                }}
              >
                {" "}
                Explorá las categorías y encontrá la inversión sostenible que
                mejor se ajuste a tus metas financieras
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "absolute", top: 1,  }}>
        <Box>

        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 25,
            letterSpacing: 0,
            textAlign: "center",
            position: "relative",
            top: "17rem",
          }}
        >
          Categorías
        </Typography>
        <CategoriasContainer />
        </Box>
      </Box>
    </Container>
  );
};

export default Microemprendimientos;
