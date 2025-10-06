import Seo from "@/components/wrappers/Seo";
import AppContainer from "@/components/wrappers/AppContainer";
import ForgotPassword from "@/components/appPages/ForgotPassword";

import { APP_DOMAIN_FOR_CLIENT_SIDE, APP_NAME } from "config";

const Index = () => {
  return (
    <Seo
      title={`${APP_NAME} | Forgot Your Password`}
      url={`${APP_DOMAIN_FOR_CLIENT_SIDE}/app/forgot-password`}
    >
      <AppContainer
        isAuthPage={true}
        pageIdentifier="forgot-password"
        hasHeader={false}
      >
        <ForgotPassword />
      </AppContainer>
    </Seo>
  );
};

export default Index;
