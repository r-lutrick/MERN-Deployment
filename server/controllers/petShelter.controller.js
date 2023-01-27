// Import model
const PetModel = require('../models/petShelter.model')

// Create
module.exports.createPet = (req, res) => {
    // if (!PetModel.exists({ name: req.body })) {
    //     PetModel.create(req.body)
    //         .then(data => res.json(data))
    //         .catch(err => res.status(400).json(err))
    // } else {
    //     res.status(400).json({ response: { data: { errors: { name: { message: "Name exists" } } } } })
    // }
    PetModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
}

// Read
module.exports.readAllPet = (req, res) => {
    PetModel.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Read one
module.exports.readOnePet = (req, res) => {
    PetModel.findOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Update
module.exports.updatePet = (req, res) => {
    PetModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => res.json(err))
    // BlackBelt:
    // .catch(err => res.status(400).json(err))
}

// Delete
module.exports.deletePet = (req, res) => {
    PetModel.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}