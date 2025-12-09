<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Eclipse Softworks</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; color: #333; margin: 0; padding: 0; background: #fafafa; }
          .container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
          h1 { color: #111; margin-bottom: 20px; font-weight: 700; font-size: 2.5rem; letter-spacing: -0.025em; }
          p { color: #666; font-size: 1.1rem; margin-bottom: 40px; }
          a { color: #000; text-decoration: none; border-bottom: 1px solid #ddd; transition: all 0.2s; }
          a:hover { border-bottom-color: #000; }
          table { width: 100%; border-collapse: separate; border-spacing: 0; background: #fff; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden; }
          th { text-align: left; padding: 20px; background: #f4f4f5; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #444; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; }
          td { padding: 16px 20px; border-bottom: 1px solid #eee; font-size: 0.95rem; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background-color: #fcfcfc; }
          .priority { font-family: monospace; color: #666; }
          .changefreq { text-transform: capitalize; display: inline-block; padding: 4px 8px; border-radius: 4px; background: #f0fdf4; color: #15803d; font-size: 0.8rem; font-weight: 600; }
          @media (max-width: 768px) {
            .container { padding: 20px; }
            h1 { font-size: 2rem; }
            th, td { padding: 12px; }
            .mobile-hide { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p>This is the XML Sitemap for Eclipse Softworks, meant for search engines. This page lists all the pages available on our website.</p>
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th class="mobile-hide">Last Modified</th>
                <th class="mobile-hide">Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td class="mobile-hide"><xsl:value-of select="sitemap:lastmod"/></td>
                  <td class="mobile-hide"><span class="changefreq"><xsl:value-of select="sitemap:changefreq"/></span></td>
                  <td class="priority"><xsl:value-of select="sitemap:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
