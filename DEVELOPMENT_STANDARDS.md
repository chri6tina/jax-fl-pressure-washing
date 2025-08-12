# 🚀 Development Standards & Best Practices

## 📋 **Hero Section Standards**

### **✅ REQUIRED Spacing & Positioning**

#### **1. Hero Section Container:**
```tsx
// ALWAYS use these classes for hero sections
<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
```

**Why these classes are mandatory:**
- `pt-20` (5rem) - Prevents content from running into fixed navigation
- `pb-32` (8rem) - Provides sufficient space below content
- `min-h-screen` - Ensures full viewport height

#### **2. Scroll Indicator Positioning:**
```tsx
// ALWAYS use bottom-16 (4rem) for scroll indicators
className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
```

**Never use:**
- ❌ `bottom-8` (2rem) - Too close to CTA buttons
- ❌ `bottom-4` (1rem) - Will definitely collide

#### **3. CTA Button Container Spacing:**
```tsx
// ALWAYS use mb-24 (6rem) for CTA button containers
className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
```

**Alternative acceptable spacing:**
- ✅ `mb-16` (4rem) - Minimum acceptable spacing
- ✅ `mb-24` (6rem) - Recommended spacing
- ✅ `mb-32` (8rem) - Generous spacing

### **🔧 Component Usage**

#### **Use the Standardized Components:**
```tsx
import HeroSection from '@/components/HeroSection'
import CTAButtonContainer from '@/components/CTAButtonContainer'

// Instead of custom hero sections, use:
<HeroSection>
  {/* Your hero content */}
  <CTAButtonContainer>
    {/* Your CTA buttons */}
  </CTAButtonContainer>
</HeroSection>
```

### **📏 Spacing Reference Chart**

| Element | Minimum | Recommended | Generous |
|---------|---------|-------------|----------|
| Hero top padding | `pt-20` (5rem) | `pt-20` (5rem) | `pt-24` (6rem) |
| Hero bottom padding | `pb-32` (8rem) | `pb-32` (8rem) | `pb-40` (10rem) |
| CTA button margin | `mb-16` (4rem) | `mb-24` (6rem) | `mb-32` (8rem) |
| Scroll indicator | `bottom-16` (4rem) | `bottom-16` (4rem) | `bottom-20` (5rem) |

## 🚨 **Common Mistakes to Avoid**

### **❌ NEVER DO:**
1. **Use `bottom-8` for scroll indicators** - Will collide with buttons
2. **Skip `pt-20` on hero sections** - Content will run into navigation
3. **Use `mb-8` or less for CTA containers** - Insufficient spacing
4. **Position scroll indicators above `bottom-16`** - Guaranteed collision

### **✅ ALWAYS DO:**
1. **Use standardized components** when possible
2. **Test on mobile devices** - Spacing issues are more apparent
3. **Follow the spacing chart** above
4. **Add `pointer-events-none`** to decorative elements

## 🧪 **Testing Checklist**

### **Before Deploying Any Hero Section:**

- [ ] **Navigation overlap:** Content doesn't run into fixed header
- [ ] **Scroll indicator:** Positioned at `bottom-16` or lower
- [ ] **CTA spacing:** Buttons have `mb-16` or more below them
- [ ] **Mobile testing:** Check on various screen sizes
- [ ] **Scroll behavior:** Indicator doesn't interfere with buttons
- [ ] **Visual hierarchy:** All elements are clearly separated

## 🔍 **Code Review Checklist**

### **When Reviewing Hero Sections:**

- [ ] **Spacing classes** match the standards above
- [ ] **Scroll indicator** uses `bottom-16` or lower
- [ ] **CTA container** has sufficient bottom margin
- [ ] **Hero section** has both `pt-20` and `pb-32`
- [ ] **No hardcoded** `bottom-8` or similar values
- [ ] **Responsive design** maintains proper spacing

## 📚 **Examples**

### **✅ Correct Hero Section:**
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
  {/* Background and content */}
  
  {/* CTA Buttons with proper spacing */}
  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
    {/* Your buttons */}
  </div>
  
  {/* Scroll indicator safely positioned */}
  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
    {/* Scroll indicator content */}
  </div>
</section>
```

### **❌ Incorrect Hero Section:**
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Missing pt-20 and pb-32 */}
  
  {/* CTA Buttons with insufficient spacing */}
  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    {/* Missing mb-16 or mb-24 */}
  </div>
  
  {/* Scroll indicator too close to buttons */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    {/* Will collide with CTA buttons */}
  </div>
</section>
```

## 🎯 **Enforcement**

### **Automated Checks:**
- Use ESLint rules to catch common spacing issues
- Implement pre-commit hooks to validate hero sections
- Add automated testing for spacing consistency

### **Manual Reviews:**
- Always review hero sections during code reviews
- Test on multiple devices before approval
- Validate against this standards document

---

**Remember: Proper spacing isn't just about aesthetics - it's about user experience and preventing functional issues! 🚀**
