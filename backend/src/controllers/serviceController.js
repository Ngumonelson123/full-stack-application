const Service = require('../models/Service');

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ name: 1 });

    res.json({
      success: true,
      count: services.length,
      services
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch services' 
    });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found'
      });
    }

    res.json({
      success: true,
      service
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch service' 
    });
  }
};

exports.createService = async (req, res) => {
  try {
    const { name, description, price, duration, category } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({
        success: false,
        error: 'Name, description, and price are required'
      });
    }

    const service = new Service({
      name: name.trim(),
      description: description.trim(),
      price: parseFloat(price),
      duration: duration || 30,
      category: category?.trim() || 'General'
    });

    await service.save();

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      service
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to create service' 
    });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const service = await Service.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service updated successfully',
      service
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to update service' 
    });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service deactivated successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: 'Failed to delete service' 
    });
  }
};