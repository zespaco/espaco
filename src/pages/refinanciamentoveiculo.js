import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormMain from "../components/FormMain";
import styles from "../../styles/RefinanciamentoVeiculo.module.css";
import Image from "next/image";
import whats from "../image/whatsapp.webp";
import Faq from "@/components/Faq";
import { Link, animateScroll as scroll } from "react-scroll";

export default function RefinanciamentoVeiculo() {
  const scrollToForm = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1440) {
      scroll.scrollTo(1700);
    } else if (screenWidth === 1024) {
      scroll.scrollTo(2150);
    } else if (screenWidth === 768) {
      scroll.scrollTo(2700);
    } else {
      scroll.scrollTo(2950);
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
            <h1 className={styles.heroTitle}>Refinanciamento de Veiculo</h1>
            <p className={styles.heroText}>
              Realize seus planos com facilidade <br></br>Use seu carro como
              garantia e tenha o dinheiro que precisa.
            </p>
            <a
              target="._blank"
              href="https://api.whatsapp.com/send?phone=5534991152814"
            >
              <button className={styles.btn}>
                Simule pelo WhatsApp
                <Image className={styles.img__whats} src={whats}></Image>
              </button>
            </a>
          </div>
        </section>

        <section className={styles.howToApply}>
          <div className={styles.howToApplyTitle}>
            <h2 className={styles.contratarTitle}>
              Refinanciar seu veiculo é fácil, rápido e seguro.
            </h2>
            <p className={styles.contratarText}>
              Siga as instruções e aproveite as condições.
            </p>

            <a onClick={scrollToForm} className={styles.bloco2} href="#form">
              <button className={styles.btn2}>Simular emprestimo</button>
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
                    Precisamos de alguns dados para fornecer o valor exato que
                    você pode receber. É seguro e rápido. Clique em Simular
                    empréstimo.
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
                  <h2 className={styles.stepTitle}>Análise</h2>
                  <p className={styles.stepDescription}>
                    Vamos consultar seu cpf para oferecer a proposta mais
                    inteligente para você.
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
                  <h2 className={styles.stepTitle}>Contratação via WhatsApp</h2>
                  <p className={styles.stepDescription}>
                    Você receberá todas as informações necessárias, como taxas e
                    valor das parcelas, sem sair de casa.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepConnector}></div>
              </div>
              <div className={styles.col}>
                <div className={styles.stepContent}>
                  <h2 className={styles.stepTitle}>Resposta rápida</h2>
                  <p className={styles.stepDescription}>
                    Após analisar seu pedido e obter a aprovação do convênio,
                    você receberá o dinheiro em até 24 horas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.advantages}>
          <h2 className={styles.advantagesTitle}>Vantagens de Refinanciar</h2>
          <div className={styles.valuesContainer}>
            <div className={styles.valueCard}>
              <div
                className={styles.valueCardImg}
                alt="Taxa de Juros Atrativas"
              ></div>
              <h3 className={styles.valueCardTitle}>Taxas de Juros </h3>
              <p className={styles.valueCardText}>
                Condições de pagamento com taxas de juros reduzidas.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueCardImg2} alt="Segurança"></div>
              <h3 className={styles.valueCardTitle}>Segurança</h3>
              <p className={styles.valueCardText}>
                Você pode conseguir até 90% do valor do veículo para usar do
                jeito que quiser.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div
                className={styles.valueCardImg4}
                alt="Dinheiro na conta"
              ></div>
              <h3 className={styles.valueCardTitle}>Dinheiro na conta</h3>
              <p className={styles.valueCardText}>
                Assim que aprovado, 24 horas dinheiro na conta.
              </p>
            </div>
          </div>
        </section>

        <FormMain></FormMain>

        <Faq pageType="refinanciamentoveiculo"></Faq>
      </div>
      <Footer></Footer>
    </div>
  );
}
