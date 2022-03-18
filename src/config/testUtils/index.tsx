import React from "react";
import {
  act,
  fireEvent,
  render,
  RenderResult,
  screen,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router } from "react-router-dom";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import WalletProvider, {
  IWalletContext,
  WalletContext,
} from "contexts/walletContext";
import CurrentUserProvider, {
  CurrentUserContext,
  ICurrentUserContext,
} from "contexts/currentUserContext";

export function renderWithTheme(children: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export interface RenderWithContextResult {
  component: RenderResult;
  history: MemoryHistory;
  value?: IWalletContext;
}

export async function waitForPromises() {
  // eslint-disable-next-line no-promise-executor-return
  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
}

function renderProvider(
  RProvider: any,
  RContext: React.Context<any>,
  value: Record<any, any>,
  children: JSX.Element,
) {
  return (
    <RProvider>
      <RContext.Consumer>
        {(val: Record<any, any>) => (
          <RContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
              ...val,
              ...value,
            }}
          >
            {children}
          </RContext.Provider>
        )}
      </RContext.Consumer>
    </RProvider>
  );
}

export type RenderComponentProps = {
  history?: MemoryHistory;
  walletProviderValue?: Partial<IWalletContext>;
  currentUserProviderValue?: Partial<ICurrentUserContext>;
  locationState?: Record<any, any>;
};
export function renderComponent(
  component: JSX.Element,
  {
    history = createMemoryHistory(),
    walletProviderValue = {},
    currentUserProviderValue = {},
    locationState = {},
  }: RenderComponentProps = {},
): RenderWithContextResult {
  const queryClient = new QueryClient();
  const historyObject = { ...history, location: {state: locationState}} ;

  return {
    component: render(
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router history={historyObject as any}>
            {renderProvider(
              WalletProvider,
              WalletContext,
              walletProviderValue,
              renderProvider(
                CurrentUserProvider,
                CurrentUserContext,
                currentUserProviderValue,
                component,
              ),
            )}
          </Router>
        </QueryClientProvider>
      </ThemeProvider>,
    ),
    history,
  } as RenderWithContextResult;
}

export function expectTextToBeInTheDocument(text: string) {
  return expect(screen.getByText(text)).toBeInTheDocument();
}

export function expectImageToBeInTheDocument(alt: string) {
  return expect(screen.getByAltText(alt)).toBeInTheDocument();
}

export const mockNavigationFunction = jest.fn();
export function mockNavigation() {
  return jest.mock("hooks/useNavigation", () => ({
    __esModule: true,
    default: () => ({
      navigateTo: mockNavigationFunction,
      history: { location: {}, search: "" },
    }),
  }));
}

type expectPageToNavigateToType = {
  state?: Record<any, any>;
};
export function expectPageToNavigateTo(
  pathname: string,
  { state }: expectPageToNavigateToType,
) {
  if (!state)
    return expect(mockNavigationFunction).toHaveBeenCalledWith(pathname);

  return expect(mockNavigationFunction).toHaveBeenCalledWith({
    pathname,
    state,
  });
}

export function clickOn(text: string) {
  return fireEvent.click(screen.getByText(text));
}
