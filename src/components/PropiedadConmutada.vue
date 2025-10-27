<template>
    <div>
        <h1>Propiedad conmutada</h1>
        <ul>
            <li v-for="juego in juegosRojos" :key="juego" v-html="juego"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "PropiedadConmutada",
        computed:{
            juegosRojos(){
                var datos = this.juegos;
                let i = 0;
                for(let dato of datos){
                    var juegoRojo = "<span style='color:red'>" + dato + "</span>";
                    datos[i] = juegoRojo;
                    i++;
                }
                return datos;
            }
        },
        data (){
            return {
                juegos: ["Parchis", "Canicas", "Luz verde, luz roja", "La galleta"]
            }
        }
    }
</script>