import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Add from "./pages/Add";
import View from "./pages/View";
import Play from "./pages/play";
import Login from "./pages/login";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeAcFQ9e-MEtjsv69mrHxwa2QY6Q6AQiM",
  authDomain: "wsjp-08.firebaseapp.com",
  projectId: "wsjp-08",
  storageBucket: "wsjp-08.appspot.com",
  messagingSenderId: "92331641727",
  appId: "1:92331641727:web:42fe4c99804887b76f684a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <View />
          },
          {
            path: "/add",
            element: <Add />
          },
          {
            path: "/play",
            element: <Play />
          },
          {
            path: "/login",
            element: <Login />
          }
        ]
      }
    ]
  )
  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
