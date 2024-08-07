import { ComponentType, lazy, Suspense } from 'react';
import { Layout } from './view/components/layout';

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) =>
    (
      <Suspense fallback={<div>Wait please</div>}>
        <Component {...props} />
      </Suspense>
    );

const CreateUser = Loadable(lazy(() => import('./view/pages/createUser')));
const DisplayUser = Loadable(lazy(() => import('./view/pages/displayUser')));
const DisplayUsers = Loadable(lazy(() => import('./view/pages/displayUsers')));

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
        element: <DisplayUser />,
      },
      {
        path: '/createUser',
        element: <CreateUser />,
      },
    ],
  },
];

export default routes;
