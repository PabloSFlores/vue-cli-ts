import { UseCase } from "@/kernel/contacts";
import { SaveEmployeeDto } from "../adapters/dto/save-employee";
import { ResponseApi } from "@/kernel/types";
import { Employee } from "../entities/employee";
import { EmployeeRepository } from "./ports/employee.repository";

export class SaveEmployeeInteractor implements UseCase<SaveEmployeeDto, ResponseApi<Employee>> {
    constructor(private readonly employeeRepository: EmployeeRepository) {}
    execute(payload: SaveEmployeeDto): Promise<ResponseApi<Employee>> {
        return this.employeeRepository.saveEmployee(payload);
    }
}