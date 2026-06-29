import { writeFileSync, readdirSync, statSync, existsSync } from 'fs'
import { join, relative } from 'path'

interface SitemapUrl {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: string
}

export async function generateSitemap() {
  const baseUrl = 'https://sockeon.github.io'
  const distPath = join(process.cwd(), 'docs', '.vitepress', 'dist')
  
  if (!existsSync(distPath)) {
    console.warn('Dist directory not found, skipping sitemap generation')
    return
  }
  
  const urls: SitemapUrl[] = []
  const now = new Date().toISOString().split('T')[0]
  
  // Recursively find all HTML files
  function findHtmlFiles(dir: string, baseDir: string = distPath): string[] {
    const files: string[] = []
    const entries = readdirSync(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name)
      if (entry.isDirectory()) {
        files.push(...findHtmlFiles(fullPath, baseDir))
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        const relativePath = relative(baseDir, fullPath)
        files.push(relativePath)
      }
    }
    
    return files
  }
  
  const htmlFiles = findHtmlFiles(distPath)
  
  // Add main page
  urls.push({
    loc: baseUrl,
    lastmod: now,
    changefreq: 'daily',
    priority: '1.0'
  })
  
  // Add all other pages
  htmlFiles.forEach(file => {
    if (file === 'index.html') return
    
    // Keep .html extension in URLs
    let path = file
    if (!path.startsWith('/')) path = '/' + path
    
    // Skip 404 and other special pages
    if (path.includes('404') || path.includes('404.html')) return
    
    // Determine priority based on path
    let priority = '0.7'
    if (path === '/' || path === '') {
      priority = '1.0'
    } else if (path.startsWith('/v2.0/getting-started')) {
      priority = '0.9'
    } else if (path.startsWith('/v2.0')) {
      priority = '0.8'
    } else if (path.startsWith('/v1.0')) {
      priority = '0.7'
    }
    
    urls.push({
      loc: `${baseUrl}${path}`,
      lastmod: now,
      changefreq: 'weekly',
      priority
    })
  })
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`
  
  // Write sitemap to dist directory
  writeFileSync(join(distPath, 'sitemap.xml'), sitemap, 'utf-8')
  console.log(`✓ Generated sitemap.xml with ${urls.length} URLs`)
}

// Run when executed directly
generateSitemap().catch(console.error)

