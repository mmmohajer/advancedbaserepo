import { useSearchParams } from "next/navigation";

import Seo from "@/components/wrappers/Seo";
import AppContainer from "@/components/wrappers/AppContainer";
import ActivateUser from "@/components/appPages/ActivateUser";

import { APP_DOMAIN_FOR_CLIENT_SIDE, APP_NAME } from "config";

const Index = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const redirectUrl = searchParams.get("redirect_url");

  return (
    <Seo
      title={`${APP_NAME} | Activate User Account`}
      url={`${APP_DOMAIN_FOR_CLIENT_SIDE}/app/activate-user`}
    >
      <AppContainer
        isAuthPage={true}
        pageIdentifier="activate-user"
        hasHeader={false}
      >
        <ActivateUser token={token} redirectUrl={redirectUrl} />
      </AppContainer>
    </Seo>
  );
};

export default Index;
