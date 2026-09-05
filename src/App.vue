<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import UsandoFor from './components/UsandoFor.vue';
  import ComponenteHijo from './components/ComponenteHijo.vue';
  import { useDataglobal } from './pinia/dataglobal.js';

  import { ref, useTemplateRef, onMounted } from 'vue';
  import Mascota from './components/Mascota.vue';
  const titulo1 = ref('Titulo 1');
  const fecha1 = ref({
    dia: 1,
    mes: 1,
    anio: 2024
  });

  const hijo3 = useTemplateRef('hijo3'); 

  function manejarGuardar(texto) {
    console.log(`Evento guardar recibido por el componente padre - ${texto}`);
    titulo1.value = "Nuevo titulo";
  }

  function invocarHijo() {
    hijo3.value.decirHola();
    console.log(hijo3.value);
  } 

  const dataglobal = useDataglobal();

  function incrementar() {
    dataglobal.contador = 20;
  }

  //onMounted(() => );

  function crearUsuario() {
    dataglobal.usuario = {
      nombre: 'Juan',
      apellido: 'Perez'
    }

    dataglobal.guardarUsuario();
  }

</script>

<template>
  <!-- <HelloWorld /> -->
  <!--<button @click="invocarHijo">Invocar</button>
  <UsandoFor /> 
  <ComponenteHijo :titulo="titulo1" @guardar="manejarGuardar" :fecha="fecha1"/>
  
  SINTAXIS SLOT 
  <ComponenteHijo titulo="Titulo 2">
    <div>Soy el contenido adentro del componente</div>
  </ComponenteHijo>
  <ComponenteHijo titulo="Titulo 3" ref="hijo3" /> -->
  <h4>Contador: {{ dataglobal.contador }}</h4>
  <button @click="incrementar">Incrementar</button>
  <button @click="crearUsuario">Crear usuario</button>
  <p v-if="dataglobal.usuario">
    Usuario: {{ dataglobal.usuario.nombre }} {{ dataglobal.usuario.apellido }}
  </p>
</template>
