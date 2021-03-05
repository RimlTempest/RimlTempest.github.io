export type LocaleType = {
    // 共有
    FUTURE_RELEASE: string,
    // Header
    TOPPAGE_HEADER_TEXT: string,
    ABOUT_HEADER_TEXT: string,
    PRODUCTS_HEADER_TEXT: string,
    CONTACT_HEADER_TEXT: string,
    // About
    ABOUT_TITLE: string,
    // Products
    PRODUCTS_TITLE: string,
    // Product
    PRODUCT_TITLE: string,
    // Contact
    CONTACT_TITLE: string,
    FRIEND_CODE_COPY_MESSAGE: string,
    ARCADE_GAME_CARD_TITLE: string,
    MOBILE_GAME_CARD_TITLE: string,
    CONTACT_CARD_TITLE: string,
    SUB_CONTACT_CARD_TITLE: string
}

export type Locale = {
    locale?: string;
    i18n: LocaleType;
}