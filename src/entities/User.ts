import { Entity,  PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class User{

    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Column()
    firstName: string
    
    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    email: string

    @Column()
    password: string


    constructor(firstName: string, lastName:string, age: number, email: string, password:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.password = password;

    }
}