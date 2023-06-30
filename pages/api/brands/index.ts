import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";
import { fetchWatchesByBrandSlugQuery } from "@/utils/queries";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const { slug } = req.query;
        console.log(slug)
        let query = fetchWatchesByBrandSlugQuery(`${slug}`);
        const data = await client.fetch(query);
        // await redis.set('hello', JSON.stringify(data))
        res
            .status(200)
            .json({ status: 200, message: "Fetch brand success!", data: data });
    }
}
