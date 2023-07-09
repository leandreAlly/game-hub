import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  limit: number;
}

const ExpandableText = ({ children, limit }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size='xs'
        fontWeight='bold'
        marginLeft={1}
        colorScheme='yellow'
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
