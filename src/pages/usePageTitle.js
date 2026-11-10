import { useEffect } from 'react';

const SITE = 'twemlow.dev';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Custom Software & Developer Tools`;
  }, [title]);
}
