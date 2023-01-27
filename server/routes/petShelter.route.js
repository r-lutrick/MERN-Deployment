// Import controller
const PetController = require('../controllers/petShelter.controller')
module.exports = (app) => {
    // Create
    app.post("/api/petShelter/create", PetController.createPet)

    // Read
    app.get("/api/petShelter/get", PetController.readAllPet)

    // Read One
    app.get("/api/petShelter/get/:id", PetController.readOnePet)

    // Update
    app.put("/api/petShelter/update/:id", PetController.updatePet)

    //Delete
    app.delete("/api/petShelter/delete/:id", PetController.deletePet)
}
