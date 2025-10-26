# The Voice Lab - Design Guidelines

## Design Approach
**Reference-Based**: Instagram brand aesthetic with bold, youthful energy inspired by modern social platforms. Think vibrant gradients, impactful typography, and dramatic visual hierarchy that commands attention.

## Typography System

**Primary Font**: Chillax Variable (load via CDN)
- Headlines: Font weight 800-900 (extra bold/black)
- Sizes: MASSIVE - text-7xl to text-9xl on desktop, scale down responsively
- Letter-spacing: Tight (-0.03em to -0.05em) for impact
- Body text: Minimum font weight 600, text-xl
- Text shadows for depth on large headlines
- Fallback: System UI fonts

**Text Treatment**:
- Mix white and colored words in headlines (e.g., "The" in white, "Problem" in coral)
- Use color to emphasize action words and key phrases
- High contrast for readability

## Color Palette

**Gradients** (Primary design element):
- Deep Blue → Purple: #2563eb → #7c3aed, #1e40af → #9333ea
- Blue → Teal variations
- Dark Navy with gradient glows for urgency sections

**Accent Colors**:
- Coral/Orange emphasis: #ff6b6b, #f97316 (NOT brown)
- White as primary text color
- Use coral/orange for emphasized words, CTAs, and urgency elements

## Layout System

**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-20 to py-32 on desktop, py-12 on mobile
- Generous whitespace between elements
- Tight text leading for bold headlines

**Structure**:
- Full-width gradient backgrounds per section
- Max-width containers: max-w-7xl for content
- Asymmetric layouts with diagonal/angled cards
- Dramatic character positioning (large, overlapping sections)

## Component Library

**Sticky Countdown Bar**:
- Fixed to top, dark blue gradient background
- Large text showing hours:minutes:seconds until 8 PM
- Urgent styling with warning emoji
- Transforms to "SESSION LIVE NOW" at zero
- Clickable, scrolls to urgency section

**Buttons**:
- Size: HUGE (px-16 py-6, text-xl/2xl)
- Font weight: 800
- Primary color: Coral #ff6b6b
- Massive glow effect (shadow-2xl with colored glow)
- Animated gradient shifts on hover
- All CTAs link to WhatsApp: https://chat.whatsapp.com/G5ncFqtqtmT5gSBewjD93m

**Cards**:
- Angled/diagonal positioning for visual interest
- Gradient borders
- Bold text (font-weight: 700-800)
- Varying sizes for hierarchy
- Urgent cards: pulsing borders, red/orange accents

**FAQ Accordion**:
- Smooth expand/collapse
- Bold questions (font-weight: 700)
- Clear, concise answers
- Gradient dividers between items

**Creative Elements**:
- Abstract floating shapes in backgrounds
- Gradient mesh overlays
- Wavy section dividers
- Bold drop shadows
- Glow effects on characters and key elements

## Images & Characters

**Provided Assets**:
1. **girl_smiling.png** - Student character (transparent PNG)
   - Use LARGE and dramatically positioned
   - Add glow effects
   - Place in Hero and Benefits sections

2. **voiceclubpersona.png** - Mascot (transparent PNG)
   - Use LARGE with prominent positioning
   - Add glow effects
   - Place in Hero, Solution, and Final CTA sections

**Positioning Strategy**:
- Characters should overlap section boundaries
- Create depth with z-index layering
- Use large scale (up to 500-600px height on desktop)
- Add colored glows matching section gradients

## Page Sections (9 Total)

1. **Countdown Bar**: Sticky urgent timer
2. **Hero**: Massive headline "Grow Your Professional International Network" with both characters, giant CTA
3. **The Gap**: Problem section with 4 pain points in diagonal cards, orange-emphasized text
4. **The Solution**: 2 asymmetric cards (Monday sessions + urgent Sunday prep), mascot between
5. **Benefits**: 6 benefits in asymmetric grid, both characters
6. **How to Join**: 3 large numbered steps with REQUIRED emphasis on step 2 (introduce yourself)
7. **Urgency**: Dark dramatic section, "Tonight: 10 Spots Only", extreme urgency
8. **FAQ**: 5 Q&As in accordion format
9. **Final CTA**: Aspirational close with logo, mascot, giant button

## Animation Guidelines

**Use Sparingly** (performance-focused):
- Gradient shifts (smooth transitions)
- Glow pulse on CTAs
- Simple fade-ins on scroll
- Accordion expand/collapse
- Countdown timer tick

**Avoid**: Heavy animations, parallax scrolling, complex transforms

## Responsive Behavior

- Mobile-first approach
- Stack columns on mobile (always single column)
- Scale typography dramatically (text-4xl mobile → text-9xl desktop)
- Reduce character sizes proportionally
- Maintain gradient backgrounds across all viewports
- Touch-friendly tap targets (min 44px)

## Accessibility

- High contrast text (white on dark gradients)
- Semantic HTML structure
- ARIA labels for countdown and accordion
- Keyboard navigation for all interactive elements
- Focus states with visible outlines

## Critical Emphasis Points

- **Urgency**: Sunday 8 PM is ONE-TIME ONLY entry point
- **Required Action**: Step 2 introduction is mandatory (highlight visually)
- **Scarcity**: 10 spots only
- **Three countries**: Turkey, Greece, Croatia (not four)
- **Target**: ITBS students specifically
- **Free Forever**: Emphasize no cost, no catches
- **Mixed Text Colors**: White + coral/orange in headlines for impact

## Technical Constraints

- Load under 2s on 3G
- Compress images (WebP format)
- Lazy load below-fold images
- Minimal JavaScript (countdown, accordion, smooth scroll only)
- Mobile-optimized gradients (CSS, not images)