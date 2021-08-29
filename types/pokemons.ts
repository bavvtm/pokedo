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
    FlavorTextSchema,
    GenerationGameIndexSchema,
    NameSchema,
    NamedAPIResourceSchema,
    VerboseEffectSchema,
    VersionEncounterDetailSchema,
    VersionGameIndexSchema
} from "./utility.ts";

export interface AbilitySchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** Whether or not this ability originated in the main series of the video games. */
    is_main_series: boolean
    /** The generation this ability originated in. */
    generation: NamedAPIResourceSchema
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** The effect of this ability listed in different languages. */
    effect_entries: VerboseEffectSchema[]
    /** The list of previous effects this ability has had across version groups. */
    effect_changes: AbilityEffectChangeSchema[]
    /** The flavor text of this ability listed in different languages. */
    flavor_text_entries: AbilityFlavorTextSchema[]
    /** A list of Pokémon that could potentially have this ability. */
    pokemon: AbilityPokemonSchema[]
}

export interface AbilityEffectChangeSchema {
    /** The previous effect of this ability listed in different languages. */
    effect_entries: EffectSchema[]
    /** The version group in which the previous effect of this ability originated. */
    version_group: NamedAPIResourceSchema
}

export interface AbilityFlavorTextSchema {
    /** The localized name for an API resource in a specific language. */
    flavor_text: string
    /** The language this text resource is in. */
    language: NamedAPIResourceSchema
    /** The version group that uses this flavor text. */
    version_group: NamedAPIResourceSchema
}

export interface AbilityPokemonSchema {
    /** Whether or not this a hidden ability for the referenced Pokémon. */
    is_hidden: boolean
    /** Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon. */
    slot: number
    /** The Pokémon this ability could belong to. */
    pokemon: NamedAPIResourceSchema
}

export interface CharacteristicSchema {
    /** The identifier for this resource. */
    id: number
    /** The remainder of the highest stat/IV divided by 5. */
    gene_modulo: number
    /** The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5. */
    possible_values: number[]
}

export interface EggGroupSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of all Pokémon species that are members of this egg group. */
    pokemon_species: NamedAPIResourceSchema[]
}

export interface GenderSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A list of Pokémon species that can be this gender and how likely it is that they will be. */
    pokemon_species_details: PokemonSpeciesGenderSchema[]
    /** A list of Pokémon species that required this gender in order for a Pokémon to evolve into them. */
    required_for_evolution: NamedAPIResourceSchema[]
}

export interface PokemonSpeciesGenderSchema {
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
    rate: number
    /** A Pokémon species that can be the referenced gender. */
    pokemon_species: NamedAPIResourceSchema
}

export interface GrowthRateSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The formula used to calculate the rate at which the Pokémon species gains level. */
    formula: string
    /** The descriptions of this characteristic listed in different languages. */
    descriptions: DescriptionSchema[]
    /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
    levels: GrowthRateExperienceLevelSchema[]
    /** A list of Pokémon species that gain levels at this growth rate. */
    pokemon_species: NamedAPIResourceSchema[]
}

export interface GrowthRateExperienceLevelSchema {
    /** The level gained. */
    level: number
    /** The amount of experience required to reach the referenced level. */
    experience: number
}

export interface NatureSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The stat decreased by 10% in Pokémon with this nature. */
    decreased_stat: NamedAPIResourceSchema
    /** The stat increased by 10% in Pokémon with this nature. */
    increased_stat: NamedAPIResourceSchema
    /** The flavor hated by Pokémon with this nature. */
    hates_flavor: NamedAPIResourceSchema
    /** The flavor liked by Pokémon with this nature. */
    likes_flavor: NamedAPIResourceSchema
    /** A list of Pokéathlon stats this nature effects and how much it effects them. */
    pokeathlon_stat_changes: NatureStatChangeSchema[]
    /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
    move_battle_style_preferences: MoveBattleStylePreferenceSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}

export interface NatureStatChangeSchema {
    /** The amount of change. */
    max_change: number
    /** The stat being affected. */
    pokeathlon_stat: NamedAPIResourceSchema
}

export interface MoveBattleStylePreferenceSchema {
    /** Chance of using the move, in percent, if HP is under one half. */
    low_hp_preference: number
    /** Chance of using the move, in percent, if HP is over one half. */
    high_hp_preference: number
    /** The move battle style. */
    move_battle_style: NamedAPIResourceSchema
}

