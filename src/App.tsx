import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home';
import Posts from './components/posts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/post',
          element: <Posts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
