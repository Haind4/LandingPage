import Head from "next/head";
import Header from "../components/Header";
import { urlBaseGetImage } from "../Helper/helpFunction";
import favi from '../Page/Packet/Images/favi.png'

// const originPath = window.location.origin.split('//')[1]
let origin =
  typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : '';
origin = origin.replace('https://', '')
origin = origin.replace('http://', '')
const URL = `${origin}`;
//domain name becatambinh.com
export const APP_URL = process?.env?.NEXT_PUBLIC_DOMAIN_BASE || URL
export const stripHtml = (html) => {
  return html ? html.replace(/<[^>]*>?/gm, '') : html;
}

export const headWeb = (InformationWeb, url, detail = null) => {
  let title = InformationWeb?.title_seo
  let description = InformationWeb?.description_seo
  let favicon = urlBaseGetImage(favi.src)
  let image = urlBaseGetImage(InformationWeb?.image3)

  if (detail) {
    title = detail?.title
    description = detail?.description
    image = null
  }
  description = stripHtml(description)

  return <Head>
    <title>{title}</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <link rel="shortcut icon" href={favicon ? urlBaseGetImage(favicon) : null} />
    <link rel="icon" href={favi.src} />
    <meta name="keywords" content={description} />
    <meta name="author" content={url} />
    <meta property="og:url" content={`${url}`} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image ? urlBaseGetImage(image) : null} />
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"></script>
    {InformationWeb?.code_web_header ? parse(InformationWeb?.code_web_header) : null}
    <Header InformationWeb={InformationWeb} url={url} detail={detail} />
  </Head>
}

export const footWeb = (InformationWeb) => {
  return <>

    {InformationWeb?.code_web_footer ? parse(InformationWeb?.code_web_footer) : null}
  </>
}
