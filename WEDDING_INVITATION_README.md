# Modern Digital Wedding Invitation Landing Page

A beautiful, interactive digital wedding invitation with Indian cultural elements (lotus flowers), minimal pastel design, and engaging interactive features.

## 🎨 Features

### Design & Theme
- **Pastel Color Palette**: Soft pink, cream, sage green, blush, and lavender
- **Typography**: Elegant serif fonts (Playfair Display) for headings with clean sans-serif (Lora) for body text
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Floral Elements**: Decorative lotus patterns throughout with cultural Indian aesthetics

### Interactive Sections

1. **Wedding Seal Introduction**
   - Click on the elegant wedding seal image to open the invitation
   - Smooth fade animations and hover effects
   - Mobile-friendly tap target

2. **Hero Section**
   - Displays couple names with elegant animations
   - Sets the romantic tone for the celebration
   - Decorative lotus flowers and dividers

3. **Invitation Message**
   - Traditional wedding invitation text
   - Beautifully formatted with cultural elements
   - Center-aligned elegant layout

4. **Photo Gallery**
   - Carousel with automatic rotation (5-second intervals)
   - Manual navigation with previous/next buttons
   - Touch-friendly on mobile devices
   - Indicator dots showing current position
   - Hover effects and smooth transitions

5. **Scratch-Off Date Reveal**
   - Interactive canvas-based scratch effect
   - Users scratch to reveal the wedding date
   - Progress indicator while scratching
   - Success message and confetti animation when fully revealed
   - Touch and mouse support

6. **Venue Section**
   - Venue photo with beautiful overlay
   - Contact information (address, phone, email)
   - Interactive "View on Map" button
   - Google Maps modal for directions
   - Responsive layout (side-by-side on desktop, stacked on mobile)

7. **Wedding Schedule Timeline**
   - Vertical timeline with staggered animations
   - Icons for different events (ceremony, reception, dinner, etc.)
   - Time and description for each event
   - Decorative connecting lines

8. **RSVP Form**
   - Guest name and email fields
   - Attendance selection (Yes/No/Maybe)
   - Number of guests dropdown
   - Optional dietary restrictions field
   - Special message/wishes textarea
   - Form validation
   - Success confirmation message
   - Loading state during submission

9. **Decorative Elements**
   - Lotus pattern SVG throughout
   - Floral dividers between sections
   - Subtle animations and transitions
   - Consistent styling and spacing

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with custom fonts
├── globals.css         # Pastel theme colors and animations
└── page.tsx           # Main page with state management

components/wedding-invitation/
├── WeddingIntroduction.tsx    # Seal and initial view
├── HeroSection.tsx            # Main hero content
├── InvitationMessage.tsx      # Wedding invitation text
├── PhotoGallery.tsx           # Image carousel
├── ScratchOffDate.tsx         # Scratch-to-reveal date
├── VenueSection.tsx           # Venue details and map
├── TimelineSection.tsx        # Wedding schedule
├── RSVPForm.tsx              # Guest response form
└── LotusPattern.tsx          # Reusable lotus/floral components

public/
├── wedding-seal.jpg        # Wedding seal image
├── venue.jpg              # Venue photo
├── wedding-photo-1.jpg    # Gallery photo
└── wedding-photo-2.jpg    # Gallery photo
```

## 🎯 Key Features Implementation

### State Management
- Uses React `useState` hook for managing invitation open/close state
- Form state handled within RSVPForm component
- Gallery carousel state for auto-rotation

### Animations
- Smooth fade-in/fade-out transitions
- Staggered animations for timeline and decorative elements
- Canvas-based scratch effect with real-time progress tracking
- Responsive hover effects on interactive elements

### Accessibility
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators for all interactive elements
- Proper button and form labels

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints (md: tablet, lg: desktop)
- Touch-friendly tap targets (44x44px minimum)
- Flexible layouts using flexbox
- Optimized images with Next.js Image component

## 🎨 Color System

The wedding theme uses a carefully selected pastel palette:
- **Primary**: Soft dusty rose (#d4a5a0)
- **Accent**: Warm peach (#e8c5b8)
- **Secondary**: Soft sage green (#c4d9a0)
- **Background**: Off-white with pink tint (#f5e6e0)
- **Foreground**: Soft brown (#3d2625)

## 🔧 Customization

### Update Wedding Details
Edit the main `app/page.tsx` to change:
- Couple names
- Venue information
- Wedding date
- Phone and email

### Update Images
Replace images in the `public/` folder:
- `wedding-seal.jpg` - The initial seal image
- `venue.jpg` - Venue photo
- `wedding-photo-1.jpg` - Gallery photo 1
- `wedding-photo-2.jpg` - Gallery photo 2

### Modify Timeline
Update the events in `TimelineSection.tsx`:
- Times
- Event titles
- Descriptions
- Icons

### Change Colors
Edit the CSS variables in `app/globals.css`:
- `--primary`: Main wedding color
- `--secondary`: Accent colors
- `--background`: Background color
- `--accent`: Highlight color

## 💻 Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS
- **TypeScript** - Type safety
- **Lucide React** - Icons
- **Canvas API** - Scratch-off effect
- **Google Maps Embed API** - Interactive venue map

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

Deploy to Vercel:
```bash
vercel deploy
```

Or use the Vercel dashboard to connect your GitHub repository for automatic deployments.

## 📝 Notes

- The RSVP form currently logs data to the console. Connect it to your backend for actual submissions
- Google Maps API key is embedded - consider using environment variables for production
- All images are sample images and should be replaced with actual wedding photos
- Form validation can be enhanced with additional rules as needed

## 🎁 Credits

Built with love for celebrating beautiful unions. Designed with elegant minimal aesthetic and Indian cultural elements to create a memorable digital experience for your special day.

---

**Couple Names**: Sarah & Arjun  
**Wedding Date**: 15 May 2024  
**Venue**: The Grand Palace, New Delhi  

💕 *Two souls, one destiny* 💕
