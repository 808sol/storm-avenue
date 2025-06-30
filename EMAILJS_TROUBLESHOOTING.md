# EmailJS Troubleshooting Guide

## 🔍 Common Issues & Solutions

### 1. Environment Variables on Vercel

**Issue**: Form works locally but not on Vercel.

**Solution**:
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add these variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. **Important**: After adding variables, you must **redeploy** your project

### 2. EmailJS Template Configuration

**Issue**: Emails not being sent or received.

**Solution**:
1. Log into your EmailJS dashboard
2. Go to Email Templates
3. Ensure your template has these variables:
   ```
   {{from_name}}
   {{from_email}}
   {{phone}}
   {{service}}
   {{message}}
   {{to_email}}
   {{reply_to}}
   ```
4. Set "To email" field in template to: `{{to_email}}`
5. Set "Reply to" field to: `{{reply_to}}`

### 3. Email Service Configuration

**Issue**: Service not properly configured.

**Solution**:
1. In EmailJS dashboard, go to Email Services
2. Verify your email service is connected (Gmail, Outlook, etc.)
3. Check daily email limit hasn't been exceeded
4. Ensure service status is "Active"

## 🧪 Testing Your Setup

### Local Testing
```bash
# Check if environment variables are loaded
curl http://localhost:3000/api/test-emailjs
```

### Production Testing
```bash
# Replace with your Vercel URL
curl https://your-app.vercel.app/api/test-emailjs
```

## 📋 Debugging Checklist

- [ ] Environment variables are set on Vercel
- [ ] Project has been redeployed after adding variables
- [ ] EmailJS service is active and connected
- [ ] Template variables match the code
- [ ] Daily email limit not exceeded
- [ ] Browser console shows no CORS errors
- [ ] Network tab shows 200 response from EmailJS

## 🔧 Quick Fixes

### Fix 1: Clear Browser Cache
Sometimes old environment variables are cached.

### Fix 2: Check EmailJS Dashboard
Look for failed email attempts in the EmailJS dashboard logs.

### Fix 3: Test with Simple Template
Create a basic template with just `{{message}}` to isolate issues.

### Fix 4: Verify Public Key Format
Ensure your public key doesn't have extra spaces or characters.

## 📧 Email Not Arriving?

1. Check spam/junk folder
2. Verify email address spelling
3. Check EmailJS dashboard for send status
4. Try a different email provider
5. Ensure `info@stormavenue.net` is correct

## 🚨 Common Error Messages

**"EmailJS configuration is missing"**
- Environment variables not set on Vercel

**"The public key is invalid"**
- Wrong public key or extra characters

**"The service ID is invalid"**
- Service ID doesn't match EmailJS dashboard

**"Daily quota exceeded"**
- Upgrade EmailJS plan or wait until tomorrow

## 💡 Pro Tips

1. Always test after deployment
2. Use browser DevTools to check network requests
3. Enable EmailJS dashboard notifications
4. Keep a backup contact method visible
5. Test with multiple email providers

## 🆘 Still Not Working?

1. Open browser console (F12)
2. Try submitting the form
3. Look for error messages
4. Check Network tab for EmailJS requests
5. Share error messages for debugging
