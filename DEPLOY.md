# Deploy to AWS Amplify - Copy & Paste Commands

## Prerequisites (Do Once)
1. Create GitHub Account: https://github.com/signup
2. Create AWS Account: https://aws.amazon.com

---

## STEP 1: Build Your App

Copy and paste this in PowerShell:

```powershell
npm run build
```

---

## STEP 2: Push to GitHub

### First Time Only - Create GitHub Repo

Go to https://github.com/new

Create new repository:
- Name: `reddingtongroupinc`
- Make it **Public**
- Click "Create repository"

### Then Copy-Paste This in PowerShell:

```powershell
git init
git add .
git commit -m "Deploy Reddington Group INC"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/reddingtongroupinc.git
git push -u origin main
```

**⚠️ Replace `YOUR_USERNAME` with your GitHub username**

---

## STEP 3: Deploy to AWS Amplify

1. Go to: https://aws.amazon.com/amplify/
2. Click "Get started" → "Host your web app"
3. Select "GitHub"
4. Click "Authorize AWS Amplify"
5. Select repository: `reddingtongroupinc`
6. Select branch: `main`
7. Click "Next" → "Next" → "Save and deploy"

**Wait 3-5 minutes for deployment...**

---

## STEP 4: Connect Your Domain

1. In Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Enter: `reddingtongroupinc.com`
4. Copy the DNS records
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add the DNS records in your domain settings
7. Wait 5-30 minutes for DNS to update

---

## That's It! 🎉

Your website is live!
- Visit: `reddingtongroupinc.com`
- Instantly redirects to: `https://www.reddingtonglobal.com`

---

## To Update Your Website Later

Just run:
```powershell
git add .
git commit -m "Update"
git push origin main
```

Amplify will auto-deploy in 1-2 minutes!

---

## Troubleshooting

**Domain not working?**
- DNS takes 5-48 hours to propagate
- Check: https://dnschecker.org

**Build failed?**
- Check Amplify console logs
- Make sure all files are pushed to GitHub

**Still not redirecting?**
- Clear browser cache: Ctrl+Shift+Delete
- Try Incognito mode: Ctrl+Shift+N
