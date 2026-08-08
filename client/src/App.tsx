import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const Collections = lazy(() => import("./pages/Collections"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="w-8 h-8 rounded-full border-4 border-gold border-t-transparent animate-spin"></div></div>}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/collections"} component={Collections} />
        <Route path={"/gallery"} component={Gallery} />
        <Route path={"/faq"} component={FAQ} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
