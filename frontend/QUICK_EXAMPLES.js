/**
 * Quick Implementation Examples for Modern UI Components
 * Copy-paste ready code snippets for your components
 */

// ============================================================================
// EXAMPLE 1: Service Card with Modern Icons
// ============================================================================

/*
import { Card } from '../components/ui';
import { Eye, Glasses, Zap } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, price }) => (
  <Card 
    hover 
    padding="lg" 
    className="group bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:border-blue-500"
  >
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-blue-100 rounded-xl group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <p className="text-lg font-semibold text-blue-600 mt-3">{price}</p>
      </div>
    </div>
  </Card>
);

// Usage:
// <ServiceCard 
//   icon={Eye} 
//   title="Comprehensive Eye Exams" 
//   description="Complete eye health assessment"
//   price="From KSh 2,500"
// />
*/

// ============================================================================
// EXAMPLE 2: Appointment Status Timeline
// ============================================================================

/*
import { TimelineItem } from '../components/ModernIcons';
import { Calendar, CheckCircle, Phone, MapPin } from 'lucide-react';

const AppointmentTimeline = () => (
  <div className="max-w-2xl">
    <h2 className="text-2xl font-bold mb-8">Your Appointment Journey</h2>
    <div className="space-y-8">
      <TimelineItem
        icon={Calendar}
        title="Step 1: Select Date & Time"
        description="Choose your preferred appointment date and time from available slots"
        timestamp="First step"
        isActive={true}
      />
      <TimelineItem
        icon={CheckCircle}
        title="Step 2: Confirmation"
        description="Your appointment has been confirmed via email and SMS"
        timestamp="After booking"
        isActive={true}
      />
      <TimelineItem
        icon={MapPin}
        title="Step 3: Visit Our Location"
        description="Visit us at Eldoret Medical Plaza at your scheduled time"
        timestamp="On appointment day"
        isActive={false}
      />
      <TimelineItem
        icon={Phone}
        title="Step 4: Follow-up"
        description="We'll follow up with care instructions and future appointments"
        timestamp="After visit"
        isActive={false}
        isLast={true}
      />
    </div>
  </div>
);
*/

// ============================================================================
// EXAMPLE 3: Contact Information Card
// ============================================================================

/*
import { ContactInfo, Card } from '../components/ModernIcons';

const ContactSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card padding="lg" className="bg-blue-50 border-blue-200">
      <h3 className="text-xl font-bold mb-6">Contact Information</h3>
      <ContactInfo
        phone="+254719530732"
        email="contact@fovea.com"
        address="Eldoret Medical Plaza, Eldoret, Kenya"
        hours="Mon-Fri: 9AM-6PM | Sat: 10AM-4PM | Sun: Closed"
      />
    </Card>
    <Card padding="lg" className="bg-purple-50 border-purple-200">
      <h3 className="text-xl font-bold mb-6">Location Map</h3>
      {/* Add your map here */}
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        Map placeholder
      </div>
    </Card>
  </div>
);
*/

// ============================================================================
// EXAMPLE 4: Optician Profile Card
// ============================================================================

/*
import { Star, Briefcase, Award, MapPin } from 'lucide-react';
import { Card, Badge } from '../components/ui';

const OpticianCard = ({ name, specialty, experience, rating, reviews }) => (
  <Card 
    hover 
    padding="lg"
    className="group text-center bg-gradient-to-b from-blue-50 to-white"
  >
    {/* Profile Avatar */}
    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>

    {/* Name and Badge */}
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <Badge className="bg-green-600 text-white">{experience}+ yrs</Badge>
    </div>

    {/* Specialty */}
    <p className="text-blue-600 font-semibold mb-4">{specialty}</p>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-3 mb-6">
      <div className="bg-blue-50 rounded-lg p-3">
        <div className="flex items-center justify-center space-x-1 mb-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-gray-800">{rating}</span>
        </div>
        <p className="text-xs text-gray-600">{reviews} reviews</p>
      </div>
      <div className="bg-purple-50 rounded-lg p-3">
        <Award className="w-4 h-4 text-purple-600 mx-auto mb-1" />
        <p className="text-xs text-gray-600">Certified</p>
      </div>
    </div>

    {/* Book Button */}
    <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
      Book Appointment
    </button>
  </Card>
);

// Usage:
// <OpticianCard
//   name="Dr. John Kipchoge"
//   specialty="Refractive Surgery"
//   experience={15}
//   rating={4.8}
//   reviews={127}
// />
*/

// ============================================================================
// EXAMPLE 5: Stats Dashboard
// ============================================================================

/*
import { InfoCard } from '../components/ModernIcons';
import { Eye, Users, Award, Calendar } from 'lucide-react';

const StatsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <InfoCard
      icon={Eye}
      title="Eye Exams"
      value="1000+"
      subtitle="Performed last year"
      color="blue"
    />
    <InfoCard
      icon={Users}
      title="Happy Clients"
      value="5000+"
      subtitle="Since 2010"
      color="green"
    />
    <InfoCard
      icon={Award}
      title="Experience"
      value="15+"
      subtitle="Years of expertise"
      color="purple"
    />
    <InfoCard
      icon={Calendar}
      title="Appointments"
      value="850+"
      subtitle="This month"
      color="orange"
    />
  </div>
);
*/

// ============================================================================
// EXAMPLE 6: Modern Feature List
// ============================================================================

