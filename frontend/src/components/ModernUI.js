/**
 * Glass-morphism and Modern UI Components for Optical Theme
 * Provides modern card, button, and visual effects
 */

import React from "react";

export const GlassmorphCard = ({
  children,
  className = "",
  blur = "md",
  opacity = 50,
  hover = true,
}) => {
  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  return (
    <div
      className={`
        ${blurMap[blur]}
        bg-white/${opacity}
        border border-white/${Math.min(opacity + 10, 100)}
        rounded-2xl
        ${hover ? "hover:border-white/30 hover:bg-white/" + Math.min(opacity + 10, 100) : ""}
        transition-all duration-300
        ${className}
      `}
      style={{
        background: `rgba(255, 255, 255, ${opacity / 100})`,
        borderColor: `rgba(255, 255, 255, ${Math.min(opacity + 10, 100) / 100})`,
        backdropFilter: `blur(${blur === "md" ? "16px" : blur === "lg" ? "24px" : blur === "xl" ? "32px" : "8px"})`,
        WebkitBackdropFilter: `blur(${blur === "md" ? "16px" : blur === "lg" ? "24px" : blur === "xl" ? "32px" : "8px"})`,
      }}
    >
      {children}
    </div>
  );
};

export const OpticalGradientBg = ({ children }) => (
  <div
    className="relative overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)",
      backgroundSize: "400% 400%",
      animation: "gradient 15s ease infinite",
    }}
  >
    <style>{`
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}</style>
    {children}
  </div>
);

export const ModernIconWrapper = ({
  icon: Icon,
  size = "md",
  color = "primary",
}) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const colorMap = {
    primary: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    pink: "from-pink-500 to-pink-600",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
  };

  return (
    <div
      className={`
      ${sizeMap[size]}
      bg-gradient-to-br ${colorMap[color]}
      rounded-2xl
      flex items-center justify-center
      shadow-lg
      group-hover:scale-110 transition-transform duration-300
    `}
    >
      <Icon className="w-6/12 h-6/12 text-white" />
    </div>
  );
};

export const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

export const FeatureBox = ({
  icon: Icon,
  title,
  description,
  color = "primary",
}) => {
  const colorMap = {
    primary: "from-blue-500/10 to-blue-600/5 border-blue-200",
    purple: "from-purple-500/10 to-purple-600/5 border-purple-200",
    pink: "from-pink-500/10 to-pink-600/5 border-pink-200",
  };

  return (
    <div
      className={`
      bg-gradient-to-br ${colorMap[color]}
      p-6 rounded-2xl border
      group hover:shadow-lg transition-all duration-300
      cursor-pointer transform hover:-translate-y-1
    `}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <ModernIconWrapper icon={Icon} size="md" color={color} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
