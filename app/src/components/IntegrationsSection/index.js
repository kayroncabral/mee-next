import { useState } from "react";
import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MobileStepper from "@material-ui/core/MobileStepper";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";

import useStyles from "src/components/IntegrationsSection/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const steps = [
  {
    image: "https://www.somosmee.com/loggi.png",
    title: "Agilize e simplifique suas entregas",
    subtitle:
      "Use a tecnologia que está inovando o mercado de entregas via motoboy, automóveis e avião.",
    topics: [
      "Melhore a experiência de compra oferencendo entrega expressa",
      "Análise de dados sobre regiões e seus clientes"
    ]
  },
  {
    image: "https://www.somosmee.com/Frame-1_2.png",
    title: "Vitrine Digital ✨",
    subtitle:
      "Automatize seus pedidos por WhatsApp e crie seu próprio canal de vendas online.",
    topics: [
      <>
        <b>Ganhe agilidade</b> com auto atendimento na mesa
      </>,
      <>
        <b>Automatize seus pedidos por WhatsApp</b> para entrega ou retirada
      </>,
      <>
        <b>Fidelize seu cliente</b> capturando dados essenciais para engajar
        novas compras
      </>,
      <>
        <b>Fuja de taxas de marketplaces</b> e tenha seu próprio canal de vendas
        online
      </>
    ]
  },
  {
    image: "https://www.somosmee.com/Frame-1_1.png",
    title: "Aumente suas vendas em até 50% no primeiro mês!",
    subtitle:
      "Junte-se ao maior marketplace de delivery do brasil e amplie seu negócio",
    topics: [
      "Esteja a frente da concorrência com a nossa análise de dados do mercado",
      "Agilize sua logística de entregas"
    ]
  }
];

const IntegrationsSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Grid className={classes.root} item xs={12}>
      <Container maxWidth="md">
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary" align="center">
              Integrações
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.subtitle}
              variant="h6"
              align="center"
            >
              Integre seu negócio a outras plataformas que te ajudam a ampliar e
              automatizar seus processos 🤝
            </Typography>
          </Grid>
          <Grid className={classes.swipeableViewsContainer} item>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {steps.map((step, index) => (
                <Grid
                  key={step.title}
                  className={classes.grid}
                  container
                  justify="center"
                >
                  <Grid
                    className={classes.paper}
                    component={Paper}
                    elevation={0}
                    container
                    item
                    xs
                    justify="center"
                  >
                    <Grid item xs={12}>
                      <Typography align="center">INTEGRE</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Image
                        src={step.image}
                        alt="Loggi"
                        width="646"
                        height="364"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" paragraph>
                        <b>{step.title}</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        className={classes.subtitle}
                        variant="h6"
                        paragraph
                      >
                        {step.subtitle}
                      </Typography>
                      {step.topics.map((topic, index) => (
                        <Box key={index} display="flex" alignItems="center">
                          <Box mr={3}>
                            <Image
                              src="/check.svg"
                              alt="check"
                              width="18"
                              height="15"
                              layout="fixed"
                            />
                          </Box>
                          <Typography
                            className={classes.topic}
                            variant="h6"
                            paragraph={step.topics.length > index + 1}
                          >
                            {step.topics.length - 1 < index}
                            {topic}
                          </Typography>
                        </Box>
                      ))}
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" size="large">
                        Integre e escale o seu negócio agora!
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </AutoPlaySwipeableViews>
            <div className={classes.stepper}>
              <IconButton
                className={classes.iconButton}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? <ArrowForward /> : <ArrowBack />}
              </IconButton>
              <IconButton
                className={classes.iconButton}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? <ArrowBack /> : <ArrowForward />}
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default IntegrationsSection;