/*
import { Check } from 'lucide-react';

const FeatureList = ({ features }) => (
  <ul className="space-y-3">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          <Check className="w-5 h-5 text-green-600" />
        </div>
        <span className="text-gray-700">{feature}</span>
      </li>
    ))}
  </ul>
);

// Usage:
// <FeatureList features={[
//   "Digital retinal imaging",
//   "Visual field testing",
//   "Prescription assessment",
//   "Eye health screening"
// ]} />
*/

// ============================================================================
// EXAMPLE 7: Empty State
// ============================================================================

/*
import { EmptyState } from '../components/ModernIcons';
import { Calendar } from 'lucide-react';

const NoAppointments = ({ onBookClick }) => (
  <EmptyState
    icon={Calendar}
    title="No Appointments Yet"
    description="You haven't booked any appointments. Schedule one today to get started with your eye care journey."
    action={onBookClick}
    actionLabel="Book Your First Appointment"
  />
);
*/

// ============================================================================
// EXAMPLE 8: Status Badge Display
// ============================================================================

/*
import { StatusBadge } from '../components/ModernIcons';

const AppointmentStatus = ({ appointment }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
    <div>
      <p className="font-medium text-gray-800">{appointment.service}</p>
      <p className="text-sm text-gray-600">{appointment.date}</p>
    </div>
    <StatusBadge 
      status={appointment.status} 
      label={appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
    />
  </div>
);

// Usage: Shows different status badges
// <StatusBadge status="confirmed" label="Confirmed" />
// <StatusBadge status="pending" label="Pending Review" />
// <StatusBadge status="completed" label="Completed" />
// <StatusBadge status="cancelled" label="Cancelled" />
*/

// ============================================================================
// EXAMPLE 9: Icon Button Group
// ============================================================================

/*
import { IconButton } from '../components/ModernIcons';
import { Edit, Trash2, Share2, MoreVertical } from 'lucide-react';

const ActionButtons = ({ onEdit, onDelete, onShare }) => (
  <div className="flex items-center space-x-2">
    <IconButton 
      icon={Edit} 
      label="Edit" 
      onClick={onEdit}
      variant="secondary"
      size="md"
    />
    <IconButton 
      icon={Share2} 
      label="Share" 
      onClick={onShare}
      variant="secondary"
      size="md"
    />
    <IconButton 
      icon={Trash2} 
      label="Delete" 
      onClick={onDelete}
      variant="danger"
      size="md"
    />
  </div>
);
*/

// ============================================================================
// EXAMPLE 10: Form Input with Icons
// ============================================================================

/*
import { Mail, Phone, MapPin, Calendar, Eye } from 'lucide-react';
import { Input } from '../components/ui';

const AppointmentForm = () => (
  <div className="space-y-6">
    {/* Name with icon */}
    <div className="relative">
      <Eye className="absolute left-3 top-3 w-5 h-5 text-blue-600" />
      <input
        type="text"
        placeholder="Full Name"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    {/* Email with icon */}
    <div className="relative">
      <Mail className="absolute left-3 top-3 w-5 h-5 text-blue-600" />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    {/* Phone with icon */}
    <div className="relative">
      <Phone className="absolute left-3 top-3 w-5 h-5 text-blue-600" />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    {/* Date with icon */}
    <div className="relative">
      <Calendar className="absolute left-3 top-3 w-5 h-5 text-blue-600" />
      <input
        type="date"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  </div>
);
*/

// ============================================================================
// EXPORT ALL EXAMPLES
// ============================================================================

export const examples = {
  ServiceCard: "EXAMPLE 1",
  AppointmentTimeline: "EXAMPLE 2",
  ContactSection: "EXAMPLE 3",
  OpticianCard: "EXAMPLE 4",
  StatsSection: "EXAMPLE 5",
  FeatureList: "EXAMPLE 6",
  NoAppointments: "EXAMPLE 7",
  AppointmentStatus: "EXAMPLE 8",
  ActionButtons: "EXAMPLE 9",
  AppointmentForm: "EXAMPLE 10",
};

// ============================================================================
// USAGE INSTRUCTIONS
// ============================================================================

/*
HOW TO USE THESE EXAMPLES:

1. Import the necessary components from lucide-react and your component files
2. Copy the example code (uncommenting it first)
3. Adjust styles and content to match your needs
4. Test in your component

COMMON IMPORTS:
import { Card, Badge, Button } from '../components/ui';
import { 
  Eye, 
  Glasses, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Star,
  CheckCircle,
  Edit,
  Trash2,
  Share2
} from 'lucide-react';
import {
  TimelineItem,
  ContactInfo,
  InfoCard,
  StatusBadge,
  IconButton,
  RatingDisplay,
  EmptyState
} from '../components/ModernIcons';

STYLING QUICK REFERENCE:
- Primary color: bg-blue-600, text-blue-600, border-blue-200
- Secondary: bg-purple-600, bg-green-600, bg-orange-600
- Hover scale: group-hover:scale-110
- Hover color: hover:bg-blue-700, hover:text-blue-700
- Transitions: transition-all duration-300
- Rounded: rounded-lg, rounded-xl, rounded-2xl
- Shadows: shadow-lg, shadow-xl

ICON SIZING:
- Small: w-4 h-4
- Medium: w-5 h-5 (standard)
- Large: w-6 h-6
- Extra Large: w-8 h-8, w-12 h-12, w-16 h-16

RESPONSIVE PATTERNS:
- grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- w-full md:w-1/2 lg:w-1/3
- text-lg md:text-xl lg:text-2xl
- px-4 md:px-6 lg:px-8
*/

export default examples;
