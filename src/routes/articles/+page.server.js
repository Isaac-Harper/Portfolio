import { articleSummary } from "$lib/db"

export async function load() {
    
    const data = [
        {
            title: "First look at a 1962 pacer trailer",
            intro: "My partner Izzy recently bought a 1962 Pack camper trailer that we are intending to fix up and eventually make our part time home as we travel the countr. This article documents the initial state of the camper and what our goals for this project.",
            slug: "trailer-1",
      },
      {
            title: "A dive into my split keyboard, JUNO",
            intro: "JUNO is my first project with C and will be in active development for a long time as I continue to modify it to fit my needs. This is an extended README where I'll go into the thought proccess that went into its design.",
            slug: "juno",
      },
        
    ]  
    return data
}



/*

      {
            title: "",
            intro: "",
            slug: "",
      },
      
*/