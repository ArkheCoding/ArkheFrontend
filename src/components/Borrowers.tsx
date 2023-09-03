import { Table } from "@mantine/core";
import { Heading } from ".";

type Props = {
  data: {
    address: string;
    collateralAmount: string;
    availableCollateralAmount: string;
    loanAmount: string;
    loanRepaid: string;
  }[];
};

export const Borrowers: React.FC<Props> = ({ data }) => {
  const rows = data.map((element) => (
    <tr key={element.address}>
      <td>{element.address}</td>
      <td>{element.collateralAmount}</td>
      <td>{element.availableCollateralAmount}</td>
      <td>{element.loanAmount}</td>
      <td>{element.loanRepaid}</td>
    </tr>
  ));
  return (
    <>
      <Heading text="Borrowers" />
      <Table>
        <thead>
          <tr>
            <th>Address</th>
            <th>collateralAmount</th>
            <th>availableCollateralAmount</th>
            <th>loanAmount</th>
            <th>loanRepaid</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};
