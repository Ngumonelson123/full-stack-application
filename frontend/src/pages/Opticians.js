import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Badge } from '../components/ui';
import { Star, Award, Briefcase, Calendar } from 'lucide-react';

const Opticians = () => {
  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-100 to-dark-200 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Our Team
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-800 mb-6">
              Meet Our Expert <span className="gradient-text">Opticians</span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Our team of certified opticians brings years of experience and specialized expertise 
              to provide you with the best eye care possible.
            </p>
          </div>
        </div>
      </section>

      {/* Opticians Grid */}
      <section className="py-16 bg-dark-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opticians.map((optician, index) => (
              <Card 
                key={index} 
                hover 
                padding="lg" 
                className="group bg-dark-100 border-dark-300 hover:border-primary-500 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-dark-800 group-hover:text-primary-600 transition-colors duration-300">
                    {optician.name}
                  </h3>
                  <Badge className="bg-green-600 text-white text-xs">
                    {optician.experience}+ years
                  </Badge>
                </div>
                
                <p className="text-primary-600 font-semibold mb-3">{optician.specialty}</p>
                <p className="text-dark-600 text-sm mb-6 leading-relaxed">{optician.bio}</p>
                
                <div className="space-y-3 mb-6">
                  {optician.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark-600 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/appointments">
                  <Button 
                    className="w-full"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    }
                  >
                    Book with {optician.name.split(' ')[0]}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-dark-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-800 mb-4">
              Expert Care in Every <span className="gradient-text">Specialty</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Each of our opticians brings unique expertise to ensure you receive specialized care 
              tailored to your specific vision needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} padding="lg" className="text-center bg-dark-200 border-dark-300 group hover:border-primary-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {specialty.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed">{specialty.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Ready to Meet Our Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and experience personalized eye care from our expert opticians.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/appointments">
                <Button 
                  size="lg" 
                  className="bg-white text-primary-700 hover:bg-primary-50"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  }
                >
                  Book Appointment
                </Button>
              </Link>
              
              <a href="tel:+254719530732">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary-800"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                >
                  Call: 0719 530 732
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const opticians = [
  {
    name: "Dr. Sarah Kimani",
    specialty: "Senior Optometrist",
    experience: "12",
    bio: "Specializes in comprehensive eye exams, contact lens fitting, and pediatric eye care. Passionate about early detection of eye diseases.",
    skills: ["Pediatric Eye Care", "Contact Lens Fitting", "Glaucoma Screening"]
  },
  {
    name: "Dr. James Mwangi",
    specialty: "Clinical Optometrist", 
    experience: "8",
    bio: "Expert in advanced diagnostic techniques and treatment of complex vision problems. Focuses on precision and patient comfort.",
    skills: ["Advanced Diagnostics", "Vision Therapy", "Low Vision Aids"]
  },
  {
    name: "Dr. Grace Wanjiku",
    specialty: "Dispensing Optician",
    experience: "10",
    bio: "Specializes in frame selection and lens customization. Helps patients find the perfect eyewear for their lifestyle and needs.",
    skills: ["Frame Styling", "Lens Technology", "Fashion Eyewear"]
  },
  {
    name: "Dr. Peter Ochieng",
    specialty: "Therapeutic Optometrist",
    experience: "15",
    bio: "Focuses on treatment and management of eye diseases. Experienced in pre and post-operative care for eye surgeries.",
    skills: ["Disease Management", "Surgical Care", "Therapeutic Treatment"]
  },
  {
    name: "Dr. Mary Akinyi",
    specialty: "Sports Vision Specialist",
    experience: "6",
    bio: "Specializes in sports vision enhancement and protective eyewear. Helps athletes optimize their visual performance.",
    skills: ["Sports Vision", "Protective Eyewear", "Performance Enhancement"]
  },
  {
    name: "Dr. David Kiprop",
    specialty: "Geriatric Optometrist",
    experience: "14",
    bio: "Expert in age-related vision problems and low vision rehabilitation. Dedicated to helping seniors maintain their independence.",
    skills: ["Age-related Care", "Low Vision Rehab", "Mobility Training"]
  }
];

const specialties = [
  {
    title: "Comprehensive Exams",
    description: "Complete eye health assessments using latest technology",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Pediatric Care",
    description: "Specialized eye care for children and adolescents",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Contact Lenses",
    description: "Expert fitting and care for all types of contact lenses",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: "Disease Management",
    description: "Treatment and monitoring of eye diseases and conditions",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default Opticians;