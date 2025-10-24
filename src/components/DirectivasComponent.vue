<template>
    <div>
        <h1>Ejemplo directivas</h1>
        <h3>{{$data}}</h3>
        
        <label>Introduzca serie:</label>
        <input type="text" v-model="serieNueva"/>
        <button @click="nuevaSerie()">Nueva serie</button><br>

        <label>Introduzca un número</label>
        <input type="number" v-model="numero"/><br>

        <label>Introduzca texto</label>
        <input type="text" v-model="texto"/>

        <h3 v-if="numero > 0" style="color:green">POSITIVO</h3>
        <h3 v-else-if="numero<0" style="color:red">NEGATIVO</h3>
        <h3 v-else style="color:blue">CERO</h3>

        <ul v-if="series.length>0">
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>
        

    </div>
</template>

<script>
    export default {
        name: "DirectivasComponent",
        data(){
            return{
                numero: 0,
                texto: "Alumno",
                series: ["Futurama", "LQSA", "The boys", "Stranger Things"],
                serieNueva: ""
            }
        }, 
        methods: {
            nuevaSerie(){
                this.series.push(this.serieNueva)
            }
        }
    }
</script>

<style>

</style>