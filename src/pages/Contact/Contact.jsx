import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, Instagram, Facebook, Github, ArrowRight, X, Check, AlertCircle, Info as InfoIcon, CheckCircle, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { countryCodes } from '../../utils/countryCodes';
import API_URL from '../../utils/url';


const CustomToast = ({ t, type, title, message }) => {
  const iconMap = {
    success: <Check size={18} className="text-[#10b981]" />,
    error: <AlertCircle size={18} className="text-[#ef4444]" />,
    warning: <AlertCircle size={18} className="text-[#f59e0b]" />,
    info: <InfoIcon size={18} className="text-[#3b82f6]" />
  };

  const accentMap = {
    success: 'border-l-[#10b981]',
    error: 'border-l-[#ef4444]',
    warning: 'border-l-[#f59e0b]',
    info: 'border-l-[#3b82f6]'
  };

  const bgIconMap = {
    success: 'bg-[#10b981]/10',
    error: 'bg-[#ef4444]/10',
    warning: 'bg-[#f59e0b]/10',
    info: 'bg-[#3b82f6]/10'
  };

  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-[#14161a] border border-white/5 shadow-2xl rounded-xl pointer-events-auto flex relative overflow-hidden transition-all duration-300 border-l-4 ${accentMap[type]}`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className={`shrink-0 pt-0.5 w-10 h-10 rounded-full flex items-center justify-center ${bgIconMap[type]}`}>
            {iconMap[type]}
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-semibold text-white">
              {title}
            </p>
            <p className="mt-1 text-sm text-slate-400 leading-relaxed">
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start p-2">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="rounded-md p-1 inline-flex text-slate-500 hover:text-white transition-colors outline-none"
        >
          <span className="sr-only">Close</span>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

const CustomSelect = ({ id, name, value, onChange, options, placeholder, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value) || {};
  const selectedLabel = selectedOption.label || selectedOption.value || placeholder;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className={`w-full bg-[#0f1013] border ${isOpen ? 'border-[#5d9bfa] ring-2 ring-[#5d9bfa]/20' : 'border-white/10'} rounded-lg py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-200 cursor-pointer flex justify-between items-center focus:border-[#5d9bfa] focus:ring-2 focus:ring-[#5d9bfa]/20`}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <span className="flex items-center gap-2 pr-5 whitespace-nowrap overflow-hidden text-ellipsis" style={{ color: !value ? '#4a5568' : '#fff' }}>
          {selectedOption.code && (
            <img
              src={`https://flagcdn.com/w20/${selectedOption.code}.png`}
              srcSet={`https://flagcdn.com/w40/${selectedOption.code}.png 2x`}
              width="20"
              alt={selectedOption.code}
            />
          )}
          {selectedLabel}
        </span>
        <ChevronDown className={`text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} size={16} />
      </div>
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#1a1c23] border border-white/10 rounded-lg max-h-[250px] overflow-y-auto z-[100] shadow-[0_10px_40px_rgba(0,0,0,0.8)] p-2 flex flex-col gap-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-md hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
          {options.map((opt, index) => (
            <div
              key={`${opt.value}-${index}`}
              className={`py-3 px-3.5 text-sm cursor-pointer rounded-md flex items-center gap-2 transition-all duration-200 ${value === opt.value ? 'bg-[#5d9bfa]/10 text-[#5d9bfa]' : 'text-slate-400 hover:bg-[#5d9bfa]/10 hover:text-[#5d9bfa]'}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.code && (
                <img
                  src={`https://flagcdn.com/w20/${opt.code}.png`}
                  srcSet={`https://flagcdn.com/w40/${opt.code}.png 2x`}
                  width="20"
                  alt={opt.code}
                />
              )}
              {opt.label || opt.value}
            </div>
          ))}
        </div>
      )}
      {required && (
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={() => { }}
          required
          className="opacity-0 absolute pointer-events-none h-0 w-0"
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    subject: 'Course Enquiry',
    courseName: '',
    orderId: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const showError = (msg) => {
      toast.custom((t) => (
        <CustomToast t={t} type="error" title="Action Required" message={msg} />
      ), { position: 'top-right', duration: 4000 });
    };

    // Custom Validation
    if (!formData.name.trim()) return showError("Please enter your full name.");
    if (!formData.email.trim()) return showError("Please enter your email address.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return showError("Please enter a valid email address.");
    if (formData.subject === 'Course Enquiry' && !formData.phone.trim()) return showError("Phone number is required for course enquiries.");
    if (formData.subject === 'Course Enquiry' && !formData.courseName) return showError("Please select a course.");
    if (formData.subject === 'Payment Problem' && !formData.orderId.trim()) return showError("Please enter your Order ID.");
    if (!formData.message.trim()) return showError("Please describe your issue or question.");

    // Send to Backend
    const loadingToastId = toast.loading("Sending your message...", {
      style: {
        background: '#14161a',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.05)'
      }
    });

    const sendData = async () => {
      try {
        const response = await fetch(`${API_URL}/inquiries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            fullName: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            subject: formData.subject,
            courseName: formData.courseName,
            message: formData.message
          }),
        });

        if (response.ok) {
          toast.dismiss(loadingToastId);
          toast.custom((t) => (
            <CustomToast 
              t={t} 
              type="success" 
              title="Successfully Sent!" 
              message="Your request has been received. Our team will contact you within 24 hours." 
            />
          ), { position: 'top-right', duration: 5000 });
          setIsSubmitted(true);
        } else {
          toast.dismiss(loadingToastId);
          showError("Failed to send message. Please try again.");
        }
      } catch (error) {
        toast.dismiss(loadingToastId);
        showError("Server error. Please check your connection.");
      }
    };

    sendData();
  };


  return (
    <div className="w-full min-h-screen bg-[#0b0c10] flex justify-center items-start px-5 pt-[120px] pb-[80px] text-[#e2e8f0]">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-[1100px] w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-[50px] items-start">

        {/* LEFT COLUMN - FORM */}
        <div className="flex flex-col gap-8">
          {isSubmitted ? (
            <div className="bg-[#14161a] border border-white/5 rounded-[20px] p-8 lg:p-12 flex flex-col items-center text-center gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-enter h-full justify-center min-h-[500px]">
              <div className="w-20 h-20 rounded-full bg-[#10b981]/10 flex items-center justify-center mb-2">
                <CheckCircle size={48} className="text-[#10b981]" />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Thank you for your request!</h2>
                <p className="text-slate-400 max-w-[400px] leading-relaxed">
                  Your request has been successfully submitted. Our team will review your details and get back to you within 24 hours.
                </p>
              </div>
              <Link 
                to="/" 
                className="mt-4 bg-[#5d9bfa] text-[#1a202c] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:bg-[#4b89e8] hover:-translate-y-1 no-underline active:scale-95"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 lg:pr-10">
                <span className="text-xs tracking-[2px] uppercase text-slate-400 font-semibold">GET IN TOUCH</span>
                <h1 className="text-4xl md:text-5xl leading-[1.1] font-extrabold text-white m-0 uppercase">
                  Get in Touch with
                  <span className="bg-gradient-to-br from-[#a7c8ff] to-[#5d9bfa] bg-clip-text text-transparent"> Gravity Coding.</span>
                </h1>
                <p className="text-base text-slate-400 leading-relaxed max-w-[90%] mt-2">
                  Have a question or need help? Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="bg-[#14161a] border border-white/5 rounded-[20px] p-6 lg:p-8 flex flex-col gap-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[0.85rem] text-slate-400 font-medium">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0f1013] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-200 placeholder:text-[#4a5568] focus:border-[#5d9bfa] focus:ring-2 focus:ring-[#5d9bfa]/20"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[0.85rem] text-slate-400 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="yourname@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0f1013] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-200 placeholder:text-[#4a5568] focus:border-[#5d9bfa] focus:ring-2 focus:ring-[#5d9bfa]/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[0.85rem] text-slate-400 font-medium">Phone Number</label>
                    <div className="grid grid-cols-[125px_1fr] gap-3">
                      <CustomSelect
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        options={countryCodes}
                      />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0f1013] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-200 placeholder:text-[#4a5568] focus:border-[#5d9bfa] focus:ring-2 focus:ring-[#5d9bfa]/20"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-[0.85rem] text-slate-400 font-medium">Subject / Category</label>
                    <CustomSelect
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Select a subject"
                      options={[
                        { value: "General Enquiry", label: "General Enquiry" },
                        { value: "Course Enquiry", label: "Course Enquiry" },
                        { value: "Technical Issue", label: "Technical Issue" },
                        { value: "Payment Problem", label: "Payment Problem" },
                        { value: "Collaboration / Partnership", label: "Collaboration / Partnership" },
                        { value: "Career / Hiring", label: "Career / Hiring" },
                        { value: "Other", label: "Other" }
                      ]}
                    />
                  </div>
                </div>

                {/* Conditional Fields */}
                {formData.subject === 'Course Enquiry' && (
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="courseName" className="text-[0.85rem] text-slate-400 font-medium">Course Name</label>
                      <CustomSelect
                        id="courseName"
                        name="courseName"
                        value={formData.courseName}
                        onChange={handleChange}
                        placeholder="Select a course"
                        required
                        options={[
                          { value: "Full Stack Mastery", label: "Full Stack Mastery" },
                          { value: "Backend Engineering", label: "Backend Engineering" },
                          { value: "DevOps Crash Course", label: "DevOps Crash Course" },
                          { value: "Advanced UI/UX", label: "Advanced UI/UX" }
                        ]}
                      />
                      <p className="text-[0.7rem] text-slate-500 mt-1">Only required for course-related queries</p>
                    </div>
                  </div>
                )}

                {formData.subject === 'Payment Problem' && (
                  <div className="grid grid-cols-1">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="orderId" className="text-[0.85rem] text-slate-400 font-medium">Order ID</label>
                      <input
                        type="text"
                        id="orderId"
                        name="orderId"
                        placeholder="e.g. ORD-102938"
                        value={formData.orderId}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0f1013] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-200 placeholder:text-[#4a5568] focus:border-[#5d9bfa] focus:ring-2 focus:ring-[#5d9bfa]/20"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[0.85rem] text-slate-400 font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Describe your issue or question in detail..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0f1013] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-200 placeholder:text-[#4a5568] focus:border-[#5d9bfa] focus:ring-2 focus:ring-[#5d9bfa]/20 min-h-[120px] resize-y"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#5d9bfa] text-[#1a202c] font-semibold text-base p-4 rounded-full cursor-pointer transition-all duration-200 mt-2.5 hover:bg-[#4b89e8] hover:-translate-y-px active:scale-95">Submit Your Request</button>
              </form>
            </>
          )}
        </div>

        {/* RIGHT COLUMN - INFO */}
        <div className="flex flex-col gap-5 pt-5 lg:pt-0">

          {/* Phone Numbers */}
          <div className="bg-[#14161a] border border-white/5 rounded-2xl flex items-center p-5 gap-4 transition-all duration-200 hover:bg-[#1a1c23] hover:border-white/10 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#5d9bfa]/10">
              <Phone size={20} className="text-white" />
            </div>
            <div className="flex flex-col justify-center grow">
              <span className="text-[0.65rem] text-slate-500 uppercase tracking-[1px] font-semibold mb-[2px] leading-none">CALL US</span>
              <div className="flex flex-col gap-1 mt-[2px]">
                <a href="tel:+917462830649" className="text-[0.95rem] text-white font-medium leading-[1.2] no-underline hover:text-[#5d9bfa] transition-colors">+91 7462830649</a>
                <a href="tel:+916260259118" className="text-[0.95rem] text-white font-medium leading-[1.2] no-underline hover:text-[#5d9bfa] transition-colors">+91 6260259118</a>
              </div>
            </div>
          </div>

          {/* Email Support */}
          <a href="mailto:contact@gravitycoding.com" className="bg-[#14161a] border border-white/5 rounded-2xl flex items-center p-5 gap-4 transition-all duration-200 cursor-pointer hover:bg-[#1a1c23] hover:border-white/10 no-underline group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#5d9bfa]/10">
              <Mail size={20} color="#fff" />
            </div>
            <div className="flex flex-col justify-center grow">
              <span className="text-[0.65rem] text-slate-500 uppercase tracking-[1px] font-semibold mb-[2px] leading-none">OFFICIAL CHANNEL</span>
              <span className="text-[0.95rem] text-white font-medium leading-[1.2] mt-[2px]">contact@gravitycoding.com</span>
            </div>
          </a>

          {/* Office Address */}
          <div className="bg-[#14161a] border border-white/5 rounded-2xl flex items-start p-5 gap-4 transition-all duration-200 hover:bg-[#1a1c23] hover:border-white/10 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#5d9bfa]/10 mt-1">
              <MapPin size={20} className="text-white" />
            </div>
            <div className="flex flex-col justify-center grow">
              <span className="text-[0.65rem] text-slate-500 uppercase tracking-[1px] font-semibold mb-[2px] leading-none">OFFLINE BRANCH</span>
              <span className="text-[0.9rem] text-white font-medium leading-relaxed mt-1 pr-2">
                Sai Mandir Chouraha, Lamheta Rd,<br />
                Sagra, Jabalpur,<br />
                Madhya Pradesh 482003
              </span>
            </div>
          </div>

          {/* WhatsApp CTA (Keeping as secondary or replacing) */}
          <a href="https://wa.me/916260259118" target="_blank" rel="noopener noreferrer" className="bg-[#14161a] border border-white/5 rounded-2xl flex items-center p-5 gap-4 transition-all duration-200 cursor-pointer hover:bg-[#1a1c23] hover:border-white/10 no-underline group mt-2 border-l-4 border-l-[#1db954]/50">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#1db954]/10">
              <FaWhatsapp size={22} color="#1db954" />
            </div>
            <div className="flex flex-col justify-center grow">
              <span className="text-[0.65rem] text-[#1db954] uppercase tracking-[1px] font-bold mb-[2px] leading-none">INSTANT CHAT</span>
              <span className="text-[0.95rem] text-white font-semibold leading-[1.2] mt-[2px]">Chat with us on WhatsApp</span>
            </div>
            <ArrowRight className="text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" size={20} />
          </a>

          {/* Social Links */}
          <div className="flex flex-col gap-3 mt-4">
            <span className="text-[0.65rem] text-slate-500 uppercase tracking-[1px] font-semibold">FOLLOW THE ORBIT</span>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/gravitycoding/" target="_blank" rel="noopener noreferrer" className="bg-[#14161a] border border-white/5 w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-200 hover:bg-[#1a1c23] hover:text-white hover:border-white/10 hover:-translate-y-[2px]"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/gravitycoding" target="_blank" rel="noopener noreferrer" className="bg-[#14161a] border border-white/5 w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-200 hover:bg-[#1a1c23] hover:text-white hover:border-white/10 hover:-translate-y-[2px]"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/gravitycoding" target="_blank" rel="noopener noreferrer" className="bg-[#14161a] border border-white/5 w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-200 hover:bg-[#1a1c23] hover:text-white hover:border-white/10 hover:-translate-y-[2px]"><Facebook size={20} /></a>
              <a href="https://github.com/gravity-coding" target="_blank" rel="noopener noreferrer" className="bg-[#14161a] border border-white/5 w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-200 hover:bg-[#1a1c23] hover:text-white hover:border-white/10 hover:-translate-y-[2px]"><Github size={20} /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
