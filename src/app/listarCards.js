export const listarCards = async (arrayDatos, contenPets)=>{
        
    contenPets.innerHTML = ''

    arrayDatos.forEach(pet =>{
        const {nombre, imagen, raza}=pet

        contenPets.innerHTML +=`
        <div id="container-cards" class="col elementos">

                <div class="card text-white gradiente">
                    <img src="${imagen}" class="card-img" alt="${nombre}">
                    <div class="card-img-overlay">
                            <h3 class="card-title body2Bold">${nombre}</h3>
                            <p>${raza}</p>
                    </div>
                </div>
            </a>
        </div>
        `
    })
}
