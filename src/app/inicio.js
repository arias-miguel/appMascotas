export const inicio = (contenedor)=>{

    contenedor.innerHTML='';

    contenedor.innerHTML=`<div id="img-div">
    <img src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1649797105/samples/workShop/gatos_inicio_blxenh.png" 
    alt="gatico" id="imag" style="width: 60%" class="rounded mx-auto d-block">
    <h1 class="text-center">Encuentra tu amigo fiel</h1>
    <p id="img-caption" class="text-center mx-4">Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. Si estás pensando
        en tener un nuevo integrante en tu familia; ¡estás en el lugar correcto!</p>
</div>
<div class="d-grid mb-1 p-3 gap-2">
    <button type="submit" id="btnInicio2" class="btn bg-black text-light text-center  rounded-pill" style="width: 60%; margin-left: 20vw;" >siguiente</button>
</div>`;
}
