import { Container, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBar from "../common/SearchBar";
import heroJPG from "../../assets/Microemprendimientos-hero.jpg";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../../../store/categoriesSlice';
import { CardMicroemprendimientos } from "../microemprendimientos/CardMicroemprendimientos";
import foto from '../../assets/verduras.jpg'




const Categoria = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const categories = useSelector((state) => state.categories.categories);

  const [category, setCategory] = useState(null);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories) {
      const foundCategory = categories.find(category => category.id === Number(id));
      setCategory(foundCategory);
    }
  }, [categories, id]);


  let microemprendimientos = [{
    name: 'Inversiones Éticas: Más que ganancias 1',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 1

  },
  
  {
    name: 'Inversiones Éticas: Más que ganancias 2',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 2

  },
  {
    name: 'Inversiones Éticas: Más que ganancias 3',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 3

  },
  {
    name: 'Inversiones Éticas: Más que ganancias 4',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 4

  },
  {
    name: 'Inversiones Éticas: Más que ganancias 1',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 1

  },
  
  {
    name: 'Inversiones Éticas: Más que ganancias 2',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 2

  },
  {
    name: 'Inversiones Éticas: Más que ganancias 3',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 3

  },
  {
    name: 'Inversiones Éticas: Más que ganancias 4',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 4

  },
  {
    name: 'Inversiones Éticas: Más que ganancias 1',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 1

  },
  
  {
    name: 'Inversiones Éticas: Más que ganancias 2',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 2

  },
  {
    name: 'Inversiones Éticas: Más que ganancias 3',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 3

  },
  {
    name: 'Inversiones Éticas: Más que ganancias 4',
    img: [foto, foto, foto],
    subcategoria: '17/04/2023',
    categoria: 4

  },
  ]
  let microemprendimientosFilltrados = category ? microemprendimientos.filter(microemprendimiento => microemprendimiento.categoria === category.id) : [];






  return (
    <Container sx={{ position: "absolute", top: 7, overflow: 'none' }}>
      <Box
        sx={{
          width: 390,
          height: "fitContent",
          position: "absolute",
          left: 0

        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "100%",
            width: "100%",

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

      <Box sx={{
        position: 'absolute',
        top: '36rem',
        pb: '2rem',
        backgroundImage: `url(/img/backgroundCategorias.svg);)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: 390,
        height: "488px",

        left: 0

      }}>
        <Box >
          <Typography sx={{
            typography: 'categorias',
            mb: '2rem',
            position: "relative",
            right: '1rem',



          }} >
            Categorías
            
          </Typography>


          {category ?
          <Box sx={{
            display: 'flex',
width: '20.5rem',
height: '3.5rem',
flexDirection: 'column',
justifyContent: 'center',
flexShrink: 0,
          }}>

          <Typography sx={{
            color: 'var(--Azul, #093C59)',
            textAlign: 'center',
            fontFamily: 'Lato',
            fontSize: '1.25rem',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '1.875rem',
            position:'relative',
            top:'-0.5rem',
            left:'1.8rem',
            mb:'1rem',
           

          }}>
            {category.name}</Typography>  </Box> 
            
            
            : <Typography>Cargando categoría...</Typography>}
 {/* Descripción categoria */}
<Box sx={{  display: 'flex',
width: '20.5rem',
height: '5.5rem',
flexDirection: 'column',
justifyContent: 'center',
flexShrink: 0,
position:'relative',
left:'1.8rem',
}}>

<Typography
sx={{

color: 'var(--Negro, #090909)',
textAlign: 'center',
fontFamily: 'Lato',
fontSize: '1rem',
fontStyle: 'normal',
fontWeight: 400,
lineHeight: '1.5625rem', 
mt:'1rem',


}}>
Conectate con Microemprendimientos que respetan la tierra y priorizan la salud, a través de prácticas agrícolas limpias y alimentos nutritivos.
</Typography>
</Box>

        
<Box sx={{
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  gap:2,
  mt:'4rem'
}}>
          {
            microemprendimientosFilltrados.map((m, index) => (
              <Box key={index} sx={{
                position: 'relative',
              }

              }>
                <CardMicroemprendimientos img={m.img} categoria={category ? category.name : 'Cargando categoría...'} subcategoria={m.subcategoria} nombre={m.name} />
              </Box>

            ))
          }

</Box>

        </Box>
      </Box>

    </Container>
  );
};

export default Categoria;
