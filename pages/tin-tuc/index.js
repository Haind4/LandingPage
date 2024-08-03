import { useRouter } from "next/router";
import { wrapper } from "../../app/Store/store";
import NewsTinTuc from "../../app/Page/Packet/News/components/News";
import { footWeb, headWeb } from "../../app/Constant/config_global";
import { paramsFooter } from "../../app/Helper/helpFunction";

const Index = (props) => {
    const InformationWeb = props?.InformationWeb;
    const router = useRouter();
    const url = `${props?.url}${router?.asPath}`;

    return (
        <>
            {headWeb(InformationWeb, url)}
            <NewsTinTuc />
            {footWeb(InformationWeb, url)}
        </>
    );
};

export default wrapper.withRedux(Index);;

export async function getServerSideProps({ req, res, resolvedUrl }) {
    let InformationWeb = {
        title_seo: 'Tin tức',
        description_seo: 'Thông tin tin tức',
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
