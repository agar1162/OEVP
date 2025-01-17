## Updating Site
1. npm run build (make sure to have ```output: 'export'``` in ```next.config,mjs```)
2. git add/commit/push to GitHub repo
3. Open terminal then -> ```ssh username@ssh.ocf.berkeley.edu```
3. SSH again into ```ssh asucevp@vampires```
4. ```cd OEVP```
5. ```git pull```
6. Within OEVP run ->```cp -r out/* ../public_html```

## Front End File Routing Structure
```
└── 📁src
    └── 📁app
        └── 📁departments 
            └── 📁commercial-activities
                └── page.js
            └── 📁communications
                └── page.js
            └── 📁components
                └── Cover.js
                └── FAQ.js
                └── InstaPostEmbed.js
                └── InstaReelEmbed.js
            └── 📁deib
                └── page.js
            └── 📁finance
                └── page.js
            └── 📁legal-affairs
                └── page.js
            └── 📁rso
                └── page.js
            └── 📁spaces
                └── page.js
            └── 📁sswb
                └── page.js
            └── 📁student-affairs
                └── page.js
        └── 📁offices
            └── 📁2024
                └── 📁components
                └── page.js
        └── page.js 
        └── 📁partnerships
            └── page.js
        └── 📁resources
            └── page.js
    └── 📁components
        └── 📁home
            └── Footer.js
            └── Navbar.js

