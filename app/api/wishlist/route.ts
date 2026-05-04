import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { productId } = body as { productId: string }

    if (!productId) {
      return NextResponse.json({ error: 'Missing productId' }, { status: 400 })
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const { data: existing } = await supabase
      .from('wishlists')
      .select('id')
      .eq('user_id', user.id)
      .eq('product_id', productId)
      .maybeSingle()

    if (existing) {
      await supabase.from('wishlists').delete().eq('id', existing.id)
      return NextResponse.json({ action: 'removed' })
    }

    await supabase.from('wishlists').insert({ user_id: user.id, product_id: productId })
    return NextResponse.json({ action: 'added' })
  } catch (error) {
    console.error('Wishlist error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ inWishlist: false })
    }

    if (productId) {
      const { data } = await supabase
        .from('wishlists')
        .select('id')
        .eq('user_id', user.id)
        .eq('product_id', productId)
        .maybeSingle()
      return NextResponse.json({ inWishlist: !!data })
    }

    const { data } = await supabase
      .from('wishlists')
      .select('product_id')
      .eq('user_id', user.id)

    return NextResponse.json({ productIds: data?.map((w) => w.product_id) ?? [] })
  } catch (error) {
    console.error('Wishlist GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
