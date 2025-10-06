import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import AppContainer from "@/components/wrappers/AppContainer";
import RoleBasedRoute from "@/components/wrappers/RoleBasedRoute";
import DevDesign from "@/components/adminPages/DevPages/DevDesign";

const Index = () => {
  return (
    <>
      <Seo hidden_to_search_engines={true}>
        <AppContainer pageIdentifier="dev-page" hasSideBarDashboard={false}>
          <RoleBasedRoute authorizedRoles={["ADMIN"]}>
            <DevDesign />
          </RoleBasedRoute>
        </AppContainer>
      </Seo>
    </>
  );
};

export default Index;
