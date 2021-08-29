// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

import { Context } from "./context.ts";
import {
    Berries,
    Contests, 
    Encounters,
    Evolution,
    Games,
    Items,
    Locations,
    Machines,
    Moves,
    Pokemon
} from "./types/index.ts";


export class Pokedo {

    /** 
     * Berries (group)
     * @see https://pokeapi.co/docs/v2#berries-section for documentation
     */
    public get Berries() {
        return {
            Berry: this.assert<Berries.BerrySchema>("berry"),
            BerryFirmnesse: this.assert<Berries.BerryFirmnessSchema>("berry-firmness"),
            BerryFlavor: this.assert<Berries.BerryFlavorSchema>("berry-flavor")
        }
    }

    /**
     * Contests (group)
     * @see https://pokeapi.co/docs/v2#contests-section for documentation
     */
    public get Contests() {
        return {
            ContestType: this.assert<Contests.ContestTypeSchema>("contest-type"),
            ContestEffect: this.assert<Contests.ContestEffectSchema>("contest-effect"),
            SuperContestEffect: this.assert<Contests.SuperContestEffectSchema>("super-contest-effect")
        }
    }

    /**
     * Encounters (group)
     * @see https://pokeapi.co/docs/v2#encounters-section for documentation
     */
    public get Encounters() {
        return {
            EncounterMethod: this.assert<Encounters.EncounterMethodSchema>("encounter-method"),
            EncounterCondition: this.assert<Encounters.EncounterConditionSchema>("encounter-condition"),
            EncounterConditionValue: this.assert<Encounters.EncounterConditionValueSchema>("encounter-condition-value")
        }
    }

    /**
     * Evolution (group)
     * @see https://pokeapi.co/docs/v2#evolution-section for documentation
     */
    public get Evolution() {
        return {
            EvolutionChain: this.assert<Evolution.EvolutionChainSchema>("evolution-chain"),
            EvolutionTrigger: this.assert<Evolution.EvolutionTriggerSchema>("evolution-trigger"),
        }
    }

    /**
     * Games (group)
     * @see https://pokeapi.co/docs/v2#games-section for documentation
     */
    public get Games() {
        return {
            Generation: this.assert<Games.GenerationSchema>("generation"),
            Pokedex: this.assert<Games.PokedexSchema>("pokedex"),
            Version: this.assert<Games.VersionSchema>("version"),
            VersionGroup: this.assert<Games.VersionGroupSchema>("version-group")
        }
    }

    /**
     * Items (group)
     * @see https://pokeapi.co/docs/v2#games-section for documentation
     */
    public get Items() {
        return {
            Item: this.assert<Items.ItemSchema>("item"),
            ItemAttribute: this.assert<Items.ItemAttributeSchema>("item-attribute"),
            ItemCategory: this.assert<Items.ItemCategorySchema>("item-category"),
            ItemFlingEffect: this.assert<Items.ItemFlingEffectSchema>("item-fling-effect"),
            ItemPocket: this.assert<Items.ItemPocketSchema>("item-pocket")
        }
    }

    /**
     * Locations (group)
     * @see https://pokeapi.co/docs/v2#locations-section for documentation
     */
    public get Locations() {
        return {
            Location: this.assert<Locations.LocationSchema>("location"),
            LocationArea: this.assert<Locations.LocationAreaSchema>("location-area"),
            PalParkArea: this.assert<Locations.PalParkAreaSchema>("pal-park-area"),
            Region: this.assert<Locations.RegionSchema>("region")
        }
    }

    /**
     * Machines (group)
     * @see https://pokeapi.co/docs/v2#machines-section for documentation
     */
    public get Machines() {
        return {
            Machine: this.assert<Machines.MachineSchema>("machine")
        }
    }

    /**
     * Moves (group)
     * @see https://pokeapi.co/docs/v2#moves-section for documentation
     */
    public get Moves() {
        return {
            Move: this.assert<Moves.MoveSchema>("move"),
            MoveAilment: this.assert<Moves.MoveAilmentSchema>("move-ailment"),
            MoveBattleStyle: this.assert<Moves.MoveBattleStyleSchema>("move-battle-style"),
            MoveCategory: this.assert<Moves.MoveCategorySchema>("move-category"),
            MoveDamageClass: this.assert<Moves.MoveDamageClassSchema>("move-damage-class"),
            MoveLearnMethods: this.assert<Moves.MoveLearnMethodSchema>("move-learn-method"),
            MoveTarget: this.assert<Moves.MoveTargetSchema>("move-target")
        }
    }

    /**
     * Pokemon (group)
     * @see https://pokeapi.co/docs/v2#pokemon-section for documentation
     */
    public get Pokemons() {
        return {
            Ability: this.assert<Pokemon.AbilitySchema>("ability"),
            Characteristic: this.assert<Pokemon.CharacteristicSchema>("characteristic"),
            EggGroup: this.assert<Pokemon.EggGroupSchema>("egg-group"),
            Gender: this.assert<Pokemon.GenderSchema>("gender"),
            GrowthRate: this.assert<Pokemon.GrowthRateSchema>("growth-rate"),
            Nature: this.assert<Pokemon.NatureSchema>("nature"),
            PokeathlonStat: this.assert<Pokemon.PokeathlonStatSchema>("pokeathlon-stat"),
            Pokemon: this.assert<Pokemon.PokemonSchema>("pokemon"),
            PokemonLocationArea: this.assert<Pokemon.LocationAreaEncounterSchema>("pokemon", "encounters"),
            PokemonColor: this.assert<Pokemon.PokemonColorSchema>("pokemon-color"),
            PokemonForm: this.assert<Pokemon.PokemonFormSchema>("pokemon-form"),
            PokemonHabitat: this.assert<Pokemon.PokemonHabitatSchema>("pokemon-habitat"),
            PokemonShape: this.assert<Pokemon.PokemonShapeSchema>("pokemon-shape"),
            PokemonSpecies: this.assert<Pokemon.PokemonSpeciesSchema>("pokemon-species"),
            Stat: this.assert<Pokemon.StatSchema>("stat"),
            Type: this.assert<Pokemon.TypeSchema>("type")
        }
    }

    private assert<T>(
        params: string,
        oth?: string
    ) {
        if(oth !== undefined) return new Context<T>(params, oth);
        return new Context<T>(params);
    }
}