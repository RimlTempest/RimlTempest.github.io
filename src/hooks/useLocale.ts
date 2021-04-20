import { NextRouter, useRouter } from 'next/router';
import { ja } from '../../locales/ja';
import { en } from '../../locales/en';
import { LocaleType } from '../../locales/localeTypes';

export const useLocale = () => {
    //const { locale }: NextRouter = useRouter();
    const i18n: LocaleType = ja; // locale === "ja" ? ja : en;
    return { /*locale,*/ i18n }
}