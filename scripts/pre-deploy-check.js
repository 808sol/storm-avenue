#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Running pre-deployment checks...\n');

let hasErrors = false;

// Check for required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
  'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
  'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'
];

console.log('📋 Checking environment variables...');
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:');
  missingEnvVars.forEach(varName => {
    console.error(`   - ${varName}`);
  });
  console.log('\n💡 Make sure to set these in your Vercel project settings.\n');
  hasErrors = true;
} else {
  console.log('✅ All required environment variables are set\n');
}

// Check for large files
console.log('📦 Checking for large files...');
const publicDir = path.join(process.cwd(), 'public');
const largeFiles = [];

function checkFileSize(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      checkFileSize(filePath);
    } else if (stat.size > 5 * 1024 * 1024) { // 5MB
      largeFiles.push({
        path: filePath.replace(process.cwd(), '.'),
        size: (stat.size / 1024 / 1024).toFixed(2) + 'MB'
      });
    }
  });
}

checkFileSize(publicDir);

if (largeFiles.length > 0) {
  console.log('⚠️  Large files found (>5MB):');
  largeFiles.forEach(file => {
    console.log(`   - ${file.path} (${file.size})`);
  });
  console.log('\n💡 Consider optimizing these files for better performance.\n');
} else {
  console.log('✅ No excessively large files found\n');
}

// Check Next.js build
console.log('🏗️  Checking build configuration...');
const nextConfig = require('../next.config.js');
console.log('✅ Next.js configuration is valid\n');

// Final summary
if (hasErrors) {
  console.log('❌ Pre-deployment checks failed. Please fix the issues above before deploying.\n');
  process.exit(1);
} else {
  console.log('✅ All pre-deployment checks passed! Ready to deploy.\n');
  console.log('📝 Deployment checklist:');
  console.log('   1. Commit all changes to git');
  console.log('   2. Push to your repository');
  console.log('   3. Set environment variables in Vercel dashboard');
  console.log('   4. Deploy and monitor build logs\n');
}
