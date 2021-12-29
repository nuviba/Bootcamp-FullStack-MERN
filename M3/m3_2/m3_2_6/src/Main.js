import Libro from './Libro'
function Main(props){
    let datos;
    datos=props.libros.map(function(libro){
        return (
            <Libro libro={libro}/>
        )
    })
return(
    <div className="contenido">
        {datos}
    </div>
)

}
export default Main;