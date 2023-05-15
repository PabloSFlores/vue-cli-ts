import { UseCase } from "@/kernel/contacts";
import { GetEmployeesDto } from "../adapters/dto/get-employees";
import { ResponseApi } from "@/kernel/types";
import { Employee } from "../entities/employee";
import { EmployeeRepository } from "./ports/employee.repository";

export class GetEmployeesInteractor implements UseCase<GetEmployeesDto, ResponseApi<Employee>> {
    constructor(private readonly employeeRepository: EmployeeRepository){}

    execute(): Promise<ResponseApi<Employee>> {
        return this.employeeRepository.findAll();
    }
}