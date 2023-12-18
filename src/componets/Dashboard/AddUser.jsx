import React from 'react'
import Users from "../../data/users.json"

const AddUser = () => {
    const temp = {
        "id": 16,
        "firstName": "Jeanne",
        "lastName": "Halvorson",
        "age": 26,
        "gender": "female",
        "email": "kminchelle@qq.com",
        "phone": "+86 581 108 7855",
        "username": "kminchelle",
        "password": "0lelplR",
        "image": "https://robohash.org/autquiaut.png"
    }

    Users.users.push(temp)



    return (
        <div>AddUser</div>
    )
}

export default AddUser