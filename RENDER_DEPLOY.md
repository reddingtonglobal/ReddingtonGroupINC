# 🚀 Deploy to Render - Step-by-Step Guide

Deploy your Reddington Group INC landing page to Render with your custom domain.

---

## 📋 Prerequisites

1. **GitHub Account** - Sign up at: https://github.com/signup
2. **Render Account** - Sign up at: https://render.com/signup
3. **Domain Name** - You should have access to your domain's DNS settings

---

## 🔧 STEP 1: Prepare Your Project

### Create a `render.yaml` file (Optional but Recommended)

This file is already created for you in the project!

---

## 📦 STEP 2: Push to GitHub

### A. Create a New GitHub Repository

1. Go to: **https://github.com/new**
2. Fill in:
   - **Repository name**: `ReddingtonGroupINC`
   - **Description**: Landing page for Reddington Group INC
   - **Visibility**: Public or Private (both work with Render)
3. **DO NOT** check "Add a README file"
4. Click **"Create repository"**

### B. Copy-Paste These Commands in PowerShell

**⚠️ IMPORTANT: Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username!**

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit - Reddington Group INC landing page"

# Set main branch
git branch -M main

# Add remote origin (REPLACE YOUR_GITHUB_USERNAME!)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ReddingtonGroupINC.git

# Push to GitHub
git push -u origin main
```

**Note**: You might be asked to sign in to GitHub. Follow the prompts.

---

## 🌐 STEP 3: Deploy to Render

### A. Connect GitHub to Render

1. Go to: **https://dashboard.render.com**
2. Click **"New +"** → Select **"Static Site"**
3. Click **"Connect GitHub"** or **"Configure account"**
4. Authorize Render to access your GitHub repositories
5. Select the repository: **`ReddingtonGroupINC`**

### B. Configure Your Static Site

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | `reddingtongroupinc` |
| **Branch** | `main` |
| **Build Command** | `npm run build` |
| **Publish Directory** | `build` |

### C. Add Environment Variables (If Needed)

For a basic React app, no environment variables are needed. Click **"Create Static Site"**

### D. Wait for Deployment

- Render will install dependencies and build your app
- This takes **2-5 minutes**
- Watch the logs for any errors
- Once complete, you'll see: **"Your site is live! 🎉"**

---

## 🔗 STEP 4: Connect Your Custom Domain

### A. Add Domain in Render

1. In your Render dashboard, click on your site
2. Go to **"Settings"** tab
3. Scroll to **"Custom Domains"** section
4. Click **"Add Custom Domain"**
5. Enter your domain: **`reddingtongroupinc.com`**
6. Also add: **`www.reddingtongroupinc.com`**
7. Click **"Save"**

### B. Get DNS Records from Render

Render will show you DNS records like:

**For apex domain (reddingtongroupinc.com):**
```
Type: A
Name: @
Value: 216.24.57.1
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-site-name.onrender.com
```

### C. Update DNS Settings at Your Domain Registrar

#### If using GoDaddy:

1. Go to: **https://dcc.godaddy.com/domains**
2. Find your domain → Click **"DNS"**
3. Click **"Add Record"**

**Add A Record:**
```
Type: A
Name: @
Value: 216.24.57.1
TTL: 600 seconds
```

**Add CNAME Record:**
```
Type: CNAME
Name: www
Value: your-site-name.onrender.com
TTL: 1 Hour
```

4. Click **"Save"**

#### If using Namecheap:

1. Go to: **https://www.namecheap.com/myaccount/login/**
2. Click **"Domain List"** → Select your domain
3. Click **"Manage"** → Go to **"Advanced DNS"** tab

**Add A Record:**
```
Type: A Record
Host: @
Value: 216.24.57.1
TTL: Automatic
```

**Add CNAME Record:**
```
Type: CNAME Record
Host: www
Value: your-site-name.onrender.com
TTL: Automatic
```

4. Click **"Save All Changes"**

#### If using Cloudflare:

1. Go to: **https://dash.cloudflare.com**
2. Select your domain
3. Go to **"DNS"** → Click **"Add record"**

**Add A Record:**
```
Type: A
Name: @
IPv4 address: 216.24.57.1
Proxy status: Proxied (orange cloud)
TTL: Auto
```

**Add CNAME Record:**
```
Type: CNAME
Name: www
Target: your-site-name.onrender.com
Proxy status: Proxied (orange cloud)
TTL: Auto
```

4. Click **"Save"**

### D. Wait for DNS Propagation

- DNS changes take **5 minutes to 48 hours**
- Usually works within **15-30 minutes**
- Check status at: **https://dnschecker.org**

---

## ✅ STEP 5: Enable HTTPS (Free SSL)

1. In Render dashboard, go to your site
2. Go to **"Settings"** tab
3. Render automatically provisions SSL certificates
4. Wait a few minutes after DNS propagates
5. Your site will be available at: **https://reddingtongroupinc.com**

---

## 🎉 You're Live!

Your website is now deployed at:
- **https://reddingtongroupinc.com**
- **https://www.reddingtongroupinc.com**

Both automatically redirect to: **https://www.reddingtonglobal.com**

---

## 🔄 How to Update Your Website

Whenever you make changes to your code:

```powershell
# Add changes
git add .

