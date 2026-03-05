import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen gerekli alanları doldurun.' },
        { status: 400 }
      )
    }

    const sb = getSupabase()
    if (!sb) {
      return NextResponse.json({ error: 'Veritabanı bağlantısı yapılandırılmamış.' }, { status: 500 })
    }

    const { error } = await sb
      .from('contact_messages')
      .insert([{ name, email, phone, subject, message }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Mesaj kaydedilemedi.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Sunucu hatası.' },
      { status: 500 }
    )
  }
}
