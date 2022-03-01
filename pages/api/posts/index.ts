// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getImage, uploadImage } from '../../../lib/images';

type Data = {
  name: string
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'POST') {

    const imageUploaded = await getImage(req);
    const { title, content } = imageUploaded.fields;
    const imageData = await uploadImage(imageUploaded.files.image.filepath);
    console.log(imageData);
  
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        publicId: imageData.public_id,
        format: imageData.format,
        version: imageData.version.toString(),
        published: false,
      }
    });
    res.status(200).json(post);
  } else if (req.method == 'GET') {
    const posts = await prisma.post.findMany({
      orderBy: {
        id: 'desc'
      },
      include: {
        author: {}
      }
    });
    res.status(200).json(posts);
  } else {
    res.status(200).json({ 'message': 'error occured' })
  }
}
