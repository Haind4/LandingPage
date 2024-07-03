import axios from "axios";
import { footWeb, headWeb } from "../app/Constant/config_global";
import { wrapper } from "../app/Store/store";
import Home from '../app/Page/Packet/Home/Home.tsx'
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
  const url = process?.env?.NEXT_PUBLIC_DEV_LINK_IP || "http://10.90.9.30:8050/api"
  let InformationWeb = {}

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {
      url: url,
      InformationWeb: InformationWeb
    },
  }
}

