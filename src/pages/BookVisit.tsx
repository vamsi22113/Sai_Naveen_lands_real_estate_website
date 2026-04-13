import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const BookVisit = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the WhatsApp message
    const message = `Hello, I want to book a site visit.

Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "919490908639"; // Replace with actual number

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">

      {/* Abstract Background Elements */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Dark Hero Header ── */}
      <div className="bg-[#163A22] pb-16 text-center rounded-b-[40px] md:rounded-b-[60px] shadow-lg mb-10 md:mb-16 relative z-10">
        <Navbar activePage="contact" />
        <section className="px-6 pt-12 md:px-8">
          <div className="animate-fade-rise mx-auto max-w-3xl pb-8">

            <h1 className="font-serif text-4xl text-white sm:text-5xl md:text-6xl drop-shadow-sm">
              Schedule Your Visit
            </h1>
            <p className="animate-fade-rise-delay mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Come and experience the layout, natural surroundings, and premium quality of our magnificent properties first-hand.
            </p>
          </div>
        </section>
      </div>

      {/* ── Outer Container to push footer to bottom if any ── */}
      <div className="flex-1 flex flex-col items-center justify-start pb-8 px-6 md:px-8 relative z-10 w-full">

        {/* Card Container */}
        <div className="animate-fade-rise-delay-2 w-full max-w-xl rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 p-8 shadow-2xl relative overflow-hidden">

          {/* Decorative Corner Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-[40px] pointer-events-none" />

          {/* Header */}
          <div className="text-center mb-10 relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-deep hover:underline transition-all mb-4">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Booking Details
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Sai Naveen"
                  className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-foreground ml-1">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 90000 00000"
                  className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Date */}
              <div className="space-y-1.5">
                <label htmlFor="date" className="text-sm font-medium text-foreground ml-1">
                  Select Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                    <Calendar size={18} />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors [&::-webkit-calendar-picker-indicator]:opacity-100"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="space-y-1.5">
                <label htmlFor="time" className="text-sm font-medium text-foreground ml-1">
                  Select Time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                    <Clock size={18} />
                  </div>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors [&::-webkit-calendar-picker-indicator]:opacity-100"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full rounded-lg relative overflow-hidden bg-primary py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary-deep hover:shadow-lg group"
            >
              <span className="relative z-10">Confirm Booking via WhatsApp</span>
              <div className="absolute inset-0 h-full w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full" />
            </button>
            <p className="text-center text-xs text-muted-foreground mt-3">
              You will be redirected to WhatsApp to confirm your appointment.
            </p>
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookVisit;
