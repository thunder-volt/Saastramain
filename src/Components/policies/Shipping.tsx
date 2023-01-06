import { Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props { }

const Shipping = (props: Props) => {
  return (
    <body>
      <VStack p={10} alignItems={"stretch"}>
        <Heading alignSelf={"center"} fontSize={40} fontWeight={"bold"} pb={10}>SHIPPING &amp; DELIVERY POLICY</Heading>
        <Text>Last updated on December 21, 2022</Text>
        <Text>
          Please carefully review our Shipping &amp; Delivery Policy when
          purchasing our Merchandise. This policy will apply to any order you
          place with us.
        </Text>
        <Heading fontSize={24} pt={8} fontWeight={"bold"} textAlign={"left"}>
          What are my shipping &amp; delivery options?
        </Heading>
        <Text>
          We offer various shipping options. In some cases a third-party supplier
          may be managing our inventory and will be responsible for shipping your
          products.
        </Text>
        <ul>
          <li><Heading fontSize={18} pt={8} fontWeight={"bold"} textAlign={"left"}>
            Free Shipping
          </Heading></li>
          <Text>We offer free shipping on all orders.
            Once your order is packed and dispatched we will send a email with the
            tracking details. The minimum dispatch time is 7 working days and at
            maximum, the order will be dispatched in 45 working days
          </Text>
        </ul>

        <Heading fontSize={24} pt={8} fontWeight={"bold"} textAlign={"left"}>
          Do you deliver internationally?
        </Heading>
        <Text>We do not offer international shipping.</Text>
        <Heading fontSize={24} pt={8} fontWeight={"bold"} textAlign={"left"}>
          Cancellation Policy
        </Heading>
        <Text>
          Any order can be cancelled up to 7 days from the date of purchase. Upon
          cancellation a full refund will be initiated.
        </Text>
        <Heading fontSize={24} pt={8} fontWeight={"bold"} textAlign={"left"}>
          How you can contact us about this policy
        </Heading>
        <Text>
          If you have any further questions or comments, you may contact us by:
          <br />
          Email: <a href="mailto:sales@shaastra.org">sales@shaastra.org</a>
          <br />
          Ph no: +91 7095649030 - Sales Manager
        </Text>
      </VStack>
    </body>
  );
};

export default Shipping;
