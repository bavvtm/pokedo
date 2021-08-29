// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

export interface LanguageSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** Whether or not the games are published in this language. */
    official: boolean
    /** The two-letter code of the country where this language is spoken. Note that it is not unique. */
    iso639: string
    /** The two-letter code of the language. Note that it is not unique. */
    iso3166: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}

export interface APIResourceSchema {
    /** The URL of the referenced resource. */
    url: string
}

export interface DescriptionSchema {
    /** The localized description for an API resource in a specific language. */
    description: string
    /** The language this name is in. */
    language: NamedAPIResourceSchema
}

export interface EffectSchema {
    /** The localized effect text for an API resource in a specific language. */
    effect: string
    /** The language this effect is in. */
    language: NamedAPIResourceSchema
}

export interface EncounterSchema {
    /** The lowest level the Pokémon could be encountered at. */
    min_level: number
    /** The highest level the Pokémon could be encountered at. */
    max_level: number
    /** A list of condition values that must be in effect for this encounter to occur. */
    condition_values: NamedAPIResourceSchema[]
    /** Percent chance that this encounter will occur. */
    chance: number
    /** The method by which this encounter happens. */
    method: NamedAPIResourceSchema
}

export interface FlavorTextSchema {
    /** The localized flavor text for an API resource in a specific language. */
    flavor_text: string
    /** The language this name is in. */
    language: NamedAPIResourceSchema
    /** The game version this flavor text is extracted from. */
    version: NamedAPIResourceSchema
}

export interface GenerationGameIndexSchema {
    /** The internal id of an API resource within game data. */
    game_index: number
    /** The generation relevent to this game index. */
    generation: NamedAPIResourceSchema
}

export interface MachineVersionDetailSchema {
    /** The machine that teaches a move from an item. */
    machine: APIResourceSchema
    /** The version group of this specific machine. */
    version_group: NamedAPIResourceSchema
}

export interface NameSchema {
    /** The localized name for an API resource in a specific language. */
    name: string
    /** The language this name is in. */
    language: NamedAPIResourceSchema
}

export interface NamedAPIResourceSchema {
    /** The name of the referenced resource. */
    name: string
    /** The URL of the referenced resource. */
    url: string
}

export interface VerboseEffectSchema {
    /** The localized effect text for an API resource in a specific language. */
    effect: string
    /** The localized effect text in brief. */
    short_effect: string
    /** The language this effect is in. */
    language: NamedAPIResourceSchema
}

export interface VersionEncounterDetailSchema {
    /** The game version this encounter happens in. */
    version: NamedAPIResourceSchema
    /** The total percentage of all encounter potential. */
    max_chance: number
    /** A list of encounters and their specifics. */
    encounter_details: EncounterSchema[]
}

export interface VersionGameIndexSchema {
    /** The internal id of an API resource within game data. */
    game_index: number
    /** The version relevent to this game index. */
    version: NamedAPIResourceSchema
}

export interface VersionGroupFlavorTextSchema {
    /** The localized name for an API resource in a specific language. */
    text: string
    /** The language this name is in. */
    language: NamedAPIResourceSchema
    /** The version group which uses this flavor text. */
    version_group: NamedAPIResourceSchema
}
