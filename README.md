# OEVP Website

A student-led platform for the **Office of the Executive Vice President** (OEVP) at UC Berkeley.  
This site serves as a hub for student resources, department initiatives, events, and organizational partnerships.

![Next.js](https://img.shields.io/badge/Built%20With-Next.js-000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Styled%20With-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Deployed On](https://img.shields.io/badge/Hosted%20On-OCF-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> **📅 Latest update in this design doc:** Sat Mar 29 2025 12:35 AM PT

# 1. Environment Setup
## 1.1. Initial Setup 
### 1.1.1. Install Node.js and npm:
Ensure you have npm installed on your local machine.

### 1.1.2. Clone the Repository on your local machine:
In your terminal on your local machine, run:
```
git clone <repo-url>
```

### 1.1.3. Recommended IDE: Visual Studio Code (VSCode)
We suggest using VSCode for a smoother development experience.\
#### 1.1.3.1. Option A (Local Development):
After cloning the repository, make any updates locally. Once changes are ready, follow the deployment steps in Section 1.3.1.
#### 1.1.3.2. Option B (SSH Access via IDE):
You can also work via SSH within your IDE (detailed steps to be added later — in the meantime, research via Google or contact the current developer: Truc — tructran@berkeley.edu).
#### 1.1.3.3. Need Help?
For setup issues or additional configuration, please reach out to the current maintainer: Truc — tructran@berkeley.edu.

## 1.2. Running the Site Locally 
> *⚠️ These instructions assume you’re on macOS. For Windows or Linux, please consult equivalent platform-specific guides.*
### 1.2.1. Open your terminal on your local machine and navigate to the project directory (assumed to be ~/OEVP):
   ```
   cd OEVP
   npm run dev
   ```
### 1.2.2. To stop the development server, press:
* `Cmd + C` on macOS
* `Ctrl + C` on Windows/Linux

## 1.3. Updating Site (aka Deploying Updates)
### 1.3.1. If You Made Changes Locally
#### 1.3.1.1. In the terminal on your local machine:
Run:
```
npm run deploy
ssh username@ssh.ocf.berkeley.edu
```
#### 1.3.1.2. When prompted:
Enter the password (refer to the internal credentials doc).
#### 1.3.1.3. Once connected to the OCF server via SSH:
Run the deployment script (aka the update_evp.sh file):
```
./update_evp.sh
```

### 1.3.2. If You Made Changes Directly in SSH (⚠️ Not Recommended)
> *⚠️ Note: Direct development in SSH is not recommended, as npm is not available in the OCF environment. This could lead to deployment issues if npm run deploy is skipped.*
#### 1.3.2.1. If you must push changes made through SSH: 
Assume you have been editing code via ssh on your IDE, follow those steps:\
**Navigate to the repo directory: Assume you are in home directory (~/), run:** 
```
cd OEVP
```
(_optionally_, you should run: ```git status``` to review your changes then continue)\
**Stage and commit your changes:**
```
// To stage all changes:
    // if you are aware of all the changes, run this command below and it will add all changed files:
git add .
// Recommended: stage individual files explicitly:
    // but this is a better and safer practice, for example if we need to add 2 changed files:
git add path/to/file1 path/to/file2
// Commit and push:
git commit -m "Add a meaningful commit message here"
git push origin main

```

# 2. Front End File Routing Structure
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

