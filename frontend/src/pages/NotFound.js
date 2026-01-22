import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Section, Container } from '../components/ui';

const NotFound = () => {
  return (
    <Section background="gray" padding="xl">
      <Container size="sm" className="text-center">
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl font-bold text-primary-600 mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-secondary-900 mb-6">
          Oops! Page Not Found
        </h1>
        
        <p className="text-lg text-secondary-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button 
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            >
              Go Home
            </Button>
          </Link>
          
          <Link to="/services">
            <Button 
              variant="outline"
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            >
              Our Services
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-200">
          <p className="text-secondary-500 text-sm">
            Need help? <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">Contact us</Link> or call{' '}
            <a href="tel:+254719530732" className="text-primary-600 hover:text-primary-700 font-medium">
              +254 719 530 732
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;