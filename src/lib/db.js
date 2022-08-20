import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);



/**
 * @param {string} articleTitle
 */
async function loadArticle(articleTitle) {
    let { data, error } = await supabase
            .from('Articles')
            .select('*')
            .eq('slug', articleTitle)

        if (error) throw new Error(error.message);

        // returns only 1 value
        return data[0]; 
}

async function articleSummary() {
    let { data, error } = await supabase
            .from('Articles')
            .select('*')

        if (error) throw new Error(error.message);

        return data; 
}


export { supabase, loadArticle, articleSummary };
