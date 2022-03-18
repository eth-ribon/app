import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import CurrentUserProvider from "contexts/currentUserContext";
import WalletProvider from "contexts/walletContext";
import HomePage from "pages/HomePage";
import MainLayout from "layouts/MainLayout";
import Navigation from "./Navigation";

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
    </Switch>
  );
}

export default RoutesComponent;
