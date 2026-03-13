import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) return NextResponse.json({ error: "userId is required" }, { status: 400 });

  const attempts = await prisma.quizAttempt.findMany({ where: { userId } });
  const avgAccuracy = attempts.length
    ? attempts.reduce((sum, a) => sum + a.accuracy, 0) / attempts.length
    : 0;

  return NextResponse.json({ attempts, avgAccuracy });
}
