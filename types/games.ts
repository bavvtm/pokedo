// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

import {
    DescriptionSchema,
    NameSchema,
    NamedAPIResourceSchema
} from "./utility.ts";

export interface GenerationSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A list of abilities that were introduced in this generation. */
    abilities: NamedAPIResourceSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** The main region travelled in this generation. */
    main_region: NamedAPIResourceSchema
    /** A list of moves that were introduced in this generation. */
    moves: NamedAPIResourceSchema[]
    /** A list of Pokémon species that were introduced in this generation. */
    pokemon_species: NamedAPIResourceSchema[]
    /** A list of types that were introduced in this generation. */
    types: NamedAPIResourceSchema[]
    /** A list of version groups that were introduced in this generation. */
    version_groups: NamedAPIResourceSchema[]
}

export interface PokedexSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** Whether or not this Pokédex originated in the main series of the video games. */
    is_main_series: boolean
    /** The description of this resource listed in different languages. */
    descriptions: DescriptionSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of Pokémon catalogued in this Pokédex and their indexes. */
    pokemon_entries: PokemonEntrySchema[]
    /** The region this Pokédex catalogues Pokémon for. */
    region: NamedAPIResourceSchema
    /** A list of version groups this Pokédex is relevant to. */
    version_groups: NamedAPIResourceSchema[]
}

export interface PokemonEntrySchema {
    /** The index of this Pokémon species entry within the Pokédex. */
    entry_number: number
    /** The Pokémon species being encountered. */
    pokemon_species: NamedAPIResourceSchema
}

export interface VersionSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** The version group this version belongs to. */
    version_group: NamedAPIResourceSchema
}

export interface VersionGroupSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** Order for sorting. Almost by date of release, except similar versions are grouped together. */
    order: number
    /** The generation this version was introduced in. */
    generation: NamedAPIResourceSchema
    /** A list of methods in which Pokémon can learn moves in this version group. */
    move_learn_methods: NamedAPIResourceSchema[]
    /** A list of Pokédexes introduces in this version group. */
    pokedexes: NamedAPIResourceSchema[]
    /** A list of regions that can be visited in this version group. */
    regions: NamedAPIResourceSchema[]
    /** The versions this version group owns. */
    versions: NamedAPIResourceSchema[]
}