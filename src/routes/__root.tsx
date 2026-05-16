import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="aurora min-h-screen grid place-items-center px-4">
      <div className="glass-card max-w-md w-full p-10 text-center">
        <div className="text-7xl font-display font-bold text-gradient">404</div>
        <h2 className="mt-3 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-flex btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold">Back to home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="aurora min-h-screen grid place-items-center px-4">
      <div className="glass-card max-w-md w-full p-10 text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or return home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold">Try again</button>
          <a href="/" className="px-4 py-2 rounded-xl text-sm font-semibold border border-border">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Epitome Steel — Engineering Strength. Building the Future." },
      { name: "description", content: "World-class steel manufacturing and civil engineering. Precision-fabricated PEB buildings, structural steel, industrial sheds and roofing systems." },
      { name: "theme-color", content: "#1D4ED8" },
      { property: "og:site_name", content: "Epitome Steel" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Epitome Steel — Engineering Strength. Building the Future." },
      { name: "twitter:title", content: "Epitome Steel — Engineering Strength. Building the Future." },
      { property: "og:description", content: "World-class steel manufacturing and civil engineering. Precision-fabricated PEB buildings, structural steel, industrial sheds and roofing systems." },
      { name: "twitter:description", content: "World-class steel manufacturing and civil engineering. Precision-fabricated PEB buildings, structural steel, industrial sheds and roofing systems." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d5fa3bf4-bbd7-41e5-b448-ac212996e9c7/id-preview-4227d9fd--2863ffb4-6575-4fc6-b5c7-8574fba84131.lovable.app-1778913799367.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d5fa3bf4-bbd7-41e5-b448-ac212996e9c7/id-preview-4227d9fd--2863ffb4-6575-4fc6-b5c7-8574fba84131.lovable.app-1778913799367.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
