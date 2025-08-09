const Registration = require('../models/Registration');
const User = require('../models/User');
const Event = require('../models/event');

exports.registerForEvent = async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Check if event exists
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    // Check for duplicate registration
    const existingRegistration = await Registration.findOne({ user: userId, event: eventId, status: 'registered' });
    if (existingRegistration) return res.status(400).json({ error: 'User already registered for this event' });

    // Create registration
    const registration = new Registration({ user: userId, event: eventId });
    await registration.save();

    res.status(201).json(registration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserRegistrations = async (req, res) => {
  try {
    const { userId } = req.params;
    const registrations = await Registration.find({ user: userId, status: 'registered' })
      .populate('event')
      .populate('user');

    res.json(registrations);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.cancelRegistration = async (req, res) => {
  try {
    const { registrationId } = req.params;

    const registration = await Registration.findById(registrationId);
    if (!registration) return res.status(404).json({ error: 'Registration not found' });

    registration.status = 'cancelled';
    await registration.save();

    res.json({ message: 'Registration cancelled successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
