import { Box, Checkbox, Table, Text } from "@mantine/core";

type Props = {
  address: string;
  options: {
    amount: string;
    repaidAmount: string;
    startedAt: string;
    endsAt: string;
    interestRate: string;
    collateralRate: string;
    depositor: string;
    isActive: boolean;
  }[];
};

export const Credits: React.FC<Props> = ({ address, options }) => {
  const rows = options.map((element) => (
    <>
      <tr>
        <td>amount</td>
        <td>{element.amount}</td>
      </tr>
      <tr>
        <td>repaidAmount</td>
        <td>{element.repaidAmount}</td>
      </tr>
      <tr>
        <td>startedAt</td>
        <td>{element.startedAt}</td>
      </tr>
      <tr>
        <td>endsAt</td>
        <td>{element.endsAt}</td>
      </tr>
      <tr>
        <td>interestRate</td>
        <td>{element.interestRate}</td>
      </tr>
      <tr>
        <td>collateralRate</td>
        <td>{element.collateralRate}</td>
      </tr>
      <tr>
        <td>depositor</td>
        <td>{element.depositor}</td>
      </tr>
      <tr>
        <td>isActive</td>
        <td>
          <Checkbox checked={element.isActive} disabled />
        </td>
      </tr>
    </>
  ));
  return (
    <Box>
      <Text fz="lg">{address}</Text>
      <Table>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
