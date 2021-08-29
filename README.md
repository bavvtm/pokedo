# pokedo
[![License](https://img.shields.io/badge/license-mit-blue.svg?style=flat)](https://raw.githubusercontent.com/callmeumm/pokedo/master/LICENSE)

[Poke API](https://pokeapi.co) Wrapper for Deno, written in Typescript.

## Documentation

Full API documentation can be found at [Poke API](https://pokeapi.co/docs/v2.html).

## Example
```typescript
import { Pokedo } from "https://deno.land/x/pokedo@0.0.1/mod.ts";

const pokedo = new Pokedo();
pokedo.Pokemons.Pokemon.all(20).then((result) => {
    console.log(result);
})

pokedo.Pokemons.Pokemon.get("pikachu").then((result) => {
    console.log(result);
})
```