import { ResponseApi } from "@/kernel/types";
import { GetEmployeesInteractor } from "../use-cases/get-employees.interactor";
import { EmployeeRepository } from "../use-cases/ports/employee.repository";
import { EmployeeStorageGateway } from "./employees.storage.gateway";
import { Employee } from "../entities/employee";
import { SaveEmployeeInteractor } from "../use-cases/save-employee.interactor";
import { SaveEmployeeDto } from "./dto/save-employee";
import { GetEmployeeInteractor } from "../use-cases/get-employee.interactor";
import { UpdateEmployeeDto } from "./dto/update-employee";
import { UpdateEmployeeInteractor } from "../use-cases/update-employee.interactor";

export class EmployeeController {
    findAllEmployees(){
        const repo: EmployeeRepository = new EmployeeStorageGateway();
        const interactor: GetEmployeesInteractor = new GetEmployeesInteractor(repo);

        try {
            return interactor.execute();
        } catch(err) {
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Employee>;
        }
    }

    findEmployee(payload: number){
        const repo: EmployeeRepository = new EmployeeStorageGateway();
        const interactor: GetEmployeeInteractor = new GetEmployeeInteractor(repo);

        try {
            return interactor.execute(payload);
        } catch(err) {
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Employee>;
        }
    }

    save(payload: SaveEmployeeDto) {
        const repo: EmployeeRepository = new EmployeeStorageGateway();
        const interactor: SaveEmployeeInteractor = new SaveEmployeeInteractor(repo);

        try {
            return interactor.execute(payload);
        } catch(err) {
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Employee>;
        }
    }

    update(payload: UpdateEmployeeDto) {
        const repo: EmployeeRepository = new EmployeeStorageGateway();
        const interactor: UpdateEmployeeInteractor = new UpdateEmployeeInteractor(repo);

        try {
            return interactor.execute(payload);
        } catch(err) {
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Employee>;
        }
    }
}