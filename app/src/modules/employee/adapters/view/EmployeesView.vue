<template>
    <div>
        <Topnav />
        <div class="container-fluid mt-3">
            <div class="row">
                <div class="col-md-12">
                    <section class="card">
                        <div class="row text-center">
                            <div class="col-md-12 mt-1 mb-1">
                                <h2>Personas</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <section class="text-center">
                                    <button class="btn btn-success m-1">Excel</button>
                                </section>
                            </div>
                            <div class="col-md-3">
                                <section class="text-center">
                                    <button class="btn btn-danger m-1">PDF</button>
                                </section>
                            </div>
                            <div class="col-md-3">
                                <section class="text-center">
                                    <button class="btn btn-success m-1" v-b-modal.modal-3>Subida con Excel</button>
                                </section>
                            </div>
                            <div class="col-md-3">
                                <section class="text-center">
                                    <button class="btn btn-primary m-1" v-b-modal.modal-1>agregar</button>
                                </section>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-12">
                                <b-table striped hover :fields="fields" :items="employees" :per-page="7"
                                    :current-page="currentPageMain">
                                    <template #cell(actions)="data">
                                        <button class="btn btn-info" @click="findEmployee(data.item.id)"
                                            v-b-modal.modal-2>actualizar</button>
                                        <button class="btn btn-danger mx-2" @click="findEmployee(data.item.id)"
                                            v-b-modal.modal-4>Eliminar</button>
                                    </template>
                                </b-table>
                                <b-pagination v-model="currentPageMain" :total-rows="employees.length" :per-page="7"
                                    aria-controls="my-table"></b-pagination>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <AddModal @findAll="findAll" />
            <UpdateModal :employeeSelected="employee" @findAll="findAll" />
            <DeleteEmployeeModal :employeeSelected="employee" @findAll="findAll" />
            <ImportExcelModal @findAll="findAll" />
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Topnav from '../../../../components/Top-Nav.vue';
import AddModal from './AddEmployee.modal.vue';
import UpdateModal from './UpdateEmployee.modal.vue';
import DeleteEmployeeModal from './DeleteEmployee.modal.vue';
import ImportExcelModal from './ImportExcel.modal.vue';
import { EmployeeController } from '../employees.controller';
import { Employee } from '../../entities/employee';

export default Vue.extend({
    name: 'EmployeesView',
    components: {
        Topnav, AddModal, UpdateModal, ImportExcelModal, DeleteEmployeeModal
    },
    data() {
        return {
            fields: [
                { key: 'name', label: 'Nombre', sortable: true, },
                { key: 'surname', label: 'Primer apellido', sortable: true, },
                { key: 'lastname', label: 'Segundo apellido', sortable: true, },
                { key: 'email', label: 'Correo', sortable: true, },
                { key: 'actions', label: 'Acciones' }
            ],
            employees: [] as Employee[],
            employee: {} as Employee,
            currentPageMain: 1
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
    mounted() {
        this.findAll();
    }
});
</script>