export interface PokeathlonStatSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A detail of natures which affect this Pokéathlon stat positively or negatively. */
    affecting_natures: NaturePokeathlonStatAffectSetsSchema
}

export interface NaturePokeathlonStatAffectSetsSchema {
    /** A list of natures and how they change the referenced Pokéathlon stat. */
    increase: NaturePokeathlonStatAffectSchema[]
    /** A list of natures and how they change the referenced Pokéathlon stat. */
    decrease: NaturePokeathlonStatAffectSchema[]
}

export interface NaturePokeathlonStatAffectSchema {
    /** The maximum amount of change to the referenced Pokéathlon stat. */
    max_change: number
    /** The nature causing the change. */
    nature: NamedAPIResourceSchema
}

export interface PokemonSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The base experience gained for defeating this Pokémon. */
    base_experience: number
    /** The height of this Pokémon in decimetres. */
    height: number
    /** Set for exactly one Pokémon used as the default for each species. */
    is_default: boolean
    /** Order for sorting. Almost national order, except families are grouped together. */
    order: number
    /** The weight of this Pokémon in hectograms. */
    weight: number
    /** A list of abilities this Pokémon could potentially have. */
    abilities: PokemonAbilitySchema[]
    /** A list of forms this Pokémon can take on. */
    forms: NamedAPIResourceSchema[]
    /** A list of game indices relevent to Pokémon item by generation. */
    game_indices: VersionGameIndexSchema[]
    /** A list of items this Pokémon may be holding when encountered. */
    held_items: PokemonHeldItemSchema[]
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
    location_area_encounters: string
    /** A list of moves along with learn methods and level details pertaining to specific version groups. */
    moves: PokemonMoveSchema[]
    /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites */
    sprites: PokemonSpritesSchema
    /** The species this Pokémon belongs to. */
    species: NamedAPIResourceSchema
    /** A list of base stat values for this Pokémon. */
    stats: PokemonStatSchema[]
    /** A list of details showing types this Pokémon has. */
    types: PokemonTypeSchema[]
}

export interface PokemonAbilitySchema {
    /** Whether or not this is a hidden ability. */
    is_hidden: boolean
    /** The slot this ability occupies in this Pokémon species. */
    slot: number
    /** The ability the Pokémon may have. */
    ability: NamedAPIResourceSchema
}

export interface PokemonTypeSchema {
    /** The order the Pokémon's types are listed in. */
    slot: number
    /** The type the referenced Pokémon has. */
    type: NamedAPIResourceSchema
}

export interface PokemonHeldItemSchema {
    /** The item the referenced Pokémon holds. */
    item: NamedAPIResourceSchema
    /** The details of the different versions in which the item is held. */
    version_details: PokemonHeldItemVersionSchema[]
}

export interface PokemonHeldItemVersionSchema {
    /** The version in which the item is held. */
    version: NamedAPIResourceSchema
    /** How often the item is held. */
    rarity: number
}

export interface PokemonMoveSchema {
    /** The move the Pokémon can learn. */
    move: NamedAPIResourceSchema
    /** The details of the version in which the Pokémon can learn the move. */
    version_group_details: PokemonMoveVersionSchema[]
}

export interface PokemonMoveVersionSchema {
    /** The method by which the move is learned. */
    move_learn_method: NamedAPIResourceSchema
    /** The version group in which the move is learned. */
    version_group: NamedAPIResourceSchema
    /** The minimum level to learn the move. */
    level_learned_at: number
}

export interface PokemonStatSchema {
    /** The stat the Pokémon has. */
    stat: NamedAPIResourceSchema
    /** The effort points (EV) the Pokémon has in the stat. */
    effort: number
    /** The base value of the stat. */
    base_stat: number
}

export interface PokemonSpritesSchema {
    /** The default depiction of this Pokémon from the front in battle. */
    front_default: string
    /** The shiny depiction of this Pokémon from the front in battle. */
    front_shiny: string
    /** The female depiction of this Pokémon from the front in battle. */
    front_female: string
    /** The shiny female depiction of this Pokémon from the front in battle. */
    front_shiny_female: string
    /** The default depiction of this Pokémon from the back in battle. */
    back_default: string
    /** The shiny depiction of this Pokémon from the back in battle. */
    back_shiny: string
    /** The female depiction of this Pokémon from the back in battle. */
    back_female: string
    /** The shiny female depiction of this Pokémon from the back in battle. */
    back_shiny_female: string
}

