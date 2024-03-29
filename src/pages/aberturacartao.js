import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormMain from "../components/FormMain";
import styles from "../../styles/Abertura.module.css";

import Image from "next/image";
import whats from "../image/whatsapp.webp";
import Faq from "@/components/Faq";

import { Link, animateScroll as scroll } from "react-scroll";

export default function AberturaConta() {
  const scrollToForm = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1440) {
      scroll.scrollTo(1850);
    } else if (screenWidth === 1024) {
      scroll.scrollTo(2300);
    } else if (screenWidth === 768) {
      scroll.scrollTo(2800);
    } else {
      scroll.scrollTo(3200);
    }
  };

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

      <div>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Abertura de Conta</h1>
            <p className={styles.heroText}>
              Abra sua conta 100% online com facilidade e rapidez, em apenas
              alguns cliques.
            </p>

            <a
              className={styles.btn}
              href="https://api.whatsapp.com/send?phone=5534991152814"
              target="._blank"
            >
              Abra pelo WhatsApp
              <Image className={styles.img__whats} src={whats}></Image>
            </a>
          </div>
        </section>

        <section className={styles.howToApply}>
          <div className={styles.howToApplyTitle}>
            <h2 className={styles.contratarTitle}>
              Abrir conta corrente é fácil, rápido e seguro.
            </h2>
            <p className={styles.contratarText}>
              Siga as instruções e aproveite as vantagens do seu cartão.
            </p>

            <a className={styles.bloco2} href="#form" onClick={scrollToForm}>
              <button onClick={scrollToForm} className={styles.btn2}>
                Abrir Conta
              </button>
            </a>
          </div>
          <div className={styles.steps}>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepConnector}></div>
              </div>
              <div className={styles.col}>
                <div className={styles.stepContent}>
                  <h2 className={styles.stepTitle}>Preencha o formulário</h2>
                  <p className={styles.stepDescription}>
                    Para verificar se o seu CPF foi pre-aprovado, precisamos de
                    alguns dados . É seguro e rápido. Clique em Abrir conta.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepConnector}></div>
              </div>
              <div className={styles.col}>
                <div className={styles.stepContent}>
                  <h2 className={styles.stepTitle}>Contratação via WhatsApp</h2>
                  <p className={styles.stepDescription}>
                    Você receberá todas as informações necessárias, sem sair de
                    casa.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepConnector}></div>
              </div>
              <div className={styles.col}>
                <div className={styles.stepContent}>
                  <h2 className={styles.stepTitle}>Resposta rápida</h2>
                  <p className={styles.stepDescription}>
                    Após analisar seu pedido e obter a aprovação, você poderá
                    movimentar a conta e em breve receberá o seu cartão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.advantages}>
          <h2 className={styles.advantagesTitle}>
            Vantagens Abertura de Conta Corrente
          </h2>
          <div className={styles.valuesContainer}>
            <div className={styles.valueCard}>
              <div
                className={styles.valueCardImg}
                alt="Taxa de Juros Atrativas"
              ></div>
              <h3 className={styles.valueCardTitle}>Tarifa</h3>
              <p className={styles.valueCardText}>
                Para zerar deposite R$1000,00 e pague um boleto todo mês.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueCardImg2} alt="Anuidade"></div>
              <h3 className={styles.valueCardTitle}>Anuidade</h3>
              <p className={styles.valueCardText}>
                Planos de R$0 até R$79,60 Você escolhe.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div
                className={styles.valueCardImg3}
                alt="Chance de crédito"
              ></div>
              <h3 className={styles.valueCardTitle}>Chance de crédito</h3>
              <p className={styles.valueCardText}>
                Analise possibilidade de crédito!
              </p>
            </div>
            <div className={styles.valueCard}>
              <div
                className={styles.valueCardImg4}
                alt="10 dias sem juros"
              ></div>
              <h3 className={styles.valueCardTitle}>10 dias sem juros </h3>
              <p className={styles.valueCardText}>
                Cadastre CPF e celular como chaves Pix e ganhe fôlego.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.refinport}>
          <div className={styles.back}>
            <h2 className={styles.form__h1}>Sobre os valores dos pacotes</h2>
            <p className={styles.form__p}>
              Você conta com diversas opções de pacotes de serviços para
              escolher a que mais combina com as suas necessidades, incluindo o
              Pacote de Serviços Essenciais gratuito
            </p>
          </div>
        </section>
        <FormMain></FormMain>

        <Faq pageType="aberturacartao"></Faq>
      </div>
      <Footer></Footer>
    </div>
  );
}
