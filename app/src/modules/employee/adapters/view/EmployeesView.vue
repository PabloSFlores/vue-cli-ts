<template>
    <div>
        <Topnav />
        <div class="mx-5 mt-5">
            <div class="d-flex align-items-center">
                <h1>Gestión de Empleados</h1>
                <button v-b-modal.modal-1 class="btn btn-success ml-auto">Añadir</button>
            </div>
            <hr>
            <b-table striped hover :items="employees" :fields="fields" >
                <template #cell(actions)="data">
                    <button class="btn btn-primary" @click="findEmployee(data.item.id)" v-b-modal.modal-2>info</button>
                </template>
            </b-table>
        </div>
        <AddModal @findAll="findAll"/>
        <UpdateModal :employeeSelected="employee" @findAll="findAll"/>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Topnav from '../../../../components/Top-Nav.vue';
import AddModal from './AddEmployee.modal.vue';
import UpdateModal from './UpdateEmployee.modal.vue';
import { EmployeeController } from '../employees.controller';
import { Employee } from '../../entities/employee';

export default Vue.extend({
    name: 'EmployeesView',
    components: {
        Topnav, AddModal, UpdateModal
    },
    data() {
        return {
            fields: [
                {key: 'name', label: 'Nombre', sortable: true,},
                {key: 'surname', label: 'Primer apellido', sortable: true,},
                {key: 'lastname', label: 'Segundo apellido', sortable: true,},
                {key: 'email', label: 'Correo', sortable: true,},
                {key: 'actions', label: 'Acciones'}
            ],
            employees: [] as Employee[],
            employee: {} as Employee
        }
    },
    methods: {
        async findAll() {
            const controller = new EmployeeController();
            const response = await controller.findAllEmployees();
            this.employees = response.entities!;
        },
        async findEmployee(payload: number) {
            const controller = new EmployeeController();
            const response = await controller.findEmployee(payload);
            this.employee = response.entity!;
        }
    },
    mounted () {
        this.findAll();
    } 
});
</script>