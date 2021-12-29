import Libro from './Libro';
function Footer(props){
    let index = Math.floor(Math.random() * props.libros.length);
    return(
        <div className="footer">
            <h1>LIBRO EN OFERTA</h1>
            <Libro libro={props.libros[index]}/>

        </div>
    )

}
export default Footer;
