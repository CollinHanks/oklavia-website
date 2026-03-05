import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Lütfen gerekli alanları doldurun.' }, { status: 400 })
    }

    const sb = getSupabase()
    if (!sb) {
      return NextResponse.json({ error: 'Veritabanı bağlantısı yapılandırılmamış.' }, { status: 500 })
    }

    // Save to Supabase
    const { error } = await sb.from('contact_messages').insert([{ name, email, phone, subject, message }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Mesaj kaydedilemedi.' }, { status: 500 })
    }

    // Send email notification (if RESEND_API_KEY is configured)
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'OKLAVİA Web <bildirim@oklavia.com>',
            to: ['merhaba@oklavia.com'],
            subject: `[İletişim] ${subject} — ${name}`,
            html: `
              <h2>Yeni İletişim Mesajı</h2>
              <p><strong>Ad:</strong> ${name}</p>
              <p><strong>E-posta:</strong> ${email}</p>
              <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
              <p><strong>Konu:</strong> ${subject}</p>
              <hr/>
              <p>${message}</p>
            `,
          }),
        })
      } catch (emailErr) {
        console.error('Email notification failed:', emailErr)
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Sunucu hatası.' }, { status: 500 })
  }
}
