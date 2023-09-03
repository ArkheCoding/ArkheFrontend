import { Text } from "@mantine/core";
type Props = { text: string };
export const Heading = ({ text }: Props) => {
  return <Text fz="lg">{text}</Text>;
};
