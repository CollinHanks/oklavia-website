import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper to safely use supabase
export function getSupabase() {
  if (!supabase) {
    console.warn('Supabase not configured')
    return null
  }
  return supabase
}

// Types for database tables
export type ContactMessage = {
  id?: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  created_at?: string
}

export type B2BApplication = {
  id?: string
  company_name: string
  contact_person: string
  email: string
  phone: string
  tax_number?: string
  city: string
  business_type: string
  estimated_monthly_order: string
  products_interested: string[]
  message?: string
  created_at?: string
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image: string
  category: 'tarifler' | 'hikayeler' | 'duyurular'
  author: string
  published: boolean
  published_at: string
  created_at: string
}
