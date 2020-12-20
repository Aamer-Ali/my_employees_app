/**
 * emp1 - Android developer
 * emp2 - Web Developer
 * emp3 - Designer
 * emp4 - HR
 * emp5 - Operations
 */

const Employees = [
    {
        _id:"A10",
        name:"Aamer Ali",
        designation:{_id:"emp1", name:"Android Developer"},
        address:"Katy Kat Gate",
        personalDetails:{age:"30",gender:"Male"},
        mobileNumber:"9028030984"
    },
    {
        _id:"A11",
        name:"Ajay Gokhle",
        designation:{_id:"emp2", name:"Web Developer"},
        address:"Aurangabad",
        personalDetails:{age:"45",gender:"Male"},
        mobileNumber:"9876567897"
    },
    {
        _id:"A12",
        name:"Ismail Patni",
        designation:{_id:"emp5", name:"Operations"},
        address:"Silk Mils Colony",
        personalDetails:{age:"28",gender:"Male"},
        mobileNumber:"6354725378"
    },
    {
        _id:"A13",
        name:"Rehan Khan",
        designation:{_id:"emp4", name:"HR"},
        address:"Buddi Lane",
        personalDetails:{age:"35",gender:"Male"},
        mobileNumber:"2343234567"
    },
    {
        _id:"A14",
        name:"Vishal Sevekar",
        designation:{_id:"emp3", name:"Designer"},
        address:"Aurangabad",
        personalDetails:{age:"30",gender:"Male"},
        mobileNumber:"2345674532"
    },
    {
        _id:"A15",
        name:"Vishal Bondre",
        designation:{_id:"emp2", name:"Web Developer"},
        address:"Aurangabad",
        personalDetails:{age:"27",gender:"Male"},
        mobileNumber:"6546543246"
    },
    {
        _id:"A16",
        name:"Uzma Rehman",
        designation:{_id:"emp2", name:"Web Developer"},
        address:"Aurangabad",
        personalDetails:{age:"45",gender:"Female"},
        mobileNumber:"1234567898"
    },
    {
        _id:"A17",
        name:"Sara Ali",
        designation:{_id:"emp3", name:"Designer"},
        address:"Aurangabad",
        personalDetails:{age:"29",gender:"Female"},
        mobileNumber:"9876543212"
    },
    {
        _id:"A18",
        name:"Mirza Shareque",
        designation:{_id:"emp1", name:"Android Developer"},
        address:"Aurangabad",
        personalDetails:{age:"35",gender:"Male"},
        mobileNumber:"3452637453"
    },
    {
        _id:"A19",
        name:"Yaser Hussain",
        designation:{_id:"emp2", name:"Web Developer"},
        address:"Rehmaniya colony",
        personalDetails:{age:"30",gender:"Male"},
        mobileNumber:"2436475897"
    },
]

export function getEmployees(){
    return Employees;
}

export function getEmployee(id)
{
    return Employees.filter(m => m._id === id);
}