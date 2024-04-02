import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface EmailProps {
  name?: string;
  email?: string;
  mountPath?: string;
  prevSize?: number;
  askSize?: number;
  purpose?: string;
}

export const Email = ({
  name,
  email,
  mountPath,
  prevSize,
  askSize,
  purpose,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-gray-100 bg-white rounded-md mt-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-2">
              <Img
                src={`https://ieeer8.org/wp-content/uploads/2017/12/Texas-Instruments-Brands-Logo-PNG-Transparent-1024x308.png`}
                width="180"
                height="auto"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Section>
              <Text className="text-center text-2xl font-semibold">
                Your Request Has Been Received
              </Text>
            </Section>

            <Section>
              <Text>Hello {name},</Text>
              <Row className="mb-1">
                <Column className="px-4 py-2 bg-gray-50 rounded">
                  <Text className="m-0 font-bold">Mount Path</Text>
                  <Text className="m-0">{mountPath}</Text>
                </Column>
              </Row>
              <Row>
                <Column className="px-4 py-2 bg-gray-50 rounded">
                  <Text className="m-0 font-bold">Qtree Previous Size</Text>
                  <Text className="m-0">{prevSize} (GB)</Text>
                </Column>
                <Column style={{ width: "4px" }}></Column>
                <Column className="px-4 py-2 bg-gray-50 rounded">
                  <Text className="m-0 font-bold">Qtree Asking Size</Text>
                  <Text className="m-0">{askSize} (GB)</Text>
                </Column>
              </Row>
              <Row className="mt-1">
                <Column className="px-4 py-2 bg-gray-50 rounded">
                  <Text className="m-0 font-bold">Purpose</Text>
                  <Text className="m-0">{purpose}</Text>
                </Column>
              </Row>
            </Section>
          </Container>
          <Container className="mt-2 mx-auto max-w-[465px]">
            <Section>
              <Text className="italic m-0">
                Please do not reply. This is a system-generated email.
              </Text>
              <Text className="italic m-0">
                For any further information, please contact{" "}
                <Link className="font-medium" href={`mailto:${email}`}>
                  {email}
                </Link>
              </Text>
            </Section>
            <Section className="mt-5 mb-10">
              <Text className="m-0">Regards,</Text>
              <Text className="m-0 font-bold text-md">{name}</Text>
              <Text className="mb-0 mt-0 text-[13px]">Storage Admin</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

Email.PreviewProps = {
  name: "Pritom Mondol",
  email: "pritammondol@gmail.com",
  mountPath: "r282hfs8ho2gh299420fhfse889",
  prevSize: 2,
  askSize: 4,
  purpose: "I want to use Vercel",
} as EmailProps;

export default Email;
