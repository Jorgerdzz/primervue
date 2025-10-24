<template>
    <div>
        <h1>CICLO DE VIDA Y MÉTODOS VUE</h1>
        <h2 style="color: red">{{mensaje}}</h2>
        <button @click="cambiarMensaje()">
            Mostrar mensaje
        </button>
    </div>
</template>

<script>
    export default {
        name: "CicloVida",
        data () {
            return {
                mensaje: "Hoy es vierness!!!!"
            }
        },
        methods: {
            cambiarMensaje(){
                this.mensaje = "Hoy se sale!!!"
            }
        }, 
        mounted(){
            console.log("Component mounted")
        },
        created(){
            console.log("Component created")
        }, 
        updated(){
            console.log("Component update")
        },
        unmounted(){
            console.log("Component unmounted")
        }
    }
</script>

<style>

</style>