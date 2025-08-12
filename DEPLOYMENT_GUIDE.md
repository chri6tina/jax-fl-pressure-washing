# 🚀 Jax FL Pressure Washing - Deployment Guide

## 📋 **Deployment Overview**

Your Jax FL Pressure Washing website is now ready for deployment! This guide will walk you through publishing your site and connecting it to your Squarespace domain.

## 🎯 **Deployment Options**

### **Option 1: Vercel (Recommended for Next.js)**
- **Free hosting** with automatic deployments
- **Perfect for Next.js** applications
- **Easy domain connection**
- **Automatic SSL certificates**

### **Option 2: Netlify**
- **Free hosting** with good performance
- **Easy deployment** from Git
- **Good for static sites**

### **Option 3: Traditional Hosting**
- **Shared hosting** (HostGator, Bluehost, etc.)
- **VPS hosting** (DigitalOcean, Linode)
- **Requires manual setup**

## 🚀 **Recommended: Vercel Deployment**

### **Step 1: Prepare Your Repository**
```bash
# Your repository is already initialized and committed
git status  # Should show clean working directory
```

### **Step 2: Create GitHub Repository**
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name: `jax-fl-pressure-washing`
4. Description: "Professional pressure washing website for Jacksonville, Florida"
5. Make it Public or Private (your choice)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### **Step 3: Connect Local Repository to GitHub**
```bash
# Add the remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jax-fl-pressure-washing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### **Step 4: Deploy on Vercel**
1. Go to [Vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your `jax-fl-pressure-washing` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### **Step 5: Connect Your Domain**
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your Squarespace domain
4. Follow Vercel's DNS configuration instructions

## 🔗 **Squarespace Domain Configuration**

### **If Using Vercel:**
1. **In Vercel**: Add your domain (e.g., `yourdomain.com`)
2. **In Squarespace**: Update DNS records as Vercel instructs
3. **Wait for propagation** (can take up to 48 hours)

### **If Using Traditional Hosting:**
1. **Update nameservers** in Squarespace to point to your hosting provider
2. **Upload files** via FTP or hosting control panel
3. **Configure hosting** for Next.js

## 🏗️ **Build and Test Locally**

Before deploying, test your build:

```bash
# Install dependencies (if not already done)
npm install

# Build the project
npm run build

# Test the build locally
npm start
```

## 📱 **Performance Optimization**

### **Images**
- ✅ Hero image optimized
- ✅ Service images ready for optimization
- ✅ Responsive design implemented

### **SEO**
- ✅ Meta tags configured
- ✅ Service pages optimized
- ✅ Location pages ready
- ✅ 21 service pages complete

### **Mobile**
- ✅ Responsive design
- ✅ Touch-friendly navigation
- ✅ Fast loading

## 🔧 **Environment Variables (if needed)**

Create `.env.local` for any API keys or configuration:

```bash
# Example (if you add contact form functionality later)
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
CONTACT_FORM_API_KEY=your_api_key
```

## 📊 **Post-Deployment Checklist**

- [ ] Website loads correctly
- [ ] All 21 service pages accessible
- [ ] Search functionality works
- [ ] Contact form functional
- [ ] Mobile responsive
- [ ] Domain properly connected
- [ ] SSL certificate active
- [ ] Google Analytics connected (if desired)
- [ ] Search console submitted

## 🆘 **Troubleshooting**

### **Build Errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### **Domain Issues**
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify nameserver configuration
- Wait up to 48 hours for full propagation

### **Performance Issues**
- Use Vercel Analytics
- Optimize images with Next.js Image component
- Enable compression

## 📞 **Support Resources**

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Squarespace DNS Help**: [support.squarespace.com](https://support.squarespace.com)

## 🎉 **Success!**

Once deployed, your website will be:
- **Live and accessible** to customers
- **SEO optimized** for local search
- **Mobile responsive** for all devices
- **Professional appearance** building trust
- **Easy to maintain** and update

---

**Ready to deploy?** Follow the steps above and your Jax FL Pressure Washing website will be live on the internet! 🚀
