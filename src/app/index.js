import { leerApi } from "./getData.js";
import { inicio } from "./inicio.js";
import { inicio2 } from "./inicio2.js";
import { listarCards } from "./listarCards.js";
import { principal } from "./principal.js";

const contenedor = document.getElementById('contenedor');

const urlUsuario = 'https://app-mascotas-clase.herokuapp.com/usuarios';
const urlPerros = 'https://app-mascotas-clase.herokuapp.com/perros';
const urlGatos = 'https://app-mascotas-clase.herokuapp.com/gatos';

document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();
    contenedor.innerHTML=`<form><button id="btnImgInicio" ><img src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1649797104/samples/workShop/logo_xdyw6o.png" 
    style="width: 20%; height: 20%;" class="position-absolute top-50 start-50 translate-middle"/></button></form>`
    console.log('funciona')

    let btnInicio = document.getElementById('btnImgInicio')

    btnInicio.addEventListener('click',()=>{
        inicio(contenedor);
        let btn = document.getElementById('btnInicio2')

        btn.addEventListener('click', ()=>{
            console.log('eyy')
            inicio2(contenedor)
            
            let main = document.getElementById('main')
            main.addEventListener('click', ()=>{
                principal(contenedor)
                let btnPerros = document.getElementById('btnPerros');
                let btnGatos = document.getElementById('btnGatos');
                let contenedorPets = document.getElementById('contenPets');

                btnPerros.addEventListener('click',async ()=>{
                    const array= await leerApi(urlPerros)
                    listarCards(array, contenedorPets)
                })
                
                btnGatos.addEventListener('click',async ()=>{
                    const array= await leerApi(urlGatos)
                    listarCards(array, contenedorPets)
                })
                
            })
        })
    })    
});

