import {Component} from "react";

export class StudentInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [{
                id: 1,
                studentName: 'Nguyễn Văn A',
                age: 30,
                address: 'Hà Nội'
            }, {
                id: 2,
                studentName: 'Nguyễn Văn B',
                age: 20,
                address: 'Đà Nẵng'
            }]
        }
    }

    render() {
        return (
            <table border="1">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {this.state.studentList.map((student, index) => (
                    <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.studentName}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        );
    }
}