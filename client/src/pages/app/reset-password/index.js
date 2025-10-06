import { useSearchParams } from "next/navigation";

import Seo from "@/components/wrappers/Seo";
import AppContainer from "@/components/wrappers/AppContainer";
import ResetPassword from "@/components/appPages/ResetPassword";

import { APP_DOMAIN_FOR_CLIENT_SIDE, APP_NAME } from "config";

const Index = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  return (
    <Seo
      title={`${APP_NAME} | Reset Your Password`}
      url={`${APP_DOMAIN_FOR_CLIENT_SIDE}/app/reset-password`}
    >
      <AppContainer
        isAuthPage={true}
        pageIdentifier="reset-password"
        hasHeader={false}
      >
        <ResetPassword token={token} email={email} />
      </AppContainer>
    </Seo>
  );
};

export default Index;
