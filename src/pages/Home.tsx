import { Box, Button, Container, Input, Paper, Text } from "@mantine/core";
import { Depositors } from "../components";
import data from "../data";
import { Contract, ethers, formatEther, parseUnits } from "ethers";
import { useState } from "react";
import AKM_abi from "../AKM_abi";
import P2P_abi from "../P2P_abi";

const { depositors } = data;
const provider = new ethers.BrowserProvider((window as any).ethereum);

export const Home: React.FC = () => {
  const [signer, setSigner] = useState<any>(null);
  const [currentAddress, setCurrentAddress] = useState<any>(null);
  const [P2PContract, setP2PContract] = useState<any>(null);
  const connectWallet = async () => {
    const temp = await provider.getSigner();
    const addr = await temp.getAddress();
    console.log("Account:", addr);
    setCurrentAddress(addr);
    setSigner(temp);

    const contract = new Contract(
      "0x95C7B70D9352b08feffAfA7cd0dADa6855e02Ac4",
      P2P_abi,
      temp
    );
    setP2PContract(contract);
  };

  const getAKMBalance = async () => {
    const contract = new Contract(
      "0x79d5e123344F33f01BEc501301D1A0E17273515F",
      AKM_abi,
      provider
    );
    const balance = await contract.balanceOf(currentAddress);
    alert(formatEther(balance));
  };

  const getBlockNumber = async () => {
    // const temp = ;
    alert(await provider.getBlockNumber());
  };
  const getBalance = async () => {
    let balance = await provider.getBalance(currentAddress);

    alert(formatEther(balance));
  };

  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const mint = async (_to: string, _amount: string) => {
    const contract = new Contract(
      "0x79d5e123344F33f01BEc501301D1A0E17273515F",
      AKM_abi,
      signer // provider
    );
    const amount = parseUnits(_amount, 18);
    const tx = await contract.mint(_to, amount);
    await tx.wait();
    console.log(tx);
  };

  const getAllowedToken = async () => {
    const temp = await P2PContract.allowedToken();
    console.log("allowed token", temp);
  };

  const [depositorsData, setDepositorsData] = useState<any>([]);

  const getData = async () => {
    const temp = await P2PContract.depositors(currentAddress);
    console.log("depositor: me: ", temp);
    setDepositorsData([
      { address: currentAddress, amount: temp[0], availableAmount: temp[0] },
    ]);
  };

  return (
    <Container>
      <Paper shadow="xs" p="md" mt="xl">
        <Button onClick={connectWallet}>Connect Wallet</Button>
        <Button onClick={getBlockNumber}>Get Block Number</Button>
        <Button onClick={getBalance}>Get Balance</Button>
        <Button onClick={getAKMBalance}>Get AKM Balance</Button>
        <Button onClick={getAllowedToken}>Allowed Token</Button>
        <Button onClick={getData}>get data</Button>
        <Depositors data={depositorsData} />

        <Box style={{ border: "1px solid black" }}>
          <Text>to</Text>
          <Input value={to} onChange={(e) => setTo(e.target.value)} />
          <br />
          <Text>amount</Text>
          <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
          <br />
          <Button onClick={() => mint(to, amount)}>Mint</Button>
        </Box>
        <Depositors data={depositors} />
      </Paper>
    </Container>
  );
};
