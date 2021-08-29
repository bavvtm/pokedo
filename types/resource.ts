// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

import {
    NamedAPIResourceSchema
} from "./utility.ts";

export interface NamedAPIResourceListSchema {
    /** The total number of resources available from this API. */
    count: number
    /** The URL for the next page in the list. */
    next: string
    /** The URL for the previous page in the list. */
    previous: boolean
    /** A list of named API resources. */
    results: NamedAPIResourceSchema[]
}