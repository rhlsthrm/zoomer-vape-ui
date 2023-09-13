import { defineConfig } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { goerli } from "wagmi/chains";

export default defineConfig({
  out: "src/generated.ts",
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: goerli.id,
      contracts: [
        {
          name: "VapeGame",
          address: {
            [goerli.id]: "0x750eE132897423A4d1c8eD0fB567E720cB5cb7B5",
          },
        },
        {
          name: "ZoomerCoin",
          address: {
            [goerli.id]: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1",
          },
        },
      ],
    }),
    react(),
  ],
});
