<template>
    <div>
        <h1>PAR IMPAR</h1>
        <label>Introduzca un número:</label><br>
        <input type="number" v-model="numero"/>
        <button @click="generarRandom()">Generar random</button>
        <button @click="parImpar()">Comprobar</button>
        <h1>Resultado: {{resultado}}</h1>
    </div>
</template>

<script>
    export default {
        name: "ParImpar",
        data(){
            return{
                numero: 0,
                resultado: ""
            }
        },
        methods: {
            parImpar(){
                if(this.numero%2==0){
                    this.resultado = "Par";
                }else {
                    this.resultado = "Impar";
                }
            },
            generarRandom(){
                this.numero = Math.floor(Math.random()*100);
            }
        }
    }
</script>

<style>

</style>