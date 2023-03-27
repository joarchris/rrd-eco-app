// rrd imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// librarys
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Actions
import { logoutAction } from './actions/logout';

// Layouts
import Main, { MainLoader } from './layouts/Main';

// Routes
import Dashboard, { dashboardLoader, dashboardAction } from './pages/Dashboard';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
