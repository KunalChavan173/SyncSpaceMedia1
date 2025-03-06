import React, { useState } from 'react';
import { FadeUp } from "./ui/Motion";
import { cn } from "@/lib/utils";
import countries from "./data";

export default function Contact() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    instagram: '',
    email: '',
    countryName: countries[0].name || '',
    dialCode: countries[0].dialCode || '',
    phone: '',
    message: ''
  });

  // State for submission status
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: null as boolean | null,
    message: ''
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle country change
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find(country => country.name === e.target.value) || null;
    setFormData(prev => ({
      ...prev,
      countryName: selectedCountry?.name || '',
      dialCode: selectedCountry ? selectedCountry.dialCode : '',
      phone: '', // Reset phone number when country changes
    }));
  };

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data before submission:", formData); // Log the form data

    // Comprehensive client-side validation
    if (!formData.name.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        message: 'Please enter your name'
      });
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setSubmitStatus({
        loading: false,
        success: false,
        message: 'Please enter a valid email address'
      });
      return;
    }

    if (!formData.countryName) {
      setSubmitStatus({
        loading: false,
        success: false,
        message: 'Please select a country'
      });
      return;
    }

    if (!formData.phone.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        message: 'Please enter a phone number'
      });
      return;
    }

    if (!formData.message.trim()) {
      setSubmitStatus({
        loading: false,
        success: false,
        message: 'Please enter a message'
      });
      return;
    }

    // Reset status and start loading
    setSubmitStatus({ 
      loading: true, 
      success: null, 
      message: '' 
    });

    try {
      const response = await fetch('https://syncspacemedia1-backend.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        // Success handling
        setSubmitStatus({
          loading: false,
          success: true,
          message: result.message || 'Thank you for reaching out!'
        });

        // Reset form
        setFormData({
          name: '',
          instagram: '',
          email: '',
          countryName: countries[0].name || '',
          dialCode: countries[0].dialCode || '',
          phone: '',
          message: ''
        });

        // Clear message after 3 seconds
        setTimeout(() => {
          setSubmitStatus(prev => ({ ...prev, message: '' }));
        }, 3000);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        loading: false,
        success: false,
        message: (error as Error).message || 'An unexpected error occurred'
      });
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E40AF]/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="text-center mb-20">
            <FadeUp>
              <span className="text-[1.25rem] text-white/60 mb-4 block tracking-wide">
                Get in Touch
              </span>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                Let's start a project{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
                  together
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear about it. 
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </FadeUp>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Instagram Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <FadeUp delay={0.3}>
                <div>
                  <label 
                    htmlFor="name" 
                    className="text-white/60 mb-2 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-[#1A1A1A]/40 backdrop-blur-sm rounded-2xl px-6 py-4 
                      text-white border border-white/5 
                      focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 
                      transition-all duration-300"
                  />
                </div>
              </FadeUp>

              {/* Instagram Field */}
              <FadeUp delay={0.4}>
                <div>
                  <label 
                    htmlFor="instagram" 
                    className="text-white/60 mb-2 block"
                  >
                    Instagram
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="Your Instagram handle"
                    className="w-full bg-[#1A1A1A]/40 backdrop-blur-sm rounded-2xl px-6 py-4
                      text-white border border-white/5
                      focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50
                      transition-all duration-300 cursor-text"
                  />
                </div>
              </FadeUp>
            </div>

            {/* Phone and Email Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <FadeUp delay={0.4}>
                <div>
                  <label 
                    htmlFor="email" 
                    className="text-white/60 mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full bg-[#1A1A1A]/40 backdrop-blur-sm rounded-2xl px-6 py-4 
                      text-white border border-white/5 
                      focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 
                      transition-all duration-300"
                  />
                </div>
              </FadeUp>

              {/* Phone Field */}
              <FadeUp delay={0.5}>
                <div>
                  <label htmlFor="phone" className="text-white/60 mb-2 block">Phone Number</label>
                  <div className="flex items-stretch">
                    {/* Country Code Dropdown */}
                    <select
                      id="country"
                      name="country"
                      value={formData.countryName}
                      onChange={handleCountryChange}
                      className="w-1/5 bg-[#1A1A1A]/40 backdrop-blur-sm rounded-l-2xl px-2 py-4 text-white border border-white/5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 transition-all duration-300 overflow-y-auto"
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.flag} {country.name}
                        </option>
                      ))}
                    </select>

                    {/* Phone Number Input */}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        const userInput = e.target.value.replace(/[^0-9()\s]/g, ""); // Allow only numbers, spaces, and brackets

                        setFormData((prevData) => ({
                          ...prevData,
                          phone: userInput, // Only store the number (not the country code)
                        }));
                      }}
                      placeholder="Your phone number"
                      className="w-4/5 bg-[#1A1A1A]/40 backdrop-blur-sm rounded-r-2xl px-4 py-4 
                        text-white border border-white/5 
                        focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 
                        transition-all duration-300"
                    />
                  </div>
                </div>
              </FadeUp>

            </div>

            {/* Message Field */}
            <FadeUp delay={0.6}>
              <div>
                <label 
                  htmlFor="message" 
                  className="text-white/60 mb-2 block"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  required
                  rows={5}
                  className="w-full bg-[#1A1A1A]/40 backdrop-blur-sm rounded-2xl px-6 py-4
                    text-white border border-white/5
                    focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50
                    transition-all duration-300 cursor-text resize-none"
                ></textarea>
              </div>
            </FadeUp>

            {/* Submit Status Message */}
            {submitStatus.message && (
              <div 
                className={`
                  text-center py-3 rounded-lg 
                  ${submitStatus.success 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'}
                `}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <FadeUp delay={0.7}>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={submitStatus.loading}
                  className={cn(
                    "relative px-12 py-4 rounded-full",
                    "bg-gradient-to-r from-[#2563EB] to-[#1E40AF]",
                    "text-white font-medium",
                    "shadow-[0_0_20px_rgba(37,99,235,0.25)]",
                    "hover:shadow-[0_0_25px_rgba(37,99,235,0.35)]",
                    "transition-all duration-300",
                    "hover:scale-[1.02]",
                    submitStatus.loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  )}
                >
                  {submitStatus.loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </FadeUp>
          </form>
        </div>
      </div>
    </section>
  );
}