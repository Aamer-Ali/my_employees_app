import React, { Component } from "react";
import { getEmployees } from "../serives/fakeEmployeesList";
import Pagination from "../common/pagination";

class Employees extends Component {
  state = {
    employees: getEmployees(),
    currentPage: 1,
    pageSize: 4,
  };

  onDeteleEmployee = (employee) => {
    const employees = this.state.employees.filter(
      (e) => e._id !== employee._id
    );
    this.setState({ employees });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    if (this.state.employees.length === 0)
      return <p>There are no employees in your company</p>;
    return (
      <React.Fragment>
        <p>Total Number of Employees : {this.state.employees.length}</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.designation.name}</td>
                <td>{employee.address}</td>
                <td>{employee.mobileNumber}</td>
                <td>
                  <button
                    onClick={() => this.onDeteleEmployee(employee)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={this.state.employees.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Employees;
