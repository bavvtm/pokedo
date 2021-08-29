// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

import {
   EffectSchema,
   FlavorTextSchema,
   NamedAPIResourceSchema
} from "./utility.ts";

export interface ContestTypeSchema {
   /** The identifier for this resource. */
   id: number
   /** The name for this resource. */
   name: string
   /** The berry flavor that correlates with this contest type. */
   berry_flavor: NamedAPIResourceSchema
   /** The name of this contest type listed in different languages. */
   names: ContestNameSchema[]
}

export interface ContestNameSchema {
   /** The name for this contest. */
   name: string
   /** The color associated with this contest's name. */
   color: string
   /** The language that this name is in. */
   language: NamedAPIResourceSchema
}

export interface ContestEffectSchema {
   /** The identifier for this resource. */
   id: number
   /** The base number of hearts the user of this move gets. */
   appeal: number
   /** The base number of hearts the user's opponent loses. */
   jam: number
   /** The result of this contest effect listed in different languages. */
   effect_entries: EffectSchema[]
   /** The flavor text of this contest effect listed in different languages. */
   flavor_text_entries: FlavorTextSchema[]
}

export interface SuperContestEffectSchema {
   /** The identifier for this resource. */
   id: number
   /** The level of appeal this super contest effect has. */
   appeal: number
   /** The flavor text of this super contest effect listed in different languages. */
   flavor_text_entries: FlavorTextSchema[]
   /** A list of moves that have the effect when used in super contests. */
   moves: NamedAPIResourceSchema[]
}