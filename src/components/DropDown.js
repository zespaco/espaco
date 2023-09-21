import React from "react";
import { Dropdown } from "@nextui-org/react";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/react";

export default function DropDown() {
  const [selectedColor, setSelectedColor] = React.useState("white");
  const [selectedSize, setSelectedSize] = React.useState(300);

  const menuItems = [
    { key: "consignado", name: "Emprestimo consignado" },
    { key: "fgts", name: "Antecipação saque FGTS" },
    { key: "trocacredito", name: "Troca Credito" },
    { key: "pessoal", name: "Pessoal Inss" },
    { key: "cartaobeneficiario", name: "Cartão Beneficiario" },
    { key: "aberturacartao", name: "Abertura de Conta" },
    { key: "cartaoconsignado", name: "Cartão Consignado" },
    { key: "financiamentoveiculo", name: "Financiamento Veiculo" },
    { key: "refinanciamentoveiculo", name: "Refinanciamento Veiculo" },
    { key: "consorcio", name: "Consorcio" },
  ];
  const categorias = [
    {
      titulo: "Empréstimo",
      itens: [
        "Empréstimo consignado",
        "Antecipação saque FGTS",
        "Troca Crédito",
        "Pessoal Inss",
      ],
    },
    {
      titulo: "Cartões",
      itens: ["Cartão Beneficiário", "Abertura de Conta", "Cartão Consignado"],
    },
    {
      titulo: "Veículo",
      itens: ["Financiamento Veículo", "Refinanciamento Veículo", "Consórcio"],
    },
  ];
  const router = useRouter();
  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          fontWeight: "$semibold",
          fontSize: "1rem",
          paddingLeft: "0",
          marginLeft: "0",
          justifyContent: "flex-start",
          "@media (max-width: 425px)": {
            color: "#333",
          },
          "@media (min-width: 426px)": {
            color: "white",
          },
        }}
        className={styles.instituicao}
        light
      >
        Produtos
      </Dropdown.Button>

      <Dropdown.Menu
        css={{
          background: "#f0f0f04",
        }}
        className={styles.aa}
        aria-label=""
        items={menuItems}
      >
        {(item) => (
          <Dropdown.Item
            key={item.key}
            className={styles.aas}
            css={{
              borderBottom: "1px solid #e4e4e4",
              padding: "0.5rem 1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "background-color 0.2s ease-in-out",
              backgroundColor: "white",
              color: "#333",
            }}
          >
            <Link
              css={{
                fontWeight: "$semibold",
                fontSize: "1rem",
                color: "black",
                fontFamily: "$Lato sans-serif",
              }}
              href={item.key}
            >
              {item.name}
            </Link>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
