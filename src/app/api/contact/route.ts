import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, centerName, email, branchCount } = body;

    // SMTP Ayarları (odimax.com.tr sunucu bilgilerini .env dosyasından çekeceğiz)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // örn: mail.odimax.com.tr
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Mail İçeriği ve Gönderilecek Adresler
    const mailOptions = {
      from: `"Odimax Web Form" <${process.env.SMTP_USER}>`, 
      replyTo: email, 
      to: [
        "sarikayamuammer@gmail.com",
        "destek@odimax.com.tr",
        "medusaglobalcomtr@gmail.com",
        "farukozdemr7@gmail.com",
        "farukozdemir@medusaglobal.com.tr"
      ].join(", "),
      subject: `Yeni Demo Talebi: ${centerName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f5; padding: 40px 20px; color: #333333; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            
            <!-- Header Kısmı -->
            <div style="background-color: #0b1120; padding: 30px 20px; text-align: center; border-bottom: 4px solid #02b6da;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Yeni Demo Talebi</h1>
              <p style="color: #8ba1b7; margin: 10px 0 0 0; font-size: 14px;">Odimax Web Sitesi üzerinden yeni bir form dolduruldu.</p>
            </div>

            <!-- İçerik Kısmı -->
            <div style="padding: 30px 40px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                    <span style="font-size: 12px; color: #888888; text-transform: uppercase; font-weight: bold;">Ad Soyad</span><br/>
                    <strong style="font-size: 16px; color: #1a1a1a;">${name}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                    <span style="font-size: 12px; color: #888888; text-transform: uppercase; font-weight: bold;">Telefon Numarası</span><br/>
                    <strong style="font-size: 16px; color: #02b6da;">${phone}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                    <span style="font-size: 12px; color: #888888; text-transform: uppercase; font-weight: bold;">E-Posta Adresi</span><br/>
                    <strong style="font-size: 16px; color: #1a1a1a;">${email}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                    <span style="font-size: 12px; color: #888888; text-transform: uppercase; font-weight: bold;">Merkez Adı</span><br/>
                    <strong style="font-size: 16px; color: #1a1a1a;">${centerName}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="font-size: 12px; color: #888888; text-transform: uppercase; font-weight: bold;">Şube Sayısı</span><br/>
                    <strong style="font-size: 16px; color: #1a1a1a;">${branchCount}</strong>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px dashed #eeeeee;">
                <p style="margin: 0; font-size: 13px; color: #666666;">
                  <strong>✓</strong> 15 günlük ücretsiz demo süreci onayı verildi.<br/>
                  <strong>✓</strong> İletişime geçilmesine izin verildi.
                </p>
              </div>
            </div>

            <!-- Footer Kısmı -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0; font-size: 12px; color: #999999;">
                Bu e-posta <a href="https://odimax.com.tr" style="color: #02b6da; text-decoration: none;">odimax.com.tr</a> sisteminden otomatik olarak gönderilmiştir.
              </p>
            </div>
            
          </div>
        </div>
      `,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Mail başarıyla gönderildi." }, { status: 200 });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json({ error: "Mail gönderilirken bir hata oluştu." }, { status: 500 });
  }
}