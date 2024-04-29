
import EmployeeAdd from './EmployeeAdd.js'
import EmployeeFilter from './EmployeeFilter.js'

const initialEmployees = [
    {
        id: 1,
        name: "Jonny Martinez",
        ext: 1125,
        email: "jonny@class.com",
        title: "Student Boi",
        dateHired: new Date("2020-08-15"),
        isEmployed: false
    },
    {
        id: 2,
        name: "Mae Martinez",
        ext: 1126,
        email: "mae@class.com",
        title: "Student Gorl",
        dateHired: new Date("2022-08-13"),
        isEmployed: true
    },
]


function EmployeeTable (props) {
    const employeeRows = props.employees.map(employee =>
        <EmployeeRow key={employee.id} employee={employee}/>)
    return (
        <table className="bordered-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Extension</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Date Hired</th>
                    <th>Currently Employed</th>
                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    )
}


function EmployeeRow (props) {

    const employee = props.employee
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.ext}</td>
            <td>{employee.email}</td>
            <td>{employee.title}</td>
            <td>{employee.dateHired.toDateString()}</td>
            <td>{employee.isEmployed ? "Yes": "No"}</td>
        </tr>
    )
}

export default class EmployeeList extends React.Component {
    constructor () {
        super()
        this.state = {employees : []}
        this.createEmployee = this.createEmployee.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }
    loadData() {
        setTimeout(() =>{
            this.setState({employees : initialEmployees})
        },  0)
    }
    createEmployee(employee) {
        employee.id = this.state.employees.length + 1
        const newEmployeeList = this.state.employees.slice()
        newEmployeeList.push(employee)
        this.setState({employees : newEmployeeList})
    }
    render() {
        return (
            <React.Fragment>
                <h1>Employee Management Application</h1>
                <EmployeeFilter />
                <hr />
                <EmployeeTable employees={this.state.employees}/>
                <hr />
                <EmployeeAdd createEmployee={this.createEmployee}/>
            </React.Fragment>
        )
    }
}