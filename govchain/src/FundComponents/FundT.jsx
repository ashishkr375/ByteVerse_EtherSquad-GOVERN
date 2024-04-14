import React from "react";
import ReactDOM from "react-dom/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import HomeScreenT from "./HomeScreenT.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Details from "./Details.jsx";
import { polygonAmoy } from "thirdweb/chains";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreenT />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);
const activeChain = {
  chainId: 80002,
  rpc: ["https://80002.rpc.thirdweb.com"],

  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "MATIC",
  },
  shortName: "Amoy testnet",
  slug: "Amoytest",
  testnet: true,
  chain: "polygonAmoy",
  name: "Polygon Amoy Testnet",
};
const clientId = process.env.REACT_APP_THIRDWEB_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={"b11e2ff4a220d987b0d555c41a972299"}
      chainId={80002}
      supportedChains={[polygonAmoy]}
      autoConnect={true}
    >
      <RouterProvider router={router} />
    </ThirdwebProvider>
  </React.StrictMode>
);
