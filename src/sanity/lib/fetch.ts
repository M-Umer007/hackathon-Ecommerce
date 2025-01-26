import exp from "constants";
import { createClient } from "next-sanity";


const client = createClient({
    projectId: "0j1bigzv",
    dataset : "production",
    useCdn:true,
    apiVersion: 'v2025-01-18'

})

export async function sanityFetch({query, params={ }}: {query:string , params?:any}){
    return await client.fetch(query,params)
}