import { createApp } from 'vue'
import App from './App.vue'
import router from './Router';

var app = createApp(App)
app.config.globalProperties.$filters = {
    mayuscula(texto){
        return texto.toUpperCase();
    },
    dobleNumero(numero){
        return numero * 2;
    }
}

app.use(router).mount('#app');


