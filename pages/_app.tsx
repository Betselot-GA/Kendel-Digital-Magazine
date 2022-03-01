import React from 'react';
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../public/vendor/bootstrap/css/bootstrap.min.css";
import "../public/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/vendor/boxicons/css/boxicons.min.css";
import "../public/css/style.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <div>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </div>
  );
}

export default MyApp
