import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan, react, erc } from "@wagmi/cli/plugins";
import { goerli } from "wagmi/chains";

export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  });
  return {
    out: "src/generated.ts",
    plugins: [
      erc({
        20: false,
        721: true,
      }),
      etherscan({
        apiKey: env.ETHERSCAN_API_KEY!,
        chainId: goerli.id,
        contracts: [
          {
            name: "VapeGame",
            address: {
              [goerli.id]: "0x68ec1cE7718696DFb6deE8748c046986B48A411A",
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
  };
});
