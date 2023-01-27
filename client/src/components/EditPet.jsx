import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditPet = () => {
    const { id } = useParams()
    
    const [pet, setPet] = useState([])
    const [name, setName] = useState(pet.name)
    const [type, setType] = useState(pet.type)
    const [description, setDescription] = useState(pet.description)
    const [skill1, setSkill1] = useState(pet.skill1)
    const [skill2, setSkill2] = useState(pet.skill2)
    const [skill3, setSkill3] = useState(pet.skill3)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/petShelter/get/${id}`)
        .then(res => {setPet(res.data)})
        .catch(err => console.log(err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/petShelter/update/${id}`, {name,type,description,skill1,skill2,skill3})
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h3 className='my-3'>Edit PETNAME</h3>
            <form className='d-flex form-control' onSubmit={handleSubmit}>
                <div className='col-6'>
                    <label className='form-label'>Pet Name:</label>
                    <input className='input-group mb-3' type="text" placeholder={pet.name} onChange={(e) => { setName(e.target.value) }} />
                    <label className='form-label'>Pet Type:</label>
                    <input className='input-group mb-3' type="text" placeholder={pet.type} onChange={(e) => { setType(e.target.value) }} />
                    <label className='form-label'>Pet Description:</label>
                    <input className='input-group mb-3' type="text" placeholder={pet.description} onChange={(e) => { setDescription(e.target.value) }} />
                    <button type='submit' className='btn btn-outline-dark w-50'>Edit Pet</button>
                </div>

                <div className='col-5'>
                    <p>Skils (optional)</p>
                    <label className='form-label'>Skill 1:</label>
                    <input className='input-group mb-3' type="text" placeholder={pet.skill1} onChange={(e) => { setSkill1(e.target.value) }} />
                    <label className='form-label'>Skill 2:</label>
                    <input className='input-group mb-3' type="text" placeholder={pet.skill2} onChange={(e) => { setSkill2(e.target.value) }} />
                    <label className='form-label'>Skill 3:</label>
                    <input className='input-group mb-3' type="text" placeholder={pet.skill3} onChange={(e) => { setSkill3(e.target.value) }} />
                </div>
            </form>

        </div>
    )
}

export default EditPet