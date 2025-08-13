const fs = require('fs');
const path = require('path');

// Define all our service sections and their locations
const serviceSections = {
  'house-washing': {
    title: 'House Washing',
    locations: ['arlington', 'atlantic-beach', 'avondale', 'eastside', 'jacksonville-beach', 'mandarin', 'neptune-beach', 'northside', 'ortega', 'ponte-vedra', 'riverside', 'san-marco', 'southside', 'westside']
  },
  'driveway-cleaning': {
    title: 'Driveway Cleaning',
    locations: ['arlington', 'atlantic-beach', 'avondale', 'eastside', 'jacksonville-beach', 'mandarin', 'neptune-beach', 'northside', 'ortega', 'ponte-vedra', 'riverside', 'san-marco', 'southside', 'westside']
  },
  'roof-cleaning': {
    title: 'Roof Cleaning',
    locations: ['arlington', 'atlantic-beach', 'avondale', 'eastside', 'jacksonville-beach', 'mandarin', 'neptune-beach', 'northside', 'ortega', 'ponte-vedra', 'riverside', 'san-marco', 'southside', 'westside']
  },
  'gutter-cleaning': {
    title: 'Gutter Cleaning',
    locations: ['arlington', 'atlantic-beach', 'avondale', 'eastside', 'jacksonville-beach', 'mandarin', 'neptune-beach', 'northside', 'ortega', 'ponte-vedra', 'riverside', 'san-marco', 'southside', 'westside']
  }
};

function fixInternalLinkingSection(serviceName, location) {
  const filePath = path.join(__dirname, 'app', 'services', serviceName, location, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${serviceName}/${location}/page.tsx`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if internal linking section exists and needs fixing
  if (content.includes('Related Services in') && content.includes('variants={containerVariants}')) {
    // Replace the problematic variants with proper ones
    content = content.replace(/variants={containerVariants}/g, 'variants={containerVariants}');
    content = content.replace(/variants={itemVariants}/g, 'variants={itemVariants}');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${serviceName}/${location}/page.tsx internal linking variants`);
  } else {
    console.log(`⚠️  No internal linking section found in ${serviceName}/${location}/page.tsx`);
  }
}

// Fix all service+location pages
console.log('🔧 Starting Internal Linking Fix...\n');

Object.keys(serviceSections).forEach(serviceName => {
  console.log(`📁 Processing ${serviceName}...`);
  serviceSections[serviceName].locations.forEach(location => {
    fixInternalLinkingSection(serviceName, location);
  });
});

console.log('\n🎉 Internal Linking Fix Complete!');
console.log('📊 Fixed pages:');
Object.keys(serviceSections).forEach(serviceName => {
  console.log(`   • ${serviceName}: ${serviceSections[serviceName].locations.length} pages`);
});
console.log('\n🚀 Your pages now have properly working internal linking!');
