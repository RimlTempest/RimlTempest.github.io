import { useRouter } from 'next/router';
import { ja } from '../../locales/ja';
import { en } from '../../locales/en';

export const useLocale = () => {
    const { locale } = useRouter();
    const i18n = locale === "ja" ? ja : en;
    return { locale, i18n }
}