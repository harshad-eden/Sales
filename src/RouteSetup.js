import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoaderComponenet from './components/Loader';

const Providers = lazy(() => import('./pages/Providers'));
const Onboard = lazy(() => import('./pages/Onboard'));
const AddBranch = lazy(() => import('./pages/AddBranch'));
const ProviderDetail = lazy(() => import('./pages/ProviderDetail'));
const ProviderEdit = lazy(() => import('./pages/ProviderEdit'));
const EditBranch = lazy(() => import('./pages/EditBranch'));
const NotFound = lazy(() => import('./pages/404'));

const RouteSetup = () => {
  return (
    <Suspense fallback={<LoaderComponenet />}>
      <Routes>
        <Route path="/" element={<Providers />} />
        <Route path="/:detail" element={<ProviderDetail />} />
        <Route path="/onboard" element={<Onboard />} />
        <Route path="/addbranch/:docid" element={<AddBranch />} />
        <Route path="/edit/:docId" element={<ProviderEdit />} />
        <Route path="/editbranch/:docId" element={<EditBranch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouteSetup;
