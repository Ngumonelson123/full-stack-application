const express = require('express');
const Service = require('../models/Service');
const Optician = require('../models/Optician');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Test endpoint to add sample data
router.post('/seed-sample-data', async (req, res) => {
  try {
    // Clear existing data
    await Service.deleteMany({});
    await Optician.deleteMany({});
    
    // Add sample services
    const services = await Service.insertMany([
      {
        name: 'Comprehensive Eye Exam',
        description: 'Complete vision assessment including refraction, eye health evaluation, and prescription update.',
        duration: 60,
        price: 120
      },
      {
        name: 'Contact Lens Fitting',
        description: 'Professional fitting and training for new contact lens wearers.',
        duration: 45,
        price: 80
      }
    ]);

    // Add sample opticians
    const opticians = await Optician.insertMany([
      {
        name: 'Dr. Sarah Johnson',
        specialty: 'Pediatric Optometry',
        bio: 'With over 10 years of experience in pediatric eye care.',
        experience: 10,
        isAvailable: true
      },
      {
        name: 'Dr. Michael Chen',
        specialty: 'Contact Lenses',
        bio: 'Expert in fitting specialty contact lenses.',
        experience: 8,
        isAvailable: true
      }
    ]);

    res.json({
      success: true,
      message: 'Sample data added successfully',
      services: services.length,
      opticians: opticians.length
    });
  } catch (error) {
    console.error('Error seeding sample data:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to seed sample data'
    });
  }
});

// Test appointment booking
router.post('/test-appointment', async (req, res) => {
  try {
    // Get first service and optician
    const service = await Service.findOne();
    const optician = await Optician.findOne();
    
    if (!service || !optician) {
      return res.status(400).json({
        success: false,
        error: 'No services or opticians available. Run /seed-sample-data first.'
      });
    }

    const testAppointment = new Appointment({
      patientName: 'Test Patient',
      patientEmail: 'test@example.com',
      patientPhone: '1234567890',
      appointmentDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      service: service._id,
      optician: optician._id,
      notes: 'Test appointment'
    });

    await testAppointment.save();
    await testAppointment.populate(['service', 'optician']);

    res.json({
      success: true,
      message: 'Test appointment created successfully',
      appointment: testAppointment
    });
  } catch (error) {
    console.error('Error creating test appointment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create test appointment',
      details: error.message
    });
  }
});

// Get all data for debugging
router.get('/debug-data', async (req, res) => {
  try {
    const services = await Service.find();
    const opticians = await Optician.find();
    const appointments = await Appointment.find().populate(['service', 'optician']);

    res.json({
      success: true,
      data: {
        services: services.length,
        opticians: opticians.length,
        appointments: appointments.length,
        servicesList: services,
        opticiansList: opticians,
        appointmentsList: appointments
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch debug data'
    });
  }
});

module.exports = router;