// Dodano plik do obsługi wysyłki maila
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, location, message } = await request.json();

    // Konfiguracja transportu (Gmail + hasło aplikacji)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // <-- Twój email
        pass: process.env.GMAIL_PASS, // <-- Hasło aplikacji (App Password)
      },
    });

    // Wysyłanie maila
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // <-- Adres, na który chcesz otrzymać wiadomości
      subject: "Wiadomość z formularza",
      text: `
        Imię: ${name}\n
        Email: ${email}\n
        Telefon: ${phone}\n
        Miejsce: ${location}\n
        Wiadomość: ${message}
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email wysłany" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Błąd wysyłania emaila" },
      { status: 500 }
    );
  }
}
