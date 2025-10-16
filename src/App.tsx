
import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "./components/layout/MainLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

// Lazy-loaded components
const Admin = lazy(() => import("./pages/Admin"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const Industries = lazy(() => import("./pages/Industries.tsx"));
const FeatureCalling = lazy(() => import("./pages/features/Calling.tsx"));
const FeatureCallManagement = lazy(() => import("./pages/features/CallManagement.tsx"));
const FeatureCallReporting = lazy(() => import("./pages/features/CallReporting.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ErrorBoundary>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={
                  <Suspense fallback={<div>Loading Solutions...</div>}>
                    <Solutions />
                  </Suspense>
                } />
                <Route path="/solutions/contact-center" element={<Navigate to="/solutions#contact-center" replace />} />
                <Route path="/solutions/auto-dialer" element={<Navigate to="/solutions#auto-dialer" replace />} />
                <Route path="/solutions/power-dialer" element={<Navigate to="/solutions#power-dialer" replace />} />
                <Route path="/solutions/predictive-dialer" element={<Navigate to="/solutions#predictive-dialer" replace />} />
                <Route path="/solutions/cloud-pbx" element={<Navigate to="/solutions#cloud-pbx" replace />} />
                <Route path="/solutions/unified-communications" element={<Navigate to="/solutions#unified-communications" replace />} />
                <Route path="/about" element={<About />} />                
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={
                  <Suspense fallback={<div>Loading Pricing...</div>}>
                    <Pricing />
                  </Suspense>
                } />
                <Route path="/industries" element={
                  <Suspense fallback={<div>Loading Industries...</div>}>
                    <Industries />
                  </Suspense>
                } />
                <Route path="/features/contact-center" element={<Navigate to="/solutions#contact-center" replace />} />
                <Route path="/features/calling" element={
                  <Suspense fallback={<div>Loading Feature: Calling...</div>}>
                    <FeatureCalling />
                  </Suspense>
                } />
                <Route path="/features/call-management" element={
                  <Suspense fallback={<div>Loading Feature: Call Management...</div>}>
                    <FeatureCallManagement />
                  </Suspense>
                } />
                <Route path="/features/call-reporting" element={
                  <Suspense fallback={<div>Loading Feature: Call Reporting...</div>}>
                    <FeatureCallReporting />
                  </Suspense>
                } />
                <Route path="/admin" element={
                  <Suspense fallback={<div>Loading Admin...</div>}>
                    <Admin />
                  </Suspense>
                } />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
