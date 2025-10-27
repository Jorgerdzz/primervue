<template>
    <div>
        <h1>Métodos filters</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                Numero: {{num}}
                Doble: {{$filters.dobleNumero(num)}}
            </li>
        </ul>
        <ul>
            <li v-for="nombre in nombres" :key="nombre">
                Nombre: {{nombre}}
                Mayusculas: {{$filters.mayuscula(nombre)}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MetodosFilters",
        data () {
            return {
                numeros: [70, 56, 43, 9, 100, 40, 22],
                nombres: ["Alvaro", "Alberto", "Lucia", "Andrea"]
            }
        }
    }
</script>