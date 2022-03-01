// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query

  if (req.method == 'GET') {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: {}
      }
    });

    res.status(200).json(post);
  } else if (req.method == 'POST') {
    const post = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        published: true,
      }
    });
    res.status(200).json(post);
  } else if (req.method == 'PUT') {
    const { title, content } = req.body;
    const post = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title: title,
        content: content,
      }
    });
    res.status(200).json(post);
  } else if (req.method == 'DELETE') {
    const post = await prisma.post.delete({
      where: {
        id: Number(id),
      }
    });
    res.status(200).json(post);
  } else {
    res.status(200).json({ 'message': 'error occured' })
  }
}
