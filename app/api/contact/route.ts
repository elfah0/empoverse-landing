import { NextResponse } from 'next/server'
import { z } from 'zod'
import { getPrisma } from '@/lib/prisma'

const ContactSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email().max(320),
  project: z.string().min(10).max(5000),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const data = ContactSchema.parse(json)
    const prisma = await getPrisma()
    await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        project: data.project,
      },
    })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      return NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 })
    }
    console.error('Contact submit error', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}



