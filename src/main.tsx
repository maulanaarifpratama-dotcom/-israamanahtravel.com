import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from '@tanstack/react-router'
import App from './App'

// Alat internal CS: dipisah agar tidak menambah bundle halaman utama.
const CsPage = lazy(() => import('./pages/CsPage'))
import './index.css'

const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const csRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cs',
  component: () => (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <CsPage />
    </Suspense>
  ),
})

const routeTree = rootRoute.addChildren([indexRoute, csRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
