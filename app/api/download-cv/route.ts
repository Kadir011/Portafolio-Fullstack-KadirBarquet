import { readFile } from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'cv', 'CV-Kadir-Barquet.pdf')
  const file = await readFile(filePath)

  return new NextResponse(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="CV-Kadir-Barquet.pdf"',
    },
  })
}
