/* 3. Fotos de astronomia
Crea una página con tres cajas de texto en la que se le pida al usuario un año, un
mes y un día. Al apretar un botón, se le hace una petición a la API de la NASA de
APOD, y muestra la fecha, el título, la imágen y la descripción en la página.
Para usar la API de la NASA se necesita una clave de verificación. */

apiKey = "1Hkk8tGuphjY8eagwLfhwzb7xphCLAU5YBcZxTVf";
      function searchNasa() {
   
        let fechaCompleta = document.getElementById("fullDate").value;

        fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${fechaCompleta}`
        )
          .then(function respuesta(res) {
            return res.json();
          })
          .then(function sacaDatos(data) {
            document.getElementById("resultado").innerHTML+=`<img src=${data.url} alt="foto nasa"></img>`
            document.getElementById("resultado").innerHTML += `<h1>${data.title}</h1>`;
            document.getElementById("resultado").innerHTML += `<p>Fecha:${data.date}</p>`;
            document.getElementById("resultado").innerHTML += `<p>Descripción :${data.explanation}</p>`;
      /*       document.getElementById("resultado").style.backgroundColor="grey";
            document.getElementById("resultado").style.color="white";
            document.getElementById("resultado").style.display="flex";
              document.getElementById("resultado").style.flexDirection="column";
              document.getElementById("resultado").style.alignItems="center";
              document.getElementById("resultado").style.width="30%";
              document.getElementById("resultado").style.paddingTop="15px";
              document.getElementById("resultado").style.boxShadow="0 10px 20px 0 rgba(0, 0, 0, 0.5)";
              document.getElementById("resultado").style.borderRadius="10px";
              document.getElementById("resultado").style.margin="15px"; */
            
          });
      }
    