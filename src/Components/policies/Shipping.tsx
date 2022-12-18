import { Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Shipping = (props: Props) => {
  return (
    <VStack p={10} alignItems={"stretch"}>
      <Heading pb={10}>SHIPPING &amp; DELIVERY POLICY</Heading>
      <Text>Last updated on December 21, 2021</Text>
      <Text>
        Please carefully review our Shipping &amp; Delivery Policy when
        purchasing our Merchandise. This policy will apply to any order you
        place with us.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        WHAT ARE MY SHIPPING &amp; DELIVERY OPTIONS?
      </Heading>
      <Text>
        We offer various shipping options. In some cases a third-party supplier
        may be managing our inventory and will be responsible for shipping your
        products.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        Free Shipping
      </Heading>
      <Text>We offer free shipping on all orders</Text>
      <Text>
        Once your order is packed and dispatched we will send a email with the
        tracking details. The minimum dispatch time is 7 working days and at
        maximum, the order will be dispatched in 45 working days
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        DO YOU DELIVER INTERNATIONALLY?
      </Heading>
      <Text>We do not offer international shipping.</Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        CANCELLATION POLICY
      </Heading>
      <Text>
        Any order can be cancelled up to 7 days from the date of purchase. Upon
        cancellation a full refund will be initiated.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        HOW CAN YOU CONTACT US ABOUT THIS POLICY?
      </Heading>
      <Text>
        If you have any further questions or comments, you may contact us by:
        <br />
        Email: <a href="mailto:sales@shaastra.org">sales@shaastra.org</a>
        <br />
        Ph no: +91 8897127106 - Sales Manager
      </Text>
    </VStack>
  );
};

export default Shipping;
