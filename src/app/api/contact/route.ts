import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Barcha maydonlarni to'ldiring." },
        { status: 400 }
      );
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram token yoki chat id topilmadi.");
      return NextResponse.json(
        { error: "Server xatosi, sozlamalar tekshirilmoqda." },
        { status: 500 }
      );
    }

    const text = `
🌟 <b>Yangi Xabar (Portfolio)</b> 🌟

👤 <b>Ism:</b> ${name}
📧 <b>Email:</b> ${email}

💬 <b>Xabar:</b>
${message}
    `;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      console.error("Telegram ga yuborishda xatolik:", await response.text());
      return NextResponse.json(
        { error: "Xabarni yuborishda xatolik yuz berdi." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Xabar muvaffaqiyatli yuborildi." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API xatoligi:", error);
    return NextResponse.json(
      { error: "Ichki server xatosi yuz berdi." },
      { status: 500 }
    );
  }
}
