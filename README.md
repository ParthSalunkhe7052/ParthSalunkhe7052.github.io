# 🚀 Parth Salunkhe - Personal Portfolio

![Portfolio Website](https://img.shields.io/badge/Status-Live-success)
![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-blue)

A modern, responsive personal portfolio website showcasing my expertise in **Cybersecurity**, **AI/Machine Learning**, and **Full-Stack Development**.

🌐 **Live Website:** [https://parth7.me](https://parth7.me)

## ✨ Features

- **Modern Design**: Clean, professional interface with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **SEO Optimized**: Comprehensive meta tags for search engines and social media sharing
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Custom 404 Page**: User-friendly error handling
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library
- **CSS3** - Custom styling with gradients and animations

### Deployment
- **GitHub Pages** - Free, reliable hosting
- **Custom Domain** - parth7.me via DNS configuration
- **gh-pages** - Automated deployment tool

## 📁 Project Structure

```
MyWebsite/
├── public/
│   ├── favicon.svg          # Custom favicon
│   ├── favicon.ico          # Legacy favicon
│   ├── apple-touch-icon.png # iOS home screen icon
│   ├── robots.txt           # SEO crawler instructions
│   └── 404.html             # Custom error page
├── src/
│   ├── components/
│   │   ├── About.jsx        # About Me section
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero/Landing section
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── Projects.jsx     # Projects showcase
│   ├── assets/              # Images and static files
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── CNAME                    # Custom domain configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ParthSalunkhe7052/ParthSalunkhe7052.github.io.git
   cd ParthSalunkhe7052.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Deployment

### GitHub Pages Deployment

This website is configured for automatic deployment to GitHub Pages:

1. **Build and deploy**
   ```bash
   npm run deploy
   ```

2. The `gh-pages` package will:
   - Build the production bundle
   - Create/update the `gh-pages` branch
   - Push the built files to GitHub

3. **GitHub Pages Settings**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Custom domain: `parth7.me`
   - Enforce HTTPS: ✓

### DNS Configuration (for custom domain)

Add these DNS records at your domain registrar:

```
Type: A     Name: @       Value: 185.199.108.153
Type: A     Name: @       Value: 185.199.109.153
Type: A     Name: @       Value: 185.199.110.153
Type: A     Name: @       Value: 185.199.111.153
Type: CNAME Name: www     Value: ParthSalunkhe7052.github.io
```

## 📊 SEO Features

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social media previews
- Twitter Card support
- Canonical URLs
- robots.txt for search engine crawlers
- Semantic HTML structure
- Mobile-friendly responsive design

## 🎨 Design Features

- **Color Scheme**: Dark navy background with cyan-to-purple gradients
- **Typography**: Inter and Space Grotesk from Google Fonts
- **Icons**: Lucide React icon library
- **Animations**: Smooth transitions and hover effects
- **Layout**: Clean, modern card-based design

## 📧 Contact

**Parth Salunkhe**
- 🌐 Website: [parth7.me](https://parth7.me)
- 💼 LinkedIn: [linkedin.com/in/parth-salunkhe](https://www.linkedin.com/in/parth-salunkhe)
- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 🐱 GitHub: [github.com/ParthSalunkhe7052](https://github.com/ParthSalunkhe7052)

## 📄 License

This project is licensed under the MIT License - feel free to use this as a template for your own portfolio!

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Deployed on [GitHub Pages](https://pages.github.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**⭐ If you like this project, please consider giving it a star on GitHub!**
