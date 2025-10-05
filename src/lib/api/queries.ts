import { gql } from "@apollo/client";

export const GET_ALL_POKEMON = gql(`
  query (
  $offset: Int
  $take: Int
) {
  getAllPokemon(
    offset: $offset
    take: $take
  ) {
    key
    baseStats {
      attack
      defense
      hp
    }
    num
    sprite
    types {
      name
    }
  }
}
`);
