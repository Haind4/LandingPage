import axios from "axios";
import { footWeb, headWeb } from "../app/Constant/config_global";
import { wrapper } from "../app/Store/store";
import Home from '../app/Page/Packet/Home/Home.tsx'
import { paramsFooter } from "../app/Helper/helpFunction.js";
const Index = (props) => {
  const InformationWeb = props?.InformationWeb
  const url = props?.url

  return (
    <>
      {headWeb(InformationWeb, url)}
      <Home />
      {footWeb(InformationWeb)}
    </>
  )
}

export default wrapper.withRedux(Index);

export async function getServerSideProps({ req, res }) {
  let InformationWeb = {
    title_seo: 'Trang chủ',
    description_seo: 'Trang chủ MHolding',
  }
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
  let dataProps = {
    props: {
      InformationWeb: InformationWeb,
      ...paramsFooter,
    },
  }
  return dataProps

}

