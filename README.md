# Milan Bomjan - QA Engineer Portfolio

A modern, interactive portfolio website showcasing my journey as a Quality Assurance Engineer with expertise in test automation, security testing, and SDLC processes.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Playwright](https://img.shields.io/badge/Playwright-00B300?style=for-the-badge)

## 🌐 Live Demo

[View Portfolio](https://milan-portfolio-demo.vercel.app) *(Add your deployed URL)*

## ✨ Features

- **Modern & Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Interactive Carousels** - Horizontal carousel navigation for Skills and Projects
- **Smooth Animations** - Engaging transitions and fade-in effects
- **Professional Typography** - Custom fonts with optimal readability
- **Contact Integration** - Direct links to email, phone, and social profiles (LinkedIn, GitHub, Facebook)
- **Resume Download** - One-click PDF resume download
- **Dark/Light Theme Ready** - Custom CSS variables for easy theming

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14+ (React framework)
- React 18+ (UI library)
- CSS3 (Custom styling with variables)
- React Icons (Icon library)

**Tools & Testing:**
- ESLint (Code quality)
- JavaScript ES6+

**Deployment:**
- Vercel (Recommended)
- GitHub Pages

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles & responsive breakpoints
│   ├── layout.js             # Root layout component
│   └── page.js               # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx        # Navigation header
│   │   └── Footer.jsx        # Footer section
│   ├── sections/
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About me with profile image
│   │   ├── Skills.jsx        # Skills carousel
│   │   ├── Experience.jsx    # Work experience
│   │   ├── Projects.jsx      # Projects carousel
│   │   ├── Resume.jsx        # Education & resume download
│   │   └── Contact.jsx       # Contact information
│   └── ui/
│       ├── Button.jsx        # Reusable button component
│       ├── Container.jsx     # Layout container
│       └── SectionTitle.jsx  # Section title component
├── data/
│   ├── skills.js             # Skills categories
│   ├── projects.js           # Project data
│   ├── experience.js         # Work experience data
│   └── resume.pdf            # Resume file
└── lib/
    └── utils.js              # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/MEELAN2001/milan-portfolio.git
cd milan-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Personal Information

**Edit `src/components/sections/About.jsx`:**
- Change bio text
- Update location, email, phone
- Modify professional details

**Edit `src/data/skills.js`:**
- Add/remove skill categories
- Update technology lists

**Edit `src/data/projects.js`:**
- Add new projects
- Update GitHub links and descriptions

**Edit `src/data/experience.js`:**
- Update work experience
- Add education details

### Add Resume

Replace `public/Milan_Resume.pdf` with your own resume file. The download link is configured in [src/components/sections/Resume.jsx](src/components/sections/Resume.jsx).

### Update Social Links

Edit `src/components/sections/Contact.jsx`:
- LinkedIn profile URL
- GitHub profile URL
- Facebook profile URL

## 🎨 Design Features

**Color Scheme:**
- Primary Accent: `#e85d04` (Orange)
- Secondary Accent: `#b54a00` (Dark Orange)
- Background: `#fafaf8` (Light cream)
- Cards: `#f3f2ee` (Light beige)

**Typography:**
- Display Font: Fraunces (serif)
- Mono Font: Space Mono (monospace)

**Responsive Breakpoints:**
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 📊 Sections Overview

| Section | Description |
|---------|------------|
| **Hero** | Welcome message with CTA buttons |
| **About** | Profile picture, bio, and contact details |
| **Skills** | Interactive carousel of technical skills |
| **Experience** | Professional work experience timeline |
| **Projects** | Carousel showcasing completed projects with links |
| **Resume** | Education and resume download button |
| **Contact** | Social media links and contact information |

## 🎯 Key Components

### Skills Carousel
- One skill category at a time
- Left/right arrow navigation
- Dot indicators for position tracking
- Smooth slide animations

### Projects Carousel
- Full project details (title, description, stack, links)
- Navigation arrows
- Dot indicators
- GitHub repo and live demo links

## 📱 Responsive Design

All components are fully responsive with optimized layouts for:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## 🔧 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployments on push

[Learn more about Vercel Deployment](https://vercel.com/docs)

### Deploy to GitHub Pages

```bash
npm run export
# Upload /out folder to GitHub Pages
```

## 📞 Contact Information

- **Email:** mailmilan.bomjan@gmail.com
- **Phone:** +977 9841907159
- **Location:** Kathmandu, Nepal
- **LinkedIn:** [milan-bomjan-tamang](https://linkedin.com/in/milan-bomjan-tamang-918167239/)
- **GitHub:** [@MEELAN2001](https://github.com/MEELAN2001)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project, make improvements, and submit pull requests. Any suggestions and feedback are welcome!

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- React community for excellent libraries
- Vercel for hosting and deployment tools
- Font designers for Fraunces and Space Mono

---

**Made with ❤️ by Milan Bomjan**
