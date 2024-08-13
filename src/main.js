/* Projenin Tamami Icin Gecerli Olacak Islemleri 
    Bu Dosya Icinde Yapiyoruz */

import { createApp } from 'vue'
import App from './App.vue'
import Header from '@/components/Fixed/Header.vue'

/* App.vue Dosyasina Proje Icinde Ulasmak Icin 
    createApp Method Kullanarak app Degiskeni Uzerinden Kullaniyoruz */
const app=createApp(App);

/* Proje Icinde Gerektigi Yerlerde Header Componentini Kullanmak Icin
    component Method Icinde 
    Ilk Parametre Kullanilacak Componentinin Proje Icinde Cagirilacagi Isim
    Ikinci Parametre Componentin Ismi */
app.component('app-header',Header)

app.mount('#app')