// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

import {
    GenerationGameIndexSchema,
    NameSchema,
    NamedAPIResourceSchema,
    VersionEncounterDetailSchema
} from "./utility.ts";

export interface LocationSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The region this location can be found in. */
    region: NamedAPIResourceSchema
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of game indices relevent to this location by generation. */
    game_indices: GenerationGameIndexSchema[]
    /** Areas that can be found within this location. */
    areas: NamedAPIResourceSchema[]
}

export interface LocationAreaSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The internal id of an API resource within game data. */
    game_index: number
    /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game. */
    encounter_method_rates: EncounterMethodRateSchema[]
    /** The region this location area can be found in. */
    location: NamedAPIResourceSchema
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter. */
    pokemon_encounters: PokemonEncounterSchema[]
}

export interface EncounterMethodRateSchema {
    /** The method in which Pokémon may be encountered in an area.. */
    encounter_method: NamedAPIResourceSchema
    /** The chance of the encounter to occur on a version of the game. */
    version_details: EncounterVersionDetailsSchema[]
}

export interface EncounterVersionDetailsSchema {
    /** The chance of an encounter to occur. */
    rate: number
    /** The version of the game in which the encounter can occur with the given chance. */
    version: NamedAPIResourceSchema
}

export interface PokemonEncounterSchema {
    /** The Pokémon being encountered. */
    pokemon: NamedAPIResourceSchema
    /** A list of versions and encounters with Pokémon that might happen in the referenced location area. */
    version_details: VersionEncounterDetailSchema[]
}

export interface PalParkAreaSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of Pokémon encountered in thi pal park area along with details. */
    pokemon_encounters: PalParkEncounterSpeciesSchema[]
}

export interface PalParkEncounterSpeciesSchema {
    /** The base score given to the player when this Pokémon is caught during a pal park run. */
    base_score: number
    /** The base rate for encountering this Pokémon in this pal park area. */
    rate: number
    /** The Pokémon species being encountered. */
    pokemon_species: NamedAPIResourceSchema
}

export interface RegionSchema {
    /** The identifier for this resource. */
    id: number
    /** A list of locations that can be found in this region. */
    locations: NamedAPIResourceSchema[]
    /** The name for this resource. */
    name: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** The generation this region was introduced in. */
    main_generation: NamedAPIResourceSchema
    /** A list of pokédexes that catalogue Pokémon in this region. */
    pokedexes: NamedAPIResourceSchema[]
    /** A list of version groups where this region can be visited. */
    version_groups: NamedAPIResourceSchema[]
}