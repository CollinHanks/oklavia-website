import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { company_name, contact_person, email, phone, tax_number, city, business_type, estimated_monthly_order, products_interested, message } = body

    if (!company_name || !contact_person || !email || !phone || !city || !business_type || !estimated_monthly_order) {
      return NextResponse.json({ error: 'Lütfen gerekli alanları doldurun.' }, { status: 400 })
    }

    const sb = getSupabase()
    if (!sb) {
      return NextResponse.json({ error: 'Veritabanı bağlantısı yapılandırılmamış.' }, { status: 500 })
    }

    const { error } = await sb.from('b2b_applications').insert([{
      company_name, contact_person, email, phone, tax_number, city,
      business_type, estimated_monthly_order, products_interested, message,
    }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Başvuru kaydedilemedi.' }, { status: 500 })
    }

    // Send email notification
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'OKLAVİA Web <bildirim@oklavia.com>',
            to: ['merhaba@oklavia.com'],
            subject: `[B2B Başvuru] ${company_name} — ${contact_person}`,
            html: `
              <h2>Yeni B2B Başvurusu</h2>
              <p><strong>Firma:</strong> ${company_name}</p>
              <p><strong>Yetkili:</strong> ${contact_person}</p>
              <p><strong>E-posta:</strong> ${email}</p>
              <p><strong>Telefon:</strong> ${phone}</p>
              <p><strong>Şehir:</strong> ${city}</p>
              <p><strong>İşletme Türü:</strong> ${business_type}</p>
              <p><strong>Tahmini Sipariş:</strong> ${estimated_monthly_order}</p>
              <p><strong>İlgili Ürünler:</strong> ${(products_interested || []).join(', ')}</p>
              ${message ? `<hr/><p><strong>Not:</strong> ${message}</p>` : ''}
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
