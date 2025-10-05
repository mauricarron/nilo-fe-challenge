import { Query } from "@favware/graphql-pokemon";

export type Pokemon = NonNullable<Query["getAllPokemon"]>[number];
