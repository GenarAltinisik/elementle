# Elementle 🧪 (Türkçe & English)

[Elementle](https://elementlegame.com/) oyununun modern, çift dilli (Türkçe & İngilizce) ve hem **Günün Elementi** hem de **Sonsuz Mod (Endless Mode)** seçeneklerine sahip açık kaynaklı web versiyonu.

Bu proje tamamen **istemci taraflı (client-side)** olarak geliştirilmiştir; herhangi bir backend sunucusu gerektirmez ve doğrudan **GitHub Pages** üzerinde ücretsiz olarak yayınlanabilir.

---

## 🌟 Özellikler

- 📅 **Günün Elementi (Daily Mode):**
  - Her takvim günü için tüm dünyada ortak bir gizemli element seçilir (deterministik PRNG algoritması ile).
  - Gece yarısına (00:00) kalan süreyi gösteren canlı geri sayım saati.
  - Günlük oyun durumu ve tahminler `localStorage` ile saklanır (sayfayı yenilediğinizde veya geri döndüğünüzde kaldığınız yerden devam eder).

- ♾️ **Sonsuz Mod (Endless Mode):**
  - Günlük sınırı beklemeden dilediğiniz kadar arka arkaya oynayın!
  - Her tur bittiğinde (kazanıldığında veya haklar tükendiğinde) *"Sonraki Element"* butonu ile yeni bir gizemli elemente geçin.
  - Sonsuz mod için özel seri (streak) ve en iyi seri takibi.

- 🇹🇷 / 🇬🇧 **Tam Çift Dil Desteği (Bilingual):**
  - Sağ üstteki buton ile anında Türkçe ve İngilizce arasında geçiş yapabilirsiniz.
  - 118 elementin tamamı için Türkçe ve İngilizce adlar (örn. *Demir / Iron*, *Azot / Nitrogen*, *Altın / Gold*).
  - 118 elementin tamamı için her iki dilde hazırlanmış özel 3'er adet kimyasal ipucu.
  - Türkçe ve İngilizce arayüz, kurallar, istatistikler ve periyodik tablo sınıflandırmaları.

- 🧪 **Etkileşimli Periyodik Tablo (Periodic Table Explorer):**
  - 18 sütunlu, IUPAC standartlarında tam periyodik tablo modalı.
  - Kimyasal gruplara göre renklendirilmiş element kutucukları.
  - İsim, simge veya atom numarasına göre anlık arama/filtreleme.
  - Herhangi bir elemente tıklayarak doğrudan tahmin kutusuna aktarma kolaylığı.

- 💡 **İpucu Sistemi (Clues):**
  - Tıkandığınızda ampul (💡) butonuna basarak gizemli element hakkında bilgilendirici ve eğlenceli bir ipucu açın.

- 📊 **Detaylı İstatistikler:**
  - Günlük ve Sonsuz mod için ayrı ayrı tutulan istatistikler.
  - Toplam oynanan oyun sayısı, kazanma oranı (%), mevcut seri ve en yüksek seri.
  - 1'den 8'e kadar tahmin dağılımı histogramı (Wordle tarzı).

- 📋 **Sonuç Paylaşımı (Emoji Grid):**
  - Oyunu tamamladığınızda skorunuzu ve tahminlerinizi Wordle tarzı renkli emojilerle (⬆️/⬇️/🎉 ve 🟩/🟨/⬜) panoya kopyalayıp arkadaşlarınızla veya sosyal medyada paylaşabilirsiniz.

- 🎨 **Orijinal Cyberpunk / Neon Görsel Efektler:**
  - Koyu tema (`#191919`) ve neon zümrüt yeşili vurgular.
  - Arka planda süzülen 80+ partikül animasyonu (`particleDrift`).
  - Kartlarda 3 boyutlu takla (`card-flip`) ve atom numarasının 0'dan hedefe doğru artan sayaç animasyonu.
  - Doğru bilindiğinde havai fişek ve konfeti patlaması (`canvas-confetti`).

---

## 🚀 GitHub Pages Üzerinde Yayınlama Rehberi

Bu projeyi kendi GitHub hesabınızda barındırmak ve ücretsiz olarak tüm dünyaya açmak sadece 2 dakikanızı alır:

### 1. Yeni Bir GitHub Deposu (Repository) Oluşturun
1. [GitHub](https://github.com/) hesabınıza giriş yapın.
2. Sağ üstteki `+` simgesine tıklayıp **New repository** seçeneğini seçin.
3. Depo adı olarak örneğin `elementle` yazın ve **Public** seçin.
4. **Create repository** butonuna basın.

### 2. Dosyaları Depoya Yükleyin
Proje klasörünün içinde terminali (PowerShell veya Bash) açarak şu komutları çalıştırın:

```bash
git init
git add .
git commit -m "Elementle clone initial release"
git branch -M main
git remote add origin https://github.com/<KULLANICI_ADINIZ>/elementle.git
git push -u origin main
```

*(Alternatif olarak: GitHub web arayüzünden "uploading an existing file" seçeneğiyle tüm dosyaları sürükleyip bırakabilirsiniz.)*

### 3. GitHub Pages'i Etkinleştirin
1. GitHub deponuzun sayfasında üstteki **Settings** sekmesine gidin.
2. Sol menüden **Pages** seçeneğine tıklayın.
3. **Build and deployment** > **Source** kısmında **"Deploy from a branch"** seçili olsun.
4. **Branch** kısmında `main` ve `/ (root)` seçin, ardından **Save** butonuna tıklayın.

Yaklaşık 1 dakika içinde siteniz yayına girecektir:
👉 `https://<KULLANICI_ADINIZ>.github.io/elementle/`

---

## 📁 Dosya Yapısı

```
Elementle/
├── index.html               # Ana HTML sayfası ve modal şablonları
├── .nojekyll                # GitHub Pages statik dosya uyumluluk dosyası
├── README.md                # Proje dokümantasyonu
├── styles/
│   └── elementle.css        # Tüm stiller, animasyonlar, koyu tema ve responsive tasarım
└── scripts/
    ├── elements-data.js     # 118 elementin çift dilli tam veri seti (adlar, gruplar, ipuçları)
    └── game.js              # Oyun motoru, tahmin mantığı, deterministik PRNG ve UI yönetimi
```

---

## 🎮 Nasıl Oynanır?

1. Gizemli elementi bulmak için **8 hakkınız** vardır.
2. Arama kutusuna elementin adını veya kimyasal simgesini yazıp listeden seçin ve **TAHMİN ET** butonuna basın.
3. Kart üzerinde çıkan geri bildirimler:
   - **⬆️ / ⬇️:** Gizemli elementin atom numarası tahmininizden daha BÜYÜK (⬆️) veya daha KÜÇÜK (⬇️).
   - **🎉:** Atom numarası tam isabet!
   - **🟩 Yeşil Harf:** Harf simgede tam olarak doğru pozisyonda.
   - **🟨 Sarı Harf:** Harf simgede var ancak başka bir sırada.
   - **⬜ Gri Harf:** Harf simgede hiç yer almıyor.
   - **🟩 Yeşil Aile İsmi:** Tahmin ettiğiniz element ile gizemli element aynı kimyasal aileye ait (örn. her ikisi de Soygaz veya Alkali Metal)!

---

## 📜 Lisans & Teşekkür

- Orijinal oyun fikri ve konsepti: [Elementle Game](https://elementlegame.com/)
- Konfeti kütüphanesi: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- Yazı tipleri: Google Fonts (Iceland, Courier Prime, Inter)
