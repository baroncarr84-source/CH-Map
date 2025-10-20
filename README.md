[README.md](https://github.com/user-attachments/files/23004535/README.md)
# Charles Hill Social Services Map

An interactive web application mapping 55 essential social service locations in the Charles Hill neighborhood of Harlem, New York.

![Charles Hill Map](https://via.placeholder.com/800x400/667eea/ffffff?text=Charles+Hill+Social+Services+Map)

## 🎯 Project Overview

This project provides an accessible, interactive map to help Charles Hill residents locate essential community services including healthcare, food assistance, legal aid, education, and more.

**Live Demo:** [Add your deployed URL here]

## ✨ Features

- **Interactive Map**: Click markers to view detailed service information
- **Category Filtering**: Filter services by 8 different categories
- **Real Street Maps**: Built with OpenStreetMap for accurate navigation
- **Service Directory**: Browse all 55 services in a searchable grid
- **Mobile Responsive**: Works seamlessly on all devices
- **Color-Coded**: Easy visual identification by service type

## 📊 Service Categories

- 🏛️ **Government Offices** (6 locations)
- ❤️ **Health Services** (7 locations)
- ⚖️ **Legal Services** (5 locations)
- 📚 **Education & Youth** (9 locations)
- 🍽️ **Food Pantries** (8 locations)
- 📮 **Postal Services** (5 locations)
- 💰 **Financial Services** (8 locations)
- 🤝 **Community Organizations** (7 locations)

**Total: 55 Services Documented**

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Installation

1. **Download the project files:**
   ```bash
   git clone https://github.com/yourusername/charles-hill-map.git
   cd charles-hill-map
   ```

2. **Open in browser:**
   - Simply double-click `index.html`
   - Or drag `index.html` into your browser
   - That's it! No installation needed.

### File Structure

```
charles-hill-map/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Leaflet.js** - Open-source mapping library
- **OpenStreetMap** - Map tile provider

## 🛠️ Development

### Local Development

1. Open the project folder
2. Edit files in your favorite code editor (VS Code, Sublime, etc.)
3. Refresh browser to see changes
4. No build process required!

### Customization

**Change Colors:**
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #667eea;     /* Primary color */
    --secondary: #764ba2;   /* Secondary color */
    --dark: #1a1a2e;        /* Dark background */
}
```

**Add New Services:**
Edit the `resources` array in `script.js`:
```javascript
resources.push({
    id: 56,
    name: 'New Service Name',
    address: '123 Main St',
    category: 'health',
    lat: 40.8070,
    lng: -73.9470
});
```

## 🌐 Deployment

### GitHub Pages (Free)

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch
4. Your site will be live at: `username.github.io/repo-name`

### Netlify (Free)

1. Drag your project folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Get instant live URL
3. Automatic HTTPS and CDN

### Vercel (Free)

```bash
npm install -g vercel
vercel
```

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Data Sources

- NYC Open Data
- Community organization directories
- Government agency listings
- On-the-ground verification (October 2025)

## 🤝 Contributing

Contributions are welcome! To suggest a service addition or correction:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/add-service`)
3. Commit your changes (`git commit -m 'Add new service'`)
4. Push to the branch (`git push origin feature/add-service`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)
- Portfolio: [yourwebsite.com](https://yourwebsite.com)

## 🙏 Acknowledgments

- Charles Hill community organizations
- OpenStreetMap contributors
- Leaflet.js development team
- Community members who verified service information

## 📞 Contact

For questions, corrections, or suggestions:
- Open an issue on GitHub
- Email: your.email@example.com
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

## 🔄 Updates

**v1.0.0** (October 2025)
- Initial release
- 55 services mapped
- 8 service categories
- Full mobile support

---

**Note:** Service information was accurate as of October 2025. Operating hours, locations, and availability may change. Please verify before visiting.

## 🗺️ Future Enhancements

- [ ] Add operating hours for each service
- [ ] Include phone numbers and websites
- [ ] Distance calculator from user location
- [ ] Multi-language support (Spanish)
- [ ] Print-friendly directory version
- [ ] Service ratings and reviews
- [ ] Transit directions integration
- [ ] Offline PWA functionality

---

Made with ❤️ for the Charles Hill community
