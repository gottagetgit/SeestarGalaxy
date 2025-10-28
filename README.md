# My Night Sky

A beautiful, responsive website showcasing celestial objects from our night sky.

## Features

- **119 Celestial Objects**: Displays all 110 Messier objects, 8 planets, and the Sun
- **Responsive Grid Layout**: Automatically adapts to different screen sizes
- **Interactive Modal**: Click on any available image to view it in full size
- **Smart Placeholder System**: Shows a placeholder for missing images
- **Modern Design**: Beautiful dark theme with gradient backgrounds and smooth animations

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and object data
├── images/             # Directory for your photos
│   └── notyet.svg      # Placeholder image (SVG format)
└── README.md           # This file
```

## How to Use

1. **Add Your Photos**: Save your celestial object photos in the `images/` directory using the following naming convention:
   - **Messier Objects**: `M1.jpg`, `M2.jpg`, `M3.jpg`, etc. (up to M110)
   - **Planets**: `Mercury.jpg`, `Venus.jpg`, `Earth.jpg`, `Mars.jpg`, `Jupiter.jpg`, `Saturn.jpg`, `Uranus.jpg`, `Neptune.jpg`
   - **Sun**: `Sun.jpg`

2. **View the Website**: Open `index.html` in your web browser

3. **Interact**: 
   - Click on any available image to view it in full size
   - Click the X button or press Escape to close the modal
   - Images that don't exist will show a placeholder and are not clickable

## Object Information

The website includes traditional names for many Messier objects, such as:
- M1: Crab Nebula
- M8: Lagoon Nebula
- M13: Great Hercules Cluster
- M27: Dumbbell Nebula
- M31: Andromeda Galaxy
- M42: Orion Nebula
- M45: Pleiades
- M51: Whirlpool Galaxy
- M57: Ring Nebula
- M81: Bode's Galaxy
- M82: Cigar Galaxy
- M101: Pinwheel Galaxy
- M104: Sombrero Galaxy

And many more!

## Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern CSS**: Uses CSS Grid, Flexbox, and modern animations
- **Accessibility**: Proper semantic HTML and keyboard navigation support
- **Performance**: Efficient image loading with error handling

## Browser Support

Works in all modern browsers including:
- Chrome/Edge (Chromium-based)
- Firefox
- Safari
- Mobile browsers

Enjoy exploring your night sky collection!
