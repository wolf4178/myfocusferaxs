import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  return NextResponse.json(await prisma.announcement.findMany({ orderBy: { createdAt: "desc" } }));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const announcement = await prisma.announcement.create({
    data: {
      title: body.title,
      message: body.message,
      isActive: true
    }
  });
  return NextResponse.json(announcement, { status: 201 });
}
