import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render() {
    /* TODO:今後metaタグ部分はSSRするなりしてページごとにogp等の生成ができるようにする */
    return (
      <Html lang="ja-JP" dir="ltr">
        <Head>
          {/* windows */}
          <meta
            name="msapplication-square70x70logo"
            content="/site-tile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/site-tile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/site-tile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/site-tile-310x310.png"
          />
          <meta name="msapplication-TileColor" content="#000" />
          {/* safari */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
          <meta name="apple-mobile-web-app-title" content="DaikiTakahashi" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon-180x180.png"
          />
          {/* 一般 */}
          <meta name="application-name" content="DaikiTakahashi" />
          <meta name="theme-color" content="#68D391" />
          <meta name="description" content="TakahashiDaiki/RimlのPortfolio" />
          <meta property="og:url" content="https://RimlTempest.github.io" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio" />
          <meta
            property="og:description"
            content="TakahashiDaiki/RimlのPortfolio"
          />
          <meta property="og:site_name" content="DaikiTakahashi" />
          <meta property="og:image" content="/icon-512x512.png" />
          <meta name="twitter:card" content="Summary Card" />
          <meta name="twitter:site" content="@Fande4d" />
          <meta name="twitter:creator" content="@Fande4d" />
          <link rel="icon" sizes="192x192" href="/icon-192x192.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
