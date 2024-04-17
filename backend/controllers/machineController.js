const machineStatus = require('../models/machineStatus.js')
const fs = require('fs');

const getAllMachineStatus = async (req,res) => {
    const allMachineStatus = await machineStatus.find({}).sort({ts: -1})
    res.status(200).json(allMachineStatus)
}


const createMachineStatus = async (req, res) =>{
    const {ts,machine_status,vibration} = req.body

    try {
        const status = await machineStatus.create({ts,machine_status,vibration})
        res.status(200).json(status)
    } catch (error) {
        res.status(400).json({error: error.meessage})
    }
}

const uploadBulkMachineStatus = async (req, res) => {
    try {
        // Read sample-data.json file
        const rawData = fs.readFileSync('sample-data.json');
        const data = JSON.parse(rawData);

        // Create an array to store created statuses
        const createdStatuses = [];

        // Loop through each data entry and create machine status
        for (const entry of data) {
            const { ts, machine_status, vibration } = entry;
            const status = await machineStatus.create({ ts, machine_status, vibration });
            createdStatuses.push(status);
        }

        res.status(200).json(createdStatuses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createMachineStatus,
    uploadBulkMachineStatus,
    getAllMachineStatus
}