// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma';
import * as bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method == 'POST') {
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                role: 'u'
            }
        })
        res.status(200).json(newUser)
        return
    } else if (req.method == 'GET') {
        const user = await prisma.user.findMany();
        res.status(200).json(user)
    } else if (req.method == 'PUT') {
        const user = await prisma.user.findMany();
        res.status(200).json(user)
    } else if (req.method == 'DELETE') {
        const user = await prisma.user.findMany();
        res.status(200).json(user)
    } else {
        res.status(200).json({ 'message': 'error occured' })
    }
}
