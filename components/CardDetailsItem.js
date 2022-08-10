import { Heading, UnorderedList, ListItem, Text } from "@chakra-ui/react";
export default function CardDetailsItem({ label, content, type = "string" }) {
  return (
    <>
      {type === "string" ? (
        <>
          <Text>
            {label}: {content ?? "???"}
          </Text>
        </>
      ) : (
        <>
          <Text>{label}</Text>
          <Text>
            {/* {content.map((text, index) => (
              <UnorderedList key={index}>
                <ListItem>{text}</ListItem>
              </UnorderedList>
            )) ?? '???'} */}
          </Text>
        </>
      )}
    </>
  );
}
