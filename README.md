# Bankify - Modern Banking Platform

Bankify is a modern banking website template built with Next.js and deployed on Vercel. It offers a clean, professional design with features like transaction monitoring, spending analysis, and secure transfers.

![Bankify Screenshot](https://ext.same-assets.com/2467056450/1798686321.png)

## Features

- 📱 Fully responsive design
- 🔒 Secure authentication flow
- 📊 Transaction monitoring and analytics
- 💸 Bill payments and transfers
- 🔔 Personalized alerts
- 🌐 Custom domain support

## Tech Stack

- **Framework**: Next.js 15.2.0
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: Vercel
- **Icons**: Lucide React

## Deployment on Vercel

This project is optimized for deployment on Vercel. Follow these steps to deploy it:

### Option 1: Deploy directly from GitHub

1. Fork or clone this repository to your GitHub account
2. Log in to your [Vercel](https://vercel.com/) account
3. Click on "Import Project" or "Add New..." > "Project"
4. Connect your GitHub repository where the Bankify code is stored
5. Configure the project with these settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: next build
   - Output Directory: .next
6. Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Navigate to your project directory:
   ```
   cd bankifya-clone
   ```

3. Log in to Vercel:
   ```
   vercel login
   ```

4. Deploy the project:
   ```
   vercel
   ```

5. Follow the prompts to configure your deployment.

## Adding a Custom Domain

1. In your Vercel project dashboard, navigate to "Settings" > "Domains"
2. Enter your domain name and click "Add"
3. Follow the instructions to configure your DNS settings
4. Vercel will automatically issue an SSL certificate for your domain

## Environment Variables

The following environment variables are used in production:

```
NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app
NEXT_PUBLIC_APP_NAME=Bankify
NEXT_PUBLIC_APP_DESCRIPTION=A modern banking platform powered by Vercel
NEXT_PUBLIC_VERCEL_ENV=production
```

Update these variables in your Vercel project settings after deployment.

## Local Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## Deployment Status

Visit the `/deployment` page on your site to view deployment status and configuration options.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspired by [Bankifya](https://bankifya.framer.website/)
- Deployed and powered by [Vercel](https://vercel.com/)
