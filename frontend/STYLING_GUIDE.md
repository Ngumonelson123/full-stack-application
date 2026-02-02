# 🎨 Optical Theme Styling Guide

## Color Palette for Optical Business

### Primary Colors (Vision-Focused)

```css
/* Main Brand Blue - Professional & Trustworthy */
Blue-500: #3b82f6
Blue-600: #2563eb
Blue-700: #1d4ed8
Blue-800: #1e40af

/* Secondary Colors */
Purple: #a855f7      /* Eye-related symbolism */
Pink: #ec4899        /* Modern, approachable */
Green: #10b981       /* Health, wellness */
Orange: #f97316      /* Energy, warmth */
```

### Optical Theme Justification

- **Blue**: Professional healthcare, trust, calmness
- **Purple**: Vision, mystery, healing
- **Pink**: Care, approachable, modern
- **Green**: Health, wellness, vision improvement

## Gradient Combinations for Modern Look

### Eye Care Themed

```javascript
// Gradient 1: Vision Theme
from-blue-500 via-purple-500 to-pink-500
// Usage: Backgrounds, hero sections

// Gradient 2: Professional
from-blue-600 to-blue-800
// Usage: Call-to-action buttons, headers

// Gradient 3: Energetic
from-purple-500 to-pink-500
// Usage: Feature highlights, badges

// Gradient 4: Cool & Calm
from-blue-400 to-purple-400
// Usage: Card backgrounds, secondary elements
```

### Implementation Examples

```tailwindcss
/* Hero gradient */
<div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">

/* Button gradient */
<button className="bg-gradient-to-r from-blue-600 to-blue-800">

/* Card gradient */
<div className="bg-gradient-to-b from-blue-50 to-white">

/* Text gradient */
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
```

## Glass-Morphism for Modern Look

### CSS Implementation

```css
/* Glass-morphism effect */
.glass-card {
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 1rem;
}

/* Strong glass effect */
.glass-card-strong {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Dark glass effect */
.glass-card-dark {
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  color: white;
}
```

### Tailwind Implementation

```javascript
// Light glass
className = "backdrop-blur-md bg-white/60 border border-white/20 rounded-2xl";

// Strong glass
className = "backdrop-blur-lg bg-white/80 border border-white/30 rounded-2xl";

// Dark glass
className =
  "backdrop-blur-md bg-black/70 border border-white/10 rounded-2xl text-white";
```

## Icon Sizing Standards

### Consistent Icon Sizes

```javascript
// Extra Small (xs)
className = "w-4 h-4"; // For subtle indicators

// Small (sm)
className = "w-5 h-5"; // Default for most uses

// Medium (md)
className = "w-6 h-6"; // Standard icons in cards

// Large (lg)
className = "w-8 h-8"; // Featured icons

// Extra Large (xl)
className = "w-12 h-12"; // Profile pictures, headers

// 2XL
className = "w-16 h-16"; // Hero sections

// 3XL
className = "w-20 h-20"; // Featured hero icons
```

### Icon Color Coordination

```javascript
// Primary action icons
className = "text-blue-600";

// Success/positive
className = "text-green-600";

// Warning
className = "text-yellow-600";

// Error/danger
className = "text-red-600";

// Secondary/muted
className = "text-gray-600";

// White on colored background
className = "text-white";
```

## Typography for Optical Business

### Font Sizes

```javascript
// Headings
text-2xl   // Page title
text-3xl   // Section title
text-4xl   // Major section
text-5xl   // Hero title
text-6xl   // Feature title

// Body
text-base  // Default body (16px)
text-lg    // Larger body (18px)
text-sm    // Small text (14px)
text-xs    // Extra small (12px)
```

### Font Weights

```javascript
// Light (300)
font - light; // Secondary text

// Regular (400)
font - normal; // Body text

// Medium (500)
font - medium; // Emphasized text

// Semibold (600)
font - semibold; // Subheadings

// Bold (700)
font - bold; // Main headings

// Extra Bold (800/900)
font - extrabold; // Hero titles
```

## Spacing System

### Padding Consistency

```javascript
p - 2; // 8px (small buttons)
p - 3; // 12px (form inputs)
p - 4; // 16px (standard cards)
p - 6; // 24px (large sections)
p - 8; // 32px (major sections)
p - 12; // 48px (hero sections)
```

### Gap Between Elements

```javascript
gap - 2; // 8px (tight spacing)
gap - 3; // 12px (standard)
gap - 4; // 16px (comfortable)
gap - 6; // 24px (spacious)
gap - 8; // 32px (very spacious)
```

## Border Radius for Modern Look

### Consistency

```javascript
rounded-lg    // 8px (standard buttons)
rounded-xl    // 12px (cards, medium)
rounded-2xl   // 16px (feature cards)
rounded-3xl   // 24px (large elements)
rounded-full  // 9999px (circles, avatars)
```

## Shadow Effects for Depth

### Elevation Levels

```javascript
// No shadow (flat)
shadow-none

// Subtle shadow (level 1)
shadow-sm           // 1px depth

// Standard shadow (level 2)
shadow              // Default depth
shadow-md           // Medium depth

// Strong shadow (level 3)
shadow-lg           // Prominent

// Very strong (level 4)
shadow-xl           // Hero elements
shadow-2xl          // Floating elements
```

### Color-Tinted Shadows

```javascript
// Blue shadow (professional)
shadow-lg shadow-blue-500/20

// Purple shadow (premium)
shadow-lg shadow-purple-500/20

// Glow effect
shadow-lg shadow-blue-400/50
```

