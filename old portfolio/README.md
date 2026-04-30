# Phani Kumar Portfolio - React Version

A modern React portfolio website converted from static HTML pages. Built with React 19, React Router for navigation, and Vite for fast development and optimized builds.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and React Router v7 for seamless navigation
- **Responsive Design**: Mobile-first design that works on all devices
- **Page Transitions**: Smooth animations between pages
- **Optimized Build**: Vite for lightning-fast development and production builds
- **PWA Ready**: Service worker and manifest.json for progressive web app capabilities
- **Dark Theme**: Modern dark UI with gradient accents and animations

## 📁 Project Structure

```
src/
├── pages/                 # Page components
│   ├── Home.jsx          # Landing/Welcome page with terminal UI
│   ├── Certifications.jsx # Certifications showcase
│   ├── Educations.jsx    # Education timeline
│   ├── Projects.jsx      # Projects gallery
│   ├── Publications.jsx  # Publications/Books
│   └── Skills.jsx        # Skills showcase
├── components/           # Reusable components
│   └── BackButton.jsx    # Navigation back button
├── styles/              # CSS modules/files
│   ├── global.css       # Global styles
│   ├── home.css         # Home page styles
│   ├── certifications.css
│   ├── educations.css
│   ├── projects.css
│   ├── skills.css
│   ├── publications.css
│   └── backButton.css
├── App.jsx              # Main app with routing
└── main.jsx             # React entry point
```

## 🛠️ Setup & Installation

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Add Assets**
   Copy all image files to the `public/` folder:
   - Profile images (_.jpg, _.jpeg, \*.png)
   - Certification images
   - Project images
   - Education institution logos
   - etc.

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 🔨 Build & Deployment

**Build for production:**

```bash
npm run build
```

**Preview production build locally:**

```bash
npm run preview
```

The build output will be in the `dist/` folder, ready for deployment.

## 📦 Dependencies

- **React 19.2.5** - UI library
- **React Router v7.14.2** - Client-side routing
- **React DOM 19.2.5** - React rendering
- **Vite 8.0.10** - Build tool
- **@vitejs/plugin-react** - Vite React support

## 🎨 Pages

### 1. Home (/)

Terminal-style landing page with typewriter animation and navigation menu to all sections.

### 2. Certifications (/certifications)

Grid showcase of professional certifications and credentials.

### 3. Educations (/educations)

Timeline view of educational background and institutions.

### 4. Projects (/projects)

Gallery of projects with descriptions, technologies used, and images.

### 5. Publications (/publications)

Showcase of published works, books, and articles.

### 6. Skills (/skills)

Categorized skills and technical expertise display.

## 🚀 Key Features Implemented

- ✅ **React Router Navigation**: Smooth page transitions without full page reloads
- ✅ **Responsive Layout**: Mobile-friendly design with media queries
- ✅ **Animated Backgrounds**: Gradient backgrounds with float animations
- ✅ **Terminal UI**: Unique terminal-style landing page with typewriter effect
- ✅ **Reusable Components**: BackButton component shared across pages
- ✅ **CSS Modules**: Organized and scoped styling
- ✅ **Fast Development**: Vite's HMR (Hot Module Replacement) for instant feedback
- ✅ **Production Ready**: Optimized build with code splitting

## 🎯 Customization

To customize the portfolio:

1. **Update Content**: Edit component data arrays in each page file
2. **Modify Colors**: Change CSS variables in the `:root` selector in each CSS file
3. **Add New Pages**: Create new components in `src/pages/` and add routes in `App.jsx`
4. **Update Images**: Place images in `public/` folder and reference them in components

## 📱 PWA Support

The project includes PWA capabilities:

- `public/manifest.json` - App manifest
- Service worker registration ready

To enable service worker:

1. Create `public/service-worker.js`
2. Register it in `main.jsx`

## 📝 Notes on Migration

- Original HTML files were converted to React components
- Inline styles were extracted to separate CSS files
- Navigation was implemented using React Router
- Terminal UI from original landing page preserved with animations
- All responsive design patterns maintained

## 🔄 Deployment

Ready to deploy to:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Connect GitHub repo directly
- **GitHub Pages**: Build and push `dist/` folder
- **AWS Amplify**: Use CI/CD pipelines
- **Any static host**: Upload `dist/` folder contents

## 📄 License

Personal portfolio project.

## 👤 Author

**Phani Kumar**

- Portfolio: [Your Website]
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

**Happy coding! 🎉**
