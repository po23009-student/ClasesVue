import { defineStore } from "pinia";

export const useDataglobal = defineStore('dataglobal', {
    state: () => ({contador: 0, usuario: null}),
    actions: {
        incrementar() {
            this.contador++;
        },
        guardarUsuario() {
            //Guardo el valor de this.usuario en localStorage
            if (this.usuario) { 
                localStorage.setItem('usuario', JSON.stringify(this.usuario));
            }
        },
        obtenerUsuario() {
            const usuario = localStorage.getItem('usuario');
            if (usuario) {
                this.usuario = JSON.parse(usuario);
            }
        },
        cerrarSesion() {
            this.usuario = null;
        }
    }
})
