<template>
    <div>
        <b-modal id="modal-4" centered hide-footer hide-header title="BootstrapVue">
            <div class="d-block text-center">
                <h3>¿Estas seguro de eliminar a este empleado?</h3>
            </div>
            <div class="row">
                <div class="col-6">
                    <b-button class="mt-3" variant="outline-dark" block @click="hideModal">Cancelar</b-button>
                </div>
                <div class="col-6">
                    <b-button class="mt-3" variant="outline-success" block @click="deleteEmployee">Aceptar</b-button>
                </div>
            </div>
        </b-modal>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { EmployeeController } from '../employees.controller'

export default Vue.extend({
    name: 'DeleteEmployeeModal',
    props: {
        employeeSelected: {
            type: Object,
            required: true
        }
    },
    methods: {
        hideModal() {
            this.$bvModal.hide("modal-4")
        },
        deleteEmployee() {
            const controller = new EmployeeController()
            const response = controller.deleteEmployee(this.employeeSelected.id)

            alert('Eliminado con exito')
            this.$bvModal.hide("modal-4")
            this.$emit("findAll")
        }
    }
})
</script>