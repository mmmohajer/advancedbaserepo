import Seo from "@/components/wrappers/Seo";
import AppContainer from "@/components/wrappers/AppContainer";
import Login from "@/components/appPages/Login";

import { APP_DOMAIN_FOR_CLIENT_SIDE, APP_NAME } from "config";

const Index = () => {
  return (
    <Seo
      title={`${APP_NAME} | Login`}
      url={`${APP_DOMAIN_FOR_CLIENT_SIDE}/app/login`}
    >
      <AppContainer isAuthPage={true} pageIdentifier="login" hasHeader={false}>
        <Login />
      </AppContainer>
    </Seo>
  );
};

export default Index;
