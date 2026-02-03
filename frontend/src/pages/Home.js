import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Card, Badge } from '../components/ui';
import { Calendar, ArrowRight, Phone, Check, MapPin, Clock } from 'lucide-react';

const Home = () => {
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page bg-dark-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video - Eye Clinic Related */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/vimeo/459761943/eye-exam-45976.mp4?width=1280&hash=b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8" type="video/mp4" />
          </video>
          {/* Fallback background image - Eye clinic */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
            }}
          ></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-primary-300 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-20 w-2 h-2 bg-primary-500 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-primary-200 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="animate-fade-in">
              <Badge variant="primary" size="lg" className="mb-6 bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                ✨ Premium Eye Care in Eldoret
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight text-shadow-lg">
                <span className="block animate-slide-up">Fovea Optical</span>
                <span className="block text-primary-300 text-3xl sm:text-4xl lg:text-5xl font-light mt-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Bringing Vision to Life
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed text-shadow animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Your premier destination for comprehensive eye care services and high-quality optical products. 
                Experience the difference with our expert optometrists and cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <Link to="/appointments">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-white text-primary-800 hover:bg-primary-50 shadow-2xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300"
                    icon={<Calendar className="w-5 h-5" />}
                  >
                    Book Appointment
                  </Button>
                </Link>
                
                <Link to="/services">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-800 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-dark-100" id="about" data-animate>
        <div className={`container-custom transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="primary" size="lg" className="mb-4">
                About Fovea Optical
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark-800 mb-6">
                Excellence in <span className="gradient-text">Eye Care</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Card padding="lg" className="bg-dark-200 border-dark-300">
                  <p className="text-lg text-dark-700 mb-4 leading-relaxed">
                    At <span className="font-bold text-primary-600">Fovea Optical Limited</span>, we are dedicated to enhancing your vision health. 
                    We specialize in prescription glasses, contact lenses, and advanced eye examinations.
                  </p>
                  <p className="text-lg text-dark-700 leading-relaxed">
                    Our mission is to deliver <span className="font-bold text-primary-600">cutting-edge, personalized optical care</span> for every individual.
                  </p>
                </Card>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-dark-200 rounded-xl border border-dark-300">
                    <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                    <div className="text-sm font-medium text-dark-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-dark-200 rounded-xl border border-dark-300">
                    <div className="text-3xl font-bold text-primary-600 mb-2">5K+</div>
                    <div className="text-sm font-medium text-dark-600">Happy Customers</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    hover 
                    padding="lg" 
                    className="text-center bg-dark-200 border-dark-300 group"
                  >
                    <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-12 h-12 rounded-md object-cover mx-auto"
                          />
                        </div>
                    <h3 className="text-lg font-bold text-dark-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-dark-600 text-sm leading-relaxed">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-dark-50" id="services" data-animate>
        <div className={`container-custom transition-all duration-1000 delay-200 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <Badge variant="primary" size="lg" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark-800 mb-4">
              Comprehensive <span className="gradient-text">Eye Care</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-8">
              We offer a complete range of eye care services to meet all your vision needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                hover 
                padding="lg" 
                className="group bg-dark-100 border-dark-300 hover:border-primary-500 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-800 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-dark-700 leading-relaxed mb-6">{service.description}</p>
                
                <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Card>
            ))}
          </div>
          
            <div className="text-center mt-8">
            <Link to="/services">
              <Button 
                size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-100" id="benefits" data-animate>
        <div className={`container-custom transition-all duration-1000 delay-300 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600 text-white">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark-800 mb-4">
              The <span className="gradient-text">Fovea Difference</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-8">
              Experience the difference with our commitment to excellence in eye care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} hover padding="lg" className="group h-full bg-dark-200 border-dark-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-dark-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl lg:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg lg:text-xl font-semibold text-primary-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-primary-300 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-dark-100">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Ready to Get Started?
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-8 text-dark-800">
              Experience <span className="gradient-text">Perfect Vision</span> Today
            </h2>
            
            <p className="text-lg sm:text-xl text-dark-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust Fovea Optical for their eye care needs. 
              Schedule your appointment today and take the first step towards clearer vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
              <Link to="/appointments">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  }
                >
                  Book Appointment Now
                </Button>
              </Link>
              
              <a href="tel:+254719530732">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
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
            
            <div className="mt-8 pt-6 border-t border-dark-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-dark-600 max-w-2xl mx-auto">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Eldoret Town, Kenya</span>
                </div>
                <div className="flex items-center justify-center sm:justify-end space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Mon-Fri 8AM-7PM, Sat 9AM-4PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Data arrays with proper SVG icons
const features = [
  {
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    title: 'Expert Optometrists',
    description: 'Certified professionals with extensive experience'
  },
  {
    image: 'https://images.unsplash.com/photo-1580281657527-3b3f31d4b1a4?auto=format&fit=crop&w=400&q=80',
    title: 'Modern Equipment',
    description: 'State-of-the-art diagnostic technology'
  },
  {
    image: 'https://images.unsplash.com/photo-1502630841787-4b9662a9b5d4?auto=format&fit=crop&w=400&q=80',
    title: 'Patient Care',
    description: 'Personalized attention for each patient'
  },
  {
    image: 'https://images.unsplash.com/photo-1524504388940-1f4a9d0a9a0f?auto=format&fit=crop&w=400&q=80',
    title: 'Quality Service',
    description: 'Excellence in every aspect of eye care'
  }
];

const services = [
  {
    title: "Comprehensive Eye Exams",
    description: "State-of-the-art diagnostic technology for precise results. Advanced equipment for accurate vision assessment and eye health screening.",
    image: 'https://images.unsplash.com/photo-1580281657527-3b3f31d4b1a4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: "Prescription Glasses & Lenses",
    description: "A wide selection of high-quality frames and lenses from top international brands. Customized to your prescription and style preferences.",
    image: 'https://images.unsplash.com/photo-1520975928713-1d3c4a9c9b9a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: "Contact Lenses",
    description: "Soft, rigid, and specialty lenses to suit your lifestyle. Professional fitting and follow-up care included.",
    image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: "Sunglasses",
    description: "UV protection paired with the latest stylish designs. Prescription sunglasses available for vision correction.",
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: "Children's Eye Care",
    description: "Specialized services tailored for our young patients. Early detection and management of vision problems in children.",
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: "Corporate Vision Care",
    description: "Customized eye screening programs for businesses. Group packages and corporate discounts available.",
    image: 'https://images.unsplash.com/photo-1527259934561-3d8f1f7f6f6f?auto=format&fit=crop&w=1200&q=80'
  }
];

const benefits = [
  {
    title: "Expertise & Experience",
    description: "Our team of qualified optometrists brings years of industry knowledge and continuous training."
  },
  {
    title: "Premium Products",
    description: "We carry top eyewear brands like Ray-Ban, Oakley, and local favorites, all backed by warranty."
  },
  {
    title: "Customer-Centric Approach",
    description: "Personalized eye care solutions tailored just for you. We listen to understand your specific needs."
  },
  {
    title: "Affordable Pricing",
    description: "High-quality vision care that offers the best value. Flexible payment options available."
  },
  {
    title: "Advanced Technology",
    description: "Digital eye exam equipment for accurate diagnoses and precise prescriptions."
  },
  {
    title: "Wide Product Range",
    description: "From designer frames to budget-friendly options. Something for every style and budget."
  }
];

const stats = [
  {
    number: '5000+',
    label: 'Happy Customers',
    description: 'Satisfied with our services'
  },
  {
    number: '15+',
    label: 'Years Experience',
    description: 'In optical industry'
  },
  {
    number: '100%',
    label: 'Quality Assurance',
    description: 'Premium products guarantee'
  },
  {
    number: '24/7',
    label: 'Support',
    description: 'Customer care available'
  }
];

export default Home;