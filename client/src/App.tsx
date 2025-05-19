import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserProvider } from "@/context/UserContext";

import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/home";
import CharactersPage from "@/pages/characters";
import LearningMapPage from "@/pages/learning-map";
import MiniGamesPage from "@/pages/mini-games";
import ProgressPage from "@/pages/progress";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/characters" component={CharactersPage} />
      <Route path="/learning-map" component={LearningMapPage} />
      <Route path="/mini-games" component={MiniGamesPage} />
      <Route path="/progress" component={ProgressPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <UserProvider>
          <MainLayout>
            <Router />
          </MainLayout>
          <Toaster />
        </UserProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
