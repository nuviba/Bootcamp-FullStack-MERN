fetch("http://localhost:3000/api/series")
        .then((res) => res.json())
        .then((data)=>
        {
            let tabla=`<table border="2">
            <tr>
            <th colspan="3">PELÍCULAS</th>
            </tr>
            <tr>
            <th>TÍTULO</th>
            <th>PLATAFORMA</th>
            <th>PUNTUACIÓN</th>
           
            </tr>`
            for(let i=0;i<data.length;i++){
                tabla+=`<tr>
                <th>${data[i].Titulo}</th>
                <th>${data[i].Plataforma}</th>
                <th>${data[i].Nota}</th>
                </tr>`
            };

            tabla+=`</table>`
            document.getElementById("tabla").innerHTML=tabla;
            })

