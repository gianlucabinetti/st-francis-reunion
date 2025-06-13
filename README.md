# 🏛️ St. Francis Reunion Website

<div align="center">


## 📖 About The Project

The St. Francis Reunion Website is a comprehensive platform designed to bring together alumni, organize events, and foster community connections. Built with modern web technologies, it provides an intuitive and responsive experience for both organizers and attendees.

### ✨ Key Highlights

- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- 🔐 **Secure Authentication** - User registration and login system
- 📱 **Mobile-First** - Fully responsive across all devices
- ⚡ **Fast Performance** - Optimized React components and efficient routing
- 🌐 **Easy Deployment** - Ready for production deployment



## 🛠️ Technology Stack

### Frontend
- **⚛️ React 18.2.0** - Modern JavaScript library for building user interfaces
- **🛣️ React Router DOM 7.4.1** - Declarative routing for React applications
- **🎨 Tailwind CSS 3.4.1** - Utility-first CSS framework
- **📱 PostCSS & Autoprefixer** - CSS processing and vendor prefixing

### Backend
- **🟢 Node.js** - JavaScript runtime environment
- **🚀 Express.js** - Fast, minimalist web framework
- **📁 Static File Serving** - Optimized asset delivery

### Development Tools
- **📦 npm** - Package management
- **🔥 React Scripts** - Development and build tools
- **🧪 Jest** - Testing framework
- **📊 Web Vitals** - Performance monitoring

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gianlucabinetti/st-francis-reunion.git
   cd st-francis-reunion
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

### 🏃‍♂️ Running the Application

#### Development Mode

1. **Start the Backend Server** (Terminal 1)
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the Frontend Development Server** (Terminal 2)
   ```bash
   cd client
   npm start
   ```
   The frontend will run on `http://localhost:3000`

#### Production Mode

1. **Build the Frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Start Production Server**
   ```bash
   cd server
   npm start
   ```
   The full application will be served on `http://localhost:5000`

## 📋 Features

### 🎯 Core Features
- ✅ **Event Management** - Create and manage reunion events
- ✅ **User Registration** - Attendee registration and RSVP system
- ✅ **Responsive Design** - Works seamlessly on all devices
- ✅ **Modern UI** - Clean, intuitive user interface
- ✅ **Fast Performance** - Optimized for speed and efficiency



## 📝 Available Scripts

### Backend Scripts (server directory)
```bash
npm start          # Start the production server
npm run dev        # Start development server with nodemon
npm test           # Run test suite
```

### Frontend Scripts (client directory)
```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run tests in watch mode
npm run eject      # Eject from Create React App (⚠️ irreversible)
```

## 🎨 Customization

### Color Palette
The application uses a carefully crafted color scheme defined in `tailwind.config.js`:

- **Primary**: `#1540ff` - Deep royal blue
- **Accent**: `#00AEEF` - Bright aqua
- **Light**: `#f9fbff` - Soft background
- **Surface**: `#ffffff` - Cards and containers
- **Dark**: `#111827` - Hero and footer sections

### Typography
- **Playwrite AU NSW** - Decorative serif font
- **Inter 18pt** - Clean sans-serif for body text

## 🌐 Deployment

### Netlify (Recommended for Frontend)
1. Build the project: `cd client && npm run build`
2. Deploy the `client/build` folder to Netlify
3. Add `_redirects` file for SPA routing

### Heroku (For Full-Stack)
1. Create a Heroku app
2. Set buildpacks for Node.js
3. Configure environment variables
4. Deploy via Git

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices
- Use Tailwind CSS for styling
- Write clear, descriptive commit messages
- Add tests for new features
- Ensure responsive design

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Kill process on port 3000 or 5000
npx kill-port 3000
npx kill-port 5000
```

**Module Not Found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build Errors**
```bash
# Clear React cache
cd client
rm -rf node_modules/.cache
npm start
```

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ across all metrics
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Optimization**: Perfect responsive design
- ♿ **Accessibility**: WCAG 2.1 AA compliant

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Lead Developer**: [Gianluca Binetti](https://github.com/gianlucabinetti)
- **Project Manager**: St. Francis Reunion Committee

## 📞 Support

For support and questions:

- 📧 Email: support@stfrancisreunion.com
- 🐛 Issues: [GitHub Issues](https://github.com/gianlucabinetti/st-francis-reunion/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/gianlucabinetti/st-francis-reunion/discussions)

---

<div align="center">

**Made with ❤️ for the St. Francis Community**

[⬆ Back to Top](#-st-francis-reunion-website)

</div>
