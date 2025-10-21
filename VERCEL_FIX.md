# Vercel Deployment Fix for Bubble Game

## Issues Fixed

### 1. **Relative Path Issues**
- Updated all file paths to use explicit relative paths (`./ prefix`)
- This ensures proper file resolution on Vercel's Linux-based servers

### 2. **Audio File Loading**
- Added error handling for audio playback in the bubble game
- Updated audio file path in `EndlessBubbleWrap/index.html` to use `./sharp-pop-328170.mp3`
- Added try-catch blocks to prevent JavaScript errors if audio fails to load

### 3. **Vercel Configuration**
- Created `vercel.json` with proper routing configuration
- Added `.vercelignore` to exclude unnecessary files from deployment

### 4. **File Path Consistency**
- Updated all resource paths in `js/portfolio.js` to use `./` prefix
- Updated paths in `index.html` and `portfolio.html`
- Fixed bubble game HTML file paths

## Files Modified

1. **vercel.json** (NEW)
   - Added clean URLs configuration
   - Disabled trailing slashes

2. **.vercelignore** (NEW)
   - Excludes: portfolio.zip, .git, markdown files, test.html

3. **js/portfolio.js**
   - Updated all image paths to use `./` prefix
   - Updated bubble game link to `./EndlessBubbleWrap/index.html`

4. **EndlessBubbleWrap/index.html**
   - Updated CSS link to `./style.css`
   - Updated audio source to `./sharp-pop-328170.mp3`
   - Updated script link to `./script.js`

5. **EndlessBubbleWrap/script.js**
   - Added error handling for audio playback
   - Added console logging for debugging

6. **index.html** & **portfolio.html**
   - Updated CSS link to `./css/portfolio-style.css`
   - Updated profile image to `./imgs/profile.png`
   - Updated script link to `./js/portfolio.js`

## Deployment Instructions

### Option 1: Redeploy on Vercel (Recommended)

1. **Commit all changes:**
   ```bash
   git add .
   git commit -m "Fix bubble game and file paths for Vercel deployment"
   git push origin main
   ```

2. **Vercel will automatically redeploy** (if auto-deployment is enabled)
   - Wait for the deployment to complete
   - Check your deployment at your Vercel URL

3. **Manual redeploy** (if auto-deployment is off):
   - Go to your Vercel dashboard
   - Click "Redeploy" on your project
   - Or use Vercel CLI: `vercel --prod`

### Option 2: Fresh Vercel Deployment

If you want to start fresh:

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Testing After Deployment

1. **Test the main portfolio page:**
   - Navigate to your Vercel URL
   - Check if all images load correctly
   - Verify navigation works

2. **Test the bubble game:**
   - Click on the "Endless Bubble Wrap Game" project card
   - Click "View Project" button
   - The bubble game should open in a new tab
   - Click on bubbles - they should:
     - Change color
     - Play a pop sound
     - Increment the counter
     - Reset after 500ms

3. **Check browser console:**
   - Open Developer Tools (F12)
   - Look for any errors in the Console tab
   - All resources should load without 404 errors

## Common Issues & Solutions

### Issue: Bubble game opens but doesn't work
**Solution:** Check browser console for JavaScript errors. Audio might be blocked by browser autoplay policy. Click anywhere on the page first to enable audio.

### Issue: Audio doesn't play
**Solution:** 
- Some browsers block autoplay. User interaction is required first.
- Check if audio file exists in the `EndlessBubbleWrap/` folder
- Verify audio file format is supported (MP3 should work)

### Issue: Page shows 404 errors
**Solution:**
- Verify all files are committed and pushed to Git
- Check that folder names match exactly (case-sensitive)
- Ensure `EndlessBubbleWrap` folder contains all required files

### Issue: CSS or JavaScript not loading
**Solution:**
- Clear browser cache
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check Network tab in DevTools for failed requests

## File Structure Verification

Ensure your project structure looks like this:

```
web portfolio/
├── EndlessBubbleWrap/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── mockup.png
│   ├── pop-91931.mp3
│   └── sharp-pop-328170.mp3
├── css/
│   └── portfolio-style.css
├── js/
│   └── portfolio.js
├── imgs/
│   └── [various images]
├── index.html
├── portfolio.html
├── vercel.json
└── .vercelignore
```

## Support

If issues persist after following these steps:

1. Check Vercel deployment logs in your dashboard
2. Open browser DevTools Console and Network tabs
3. Verify all files are present in your repository
4. Ensure Git repository is connected to Vercel correctly

## Notes

- Vercel uses Linux-based servers, which are **case-sensitive**
- Always use lowercase for file/folder names when possible
- Use `./` prefix for relative paths to avoid ambiguity
- Audio autoplay might be blocked by browsers - this is expected behavior

