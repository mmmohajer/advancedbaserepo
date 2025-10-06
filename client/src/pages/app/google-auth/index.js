import { useSearchParams } from "next/navigation";

import Seo from "@/components/wrappers/Seo";
import AppContainer from "@/components/wrappers/AppContainer";
import AuthWithGoogle from "@/components/appPages/AuthWithGoogle";

import { APP_DOMAIN_FOR_CLIENT_SIDE, APP_NAME } from "config";

const Index = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  return (
    <Seo
      title={`${APP_NAME} | Authenticate with Google`}
      url={`${APP_DOMAIN_FOR_CLIENT_SIDE}/app/auth-with-google`}
    >
      <AppContainer
        isAuthPage={true}
        pageIdentifier="auth-with-google"
        hasHeader={false}
      >
        <AuthWithGoogle code={code} />
      </AppContainer>
    </Seo>
  );
};

export default Index;
