import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

export function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    reason: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", email: "", date: "", time: "", reason: "" });
        onClose();
      }, 3000);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Appointment booking modal"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0f1a2e]">Book an Appointment</h3>
                  <p className="text-sm text-[#64748b]">Fill in your details below</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[#f1f5f9] transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="modal-name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input ${errors.name ? "border-red-400 focus:border-red-400" : ""}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`form-input ${errors.phone ? "border-red-400 focus:border-red-400" : ""}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? "border-red-400 focus:border-red-400" : ""}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-date" className="form-label">
                        Preferred Date *
                      </label>
                      <input
                        id="modal-date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`form-input ${errors.date ? "border-red-400 focus:border-red-400" : ""}`}
                      />
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label htmlFor="modal-time" className="form-label">
                        Preferred Time *
                      </label>
                      <input
                        id="modal-time"
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`form-input ${errors.time ? "border-red-400 focus:border-red-400" : ""}`}
                      />
                      {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-reason" className="form-label">
                      Reason for Visit
                    </label>
                    <textarea
                      id="modal-reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Briefly describe your health concern..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-center">
                    Request Appointment
                  </button>

                  <p className="text-xs text-[#94a3b8] text-center">
                    * Required fields. We'll confirm your appointment shortly.
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <div className="success-check">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0f1a2e] mb-2">Thank You!</h4>
                  <p className="text-[#475569]">
                    Your appointment request has been received. We'll contact you shortly to confirm.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}