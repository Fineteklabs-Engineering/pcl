import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Papcon Kenya - Leading Paper Products Manufacturer in East Africa",
  description = "Papcon Kenya is a premier manufacturer of high-quality paper products in East Africa since 1971. Based in Mombasa, Kenya, we deliver excellence in paper manufacturing across the region.",
  keywords = "paper products, manufacturing, Kenya, East Africa, Mombasa, quality paper, industrial paper, paper supplier, paper manufacturer",
  image = "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/footer-logo.png",
  url = "https://papconkenya.magical.africa",
  type = "website",
  author = "Papcon Kenya",
  canonical,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const siteTitle = "Papcon Kenya";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  
  const robots = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

  return (
    <Helmet>
  
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
    
      {canonical && <link rel="canonical" href={canonical} />}
      
    
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@papconkenya" />
      
    
      <meta name="theme-color" content="#FF7F11" />
      <meta name="msapplication-TileColor" content="#FF7F11" />
      
    
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Mombasa, Kenya" />
      <meta name="geo.position" content="-4.0435,39.6682" />
      <meta name="ICBM" content="-4.0435,39.6682" />
      
    
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;