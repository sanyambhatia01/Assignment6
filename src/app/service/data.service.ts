export class DataService{
    Employees=[
        {
            name:'Sanyam',
            designation:'Full Stack-developer'
        },
        {
            name:'Hardik',
            designation:'Java-developer'
        }
    ]
    addEmploye(employee:{name :string,designation:string}){
        this.Employees.push(employee)
    }
    changeDesignation(newDes: {index: number, NewDes: string}){
        this.Employees[newDes.index].designation = newDes.NewDes;
      }
}