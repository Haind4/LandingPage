import React from 'react';
import { useSelector } from 'react-redux';
import en from '../Helper/language/en.json'
import vi from '../Helper/language/vi.json'
import ge from '../Helper/language/ge.json'

const useLanguage = () => {
    const LanguageStore = useSelector((state) => state?.LanguageStore)
    const listLangue = {
        en: en,
        vi: vi,
        ge: ge,
    }

    const getTextLanguage = (text_params) => {
        let text = ''
        const langValue = LanguageStore?.language
        const getTextList = listLangue?.[langValue]
        if (listLangue?.[langValue]) {
            if (getTextList?.[text_params]) {
                text = getTextList?.[text_params]
            }
        }

        return text
    }

    return {
        getTextLanguage
    };
};

export default useLanguage;