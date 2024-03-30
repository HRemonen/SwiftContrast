[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=HRemonen_SwiftContrast&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=HRemonen_SwiftContrast)

Web tool for checking color contrast ratios and WCAG guideline compliance.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment Process

This application is deployed using Vercel and updates are managed through GitHub releases, following semantic versioning principles.

**Steps for Deployment:**

1. **Development**: Develop new features or fixes locally.

2. **Semantic Versioning**: Increment the version number according to semantic versioning principles (X.Y.Z).

3. **GitHub Release**: Create a new release on GitHub with the incremented version number.

4. **CI/CD Pipeline**: Upon new release, the CI/CD pipeline is triggered.

5. **Deployment**: The [`Deploy-Production`](.github/workflows/production.yaml) job is executed in the CI/CD pipeline. This job performs the following steps:
   - Installs the Vercel CLI.
   - Pulls Vercel environment information.
   - Builds project artifacts.
   - Deploys project artifacts to Vercel.
