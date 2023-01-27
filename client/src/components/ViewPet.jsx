import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ViewPet = () => {
    const [pet, setPet] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/petShelter/get/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    }, [id])

    const handleDelete = (e, id) => {
        e.preventDefault();
        if ( window.confirm(`Are you sure you want to delete ${pet.name}`) ) {
            axios.delete(`http://localhost:8000/api/petShelter/delete/${id}`)
                .then(res => navigate(`/`))
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className='my-3'>Details about {pet.name}</h3>
                <button onClick={(e) => handleDelete(e, pet._id)}>Adopt {pet.name}</button>
            </div>
            <div>
                <p>Pet type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <p>Skills: {pet.skill1} <br /> {pet.skill2} <br /> {pet.skill3} </p>
            </div>

        </div>
    )
}

export default ViewPet