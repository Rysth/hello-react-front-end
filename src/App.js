import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './components/Greeting/Greeting';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <main className="max-w-screen-xl px-4 py-20 mx-auto">
        <RouterProvider router={router} />
      </main>
    </Provider>
  );
}

export default App;
