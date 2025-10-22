import { Link } from "react-router-dom";
import { useState } from "react";
import { sendWaitlistEmail } from '../utils/emailService';

export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      console.log('Form submitted with data:', formData);
      
      // Send real email using EmailJS
      const result = await sendWaitlistEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: ''
        });
      } else {
        setSubmitStatus('error');
      }
      
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/unsplash-image-UF_wwDxI6uk.png')"
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Scrolling Marquee */}
        <div className="relative z-10 py-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-[#F2C94C] text-lg uppercase tracking-wider font-black">
              SOMETHING ALIEN. BUILT FOR BRANDS. POWERED BY SOMETHING ALIEN. BUILT FOR BRANDS. POWERED BY SOMETHING ALIEN. BUILT FOR BRANDS. POWERED BY SOMETHING ALIEN. BUILT FOR BRANDS.
            </span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          {/* Bubble Structure - positioned to overlay the title */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <img 
              src="/1.png" 
              alt="Abstract bubble structure" 
              className="w-[800px] h-[600px] object-contain opacity-85"
              style={{
                transform: 'translateY(-60px) translateX(180px)'
              }}
            />
          </div>

          {/* Main Title */}
          <h1 className="relative z-20 text-8xl md:text-9xl font-black mb-8 leading-none" 
              style={{
                letterSpacing: '-0.02em'
              }}>
            <span style={{ color: '#2C6566', fontWeight: '900' }}>Q</span><span style={{ color: '#1F3440', fontWeight: '900' }}>ALIEN AI</span>
          </h1>

          {/* Descriptive Text */}
          <p className="relative z-20 text-[#F2C94C] text-xl md:text-2xl uppercase tracking-wider max-w-4xl mx-auto leading-relaxed mb-24 mt-8">
            A BRAND EXPERIENCE PLATFORM THAT ACCELERATES MODERN MARKETING TEAMS' ABILITY TO REVIEW AND APPROVE CREATIVE
          </p>

          {/* Call to Action Button */}
          <div className="relative z-20 mt-16">
            <button 
              onClick={() => {
                document.getElementById('waitlist')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="border border-[#38E28A] text-white px-8 py-4 text-lg hover:bg-[#38E28A] hover:text-[#0E1B2B] transition-all duration-300"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-b from-green-300 to-green-500 min-h-screen px-8 overflow-hidden flex flex-col justify-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative z-10 mb-16">
          {/* Top Left Section */}
          <div className="relative z-20 flex justify-start">
            <div className="max-w-sm">
              <h3 className="text-4xl font-bold mb-6 text-[#1F3440] text-left font-syne">
                CREATIVE REVIEW IN MINUTES, NOT DAYS
              </h3>
              <p className="text-[#0E1B2B] text-lg leading-relaxed text-left font-montserrat">
                QAlien leverages AI visioning technology to cut creative review time from days to minutes, all while ensuring each asset is compliant across visual, verbal and legal standards.
              </p>
            </div>
          </div>

          {/* Top Right Section */}
          <div className="relative z-20 flex justify-end">
            <div className="max-w-sm">
              <h3 className="text-4xl font-bold mb-6 text-[#1F3440] text-right font-syne">
                LIGHTWEIGHT, BUILT TO WIN
              </h3>
              <p className="text-[#0E1B2B] text-lg leading-relaxed text-right font-montserrat">
                Unlike other platforms, QAlien is lightweight and focused. We enable marketing teams to launch faster, stay consistent, and win across platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-4xl mx-auto relative z-20 flex justify-start">
          <div className="max-w-sm">
            <h3 className="text-4xl font-bold mb-6 text-left text-[#1F3440] font-syne">
              ANY FORMAT, ALWAYS IN CONTROL
            </h3>
            <p className="text-[#0E1B2B] text-lg leading-relaxed text-left font-montserrat">
              From logos, colors, and layout to tone, claims, and brand voice, QAlien ensures every asset aligns with your brand guidelines and creative briefs — especially across UGC, creator content, and AI-generated campaigns.
            </p>
          </div>
        </div>

        {/* Left Bubble Structure */}
        <div className="absolute bottom-0 left-0 pointer-events-none opacity-75">
          <img 
            src="/3.png" 
            alt="Abstract bubble structure" 
            className="w-[700px] h-[600px] object-contain"
            style={{
              transform: 'translateX(-150px) translateY(50px)'
            }}
          />
        </div>

        {/* Right Bubble Structure */}
        <div className="absolute top-0 right-0 pointer-events-none opacity-75">
          <img 
            src="/4.png" 
            alt="Abstract bubble structure" 
            className="w-[500px] h-[500px] object-contain"
            style={{
              transform: 'translateX(100px) translateY(-100px)'
            }}
          />
        </div>

        {/* Page Indicator */}
        <div className="absolute bottom-8 right-8 text-[#0E1B2B] z-20">
          <div className="w-8 h-8 border-2 border-[#0E1B2B] rounded-full flex items-center justify-center">
            <span className="text-xs font-bold">II</span>
          </div>
        </div>
      </section>
      <section id="waitlist" className="relative bg-[#F2C94C] text-[#0E1B2B] py-24 px-8 min-h-screen overflow-hidden">
        {/* Bottom teal line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#38E28A]"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left side - Title and Bubble */}
          <div className="relative">
            <div className="space-y-4">
              <h2 className="text-6xl font-black text-[#0E1B2B] leading-none">JOIN</h2>
              <h2 className="text-6xl font-black text-[#0E1B2B] leading-none">OUR</h2>
              <h2 className="text-6xl font-black text-[#0E1B2B] leading-none">WAITLIST</h2>
            </div>
            
            {/* Bubble Structure */}
            <div className="absolute top-0 left-0 pointer-events-none opacity-80" style={{ transform: 'translateY(200px)' }}>
              <img 
                src="/2.png" 
                alt="Abstract bubble structure" 
                className="w-[400px] h-[400px] object-contain"
              />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="relative z-20">
            <form onSubmit={handleSubmit} className="space-y-8 max-w-md">
              {/* Name Fields */}
              <div>
                <label className="block text-lg font-medium mb-2 text-[#0E1B2B]">Name (required)</label>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name" 
                    required
                    className="w-full border-b-2 border-[#0E1B2B] bg-transparent py-2 focus:outline-none focus:border-[#0E1B2B] text-[#0E1B2B] placeholder:text-gray-400" 
                  />
                  <input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name" 
                    required
                    className="w-full border-b-2 border-[#0E1B2B] bg-transparent py-2 focus:outline-none focus:border-[#0E1B2B] text-[#0E1B2B] placeholder:text-gray-400" 
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-lg font-medium mb-2 text-[#0E1B2B]">Email (required)</label>
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email" 
                  required
                  className="w-full border-b-2 border-[#0E1B2B] bg-transparent py-2 focus:outline-none focus:border-[#0E1B2B] text-[#0E1B2B] placeholder:text-gray-400" 
                />
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-lg font-medium mb-2 text-[#0E1B2B]">Company (required)</label>
                <input 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company" 
                  required
                  className="w-full border-b-2 border-[#0E1B2B] bg-transparent py-2 focus:outline-none focus:border-[#0E1B2B] text-[#0E1B2B] placeholder:text-gray-400" 
                />
              </div>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm">
                  ✓ Thank you! Your information has been successfully submitted to our waitlist.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm">
                  ✗ Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="border-2 border-[#38E28A] text-[#38E28A] px-8 py-4 text-lg hover:bg-[#38E28A] hover:text-[#F2C94C] transition-all duration-300 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Reserve My Spot'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}