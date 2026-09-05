<template>
    <div>
        <!-- <h6 class="titulo">Componente Hijo</h6> -->
        <h2 class="titulo">{{ props.titulo }}</h2>
        <button @click="guardar">Guardar</button>
        <slot></slot>
    </div>
</template>

<script setup>
    // Propiedades del componente (array)
    //const props = defineProps(['titulo']);

    // Propiedades del componente (objeto) 
    const props = defineProps({
        titulo: {
            type: String,
            required: true
        },
        apodo: {
            type: String,
            default: '',
            required: false
        },
        fecha: {
            type: Object,
            required: false
        }
    });
    
    // Eventos del componente
    const emit = defineEmits(['guardar']);

    //Métodos del componente
    function guardar() {
        emit('guardar', 'mensaje desde el hijo');
        //$emit('guardar', 'Mensaje desde el componente hijo');
    }

    function decirHola() {
        console.log('Hola desde el hijo');
    }

    defineExpose({
        decirHola

    });


</script>

<style scoped>
    .titulo {
        color: blue;
    }
</style>