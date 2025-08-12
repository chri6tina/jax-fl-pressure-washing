# 🚀 Hero Section Spacing - Quick Reference

## ⚡ **Copy & Paste Templates**

### **✅ Standard Hero Section:**
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/hero_section.png')" }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 container-custom text-center text-neutral-white px-4">
    {/* Your content here */}
    
    {/* CTA Buttons - ALWAYS use mb-24 */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
      {/* Your CTA buttons */}
    </div>
  </div>

  {/* Scroll Indicator - ALWAYS use bottom-16 */}
  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
    {/* Scroll indicator content */}
  </div>
</section>
```

## 📏 **Required Spacing Values**

| Element | Class | Spacing | Why Required |
|---------|-------|---------|--------------|
| **Hero Top** | `pt-20` | 5rem | Prevents nav overlap |
| **Hero Bottom** | `pb-32` | 8rem | Space below content |
| **CTA Container** | `mb-24` | 6rem | Prevents collision |
| **Scroll Indicator** | `bottom-16` | 4rem | Safe positioning |

## 🚨 **Never Use These Values:**

```tsx
// ❌ FORBIDDEN - Will cause collisions
className="bottom-8"    // Too close to buttons
className="bottom-4"    // Guaranteed collision
className="mb-8"        // Insufficient spacing
className="mb-4"        // Will overlap
```

## 🔧 **Use Standardized Components:**

```tsx
import HeroSection from '@/components/HeroSection'
import CTAButtonContainer from '@/components/CTAButtonContainer'

<HeroSection>
  <CTAButtonContainer>
    {/* Your buttons - spacing automatically handled */}
  </CTAButtonContainer>
</HeroSection>
```

## ⚡ **Quick Commands:**

```bash
# Check all hero sections for spacing issues
npm run check-hero

# Run full pre-commit checks
npm run pre-commit

# Manual ESLint check
npm run lint
```

## 🎯 **Remember:**
- **Always** use `pt-20 pb-32` on hero sections
- **Always** use `mb-24` on CTA containers  
- **Always** use `bottom-16` on scroll indicators
- **Never** use `bottom-8` or `mb-8`

---
**📖 Full details: [DEVELOPMENT_STANDARDS.md](./DEVELOPMENT_STANDARDS.md)**
