import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Paper Converters (K) Ltd — Leading Paper & Label Products in Kenya",
  description = "Paper Converters (K) Ltd is Kenya’s trusted manufacturer of envelopes, computer stationery, thermal rolls, office files, and self-adhesive labels — serving East Africa since 1971 from Nairobi.",
  keywords = "Paper Converters, Paper Converters K Ltd, Paper Converters Kenya, Papcon Kenya, paper products, manufacturing, Kenya, East Africa, Nairobi, quality paper, industrial paper, paper supplier, paper manufacturer, paper converter, paper conversion",
  image = "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/footer-logo.png",
  url = "https://papconkenya.magical.africa",
  type = "website",
  author = "Paper Converters(K) Ltd",
  canonical,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const siteTitle = "Paper Converters (K) Ltd";
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
      <meta name="geo.placename" content="Nairobi, Kenya" />
      <meta name="geo.position" content="-1.2921,36.8219" />
      <meta name="ICBM" content="-1.2921,36.8219" />
      
    
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;