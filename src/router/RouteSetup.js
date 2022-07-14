import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoaderComponenet from '../components/Loader';
import { PrivateRoute } from './PrivateRoute';

const Providers = lazy(() => import('../pages/Providers'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Onboard = lazy(() => import('../pages/Onboard'));
const AddBranch = lazy(() => import('../pages/AddBranch'));
const ProviderDetail = lazy(() => import('../pages/ProviderDetail'));
const ProviderEdit = lazy(() => import('../pages/ProviderEdit'));
const EditBranch = lazy(() => import('../pages/EditBranch'));
const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../pages/404'));

const RouteSetup = () => {
  return (
    <Suspense fallback={<LoaderComponenet />}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/providers"
          element={
            <PrivateRoute>
              <Providers />
            </PrivateRoute>
          }
        />
        <Route
          path="/:docId"
          element={
            <PrivateRoute>
              <ProviderDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/onboard"
          element={
            <PrivateRoute>
              <Onboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/addbranch/:docid"
          element={
            <PrivateRoute>
              <AddBranch />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:docId"
          element={
            <PrivateRoute>
              <ProviderEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/editbranch/:docId"
          element={
            <PrivateRoute>
              <EditBranch />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouteSetup;