export interface LocationAreaEncounterSchema {
    /** The location area the referenced Pokémon can be encountered in. */
    location_area: NamedAPIResourceSchema
    /** A list of versions and encounters with the referenced Pokémon that might happen. */
    version_details: VersionEncounterDetailSchema[]
}

export interface PokemonColorSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of the Pokémon species that have this color. */
    pokemon_species: NamedAPIResourceSchema[]
}

export interface PokemonFormSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name. */
    order: number
    /** The order in which forms should be sorted within a species' forms. */
    form_order: number
    /** True for exactly one form used as the default for each Pokémon. */
    is_default: boolean
    /** Whether or not this form can only happen during battle. */
    is_battle_only: boolean
    /** Whether or not this form requires mega evolution. */
    is_mega: boolean
    /** The name of this form. */
    form_name: string
    /** The Pokémon that can take on this form. */
    pokemon: NamedAPIResourceSchema
    /** A set of sprites used to depict this Pokémon form in the game. */
    sprites: PokemonFormSpritesSchema
    /** The version group this Pokémon form was introduced in. */
    version_group: NamedAPIResourceSchema
    /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name. */
    names: NameSchema[]
    /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name. */
    form_names: NameSchema[]
}

export interface PokemonFormSpritesSchema {
    /** The default depiction of this Pokémon form from the front in battle. */
    front_default: string
    /** The shiny depiction of this Pokémon form from the front in battle. */
    front_shiny: string
    /** The default depiction of this Pokémon form from the back in battle. */
    back_default: string
    /** The shiny depiction of this Pokémon form from the back in battle. */
    back_shiny: string
}

export interface PokemonHabitatSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of the Pokémon species that can be found in this habitat. */
    pokemon_species: NamedAPIResourceSchema[]
}

export interface PokemonShapeSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The "scientific" name of this Pokémon shape listed in different languages. */
    awesome_names: AwesomeNameSchema[]
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of the Pokémon species that have this shape. */
    pokemon_species: NamedAPIResourceSchema[]
}

export interface AwesomeNameSchema {
    /** The localized "scientific" name for an API resource in a specific language. */
    awesome_name: string
    /** The language this "scientific" name is in. */
    language: NamedAPIResourceSchema
}

export interface PokemonSpeciesSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
    order: number
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
    gender_rate: number
    /** The base capture rate; up to 255. The higher the number, the easier the catch. */
    capture_rate: number
    /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
    base_happiness: number
    /** Whether or not this is a baby Pokémon. */
    is_baby: boolean
    /** Whether or not this is a legendary Pokémon. */
    is_legendary: boolean
    /** Whether or not this is a mythical Pokémon. */
    is_mythical: boolean
    /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. */
    hatch_counter: number
    /** Whether or not this Pokémon has visual gender differences. */
    has_gender_differences: boolean
    /** Whether or not this Pokémon has multiple forms and can switch between them. */
    forms_switchable: boolean
    /** The rate at which this Pokémon species gains levels. */
    growth_rate: NamedAPIResourceSchema
    /** A list of Pokedexes and the indexes reserved within them for this Pokémon species. */
    pokedex_numbers: PokemonSpeciesDexEntrySchema[]
    /** A list of egg groups this Pokémon species is a member of. */
    egg_groups: NamedAPIResourceSchema[]
    /** The color of this Pokémon for Pokédex search. */
    color: NamedAPIResourceSchema
    /** The shape of this Pokémon for Pokédex search. */
    shape: NamedAPIResourceSchema
    /** The Pokémon species that evolves into this Pokemon_species. */
    evolves_from_species: NamedAPIResourceSchema
    /** The evolution chain this Pokémon species is a member of. */
    evolution_chain: APIResourceSchema
    /** The habitat this Pokémon species can be encountered in. */
    habitat: NamedAPIResourceSchema
    /** The generation this Pokémon species was introduced in. */
    generation: NamedAPIResourceSchema
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of encounters that can be had with this Pokémon species in pal park. */
    pal_park_encounters: PalParkEncounterAreaSchema[]
    /** A list of flavor text entries for this Pokémon species. */
    flavor_text_entries: FlavorTextSchema[]
    /** Descriptions of different forms Pokémon take on within the Pokémon species. */
    form_descriptions: DescriptionSchema[]
    /** The genus of this Pokémon species listed in multiple languages. */
    genera: GenusSchema[]
    /** A list of the Pokémon that exist within this Pokémon species. */
    varieties: PokemonSpeciesVarietySchema[]
}

