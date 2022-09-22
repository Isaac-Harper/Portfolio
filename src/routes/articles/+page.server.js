import { articleSummary } from "$lib/db"

export async function load() {
    const data = await articleSummary()
    return data
}
