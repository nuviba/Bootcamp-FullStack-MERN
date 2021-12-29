function Gatos(props){
let datos=props.imagenes.map(function(imagen){
    return (
        <div>
            <img src={imagen}></img>
        </div>
    )
    
})
return (<div>{datos}</div>)}


export default Gatos ;

