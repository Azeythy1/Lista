
const SUPABASE_URL = "https://rsxinnuywyinqzmhpddn.supabase.co" 

const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzeGlubnV5d3lpbnF6bWhwZGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzQ4NTQsImV4cCI6MTk5Mzk1MDg1NH0.IQvtSpKleVJwPH8l0osRWdf63JzLLPQEgyTgySYsUYI"

const _supabase = supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);



// -----------------------------------------------------------------------------------------------------

var cardCliente= document.querySelector("#tbody");

async function loadData(){

    let {data,error}= await _supabase
    .from('Lista-tabela')
    .select('*');

    

    console.table(data);
    console.log(error);
}
 loadData();