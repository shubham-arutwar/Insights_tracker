const express = require('express')
const {
    createMachineStatus,
    uploadBulkMachineStatus,
    getAllMachineStatus
} = require('../controllers/machineController') 

const router = express.Router()

router.get('/', getAllMachineStatus)

router.post('/', createMachineStatus)

router.post('/bulk', uploadBulkMachineStatus)

module.exports = router