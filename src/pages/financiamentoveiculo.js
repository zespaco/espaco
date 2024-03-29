import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormMain from "../components/FormMain";
import styles from "../../styles/FinanciamentoVeiculo.module.css";
import Image from "next/image";
import whats from "../image/whatsapp.webp";
import Faq from "@/components/Faq";
import { Link, animateScroll as scroll } from "react-scroll";
export default function FinanciamentoVeiculo() {
  const scrollToForm = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1440) {
      scroll.scrollTo(1700);
    } else if (screenWidth === 1024) {
      scroll.scrollTo(2150);
    } else if (screenWidth === 768) {
      scroll.scrollTo(2700);
    } else {
      scroll.scrollTo(3050);
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
            <h1 className={styles.heroTitle}>Financiamento de Veiculo</h1>
            <p className={styles.heroText}>
              Realize seu sonho de ter um carro próprio! <br></br>Você pode
              conquistar a liberdade das estradas de forma rápida e
              descomplicada.
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
              Financiar o veiculo dos seu sonhos é fácil, rápido e seguro.
            </h2>
            <p className={styles.contratarText}>
              Siga as instruções e aproveite.
            </p>

            <a className={styles.bloco2} href="#form" onClick={scrollToForm}>
              <button className={styles.btn2}>Simular financiamento</button>
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
                    Precisamos de alguns dados para que a simulação ocorra bem.
                    É seguro e rápido. Clique em Simular financiamento.
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
                    Vamos consultar todos os dados para oferecer a proposta mais
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
                    Após analisar seu pedido e obter a aprovação, você receberá
                    o seu veiculo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.advantages}>
          <h2 className={styles.advantagesTitle}>Vantagens de Financiar</h2>
          <div className={styles.valuesContainer}>
            <div className={styles.valueCard}>
              <div
                className={styles.valueCardImg}
                alt="Taxa de Juros Atrativas"
              ></div>
              <h3 className={styles.valueCardTitle}>Praticidade</h3>
              <p className={styles.valueCardText}>Você escolhe .</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueCardImg2} alt="Parcelas"></div>
              <h3 className={styles.valueCardTitle}>Parcelas</h3>
              <p className={styles.valueCardText}>
                As parcelas são fixas e definidas por você no momento da
                contratação.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueCardImg3} alt="Prazo"></div>
              <h3 className={styles.valueCardTitle}>Prazo</h3>
              <p className={styles.valueCardText}>
                Você escolhe a duração do seu contrato! De 3 a 60 meses.
              </p>
            </div>
          </div>
        </section>

        <FormMain></FormMain>

        <Faq pageType="financiamentoveiculo"></Faq>
      </div>
      <Footer></Footer>
    </div>
  );
}
