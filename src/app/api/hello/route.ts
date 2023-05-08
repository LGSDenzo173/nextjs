import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';

//Read
export async function GET(req: NextRequest) {
  return NextResponse.json({
    ID: '1',
    Name: 'Muhammad Umar',
    Email: 'umarsksignature@gmail.com',
    Phone: '03171653624',
    Address: 'University Road Tehkal Payan ,Peshawar',
  });
}
//Create
export async function POST(request: NextRequest) {
  const obj = await request.json();

  return NextResponse.json({
    // status: obj.status, //Single object data displaying
    // Cooking: obj.Type,
    // quantity: obj.quantity,
    // Status: obj, // ALL Data in one Object
    Name: obj.name,
    Email: obj.email,
    Password: obj.password,
  });
}
export async function PUT(request: NextRequest) {
  const obj = await request.json();
  return NextResponse.json({
    Name: obj.name,
    Email: obj.email,
    password: obj.password,
  });
}

export async function DELETE(request: NextRequest) {
  const obj = await request.json();
}
