import { useState, useEffect } from 'react'

import icons from '@utils/IconsUtil'
import { Icon } from '@components/shared/Icon'
import useLocale from 'hooks/useLocale'

function Index() {
  // const [locale, toggleLocale] = useLocale()

  // const swithLocale = locale === 'en' ? "English" : "Bangla"
  const [mood, setMood] = useState('dark')

  useEffect(() => {
    if(mood === 'dark'){
      document.body.classList.add('dark-theme')
      // document.getElementsByTagName('canvas')[0].classList.add('c')
    }else{
      document.body.classList.remove('dark-theme')
      // document.getElementsByTagName('canvas')[0].classList.remove('c')
    }
  }, [mood])

  return (
    <>
      {/* <Icon 
        src={`options/${locale === 'en' ? 'bn' : 'en'}.png`} 
        onClick={toggleLocale}
        alt={`Switch to ${swithLocale}`}
      /> */}

      <Icon 
        icon={mood === 'light' ? icons.moon : icons.sun} 
        onClick={() => setMood(mood === 'light' ? "dark" : "light")}
        alt={`Switch to ${mood}`}
      />
    </>
  )
}

export default Index