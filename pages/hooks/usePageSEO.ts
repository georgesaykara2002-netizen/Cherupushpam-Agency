import { useEffect } from 'react';

/**
 * Sets the document title and meta description for a given page.
 * Also updates the canonical link tag if one exists.
 */
export function usePageSEO(title: string, description: string, canonicalPath?: string) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    // OG description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Twitter title
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    // Twitter description
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    // Canonical
    if (canonicalPath) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://tomcherupushpamagency.com${canonicalPath}`;
    }
  }, [title, description, canonicalPath]);
}
