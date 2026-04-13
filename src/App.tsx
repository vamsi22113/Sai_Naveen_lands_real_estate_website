import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Lazy Loaded Routes
const PlaceDetail = lazy(() => import("./pages/PlaceDetail.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.tsx"));
const BookVisit = lazy(() => import("./pages/BookVisit.tsx"));
const Reviews = lazy(() => import("./pages/Reviews.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isPlaceModal = location.pathname.startsWith("/places/");
  const isServiceModal = location.pathname.startsWith("/services/") && location.pathname !== "/services";
  const isModalOpen = isPlaceModal || isServiceModal;
  const showIndexBackground = location.pathname === "/" || isModalOpen;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <ScrollToTop />
      
      {showIndexBackground && (
        <div aria-hidden={isModalOpen}>
          <Index />
          <Footer />
        </div>
      )}

      <div className={isModalOpen ? "fixed inset-0 z-[100] bg-background overflow-y-auto h-[100dvh] w-full" : ""}>
        <Suspense fallback={<div className="fixed inset-0 z-[110] flex items-center justify-center bg-background/50 backdrop-blur-sm"><div className="w-10 h-10 border-4 border-muted border-t-primary rounded-full animate-spin"></div></div>}>
          <Routes>
          <Route path="/" element={<div className="hidden" />} />
          <Route path="/places/:slug" element={<div className="bg-background w-full"><PlaceDetail /><Footer /></div>} />
          <Route path="/services/:slug" element={<div className="bg-background w-full"><ServiceDetail /><Footer /></div>} />
          
          {!showIndexBackground && (
            <>
              <Route path="/services" element={<><Services /><Footer /></>} />
              <Route path="/book-visit" element={<><BookVisit /><Footer /></>} />
              <Route path="/reviews" element={<><Reviews /><Footer /></>} />
              <Route path="/contact" element={<><Contact /><Footer /></>} />
              <Route path="*" element={<><NotFound /><Footer /></>} />
            </>
          )}
        </Routes>
        </Suspense>
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
