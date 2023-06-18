import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import customersServices from "@/services/customersServices";
import { ICustomers } from "@/interfaces/customerInterface";
import { useEffect, useState } from "react";
//import Container from "@/components/Container";
import { Container, Paper, TableContainer } from "@mui/material";
import PageContainer from "@/components/Container";
import PageContent from "@/components/Content";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: customers } = await customersServices.getCustomers();
  return {
    props: { customers },
  };
};

export default function Customers({ customers }: ICustomers) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <PageContainer title="Clientes">
      <PageContent>
        {customers?.map((customer) => (
          <p key={customer.id}>{customer.nome}</p>
        ))}
      </PageContent>
    </PageContainer>
  );
}
