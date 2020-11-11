import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import FeaturesSection from "src/components/FeaturesSection";
import IntegrationsSection from "src/components/IntegrationsSection";
import PlansSection from "src/components/PlansSection";

import useStyles from "src/styles/shopfronts";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={10}>
      <Grid className={classes.section1} item xs={12}>
        <Container maxWidth="md">
          <Grid container justify="center" spacing={4}>
            <Grid item>
              <Typography variant="h3" color="primary" align="center">
                <b>Descubra um jeito simples de inovar seu comércio</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center">
                Independente do ramo do seu negócio a Mee é para você. Mee é
                ideal para gerenciar seu estoque, suas vendas, seu fluxo de
                caixa e seus clientes.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Image
                src="https://www.somosmee.com/Frame-3-p-1080.png"
                alt="frente de caixa"
                width={1080}
                height={588}
                layout="responsive"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" size="large">
                Experimente agora totalmente grátis
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid className={classes.section2} item xs={12}>
        <Container maxWidth="md">
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md>
              <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                  💻 📱
                </Typography>
                <Typography variant="h4" color="primary" paragraph>
                  <b>Acesse em qualquer dispositivo</b>
                </Typography>
                <Typography>
                  A Mee é <b>100% online</b>! Você só precisa de um acesso a
                  internet. Nós funcionamos em qualquer computador, tablet ou
                  celular.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md>
              <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                  ✨🔮
                </Typography>
                <Typography variant="h4" color="primary" paragraph>
                  <b>Simplicidade é o segredo do sucesso</b>
                </Typography>
                <Typography>
                  É <b>muito fácil aprender a usar</b> a Mee. Em alguns minutos
                  sua loja já estará pronta para fazer a primeira venda.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md>
              <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                  🔍 😁
                </Typography>
                <Typography variant="h4" color="primary" paragraph>
                  <b>Conheça seu negócio de ponta a ponta</b>
                </Typography>
                <Typography>
                  <b>Conhecimento é poder</b> e com a Mee você passa a conhecer
                  seu negócio como nunca antes. Focando nos indicadores que mais
                  te ajudam a tomar decisões assertivas para o seu negócio.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <FeaturesSection />
      <IntegrationsSection />
      <PlansSection />
    </Grid>
  );
};

export default Home;
