import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es'
}

export const getI18N = ({ currentLocale  }: { currentLocale: string }) => {
    if (currentLocale === LANGUAGES.ENGLISH) return english
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    return spanish
}
