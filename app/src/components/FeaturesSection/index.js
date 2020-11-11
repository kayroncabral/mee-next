import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import useStyles from "src/components/FeaturesSection/styles";

const FeaturesSection = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={12}>
      <Container maxWidth="md">
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary" align="center">
              Funcionalidades
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.subtitle}
              variant="h6"
              align="center"
            >
              Na Mee você consegue ter o controle completo do seu negócio de um
              jeito simples! 🔮
            </Typography>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.heading} variant="h6" paragraph>
                  <b>Gerenciamento de pedidos e venda</b>
                </Typography>
                <Box component={Typography} color="text.secondary" paragraph>
                  <b>Agilize em 2x seu atendiment</b> e fuja da confusão!
                </Box>
                <Box component={Typography} color="text.secondary" paragraph>
                  <b>Otimize seus processos</b> criando e gerenciando pedidos de
                  forma simples e centralizada
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.heading} variant="h6" paragraph>
                  <b>Gerenciamento de estoque e produtos</b>
                </Typography>
                <Box component={Typography} color="text.secondary" paragraph>
                  Use nossos <b>alertas de estoque mínimo</b> e nunca mais deixe
                  algo faltar
                </Box>
                <Box component={Typography} color="text.secondary" paragraph>
                  Dê <b>entrada automática no seu estoque</b> através do cupom
                  fiscal de compra
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.heading} variant="h6" paragraph>
                  <b>Gerenciamento de clientes</b>
                </Typography>
                <Box component={Typography} color="text.secondary" paragraph>
                  <b>Aumente sua fidelização</b> gerenciando dados dos seus
                  clientes
                </Box>
                <Box component={Typography} color="text.secondary" paragraph>
                  <b>Agilize seu atendimento</b> mantendo os dados do seu
                  cliente atualizados
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.heading} variant="h6" paragraph>
                  <b>Fluxo de caixa</b>
                </Typography>
                <Box component={Typography} color="text.secondary" paragraph>
                  Acompanhe a vida financeira da sua empresa de perto
                </Box>
                <Box component={Typography} color="text.secondary" paragraph>
                  Saiba quais produtos mais vendem e veja as tendências
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.heading} variant="h6" paragraph>
                  <b>Gerenciamento de compras e fornecedores</b>
                </Typography>
                <Box component={Typography} color="text.secondary" paragraph>
                  Acompanhe seus custos
                </Box>
                <Box component={Typography} color="text.secondary" paragraph>
                  Organize a sua lista de fornecedores
                </Box>
                <Box component={Typography} color="text.secondary" paragraph>
                  Compare variações de preço e decida de quem comprar
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.heading} variant="h6" paragraph>
                  <b>Emissão de nota fiscal</b>
                </Typography>
                <Box component={Typography} color="text.secondary" paragraph>
                  Emita NFC-e ou CF-e SAT para suas vendas de forma super
                  simples e integrada
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Experimente agora totalmente grátis!
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default FeaturesSection;
