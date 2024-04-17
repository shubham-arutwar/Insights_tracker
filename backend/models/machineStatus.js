const mongoose = require('mongoose')

const Schema = mongoose.Schema

const machineStatusSchema = new Schema({
    ts: {
      type: Date
    },
    machine_status: {
      type: Number
    },
    vibration: {
      type: Number
    }
})

module.exports = mongoose.model('MachineStatus', machineStatusSchema)

