import { useState } from "react";
import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import useStyles from "src/components/PlansSection/styles";

const PlansSection = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={12}>
      <Container maxWidth="md">
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary" align="center">
              Planos
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Encontre o plano que se encaixa no tamanho do seu negócio. 📊
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid
              className={classes.paper}
              component={Paper}
              elevation={0}
              container
              item
              xs={12}
              md
            >
              <Grid item xs={12}>
                <Typography align="center">Grátis</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" paragraph>
                  <b>R$ 0,00</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" paragraph>
                  Teste
                </Typography>
              </Grid>
            </Grid>
            <Grid
              className={classes.paper}
              component={Paper}
              elevation={15}
              container
              item
              xs={12}
              md
            >
              <Grid item xs={12}>
                <Typography align="center">Profissional</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" paragraph>
                  <b>R$149,90</b>/mês
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" paragraph>
                  Teste
                </Typography>
              </Grid>
            </Grid>
            <Grid
              className={classes.paper}
              component={Paper}
              elevation={0}
              container
              item
              xs={12}
              md
            >
              <Grid item xs={12}>
                <Typography align="center">Premium</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" paragraph>
                  <b>$499,90</b>/mês
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" paragraph>
                  Teste
                </Typography>
              </Grid>
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

export default PlansSection;
