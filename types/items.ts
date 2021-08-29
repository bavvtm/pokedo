// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

import {
    APIResourceSchema,
    DescriptionSchema,
    EffectSchema,
    GenerationGameIndexSchema,
    MachineVersionDetailSchema,
    NameSchema,
    NamedAPIResourceSchema,
    VerboseEffectSchema,
    VersionGroupFlavorTextSchema
} from "./utility.ts";

export interface ItemSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The price of this item in stores. */
    cost: number
    /** The power of the move Fling when used with this item. */
    fling_power: number
    /** The effect of the move Fling when used with this item. */
    fling_effect: NamedAPIResourceSchema
    /** A list of attributes this item has. */
    attributes: NamedAPIResourceSchema[]
    /** The category of items this item falls into. */
    category: NamedAPIResourceSchema
    /** The effect of this ability listed in different languages. */
    effect_entries: VerboseEffectSchema[]
    /** The flavor text of this ability listed in different languages. */
    flavor_text_entries: VersionGroupFlavorTextSchema[]
    /** A list of game indices relevent to this item by generation. */
    game_indices: GenerationGameIndexSchema[]
    /** The name of this item listed in different languages. */
    names: NameSchema[]
    /** A set of sprites used to depict this item in the game. */
    sprites: ItemSpritesSchema
    /** A list of Pokémon that might be found in the wild holding this item. */
    held_by_pokemon: ItemHolderPokemonSchema[]
    /** An evolution chain this item requires to produce a bay during mating. */
    baby_trigger_for: APIResourceSchema
    /** A list of the machines related to this item. */
    machines: MachineVersionDetailSchema[]
}

export interface ItemSpritesSchema {
    /** The default depiction of this item. */
    default: string
}

export interface ItemHolderPokemonSchema {
    /** The Pokémon that holds this item. */
    pokemon: NamedAPIResourceSchema
    /** The details for the version that this item is held in by the Pokémon. */
    version_details: ItemHolderPokemonVersionDetailSchema[]
}

export interface ItemHolderPokemonVersionDetailSchema {
    /** How often this Pokémon holds this item in this version. */
    rarity: number
    /** The version that this item is held in by the Pokémon. */
    version: NamedAPIResourceSchema
}

export interface ItemAttributeSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A list of items that have this attribute. */
    items: NamedAPIResourceSchema[]
    /** The name of this item attribute listed in different languages. */
    names: NameSchema[]
    /** The description of this item attribute listed in different languages. */
    descriptions: DescriptionSchema[]
}

export interface ItemCategorySchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A list of items that are a part of this category. */
    items: NamedAPIResourceSchema[]
    /** The name of this item category listed in different languages. */
    names: NameSchema[]
    /** The pocket items in this category would be put in. */
    pocket: NamedAPIResourceSchema
}

export interface ItemFlingEffectSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The result of this fling effect listed in different languages. */
    effect_entries: EffectSchema[]
    /** A list of items that have this fling effect. */
    items: NamedAPIResourceSchema[]
}

export interface ItemPocketSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A list of item categories that are relevant to this item pocket. */
    categories: NamedAPIResourceSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}