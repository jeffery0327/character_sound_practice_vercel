import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/supabase/database.types'

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

          
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'
const charactersQuery = supabase
  .from("characters")
  .select('*');
type Characters = QueryData<typeof charactersQuery>;
const { data, error } = await charactersQuery;
if (error) throw error;
export const characters: Characters = data;