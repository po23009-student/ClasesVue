<template>
    <h6>Consultando un usuario</h6>
    {{ usuario }}
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { apiRandomUser } from '../axios/axios';

    const usuario = ref(null);

    onMounted(() => {
        //cargarDatos();
        cargarDatos2();

    }); 

    //metodos
    function cargarDatos() {
        console.log('A');
        apiRandomUser.get('/api/').then(response => {            
            console.log(response);

            if (response.status === 200 && response.data && response.data.results) {
                usuario.value = response.data.results[0];
            }
            console.log('B');

        }).catch(error => {
            console.log(error);
        });
        console.log('C');
    }

    async function cargarDatos2() {
        console.log('A');
        try {
            let response = await apiRandomUser.get('/api/'); 

            if (response.status === 200 && response.data && response.data.results) {
                usuario.value = response.data.results[0];
            }
        } catch (error) {
            console.log(error);
        }

        console.log('B');   
        console.log('C');   
        console.log(usuario.value);   
    }
    
</script>