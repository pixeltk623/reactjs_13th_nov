import React from 'react'
import Employee from './Employee'

function Company() {

    let employeName = "Sanjeev Kumar";

    let employeeDetails = {name: "XYZ", email: "xyz@gmail.com", Dept: 'IT'};

    return (
        <div>
            <h1>This is Company</h1>
           <Employee emoloyeeInfo = { employeeDetails } />
        </div>
    )
}

export default Company
