const Optician = require('../models/Optician');

exports.getAllOpticians = async (req, res) => {
  try {
    const { specialty, isAvailable } = req.query;
    const filter = { isActive: true };

    if (specialty) filter.specialty = new RegExp(specialty, 'i');
    if (isAvailable !== undefined) filter.isAvailable = isAvailable === 'true';

    const opticians = await Optician.find(filter).sort({ name: 1 });

    res.json({
      success: true,
      count: opticians.length,
      opticians
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch opticians' 
    });
  }
};

exports.getOpticianById = async (req, res) => {
  try {
    const { id } = req.params;
    const optician = await Optician.findById(id);

    if (!optician) {
      return res.status(404).json({
        success: false,
        error: 'Optician not found'
      });
    }

    res.json({
      success: true,
      optician
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch optician' 
    });
  }
};

exports.createOptician = async (req, res) => {
  try {
    const { name, specialty, experience, bio, email, phone } = req.body;

    if (!name || !specialty || !experience) {
      return res.status(400).json({
        success: false,
        error: 'Name, specialty, and experience are required'
      });
    }

    const optician = new Optician({
      name: name.trim(),
      specialty: specialty.trim(),
      experience: parseInt(experience),
      bio: bio?.trim() || '',
      email: email?.toLowerCase().trim(),
      phone: phone?.trim()
    });

    await optician.save();

    res.status(201).json({
      success: true,
      message: 'Optician created successfully',
      optician
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to create optician' 
    });
  }
};

exports.updateOptician = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const optician = await Optician.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!optician) {
      return res.status(404).json({
        success: false,
        error: 'Optician not found'
      });
    }

    res.json({
      success: true,
      message: 'Optician updated successfully',
      optician
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to update optician' 
    });
  }
};

exports.deleteOptician = async (req, res) => {
  try {
    const { id } = req.params;

    const optician = await Optician.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!optician) {
      return res.status(404).json({
        success: false,
        error: 'Optician not found'
      });
    }

    res.json({
      success: true,
      message: 'Optician deactivated successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to delete optician' 
    });
  }
};