# Portfolio GitHub Setup Guide

## Upload Your Portfolio to GitHub

### Step 1: Initialize Git Repository
Open your terminal/command prompt in your portfolio folder and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website with projects and animations"
```

### Step 2: Connect to GitHub Repository
```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/saurabhi08/portfolio.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages (Optional)
1. Go to your repository: https://github.com/saurabhi08/portfolio
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your portfolio will be live at: `https://saurabhi08.github.io/portfolio/`

### Step 4: Future Updates
When you make changes to your portfolio:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Updated portfolio with new projects"

# Push to GitHub
git push origin main
```

## Repository Structure
Your portfolio includes:
- `portfolio.html` - Main portfolio page
- `css/portfolio-style.css` - Styling
- `js/portfolio.js` - JavaScript functionality
- `imgs/` - All project images and assets
- `EndlessBubbleWrap/` - Interactive game
- `imgs/brochures/viewer.html` - Brochure viewer
- `imgs/website/viewer.html` - Website template viewer

## Features Included
- ✅ Responsive design
- ✅ Animated statistics counters
- ✅ Interactive project galleries
- ✅ PDF viewers with navigation
- ✅ Contact form with confirmation modal
- ✅ Professional animations and effects
- ✅ 6 showcase projects (4 Graphic Design + 2 Web Design)

Your portfolio is ready to be uploaded to GitHub! 🚀
