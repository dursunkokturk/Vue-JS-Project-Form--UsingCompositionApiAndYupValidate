<template>
    <div>
        <app-header/>
        <div class="container">
            <!-- <ContactForm /> -->
            <!-- <VeeValidation /> -->
            <YupValidation />
        </div>
        <Footer/>
    </div>  
</template>

<script setup>

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