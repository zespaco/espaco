import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../../styles/TroqueCredito.module.css";
import Image from "next/image";
import whats from "../image/whatsapp.webp";
import Faq from "@/components/Faq";

export default function TrocaCredito() {
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
            <h1 className={styles.heroTitle}>Troca de Crédito</h1>
            <p className={styles.heroText}>
              Aproveite seu cartão de crédito ao máximo! Transforme o limite
              disponível em dinheiro.
            </p>
            <a
              a
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
              Contratar seu Troca de Crédito é fácil, rápido e seguro.
            </h2>
            <p className={styles.contratarText}>
              Siga as instruções e aproveite a oportunidade.
            </p>

            <a
              className={styles.bloco2}
              href="https://emprestimo.trocacreditos.com.br/38a82ee5-2475-4a62-8847-7d06ebd9c8a2"
              target="._blank"
            >
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
                  <h2 className={styles.stepTitle}>Simulação</h2>
                  <p className={styles.stepDescription}>
                    Você receberá todas as informações necessárias, como taxas,
                    valores, parcelas e muito mais, sem sair de casa.
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
                  <h2 className={styles.stepTitle}>Contratação</h2>
                  <p className={styles.stepDescription}>
                    Certifique-se de preencher os dados corretamente, exatamente
                    como constam em seu documento, para uma solicitação
                    perfeita.
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
                    o dinheiro em até 24 horas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.advantages}>
          <h2 className={styles.advantagesTitle}>Vantagens Troca de Crédito</h2>
          <div className={styles.valuesContainer}>
            <div className={styles.valueCard}>
              <div
                className={styles.valueCardImg}
                alt="Taxa de Juros Atrativas"
              ></div>
              <h3 className={styles.valueCardTitle}>Crédito liberado</h3>
              <p className={styles.valueCardText}>
                O dinheiro liberado depende do seu limite disponivel no cartão.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueCardImg2} alt="Segurança"></div>
              <h3 className={styles.valueCardTitle}>Segurança</h3>
              <p className={styles.valueCardText}>
                Desconto das parcelas através da própria fatura do seu cartão de
                crédito.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueCardImg3} alt="Negativados"></div>
              <h3 className={styles.valueCardTitle}>Negativados</h3>
              <p className={styles.valueCardText}>
                Mesmo negativado, o Troca Crédito está disponivel para você.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div
                className={styles.valueCardImg4}
                alt="Dinheiro na conta"
              ></div>
              <h3 className={styles.valueCardTitle}>Dinheiro na conta</h3>
              <p className={styles.valueCardText}>
                Assim que aprovado, de 3 até 24 horas dinheiro na conta.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.refinport}>
          <div className={styles.back}>
            <h2 className={styles.form__h1}>SEGURA, RÁPIDA E LEGALIZADA</h2>
            <p className={styles.form__p}>
              A CCB (Cédula de Crédito Bancário) garante a segurança de um
              empréstimo pessoal transparente, tributado e 100% legalizado.
            </p>
          </div>
        </section>

        <Faq pageType="troquecredito"></Faq>
      </div>
      <Footer></Footer>
    </div>
  );
}
