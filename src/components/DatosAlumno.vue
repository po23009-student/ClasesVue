<template>
    <button @click="router.push('/')">Inicio</button>
    <h1>Datos del alumno</h1>
    <h2>{{ carnet }}</h2>
    <h2>{{ route.params }}</h2>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const carnet = ref('');

    onMounted(() => {
        carnet.value = route.params.idalumno.toUpperCase();
    });
</script>