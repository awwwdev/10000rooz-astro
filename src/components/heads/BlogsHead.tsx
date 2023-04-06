import { NextSeo } from 'next-seo';
import * as meta from '../../constants/appMetaData';

const BlogHead = () => (
  <NextSeo
    title={meta.brandTitle}
    description={meta.brandDescription}
    canonical={meta.websiteURL}
    openGraph={{
      url: meta.websiteURL,
      title: 'Open Graph Title',
      description: 'Open Graph Description',
      images: [
        {
          url: 'https://www.example.ie/og-image-01.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
          type: 'image/jpeg',
        },
        {
          url: 'https://www.example.ie/og-image-02.jpg',
          width: 900,
          height: 800,
          alt: 'Og Image Alt Second',
          type: 'image/jpeg',
        },
        { url: 'https://www.example.ie/og-image-03.jpg' },
        { url: 'https://www.example.ie/og-image-04.jpg' },
      ],
      site_name: meta.brandName,
    }}

  />

);

export default BlogHead;
