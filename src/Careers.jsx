import React, { useState } from 'react';

const ourValues = [
  {
    title: 'Compassion',
    description: 'We lead with empathy for pets and people.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-3.5 0-6-3-6-6V9a3 3 0 016 0v2m0 10c3.5 0 6-3 6-6V9a3 3 0 00-6 0v2" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
        <circle cx="9" cy="5" r="1.5" fill="currentColor" />
        <circle cx="15" cy="5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Trust',
    description: "We do what's right with full trust.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'Honesty and transparency in everything we do.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5L12 18l5.5-5.5c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l-3-3m0 0l-2 2 4 4 3-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l3-3m0 0l2 2-4 4-3-3" />
      </svg>
    ),
  },
  {
    title: 'Teamwork',
    description: 'We collaborate and support each other.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'We keep improving care every day.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6m-3-3v3m-5-6h10a2 2 0 002-2c0-3.5-2.5-6-5-7-1-4-5-4-6 0-2.5 1-5 3.5-5 7a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Ownership',
    description: 'We take pride in and own our impact.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21l7-14 3 6 4-8 3 16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9V3h4v3h-4" />
      </svg>
    ),
  },
];
const openPositions = [
  {
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    description: 'Create delightful experiences for pet parents across web and mobile platforms.',
    location: 'Bangalore, India',
    icon: (
      <svg className="w-8 h-8 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 16h4" />
      </svg>
    ),
  },
  {
    title: 'Frontend Developer',
    department: 'Engineering',
    type: 'Full-time',
    description: 'Build fast, responsive, and accessible features that power our platform.',
    location: 'Bangalore, India',
    icon: (
      <svg className="w-8 h-8 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 15l-2-2 2-2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 15l2-2-2-2" />
      </svg>
    ),
  },
  {
    title: 'Customer Support Specialist',
    department: 'Support',
    type: 'Full-time',
    description: 'Help pet parents and service partners with care and empathy.',
    location: 'Remote',
    icon: (
      <svg className="w-8 h-8 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 20c0-4 4-6 7-6s7 2 7 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 10a7 7 0 00-14 0v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h2v4H5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 12h2v4h-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 16c0 1-1 2-2 2h-1" />
      </svg>
    ),
  },
  {
    title: 'Content Writer',
    department: 'Marketing',
    type: 'Full-time',
    description: 'Craft helpful and engaging content for pet parents and our community.',
    location: 'Remote',
    icon: (
      <svg className="w-8 h-8 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 13H8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 17H8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: 'Product Manager',
    department: 'Product',
    type: 'Full-time',
    description: 'Drive product strategy and build solutions that pets and parents love.',
    location: 'Bangalore, India',
    icon: (
      <svg className="w-8 h-8 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l-3 1.5.5-3.5-2.5-2.5 3.5-.5L12 7l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22l-4-2v-4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22l4-2v-4.5" />
        <circle cx="12" cy="11" r="8" />
      </svg>
    ),
  },
];
export default function Careers() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Subscribed: ${email}`)
    setEmail('')
  }

  return (
    <div className="w-full">
      {/* 3rd HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24 bg-white text-left font-sans">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-1 space-y-8">
              <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-extrabold leading-[0.9] tracking-tight" style={{ fontFamily: 'var(--font-chewy, "Fredoka", "Nunito", "Comic Sans MS", sans-serif)' }}>
                <span className="text-[#333d45] block">Careers at</span>
                <span className="text-[#0eb493] block">mongo</span>
              </h1>
              
              <p className="text-[#4b5563] text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-[36rem] font-medium pt-4">
                We're building the future of pet care. Join a passionate team that's making a real difference in the lives of pets and their parents every day.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a 
                  href="#open-roles"
                  className="bg-[#0eb493] hover:bg-[#0c9d7f] text-white px-8 py-5 rounded-xl font-bold text-[18px] transition-colors text-center flex items-center justify-center gap-3"
                >
                  View Open Positions &rarr;
                </a>
                <button 
                  className="border-2 border-[#0eb493] text-[#0eb493] px-8 py-5 rounded-xl font-bold text-[18px] transition-colors bg-white hover:bg-[#f0fbf8]"
                >
                  Why Join Us
                </button>
              </div>

              {/* Avatars and text */}
              <div className="flex items-center gap-6 pt-8">
                <div className="flex -space-x-4">
                  <img src="https://i.pravatar.cc/100?img=47" alt="Team member" className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md z-30" />
                  <img src="https://i.pravatar.cc/100?img=11" alt="Team member" className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md z-20" />
                  <img src="https://i.pravatar.cc/100?img=33" alt="Team member" className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md z-10" />
                </div>
                <p className="text-[16px] text-gray-600 font-medium max-w-[260px] leading-relaxed">
                  Join a growing team of pet lovers and care champions.
                </p>
              </div>
            </div>

            {/* Right Side Image / Collage */}
            <div className="lg:col-span-1 relative flex justify-center lg:justify-end items-center mt-16 lg:mt-0">
              <div className="relative w-full max-w-[700px] lg:max-w-[1000px] flex justify-center lg:justify-end items-center">
                <img 
                  src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784540333/139a00583080b6183790af4da58027649572af45_ciycnu.png" 
                  className="w-full h-auto object-contain z-10 relative scale-110 lg:scale-[1.4] lg:translate-x-12"
                  alt="Mongo Pet Care Team Collage"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY YOU'LL LOVE WORKING HERE SECTION */}
      <section className="py-24 bg-white font-sans border-t border-gray-100 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-4xl lg:text-[42px] font-bold text-[#1e293b] text-center mb-16 tracking-tight">
            Why You’ll Love Working Here
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-12 lg:gap-y-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            
            {/* 1 */}
            <div className="flex flex-col items-center px-4 lg:px-6 pt-12 lg:pt-0">
              <div className="w-[90px] h-[90px] rounded-full bg-[#f0fbf8] flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Paw */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.05c-3.15 0-5-2.07-5-5.26 0-3.37 3.33-4.52 5-6.32 1.67 1.8 5 2.95 5 6.32 0 3.19-1.85 5.26-5 5.26z" />
                  <circle cx="8.5" cy="8.5" r="2.5" />
                  <circle cx="15.5" cy="8.5" r="2.5" />
                  <circle cx="12" cy="5" r="2.5" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 text-center tracking-wide">Work With Purpose</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed text-center max-w-[220px]">
                Make a positive impact on pets and pet parents every day.
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center px-4 lg:px-6 pt-12 lg:pt-0">
              <div className="w-[90px] h-[90px] rounded-full bg-[#f0fbf8] flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Heart */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 text-center tracking-wide">Pet-Friendly Culture</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed text-center max-w-[220px]">
                Bring your pet to work and enjoy a warm, welcoming environment.
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center px-4 lg:px-6 pt-12 lg:pt-0">
              <div className="w-[90px] h-[90px] rounded-full bg-[#f0fbf8] flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Leaves */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0a4 4 0 10-4-4h4v4zm0 0a4 4 0 104-4h-4v4z" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 text-center tracking-wide">Growth & Learning</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed text-center max-w-[220px]">
                Learn, grow, and build your career with continuous support.
              </p>
            </div>

            {/* 4 */}
            <div className="flex flex-col items-center px-4 lg:px-6 pt-12 lg:pt-0">
              <div className="w-[90px] h-[90px] rounded-full bg-[#f0fbf8] flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Calendar with clock */}
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
                  <circle cx="14" cy="16" r="3" fill="white" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 15v1l1 1" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 text-center tracking-wide">Flexible & Balanced</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed text-center max-w-[220px]">
                We value your time and support a healthy work-life balance.
              </p>
            </div>

            {/* 5 */}
            <div className="flex flex-col items-center px-4 lg:px-6 pt-12 lg:pt-0">
              <div className="w-[90px] h-[90px] rounded-full bg-[#f0fbf8] flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Shield with cross */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-3-3h6" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 text-center tracking-wide">Health & Wellness</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed text-center max-w-[220px]">
                Comprehensive health benefits for you and your family.
              </p>
            </div>

            {/* 6 */}
            <div className="flex flex-col items-center px-4 lg:px-6 pt-12 lg:pt-0 border-r-0">
              <div className="w-[90px] h-[90px] rounded-full bg-[#f0fbf8] flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#0eb493]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Team */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 text-center tracking-wide">Great Team</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed text-center max-w-[220px]">
                Collaborate with kind, passionate, and fun people.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OPEN POSITIONS SECTION */}
      <section id="open-roles" className="pt-24 pb-12 bg-white font-sans w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
            <h2 className="text-3xl lg:text-[42px] font-bold text-[#1e293b] tracking-tight mb-4 sm:mb-0">
              Open Positions
            </h2>
            <a href="#all-openings" className="text-[#0eb493] font-bold text-[16px] hover:text-[#0c9d7f] flex items-center transition-colors mb-2">
              View all openings <span className="ml-2">&rarr;</span>
            </a>
          </div>

          {/* List of Jobs */}
          <div className="flex flex-col gap-4">
            {openPositions.map((job, idx) => (
              <div 
                key={idx} 
                className="flex flex-col lg:flex-row lg:items-center p-6 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow duration-300"
              >
                {/* Left: Icon & Info */}
                <div className="flex items-start lg:items-center flex-1">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-[#f0fbf8] flex-shrink-0 flex items-center justify-center">
                    {job.icon}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-[19px] font-bold text-gray-900">{job.title}</h3>
                    <div className="text-[15px] font-medium text-gray-500 mt-1 flex items-center">
                      <span>{job.department}</span>
                      <span className="mx-2 text-gray-300">&bull;</span>
                      <span>{job.type}</span>
                    </div>
                    <p className="text-[14.5px] text-gray-500 mt-2 max-w-[600px] leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>

                {/* Right: Badge, Location, Button */}
                <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 lg:ml-8">
                  {/* Badge */}
                  <div className="bg-[#f0fbf8] text-[#0eb493] font-bold text-[13px] px-4 py-1.5 rounded-full">
                    {job.type}
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center text-gray-500 text-[14.5px] font-medium min-w-[140px]">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>

                  {/* Apply Button */}
                  <button className="bg-[#0eb493] hover:bg-[#0c9d7f] text-white px-6 py-3 rounded-lg font-bold text-[15px] transition-colors flex items-center justify-center min-w-[140px]">
                    Apply Now <span className="ml-2">&rarr;</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VALUES SECTION */}
      <section className="pt-12 pb-24 bg-white font-sans w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-[#f4f9f7] rounded-[40px] p-8 lg:p-12 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Left: Our Mission */}
            <div className="lg:w-1/3 flex flex-col relative pb-10 lg:pb-0 z-10">
              <h2 className="text-3xl lg:text-[40px] font-bold text-[#1e293b] tracking-tight mb-6 mt-4">
                Our Mission
              </h2>
              <p className="text-[16px] text-gray-600 leading-relaxed max-w-[280px]">
                To make quality pet care simple, reliable, and accessible for every pet parent.
              </p>
              
              <div className="mt-8 relative flex-1 flex items-end justify-center lg:justify-start">
                {/* Scribble */}
                <svg className="absolute top-0 left-0 lg:left-4 w-12 h-12 text-[#0eb493] opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M30 40C30 20 50 20 50 40C50 20 70 20 70 40C70 60 50 80 50 80C50 80 30 60 30 40Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M70 40 C80 30, 90 50, 80 60 C75 65, 60 55, 55 50" />
                </svg>
                <img 
                  src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784566393/4d309321-b954-46c2-9bca-161b251af72c.png" 
                  alt="Golden retriever and tabby cat"
                  className="relative z-10 w-full max-w-[500px] object-contain object-bottom origin-bottom-left mix-blend-multiply pt-12 lg:scale-125 transform"
                />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-[1px] bg-gray-200 mx-8 lg:mx-12 mt-4 mb-4 z-10"></div>
            {/* Horizontal Divider for mobile */}
            <div className="block lg:hidden h-[1px] bg-gray-200 my-8 w-full z-10"></div>

            {/* Right: Our Values */}
            <div className="lg:w-2/3 flex flex-col z-10">
              <h2 className="text-3xl lg:text-[40px] font-bold text-[#1e293b] tracking-tight mb-8 mt-4 lg:pl-8">
                Our Values
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {ourValues.map((val, idx) => {
                  const isBottomRow = idx >= 3;
                  const isLastColumn = (idx + 1) % 3 === 0;
                  
                  return (
                    <div 
                      key={idx} 
                      className={`flex flex-col items-center text-center p-6 lg:p-8
                        ${!isBottomRow ? 'lg:border-b border-gray-200' : ''}
                        ${!isLastColumn ? 'lg:border-r border-gray-200' : ''}
                        ${idx < 4 ? 'sm:max-lg:border-b border-gray-200' : ''}
                        ${idx % 2 === 0 ? 'sm:max-lg:border-r border-gray-200' : ''}
                        ${idx !== 5 ? 'max-sm:border-b border-gray-200' : ''}
                      `}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#e7f5f2] text-[#0eb493] flex items-center justify-center mb-5">
                        {val.icon}
                      </div>
                      <h3 className="text-[17px] font-bold text-gray-900 mb-2">{val.title}</h3>
                      <p className="text-[14px] text-gray-500 leading-relaxed max-w-[200px]">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-white pt-16 pb-8 mt-auto font-jakarta" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 text-left">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-4 flex flex-col items-start pr-8">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784019754/a44962e9-259e-4885-a21c-31063e437a8a.png" alt="Mongo Logo" className="w-9 h-9 object-contain" />
                <span className="text-[28px] font-bold text-[#102E39]">Mongo</span>
              </div>
              <p className="text-[#6B7B85] text-[16px] leading-[1.6] mb-8">
                Better care. Happier pets.<br />Stronger bond.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#F5F7F9] flex items-center justify-center text-[#6B7B85] font-bold hover:bg-[#51D0B3] hover:text-white transition-colors text-[16px]">f</a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#F5F7F9] flex items-center justify-center text-[#6B7B85] font-bold hover:bg-[#51D0B3] hover:text-white transition-colors text-[16px]">t</a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#F5F7F9] flex items-center justify-center text-[#6B7B85] font-bold hover:bg-[#51D0B3] hover:text-white transition-colors text-[16px]">i</a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-[#102E39] font-bold text-[18px] mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="/" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">Home</a></li>
                <li><a href="#" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">Services</a></li>
                <li><a href="#" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">How It Works</a></li>
                <li><a href="#" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">Reviews</a></li>
                <li><a href="/blog.html" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="lg:col-span-3">
              <h4 className="text-[#102E39] font-bold text-[18px] mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="/about.html" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">About Us</a></li>
                <li><a href="/careers.html" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">Careers</a></li>
                <li><a href="#" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">Partners</a></li>
                <li><a href="#" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-[#6B7B85] text-[16px] hover:text-[#51D0B3] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="lg:col-span-3 flex flex-col items-start">
              <h4 className="text-[#102E39] font-bold text-[18px] mb-6">Stay in the loop</h4>
              <p className="text-[#6B7B85] text-[16px] leading-[1.6] mb-6 -mt-2">
                Get pet care tips, offers and updates<br className="hidden lg:block" />straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-[#F8F9FA] h-[56px] rounded-xl px-5 text-[16px] text-[#102E39] w-full focus:outline-none placeholder-[#9BA5AD]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                />
                <button
                  type="submit"
                  className="bg-[#51D0B3] hover:bg-[#42C2A3] h-[56px] text-white font-bold rounded-xl w-full transition-colors text-[16px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Copyright Text */}
          <div className="border-t border-dashed border-[#E5E9EB] pt-8 mt-14 text-left">
            <p className="text-[14px] font-semibold text-[#9BA5AD] tracking-[0.5px]">
              © 2025 PAWMATE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
