# Jax FL Pressure Washing Website

A professional, responsive website for Jax FL Pressure Washing, a pressure washing company serving Jacksonville, Florida. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized images, lazy loading, and efficient code structure
- **Contact Form**: Interactive quote request form with validation
- **Gallery**: Before/after photo showcase with lightbox modal
- **Testimonials**: Customer reviews and ratings display

## 🎨 Design System

### Color Palette
- **Primary**: Deep Ocean Blue (#004e7c)
- **Secondary**: Bright Turquoise (#00b3b8)
- **Eco Accent**: Leaf Green (#5faa46)
- **Attention**: Sunset Orange (#f15a24)
- **Neutral**: Dark Gray (#333333) and White (#ffffff)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
jax_fl_pressure_washing/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind directives
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── gallery/           # Gallery page
│   ├── testimonials/      # Testimonials page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── ServicesSection.tsx # Services overview
│   ├── AboutPreview.tsx   # About preview
│   ├── TestimonialsSection.tsx # Testimonials overview
│   ├── CTASection.tsx     # Call-to-action section
│   ├── Footer.tsx         # Footer component
│   ├── ServicesDetail.tsx # Detailed services
│   ├── AboutDetail.tsx    # Detailed about
│   ├── GalleryGrid.tsx    # Gallery grid with modal
│   ├── TestimonialsDetail.tsx # Detailed testimonials
│   ├── ContactForm.tsx    # Contact form
│   └── ContactInfo.tsx    # Contact information
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jax_fl_pressure_washing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Home Page (`/`)
- Hero section with value proposition
- Services overview
- About preview
- Testimonials preview
- Call-to-action section

### Services (`/services`)
- Detailed service descriptions
- Benefits and process steps
- Service categories

### About (`/about`)
- Company story and mission
- Team information
- Certifications and credentials
- Environmental commitment

### Gallery (`/gallery`)
- Before/after photo showcase
- Category filtering
- Lightbox modal for enlarged views

### Testimonials (`/testimonials`)
- Customer reviews and ratings
- Statistics and achievements
- Why customers choose us

### Contact (`/contact`)
- Quote request form
- Company contact information
- Service areas
- Business hours

## 🎯 Customization

### Company Information
Update the following files with your company details:
- `components/ContactInfo.tsx` - Contact details and business hours
- `components/Footer.tsx` - Company info and social media links
- `app/layout.tsx` - Meta tags and site title

### Content Updates
- **Services**: Modify `components/ServicesSection.tsx` and `components/ServicesDetail.tsx`
- **Testimonials**: Update `components/TestimonialsSection.tsx` and `components/TestimonialsDetail.tsx`
- **Gallery**: Replace placeholder images in `components/GalleryGrid.tsx`
- **About**: Customize company story in `components/AboutDetail.tsx`

### Styling
- **Colors**: Update `tailwind.config.js` with your brand colors
- **Typography**: Modify font settings in `tailwind.config.js` and `app/globals.css`
- **Layout**: Adjust spacing and sizing in component files

## 📸 Images

The website uses placeholder images from Unsplash. Replace these with your actual:
- Company photos
- Before/after pressure washing results
- Team member photos
- Service area photos

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
NEXT_PUBLIC_CONTACT_EMAIL=your_email@domain.com
NEXT_PUBLIC_PHONE_NUMBER=your_phone_number
```

### Google Maps Integration
To add a real Google Maps embed:
1. Get a Google Maps API key
2. Replace the placeholder in `components/ContactInfo.tsx`
3. Add the API key to your environment variables

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command: `npm run build`, publish directory: `.next`
- **AWS Amplify**: Build command: `npm run build`
- **Traditional hosting**: Build locally and upload the `.next` folder

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **SEO**: Meta tags, structured data, and semantic HTML

## 🔒 Security

- **Form Validation**: Client-side and server-side validation
- **XSS Protection**: React's built-in XSS protection
- **HTTPS**: Enforced in production environments

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first approach
- **Touch-Friendly**: Optimized for mobile interactions
- **Performance**: Optimized for mobile networks

## 🎨 Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant color combinations
- **Semantic HTML**: Proper heading structure and landmarks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions about this website template, please contact the development team.

---

**Built with ❤️ for Jax FL Pressure Washing**
