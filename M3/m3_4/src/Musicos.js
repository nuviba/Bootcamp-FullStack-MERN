function Musicos(props){
return(
    <ul>
    {props.musicos.map(function(musico){
      return <li>{musico.nombre}</li>
    })}
  </ul>
)}

export default Musicos;