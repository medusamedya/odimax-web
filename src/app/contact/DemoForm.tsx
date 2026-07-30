"use client";

import React, { useState } from "react";
import { Lock } from "lucide-react";

// Performans için iller dizisini bileşen dışında tanımlıyoruz
const turkeyCities = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

export default function DemoForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    centerName: "",
    city: "", // Yeni eklenen İl alanı
    branchCount: "",
    consent1: false,
    consent2: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Başarılı gönderim sonrası form temizlenirken city de sıfırlanıyor
        setFormData({
          name: "", phone: "", email: "", centerName: "", city: "", branchCount: "", consent1: false, consent2: false
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-brand-dark p-8 md:p-10 rounded-[2rem] shadow-xl font-sans w-full mx-auto border border-black/[0.04] relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-brand-dark">Demo Talep Formu</h2>
      <p className="text-brand-text text-sm mb-8">Ekibimiz 1 iş günü içinde sizi arar.</p>

      {status === "success" && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-sm font-medium">
          Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium">
          Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya telefonla bize ulaşın.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Satır 1: Ad Soyad ve Telefon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-brand-dark">Ad Soyad *</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınız ve soyadınız"
              className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all placeholder:text-brand-text/50"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-brand-dark">Telefon *</label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="05XX XXX XX XX"
              className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all placeholder:text-brand-text/50"
            />
          </div>
        </div>

        {/* Satır 2: E-posta ve Merkez Adı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-brand-dark">E-posta *</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ornek@sirketiniz.com"
              className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all placeholder:text-brand-text/50"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-brand-dark">Merkez Adı *</label>
            <input
              required
              type="text"
              name="centerName"
              value={formData.centerName}
              onChange={handleChange}
              placeholder="İşitme merkezinizin adı"
              className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all placeholder:text-brand-text/50"
            />
          </div>
        </div>

        {/* Satır 3: İl ve Şube Sayısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-brand-dark">Bulunduğunuz İl *</label>
            <div className="relative">
              <select
                required
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>İl seçiniz...</option>
                {turkeyCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-brand-blue"></div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-brand-dark">Şube Sayısı *</label>
            <div className="relative">
              <select
                required
                name="branchCount"
                value={formData.branchCount}
                onChange={handleChange}
                className="w-full bg-[#f8f9fa] border border-black/10 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Lütfen seçiniz...</option>
                <option value="1">1 Şube</option>
                <option value="2-3">2-3 Şube</option>
                <option value="4+">4+ Şube</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-brand-blue"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Onay Kutuları */}
        <div className="space-y-4 pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5">
              <input 
                required 
                type="checkbox" 
                name="consent1" 
                checked={formData.consent1} 
                onChange={handleChange} 
                className="peer appearance-none w-5 h-5 border border-black/20 rounded bg-[#f8f9fa] checked:bg-brand-blue checked:border-brand-blue transition-colors cursor-pointer" 
              />
              <div className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
            </div>
            <span className="text-sm text-brand-text font-medium group-hover:text-brand-dark transition-colors">
              15 günlük ücretsiz demo sürecini başlatmak istiyorum.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5">
              <input 
                required 
                type="checkbox" 
                name="consent2" 
                checked={formData.consent2} 
                onChange={handleChange} 
                className="peer appearance-none w-5 h-5 border border-black/20 rounded bg-[#f8f9fa] checked:bg-brand-blue checked:border-brand-blue transition-colors cursor-pointer" 
              />
              <div className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
            </div>
            <span className="text-sm text-brand-text font-medium group-hover:text-brand-dark transition-colors">
              Odimax ekibinin demo sürecinde benimle iletişime geçmesini kabul ediyorum.
            </span>
          </label>
        </div>

        {/* Gönder Butonu */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue via-[#02b6da] to-brand-dark bg-[length:200%_auto] animate-text-gradient text-white font-bold hover:scale-[1.01] shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? "Gönderiliyor..." : "15 Günlük Demo Başlat →"}
        </button>

        {/* Güvenlik Notu */}
        <div className="flex items-center justify-center gap-2 text-xs text-brand-text/60 mt-4">
          <Lock className="w-3.5 h-3.5 text-brand-blue" />
          <span>Bilgileriniz güvende. Spam göndermiyoruz.</span>
        </div>
      </form>
    </div>
  );
}