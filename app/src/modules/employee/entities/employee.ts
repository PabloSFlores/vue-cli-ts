import { Entity } from "@/kernel/types"

export type Employee = Entity<number> & {
    name: string,
    surname: string,
    lastname: string,
    email: Text
}