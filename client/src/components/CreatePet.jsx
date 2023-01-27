import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePet = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')
    // Error handling
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/petShelter/create", { name, type, description, skill1, skill2, skill3 })
            .then(res => {
                setErrors({})
                navigate('/')
            })
            .catch(err => {
                const errorObj = {}
                // console.log(err.response.data.keyValue)
                const errorValue = err.response.data.keyValue
                if (errorValue) {
                    console.log(errorValue)
                    errorObj['name'] = `Name already exists`
                } else if (err.response.data.errors){
                    const errorResponse = err.response.data.errors
                    for (const key of Object.keys(errorResponse)) {
                        errorObj[key] = errorResponse[key].message
                    }
                }
                setErrors(errorObj)
                console.log(errors)
            })
    }

    return (
        <div className='container'>
            <h3 className='my-3'>Know a pet needing a home?</h3>
            <form className='d-flex form-control' onSubmit={handleSubmit}>
                <div className='col-6 p-3'>
                    <label className='form-label'>Pet Name:</label>
                    <p style={{ margin: 0, color: "red" }}>{errors.name}</p>
                    <input className='input-group mb-3' type="text" onChange={(e) => { setName(e.target.value) }} />
                    <label className='form-label'>Pet Type:</label>
                    <p style={{ margin: 0, color: "red" }}>{errors.type}</p>
                    <input className='input-group mb-3' type="text" onChange={(e) => { setType(e.target.value) }} />
                    <label className='form-label'>Pet Description:</label>
                    <p style={{ margin: 0, color: "red" }}>{errors.description}</p>
                    <input className='input-group mb-3' type="text" onChange={(e) => { setDescription(e.target.value) }} />
                    <button type='submit' className='btn btn-outline-dark w-50'>Add Pet</button>
                </div>
                <div className='col-6 p-3'>
                    <p>Skils (optional)</p>
                    <label className='form-label'>Skill 1:</label>
                    <input className='input-group mb-3' type="text" onChange={(e) => { setSkill1(e.target.value) }} />
                    <label className='form-label'>Skill 2:</label>
                    <input className='input-group mb-3' type="text" onChange={(e) => { setSkill2(e.target.value) }} />
                    <label className='form-label'>Skill 3:</label>
                    <input className='input-group mb-3' type="text" onChange={(e) => { setSkill3(e.target.value) }} />
                </div>
            </form>
        </div>
    )
}

export default CreatePet