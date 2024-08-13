<template>
    <Form>
        <div class="mb-3">
            <label>
                Adınız
            </label>

            <!-- rules Attribute Icinde Hata Mesajlarini Array Icine Aliyoruz -->
            <Field :rules=[isRequire,validateFirstName] name="firstName" class="form-control" placeholder="Adınızı Giriniz"/>
            
            <!-- as Attribute Icinde div Kullanildiginda 
                Componentin div Elementi Olarak Islevli Halde Olmasini Saglar -->
            <!-- v-slot Attribute Icinde Hata Mesajlarinin Bulundugu Degisken Adini Veriyoruz -->
            <ErrorMessage name="firstName" as="div" v-slot="{message}">
                <div class="alert alert-danger">
                    {{ message }}
                </div>
            </ErrorMessage>
        </div>
        <div class="mb-3">
            <label>
                Soyadınız
            </label>

            <!-- rules Attribute Icinde Hata Mesajlarini Array Icine Aliyoruz -->
            <Field :rules=[isRequire,validateLastName] name="lastName" class="form-control" placeholder="Soyadınızı Giriniz"/>
            
            <!-- as Attribute Icinde div Kullanildiginda 
                Componentin div Elementi Olarak Islevli Halde Olmasini Saglar -->
            <!-- v-slot Attribute Icinde Hata Mesajlarinin Bulundugu Degisken Adini Veriyoruz -->
            <ErrorMessage name="lastName" as="div" v-slot="{message}">
                <div class="alert alert-danger">
                    {{ message }}
                </div>
            </ErrorMessage>
        </div>
        <button class="btn btn-primary">Gönder</button>
        <p v-if="errors.length">
            <h3>
                Lütfen Aşağıdaki Hataları Düzeltiniz
            </h3>
            <ul>

                <!-- errors Degiskenine Atanan Array Icinde
                    Eleman Varsa Ekrana Yazdiriyoruz -->
                <li v-for="error in errors" :key="error">
                    {{ error }}
                </li>
            </ul>
        </p>
    </Form>    
</template>

<script setup>

    /* Form Olusturulacak Form Olarak Kullaniliyor */
    /* Field Form Uzerinde Bilgilerin Girildigi Input Olarak Kullaniliyor */
    import { Form,Field,ErrorMessage } from 'vee-validate';

    /* Bilgi Girilmenin Zorunlu Oldugu Alanlar Icin Hata Mesajini Duzenliyoruz */
    const isRequire = (value) => {
        if(!value){
            return 'Bu Alan Zorunludur.'
        }
        return true;
    }

    const validateFirstName = (value) => {
        if(value === 'Hakan'){
            return 'Hakan Değerini Giremezsiniz.'
        }
        return true;
    }

    const validateLastName = (value) => {
        if(value === 'Acar'){
            return 'Hakan Değerini Giremezsiniz.'
        }
        return true;
    }
</script>