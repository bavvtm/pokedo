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

export interface MachineSchema {
    /** The identifier for this resource. */
    id: number
    /** The TM or HM item that corresponds to this machine. */
    item: NamedAPIResourceSchema
    /** The move that is taught by this machine. */
    move: NamedAPIResourceSchema
    /** The version group that this machine applies to. */
    version_group: NamedAPIResourceSchema
}
