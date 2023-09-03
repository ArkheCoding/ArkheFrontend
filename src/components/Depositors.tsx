import { Box, Table, Text } from "@mantine/core";
import { Heading } from ".";

type Props = {
  data: { address: string; amount: string; availableAmount: string }[];
};

export const Depositors: React.FC<Props> = ({ data }) => {
  console.log({ data });
  const rows = data.map((element) => (
    <tr key={element.address}>
      <td>{element.address}</td>
      <td>{element.amount.toString()}</td>
      <td>{element.availableAmount.toString()}</td>
    </tr>
  ));
  return (
    <Box my="lg">
      <Heading text="Depositors" />
      <Table>
        <thead>
          <tr>
            <th>address</th>
            <th>amount</th>
            <th>availableAmount</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
