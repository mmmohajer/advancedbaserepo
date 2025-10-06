import axios from "axios";

import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import Home from "../components/publicWebPages/Home";

import { fetchDataForSSR } from "@/utils/ssr_helpers";
import {
  TESTIMONIALS_API_ROUTE,
  RECENT_TIPS_API_ROUTE,
  RECENT_BLOGS_API_ROUTE,
} from "@/constants/apiRoutes";

import { APP_DOMAIN_FOR_CLIENT_SIDE, APP_NAME } from "config";

const index = ({ testimonials, recentBlogs, recentTips }) => {
  return (
    <>
      <Seo url={`${APP_DOMAIN_FOR_CLIENT_SIDE}/`}>
        <PageContainer pageIdentifier="home">
          <Home
            testimonials={testimonials?.testimonials || []}
            recentBlogs={recentBlogs?.blogs || []}
            recentTips={recentTips?.tips || []}
          />
        </PageContainer>
      </Seo>
    </>
  );
};

export async function getServerSideProps(context) {
  const testimonials = await fetchDataForSSR(
    "list",
    `${TESTIMONIALS_API_ROUTE}`
  );
  const recentBlogs = await fetchDataForSSR(
    "list",
    `${RECENT_BLOGS_API_ROUTE}`
  );
  const recentTips = await fetchDataForSSR("list", `${RECENT_TIPS_API_ROUTE}`);
  return {
    props: { testimonials, recentBlogs, recentTips },
  };
}

export default index;
