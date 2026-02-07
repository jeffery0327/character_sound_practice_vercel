import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'
import { env } from '../env'

const supabase = createClient<Database>(
  env.SUPABASE_URL,
  env.SUPABASE_ANON_KEY
)

          
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'
const charactersQuery = supabase
  .from("characters")
  .select('*');
type Characters = QueryData<typeof charactersQuery>;
const { data, error } = await charactersQuery;
if (error) throw error;
export const characters: Characters = data;