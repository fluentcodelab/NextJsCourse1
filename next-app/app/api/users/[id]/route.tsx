import { NextRequest, NextResponse } from 'next/server';

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } },
) {
  if (id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: 'John' });
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } },
) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });

  if (id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } },
) {
  if (id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({});
}
