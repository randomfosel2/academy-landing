---
name: Academic Excellence Framework
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#341100'
  on-tertiary-container: '#d95f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Work Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
  gutter: 24px
  form-gap: 20px
  container-max-width: 1200px
---

## Brand & Style

The design system is engineered to project an image of institutional stability, academic rigor, and parental trust. It targets discerning parents seeking a structured yet supportive environment for their children's K-12 education. 

The aesthetic follows a **Corporate / Modern** direction. It prioritizes clarity and structured information density to ensure that curriculum details and registration processes feel organized and manageable. By utilizing a balanced mix of deep, authoritative tones and warm, functional accents, the UI bridges the gap between a prestigious institution and an approachable educational partner. The emotional response should be one of "confidence in the curriculum" and "ease of engagement."

## Colors

The palette is anchored by **Deep Navy (Primary)**, symbolizing authority and historical academic prestige. **Soft Blue (Secondary)** is used for interactive elements and sub-navigation to maintain a professional atmosphere without feeling overly aggressive. **Warm Orange (Tertiary)** is reserved exclusively for high-priority Calls to Action (CTAs), providing a vibrant contrast that guides parents toward enrollment and inquiry.

Backgrounds utilize a tiered system of **Light Grays and Off-Whites** to define content sections without the harshness of pure white. Text is set in a high-contrast **Slate Gray** to ensure maximum legibility for long-form curriculum descriptions.

## Typography

This design system employs a dual-sans-serif approach to maximize both personality and utility. **Work Sans** is used for headings to provide a grounded, professional foundation with a slight contemporary edge. **Public Sans** is used for all body copy and UI labels, chosen for its institutional clarity and exceptional readability in data-heavy contexts like schedules and forms.

For mobile devices, headline sizes are scaled down to prevent awkward line breaks while maintaining a clear typographic hierarchy. Form labels use a slightly heavier weight to ensure they remain distinct from user input text.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system centered within a 1200px container for desktop viewing, ensuring a stable and predictable reading experience. On mobile, the grid collapses to a single-column layout with 20px side margins.

A generous spacing rhythm is applied throughout this design system to prevent information overload. Section headers are separated by significant vertical padding (80px) to create a sense of "breathing room." Within forms and data tables, an 8px base unit governs all dimensions, ensuring a mathematical harmony across the interface. The reservation form specifically uses increased internal padding within input fields and 20px gaps between rows to reduce cognitive friction for parents.

## Elevation & Depth

To maintain a clean and professional look, the design system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. 

- **Surface Levels:** The primary background is the lowest level. Cards and form containers sit on "Level 1," which is pure white with a subtle 1px border (#E2E8F0).
- **Subtle Depth:** A single, diffused "Ambient Shadow" (0px 4px 20px rgba(15, 23, 42, 0.05)) is applied only to the primary curriculum cards and the floating navigation bar to provide just enough depth to signify interactivity.
- **Interactive States:** On hover, cards may lift slightly with a more pronounced but still soft shadow to provide tactile feedback.

## Shapes

The shape language is **Soft (Level 1)**. Elements like buttons and input fields use a 0.25rem (4px) corner radius. This choice reflects a balance between the "sharpness" of traditional academic institutions and the "softness" required to feel welcoming to families. Large curriculum cards and the calendar widget may use the `rounded-lg` (0.5rem) setting to feel more modern and approachable.

## Components

### Buttons & CTAs
- **Primary CTA:** Solid Tertiary (Orange) background with white text. High contrast for immediate visibility.
- **Secondary Action:** Outlined Blue or Navy. Used for "Learn More" or "Download Syllabus."
- **Shape:** Soft-rounded corners (4px).

### Reservation Form (PRD v4 Compliant)
- **Layout:** Strict 1-column layout for clarity and focus.
- **Required Fields:** Marked with a bold Red Asterisk (`*`) immediately following the label text.
- **Optional Fields:** Include the suffix `(Optional)` in a lighter weight and smaller font size within the label.
- **Inputs:** Large touch targets with 12px vertical padding.

### Curriculum Cards
- White background with a 1px Slate border.
- Use a top-accent bar in the Primary Navy color to denote institutional authority.
- Clear hierarchy: Icon -> Subject Title -> Short Description -> "View Details" link.

### Tabbed Navigation
- Used for switching between school levels (Elementary, Middle, High).
- Selected state features a thick Primary Navy bottom border and bold text. Unselected states use a neutral gray.

### Calendar Widget
- Clean, minimalist grid with no heavy borders.
- Available dates highlighted in Secondary Blue. 
- Today's date indicated with a subtle circle outline.
