# International House Business Centre Website

A modern, responsive website for International House Business Centre in Canvey Island, Essex. This React-based website showcases the business centre's facilities, services, and provides an easy way for potential tenants to get in touch.

## 🏢 About International House

International House Business Centre is located on Charfleets Road, Canvey Island, Essex (SS8 0PQ). The facility offers:

- **20,000 sq ft** of modern office space
- **22+ active businesses** in the community
- **50 parking spaces** with CCTV monitoring
- **24/7 access** with secure entry
- Flexible office solutions from £950/month

## 🚀 Features

### Modern Design
- Clean, professional design with blue color scheme
- Responsive layout for all devices
- Smooth animations and transitions
- Modern typography using Inter font

### Pages
- **Home**: Hero section, features, amenities, testimonials
- **About**: Company story, values, team, community
- **Services**: Office spaces, amenities, additional services
- **Contact**: Contact form, location, opening hours

### Technical Features
- React 18 with functional components
- React Router for navigation
- Framer Motion for animations
- Tailwind CSS for styling
- Lucide React for icons
- Responsive design
- Form handling with validation
- Interactive elements and hover effects

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd international-house-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Footer.js          # Footer component
├── pages/
│   ├── Home.js            # Homepage
│   ├── About.js           # About page
│   ├── Services.js        # Services page
│   └── Contact.js         # Contact page
├── App.js                 # Main app component
├── index.js               # Entry point
└── index.css              # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9 to #0c4a6e)
- **Secondary**: Gray scale
- **Accent**: White and light grays

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary (blue) and Secondary (outline)
- **Cards**: White background with shadows
- **Sections**: Alternating backgrounds for visual separation

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 320px to 767px

## 🚀 Deployment

To build the project for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📞 Contact Information

**International House Business Centre**
- **Phone**: 01268 916 030
- **Email**: Space@Intlhouse.co.uk
- **Address**: Charfleets Road, Canvey Island, Essex SS8 0PQ

## 🎯 Business Information

### Office Space Options
- **FF17**: 586 sq ft - £950/month
- **FF18**: 2,508 sq ft - £1,800/month
- **FF19**: Second floor - £3,000/month

### Amenities
- Manned reception and telephone-answer service
- Central Hub with bistro/café
- Meeting & training rooms
- Shared kitchenettes and breakout spaces
- Private gated parking with CCTV
- Leased-line superfast broadband
- 24/7 access with secure entry

### Business Types
The centre houses diverse businesses including:
- Legal & Professional Services
- Digital Marketing & Creative
- Beauty & Wellness Services
- Training & Education
- Film Production & Media

## 🔧 Customization

### Colors
Update the primary colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... other shades
    900: '#0c4a6e',
  }
}
```

### Content
Update business information in the respective page components:
- Contact details in `Navbar.js` and `Footer.js`
- Office space details in `Services.js`
- Company information in `About.js`

## 📄 License

This project is created for International House Business Centre. All rights reserved.

## 🤝 Contributing

This is a client project for International House Business Centre. For any modifications or improvements, please contact the development team.

---

**Built with ❤️ for International House Business Centre** 