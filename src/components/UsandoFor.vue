<template>
    <div>
        <h6>Renderizado condicional {{ cantidad }}</h6>
        <div v-if="materia">{{ materia.nombre }}</div>
        <button @click="capturar(25, $event)">CLICK</button>
        <button @click="agregarAlumnos">Agregar</button>
        <!-- {{ alumnos }} -->
        <span v-if="cantidad>5" :class="{'rojo': cantidad > 5}">Muchos alumnos hay</span>  

        <ul>
            <li v-for="(alumno, key) in alumnos" :key="key">
                {{ alumno.nombre }} {{ alumno.apellido }}
                <button @click="eliminar(key)">X</button>
            </li>
        </ul>

        <input type="text" v-model="materia"> 
        <!-- <input v-model.lazy="materia" /> -->
        <!-- <input v-model.trim ="materia" /> Para eliminar espacios en blanco automáticamente-->
    </div>

</template>

<script setup>

    import { ref, computed, onMounted } from 'vue'
    const alumnos = ref([]);
    const materia = ref('Matemáticas')

    onMounted(() => {
        materia.value = {
            nombre: 'Matemáticas'
        }

        console.log('onMounted');
    });

    function agregarAlumnos() {
        for(let i = 0; i < 5; i++) {
            alumnos.value.push({
                nombre: `Nombre ${i + 1}`,
                apellido: `Apellido ${i + 1}`
            });
        }
    }

    function eliminar(key) {
        /* let copiaAlumno = {...alumno};
        console.log(alumno, key, copiaAlumno); */

        alumnos.value.splice(key, 1);
    }

    // propiedad computada que devuelve la cantidad de alumnos
    const cantidad = computed(() => alumnos.value.length); 

    function capturar(numero, evento) {
        console.log('capturar', numero, evento);
    }



</script>

<style scoped>
    .rojo {
        color: white;
        background-color: red;
    }

</style>