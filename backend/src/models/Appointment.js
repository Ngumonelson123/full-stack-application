// backend/src/models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: [true, 'Patient name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  patientEmail: {
    type: String,
    required: [true, 'Email address is required'],
    trim: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please enter a valid email address'
    }
  },
  patientPhone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    validate: {
      validator: function(v) {
        // Allow various phone formats: +1 (308) 707-5814, 0701168815, +254701168815, etc.
        return /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/.test(v.replace(/\s/g, ''));
      },
      message: 'Please enter a valid phone number (e.g., +1 (308) 707-5814 or 0701168815)'
    }
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  optician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Optician',
    required: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'confirmed', 'completed', 'cancelled'],
    default: 'scheduled'
  },
  notes: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema);