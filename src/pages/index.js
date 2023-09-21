import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Image from "next/image";

import toque from "../image/toque.webp";
import consignado from "../image/mulher-sorrindo.webp";
import fgts from "../image/homem-comemorando.webp";
import troca from "../image/troque-credito.webp";
import pessoal from "../image/mulher-dinheiro-mao.webp";
import cartaob from "../image/cartao-beneficiario.webp";
import abertura from "../image/abertura-cartao.webp";
import cartaoc from "../image/cartao-consignado.webp";
import financiamento from "../image/financiamento-veiculo.webp";
import refinanciamento from "../image/refinanciamento-veiculo.webp";
import consorcio from "../image/consorcio.webp";
import whats from "../image/whatsapp.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCommentAlt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Espaço Digital Financeiro</title>
        <meta
          name="description"
          content="Obtenha empréstimos consignados, antecipação FGTS, troca de crédito por dinheiro, financiamento de veículo e muito mais. Acesse o Espaço Digital Financeiro e Solicite seu empréstimo online em apenas alguns minutos!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </Head>

      <Header></Header>

      <main className={styles.backmain}>
        <section className={styles.hero}>
          <h1 className={styles.title__slide}>
            Empréstimos e Soluções Financeiras
          </h1>

          <div className={styles.frase__slide}>
            Aqui você encontra{" "}
            <strong className={styles.destaque__frase}>
              empréstimos consignados
            </strong>
            ,{" "}
            <strong className={styles.destaque__frase}>
              antecipação saque FGTS
            </strong>
            ,{" "}
            <strong className={styles.destaque__frase}>
              troca de crédito por dinheiro
            </strong>
            ,{" "}
            <strong className={styles.destaque__frase}>
              financiamento de veículo{" "}
            </strong>{" "}
            <span className={styles.muitomais}>
              e mais opções de crédito para você.
            </span>
            <div className={styles.contato}>
              Entre em contato ou solicite mais informações para saber como
              podemos ajudá-lo.
            </div>
            <div className={styles.iconContainer}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faCommentAlt} className={styles.icon} />
                <span className={styles.iconText}>Rápida</span>
              </div>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faShieldAlt} className={styles.icon} />
                <span className={styles.iconText}>Segura</span>
              </div>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
                <span className={styles.iconText}>Confiável</span>
              </div>
            </div>
          </div>

          <div className={styles.linha}>
            <a
              className={styles.bloco2}
              href="https://api.whatsapp.com/send?phone=5534991152814"
            >
              <Image className={styles.img__whats} src={whats}></Image>

              <i className={styles.whats__tel}>
                Solicite pelo Whatsapp <br />
                34 99115-2814
              </i>
            </a>
          </div>
        </section>
        <div className={styles.titulo__service}>Conheça nossos produtos</div>
        <section className={styles.services}>
          <a href="../consignado" className={styles.card}>
            <Image
              src={consignado}
              className={styles.img}
              alt="Idosos se abraçando"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Empréstimo Consignado</h3>
              <p className={styles.card__description}>
                Público: Aposentados, pensionitas, BPC-LOAS e servidores
                públicos.
              </p>

              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Aperte Saber mais</div>
              </div>
            </div>
          </a>
          <a href="../fgts" className={styles.card}>
            <Image
              src={fgts}
              className={styles.img}
              alt="Homem comemorando"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Antecipação FGTS</h3>

              <p className={styles.card__description}>
                Realize a antecipação do seu Fundo de Garantia de forma rápida e
                segura.
              </p>
              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Saber mais</div>
              </div>
            </div>
          </a>

          <a href="../trocacredito" className={styles.card}>
            <Image
              src={troca}
              className={styles.img}
              alt="mulher sorrindo com dinheiro e cartão nas mãos"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>
                Emprestimo Pessoal Troca Crédito
              </h3>

              <p className={styles.card__description}>
                Empréstimo pessoal utilizando o limite disponivel do seu cartão
                de crédito.
              </p>

              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Saber mais</div>
              </div>
            </div>
          </a>

          <a href="../pessoal" className={styles.card}>
            <Image
              src={pessoal}
              className={styles.img}
              alt="Mulher sorrindo segurando várias cédulas"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Empréstimo Pessoal</h3>
              <p className={styles.card__description}>
                Público:Exclusivo para beneficiarios do inss
                <br />
              </p>
              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Saber as condições</div>
              </div>
            </div>
          </a>
        </section>
        <div className={styles.titulos__services}>Cartões</div>
        <section className={styles.services}>
          <a href="../cartaobeneficiario" className={styles.card}>
            <Image
              src={cartaob}
              className={styles.img}
              alt="uma idosa com cartão na mão sorrindo olhando para outro idoso sorrindo"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Cartão Beneficiario</h3>
              <p className={styles.card__description}>
                Público: Aposentados, pensionitas, BPC-LOAS e servidores
                públicos.
              </p>
              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Saber mais</div>
              </div>
            </div>
          </a>
          <a href="../aberturacartao" className={styles.card}>
            <Image
              src={abertura}
              className={styles.img}
              alt="dois adultos comemorando, um rapaz com cartão na mão e a mulher com papel na mão"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Abertura de Conta</h3>
              <p className={styles.card__description}>
                Abra sua conta corrente facilmente e tenha chance a crédito.
              </p>

              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Saber mais</div>
              </div>
            </div>
          </a>

          <a href="../cartaoconsignado" className={styles.card}>
            <Image
              src={cartaoc}
              className={styles.img}
              alt="idoso conversando no telefone e com um cartão na mão"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Cartão Consignado</h3>
              <p className={styles.card__description}>
                Público: Aposentados, pensionitas, BPC-LOAS e servidores
                públicos.
              </p>

              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Saber mais</div>
              </div>
            </div>
          </a>
        </section>

        <div className={styles.titulos__services}>Veiculos</div>
        <section className={styles.services}>
          <a href="../financiamentoveiculo" className={styles.card}>
            <Image
              src={financiamento}
              className={styles.img}
              alt="um rapaz feliz, sorrindo agachado, apalpando a frente do carro, analisando o carro"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Financiamento de Veiculo</h3>
              <p className={styles.card__description}>
                Realize o sonho do seu novo carro com nosso financiamento.
              </p>

              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Saber mais</div>
              </div>
            </div>
          </a>

          <a href="../refinanciamentoveiculo" className={styles.card}>
            <Image
              src={refinanciamento}
              className={styles.img}
              alt="diversas moedas em cima da outra, ao lado calculadora, caneta e um carro de brinquedo"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Refinanciamento de Veiculo</h3>
              <p className={styles.card__description}>
                Utilize seu carro como garantia e obtenha um empréstimo com
                condições vantajosas.
              </p>
              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Saber mais</div>
              </div>
            </div>
          </a>

          <a href="../consorcio" className={styles.card}>
            <Image
              src={consorcio}
              className={styles.img}
              alt="duas pessoas analisando diversos papeis"
            ></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Consorcio</h3>
              <p className={styles.card__description}>
                Planeje seus sonhos com o consórcio e conquiste sua casa ou bem
                desejado.
              </p>
              <div className={styles.card__button}>
                <Image
                  src={toque}
                  className={styles.toque}
                  alt="Icone do mouse simbolizando um click/toque"
                ></Image>
                <div className={styles.aperte}>Saber mais</div>
              </div>
            </div>
          </a>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
