import { useSearchParams } from "next/navigation";

import Seo from "@/components/wrappers/Seo";
import AppContainer from "@/components/wrappers/AppContainer";
import RoleBasedRoute from "@/components/wrappers/RoleBasedRoute";
import Dashboard from "@/components/appPages/Dashboard";

import { APP_DOMAIN_FOR_CLIENT_SIDE, APP_NAME } from "config";

const Index = () => {
  return (
    <Seo
      title={`${APP_NAME} | Dashboard`}
      url={`${APP_DOMAIN_FOR_CLIENT_SIDE}/app/`}
    >
      <AppContainer
        pageIdentifier="dashboard"
        hasSideBarDashboard={true}
        hasHeader={true}
      >
        <RoleBasedRoute authorizedRoles={["CLIENT"]}>
          <Dashboard />
        </RoleBasedRoute>
      </AppContainer>
    </Seo>
  );
};

export default Index;
