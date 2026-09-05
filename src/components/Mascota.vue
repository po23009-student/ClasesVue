<template>
    <div>
        <input type="text" name="vacuna" id="vacuna" v-model="nuevaVacuna">
        <button @click="vacunaAgregada">Add Vacuna</button>
        <hr>
        <h2>Lista de vacunas</h2>
        <table>
            <thead>
                <tr>
                    <th colspan="1">#</th>
                    <th colspan="2">Nombre</th>
                </tr>
            </thead>
            <tbody>
                <div v-for="(vacuna, key) in props.vacunas" :key="key">
                    <tr>
                        <td colspan="1"">{{ key + 1 }}</td>
                        <td colspan="2">{{ vacuna }}</td>
                    </tr>
                </div>
            </tbody>
        </table>
        
        <hr>

        <input type="checkbox" id="banada" @change="mascotaBanada">
        <label for="banada">Bañana</label>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const nuevaVacuna = ref('');

    const props = defineProps({
        nombre: {
            type: String,
            required: false
        },
        fechaNac: {
            type: Object,
            required: false        
        },
        vacunas: {
            type: Array,
            required: false
        },
        banada: {
            type: Boolean,
            required: true
        }
    });

    const emit = defineEmits(['vacunaAgregada', 'mascotaBanada']);

    function vacunaAgregada() {
        emit('vacunaAgregada', nuevaVacuna.value);        
    }

    function mascotaBanada() {
        emit('mascotaBanada');
    }


</script>

<style scoped>

</style>