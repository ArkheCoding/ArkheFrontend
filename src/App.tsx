import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages";
import { ethers } from "ethers";

// It will prompt user for account connections if it isnt connected
// const signer = await provider.getSigner();
// console.log("Account:", await signer.getAddress());

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
