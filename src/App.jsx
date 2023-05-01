// rrd imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// librarys
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Actions
import { logoutAction } from './actions/logout';

// Layouts
import Main, { MainLoader } from './layouts/Main';
import BudgetPage, { budgetAction, budgetLoader } from './pages/BudgetPage';

// Routes
import Dashboard, { dashboardLoader, dashboardAction } from './pages/Dashboard';
import Error from './pages/Error';
import ExpensesPage, { expensesAction, expensesLoader } from './pages/ExpensesPage';

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
        path: 'budget/:id',
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
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
