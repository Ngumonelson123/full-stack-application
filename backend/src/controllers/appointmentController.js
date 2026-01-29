const Appointment = require('../models/Appointment');
const Service = require('../models/Service');
const Optician = require('../models/Optician');

exports.getAllAppointments = async (req, res) => {
  try {
    const { status, date, optician } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      filter.appointmentDate = { $gte: startDate, $lt: endDate };
    }
    if (optician) filter.optician = optician;

    const appointments = await Appointment.find(filter)
      .populate('service', 'name price')
      .populate('optician', 'name specialty')
      .sort({ appointmentDate: 1 });

    res.json({
      success: true,
      count: appointments.length,
      appointments
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch appointments' 
    });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const { patientName, patientEmail, patientPhone, appointmentDate, service, optician, notes } = req.body;

    // Validation
    if (!patientName || !patientEmail || !patientPhone || !appointmentDate || !service || !optician) {
      return res.status(400).json({
        success: false,
        error: 'All required fields must be provided'
      });
    }

    // Check if service and optician exist
    const [serviceExists, opticianExists] = await Promise.all([
      Service.findById(service),
      Optician.findById(optician)
    ]);

    if (!serviceExists) {
      return res.status(400).json({
        success: false,
        error: 'Invalid service selected'
      });
    }

    if (!opticianExists) {
      return res.status(400).json({
        success: false,
        error: 'Invalid optician selected'
      });
    }

    // Check for conflicting appointments
    const conflictingAppointment = await Appointment.findOne({
      optician,
      appointmentDate: new Date(appointmentDate),
      status: { $in: ['scheduled', 'confirmed'] }
    });

    if (conflictingAppointment) {
      return res.status(400).json({
        success: false,
        error: 'This time slot is already booked'
      });
    }

    const appointment = new Appointment({
      patientName: patientName.trim(),
      patientEmail: patientEmail.toLowerCase().trim(),
      patientPhone: patientPhone.trim(),
      appointmentDate: new Date(appointmentDate),
      service,
      optician,
      notes: notes?.trim() || ''
    });

    await appointment.save();
    await appointment.populate(['service', 'optician']);

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      appointment
    });
  } catch (error) {
    console.error('❌ Appointment creation error:', error.message);
    res.status(500).json({ 
      success: false,
      error: 'Failed to create appointment' 
    });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    ).populate(['service', 'optician']);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        error: 'Appointment not found'
      });
    }

    res.json({
      success: true,
      message: 'Appointment updated successfully',
      appointment
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to update appointment' 
    });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        error: 'Appointment not found'
      });
    }

    res.json({
      success: true,
      message: 'Appointment cancelled successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to cancel appointment' 
    });
  }
};