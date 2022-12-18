import { Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Refund = (props: Props) => {
  return (
    <VStack p={10} alignItems={"stretch"}>
      <Heading pb={10}>RETURN POLICY</Heading>
      <Text>Last updated on December 21, 2021</Text>
      <Text>
        Thank you for your purchase. We hope you are happy with your purchase.
        However, if the purchase is a mistake or/and are not completely
        satisfied with your purchase for any reason, you may cancel your order
        with us for a full refund only. Please see below for more information on
        our return policy.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        SIZE EXCHANGES
      </Heading>
      <Text>
        You are allowed to change the size of T-shirts in your order within 7 days from your purchase date. Your 
        request us acceptable only if the order is not dispatched by then. Once the order is dispatched, there will be no 
        changes made.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        CANCELLATION PROCESS
      </Heading>
      <Text>
        You are entitled to cancel your order within 7 days of purchase without giving any reason for doing so. The above 
        statement is valid only if the order is not dispatched by then. 
      </Text>
      <Text>
        To cancel an order, please send an email to sales@shaastra.org.
      </Text>
      <Text>
        After receiving your request and inspecting the date of purchase of your
        item, we will process your return. Refunds may take 1-2 billing cycles
        to appear on your credit card statement, depending on your credit card
        company.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        EXCEPTIONS
      </Heading>
      <Text>
        For defective or damaged products, please contact us at the contact
        details below to arrange a refund or exchange.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        QUESTIONS
      </Heading>
      <Text>
        If you have any questions concerning our return policy, please contact
        us at:
        <br />
        <a href="mailto:sales@shaastra.org">sales@shaastra.org</a>&nbsp; or at
        +91 8897127106 - Sales Manager
      </Text>
    </VStack>
  );
};

export default Refund;
