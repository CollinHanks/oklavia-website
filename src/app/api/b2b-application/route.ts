import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { company_name, contact_person, email, phone, tax_number, city, business_type, estimated_monthly_order, products_interested, message } = body

    if (!company_name || !contact_person || !email || !phone || !city || !business_type || !estimated_monthly_order) {
      return NextResponse.json(
        { error: 'Lütfen gerekli alanları doldurun.' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('b2b_applications')
      .insert([{
        company_name,
        contact_person,
        email,
        phone,
        tax_number,
        city,
        business_type,
        estimated_monthly_order,
        products_interested,
        message,
      }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Başvuru kaydedilemedi.' },
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
