<template>
    <div>
        <h1>Propiedad conmutada</h1>
        <ul>
            <li v-for="juego in juegosRojos" :key="juego" v-html="juego"></li>
        </ul>
        <label>Introduca número:</label>
        <input type="number" v-model="numero"/>
        <div v-html="evaluarNumero"></div>
    </div>
</template>

<script>
    export default {
        name: "PropiedadConmutada",
        computed:{
            evaluarNumero (){
                let data = "";
                if(this.numero % 2 == 0){
                    data =  "<h4 style='color:green'>Par: " + this.numero + "</h4>";
                }else{
                    data =  "<h4 style='color:red'>Impar: " + this.numero + "</h4>";
                }
                return data;
            },
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
                numero: 0,
                juegos: ["Parchis", "Canicas", "Luz verde, luz roja", "La galleta"]
            }
        }
    }
</script>