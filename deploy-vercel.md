# Deploying Bankify to Vercel

This guide will help you deploy the Bankify project to Vercel.

## Prerequisites

1. A [Vercel](https://vercel.com/) account
2. The project code pushed to a GitHub repository
3. This project has been configured for Vercel deployment

## Deployment Steps

### Option 1: Deploy directly from GitHub

1. Log in to your Vercel account
2. Click on "Import Project" or "Add New..." > "Project"
3. Connect your GitHub repository where the Bankify code is stored
4. Configure the project with these settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: next build
   - Output Directory: .next
5. Click "Deploy"

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

## Post-Deployment

After deploying, make sure to:

1. Update the `.env.production` file with your actual Vercel deployment URL
2. Test all functionality on the deployed site
3. Set up any required environment variables in the Vercel project settings

## Troubleshooting

If you encounter build errors:

1. Check the build logs in the Vercel dashboard
2. Ensure all dependencies are properly installed
3. Verify that the next.config.js settings are correct
4. Make sure the vercel.json configuration is valid

## Important Files for Deployment

The following files have been configured for successful Vercel deployment:

- `package.json`: Added proper build commands and type
- `next.config.js`: Optimized for production with 'standalone' output
- `vercel.json`: Configured with appropriate settings
- `.env.production`: Basic environment variables

## Need More Help?

Refer to the [Vercel documentation](https://vercel.com/docs) for more detailed information on deploying Next.js applications.
