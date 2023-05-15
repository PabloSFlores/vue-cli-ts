import { ResponseApi } from "@/kernel/types";
import { Employee } from "../entities/employee";
import { EmployeeRepository } from "../use-cases/ports/employee.repository";
import { SaveEmployeeDto } from "./dto/save-employee";
import { UpdateEmployeeDto } from "./dto/update-employee";

export class EmployeeStorageGateway implements EmployeeRepository {
    getError(): ResponseApi<Employee> {
        return {
            code: 500,
            error: true,
            message: 'INTERNAL ERROR SERVER'
        } as ResponseApi<Employee>;
    }

    async findAll(): Promise<ResponseApi<Employee>> {
        return await fetch('http://localhost:3000/employees').then(data => data.json())
        .then(({entities}) => {
            return {
                code: 200,
                message: 'OK',
                entities: entities,
                count: entities.length
            } as ResponseApi<Employee>;
        }).catch(() => this.getError());
    }
    async findEmployee(payload: number): Promise<ResponseApi<Employee>> {
        return await fetch(`http://localhost:3000/employees/${payload}`).then(data => data.json())
        .then(({entity}) => {
            return {
                code: 200,
                error: false,
                message: 'OK',
                entity: entity
            } as ResponseApi<Employee>;
        }).catch(() => this.getError());
    }
    async saveEmployee(payload: SaveEmployeeDto): Promise<ResponseApi<Employee>> {
        return await fetch('http://localhost:3000/employees', {
            method: 'POST', 
            body: JSON.stringify(payload), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json()).then(() => {
            return {
                code: 200,
                error: false,
                message: 'PERSON REGISTERED'
            } as ResponseApi<Employee>;
        }).catch(() => this.getError());
    }
    async updateEmployee(payload: UpdateEmployeeDto): Promise<ResponseApi<Employee>> {
        return await fetch(`http://localhost:3000/employees/${payload.id}`, {
            method: 'PUT', 
            body: JSON.stringify(payload), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json()).then(() => {
            return {
                code: 200,
                error: false,
                message: "PERSON UPDATED"
            } as ResponseApi<Employee>;
        }).catch(() => this.getError());
    }
}