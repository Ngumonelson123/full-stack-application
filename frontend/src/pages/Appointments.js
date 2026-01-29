// src/pages/BookAppointment.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appointmentsAPI } from "../services/api";
import axios from "axios";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    appointmentDate: "",
    service: "",
    optician: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [opticians, setOpticians] = useState([]);

  const API_BASE_URL =
    process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  // Fetch services and opticians on mount
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, opticiansRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/services`),
          axios.get(`${API_BASE_URL}/opticians`),
        ]);

        if (servicesRes.data.services) {
          setServices(servicesRes.data.services);
        } else if (Array.isArray(servicesRes.data)) {
          setServices(servicesRes.data);
        }

        if (opticiansRes.data.opticians) {
          setOpticians(opticiansRes.data.opticians);
        } else if (Array.isArray(opticiansRes.data)) {
          setOpticians(opticiansRes.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate required fields
    if (!formData.patientName.trim()) {
      setError("Full name is required");
      return;
    }
    if (!formData.patientEmail.trim()) {
      setError("Email is required");
      return;
    }
    if (!formData.patientPhone.trim()) {
      setError("Phone number is required");
      return;
    }
    if (!formData.appointmentDate) {
      setError("Appointment date is required");
      return;
    }
    if (!formData.service) {
      setError("Please select a service");
      return;
    }
    if (!formData.optician) {
      setError("Please select an optician");
      return;
    }

    setLoading(true);

    try {
      const appointmentData = {
        patientName: formData.patientName.trim(),
        patientEmail: formData.patientEmail.trim().toLowerCase(),
        patientPhone: formData.patientPhone.trim(),
        appointmentDate: formData.appointmentDate,
        service: formData.service,
        optician: formData.optician,
        notes: formData.notes.trim(),
      };

      console.log("Sending appointment:", appointmentData);

      const response = await appointmentsAPI.create(appointmentData);

      console.log("Appointment response:", response.data);

      if (response.data.success) {
        alert("Appointment booked successfully! We will contact you shortly.");
        navigate("/");
      } else {
        setError(response.data.error || "Failed to book appointment");
      }
    } catch (err) {
      console.error("Error booking appointment:", err);
      setError(
        err.response?.data?.error ||
          "Failed to book appointment. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Book an Appointment
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.patientName}
                  onChange={(e) =>
                    setFormData({ ...formData, patientName: e.target.value })
                  }
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.patientEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, patientEmail: e.target.value })
                  }
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.patientPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, patientPhone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Preferred Service *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option value="">Select a service</option>
                  {services.map((svc) => (
                    <option key={svc._id} value={svc._id}>
                      {svc.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Preferred Date *
                </label>
                <input
                  type="datetime-local"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.appointmentDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      appointmentDate: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Preferred Optician *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.optician}
                  onChange={(e) =>
                    setFormData({ ...formData, optician: e.target.value })
                  }
                >
                  <option value="">Select an optician</option>
                  {opticians.map((opt) => (
                    <option key={opt._id} value={opt._id}>
                      {opt.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Additional Notes
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                placeholder="Any specific concerns or requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
