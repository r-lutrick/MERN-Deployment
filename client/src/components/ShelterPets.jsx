import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShelterPets = () => {
    const [pets, setPets] = useState([])
    // sorting
    const typeAsc = [...pets].sort((a, b) =>
        a.type.toLowerCase() > b.type.toLowerCase() ? 1 : -1
    )
    useEffect(() => {
        axios.get('http://localhost:8000/api/petShelter/get')
            .then(res => {
                setPets(res.data);
            })
            .catch(err => console.log("All Pets error: ", err))
    }, [])

    return (
        <div className='container'>
            <h3 className='my-3'>These pets are looking for a good home</h3>
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        typeAsc.map((pet, i) => {
                            return (
                                <tr key={i}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link to={`/pets/${pet._id}`}
                                            className='btn btn-outline-dark'
                                        >Details</Link> | <Link to={`/pets/edit/${pet._id}`}
                                            className='btn btn-outline-secondary'
                                        >Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShelterPets