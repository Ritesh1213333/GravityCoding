import Inquiry from '../models/Inquiry.js';

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res) => {
  const { fullName, email, phone, subject, courseName, message } = req.body;

  const inquiry = await Inquiry.create({
    fullName,
    email,
    phone,
    subject,
    courseName,
    message,
  });

  if (inquiry) {
    res.status(201).json(inquiry);
  } else {
    res.status(400).json({ message: 'Invalid inquiry data' });
  }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private
const getInquiries = async (req, res) => {
  const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
  res.json(inquiries);
};

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private
const deleteInquiry = async (req, res) => {
  const inquiry = await Inquiry.findById(req.params.id);

  if (inquiry) {
    await inquiry.deleteOne();
    res.json({ message: 'Inquiry removed' });
  } else {
    res.status(404).json({ message: 'Inquiry not found' });
  }
};

// @desc    Update inquiry status
// @route   PUT /api/inquiries/:id
// @access  Private
const updateInquiryStatus = async (req, res) => {
  const { status } = req.body;
  const inquiry = await Inquiry.findById(req.params.id);

  if (inquiry) {
    inquiry.status = status || inquiry.status;
    const updatedInquiry = await inquiry.save();
    res.json(updatedInquiry);
  } else {
    res.status(404).json({ message: 'Inquiry not found' });
  }
};

export {
  createInquiry,
  getInquiries,
  deleteInquiry,
  updateInquiryStatus,
};
