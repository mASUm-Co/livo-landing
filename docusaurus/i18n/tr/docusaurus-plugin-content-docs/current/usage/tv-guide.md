---
sidebar_position: 5.5
---

# TV rehberi (EPG)

TV rehberi canlı kanallarınızda ne olduğunu gösterir: o anki program, kalan süre ve sıradaki program.

## Nerede görünür

- **Canlı'daki kanal kartları**: şu an yayındaki program, kalan süre ve **Sonra**.
- **Apple TV önizleme paneli**: seçili kanalın **Bugünün akışı**.
- **Canlı oynatıcı**: zaman çizelgesiyle o anki program ve sıradaki program.

<DocScreenshot shot="tv-02-live" alt="Apple TV'de önizleme panelinde program rehberiyle kanal ızgarası" caption="Apple TV önizleme panelinde rehber bilgisi" />

Program saatleri cihazınızın saat dilimine, bölgesine ve 12/24 saat ayarına göre gösterilir.

## Rehber nereden gelir

Livo'nun kendi rehberi yoktur. Şu sırayla kullanır:

1. Kaynak için **elle girdiğiniz rehber adresi**.
2. **M3U listenizdeki rehber adresi** (liste başlığında `url-tvg` / `x-tvg-url`).
3. **Xtream Codes** hesaplarında hesabın kendi rehberi.

Rehber yalnızca cihazınıza indirilir; adres Livo sunucularına hiç gönderilmez. Liste yenilendikten sonra, uygulamayı açtığınızda rehber 12 saatten eskiyse ve **Rehberi yenile**'yi seçtiğinizde yenilenir.

## Rehber ayarları

**IPTV Kaynakları**'nı açın, kaynağınızı düzenleyin ve **Program rehberi** bölümüne inin:

- **Rehber adresi** kullanılan adresi ya da *Rehber adresi bulunamadı* uyarısını gösterir.
- **XMLTV adresi (isteğe bağlı)**: `http://` ya da `https://` ile başlayan bir XMLTV adresi girin. Listede bulunan adresin yerine kullanılır.
- **Saat kaydırma**: tüm programlar aynı miktarda kaymışsa rehberi yarım saatlik adımlarla ileri ya da geri alın (en fazla 12 saat).
- **Rehberi yenile** rehberi yeniden indirir. Durum satırı ne zaman güncellendiğini ve kaç kanalın eşleştiğini gösterir, örneğin *18:30 güncellendi · 280/300 kanal eşleşti*.

## Bazı kanallarda neden rehber yok

Livo rehber kayıtlarını kanallarla kanalın rehber kimliği (`tvg-id`) ve adı üzerinden eşleştirir. Rehberde kanal için kayıt yoksa ya da kimlikler uyuşmuyorsa o kanalda rehber görünmez. Sağlayıcınızdan kanallarınızı kapsayan bir rehber isteyin ya da başka bir XMLTV adresi deneyin.

Son yenileme başarısız olduysa Livo önceki rehberi göstermeye devam eder ve bunu durum satırında belirtir.
