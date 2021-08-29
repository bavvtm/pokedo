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

export interface EncounterMethodSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A good value for sorting. */
    order: number
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}

export interface EncounterConditionSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of possible values for this encounter condition. */
    values: NamedAPIResourceSchema[]
}

export interface EncounterConditionValueSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The condition this encounter condition value pertains to. */
    condition: NamedAPIResourceSchema
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}