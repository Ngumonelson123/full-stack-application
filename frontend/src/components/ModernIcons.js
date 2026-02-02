/**
 * Enhanced UI Components with Modern Icons
 * Integration of Lucide React and custom icons for optical theme
 */

import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Eye,
  Glasses,
  Users,
  Star,
  CheckCircle,
  AlertCircle,
  Download,
  Share2,
  Heart,
  Settings,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Home,
  User,
  LogOut,
  LogIn,
  Plus,
  Edit,
  Trash2,
  Save,
  MoreVertical,
  Filter,
  ChevronDown,
  Lock,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
} from "lucide-react";

import {
  FaStethoscope,
  FaClipboardList,
  FaHeartbeat,
  FaUserMd,
  FaAward,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCheck,
  FaStar,
  FaCalendarAlt,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaRing,
} from "react-icons/fa";

/**
 * Icon sets for different sections
 */
export const ServiceIcons = {
  EyeExam: Eye,
  Glasses: Glasses,
  ContactLens: () => <FaRing className="w-6 h-6" />,
  Consultation: () => <FaStethoscope className="w-6 h-6" />,
  Surgery: () => <FaClipboardList className="w-6 h-6" />,
  Sunglasses: () => <EyeIcon className="w-6 h-6" />,
  Children: Heart,
  Emergency: AlertCircle,
};

export const NavigationIcons = {
  Home: Home,
  Services: Glasses,
  Appointments: Calendar,
  Opticians: Users,
  Profile: User,
  Logout: LogOut,
  Login: LogIn,
  Settings: Settings,
  Menu: Menu,
  Close: X,
};

export const ActionIcons = {
  Add: Plus,
  Edit: Edit,
  Delete: Trash2,
  Save: Save,
  More: MoreVertical,
  Filter: Filter,
  Search: Search,
  Download: Download,
  Share: Share2,
  Call: Phone,
  Email: Mail,
  Location: MapPin,
  Time: Clock,
};

/**
 * Modern Icon Button Component
 */
export const IconButton = ({
  icon: Icon,
  label,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const sizeMap = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const variantMap = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    secondary: "text-blue-600 bg-blue-100 hover:bg-blue-200",
    ghost: "text-gray-600 hover:bg-gray-100",
    danger: "text-white bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeMap[size]}
        ${variantMap[variant]}
        rounded-lg transition-all duration-200
        hover:shadow-lg transform hover:scale-105
        ${className}
      `}
      aria-label={label}
      title={label}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

/**
 * Status Badge with Icons
 */
export const StatusBadge = ({ status, label }) => {
  const statusConfig = {
    confirmed: {
      color: "bg-green-100 text-green-800",
      icon: CheckCircle,
    },
    pending: {
      color: "bg-yellow-100 text-yellow-800",
      icon: Clock,
    },
    cancelled: {
      color: "bg-red-100 text-red-800",
      icon: X,
    },
    completed: {
      color: "bg-blue-100 text-blue-800",
      icon: CheckCircle,
    },
  };

  const config = statusConfig[status] || statusConfig.pending;
  const StatusIcon = config.icon;

  return (
    <div
      className={`
      inline-flex items-center space-x-2 px-3 py-1 rounded-full
      ${config.color} font-medium text-sm
    `}
    >
      <StatusIcon className="w-4 h-4" />
      <span>{label}</span>
    </div>
  );
};

/**
 * Info Card with Icon
 */
export const InfoCard = ({
  icon: Icon,
  title,
  value,
  subtitle,
  color = "blue",
}) => {
  const colorMap = {
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    green: "bg-green-50 border-green-200 text-green-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700",
  };

  return (
    <div
      className={`
      border rounded-lg p-4 flex items-start space-x-4
      ${colorMap[color]}
    `}
    >
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-xs font-medium opacity-75">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        {subtitle && <p className="text-xs mt-1 opacity-75">{subtitle}</p>}
      </div>
    </div>
  );
};

/**
 * Rating Display with Stars
 */
export const RatingDisplay = ({ rating, count, interactive = false }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.round(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">({count})</span>
    </div>
  );
};

/**
 * Contact Info Display
 */
export const ContactInfo = ({ phone, email, address, hours }) => {
  return (
    <div className="space-y-3">
      {phone && (
        <div className="flex items-center space-x-3 text-gray-700">
          <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <a href={`tel:${phone}`} className="hover:text-blue-600 transition">
            {phone}
          </a>
        </div>
      )}
      {email && (
        <div className="flex items-center space-x-3 text-gray-700">
          <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <a
            href={`mailto:${email}`}
            className="hover:text-blue-600 transition"
          >
            {email}
          </a>
        </div>
      )}
      {address && (
        <div className="flex items-center space-x-3 text-gray-700">
          <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <span>{address}</span>
        </div>
      )}
      {hours && (
        <div className="flex items-center space-x-3 text-gray-700">
          <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <span>{hours}</span>
        </div>
      )}
    </div>
  );
};

/**
 * Timeline Component
 */
export const TimelineItem = ({
  title,
  description,
  timestamp,
  icon: Icon,
  isActive = false,
  isLast = false,
}) => {
  return (
    <div className="flex space-x-4">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div
          className={`
          w-10 h-10 rounded-full flex items-center justify-center
          ${
            isActive
              ? "bg-blue-600 text-white ring-4 ring-blue-200"
              : "bg-gray-200 text-gray-600"
          }
        `}
        >
          {Icon ? (
            <Icon className="w-5 h-5" />
          ) : (
            <CheckCircle className="w-5 h-5" />
          )}
        </div>
        {!isLast && (
          <div
            className={`
            w-1 flex-1 my-2
            ${isActive ? "bg-blue-600" : "bg-gray-200"}
          `}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-xs text-gray-500 mt-2">{timestamp}</p>
      </div>
    </div>
  );
};

/**
 * Empty State Component
 */
export const EmptyState = ({
  icon: Icon = Eye,
  title,
  description,
  action,
  actionLabel = "Get Started",
}) => {
  return (
    <div className="text-center py-12">
      <div className="mb-4 flex justify-center">
        <div className="p-3 bg-gray-100 rounded-full">
          <Icon className="w-8 h-8 text-gray-400" />
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-sm mx-auto">{description}</p>
      {action && (
        <button
          onClick={action}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default {
  ServiceIcons,
  NavigationIcons,
  ActionIcons,
  IconButton,
  StatusBadge,
  InfoCard,
  RatingDisplay,
  ContactInfo,
  TimelineItem,
  EmptyState,
};
