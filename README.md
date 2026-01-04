# Sockeon Documentation Website

Official documentation website for [Sockeon](https://sockeon.com) - A framework-agnostic PHP WebSocket and HTTP server library.

## 🚀 Features

- **Versioned Documentation**: Supports multiple documentation versions (v1.0 and v2.0)
- **Modern Stack**: Built with [VitePress](https://vitepress.dev/) for fast, SEO-friendly documentation
- **Algolia Search**: Integrated Algolia DocSearch for powerful documentation search
- **SEO Optimized**: Includes sitemap generation, robots.txt, and proper meta tags
- **Responsive Design**: Mobile-friendly with a professional, modern UI

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git (for submodule management)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone git@github.com:sockeon/website.git
cd website
```

2. Initialize and update Git submodules:
```bash
git submodule update --init --recursive
```

3. Install dependencies:
```bash
npm install
```

## 🏃 Development

Start the development server:
```bash
npm run docs:dev
```

The documentation will be available at `http://localhost:5173`

## 🏗️ Building

Build the documentation for production:
```bash
npm run docs:build
```

This will:
- Build the VitePress site
- Generate the sitemap automatically

Preview the production build:
```bash
npm run docs:preview
```

## 📁 Project Structure

```
.
├── docs/
│   ├── .vitepress/          # VitePress configuration
│   │   ├── config.mts       # Main VitePress config
│   │   ├── sidebars.ts      # Sidebar navigation
│   │   ├── generate-sitemap.ts  # Sitemap generator
│   │   ├── components/      # Vue components
│   │   └── theme/          # Theme customizations
│   ├── v1.0/               # v1.0 documentation (submodule)
│   ├── v2.0/               # v2.0 documentation (submodule)
│   ├── index.md            # Home page
│   └── public/             # Static assets
├── package.json
└── README.md
```

## 🔄 Working with Submodules

The documentation for each version is stored in Git submodules. This allows version-specific documentation to be maintained separately.

### Updating Documentation

1. **Update submodule content**:
```bash
cd docs/v1.0  # or docs/v2.0
# Make your changes
git add .
git commit -m "Update documentation"
git push origin v1.0  # or v2.0
cd ../..
```

2. **Update main repository**:
```bash
git add docs/v1.0 docs/v2.0
git commit -m "Update documentation submodules"
git push origin main
```

### On the Server

When deploying, update submodules with:
```bash
# Update v1.0
cd docs/v1.0 && git fetch origin v1.0 --depth=1 && git reset --hard FETCH_HEAD && cd ../..

# Update v2.0
cd docs/v2.0 && git fetch origin v2.0 --depth=1 && git reset --hard FETCH_HEAD && cd ../..
```

## 🎨 Customization

### Adding a New Documentation Version

1. Add the version to `docs/.vitepress/versions.json`
2. Add sidebar configuration in `docs/.vitepress/sidebars.ts`
3. Add the submodule:
```bash
git submodule add -b vX.X git@github.com:sockeon/docs.git docs/vX.X
```

### Modifying the Theme

- Custom components: `docs/.vitepress/components/`
- Theme styles: `docs/.vitepress/theme/style.css`
- Layout: `docs/.vitepress/theme/index.ts`

## 🔍 Search Configuration

The site uses Algolia DocSearch. Configuration is in `docs/.vitepress/config.mts`:

```typescript
search: {
  provider: 'algolia',
  options: {
    appId: 'NDFUG8I0D2',
    apiKey: '649717b25060e28c3cef93af26888759',
    indexName: 'sockeon',
    // ...
  }
}
```

## 📝 SEO Features

- **Sitemap**: Automatically generated during build (`/sitemap.xml`)
- **Robots.txt**: Located at `/public/robots.txt`
- **Meta Tags**: Configured in `config.mts`
- **Canonical URLs**: Automatically set per page

## 🚢 Deployment

The built files are in `docs/.vitepress/dist/`. Deploy this directory to your web server.

### Nginx Configuration

Example nginx configuration:
```nginx
location / {
    try_files $uri $uri.html $uri/ /index.html;
}
```

## 📚 Documentation Versions

- **v2.0** (Current): Latest version with full features
- **v1.0** (Legacy): Previous version for reference

Users can switch between versions using the version selector in the navigation bar.

## 🤝 Contributing

1. Make changes to the appropriate documentation submodule
2. Commit and push to the submodule repository
3. Update the main repository to reference the new submodule commit
4. Submit a pull request

## 📄 License

This documentation website is part of the Sockeon project.

## 🔗 Links

- **Website**: https://sockeon.com
- **GitHub**: https://github.com/sockeon/sockeon
- **Documentation**: https://sockeon.com/v2.0/getting-started/installation

