import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Shopfront from "src/components/Shopfront";

import useStyles from "src/styles/shopfronts";

import { GET_SHOPFRONTS } from "src/graphql/shopfront/queries";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const Home = ({ shopfront }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid
        className={classes.content}
        container
        direction="column"
        alignItems="center"
        justify="space-between"
      >
        <Grid xs={12} item container justify="center">
          <Shopfront shopfront={shopfront} />
        </Grid>
      </Grid>
    </Box>
  );
};

export const getStaticProps = async ({ params }) => {
  const client = new ApolloClient({
    uri: "https://www.graphql.somosmee.com/graphql",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_SHOPFRONTS,
    variables: { id: params.shopfrontId }
  });

  return {
    props: {
      shopfront: data.shopfronts
    },
    revalidate: 10
  };
};

export const getStaticPaths = async context => {
  const paths = [{ params: { shopfrontId: "5f5fe55ed4df450027b97bb6" } }];

  return {
    paths,
    fallback: false
  };
};

export default Home;
