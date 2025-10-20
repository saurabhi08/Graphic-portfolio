# Web Design Portfolio

A modern, responsive portfolio website to showcase your web design and graphic design projects.

## Features

✨ **Modern Design**
- Clean and professional layout
- Smooth animations and transitions
- Beautiful gradient effects
- Responsive design for all devices

🎨 **Project Showcase**
- Filter projects by category (Web Design / Graphic Design)
- Interactive project cards
- Modal popup with detailed project information
- Customizable project data

📱 **Fully Responsive**
- Mobile-first approach
- Works seamlessly on desktop, tablet, and mobile
- Responsive navigation with hamburger menu

🎯 **Sections Included**
- Hero section with call-to-action
- About section with statistics
- Projects portfolio with filtering
- Skills section with animated progress bars
- Contact form
- Social media links

## Getting Started

### 1. Open the Portfolio

Simply open `portfolio.html` in your web browser to view your portfolio.

### 2. Customize Your Information

#### Personal Information

Edit the following in `portfolio.html`:

- **Line 6**: Change the page title
- **Lines 46-48**: Update hero section text
- **Lines 66-70**: Update about section content
- **Lines 72-82**: Customize statistics
- **Lines 178-192**: Update contact information
- **Lines 195-197**: Add your social media links
- **Line 218**: Update footer with your name

#### Projects

Edit the `projects` array in `js/portfolio.js` (starting at line 2):

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Title",
        category: "web", // or "graphic"
        description: "Short description for card",
        fullDescription: "Detailed description for modal",
        image: "path/to/your/image.jpg", // Optional
        tech: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://your-project-url.com",
        codeLink: "https://github.com/your-repo" // Optional
    },
    // Add more projects...
];
```

**Tips for Projects:**
- Use `category: "web"` for web design projects
- Use `category: "graphic"` for graphic design projects
- Leave `image: ""` empty to use default icons
- Set `codeLink: null` if there's no code repository (for graphic projects)

#### Skills

Edit the skills section in `portfolio.html` (lines 124-167):

- Update skill names
- Adjust progress bar percentages by changing `style="width: 95%"` values
- Add or remove skills as needed

#### Colors & Styling

Customize colors in `css/portfolio-style.css` (lines 2-13):

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* Modify these to match your brand */
}
```

### 3. Add Your Images

1. Create an `images` folder in your project directory
2. Add your project images, profile photo, etc.
3. Update image paths in the HTML and JavaScript files

**Recommended Image Sizes:**
- Profile photo: 250x250px (circular)
- Project images: 700x500px
- Social media graphics: Various sizes

### 4. Contact Form Setup

The current contact form shows an alert message. To make it functional:

1. **Option 1: Using a form service (Formspree, Netlify Forms, etc.)**
   - Sign up for a form service
   - Update the form action in `portfolio.html`

2. **Option 2: Using EmailJS**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Add EmailJS SDK to your HTML
   - Update the form handler in `js/portfolio.js`

3. **Option 3: Backend integration**
   - Set up your own backend server
   - Update the form submission handler in `js/portfolio.js`

## File Structure

```
web portfolio/
│
├── portfolio.html           # Main HTML file
├── css/
│   └── portfolio-style.css  # All styling
├── js/
│   └── portfolio.js         # All JavaScript functionality
├── images/                  # Your images (create this folder)
│   ├── profile.jpg
│   ├── project1.jpg
│   └── ...
└── README.md               # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization Tips

### Add More Projects

Simply add more project objects to the `projects` array in `js/portfolio.js`. The grid will automatically adjust.

### Change Animations

Edit animation properties in `css/portfolio-style.css` starting at line 720.

### Modify Layout

All grid layouts use CSS Grid. Adjust `grid-template-columns` values to change layouts:
- Projects grid: Line 355
- Skills grid: Line 452
- Contact section: Line 511

### Add New Sections

1. Create section in HTML with `id` attribute
2. Add navigation link in the navbar
3. Style the section in CSS
4. The smooth scroll will work automatically

## Dependencies

This portfolio uses:
- **Font Awesome 6.4.0** (for icons) - loaded from CDN
- Pure HTML, CSS, and JavaScript - no frameworks required

## Performance

- Lightweight and fast loading
- Optimized animations
- Lazy loading for images (recommended to implement)
- No external dependencies except Font Awesome

## SEO Tips

1. Update meta tags in the `<head>` section
2. Add alt text to all images
3. Use semantic HTML (already implemented)
4. Create a sitemap.xml if hosting online

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access at: `https://yourusername.github.io/repository-name`

### Netlify
1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Get instant hosting with HTTPS

### Vercel
1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## Support & Customization

For questions or custom modifications:
- Add comments in your code for clarity
- Test on multiple devices and browsers
- Use browser DevTools for debugging

## License

This portfolio template is free to use for personal and commercial projects.

---

**Good luck with your portfolio! 🚀**

Remember to:
- [ ] Customize all text content
- [ ] Add your projects
- [ ] Update contact information
- [ ] Add your images
- [ ] Test on mobile devices
- [ ] Deploy online

