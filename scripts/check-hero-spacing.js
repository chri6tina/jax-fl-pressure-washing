#!/usr/bin/env node

/**
 * Pre-commit hook to check hero section spacing
 * This script validates that all hero sections follow our spacing standards
 */

const fs = require('fs');
const path = require('path');

// Files to check
const filesToCheck = [
  'app/**/*.tsx',
  'components/**/*.tsx'
];

// Spacing requirements
const requirements = {
  heroSection: {
    mustInclude: ['pt-20', 'pb-32'],
    description: 'Hero sections must include pt-20 and pb-32'
  },
  scrollIndicator: {
    forbidden: ['bottom-8', 'bottom-4', 'bottom-2'],
    mustUse: ['bottom-16', 'bottom-20', 'bottom-24', 'bottom-32'],
    description: 'Scroll indicators must use bottom-16 or higher'
  },
  ctaContainer: {
    forbidden: ['mb-8', 'mb-4', 'mb-2'],
    mustUse: ['mb-16', 'mb-24', 'mb-32'],
    description: 'CTA containers must use mb-16 or higher'
  }
};

// Check a single file
function checkFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];

    // Check hero section requirements
    if (content.includes('min-h-screen') && content.includes('flex items-center justify-center')) {
      requirements.heroSection.mustInclude.forEach(req => {
        if (!content.includes(req)) {
          issues.push(`Missing required class: ${req}`);
        }
      });
    }

    // Check scroll indicator positioning
    requirements.scrollIndicator.forbidden.forEach(forbidden => {
      if (content.includes(forbidden)) {
        issues.push(`Forbidden scroll indicator position: ${forbidden}. Use bottom-16 or higher.`);
      }
    });

    // Check CTA container spacing
    if (content.includes('justify-center items-center')) {
      const hasProperSpacing = requirements.ctaContainer.mustUse.some(spacing => 
        content.includes(`justify-center items-center ${spacing}`) || 
        content.includes(`justify-center items-center" ${spacing}`)
      );
      
      if (!hasProperSpacing) {
        issues.push('CTA container missing proper bottom margin (mb-16 or higher)');
      }
    }

    return issues;
  } catch (error) {
    return [`Error reading file: ${error.message}`];
  }
}

// Main function
function main() {
  console.log('🔍 Checking hero section spacing standards...\n');
  
  let totalIssues = 0;
  let filesWithIssues = 0;

  // Get all TypeScript/TSX files
  const glob = require('glob');
  const files = glob.sync('app/**/*.tsx').concat(glob.sync('components/**/*.tsx'));

  files.forEach(file => {
    const issues = checkFile(file);
    
    if (issues.length > 0) {
      console.log(`❌ ${file}:`);
      issues.forEach(issue => {
        console.log(`   - ${issue}`);
      });
      console.log('');
      totalIssues += issues.length;
      filesWithIssues++;
    }
  });

  if (totalIssues === 0) {
    console.log('✅ All hero sections follow spacing standards!');
    process.exit(0);
  } else {
    console.log(`🚨 Found ${totalIssues} spacing issues in ${filesWithIssues} files.`);
    console.log('📖 See DEVELOPMENT_STANDARDS.md for proper spacing guidelines.');
    console.log('🔧 Fix these issues before committing.');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { checkFile, requirements };
