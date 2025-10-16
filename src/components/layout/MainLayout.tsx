import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import { useSiteSettings } from '@/hooks/useSanityContent';

interface MainLayoutProps {
  children: ReactNode;
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
    favicon?: string;
  };
}

const MainLayout = ({ children, seo }: MainLayoutProps) => {
  const { data: siteSettings } = useSiteSettings();

  // Maintenance banner logic
  const showMaintenance = (() => {
    if (!siteSettings?.maintenanceMode) return false;
    const now = new Date();
    const start = siteSettings.maintenanceStartDate ? new Date(siteSettings.maintenanceStartDate) : null;
    const end = siteSettings.maintenanceEndDate ? new Date(siteSettings.maintenanceEndDate) : null;
    if (start && now < start) return false;
    if (end && now > end) return false;
    return true;
  })();

  // Analytics scripts
  const analyticsScripts = [];
  if (siteSettings?.googleAnalyticsId) {
    analyticsScripts.push(
      <script key="ga" async src={`https://www.googletagmanager.com/gtag/js?id=${siteSettings.googleAnalyticsId}`}></script>
    );
    analyticsScripts.push(
      <script key="ga-init">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${siteSettings.googleAnalyticsId}');
      `}</script>
    );
  }
  if (siteSettings?.facebookPixelId) {
    analyticsScripts.push(
      <script key="fb-pixel">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${siteSettings.facebookPixelId}');
        fbq('track', 'PageView');
      `}</script>
    );
  }
  if (siteSettings?.otherTrackingCodes) {
    analyticsScripts.push(
      <script key="other-tracking" dangerouslySetInnerHTML={{ __html: siteSettings.otherTrackingCodes }} />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seo?.title}
        description={seo?.description}
        ogImage={seo?.ogImage}
        favicon={seo?.favicon}
      />
      {analyticsScripts}
      {showMaintenance && (
        <div className="w-full bg-warning text-center py-2 text-warning-foreground font-semibold">
          {typeof siteSettings?.maintenanceMessage === 'string'
            ? siteSettings.maintenanceMessage
            : 'The site is currently under maintenance.'}
        </div>
      )}
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;