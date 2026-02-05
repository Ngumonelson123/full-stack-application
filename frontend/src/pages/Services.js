import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Badge } from '../components/ui';
import { Eye, Glasses, Settings, Users, Award, Clock, CheckCircle, Heart, Calendar } from 'lucide-react';

const ServiceIcon = ({ type, className = "w-6 h-6 text-white" }) => {
  const iconMap = {
    eye: <Eye className={className} />,
    glasses: <Glasses className={className} />,
    settings: <Settings className={className} />,
    users: <Users className={className} />,
    heart: <Heart className={className} />,
    award: <Award className={className} />,
    clock: <Clock className={className} />,
    check: <CheckCircle className={className} />,
  };
  return iconMap[type] || null;
};

const Services = () => {
  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-100 to-dark-200 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-800 mb-6">
              Comprehensive <span className="gradient-text">Eye Care</span> Services
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              From routine eye exams to specialized treatments, we provide complete optical care 
              using the latest technology and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-dark-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                hover 
                padding="lg" 
                className="group bg-dark-100 border-dark-300 hover:border-primary-500 transition-all duration-300 h-full flex flex-col"
              >
                <div className="mb-4">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <ServiceIcon type={service.icon} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-800 group-hover:text-primary-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-primary-600 font-medium">{service.price}</p>
                    </div>
                  </div>
                </div>

                <p className="text-dark-700 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-dark-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link to="/appointments">
                    <Button 
                      className="w-full"
                      icon={<Calendar className="w-4 h-4" />}
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-dark-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-800 mb-4">
              Why Choose Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized care to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} padding="lg" className="text-center bg-dark-200 border-dark-300 group hover:border-primary-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ServiceIcon type={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed">{benefit.description}</p>
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
              Ready to Improve Your Vision?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and experience the difference professional eye care can make.
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
              
              <a href={`tel:${process.env.REACT_APP_PHONE_NUMBER || '+254719530732'}`}>
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
                  Call: {process.env.REACT_APP_PHONE_NUMBER || '0719 530 732'}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Comprehensive Eye Exams",
    price: "From KSh 2,500",
    description: "Complete eye health assessment using advanced diagnostic equipment to detect vision problems and eye diseases early.",
    image: 'https://images.unsplash.com/photo-1574068468668-a05a11f871da?auto=format&fit=crop&w=1200&q=80',
    icon: "eye",
    features: [
      "Digital retinal imaging",
      "Visual field testing",
      "Prescription assessment",
      "Eye health screening",
      "Glaucoma testing"
    ]
  },
  {
    title: "Prescription Glasses",
    price: "From KSh 3,500",
    description: "Wide selection of high-quality frames and lenses from top brands, customized to your prescription and lifestyle needs.",
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=1200&q=80',
    icon: "glasses",
    features: [
      "Single vision lenses",
      "Progressive lenses",
      "Blue light filtering",
      "Anti-reflective coating",
      "Designer frames available"
    ]
  },
  {
    title: "Contact Lenses",
    price: "From KSh 1,800",
    description: "Professional contact lens fitting and comprehensive selection of daily, weekly, and monthly contact lenses for all vision needs.",
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    icon: "settings",
    features: [
      "Daily disposable lenses",
      "Monthly contact lenses",
      "Toric lenses for astigmatism",
      "Multifocal contact lenses",
      "Professional fitting service"
    ]
  },
  {
    title: "Pediatric Eye Care",
    price: "From KSh 2,000",
    description: "Specialized eye care for children including vision screening, lazy eye treatment, and child-friendly eye exams.",
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    icon: "heart",
    features: [
      "Child-friendly examinations",
      "Vision development assessment",
      "Lazy eye treatment",
      "Pediatric frames available",
      "Early intervention programs"
    ]
  },
  {
    title: "Low Vision Services",
    price: "From KSh 3,000",
    description: "Specialized care and assistive devices for patients with low vision to maximize remaining sight and independence.",
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=1200&q=80',
    icon: "users",
    features: [
      "Low vision assessment",
      "Magnification devices",
      "Adaptive techniques training",
      "Assistive technology",
      "Rehabilitation support"
    ]
  },
  {
    title: "Dry Eye Treatment",
    price: "From KSh 1,500",
    description: "Comprehensive evaluation and treatment of dry eye syndrome using advanced diagnostic tools and therapies.",
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    icon: "check",
    features: [
      "Tear film analysis",
      "Meibomian gland evaluation",
      "Prescription eye drops",
      "Lifestyle recommendations",
      "Follow-up care included"
    ]
  }
];

const benefits = [
  {
    title: "Expert Care",
    description: "Licensed optometrists with years of experience in comprehensive eye care and vision correction.",
    icon: "award"
  },
  {
    title: "Latest Technology",
    description: "State-of-the-art diagnostic equipment for accurate assessments and early disease detection.",
    icon: "settings"
  },
  {
    title: "Quick Service",
    description: "Efficient appointment scheduling and minimal wait times for your convenience.",
    icon: "clock"
  },
  {
    title: "Personalized Approach",
    description: "Customized treatment plans tailored to your specific vision needs and lifestyle requirements.",
    icon: "users"
  }
];

export default Services;