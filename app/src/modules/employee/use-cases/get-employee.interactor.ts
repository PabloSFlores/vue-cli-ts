import { UseCase } from "@/kernel/contacts";
import { GetEmployeesDto } from "../adapters/dto/get-employees";
import { ResponseApi } from "@/kernel/types";
import { Employee } from "../entities/employee";
import { EmployeeRepository } from "./ports/employee.repository";

export class GetEmployeeInteractor implements UseCase<number, ResponseApi<Employee>> {
    constructor(private readonly employeeRepository: EmployeeRepository){}

    execute(payload: number): Promise<ResponseApi<Employee>> {
        return this.employeeRepository.findEmployee(payload);
    }
}