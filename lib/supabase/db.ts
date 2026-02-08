import { QueryData } from "@supabase/supabase-js"
import { supabasePublic } from "@/lib/supabase/public"

export type Skill = {
  slug: string;
  name: string;
  description: string;
}

export type CompletedCharacter = {
  id: number;
  character: string;
  radical: string;
  sounds: Sound[];
  similars: CompletedCharacter[];
  lession: Lession | undefined;
}

export type LearningType = {
  slug: string;
  name: string;
  items: Skill[];
}

export type Lession = {
  id: number;
  name: string;
  description?: string;
  slug: string;
  active: boolean;
}

export type Character = {
  id: number;
  character: string;
  radical: string;
  sounds: string[];
  similars: string[];
  lession: string;
}

export type Sound = {
  id: number;
  sound: string;
  words: string[];
}

export type Sentence = {
  id: number;
  format: string;
  sample: string;
  lessionId?: number;
}


export async function findAllCompletedCharacters() {
  const { data, error } = await getBaseCompletedCharactersQuery();
  if (error) throw error;
  return transferToCompletedCharacter(data);
}

export async function findAllCompletedCharacterPaths() {
  const { data, error } = await getBaseCompletedCharactersQuery().not("lession","is",null);
  if (error) throw error;
  return data.map(r => ({
    lession: r.lession?.slug,
    character: r.id.toString(),
  }));
}

export async function findByLessionIdCompletedCharacters(lessionId: number) {
  const { data, error } = await getBaseCompletedCharactersQuery().eq('lession', lessionId);
  if (error) throw error;
  return transferToCompletedCharacter(data);
}

export async function findByIdCompletedCharacters(characterId: number) {
  const { data, error } = await getBaseCompletedCharactersQuery().eq('id', characterId);
  if (error) throw error;
  if(data.length == 0) return null;
  return transferToCompletedCharacter(data)[0];
}

export async function findAllLessions() {
  const { data, error } = await getBaseLessionsQuery();
  if (error) throw error;
  return transferToLession(data);
}

export async function findAllLessionPaths() {
  const { data, error } = await getBaseLessionsQuery();
  if (error) throw error;
  return data.map(r => ({
    lession: r.slug,
  }));
}

export async function findBySlugLession(slug: string) {
  const { data, error } = await getBaseLessionsQuery().eq('slug', slug);
  if (error) throw error;
  if(data.length == 0) return null;
  return transferToLession(data)[0];
}

export async function findByLessionIdSentences(lessionId: number) {
  const { data, error } = await getBaseSentencesQuery().eq('lession', lessionId);
  if (error) throw error;
  return transferToSentence(data);
}

export async function findAllSounds() {
  const { data, error } = await getBaseSoundsQuery();
  if (error) throw error;
  return transferToSound(data);
}

function getBaseCompletedCharactersQuery() {
  return supabasePublic.from('characters').select(`
    id,
    character,
    radical,
    lession(
      id,
      slug,
      name,
      description,
      active
    ),
    sounds(
      id,
      sound,
      words
    ),
    similars:character_similar_relation!character_similar_relation_character_fkey (
      similar:characters!character_similar_relation_similar_fkey (
        id,
        character,
        radical,
        sounds(
          id,
          sound,
          words
        )
      )
    )
  `)
}
const baseCompletedCharactersQuery = getBaseCompletedCharactersQuery();


function getBaseLessionsQuery() {
  return supabasePublic.from('lessions').select(`
    id,
    slug,
    name,
    description,
    active
  `);
}
const baseLessionsQuery = getBaseLessionsQuery();

function getBaseSentencesQuery() {
  return supabasePublic.from('sentences').select(`
    id,
    lession,
    format,
    sample
  `);
}
const baseSentencesQuery = getBaseSentencesQuery();

function getBaseSoundsQuery() {
  return supabasePublic.from('sounds').select(`
    id,
    sound,
    words
  `);
}
const baseSoundsQuery = getBaseSoundsQuery();



function transferToCompletedCharacter(data: QueryData<typeof baseCompletedCharactersQuery>): CompletedCharacter[] {
  const completedCharacter: CompletedCharacter[] = data.map(character => {
    const sounds: Sound[] = character.sounds.map(sound => {
      return {
        id: sound.id,
        sound: sound.sound,
        words: sound.words?.split(',') ?? [],
      }
    })
    const lession: Lession | undefined = character.lession == undefined ? undefined : {
      id: character.lession.id,
      slug: character.lession.slug ?? '',
      name: character.lession.name ?? '',
      description: character.lession.description ?? '',
      active: character.lession.active ?? false,
    };
    const similars: CompletedCharacter[] = character.similars.map(similar => {
      const sounds: Sound[] = similar.similar.sounds.map(sound => {
        return {
          id: sound.id,
          sound: sound.sound,
          words: sound.words?.split(',') ?? [],
        }
      })
      return {
        id: similar.similar.id,
        character: similar.similar.character ?? '',
        radical: similar.similar.radical ?? '',
        lession: undefined,
        sounds: sounds ?? [],
        similars: []
      }
    })

    return {
      id: character.id,
      character: character.character ?? '',
      radical: character.radical ?? '',
      lession: lession,
      sounds: sounds ?? [],
      similars: similars ?? [],
    }
  })
  return completedCharacter
}

function transferToLession(data: QueryData<typeof baseLessionsQuery>): Lession[] {
  const lessions: Lession[] = data.map(lession => {
    return {
      id: lession.id,
      name: lession.name ?? '',
      description: lession.description ?? '',
      slug: lession.slug,
      active: lession.active,
    }
  })
  return lessions;
}

function transferToSentence(data: QueryData<typeof baseSentencesQuery>): Sentence[] {
  const sentences: Sentence[] = data.map(sentence => {
    return {
      id: sentence.id,
      lessionId: sentence.lession ?? undefined,
      format: sentence.format ?? '',
      sample: sentence.sample ?? '',
    }
  })
  return sentences;
}

function transferToSound(data: QueryData<typeof baseSoundsQuery>): Sound[] {
  const sounds: Sound[] = data.map(sound => {
    return {
      id: sound.id,
      sound: sound.sound,
      words: sound.words?.split(',') ?? [],
    }
  })
  return sounds;
}