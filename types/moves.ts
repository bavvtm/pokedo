// Pokedo - pokeapi.co for Deno.
// Copyright (C) 2021 Call Me Umm <https://guthub.com/callmeumm>
//
// This file is part of Pokedo
//
// Pokedo is a free software : you can redistribute it and/or modify
// it under the terms of the MIT License as published.

import {
    AbilityEffectChangeSchema
} from "./pokemons.ts"

import {
    APIResourceSchema,
    DescriptionSchema,
    MachineVersionDetailSchema,
    NameSchema,
    NamedAPIResourceSchema,
    VerboseEffectSchema,
} from "./utility.ts";

export interface MoveSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The percent value of how likely this move is to be successful. */
    accuracy: number
    /** The percent value of how likely it is this moves effect will happen. */
    effect_chance: number
    /** Power points. The number of times this move can be used. */
    pp: number
    /** A value between -8 and 8. Sets the order in which moves are executed during battle. See Bulbapedia for greater detail. */
    priority: number
    /** The base power of this move with a value of 0 if it does not have a base power. */
    power: number
    /** A detail of normal and super contest combos that require this move. */
    contest_combos: ContestComboSetsSchema
    /** The type of appeal this move gives a Pokémon when used in a contest. */
    contest_type: NamedAPIResourceSchema
    /** The effect the move has when used in a contest. */
    contest_effect: APIResourceSchema
    /** The type of damage the move inflicts on the target, e.g. physical. */
    damage_class: NamedAPIResourceSchema
    /** The effect of this move listed in different languages. */
    effect_entries: VerboseEffectSchema[]
    /** The list of previous effects this move has had across version groups of the games. */
    effect_changes: AbilityEffectChangeSchema[]
    /** The flavor text of this move listed in different languages. */
    flavor_text_entries: MoveFlavorTextSchema[]
    /** The generation in which this move was introduced. */
    generation: NamedAPIResourceSchema
    /** A list of the machines that teach this move. */
    machines: MachineVersionDetailSchema[]
    /** Metadata about this move */
    meta: MoveMetaDataSchema
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of move resource value changes across version groups of the game. */
    past_values: PastMoveStatValuesSchema[]
    /** A list of stats this moves effects and how much it effects them. */
    stat_changes: MoveStatChangeSchema[]
    /** The effect the move has when used in a super contest. */
    super_contest_effect: APIResourceSchema
    /** The type of target that will receive the effects of the attack. */
    target: NamedAPIResourceSchema
    /** The elemental type of this move. */
    type: NamedAPIResourceSchema
}

export interface ContestComboSetsSchema {
    /** A detail of moves this move can be used before or after, granting additional appeal points in contests. */
    normal: ContestComboDetailSchema
    /** A detail of moves this move can be used before or after, granting additional appeal points in super contests. */
    super: ContestComboDetailSchema
}

export interface ContestComboDetailSchema {
    /** A list of moves to use before this move. */
    use_before: NamedAPIResourceSchema[]
    /** A list of moves to use after this move. */
    use_after: NamedAPIResourceSchema[]
}

export interface MoveFlavorTextSchema {
    /** The localized flavor text for an api resource in a specific language. */
    flavor_text: string
    /** The language this name is in. */
    language: NamedAPIResourceSchema
    /** The version group that uses this flavor text. */
    version_group: NamedAPIResourceSchema
}

export interface MoveMetaDataSchema {
    /** The status ailment this move inflicts on its target. */
    ailment: NamedAPIResourceSchema
    /** The category of move this move falls under, e.g. damage or ailment. */
    category: NamedAPIResourceSchema
    /** The minimum number of times this move hits. Null if it always only hits once. */
    min_hits: number
    /** The maximum number of times this move hits. Null if it always only hits once. */
    max_hits: number
    /** The minimum number of turns this move continues to take effect. Null if it always only lasts one turn. */
    min_turns: number
    /** The maximum number of turns this move continues to take effect. Null if it always only lasts one turn. */
    max_turns: number
    /** HP drain (if positive) or Recoil damage (if negative), in percent of damage done. */
    drain: number
    /** The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP. */
    healing: number
    /** Critical hit rate bonus. */
    crit_rate: number
    /** The likelihood this attack will cause an ailment. */
    ailment_chance: number
    /** The likelihood this attack will cause the target Pokémon to flinch. */
    flinch_chance: number
    /** The likelihood this attack will cause a stat change in the target Pokémon. */
    stat_chance: number
}

export interface MoveStatChangeSchema {
    /** The amount of change. */
    change: number
    /** The stat being affected. */
    stat: NamedAPIResourceSchema
}

export interface PastMoveStatValuesSchema {
    /** The percent value of how likely this move is to be successful. */
    accuracy: number
    /** The percent value of how likely it is this moves effect will take effect. */
    effect_chance: number
    /** The base power of this move with a value of 0 if it does not have a base power. */
    power: number
    /** Power points. The number of times this move can be used. */
    pp: number
    /** The effect of this move listed in different languages. */
    effect_entries: VerboseEffectSchema[]
    /** The elemental type of this move. */
    type: NamedAPIResourceSchema
    /** The version group in which these move stat values were in effect. */
    version_group: NamedAPIResourceSchema
}

export interface MoveAilmentSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A list of moves that cause this ailment. */
    moves: NamedAPIResourceSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}

export interface MoveBattleStyleSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}

export interface MoveCategorySchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A list of moves that fall into this category. */
    moves: NamedAPIResourceSchema[]
    /** The description of this resource listed in different languages. */
    descriptions: DescriptionSchema[]
}

export interface MoveDamageClassSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The description of this resource listed in different languages. */
    descriptions: DescriptionSchema[]
    /** A list of moves that fall into this damage class. */
    moves: NamedAPIResourceSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}

export interface MoveLearnMethodSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The description of this resource listed in different languages. */
    descriptions: DescriptionSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of version groups where moves can be learned through this method. */
    version_groups: NamedAPIResourceSchema[]
}

export interface MoveTargetSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The description of this resource listed in different languages. */
    descriptions: DescriptionSchema[]
    /** A list of moves that that are directed at this target. */
    moves: NamedAPIResourceSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}