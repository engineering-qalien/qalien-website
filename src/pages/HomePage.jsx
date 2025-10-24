import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { sendWaitlistEmail } from '../utils/emailService';
import setAnchors from '../utils/mobileAnchors';

export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  });

  // Set mobile anchors for section 2 positioning
  useEffect(() => {
    setAnchors();
  }, []);
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
        <div className="relative z-10 py-2 sm:py-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-[#F2C94C] text-sm sm:text-lg uppercase tracking-wider font-black">
              SOMETHING ALIEN. BUILT FOR BRANDS. POWERED BY SOMETHING ALIEN. BUILT FOR BRANDS. POWERED BY SOMETHING ALIEN. BUILT FOR BRANDS. POWERED BY SOMETHING ALIEN. BUILT FOR BRANDS.
            </span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          {/* Bubble Structure - positioned to overlay the title */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <img 
              src="/1.png" 
              alt="Abstract bubble structure" 
              className="w-[300px] h-[225px] sm:w-[600px] sm:h-[450px] md:w-[900px] md:h-[675px] object-contain opacity-85 hero-bubble"
            />
          </div>

          {/* Main Title */}
          <h1 className="relative z-20 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-8 leading-none" 
              style={{
                letterSpacing: '-0.02em'
              }}>
            <span style={{ color: '#2C6566', fontWeight: '900' }}>Q</span><span style={{ color: '#1F3440', fontWeight: '900' }}>ALIEN AI</span>
          </h1>

          {/* Descriptive Text */}
          <p className="relative z-20 text-[#F2C94C] text-base sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-wider max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-24 mt-4 sm:mt-8 px-4 font-bold">
            A BRAND EXPERIENCE PLATFORM THAT ACCELERATES MODERN MARKETING TEAMS' ABILITY TO REVIEW AND APPROVE CREATIVE
          </p>

          {/* Call to Action Button */}
          <div className="relative z-20 mt-8 sm:mt-16">
            <button 
              onClick={() => {
                document.getElementById('waitlist')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="border border-[#38E28A] text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg hover:bg-[#38E28A] hover:text-[#0E1B2B] transition-all duration-300"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
      <section id="section-2" className="relative bg-gradient-to-b from-green-300 to-green-500 min-h-screen px-4 sm:px-8 overflow-visible flex flex-col justify-center py-12 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 sm:gap-20 md:gap-28 relative z-10 mb-24 sm:mb-28">
          {/* Top Left Section */}
          <div id="creative-review" className="relative z-20 flex justify-start">
            <div className="max-w-sm">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#1F3440] text-left font-syne">
                CREATIVE REVIEW IN MINUTES, NOT DAYS
              </h3>
              <p className="text-[#0E1B2B] text-base sm:text-lg leading-relaxed text-left font-montserrat">
                QAlien leverages AI visioning technology to cut creative review time from days to minutes, all while ensuring each asset is compliant across visual, verbal and legal standards.
              </p>
            </div>
          </div>

          {/* Top Right Section */}
          <div id="lightweight" className="relative z-20 flex justify-start md:justify-end mt-24">
            <div className="max-w-sm">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#1F3440] text-left md:text-right font-syne">
                LIGHTWEIGHT, BUILT TO WIN
              </h3>
              <p className="text-[#0E1B2B] text-base sm:text-lg leading-relaxed text-left md:text-right font-montserrat">
                Unlike other platforms, QAlien is lightweight and focused. We enable marketing teams to launch faster, stay consistent, and win across platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div id="any-format" className="max-w-4xl mx-auto relative z-20 flex justify-start mt-4 sm:mt-8" style={{ transform: 'translateX(0px)' }}>
          <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h3 id="any-format-heading" className="heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-left text-[#1F3440] font-syne">
              ANY FORMAT, ALWAYS IN CONTROL
            </h3>
            <p id="any-format-body" className="body text-[#0E1B2B] text-base sm:text-lg leading-relaxed text-left font-montserrat">
              From logos, colors, and layout to tone, claims, and brand voice, QAlien ensures every asset aligns with your brand guidelines and creative briefs — especially across UGC, creator content, and AI-generated campaigns.
            </p>
          </div>
        </div>

        {/* Left Bubble Structure */}
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <img 
            src="/3.png" 
            alt="Abstract bubble structure" 
            className="w-[200px] h-[150px] sm:w-[500px] sm:h-[450px] md:w-[700px] md:h-[600px] object-contain section2-left-bubble decal-large"
          />
        </div>

        {/* Right Bubble Structure */}
        <div className="absolute top-0 right-0 pointer-events-none">
          <img 
            src="/4.png" 
            alt="Abstract bubble structure" 
            className="w-[80px] h-[80px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] object-contain section2-right-bubble decal-small"
          />
        </div>

        {/* Page Indicator */}
        <div className="absolute bottom-8 right-8 text-[#0E1B2B] z-20">
          <div className="w-8 h-8 border-2 border-[#0E1B2B] rounded-full flex items-center justify-center">
            <span className="text-xs font-bold">II</span>
          </div>
        </div>
      </section>
      <section id="waitlist" className="relative bg-[#F2C94C] text-[#0E1B2B] py-12 sm:py-24 px-4 sm:px-8 min-h-screen overflow-hidden">
        {/* Bottom teal line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#38E28A]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center relative z-10">
          {/* Left side - Title and Bubble */}
          <div className="relative order-1">
            <div className="space-y-2 sm:space-y-4 waitlist-text" style={{ transform: 'translateY(-40px)' }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0E1B2B] leading-none">JOIN</h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0E1B2B] leading-none">OUR</h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0E1B2B] leading-none">WAITLIST</h2>
            </div>
            
            {/* Bubble Structure */}
            <div className="absolute top-0 left-0 pointer-events-none opacity-80">
              <img 
                src="/2.png" 
                alt="Abstract bubble structure" 
                className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-contain waitlist-bubble"
              />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="relative z-20 order-2">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 max-w-md waitlist-form">
              {/* Name Fields */}
              <div>
                <label className="block text-base sm:text-lg font-medium mb-2 text-[#0E1B2B]">Name (required)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name" 
                    required
                    className="w-full border-b-2 border-[#0E1B2B] bg-transparent py-2 focus:outline-none focus:border-[#0E1B2B] text-[#0E1B2B] placeholder:text-gray-400 text-base" 
                  />
                  <input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name" 
                    required
                    className="w-full border-b-2 border-[#0E1B2B] bg-transparent py-2 focus:outline-none focus:border-[#0E1B2B] text-[#0E1B2B] placeholder:text-gray-400 text-base" 
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-base sm:text-lg font-medium mb-2 text-[#0E1B2B]">Email (required)</label>
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email" 
                  required
                  className="w-full border-b-2 border-[#0E1B2B] bg-transparent py-2 focus:outline-none focus:border-[#0E1B2B] text-[#0E1B2B] placeholder:text-gray-400 text-base" 
                />
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-base sm:text-lg font-medium mb-2 text-[#0E1B2B]">Company (required)</label>
                <input 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company" 
                  required
                  className="w-full border-b-2 border-[#0E1B2B] bg-transparent py-2 focus:outline-none focus:border-[#0E1B2B] text-[#0E1B2B] placeholder:text-gray-400 text-base" 
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
                  className="w-full sm:w-auto border-2 border-[#38E28A] text-[#38E28A] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg hover:bg-[#38E28A] hover:text-[#F2C94C] transition-all duration-300 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
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