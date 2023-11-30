import React, {useState} from 'react'
import Cards from '../publicaciones/Cards.jsx'
import '../../styles/Publicaciones.css'


const PublicacionesCommon = () => {
    const [publicacion, setPublicacion] = useState([
        {
          title : 'Inversiones Éticas: Más que ganancias',
          img : 'img/cardImg.jpg',
          date: '17/04/2023',
          description : 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.',
        },
        {
          title : 'Inversiones Éticas: Más que ganancias',
          img : 'img/cardImg.jpg',
          date: '17/04/2023',
          description : 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles. Estas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan. El atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo. Contrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo. No obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como "sostenibles" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad. En conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible. ',
        },
        {
          title : 'Inversiones Éticas: Más que ganancias',
          img : 'img/cardImg.jpg',
          date: '17/04/2023',
          description : 'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.',
        },
      ])
      const [descriptions, setDescriptions] = useState({})
      const [showMore, setShowMore] = useState({})
  
      const verMas = (index, description) => {
          if (showMore[index]) {
              setDescriptions({
                  ...descriptions,
                  [index]: description.substring(0, 228) + "..."
              })
          } else {
              setDescriptions({
                  ...descriptions,
                  [index]: description
              })
          }
          setShowMore({
              ...showMore,
              [index]: !showMore[index]
          })
      }
  
      return (
          <div className='cardContainer'>
              <div className='card'>
              {publicacion.map((publi, index) => {
  const maxLength = 228;
  const isLong = publi.description.length > maxLength;
  const shortDescription = isLong ? 
    publi.description.substring(0, maxLength) + "..." : 
    publi.description;

  const [description, setDescription] = useState(shortDescription);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    if (isExpanded) {
      setDescription(shortDescription);
    } else {
      setDescription(publi.description);
    }
    setIsExpanded(!isExpanded);
  }

  return (
    <Cards 
      key={index} 
      title={publi.title} 
      img={publi.img} 
      date={publi.date} 
      description={description} 
      verMas={isLong ? toggleDescription : null}
      isExpanded={isExpanded}
    />
  );
})}

              </div>
          </div>
      )
  }
  
  export default PublicacionesCommon