import Seo from "@/components/wrappers/Seo";
import AppContainer from "@/components/wrappers/AppContainer";
import Register from "@/components/appPages/Register";

import { APP_DOMAIN_FOR_CLIENT_SIDE, APP_NAME } from "config";

const Index = () => {
  return (
    <Seo
      title={`${APP_NAME} | Register`}
      url={`${APP_DOMAIN_FOR_CLIENT_SIDE}/app/register`}
    >
      <AppContainer
        isAuthPage={true}
        pageIdentifier="register"
        hasHeader={false}
      >
        <Register />
      </AppContainer>
    </Seo>
  );
};

export default Index;
