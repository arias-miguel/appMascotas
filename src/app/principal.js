export const principal = (contenedor)=>{
    contenedor.innerHTML='';

    contenedor.innerHTML=`
    <div>
        <nav class="navbar">
            <h1 class="title-logo">Adopta una adorable mascota</h1>
            <ul class="navbar-desk">
                <li><a href="./index.html">Home</a></li>
                <li><a href="#">Mensajes</a></li>
                <li><a href="#">Favoritos</a></li>
                <li><a href="./login.html">Perfil</a></li>
            </ul>
            <ul class="navbar-mobile" style="z-index:1;">
                <li><button id="house" class="border none" style="width:100%"><img src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1650300006/samples/workShop/home_y3cwf8.png" alt="Home"></button></li>
                <li><button id="chat" class="border none" style="width:100%"><img src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1650300006/samples/workShop/clou_qdddwa.png" alt="Mensajes"></button></li>
                <li><button id="heart" class="border none" style="width:100%"><img src= "https://res.cloudinary.com/dbdrkxooj/image/upload/v1650300006/samples/workShop/heart_volmt1.png" alt="Favoritos"></button></li>
                <li><button id="perfil" class="border none mx-" style="width:50%, backgroud-white"><img src= "https://res.cloudinary.com/dbdrkxooj/image/upload/v1650300006/samples/workShop/person_mymvdd.png" alt="Perfil"></button></li>
            </ul>
        </nav>
    </div>
    <header>
        <div class="container-fluid">
            <div class="row btn-categorias">
                <div class="col mt-3">
                    <h2 class="subtitle1 div-categorias">categorías de mascotas</h2>
                </div>
                <div class="row text-center p-2">
                    <div class="col-6 mx-1">
                        <button id="btnPerros" class="btn-perros btn btn-secondary">
                            <div class="row">
                                <div class="col-4 icono-perros">
                                    <img id="imagen-perros"
                                        src="https://res.cloudinary.com/dvh5dsa7s/image/upload/v1638083932/App_mascotas/iconoperro_vg2e1y.png">
                                </div>
                                <div class="col-6 categoria-perros">
                                    <p class="buttom">Perros</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="col-5 mx-1">
                        <button id="btnGatos" class="btn-gatos btn btn-secondary">
                            <div class="row">
                                <div class="col-4 icono-gatos">
                                    <img id="imagen-gatos"
                                        src="https://res.cloudinary.com/dvh5dsa7s/image/upload/v1638083932/App_mascotas/iconogato_duzodf.png">
                                </div>
                                <div class="col-6 categoria-gatos">
                                    <p class="buttom">Gatos</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
    </header>
    <main>
        <div class="container-fluid mt-4 mb-3">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 grid-elementos" id="contenPets"></div>
        </div>

        <div class="container-fluid mt-4 mb-3">
            <div class="row row-cols-2 row-cols-md-2 g-4 detalle-elementos">
                <div></div>
            </div>
        </div>
    </main>`;    
}