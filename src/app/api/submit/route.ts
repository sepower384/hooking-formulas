import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone } = await req.json();

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "모든 항목을 입력해주세요." }, { status: 400 });
  }

  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

  if (!GOOGLE_SCRIPT_URL) {
    console.error("GOOGLE_SCRIPT_URL 환경변수가 설정되지 않았습니다.");
    return NextResponse.json({ ok: true });
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (e) {
    console.error("Google Sheets 저장 실패:", e);
  }

  return NextResponse.json({ ok: true });
}
