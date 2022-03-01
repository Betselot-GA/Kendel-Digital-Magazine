// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getImage, uploadImage } from '../../../lib/images';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const posts = await prisma.post.findMany({
        where: {
            published: true
        },
        orderBy: {
            id: 'desc'
        },
        include: {
            author: {}
        }
    });
    res.status(200).json(posts);
}
