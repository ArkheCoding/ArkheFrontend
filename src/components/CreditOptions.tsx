import { Box, Checkbox, Table, Text } from "@mantine/core";

type Props = {
  address: string;
  options: {
    maxAmount: string;
    minAmount: string;
    interestRate: string;
    maxDuration: string;
    collateralRate: string;
    isActive: boolean;
  }[];
};

export const CreditOptions: React.FC<Props> = ({ address, options }) => {
  const rows = options.map((element) => (
    <>
      <tr>
        <td>maxAmount</td>
        <td>{element.maxAmount}</td>
      </tr>
      <tr>
        <td>minAmount</td>
        <td>{element.minAmount}</td>
      </tr>
      <tr>
        <td>interestRate</td>
        <td>{element.interestRate}</td>
      </tr>
      <tr>
        <td>maxDuration</td>
        <td>{element.maxDuration}</td>
      </tr>
      <tr>
        <td>collateralRate</td>
        <td>{element.collateralRate}</td>
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
