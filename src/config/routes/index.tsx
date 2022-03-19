import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import CurrentUserProvider from "contexts/currentUserContext";
import WalletProvider from "contexts/walletContext";
import HomePage from "pages/HomePage";
import MainLayout from "layouts/MainLayout";
import StudentsPage from "pages/StudentsPage";
import RegisterStudentPage from "../../pages/RegisterStudentPage";

function RoutesComponent(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact>
        <Suspense fallback={<div />}>
          <WalletProvider>
            <CurrentUserProvider>
              <MainLayout>
                <HomePage />
              </MainLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>

      <Route path="/students" exact>
        <Suspense fallback={<div />}>
          <WalletProvider>
            <CurrentUserProvider>
              <MainLayout>
                <StudentsPage />
              </MainLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>

      <Route path="/students/register" exact>
        <Suspense fallback={<div />}>
          <WalletProvider>
            <CurrentUserProvider>
              <MainLayout>
                <RegisterStudentPage />
              </MainLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>
    </Switch>
  );
}

export default RoutesComponent;
