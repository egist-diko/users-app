import { ComponentType, lazy, Suspense } from 'react';
import { Layout } from './view/components/layout/layout';
import LoadingScreen from './view/components/loadingScreen';

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) =>
    (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );

const UserForm = Loadable(lazy(() => import('./view/pages/userForm')));
const DisplayUsers = Loadable(lazy(() => import('./view/pages/displayUsers')));
const DisplayUser = Loadable(lazy(() => import('./view/pages/displayUser')));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <DisplayUsers />,
      },
      {
        path: '/users',
        element: <DisplayUsers />,
      },
      {
        path: '/users/:id',
        element: <UserForm />,
      },
      {
        path: '/user/:id',
        element: <DisplayUser />,
      },
      {
        path: '/createUser',
        element: <UserForm />,
      },
    ],
  },
];

export default routes;
