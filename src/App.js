import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./NewHome/Home";
import NotFoundPage from "./pages/NotFoundPage";

import Contact from "./NewHome/Contact";

import {
  TermsOfUse,
  Privacy,
  AboutUs,
  PrivacyApp,
  TermsOfUseAPP,
} from "./legal/PrivacyPolicy";

import Four0Four from "./assets/four0four.gif";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Four0Four} />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/terms-of-use" component={TermsOfUse} />
          <Route exact path="/terms-of-use-app" component={TermsOfUseAPP} />

          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/privacy-app" component={PrivacyApp} />

          <Route exact path="/about" component={AboutUs} />

          {/* <Route exact path="/logout" component={Logout} />
            <Route exact path="/contact" component={Contact} /> */}
          {/* <Doc_layoutRoute exact path="/onboarding" component={OnBoarding} /> */}
          <Route path="*" component={NotFoundPage} />
        </Switch>

        {/* <CookieConsent /> */}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
