import { RouteError } from '@/components/error/ErrorElement';
import { AuthRoutes } from '@/features/auth/routes';
import { LandingPageRoutes } from '@/features/landing/routes';
import { RouteObject } from 'react-router-dom';
import { BaseApp } from './BaseApp';

export const RoutesList: RouteObject[] = [
  {
    path: '',
    element: <BaseApp />,
    errorElement: <RouteError />,
    children: [LandingPageRoutes, AuthRoutes],
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
];