## Hover & Transition Effects

### Button Transitions

```javascript
// Scale up
hover:scale-105 transition-transform duration-200

// Larger scale
hover:scale-110 transition-transform duration-300

// Color change
hover:bg-blue-700 transition-colors duration-300

// Shadow increase
hover:shadow-lg transition-shadow duration-300

// Combined effect (recommended)
hover:scale-105 hover:shadow-lg transition-all duration-300
```

### Card Hover Effects

```javascript
// Subtle lift
group-hover:scale-105 group-hover:shadow-lg transition-all duration-300

// Color tint
group-hover:border-blue-500 group-hover:bg-blue-50 transition-all duration-300

// Icon animation
group-hover:scale-110 transition-transform duration-300
```

## Animation Durations

### Recommended Timings

```javascript
// Quick interactions (100-150ms)
duration - 100; // Fast feedback

// Standard transitions (300ms)
duration - 300; // Default smooth

// Slow animations (500ms+)
duration - 500; // Emphasis
duration - 700; // Special effects

// Very slow (1s+)
duration - 1000; // Loading, special effects
```

## Responsive Design Patterns

### Breakpoint Usage

```javascript
// Mobile first
className = "px-4 py-2"; // Mobile

// Tablet
className = "px-4 py-2 md:px-6 md:py-3"; // Tablet

// Desktop
className = "px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"; // Desktop

// Grid responsive
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

// Text responsive
className = "text-lg md:text-xl lg:text-2xl";
```

## Form Styling for Optical Services

### Input Fields

```javascript
// Standard input
<input className="
  w-full
  px-4 py-2
  border border-gray-300
  rounded-lg
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  focus:border-transparent
  transition-all duration-300
"/>

// With icon prefix
<div className="relative">
  <Eye className="absolute left-3 top-3 w-5 h-5 text-blue-600" />
  <input className="w-full pl-10 pr-4 py-2 border rounded-lg..." />
</div>
```

### Select Dropdowns

```javascript
<select
  className="
  w-full
  px-4 py-2
  border border-gray-300
  rounded-lg
  bg-white
  cursor-pointer
  hover:border-blue-400
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  transition-all duration-300
"
>
  <option>Select Service</option>
</select>
```

## Badge & Label Styling

### Status Badges

```javascript
// Confirmed (green)
className =
  "inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium text-sm";

// Pending (yellow)
className =
  "inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm";

// Error (red)
className =
  "inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 font-medium text-sm";
```

## Optical Theme Color Application

### By Component Type

**Headers & Navigation**

- Background: `bg-blue-600` or `bg-gradient-to-r from-blue-600 to-blue-800`
- Text: `text-white`
- Hover: `hover:bg-blue-700`

**Cards & Containers**

- Background: `bg-white` or `bg-blue-50`
- Border: `border border-gray-200` or `border border-blue-200`
- Hover: `hover:border-blue-500 hover:shadow-lg`

**Buttons - Primary**

- Background: `bg-blue-600`
- Hover: `hover:bg-blue-700`
- Text: `text-white`

**Buttons - Secondary**

- Background: `bg-blue-100`
- Hover: `hover:bg-blue-200`
- Text: `text-blue-600`

**Buttons - Outline**

- Background: `transparent`
- Border: `border-2 border-blue-600`
- Text: `text-blue-600`
- Hover: `hover:bg-blue-50`

**Status/Success Elements**

- Color: `text-green-600` or `bg-green-100`

**Alert/Warning Elements**

- Color: `text-yellow-600` or `bg-yellow-100`

**Error Elements**

- Color: `text-red-600` or `bg-red-100`

## Performance Optimization

### CSS Best Practices

```javascript
// Use Tailwind classes instead of inline styles
✓ className="rounded-xl shadow-lg"
✗ style={{ borderRadius: '12px', boxShadow: '...' }}

// Use CSS transitions for animations
✓ transition-all duration-300
✗ Constant state updates

// Limit animation complexity
✓ Simple scale and color changes
✗ Complex multi-step animations
```

## Accessibility Considerations

### Color Contrast

- Text on `bg-white`: `text-gray-900` or darker
- Text on `bg-blue-600`: `text-white`
- Ensure WCAG AA compliance (4.5:1 ratio)

### Icon Accessibility

```javascript
// Always add labels
<button aria-label="Book appointment">
  <Calendar className="w-6 h-6" />
</button>

// Descriptive alt text
<img alt="Eye examination equipment" src="..." />
```

## Quick Reference Card

```
PRIMARY ACTION:     bg-blue-600 text-white hover:bg-blue-700
SECONDARY ACTION:   bg-blue-100 text-blue-600 hover:bg-blue-200
SUCCESS:            text-green-600 bg-green-100
WARNING:            text-yellow-600 bg-yellow-100
ERROR:              text-red-600 bg-red-100
CARD:               bg-white border border-gray-200 rounded-xl
ICON STANDARD:      w-6 h-6 text-blue-600
SPACING:            px-4 py-2 (standard), gap-4 (between items)
TRANSITION:         transition-all duration-300
HOVER EFFECT:       hover:scale-105 hover:shadow-lg
ROUNDED:            rounded-lg (buttons), rounded-xl (cards), rounded-2xl (large)
```

---

**This guide ensures consistent, modern, optical-themed design throughout your application.**

**Version**: 1.0.0
**Last Updated**: January 2025
