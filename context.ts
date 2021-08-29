// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

import { cache } from "https://deno.land/x/cache@0.2.13/mod.ts";
import { ResourceLists } from "./types/index.ts";

export class Context<C> {
    private BASE_URL: string = "https://pokeapi.co/api/v2/";

    constructor(
        private apiParams: string,
        private oth?: string
    ) {}

    /**
     * Get all data
     * @example
     * const limit = 30; // if you need to get limit
     * pokedo.Berries.Berry.all(limit).then((result) => {
     *      console.log(result);
     * });
     */
    public async all(
        limit?: number
    ): Promise<ResourceLists.NamedAPIResourceListSchema> {
        if(limit !== undefined) return await this._callApi(`?limit=${limit}`);
        return await this._callApi();
    }

    /**
     * Get data by id
     * @example
     * pokedo.Pokemons.Pokemon.get("pikachu").then((result) => {
     *      console.log(result);
     * });
     */
    public async get(
        target: number | string
    ): Promise<C> {
        return await this._callApi(target);
    }

    /**
     * API Calling with chaching
     * it be considerate of PokeAPI and be sure to always operate within this requested limits.
     * you can redistribute it and/or modify
     */
    private async _callApi(
        target?: number | string
    ) {
        const targets = target ? target : "";
        const other = this.oth ? this.oth : "";
        const base_url = `${this.BASE_URL+this.apiParams}/${targets}/${other}`;
        const data = await cache(base_url);
        const file: any = await Deno.readTextFile(data.path);
            
        // string non parsed json 
        return JSON.parse(file);
    }
}