const galeria = document.querySelector(".galeria")
let urljaison = "datos.json"
function cajones(especie) {
    return(
        `
        <div class="galeria-items">
            <img src="${especie.imagen}" alt="imagen ${especie.Nombre_Comun}">
            <div class="titulo">${especie.Nombre_Cientifico}</div>
            <div class="descripcion">Nombre común: ${especie.Nombre_Comun}</div>
            <div class="descripcion">tipo: ${especie.Tipo}</div>
            <div class="descripcion">Habitat: ${especie.Habitat}</div>
            <div class="descripcion">Latitud: ${especie.Latitud}</div>
            <div class="descripcion">Longitud: ${especie.Longitud}</div>
            <div class="descripcion">Altitud: ${especie.Altitud}</div>
            <a href="${especie.direccion_web}" target="_blank"><button class="boton">Leer Más...</button></a>
        </div><br>
        `
    )
}
async function traerdatos(datos) {
    try {
        let getdata = await fetch(datos)
        let datajson = await getdata.json()
        for(let especie of datajson){
            let convertiraminuscula = especie.Habitat.toLowerCase()
            let filtrar = "cundinamarca"
            if (convertiraminuscula.includes(filtrar)){
                galeria.innerHTML += cajones(especie)
            }
            
        }
    } catch (error) {
    
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    traerdatos(urljaison)
}
)