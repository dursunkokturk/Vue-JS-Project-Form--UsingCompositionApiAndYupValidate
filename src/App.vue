<template>
    <div>

        <!-- Header.vue Dosyasini main.js Dosyasi Uzerinden 
              Global Olarak 
              Component Olarak Cagiriyoruz -->
        <app-header/>
        <div class="container">
            <!-- <ContactForm /> -->
            <!-- <VeeValidation /> -->
            <YupValidation />
        </div>

        <!-- Local Olarak Cagirdigimiz 
              Footer.vue Dosyasini Component Olarak Kullaniyoruz -->
        <Footer/>
    </div>  
</template>

<!-- composition api yi Projede Kullanmak Icin 
      script Tag lari Icinde 
      setup Yazmak Gerekiyor -->
<script setup>

    /* Dosyanin Dizin Yolunu Belirterek Cagirma Islemi
        Local Olarak Dosya Cagirma Islemidir */
    import Footer from '@/components/Fixed/Footer.vue'
    import ContactForm from '@/components/Contact/ContactForm.vue';
    import VeeValidation from '@/components/Contact/Vee-Validation.vue';
    import YupValidation from '@/components/Contact/Yup-Validation.vue';
    
</script>

<style>
    *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
    }

    .container{
        min-height: 100vh;
        padding: 30px;
    }
    button{
        padding: 10px;
        border: none;
        background: green;
        color: white;
        border-radius: 30px;
        margin: 20px;
    }
</style>