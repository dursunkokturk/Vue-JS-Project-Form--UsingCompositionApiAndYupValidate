<template>
    <Form :validation-schema="formSchema">
        <div class="mb-3">
            <label>
                Adınız
            </label>

            <!-- formSchema Degiskenine Atanan Islemler Ile Kontrol Islemini Yapiyoruz -->
            <Field name="firstName" class="form-control" placeholder="Adınızı Giriniz"/>
            
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
            <Field name="lastName" class="form-control" placeholder="Soyadınızı Giriniz"/>
            
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
        
    </Form>    
</template>

<script setup>

    /* Form Olusturulacak Form Olarak Kullaniliyor */
    /* Field Form Uzerinde Bilgilerin Girildigi Input Olarak Kullaniliyor */
    import { Form,Field,ErrorMessage } from 'vee-validate';
    import * as Yup from 'yup';

    const formSchema = Yup.object({
        firstName:Yup.string().required('Bu Alan Zorunludur.').min(6,'En Az 6 Karakter Giriniz.'),
        lastName:Yup.string().required('Bu Alan Zorunludur.').min(6,'En Az 6 Karakter Giriniz.')
    })
</script>