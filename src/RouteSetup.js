import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoaderComponenet from './components/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Providers = lazy(() => import('./pages/Providers'));
const Onboard = lazy(() => import('./pages/Onboard'));
const AddBranch = lazy(() => import('./pages/AddBranch'));
const ProviderDetail = lazy(() => import('./pages/ProviderDetail'));
const NotFound = lazy(() => import('./pages/404'));

const RouteSetup = () => {
  return (
    <Suspense fallback={<LoaderComponenet />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/providers/:detail" element={<ProviderDetail />} />
        <Route path="/onboard" element={<Onboard />} />
        <Route path="/addbranch/:docId" element={<AddBranch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouteSetup;
