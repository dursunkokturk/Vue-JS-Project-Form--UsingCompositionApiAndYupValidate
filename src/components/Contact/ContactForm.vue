<template>
    <form >
        <div class="row">
            <h1>İletişim</h1>
            <hr/>
            <div class="mb-3">
                <h6>
                    Adınız
                </h6>

                <!-- Isim Girilen Input Icindeki Degeri 
                    formData Degiskenine Atanan reactive Method Icindeki 
                    firstName Degiskenine Gonderiyoruz -->
                <input type="text" class="form-control" v-model="formData.firstName">
            </div>
            <div class="mb-3">
                <h6>
                    Soyadınız
                </h6>

                <!-- Soyad Girilen Input Icindeki Degeri 
                    formData Degiskenine Atanan reactive Method Icindeki 
                    lastName Degiskenine Gonderiyoruz -->
                <input type="text" class="form-control" v-model="formData.lastName">
            </div>
            <div class="mb-3">
                <label>
                    Cinsiyetiniz
                </label>
                <div class="form-check">

                    <!-- Cinsiyet Secimini Radio Button Kullanarak Yapiyoruz -->
                    <!-- v-model Icinde formData Degiskenine Atanan 
                            reactive Method Icinde Kullanilan Degisken Adini 
                            gender Yapiyoruz -->
                    <!-- Cinsiyet Seciminde Farklilik Durumunun Algilanmasi Icin
                            value Attribute Icinde Cinsiyeti Belirtiyoruz -->
                    <input type="radio" class="form-check-input" v-model="formData.gender" value="woman">
                    <label>
                        Kadın
                    </label>
                </div>
                <div class="form-check">

                    <!-- Cinsiyet Secimini Radio Button Kullanarak Yapiyoruz -->
                    <!-- v-model Icinde formData Degiskenine Atanan 
                            reactive Method Icinde Kullanilan Degisken Adini 
                            gender Yapiyoruz -->
                    <!-- Cinsiyet Seciminde Farklilik Durumunun Algilanmasi Icin
                            value Attribute Icinde Cinsiyeti Belirtiyoruz -->
                    <input type="radio" class="form-check-input" v-model="formData.gender" value="man">
                    <label>
                        Erkek
                    </label>
                </div>
            </div>
            <div class="mb-3">
                <label>
                    E-Mail
                </label>

                <!-- E-Mail Girilen Input Icindeki Degeri 
                    formData Degiskenine Atanan reactive Method Icindeki 
                    email Degiskenine Gonderiyoruz -->
                <input type="email" class="form-control" v-model="formData.email">
            </div>
            <div class="mb-3">
                <label>
                    Konu
                </label>

                <!-- Konu Girilen Input Icindeki Degeri 
                        formData Degiskenine Atanan reactive Method Icindeki 
                        subject Degiskenine Gonderiyoruz -->
                <input type="text" class="form-control" v-model="formData.subject">
            </div>
            <div class="mb-3">
                <h6>
                    Hangi Amaçla Yazıyorsunuz?
                </h6>
                <div class="form-check">

                    <!-- Egitim Secimini Checkbox Kullanarak Yapiyoruz -->
                    <!-- v-model Icinde formData Degiskenine Atanan 
                            reactive Method Icinde Kullanilan Degisken Adini 
                            goals Yapiyoruz -->
                    <!-- Egitim Seciminde Farklilik Durumunun Algilanmasi Icin
                            value Attribute Icinde Egitimi Belirtiyoruz -->
                    <input type="checkbox" class="form-check-input" v-model="formData.goals" value="livetrainings">
                    <label class="form-check-label">
                        Canlı Eğitimler
                    </label>
                </div>
                <div class="form-check">

                    <!-- Egitim Secimini Checkbox Kullanarak Yapiyoruz -->
                    <!-- v-model Icinde formData Degiskenine Atanan 
                            reactive Method Icinde Kullanilan Degisken Adini 
                            goals Yapiyoruz -->
                    <!-- Egitim Seciminde Farklilik Durumunun Algilanmasi Icin
                            value Attribute Icinde Egitimi Belirtiyoruz -->
                    <input type="checkbox" class="form-check-input" v-model="formData.goals" value="videotrainings">
                    <label class="form-check-label">
                        Video Eğitimler
                    </label>
                </div>
            </div>
            <div class="mb-3">
                <label>
                    Mesajınız
                </label>
                <textarea class="form-control" rows="3" v-model="formData.message"></textarea>
            </div>
            <div class="mb-3">
                <button @click="submitForm" class="btn btn-primary">Gönder</button>
            </div>

            <!-- Olusan Hatalari Topladigimiz Array in Atandigi 
                errors Degiskeni Uzerinden 
                Array Icinde Eleman Olup Olmadigina Bakiyoruz -->
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
        </div>
    </form>
</template>

<script setup>

    /* Elementler Ile Degiskenleri Baglamak Icin 
        Elementin Attrite larini Kullanmaya Gerek Kalmadan 
        Direkt Olarak Degisken Adini Kullanabiliriz */
    import { reactive } from 'vue';

    /* Form Doldurulurken Olusan Hatalari Array Icine Aliyoruz */
    const errors = reactive([]);

    /* Form Icinde Yer Alan Bilgilere Ulasilacak Isimler 
        formData Degiskenine Atanmis reactive Icinde Bulunuyor */
    /* Degiskenlere Form Acildigi Anda 
        Gorunecek Degerlerini Veriyoruz */
    const formData = reactive({
        firstName:'',
        lastName:'',
        gender:'man',
        email:'',
        subject:'',
        goals:[],
        message:''
    })

    const submitForm = (event) => {
        event.preventDefault();

        /* Ayni Hatalari Ust Uste Ekranda Yazmayi Engelliyoruz */
        errors.splice(0);
        
        if (!formData.firstName){
            errors.push('Lütfen Adınızı Giriniz!');
        }
        if (!formData.lastName){
            errors.push('Lütfen Adınızı Giriniz!');
        }
        if (!formData.gender){
            errors.push('Lütfen Cinsiyetinizi Seçiniz!');
        }
        if (!formData.email){
            errors.push('Lütfen E-Mail Bilginizi Giriniz!');
        }
        if (!formData.subject){
            errors.push('Lütfen Konu Bilgisini Giriniz!');
        }
        if (!formData.goals){
            errors.push('Lütfen Eğitim Türü Seçiniz!');
        }
        if (!formData.message){
            errors.push('Lütfen Mesajızını Giriniz');
        }

        /* Form Doldurulurken errors Degiskenine Atanan Array Icinde 
            Eleman Yoksa
            Girilen Bilgileri Yazdiriyoruz */
        if(!errors.length){
            console.log(formData);
        }
    }
</script>