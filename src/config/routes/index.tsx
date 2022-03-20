import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import CurrentUserProvider from "contexts/currentUserContext";
import WalletProvider from "contexts/walletContext";
import HomePage from "pages/HomePage";
import MainLayout from "layouts/MainLayout";
import StudentsPage from "pages/StudentsPage";
import RegisterStudentPage from "../../pages/RegisterStudentPage";
import RegisterClassPage from "../../pages/RegisterClassPage";
import ClassShowPage from "../../pages/ClassShowPage";
import RegisterClassAttendancePage from "../../pages/RegisterClassAttendancePage";
import DonorPage from "../../pages/DonorPage";
import DonorRedeemPage from "../../pages/DonorRedeemPage";
import DonorLayout from "../../layouts/DonorLayout";

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
              <MainLayout hasBackButton>
                <RegisterStudentPage />
              </MainLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>

      <Route path="/classes/register" exact>
        <Suspense fallback={<div />}>
          <WalletProvider>
            <CurrentUserProvider>
              <MainLayout hasBackButton>
                <RegisterClassPage />
              </MainLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>

      <Route path="/classes/show" exact>
        <Suspense fallback={<div />}>
          <WalletProvider>
            <CurrentUserProvider>
              <MainLayout hasBackButton>
                <ClassShowPage />
              </MainLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>

      <Route path="/classes/register-attendance" exact>
        <Suspense fallback={<div />}>
          <WalletProvider>
            <CurrentUserProvider>
              <MainLayout hasBackButton>
                <RegisterClassAttendancePage />
              </MainLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>

      <Route path="/donor" exact>
        <Suspense fallback={<div />}>
          <WalletProvider>
            <CurrentUserProvider>
              <DonorLayout>
                <DonorPage />
              </DonorLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>

      <Route path="/donor/redeem" exact>
        <Suspense fallback={<div />}>
          <WalletProvider>
            <CurrentUserProvider>
              <DonorLayout>
                <DonorRedeemPage />
              </DonorLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>
    </Switch>
  );
}

export default RoutesComponent;
