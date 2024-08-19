<template>
    <form >
        <div class="row">
            <h1>İletişim</h1>
            <hr/>
            <div class="mb-3">
                <h6>
                    Adınız
                </h6>
                <input type="text" class="form-control" v-model="formData.firstName">
            </div>
            <div class="mb-3">
                <h6>
                    Soyadınız
                </h6>
                <input type="text" class="form-control" v-model="formData.lastName">
            </div>
            <div class="mb-3">
                <label>
                    Cinsiyetiniz
                </label>
                <div class="form-check">
                    <input type="radio" class="form-check-input" v-model="formData.gender" value="woman">
                    <label>
                        Kadın
                    </label>
                </div>
                <div class="form-check">
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
                <input type="email" class="form-control" v-model="formData.email">
            </div>
            <div class="mb-3">
                <label>
                    Konu
                </label>
                <input type="text" class="form-control" v-model="formData.subject">
            </div>
            <div class="mb-3">
                <h6>
                    Hangi Amaçla Yazıyorsunuz?
                </h6>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="formData.goals" value="livetrainings">
                    <label class="form-check-label">
                        Canlı Eğitimler
                    </label>
                </div>
                <div class="form-check">
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
            <p v-if="errors.length">
                <h3>
                    Lütfen Aşağıdaki Hataları Düzeltiniz
                </h3>
                <ul>
                    <li v-for="error in errors" :key="error">
                        {{ error }}
                    </li>
                </ul>
            </p>
        </div>
    </form>
</template>

<script setup>
    import { reactive } from 'vue';
    const errors = reactive([]);

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
        if(!errors.length){
            console.log(formData);
        }
    }
</script>