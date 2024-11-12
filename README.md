# Chatbot Uygulaması

Bu proje, gerçek zamanlı mesajlaşma işlevselliği sunan bir web tabanlı sohbet uygulamasıdır. JavaScript ve CSS ile geliştirilmiştir. Uygulama, API entegrasyonuyla kullanıcılara sorunsuz bir sohbet deneyimi sağlar.

<img src="https://github.com/user-attachments/assets/9bb22491-7998-484c-8933-8f95319ce9b2" alt="Ekran görüntüsü 2024-11-12 135910" width="300" style="border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);"/>
<img src="https://github.com/user-attachments/assets/30a30b83-f17d-48a9-85e8-d989640c2351" alt="Ekran görüntüsü 2024-11-12 135910" width="300" style="border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);"/>
<img src="https://github.com/user-attachments/assets/0b317541-0444-40a3-a042-92c20e45f7b0" alt="Ekran görüntüsü 2024-11-12 135910" width="300" style="border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);"/>


## Özellikler:
- Chatbot Açma/Kapama: Sağ alt köşedeki düğme ile chatbot açılıp kapatılabilir.
- Dosya Ekleme: Dosya yükleyebilme özelliği vardır.
- Emoji Seçimi: Emoji seçici ile mesajlara emoji eklenebilir.
- Duyarlı Tasarım: Hem mobil hem de masaüstü cihazlar için optimize edilmiştir.
- Yanıt Gecikme Efekti: Bot mesajları gönderilmeden önce "düşünme noktaları" animasyonu göstererek daha gerçekçi bir sohbet deneyimi sağlanır.


## Api Entegrasyonu:
Bu projede, Google Gemini AI API kullanılarak gelişmiş yapay zeka tabanlı bir sohbet deneyimi oluşturulmuştur. API üzerinden aşağıdaki özellikler sağlanmaktadır:

- Mesaj Gönderme ve Alma: Gerçek zamanlı iletişim için Google Gemini AI API kullanılarak anlık mesajlaşma işlevi entegre edilmiştir. API üzerinden gelen verilerle mesajlar anında iletilip alınır.
- Yanıt Botu: Kullanıcı mesajlarına otomatik yanıt verebilmek için API'den gelen veriler kullanılır. Kullanıcıların belirttiği sorulara göre bot cevabı dinamik olarak oluşturulur.
- Dosya Yükleme Desteği: Sohbet sırasında dosya yükleyebilme ve paylaşabilme işlevselliği API aracılığıyla sağlanmaktadır. API, kullanıcılar tarafından gönderilen dosyaları işleyip geri bildirimde bulunur.
  
Google Gemini AI API'si, kullanıcıların mesajlarını sunucuya ileterek anında yanıtları kullanıcıya gösterir. Bu API, projenin sohbet botu fonksiyonelliğini dinamik hale getirmektedir.

## Kullanılan Teknolojiler:
- JavaScript: Uygulamanın işlevsel mantığını ve API entegrasyonunu yönetmek için kullanıldı.
- CSS: Arayüz ve animasyonlar için kullanıldı, özellikle duyarlı tasarım sağlamak için medya sorgularından faydalanıldı.
- Google Fonts : Uygulamanın tüm görünümünü modernleştirmek için kullanıldı.
- HTML: Temel yapıyı ve DOM elemanlarını oluşturmak için kullanıldı.


## Kurulum:
1- İndirme: Projeyi yerel makinenize klonlayın veya ZIP dosyası olarak indirin.
```bash
git clone <repository-url>
cd <project-directory>
```
Dosyayı tarayıcıda açarak uygulamayı başlatın.

## Kullanılan Kaynaklar:
- Emoji Mart: Bu projede, emoji seçici olarak Emoji Mart kütüphanesi kullanılmıştır. Emoji Mart, çeşitli platformlarda uyumlu emoji seçicileri sağlamak için açık kaynaklı bir projedir.
  GitHub Deposu: https://github.com/missive/emoji-mart
- Google API: Bu projede, Google tarafından sunulan API'ler kullanılarak veri alışverişi sağlanmıştır. Google API'leri ile entegre edilen işlevler, veri yönetimi ve işlem hızını optimize etmeye yardımcı olmuştur.

## Demo:
Uygulamanın canlı linline buradan ulaşabilirsiniz.
Chatbot:  https://chatbot-teal-phi.vercel.app/
