import { useState } from "react";
import { toast } from "sonner";
import { Copy, Phone, Mail, MessageCircle, Instagram, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageOut = `Hello Sai Naveen Lands, I have an enquiry regarding your services.

Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(messageOut);
    const waUrl = `https://wa.me/919490908639?text=${encodedMessage}`;

    toast.success("Opening WhatsApp...");
    window.open(waUrl, "_blank");

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-background pt-12 pb-8 px-6 md:px-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="animate-fade-rise mx-auto max-w-3xl">

            <h2 className="font-serif text-4xl text-foreground sm:text-5xl md:text-6xl drop-shadow-sm">
              Contact Us
            </h2>
            <p className="animate-fade-rise-delay mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Reach out to Sai Naveen Lands for your next land investment. We look forward to connecting with you.
            </p>

            {/* Decorative divider */}
            <div className="animate-fade-rise-delay mx-auto mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-border" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#C9A24D]" />
              <div className="h-px w-16 bg-border" />
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {/* Card: Phone */}
          <div className="group animate-fade-rise-delay flex flex-col rounded-2xl bg-card border border-neutral-200/60 p-6 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone size={18} />
              </div>
              <h3 className="font-serif text-xl text-foreground">Phone</h3>
            </div>
            <div className="space-y-3 mt-auto">
              <div className="flex items-center justify-between group/item">
                <a href="tel:+919490908639" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                  +91 9490908639
                </a>
                <button aria-label="Copy phone number" onClick={() => handleCopy("+919490908639", "Phone number")} className="text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity hover:text-foreground">
                  <Copy size={14} />
                </button>
              </div>
              <div className="flex items-center justify-between group/item">
                <a href="tel:+919347308493" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                  +91 9347308493
                </a>
                <button aria-label="Copy phone number" onClick={() => handleCopy("+919347308493", "Phone number")} className="text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity hover:text-foreground">
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card: Email */}
          <div className="group animate-fade-rise-delay flex flex-col rounded-2xl bg-card border border-neutral-200/60 p-6 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail size={18} />
              </div>
              <h3 className="font-serif text-xl text-foreground">Email</h3>
            </div>
            <div className="mt-auto">
              <div className="flex items-center justify-between group/item">
                <a href="mailto:sainaveenlands@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:underline truncate overflow-hidden text-ellipsis whitespace-nowrap">
                  sainaveenlands@gmail.com
                </a>
                <button aria-label="Copy email address" onClick={() => handleCopy("sainaveenlands@gmail.com", "Email")} className="text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity hover:text-foreground ml-2 shrink-0">
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card: WhatsApp */}
          <div className="group animate-fade-rise-delay flex flex-col rounded-2xl bg-card border border-neutral-200/60 p-6 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle size={18} />
              </div>
              <h3 className="font-serif text-xl text-foreground">WhatsApp</h3>
            </div>
            <div className="mt-auto">
              <a href="https://wa.me/919490908639" target="_blank" rel="noreferrer" onClick={() => toast.success("Opening WhatsApp...")} className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#25D366] transition-colors font-medium">
                Message +91 9490908639
              </a>
            </div>
          </div>

          {/* Card: Instagram */}
          <div className="group animate-fade-rise-delay-2 flex flex-col rounded-2xl bg-card border border-neutral-200/60 p-6 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E1306C]/10 text-[#E1306C]">
                <Instagram size={18} />
              </div>
              <h3 className="font-serif text-xl text-foreground">Instagram</h3>
            </div>
            <div className="mt-auto flex items-center justify-between group/item">
              <a href="https://www.instagram.com/sai_naveen_lands/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#E1306C] transition-colors hover:underline truncate">
                @sainaveenlands
              </a>
              <button aria-label="Copy Instagram handle" onClick={() => handleCopy("@sainaveenlands", "Instagram handle")} className="text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity hover:text-foreground shrink-0 ml-2">
                <Copy size={14} />
              </button>
            </div>
          </div>

          {/* Card: Location */}
          <div className="group lg:col-span-2 animate-fade-rise-delay-2 flex flex-col rounded-2xl bg-card border border-neutral-200/60 p-6 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin size={18} />
              </div>
              <h3 className="font-serif text-xl text-foreground">Headquarters</h3>
            </div>
            <div className="mt-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="text-muted-foreground leading-relaxed">
                  G. Madugula, Lambasingi, Paderu, Hukumpeta<br />
                  Andhra Pradesh, India
                </div>
                <a href="https://www.google.com/maps/search/Sai+Naveen+Lands" target="_blank" rel="noreferrer" onClick={() => toast.success("Opening Maps...")} className="inline-block shrink-0 rounded-lg border border-border py-2 px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted text-center">
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* WhatsApp Enquiry Form Container */}
        <div className="animate-fade-rise-delay-2 max-w-2xl mx-auto rounded-3xl bg-card/50 backdrop-blur-xl border border-neutral-200/60 p-8 shadow-xl relative overflow-hidden">
          {/* Subtle Decorative Flow inside form */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-[40px] pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <h3 className="font-serif text-3xl text-foreground">Drop an Enquiry</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Send us a direct WhatsApp message and our team will get back to you immediately.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Ramesh Naidu"
                className="w-full rounded-lg border border-border bg-background py-3 px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-foreground ml-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="+91 90000 00000"
                className="w-full rounded-lg border border-border bg-background py-3 px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                placeholder="I am looking for a property in..."
                className="w-full rounded-lg border border-border bg-background py-3 px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg relative overflow-hidden bg-[#25D366] py-3.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-[#128C7E] hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              <MessageCircle size={18} />
              <span className="relative z-10">Send via WhatsApp</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
