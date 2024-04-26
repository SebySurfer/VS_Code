const asyncHandler = require('express-async-handler')

const Tarea = require('../models/tareas')


const getTareas = asyncHandler ( async (req, res) => {
    res.status(200).json({message: `Obtener tareas`})

    
} )

const tarea = await Tarea.find({
    res: req.body.descripcion

})



res.status(201).json(tarea)

const crearTareas = asyncHandler ( async(req, res) => {
    if(req.body.descripcion){
        req.status(400).json({message: "Por favor manda un mens baboso"})
    }
    console.log(req.body)
    res.status(200).json({message: `Crear tareas`})
})

const updateTareas = asyncHandler ( async(req, res) => {
    res.status(200).json({message: `Crear tareas`})
} )

const deleteTareas = asyncHandler ( async(req, res) => {
    res.status(200).json({message: `Crear tareas`})
})

module.exports = {
    getTareas, 
    crearTareas, 
    updateTareas, 
    deleteTareas

}


