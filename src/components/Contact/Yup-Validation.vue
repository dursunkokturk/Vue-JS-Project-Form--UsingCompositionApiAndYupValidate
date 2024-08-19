<template>
    <Form :validation-schema="formSchema">
        <div class="mb-3">
            <label>
                Adınız
            </label>
            <Field name="firstName" class="form-control" placeholder="Adınızı Giriniz"/>
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
            <Field name="lastName" class="form-control" placeholder="Soyadınızı Giriniz"/>
            <ErrorMessage name="lastName" as="div" v-slot="{message}">
                <div class="alert alert-danger">
                    {{ message }}
                </div>
            </ErrorMessage>
        </div>
        <div class="mb-3">
            <label>
                Cinsiyetiniz
            </label>
            <div class="form-check">
            <Field v-slot="{ field }" name="man" type="radio" :value="true">
                <label>
                    <input type="radio" name="terms" v-bind="field" v-model="formData.goals" :value="woman" />
                    <p>
                        Kadın
                    </p>
                </label>
            </Field>
            
            <Field v-slot="{ field }" name="woman" type="radio" :value="true">
                <label>
                    <input type="radio" name="terms" v-bind="field" v-model="formData.goals" :value="man" />
                    <p>
                        Erkek
                    </p>
                </label>
            </Field>
            </div>
        </div>
        <button class="btn btn-primary">Gönder</button>
    </Form>    
</template>

<script setup>
    import { Form,Field,ErrorMessage } from 'vee-validate';
    import * as Yup from 'yup';
    import { reactive } from 'vue';

    const formSchema = Yup.object({
        firstName:Yup.string().required('Bu Alan Zorunludur.').min(6,'En Az 6 Karakter Giriniz.'),
        lastName:Yup.string().required('Bu Alan Zorunludur.').min(6,'En Az 6 Karakter Giriniz.')
    })

    const formData = reactive({
        gender:'man',
    })
</script>

<style scoped>
    label {
        display: flex;
        flex-direction: row;
    }
    p {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 10px;
    }
</style>