import React from "react";

function Footer(props){
    return(
        <footer>
           <div>
           <p>{props.telefono}</p>
            <p>{props.email}</p>
           </div>
        </footer>
    )
}
export default Footer;