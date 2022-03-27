import { useEffect } from 'react'
import { useRouter } from "next/router";

const useLocale = () => {
  const router = useRouter();
  const { locale } = router;

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "bn" : "en";

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
        hash: window.location.hash,
      },
      undefined,
      { locale: newLocale, scroll: false }
    )
  };

  useEffect(() => {
    document.body.classList.remove(locale === 'en' ? 'bn' : 'en')
    document.body.classList.add(locale)
  }, [locale])

  return [
    locale,
    toggleLocale,
  ];
};

export default useLocale;
