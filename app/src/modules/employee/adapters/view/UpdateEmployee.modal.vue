<template>
    <div>
        <b-modal id="modal-2" centered hide-footer hide-header title="BootstrapVue">
            <div>
                <h3>Modificar Empleado</h3>
                {{employeeSelected}}
                <form class="my-4" action="">
                    <div class="form-group">
                        <label for="">Nombre: <span class="text-danger">*</span></label>
                        <input v-model="employeeSelected.name"  placeholder="Nombre" type="text" class="form-control">
                    </div>
                    <label for="">Apellidos: <span class="text-danger">*</span></label>
                    <div class="row">
                        <div class="col-6">
                            <input v-model="employeeSelected.surname"  placeholder="Paterno" type="text" class="form-control">
                        </div>
                        <div class="col-6">
                            <input v-model="employeeSelected.lastname"  placeholder="Materno" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Correo: <span class="text-danger">*</span></label>
                        <input v-model="employeeSelected.email" placeholder="example@domain.com" type="text" class="form-control">
                    </div>
                </form>
            </div>
            <div class="text-right">
                <button class="btn btn-secondary mr-2" @click="$bvModal.hide('modal-2')">Cerrar</button>
                <button class="btn btn-primary" @click="updateEmployee()">Modificar</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts">
 /* eslint-disable no-console */
import Vue from 'vue';
import { EmployeeController } from '../employees.controller';

export default Vue.extend({
    name: 'UpdateEmployeeModal',
    props: {
        employeeSelected: {
            type: Object,
            required: true
        }
    },
    methods: {
        async updateEmployee() {
            const controller = new EmployeeController();
            const response = await controller.update(this.employeeSelected);
            
            this.$bvModal.hide("modal-2");
            this.$emit("findAll");
        }
    }
})
</script>