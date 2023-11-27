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
      <main class="max-w-screen-xl mx-auto px-4 py-20">
        <RouterProvider router={router} />
      </main>
    </Provider>
  );
}

export default App;
