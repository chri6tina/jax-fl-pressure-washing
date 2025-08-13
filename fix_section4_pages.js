const fs = require('fs');
const path = require('path');

const locations = [
  'arlington', 'atlantic-beach', 'avondale', 'eastside', 'jacksonville-beach',
  'mandarin', 'neptune-beach', 'northside', 'ortega', 'ponte-vedra',
  'riverside', 'san-marco', 'southside', 'westside'
];

const service = {
  name: 'roof-cleaning',
  title: 'Roof Cleaning',
  cleanName: 'RoofCleaning'
};

function fixPage(service, location) {
  const serviceName = service.name;
  const serviceTitle = service.title;
  const cleanServiceName = service.cleanName;
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);
  const cleanLocationName = locationName.replace(/-/g, ''); // Fix for "neptune-beach", "ponte-vedra", "san-marco"
  
  const filePath = path.join(__dirname, 'app', 'services', serviceName, location, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  
  const oldComponentName = `${serviceTitle.replace(/\s+/g, '')}${locationName.charAt(0).toUpperCase() + locationName.slice(1)}Page`;
  const newComponentName = `${cleanServiceName}${cleanLocationName}Page`;
  
  content = content.replace(new RegExp(oldComponentName, 'g'), newComponentName);
  
  // Also fix location names in text content
  content = content.replace(new RegExp(`\\$\\{locationName\\}`, 'g'), locationName);
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed: ${serviceName}/${location}/page.tsx`);
}

// Fix pages for each location
locations.forEach(location => {
  fixPage(service, location);
});

console.log(`\n🎉 Section 4 pages fixed! All component names are now valid JavaScript identifiers.`);
console.log(`📊 Total pages fixed: ${locations.length}`);
console.log(`🌍 Locations fixed: ${locations.join(', ')}`);
console.log(`🚀 Ready for successful build!`);
