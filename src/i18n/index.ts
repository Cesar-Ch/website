import spanish from './es.json'
import english from './en.json'

const LANG = {
    ENGLISH: 'en',
    SPANISH: 'es'
}

export const getI18N = ({ currentLocale  }: { currentLocale: string }) => {
    if (currentLocale === LANG.ENGLISH) return english
    if (currentLocale === LANG.SPANISH) return spanish
    return spanish
}
