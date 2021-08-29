// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

import {
    NameSchema,
    NamedAPIResourceSchema
} from "./utility.ts";

export interface BerrySchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked. */
    growth_time: number
    /** The maximum number of these berries that can grow on one tree in Generation IV. */
    max_harvest: number
    /** The power of the move "Natural Gift" when used with this Berry. */
    natural_gift_power: number
    /** The size of this Berry, in millimeters. */
    size: number
    /** The smoothness of this Berry, used in making Pokéblocks or Poffins. */
    smoothness: number
    /** The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly. */
    soil_dryness: number
    /** The firmness of this berry, used in making Pokéblocks or Poffins. */
    firmness: NamedAPIResourceSchema
    /** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry. */
    flavors: BerryFlavorMapSchema[]
    /** Berries are actually items. This is a reference to the item specific data for this berry. */
    item: NamedAPIResourceSchema
    /** The type inherited by "Natural Gift" when used with this Berry. */
    natural_gift_type: NamedAPIResourceSchema
}

export interface BerryFlavorMapSchema {
    /** How powerful the referenced flavor is for this berry. */
    potency: number
    /** The referenced berry flavor. */
    flavor: NamedAPIResourceSchema
}

export interface BerryFirmnessSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A list of the berries with this firmness. */
    berries: NamedAPIResourceSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}

export interface BerryFlavorSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A list of the berries with this flavor. */
    berries: FlavorBerryMapSchema[]
    /** The contest type that correlates with this berry flavor. */
    contest_type: NamedAPIResourceSchema
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}

export interface FlavorBerryMapSchema {
    /** How powerful the referenced flavor is for this berry. */
    potency: number
    /** The berry with the referenced flavor. */
    berry: NamedAPIResourceSchema
}