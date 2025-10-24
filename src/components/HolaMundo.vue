<template>
    <div>
        <h1>Mi primer vue, que ilusión!!!</h1>
        <img src="../assets/images/atmaviacion.webp"/>
        <h2> Mi nombre es {{nombre}}</h2>
        <h2> Mi edad es {{edad}}</h2>
        <h2></h2>
    </div>
</template>

<script>
    export default {
        name: "HolaMundo",
        data () {
            return {
                nombre: "Jorge",
                edad: 25,
                array: [],
                objeto: {}
            }
        }
    }
</script>

<style>
    @import '../assets/css/estilos.css';
    h1 {color: blue}
</style>