export interface GenusSchema {
    /** The localized genus for the referenced Pokémon species */
    genus: string
    /** The language this genus is in. */
    language: NamedAPIResourceSchema
}

export interface PokemonSpeciesDexEntrySchema {
    /** The index number within the Pokédex. */
    entry_number: number
    /** The Pokédex the referenced Pokémon species can be found in. */
    pokedex: NamedAPIResourceSchema
}

export interface PalParkEncounterAreaSchema {
    /** The base score given to the player when the referenced Pokémon is caught during a pal park run. */
    base_score: number
    /** The base rate for encountering the referenced Pokémon in this pal park area. */
    rate: number
    /** The pal park area where this encounter happens. */
    area: NamedAPIResourceSchema
}

export interface PokemonSpeciesVarietySchema {
    /** Whether this variety is the default variety. */
    is_default: boolean
    /** The Pokémon variety. */
    pokemon: NamedAPIResourceSchema
}

export interface StatSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** ID the games use for this stat. */
    game_index: number
    /** Whether this stat only exists within a battle. */
    is_battle_only: boolean
    /** A detail of moves which affect this stat positively or negatively. */
    affecting_moves: MoveStatAffectSetsSchema
    /** A detail of natures which affect this stat positively or negatively. */
    affecting_natures: NatureStatAffectSetsSchema
    /** A list of characteristics that are set on a Pokémon when its highest base stat is this stat. */
    characteristics: APIResourceSchema[]
    /** The class of damage this stat is directly related to. */
    move_damage_class: NamedAPIResourceSchema
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
}

export interface MoveStatAffectSetsSchema {
    /** A list of moves and how they change the referenced stat. */
    increase: MoveStatAffectSchema[]
    /** A list of moves and how they change the referenced stat. */
    decrease: MoveStatAffectSchema[]
}

export interface MoveStatAffectSchema {
    /** The maximum amount of change to the referenced stat. */
    change: number
    /** The move causing the change. */
    move: NamedAPIResourceSchema
}

export interface NatureStatAffectSetsSchema {
    /** A list of natures and how they change the referenced stat. */
    increase: NamedAPIResourceSchema[]
    /** A list of nature sand how they change the referenced stat. */
    decrease: NamedAPIResourceSchema[]
}

export interface TypeSchema {
    /** The identifier for this resource. */
    id: number
    /** The name for this resource. */
    name: string
    /** A detail of how effective this type is toward others and vice versa. */
    damage_relations: TypeRelationsSchema
    /** A list of game indices relevent to this item by generation. */
    game_indices: GenerationGameIndexSchema[]
    /** The generation this type was introduced in. */
    generation: NamedAPIResourceSchema
    /** The class of damage inflicted by this type. */
    move_damage_class: NamedAPIResourceSchema
    /** The name of this resource listed in different languages. */
    names: NameSchema[]
    /** A list of details of Pokémon that have this type. */
    pokemon: TypePokemonSchema[]
    /** A list of moves that have this type. */
    moves: NamedAPIResourceSchema[]
}

export interface TypePokemonSchema {
    /** The order the Pokémon's types are listed in. */
    slot: number
    /** The Pokémon that has the referenced type. */
    pokemon: NamedAPIResourceSchema
}

export interface TypeRelationsSchema {
    /** A list of types this type has no effect on. */
    no_damage_to: NamedAPIResourceSchema[]
    /** A list of types this type is not very effect against. */
    half_damage_to: NamedAPIResourceSchema[]
    /** A list of types this type is very effect against. */
    double_damage_to: NamedAPIResourceSchema[]
    /** A list of types that have no effect on this type. */
    no_damage_from: NamedAPIResourceSchema[]
    /** A list of types that are not very effective against this type. */
    half_damage_from: NamedAPIResourceSchema[]
    /** A list of types that are very effective against this type. */
    double_damage_from: NamedAPIResourceSchema[]
}