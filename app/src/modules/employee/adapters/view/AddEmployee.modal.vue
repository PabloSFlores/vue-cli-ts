<template>
    <div>
        <b-modal id="modal-1" centered hide-footer hide-header title="BootstrapVue">
            <div>
                <h3>Agregar Empleado</h3>
                <form class="my-4" action="">
                    <div class="form-group">
                        <label for="">Nombre: <span class="text-danger">*</span></label>
                        <input v-model="employee.name" placeholder="Nombre" type="text" class="form-control">
                    </div>
                    <label for="">Apellidos: <span class="text-danger">*</span></label>
                    <div class="row">
                        <div class="col-6">
                            <input v-model="employee.surname" placeholder="Paterno" type="text" class="form-control">
                        </div>
                        <div class="col-6">
                            <input v-model="employee.lastname" placeholder="Materno" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Correo: <span class="text-danger">*</span></label>
                        <input v-model="employee.email" placeholder="example@domain.com" type="text" class="form-control">
                    </div>
                </form>
            </div>
            <div class="text-right">
                <button class="btn btn-secondary mr-2" @click="$bvModal.hide('modal-1')">Cerrar</button>
                <button class="btn btn-primary" @click="saveUser()">Guardar</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EmployeeController } from '../employees.controller';
import { SaveEmployeeDto } from '../dto/save-employee';
export default Vue.extend({
    name: 'AddEmployeeModal',
    data() {
        return {
            employee: {} as SaveEmployeeDto
        }
    },
    methods: {
        async saveUser() {
            const controller = new EmployeeController();
            const response = await controller.save(this.employee); 
            
            this.$bvModal.hide("modal-1");
            this.$emit("findAll");
        }
    }
})
</script>