# Commit with a message
git commit -m "Updated landing page"

# Push to GitHub
git push origin main
```

**Render will automatically detect the push and redeploy!** (Takes 2-3 minutes)

---

## 🛠️ Troubleshooting

### Build Failed?

**Check the build logs in Render:**
1. Go to your site in Render dashboard
2. Click on the latest deploy
3. Check the logs for errors

**Common fixes:**
```powershell
# Make sure dependencies are installed
npm install

# Test build locally
npm run build

# If build works locally, push again
git add .
git commit -m "Fix build"
git push origin main
```

### Domain Not Working?

1. **Check DNS propagation**: https://dnschecker.org
2. **Verify DNS records** in your domain registrar
3. **Clear browser cache**: Ctrl+Shift+Delete
4. **Try incognito mode**: Ctrl+Shift+N
5. **Wait longer** - DNS can take up to 48 hours

### SSL Certificate Not Working?

1. Wait 10-15 minutes after DNS propagates
2. Render auto-provisions SSL certificates
3. Check "Settings" → "Custom Domains" for certificate status

### Redirect Not Working?

1. **Clear browser cache**
2. **Check App.js** has correct redirect URL
3. **Try different browser**
4. **Check browser console** for errors (F12)

---

## 📊 Monitor Your Site

**Render Dashboard**: https://dashboard.render.com
- View deployment history
- Check build logs
- Monitor uptime
- View bandwidth usage

---

## 💰 Pricing

Render offers:
- **Free Tier**: Perfect for static sites like yours
  - 100 GB bandwidth/month
  - Auto-deploy from GitHub
  - Free SSL certificates
  - Custom domains

**Your site will run on the free tier!** ✨

---

## 📚 Additional Resources

- **Render Documentation**: https://render.com/docs/static-sites
- **Custom Domains Guide**: https://render.com/docs/custom-domains
- **GitHub Docs**: https://docs.github.com

---

## 🆘 Need Help?

- **Render Support**: https://render.com/docs
- **GitHub Issues**: Create an issue in your repository
- **DNS Help**: Contact your domain registrar

---

## 📝 Quick Reference Commands

### Deploy New Changes
```powershell
git add .
git commit -m "Your message"
git push origin main
```

### Check Git Status
```powershell
git status
```

### View Git Log
```powershell
git log --oneline
```

### Test Build Locally
```powershell
npm run build
```

### Test Local Server
```powershell
npm start
```

---

**🎊 Congratulations! Your site is now live on Render!**
