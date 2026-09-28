/* Site-wide translation layer for Toplum Vakfı.
   Arabic is the source language. Choosing EN/TR/SQ stores the choice, reloads, and
   on load swaps exact Arabic strings (text, placeholder, aria-label, title) for the
   target language and flips the layout to LTR. Strings not in the dictionary stay
   in Arabic, so nothing is ever blank. Add rows to T as pages grow: [ar, en, tr, sq]. */
(function () {
  var T = [
    // Header & navigation
    ['من نحن', 'About us', 'Hakkımızda', 'Rreth nesh'],
    ['قصتنا', 'Our story', 'Hikâyemiz', 'Historia jonë'],
    ['رؤيتنا', 'Our vision', 'Vizyonumuz', 'Vizioni ynë'],
    ['رسالتنا', 'Our mission', 'Misyonumuz', 'Misioni ynë'],
    ['مهمتنا', 'Our purpose', 'Görevimiz', 'Detyra jonë'],
    ['أهدافنا', 'Our goals', 'Hedeflerimiz', 'Qëllimet tona'],
    ['رسالة الرئيس', "President's letter", 'Başkanın mesajı', 'Letra e presidentit'],
    ['مجلس الإدارة', 'Board of trustees', 'Mütevelli heyeti', 'Bordi i besimit'],
    ['برامجنا', 'Our programmes', 'Programlarımız', 'Programet tona'],
    ['غرس القيم', 'Instilling values', 'Değerlerin inşası', 'Mbjellja e vlerave'],
    ['بناء الإنسان', 'Building people', 'İnsan inşası', 'Ndërtimi i njeriut'],
    ['صناعة مستقبل الشباب', 'Shaping youth futures', 'Gençlerin geleceği', 'E ardhmja e të rinjve'],
    ['المجتمع الواحد', 'One community', 'Tek toplum', 'Një komunitet'],
    ['حملة أمل', 'Hope campaign', 'Umut kampanyası', 'Fushata Shpresë'],
    ['أثرنا', 'Our impact', 'Etkimiz', 'Ndikimi ynë'],
    ['الشفافية', 'Transparency', 'Şeffaflık', 'Transparenca'],
    ['أخبارنا', 'News', 'Haberler', 'Lajme'],
    ['الأخبار', 'News', 'Haberler', 'Lajme'],
    ['قصص', 'Stories', 'Hikâyeler', 'Histori'],
    ['قصصنا', 'Our stories', 'Hikâyelerimiz', 'Historitë tona'],
    ['الشركاء', 'Partners', 'Ortaklar', 'Partnerët'],
    ['تواصل معنا', 'Contact us', 'İletişim', 'Na kontaktoni'],
    ['مشاريعنا', 'Our projects', 'Projelerimiz', 'Projektet tona'],
    ['تبرع الآن', 'Donate now', 'Bağış yap', 'Dhuro tani'],
    ['تبرع', 'Donate', 'Bağış', 'Dhuro'],
    ['بحث', 'Search', 'Ara', 'Kërko'],
    ['البحث', 'Search', 'Arama', 'Kërkimi'],
    ['حسابي', 'My account', 'Hesabım', 'Llogaria ime'],
    ['السلة', 'Cart', 'Sepet', 'Shporta'],
    ['الملف الشخصي', 'Profile', 'Profil', 'Profili'],
    ['الرئيسية', 'Home', 'Ana sayfa', 'Kreu'],
    ['الصفحة الرئيسية', 'Home page', 'Ana sayfa', 'Faqja kryesore'],
    ['برامج', 'Programmes', 'Programlar', 'Programe'],
    ['المزيد', 'More', 'Daha fazla', 'Më shumë'],
    ['اللغة', 'Language', 'Dil', 'Gjuha'],
    ['العملة', 'Currency', 'Para birimi', 'Monedha'],
    ['فتح القائمة', 'Open menu', 'Menüyü aç', 'Hap menunë'],
    ['إغلاق', 'Close', 'Kapat', 'Mbyll'],
    ['التنقل السفلي', 'Bottom navigation', 'Alt gezinme', 'Navigimi i poshtëm'],
    ['ابحث في المشاريع والبرامج...', 'Search projects and programmes…', 'Proje ve programlarda ara…', 'Kërko projekte dhe programe…'],
    ['عرض الكل ←', 'View all →', 'Tümünü gör →', 'Shiko të gjitha →'],
    ['البقاء بالعربية', 'Stay in Arabic', 'Arapça devam et', 'Qëndro në arabisht'],
    // Footer
    ['اشترك في نشرتنا البريدية', 'Subscribe to our newsletter', 'Bültenimize abone olun', 'Abonohu në buletinin tonë'],
    ['ليصلك كل جديد عن مشاريعنا وقصص الأثر', 'Project updates and field stories, in your inbox.', 'Proje haberleri ve sahadan hikâyeler e-postanızda.', 'Lajme nga projektet dhe histori nga terreni, në email-in tuaj.'],
    ['اشترك', 'Subscribe', 'Abone ol', 'Abonohu'],
    ['روابط سريعة', 'Quick links', 'Hızlı bağlantılar', 'Lidhje të shpejta'],
    ['مجتمعات أقوى .. لإنسان أكثر كرامة', 'Stronger communities, greater human dignity', 'Daha güçlü toplumlar, daha onurlu insanlar', 'Komunitete më të forta, dinjitet më i madh njerëzor'],
    ['الخصوصية والأمان', 'Privacy & security', 'Gizlilik ve güvenlik', 'Privatësia dhe siguria'],
    ['اتفاقية التبرع', 'Donation agreement', 'Bağış sözleşmesi', 'Marrëveshja e dhurimit'],
    ['الإلغاء والاسترداد', 'Cancellation & refunds', 'İptal ve iade', 'Anulimi dhe rimbursimi'],
    ['معلومات الدفع', 'Payment details', 'Ödeme bilgileri', 'Të dhënat e pagesës'],
    ['© 2026 وقف التضامن الاجتماعي — جميع الحقوق محفوظة', '© 2026 Toplumsal Dayanışma Vakfı — All rights reserved', '© 2026 Toplumsal Dayanışma Vakfı — Tüm hakları saklıdır', '© 2026 Toplumsal Dayanışma Vakfı — Të gjitha të drejtat e rezervuara'],
    ['أدخل بريدك الإلكتروني', 'Enter your email', 'E-posta adresiniz', 'Shkruani email-in tuaj'],
    ['البريد الإلكتروني', 'Email', 'E-posta', 'Email'],
    ['الهاتف', 'Phone', 'Telefon', 'Telefoni'],
    ['واتساب', 'WhatsApp', 'WhatsApp', 'WhatsApp'],
    ['العنوان', 'Address', 'Adres', 'Adresa'],
    ['فيسبوك', 'Facebook', 'Facebook', 'Facebook'], ['إنستغرام', 'Instagram', 'Instagram', 'Instagram'], ['إكس', 'X', 'X', 'X'], ['يوتيوب', 'YouTube', 'YouTube', 'YouTube'],
    // Homepage
    ['الإنسانية', 'Humanity', 'İnsanlık', 'Njerëzimi'],
    ['تجمعنا', 'unites us', 'bizi birleştirir', 'na bashkon'],
    ['كن جزءًا من هذا الأثر', 'Be part of this impact', 'Bu etkinin parçası olun', 'Bëhu pjesë e këtij ndikimi'],
    ['حيث الحاجة', 'Where most needed', 'En çok ihtiyaç olan yere', 'Aty ku ka më shumë nevojë'],
    ['مرة واحدة', 'One-off', 'Tek seferlik', 'Një herë'],
    ['شهريًا', 'Monthly', 'Aylık', 'Mujore'],
    ['مبلغ آخر', 'Other amount', 'Başka tutar', 'Shumë tjetër'],
    ['دائرة الخير تكبر بكم', 'The circle of good grows with you', 'İyilik halkası sizinle büyür', 'Rrethi i së mirës rritet me ju'],
    ['معاً.. نصنع غداً أفضل', 'Together, a better tomorrow', 'Birlikte daha iyi bir yarın', 'Së bashku, një e nesërme më e mirë'],
    ['برامجنا لبناء حياة أفضل', 'Programmes for a better life', 'Daha iyi bir hayat için programlar', 'Programe për një jetë më të mirë'],
    ['اكتشف جميع البرامج', 'Explore all programmes', 'Tüm programları keşfedin', 'Zbuloni të gjitha programet'],
    ['أثرنا حول العالم', 'Our impact worldwide', 'Dünyadaki etkimiz', 'Ndikimi ynë në botë'],
    ['الخير لا يعرف الحدود', 'Goodness knows no borders', 'İyilik sınır tanımaz', 'E mira nuk njeh kufij'],
    ['طرق العطاء', 'Ways to give', 'Bağış yolları', 'Mënyrat e dhurimit'],
    ['المشاريع', 'Projects', 'Projeler', 'Projektet'],
    ['ماذا يصنع تبرعك', 'What your gift does', 'Bağışınız ne yapar', 'Çfarë bën dhurata juaj'],
    ['الكفالات', 'Sponsorships', 'Himayeler', 'Sponsorizimet'],
    ['تبرع شهري', 'Monthly giving', 'Aylık bağış', 'Dhurim mujor'],
    ['الزكاة', 'Zakat', 'Zekât', 'Zekati'],
    ['إهداء', 'Gift', 'Hediye', 'Dhuratë'],
    ['تبرع شهري منتظم', 'Regular monthly giving', 'Düzenli aylık bağış', 'Dhurim i rregullt mujor'],
    ['ابدأ تبرعك الشهري', 'Start your monthly gift', 'Aylık bağışınızı başlatın', 'Filloni dhurimin mujor'],
    ['من الميدان', 'From the field', 'Sahadan', 'Nga terreni'],
    ['قصص من الواقع', 'Real stories', 'Gerçek hikâyeler', 'Histori të vërteta'],
    ['ادعم هذا المشروع', 'Support this project', 'Bu projeyi destekleyin', 'Mbështetni këtë projekt'],
    ['هنا تبدأ حكاية أمل', 'A story of hope begins here', 'Bir umut hikâyesi burada başlar', 'Këtu fillon një histori shprese'],
    ['لماذا تثق بنا', 'Why trust us', 'Neden bize güvenmelisiniz', 'Pse të na besoni'],
    ['اطلع على تقاريرنا', 'Read our reports', 'Raporlarımızı inceleyin', 'Lexoni raportet tona'],
    ['مؤسسة معتمدة رسميًا', 'Officially registered foundation', 'Resmî olarak tescilli vakıf', 'Fondacion i regjistruar zyrtarisht'],
    ['تبرع إلكتروني آمن', 'Secure online giving', 'Güvenli çevrim içi bağış', 'Dhurim i sigurt online'],
    ['توجيه دقيق للتبرع', 'Precisely directed gifts', 'Bağışın doğru yönlendirilmesi', 'Dhurata të drejtuara saktë'],
    ['تقارير وأثر', 'Reports and impact', 'Raporlar ve etki', 'Raporte dhe ndikim'],
    ['شركاؤنا في صناعة الأثر', 'Our partners in impact', 'Etki ortaklarımız', 'Partnerët tanë në ndikim'],
    ['الأسئلة الشائعة', 'Frequently asked questions', 'Sıkça sorulan sorular', 'Pyetje të shpeshta'],
    ['المزيد من الأسئلة', 'More questions', 'Daha fazla soru', 'Më shumë pyetje'],
    ['لديك سؤال آخر؟ تواصل معنا', 'Another question? Contact us', 'Başka bir sorunuz mu var? Bize yazın', 'Keni një pyetje tjetër? Na shkruani'],
    ['هل التبرع الإلكتروني آمن؟', 'Is giving online secure?', 'Çevrim içi bağış güvenli mi?', 'A është i sigurt dhurimi online?'],
    ['هل يمكنني توجيه تبرعي لمشروع محدد؟', 'Can I direct my gift to a specific project?', 'Bağışımı belirli bir projeye yönlendirebilir miyim?', 'A mund ta drejtoj dhuratën në një projekt të caktuar?'],
    ['هل أستلم إيصالًا بتبرعي؟', 'Will I receive a receipt?', 'Bağışım için makbuz alacak mıyım?', 'A do të marr faturë për dhuratën?'],
    ['تبرع اليوم لمشروع قائم', 'Give today to a live project', 'Bugün süren bir projeye bağış yapın', 'Dhuroni sot për një projekt në vazhdim'],
    ['انضم إلينا في الميدان', 'Join us in the field', 'Sahada bize katılın', 'Bashkohuni me ne në terren'],
    ['تقدّم للتطوع', 'Volunteer', 'Gönüllü olun', 'Bëhu vullnetar'],
    ['تواصل للشراكة', 'Partner with us', 'Ortaklık için yazın', 'Bëhuni partner'],
    // Inner pages
    ['قيم سامية، مجتمعات آمنة', 'Noble values, safe communities', 'Yüce değerler, güvenli toplumlar', 'Vlera fisnike, komunitete të sigurta'],
    ['وقف التضامن الاجتماعي', 'Toplumsal Dayanışma Vakfı', 'Toplumsal Dayanışma Vakfı', 'Toplumsal Dayanışma Vakfı'],
    ['اقرأ قصتنا', 'Read our story', 'Hikâyemizi okuyun', 'Lexoni historinë tonë'],
    ['هدفنا', 'Our goal', 'Hedefimiz', 'Qëllimi ynë'],
    ['قيمنا المؤسسية', 'Our values', 'Kurumsal değerlerimiz', 'Vlerat tona'],
    ['الإتقان', 'Excellence', 'İtkan', 'Përsosmëria'], ['الإنسانية ', 'Humanity', 'İnsanlık', 'Njerëzimi'],
    ['الشراكة', 'Partnership', 'Ortaklık', 'Partneriteti'], ['المسؤولية', 'Responsibility', 'Sorumluluk', 'Përgjegjësia'],
    ['الحوكمة', 'Governance', 'Yönetişim', 'Qeverisja'], ['التميّز المؤسسي', 'Institutional excellence', 'Kurumsal mükemmellik', 'Përsosmëri institucionale'],
    ['الشراكات', 'Partnerships', 'Ortaklıklar', 'Partneritetet'], ['التبرعات', 'Donations', 'Bağışlar', 'Dhurimet'], ['التطوع', 'Volunteering', 'Gönüllülük', 'Vullnetarizmi'],
    ['معًا نصنع التغيير', 'Together we make change', 'Birlikte değişim yaratırız', 'Së bashku bëjmë ndryshimin'],
    ['عطاؤكم يصنع الأمل', 'Your giving builds hope', 'Bağışınız umut yaratır', 'Dhurimi juaj ndërton shpresë'],
    ['كن جزءًا من التغيير', 'Be part of the change', 'Değişimin parçası olun', 'Bëhu pjesë e ndryshimit'],
    ['كن شريكًا ←', 'Become a partner →', 'Ortak olun →', 'Bëhu partner →'],
    ['تبرع الآن ←', 'Donate now →', 'Bağış yap →', 'Dhuro tani →'],
    ['تطوّع معنا ←', 'Volunteer with us →', 'Bizimle gönüllü olun →', 'Bëhu vullnetar me ne →'],
    ['مؤشرات مختارة', 'Selected indicators', 'Seçili göstergeler', 'Tregues të zgjedhur'],
    ['نعمل في أربع مناطق', 'We work in four regions', 'Dört bölgede çalışıyoruz', 'Punojmë në katër rajone'],
    ['الشرق الأوسط', 'Middle East', 'Orta Doğu', 'Lindja e Mesme'], ['تركيا والبلقان', 'Türkiye & the Balkans', 'Türkiye ve Balkanlar', 'Turqia dhe Ballkani'],
    ['آسيا', 'Asia', 'Asya', 'Azia'], ['أفريقيا', 'Africa', 'Afrika', 'Afrika'],
    ['مسارات العطاء', 'Giving paths', 'Bağış yolları', 'Rrugët e dhurimit'],
    ['أربعة مسارات تنتظم فيها برامج الوقف.', 'Four paths organise all of our programmes.', 'Vakıf programları dört yol altında toplanır.', 'Programet tona organizohen në katër rrugë.'],
    ['استكشف ←', 'Explore →', 'Keşfet →', 'Zbulo →'],
    ['التقارير والشفافية', 'Reports & transparency', 'Raporlar ve şeffaflık', 'Raporte dhe transparencë'],
    ['جميع البرامج', 'All programmes', 'Tüm programlar', 'Të gjitha programet'],
    ['حملة الوقف 2026', 'Foundation campaign 2026', 'Vakıf kampanyası 2026', 'Fushata e fondacionit 2026'],
    ['فلنكن أملهم.. فنضمن مستقبلهم', 'Let us be their hope, and secure their future', 'Umutları olalım, geleceklerini güvenceye alalım', 'Le të jemi shpresa e tyre, për të siguruar të ardhmen'],
    ['مشاريع الحملة', 'Campaign projects', 'Kampanya projeleri', 'Projektet e fushatës'],
    ['ساهم في الحملة', 'Give to the campaign', 'Kampanyaya katkı', 'Kontribuo në fushatë'],
    ['المشاريع المفتوحة للتبرع', 'Projects open for giving', 'Bağışa açık projeler', 'Projekte të hapura për dhurim'],
    ['أضف إلى السلة', 'Add to cart', 'Sepete ekle', 'Shto në shportë'],
    ['التفاصيل', 'Details', 'Ayrıntılar', 'Detajet'],
    ['يوجَّه تبرعك إلى هذا المشروع مباشرة', 'Your gift goes directly to this project', 'Bağışınız doğrudan bu projeye gider', 'Dhurata juaj shkon drejtpërdrejt në këtë projekt'],
    ['أناس حقيقيون تغيّرت حياتهم', 'Real people, changed lives', 'Gerçek insanlar, değişen hayatlar', 'Njerëz të vërtetë, jetë të ndryshuara'],
    ['قناتنا على يوتيوب', 'Our YouTube channel', 'YouTube kanalımız', 'Kanali ynë në YouTube'],
    ['قصص من مشاريعنا', 'Stories from our projects', 'Projelerimizden hikâyeler', 'Histori nga projektet tona'],
    ['انشر الخير وشارك', 'Spread the good, take part', 'İyiliği yay, katıl', 'Përhap të mirën, merr pjesë'],
    ['راسلنا', 'Write to us', 'Bize yazın', 'Na shkruani'],
    ['رسالتك', 'Your message', 'Mesajınız', 'Mesazhi juaj'],
    ['رقم الهاتف (اختياري)', 'Phone (optional)', 'Telefon (isteğe bağlı)', 'Telefoni (opsional)'],
    ['موضوع الرسالة', 'Subject', 'Konu', 'Tema'],
    ['استفسار عام', 'General enquiry', 'Genel soru', 'Pyetje e përgjithshme'],
    ['إرسال', 'Send', 'Gönder', 'Dërgo'],
    ['تُحمَّل الخريطة من خرائط Google عند الضغط.', 'The map loads from Google Maps when you tap.', 'Harita dokunduğunuzda Google Haritalar\'dan yüklenir.', 'Harta ngarkohet nga Google Maps kur shtypni.'],
    ['افتح في خرائط Google', 'Open in Google Maps', 'Google Haritalar\'da aç', 'Hap në Google Maps'],
    ['الاسم', 'Name', 'Ad Soyad', 'Emri'],
    // Homepage — map, ways of giving, gift, trust, FAQ
    ['نصل إلى المجتمعات المحتاجة في مختلف البلدان لنكون قريبين من الإنسان أينما كان', 'We reach communities in need across many countries, staying close to people wherever they are', 'Farklı ülkelerdeki ihtiyaç sahibi topluluklara ulaşıyor, insanın olduğu her yerde yanında oluyoruz', 'Arrijmë komunitete në nevojë në shumë vende, pranë njerëzve kudo që janë'],
    ['دولة ومجتمع', 'countries & communities', 'ülke ve topluluk', 'vende e komunitete'], ['مناطق حول العالم', 'regions worldwide', 'dünya bölgesi', 'rajone në botë'], ['عامًا من العطاء', 'years of giving', 'yıllık iyilik', 'vite dhurimi'],
    ['الخير', 'Goodness', 'İyilik', 'E mira'], ['لا يعرف الحدود', 'knows no borders', 'sınır tanımaz', 'nuk njeh kufij'], ['خريطة تفاعلية لانتشار أعمالنا حول العالم', 'Interactive map of our work worldwide', 'Dünyadaki çalışmalarımızın etkileşimli haritası', 'Hartë interaktive e punës sonë në botë'],
    ['اختر ما يناسبك: مشروع قائم، أو عطاء بسعره، أو كفالة، أو تبرع شهري، أو زكاتك، أو هدية باسم من تحب.', 'Choose what suits you: a live project, a priced gift, a sponsorship, monthly giving, your zakat, or a gift in someone’s name.', 'Size uygun olanı seçin: süren bir proje, fiyatlı bir bağış, himaye, aylık bağış, zekât veya sevdiğiniz biri adına hediye.', 'Zgjidhni atë që ju përshtatet: projekt në vazhdim, dhuratë me çmim, sponsorizim, dhurim mujor, zekat ose dhuratë në emër të dikujt.'],
    ['ساهم الآن في مشاريع قائمة تنتظر دعمك', 'Support live projects waiting for your help', 'Desteğinizi bekleyen süren projelere katkı verin', 'Mbështetni projektet në vazhdim që presin ndihmën tuaj'], ['كل المشاريع ←', 'All projects →', 'Tüm projeler →', 'Të gjitha projektet →'],
    ['دار رعاية متكاملة تجمع السكن والتعليم والرعاية الصحية والدعم النفسي في خان العسل بحلب.', 'A complete care home combining housing, education, healthcare and psychological support in Khan al-Asal, Aleppo.', 'Halep Han el-Asel’de barınma, eğitim, sağlık ve psikolojik desteği bir araya getiren bakım evi.', 'Shtëpi kujdesi që bashkon strehimin, arsimin, shëndetin dhe mbështetjen psikologjike në Khan al-Asal, Halep.'],
    ['تبرع للمشروع', 'Give to this project', 'Projeye bağış yap', 'Dhuro për projektin'], ['+ أضف للسلة', '+ Add to cart', '+ Sepete ekle', '+ Shto në shportë'], ['متوقف مؤقتًا', 'Paused', 'Geçici olarak durdu', 'Pezulluar'],
    ['وصل المشروع لعدد الحالات المستهدفة لهذه المرحلة. التبرعات متوقفة مؤقتًا لحين إعلان مرحلة جديدة.', 'This phase has reached its target. Donations are paused until a new phase is announced.', 'Proje bu aşamanın hedefine ulaştı. Yeni aşama duyurulana kadar bağışlar durduruldu.', 'Kjo fazë arriti objektivin. Dhurimet janë pezulluar deri në njoftimin e fazës së re.'],
    ['التبرع متوقف حاليًا', 'Donations paused', 'Bağış şu an kapalı', 'Dhurimet janë pezulluar'], ['ترميم وتأهيل المدارس والمساجد', 'Restoring schools and mosques', 'Okul ve cami restorasyonu', 'Restaurimi i shkollave dhe xhamive'],
    ['إعادة تأهيل مرافق تعليمية ودينية متضررة لتعود قادرة على استقبال المجتمع.', 'Rehabilitating damaged schools and mosques so they can serve their communities again.', 'Hasarlı eğitim ve ibadet yerlerini topluma yeniden kazandırıyoruz.', 'Rehabilitojmë shkolla dhe xhami të dëmtuara që t’i shërbejnë sërish komunitetit.'],
    ['عدة مواقع · مستمر', 'Several sites · ongoing', 'Birden çok yer · sürüyor', 'Disa vende · në vazhdim'], ['صدقة جارية', 'Ongoing charity (sadaqah jariyah)', 'Sadaka-i câriye', 'Sadaka e vazhdueshme'],
    ['مصحف صدقة جارية', 'A Qur’an as ongoing charity', 'Sadaka-i câriye mushaf', 'Kur’an si sadaka e vazhdueshme'], ['في أفريقيا', 'in Africa', 'Afrika’da', 'në Afrikë'], ['في السودان', 'in Sudan', 'Sudan’da', 'në Sudan'], ['في غزة', 'in Gaza', 'Gazze’de', 'në Gaza'], ['في شمال سوريا', 'in northern Syria', 'Kuzey Suriye’de', 'në Sirinë veriore'],
    ['نسخة من المصحف الشريف تُهدى إلى مسجد أو حلقة تحفيظ', 'A copy of the Qur’an gifted to a mosque or memorisation circle', 'Bir camiye veya hafızlık halkasına hediye edilen mushaf', 'Një Kur’an i dhuruar për një xhami ose rreth mësimi'],
    ['الكمية', 'Quantity', 'Adet', 'Sasia'], ['الإجمالي:', 'Total:', 'Toplam:', 'Gjithsej:'], ['سلة غذائية لأسرة', 'Food parcel for a family', 'Bir aileye gıda kolisi', 'Pako ushqimore për një familje'],
    ['من برنامج عون الحياة للأسر الأكثر حاجة', 'From our Life Support programme for families most in need', 'En muhtaç aileler için Hayat Desteği programından', 'Nga programi Ndihmë për Jetën për familjet më në nevojë'], ['صهريج ماء', 'Water tanker', 'Su tankeri', 'Autobot uji'],
    ['ماء نظيف يصل إلى المخيمات والأحياء المحتاجة', 'Clean water delivered to camps and neighbourhoods in need', 'Kamplara ve ihtiyaç sahibi mahallelere temiz su', 'Ujë i pastër për kampet dhe lagjet në nevojë'], ['كتب مدرسية لطالب', 'School books for a pupil', 'Bir öğrenciye okul kitapları', 'Libra shkollorë për një nxënës'],
    ['مجموعة كتب العام الدراسي لطالب في مدرسة يدعمها الوقف', 'A full year’s books for a pupil at a school we support', 'Vakfın desteklediği okulda bir öğrencinin yıllık kitapları', 'Librat e një viti për një nxënës në një shkollë që mbështesim'], ['تسديد دين غارم', 'Settle a family’s debt', 'Bir borçlunun borcunu öde', 'Shlyej borxhin e një familjeje'],
    ['نسدد دين أسرة عاجزة عن السداد، مع الحفاظ على خصوصيتها', 'We clear the debt of a family unable to pay, protecting their privacy', 'Ödeyemeyen bir ailenin borcunu, mahremiyetini koruyarak kapatıyoruz', 'Shlyejmë borxhin e një familjeje që s’mund ta paguajë, duke ruajtur privatësinë'], ['بئر ماء', 'Water well', 'Su kuyusu', 'Pus uji'],
    ['صدقة جارية تسقي حيًا كاملًا لسنوات', 'Ongoing charity that waters a whole neighbourhood for years', 'Yıllarca bir mahalleyi sulayan sadaka-i câriye', 'Sadaka e vazhdueshme që i jep ujë një lagjeje për vite'], ['اكفل حلقة قرآن', 'Sponsor a Qur’an circle', 'Bir Kur’an halkasını himaye et', 'Sponsorizo një rreth Kur’ani'],
    ['حلقة تحفيظ ضمن برنامج السفرة الذي يضم 500+ حلقة و12,500+ طالب وطالبة سنويًا', 'A memorisation circle in the Safarah programme: 500+ circles and 12,500+ students a year', 'Yılda 500+ halka ve 12.500+ öğrencili Sefere programında bir hafızlık halkası', 'Një rreth në programin Safarah: 500+ rrethe dhe 12,500+ nxënës në vit'], ['/ شهريًا', '/ month', '/ ay', '/ muaj'], ['اكفل الآن', 'Sponsor now', 'Şimdi himaye et', 'Sponsorizo tani'],
    ['اكفل طالبًا في سفراء القيم', 'Sponsor a Values Ambassadors student', 'Değer Elçileri’nden bir öğrenciyi himaye et', 'Sponsorizo një student të Ambasadorëve të Vlerave'], ['منحة وتدريب لطالب ضمن برنامج خدم 10,000+ طالب', 'A scholarship and training for a student in a programme that has served 10,000+', '10.000+ öğrenciye ulaşan programda burs ve eğitim', 'Bursë dhe trajnim në një program që ka shërbyer 10,000+ studentë'],
    ['ادعم مربية من جيل القيم', 'Support a Values Generation carer', 'Değerler Nesli’nden bir eğitimciyi destekle', 'Mbështet një edukatore të Brezit të Vlerave'], ['تأهيل أم أو مربية أيتام ضمن برنامج وصل إلى 1,500+ مربية و5,000+ طفل', 'Training for a mother or orphan carer in a programme that has reached 1,500+ carers and 5,000+ children', '1.500+ eğitimci ve 5.000+ çocuğa ulaşan programda anne veya yetim bakıcısı eğitimi', 'Trajnim për një nënë ose kujdestare në një program që ka arritur 1,500+ kujdestare dhe 5,000+ fëmijë'],
    ['خطة شهرية ثابتة تمنح المشاريع استمرارية حقيقية، ويمكنك إيقافها في أي وقت.', 'A fixed monthly plan gives projects real continuity, and you can stop it at any time.', 'Sabit aylık plan projelere süreklilik kazandırır; istediğiniz an durdurabilirsiniz.', 'Një plan mujor i qëndrueshëm u jep projekteve vazhdimësi, dhe mund ta ndaloni kur të doni.'], ['دعم برامج التحفيظ والقيم', 'Supports memorisation and values programmes', 'Hafızlık ve değer programlarını destekler', 'Mbështet programet e mësimit dhe vlerave'],
    ['تعرّف على الخطة الشهرية بالتفصيل ←', 'See the monthly plan in detail →', 'Aylık planı ayrıntılı inceleyin →', 'Shikoni planin mujor në detaje →'], ['احسب زكاتك', 'Calculate your zakat', 'Zekâtınızı hesaplayın', 'Llogarisni zekatin'], ['صافي المال الزكوي', 'Net zakatable wealth', 'Net zekâta tabi servet', 'Pasuria neto e zekatit'],
    ['الزكاة المستحقة (2.5%)', 'Zakat due (2.5%)', 'Ödenecek zekât (%2,5)', 'Zekati për t’u paguar (2.5%)'], ['تبرع بمبلغ الزكاة', 'Give your zakat', 'Zekâtınızı bağışlayın', 'Dhuroni zekatin'], ['الحاسبة الكاملة ←', 'Full calculator →', 'Tam hesaplayıcı →', 'Llogaritësi i plotë →'],
    ['تجب الزكاة عند بلوغ النصاب (ما يعادل 85 غرامًا من الذهب أو 595 غرامًا من الفضة) ومرور عام هجري. النتيجة تقديرية ولا تُعد فتوى شرعية.', 'Zakat is due once wealth reaches the nisab (the value of 85 g of gold or 595 g of silver) for a full lunar year. This is an estimate, not a religious ruling.', 'Zekât, servet nisaba (85 g altın veya 595 g gümüş) ulaşıp bir kameri yıl geçince farz olur. Sonuç tahminidir, fetva değildir.', 'Zekati detyrohet kur pasuria arrin nisabin (vlera e 85 g ari ose 595 g argjendi) për një vit hënor. Rezultati është vlerësim, jo fetva.'],
    ['أهدِ تبرعًا باسم من تحب', 'Give in the name of someone you love', 'Sevdiğiniz biri adına bağış yapın', 'Dhuroni në emër të dikujt që doni'], ['تبرع نيابة عن والديك أو صديق، وسنصدر الشهادة باسمه ونرسلها إلى بريده.', 'Give on behalf of a parent or friend; we will issue the certificate in their name and email it to them.', 'Anne-babanız veya bir dostunuz adına bağış yapın; sertifikayı onun adına düzenleyip e-postasına gönderelim.', 'Dhuroni në emër të prindit ose mikut; lëshojmë certifikatën në emrin e tij dhe ia dërgojmë me email.'],
    ['معاينة الشهادة', 'Certificate preview', 'Sertifika önizlemesi', 'Pamja e certifikatës'], ['شهادة شكر وتقدير', 'Certificate of Appreciation', 'Teşekkür ve Takdir Belgesi', 'Certifikatë Mirënjohjeje'], ['تشهد مؤسسة وقف التضامن الاجتماعي بأن', 'Toplumsal Dayanışma Vakfı certifies that', 'Toplumsal Dayanışma Vakfı, şunu belgeler:', 'Toplumsal Dayanışma Vakfı vërteton se'],
    ['اسم المُهدى إليه', 'Recipient’s name', 'Hediye edilen kişinin adı', 'Emri i marrësit'], ['تبرع أُهدي باسمك', 'A gift given in your name', 'Adınıza yapılan bir bağış', 'Një dhuratë në emrin tuaj'], ['هدية', 'Gift', 'Hediye', 'Dhuratë'], ['عن روح', 'In memory', 'Rahmetli için', 'Në kujtim'], ['شفاء', 'For recovery', 'Şifa için', 'Për shërim'],
    ['أضف الهدية للسلة', 'Add gift to cart', 'Hediyeyi sepete ekle', 'Shto dhuratën në shportë'], ['تُصدر الشهادة باسم المُهدى إليه بعد اكتمال الدفع', 'The certificate is issued in the recipient’s name once payment is complete', 'Sertifika, ödeme tamamlanınca hediye edilen kişi adına düzenlenir', 'Certifikata lëshohet në emër të marrësit pas pagesës'],
    ['صور حقيقية من مشاريع الوقف كما وثّقها فريقنا، وعلى كل لافتة اسم المشروع ومكانه وعامه.', 'Real photos of our projects as documented by our team; every banner shows the project, place and year.', 'Ekibimizin belgelediği gerçek proje fotoğrafları; her afişte proje, yer ve yıl yazar.', 'Foto të vërteta nga projektet tona; çdo banner tregon projektin, vendin dhe vitin.'],
    ['مشروع ترميم مدرسة العتيبة — بنين / سوريا', 'Al-Atibah School restoration — Boys / Syria', 'Utaybe Okulu restorasyonu — Erkek / Suriye', 'Restaurimi i shkollës Al-Atibah — Djem / Siri'],
    ['نلتزم بأعلى معايير الشفافية والحوكمة في جميع أعمالنا لضمان وصول التبرعات إلى مستحقيها.', 'We hold all our work to high standards of transparency and governance, so every gift reaches those it is meant for.', 'Bağışların hak sahiplerine ulaşması için tüm çalışmalarımızda en yüksek şeffaflık ve yönetişim standartlarını uyguluyoruz.', 'Zbatojmë standarde të larta transparence dhe qeverisjeje që çdo dhuratë të arrijë te përfituesit.'],
    ['مسجّلة في تركيا منذ 1995 برقم 3673 وتعمل تحت إشراف المديرية العامة للأوقاف.', 'Registered in Türkiye since 1995 (no. 3673), under the supervision of the General Directorate of Foundations.', '1995’ten beri 3673 numarayla Türkiye’de kayıtlı, Vakıflar Genel Müdürlüğü denetiminde.', 'E regjistruar në Turqi që nga 1995 (nr. 3673), nën mbikëqyrjen e Drejtorisë së Përgjithshme të Fondacioneve.'],
    ['بوابة دفع مشفّرة، وبيانات المتبرع لا تُطلب إلا في خطوة الدفع.', 'An encrypted payment gateway; donor details are only requested at payment.', 'Şifreli ödeme altyapısı; bağışçı bilgileri yalnızca ödeme adımında istenir.', 'Portë pagese e koduar; të dhënat kërkohen vetëm në hapin e pagesës.'],
    ['يُوجَّه المبلغ للمشروع الذي اخترته، مع مراجعة دورية للمصروفات.', 'Your gift goes to the project you chose, with regular review of spending.', 'Bağışınız seçtiğiniz projeye gider; harcamalar düzenli olarak denetlenir.', 'Dhurata shkon te projekti që zgjodhët, me shqyrtim të rregullt të shpenzimeve.'],
    ['تقارير ميدانية دورية توضح ما تم تنفيذه ولمن وصل.', 'Regular field reports on what was delivered and to whom.', 'Neyin kime ulaştığını gösteren düzenli saha raporları.', 'Raporte të rregullta nga terreni për çfarë u realizua dhe për kë.'],
    ['تم اعتماد وقفنا رسميًا بموافقة المديرية العامة للأوقاف في الجمهورية التركية بتاريخ 03/11/1995 تحت رقم السجل 3673', 'Officially registered with the approval of the General Directorate of Foundations of the Republic of Türkiye on 03/11/1995, registry no. 3673', 'Vakfımız 03/11/1995 tarihinde Vakıflar Genel Müdürlüğü onayıyla 3673 sicil numarasıyla resmen tescil edildi', 'Regjistruar zyrtarisht me miratimin e Drejtorisë së Përgjithshme të Fondacioneve më 03/11/1995, nr. regjistri 3673'],
    ['عضو في', 'Member of', 'Üyesi olduğumuz:', 'Anëtar i'], ['اتحاد المنظمات الأهلية في العالم الإسلامي (UNIW) · مؤسسة المنظمات التطوعية في تركيا', 'the Union of NGOs of the Islamic World (UNIW) · Türkiye Voluntary Organisations Foundation', 'İslam Dünyası Sivil Toplum Kuruluşları Birliği (UNIW) · Türkiye Gönüllü Teşekküller Vakfı', 'Bashkimi i OJQ-ve të Botës Islame (UNIW) · Fondacioni i Organizatave Vullnetare të Turqisë'],
    ['نعم، تتم المعاملة عبر بوابة دفع مشفّرة، ولا نطلب بياناتك إلا في خطوة الدفع.', 'Yes. Payments go through an encrypted gateway, and we only ask for your details at payment.', 'Evet. İşlem şifreli bir ödeme altyapısıyla yapılır; bilgileriniz yalnızca ödeme adımında istenir.', 'Po. Pagesat kalojnë përmes një porte të koduar dhe të dhënat kërkohen vetëm në pagesë.'],
    ['نعم، اختر المشروع من دائرة التبرع أو من صفحة المشروع مباشرة، ويُوجَّه المبلغ له تحديدًا.', 'Yes. Choose the project in the donate circle or on its page, and the amount goes to that project.', 'Evet. Projeyi bağış dairesinden veya proje sayfasından seçin; tutar doğrudan ona gider.', 'Po. Zgjidhni projektin te rrethi i dhurimit ose në faqen e tij, dhe shuma shkon aty.'],
    ['نعم، يُرسل إيصال برقم العملية بعد اكتمال التبرع، ويمكنك تحميله من ملفك الشخصي.', 'Yes. A receipt with the transaction number is sent after your gift, and you can download it from your profile.', 'Evet. Bağış tamamlanınca işlem numaralı makbuz gönderilir; profilinizden de indirebilirsiniz.', 'Po. Pas dhurimit dërgohet faturë me numrin e transaksionit; mund ta shkarkoni nga profili.'],
    ['إغلاق التنبيه', 'Dismiss notice', 'Duyuruyu kapat', 'Mbyll njoftimin'], ['مؤشرات الثقة', 'Trust indicators', 'Güven göstergeleri', 'Tregues besimi'], ['صور الميدان', 'Field photos', 'Saha fotoğrafları', 'Foto nga terreni'], ['التبرع السريع', 'Quick donate', 'Hızlı bağış', 'Dhurim i shpejtë'],
    ['إنقاص', 'Decrease', 'Azalt', 'Ul'], ['زيادة', 'Increase', 'Artır', 'Rrit'], ['وجهة التبرع', 'Donation destination', 'Bağış hedefi', 'Destinacioni i dhurimit'], ['آخر', 'Other', 'Diğer', 'Tjetër'],
    ['بريده الإلكتروني (اختياري)', 'Their email (optional)', 'E-postası (isteğe bağlı)', 'Email-i i tyre (opsional)'], ['رسالة قصيرة على الشهادة (اختياري)', 'Short message on the certificate (optional)', 'Sertifikaya kısa mesaj (isteğe bağlı)', 'Mesazh i shkurtër në certifikatë (opsional)'],
    ['شاهد قصة مدرسة العتيبة', 'Watch the Al-Atibah school story', 'Utaybe okulu hikâyesini izleyin', 'Shikoni historinë e shkollës Al-Atibah'], ['السابق', 'Previous', 'Önceki', 'Më parë'], ['التالي', 'Next', 'Sonraki', 'Tjetër'], ['شعار شريك', 'Partner logo', 'Ortak logosu', 'Logo e partnerit'],
    ['العربية', 'العربية', 'العربية', 'العربية'],
    ['مركز عملياتنا', 'Our operations hub', 'Operasyon merkezimiz', 'Qendra jonë e operacioneve'],
    ['48 طفلًا مستهدفًا · 6 أشهر', '48 children · 6 months', '48 çocuk · 6 ay', '48 fëmijë · 6 muaj'],
    ['1,000 سهم مستهدف · $250 / أسرة', '1,000 shares · $250 per family', '1.000 hisse · aile başına $250', '1,000 aksione · $250 për familje'],
    // Cart
    ['سلة التبرعات', 'Donation cart', 'Bağış sepeti', 'Shporta e dhurimeve'],
    ['سلة التبرعات فارغة', 'Your donation cart is empty', 'Bağış sepetiniz boş', 'Shporta juaj është bosh'],
    ['تصفح المشاريع', 'Browse projects', 'Projelere göz at', 'Shfleto projektet'],
    ['ملخص التبرع', 'Donation summary', 'Bağış özeti', 'Përmbledhja e dhurimit'],
    ['عدد التبرعات', 'Donations', 'Bağış sayısı', 'Numri i dhurimeve'],
    ['لمرة واحدة', 'One-off', 'Tek seferlik', 'Një herë'],
    ['شهريًا', 'Monthly', 'Aylık', 'Mujore'],
    ['الإجمالي', 'Total', 'Toplam', 'Gjithsej'],
    ['المتابعة للدفع', 'Continue to payment', 'Ödemeye geç', 'Vazhdo te pagesa'],
    ['متابعة التبرع لمشاريع أخرى', 'Keep giving to other projects', 'Diğer projelere bağışa devam et', 'Vazhdo të dhurosh për projekte të tjera'],
    ['دفع مشفّر وآمن', 'Encrypted, secure payment', 'Şifreli ve güvenli ödeme', 'Pagesë e koduar dhe e sigurt'],
    ['حذف', 'Remove', 'Kaldır', 'Hiq'],
    ['تعديل المبلغ', 'Edit amount', 'Tutarı düzenle', 'Ndrysho shumën'],
    ['حوّله إلى شهري بنفس المبلغ', 'Make it monthly at the same amount', 'Aynı tutarla aylığa çevir', 'Bëje mujore me të njëjtën shumë'],
    ['يُخصم كل شهر', 'Charged monthly', 'Her ay çekilir', 'Paguhet çdo muaj'],
    // Programmes — path views
    ['اقرأ المزيد', 'Read more', 'Devamını oku', 'Lexo më shumë'],
    ['تبرع لهذا المسار', 'Give to this path', 'Bu yola bağış yap', 'Dhuro për këtë rrugë'],
    ['يوجَّه تبرعك إلى برامج هذا المسار', 'Your gift goes to this path’s programmes', 'Bağışınız bu yolun programlarına gider', 'Dhurata juaj shkon te programet e kësaj rruge'],
    ['برامج المسار', 'Programmes in this path', 'Bu yolun programları', 'Programet e kësaj rruge'],
    ['مشاريع هذا المسار', 'Projects in this path', 'Bu yolun projeleri', 'Projektet e kësaj rruge'],
    ['مشاريع الحملة', 'Campaign projects', 'Kampanya projeleri', 'Projektet e fushatës'],
    ['مشروع واحد', '1 project', '1 proje', '1 projekt'],
    ['لا توجد مشاريع مفتوحة في هذا المسار حاليًا', 'No projects are open in this path right now', 'Bu yolda şu an açık proje yok', 'Aktualisht nuk ka projekte të hapura në këtë rrugë'],
    ['عرض جميع المشاريع ←', 'View all projects →', 'Tüm projeleri gör →', 'Shiko të gjitha projektet →'],
    ['تعليم متكافئ للفئات الأضعف خاصة، ورعاية وبيئات تمنح الإنسان مساحة للنمو', 'Equal education, especially for the most vulnerable, with care and settings that give people room to grow', 'Özellikle en kırılgan kesimler için eşit eğitim; insana gelişme alanı açan bakım ve ortamlar', 'Arsim i barabartë, sidomos për më të pambrojturit, me kujdes dhe mjedise që u japin njerëzve hapësirë për t’u rritur'],
    ['التكافل في تفاصيل الحياة: غذاء وماء ورعاية تصل إلى المحتاجين عبر المواسم', 'Solidarity in daily life: food, water and care reaching people in need through every season', 'Günlük hayatta dayanışma: her mevsim ihtiyaç sahiplerine ulaşan gıda, su ve bakım', 'Solidaritet në jetën e përditshme: ushqim, ujë dhe kujdes që arrijnë te nevojtarët në çdo stinë'],
    ['نسمة القيم', 'Values Breeze', 'Değerler Esintisi', 'Flladi i Vlerave'], ['أنشطة قيمية أسبوعية في رياض الأطفال والمدارس والجامعات', 'Weekly values activities in kindergartens, schools and universities', 'Anaokulu, okul ve üniversitelerde haftalık değer etkinlikleri', 'Aktivitete javore për vlerat në kopshte, shkolla dhe universitete'],
    ['واحة القيم', 'Values Oasis', 'Değerler Vahası', 'Oaza e Vlerave'], ['فعاليات ومحاضرات لتعزيز القيم', 'Events and talks that strengthen values', 'Değerleri güçlendiren etkinlik ve konferanslar', 'Ngjarje dhe ligjërata që forcojnë vlerat'],
    ['دار المعلم', 'Teachers’ House', 'Öğretmen Evi', 'Shtëpia e Mësuesit'], ['تدريب المعلمين', 'Teacher training', 'Öğretmen eğitimi', 'Trajnimi i mësuesve'],
    ['دار المرشدين', 'Guides’ House', 'Rehberler Evi', 'Shtëpia e Udhëzuesve'], ['تأهيل الدعاة والأئمة والخطباء والمؤثرين', 'Training preachers, imams, speakers and people of influence', 'Davetçi, imam, hatip ve kanaat önderlerinin yetiştirilmesi', 'Trajnimi i predikuesve, imamëve, hatibëve dhe personave me ndikim'],
    ['السفرة', 'Al-Safarah', 'Sefere', 'Safarah'], ['حلقات لتحفيظ القرآن الكريم وتدريس علومه', 'Circles for memorising the Qur’an and studying its sciences', 'Kur’an-ı Kerim hafızlığı ve ilimleri halkaları', 'Rrethe për mësimin përmendsh të Kur’anit dhe shkencave të tij'],
    ['مربية جيل القيم', 'Values Generation Carers', 'Değerler Nesli Eğitimcileri', 'Edukatoret e Brezit të Vlerave'], ['تأهيل الأمهات ومربيات الأيتام', 'Training mothers and orphan carers', 'Annelerin ve yetim eğitimcilerinin yetiştirilmesi', 'Trajnimi i nënave dhe kujdestareve të jetimëve'],
    ['سنابل القيم', 'Values Harvest', 'Değerler Başakları', 'Kallinjtë e Vlerave'], ['برنامج مستمر لرعاية الأيتام', 'An ongoing programme of orphan care', 'Süreklilik taşıyan yetim bakım programı', 'Program i vazhdueshëm për kujdesin e jetimëve'],
    ['سفراء القيم', 'Values Ambassadors', 'Değer Elçileri', 'Ambasadorët e Vlerave'], ['منح دراسية وتدريب', 'Scholarships and training', 'Burs ve eğitim', 'Bursa dhe trajnim'],
    ['دعاة يوظّفون التقنية ووسائل التواصل', 'Preachers using technology and social media', 'Teknolojiyi ve sosyal medyayı kullanan davetçiler', 'Predikues që përdorin teknologjinë dhe mediat sociale'],
    ['بيئة القيم', 'Values Environment', 'Değerler Ortamı', 'Mjedisi i Vlerave'], ['بناء المساجد وترميمها', 'Building and restoring mosques', 'Cami inşası ve onarımı', 'Ndërtimi dhe restaurimi i xhamive'],
    ['الأسرة القيمية', 'Values Family', 'Değerli Aile', 'Familja e Vlerave'], ['برامج للأسرة', 'Family programmes', 'Aile programları', 'Programe për familjen'],
    ['دار الروّاد', 'Pioneers’ House', 'Öncüler Evi', 'Shtëpia e Pionierëve'], ['مسارات قيادية وابتكارية وتقنية', 'Leadership, innovation and technology tracks', 'Liderlik, inovasyon ve teknoloji programları', 'Programe udhëheqjeje, inovacioni dhe teknologjie'],
    ['صناعة المؤثرين', 'Shaping Influencers', 'Etki Sahipleri Yetiştirme', 'Formimi i Ndikuesve'], ['مهارات خطابية ومعرفة قيمية وتقنية', 'Public speaking, values knowledge and technical skills', 'Hitabet, değer bilgisi ve teknik beceriler', 'Aftësi oratorie, njohuri për vlerat dhe aftësi teknike'],
    ['تمكين الخريجين', 'Graduate Empowerment', 'Mezun Güçlendirme', 'Fuqizimi i të Diplomuarve'], ['تأهيل الخريجين لسوق العمل', 'Preparing graduates for the job market', 'Mezunları iş hayatına hazırlama', 'Përgatitja e të diplomuarve për tregun e punës'],
    ['التعليم والمهن الحرفية', 'Vocational and craft education', 'Mesleki ve zanaat eğitimi', 'Arsimi profesional dhe zejet'], ['تعليم مهني وحرفي', 'Vocational and craft training', 'Meslek ve zanaat eğitimi', 'Trajnim profesional dhe zejtar'],
    ['المنح التعليمية', 'Education Scholarships', 'Eğitim Bursları', 'Bursat Arsimore'], ['منح دراسية للطلاب', 'Scholarships for students', 'Öğrencilere burs', 'Bursa për studentët'],
    ['سقيا الماء', 'Water Supply', 'Su Dağıtımı', 'Furnizimi me Ujë'], ['ماء نقي في الأماكن العامة والمزدحمة، مع التوصيل إلى المحتاجين', 'Clean water in busy public places, with delivery to people in need', 'Kalabalık kamusal alanlarda temiz su ve ihtiyaç sahiplerine teslimat', 'Ujë i pastër në vende publike, me shpërndarje te nevojtarët'],
    ['إفطار صائم', 'Iftar Meals', 'İftar', 'Iftar'], ['وجبات إفطار متكاملة في رمضان', 'Complete iftar meals during Ramadan', 'Ramazan’da eksiksiz iftar yemekleri', 'Vakte të plota iftari në Ramazan'],
    ['السلال الغذائية', 'Food Parcels', 'Gıda Kolileri', 'Pakot Ushqimore'], ['سلال غذائية للأسر المحتاجة', 'Food parcels for families in need', 'İhtiyaç sahibi ailelere gıda kolisi', 'Pako ushqimore për familjet në nevojë'],
    ['توزيع المصاحف', 'Qur’an Distribution', 'Mushaf Dağıtımı', 'Shpërndarja e Kur’anëve'], ['مصاحف للمساجد المحتاجة', 'Copies of the Qur’an for mosques in need', 'İhtiyaç sahibi camilere mushaf', 'Kur’anë për xhamitë në nevojë'],
    ['توزيع الخبز', 'Bread Distribution', 'Ekmek Dağıtımı', 'Shpërndarja e Bukës'], ['خبز يومي للأسر', 'Daily bread for families', 'Ailelere günlük ekmek', 'Bukë e përditshme për familjet'],
    ['تكية الطعام', 'Community Kitchen', 'Aşevi', 'Kuzhina e Komunitetit'], ['وجبات مطهوة للأسر', 'Cooked meals for families', 'Ailelere sıcak yemek', 'Vakte të gatuara për familjet'],
    ['الأضاحي', 'Qurbani', 'Kurban', 'Kurbani'], ['لحوم الأضاحي للأسر المحتاجة', 'Qurbani meat for families in need', 'İhtiyaç sahibi ailelere kurban eti', 'Mish kurbani për familjet në nevojë'],
    ['موسم الشتاء', 'Winter Season', 'Kış Kampanyası', 'Sezoni i Dimrit'], ['حزم شتوية للأسر النازحة', 'Winter kits for displaced families', 'Yerinden edilmiş ailelere kış paketi', 'Pako dimri për familjet e zhvendosura'],
    // About — vision, mission, purpose, goals
    ['الريادة في تمكين روّاد المجتمع لتعزيز القيم.', 'Leading the way in empowering community leaders to strengthen values.', 'Değerleri güçlendirmek için toplum öncülerini güçlendirmede öncülük.', 'Të prijmë në fuqizimin e udhëheqësve të komunitetit për forcimin e vlerave.'],
    ['نعمل على تفعيل دور روّاد المجتمع وتعزيزه، ونتبنّى المبادرات ونرعى المشاريع التي تؤصّل القيم السامية وتنشرها، سعيًا إلى مجتمع متماسك يواجه تحدياته بأخلاقه.', 'We activate and strengthen the role of community leaders, and adopt initiatives and projects that root and spread noble values — working towards a cohesive society that meets its challenges with integrity.', 'Toplum öncülerinin rolünü etkinleştirip güçlendiriyor; yüce değerleri kökleştiren ve yayan girişim ve projeleri sahipleniyoruz. Hedefimiz, zorluklarına ahlakıyla karşılık veren bütünleşik bir toplum.', 'Aktivizojmë dhe forcojmë rolin e udhëheqësve të komunitetit, dhe mbështesim nisma e projekte që rrënjosin dhe përhapin vlerat fisnike — për një shoqëri të bashkuar që i përballon sfidat me integritet.'],
    ['شعار الوقف', 'Foundation motto', 'Vakfın sloganı', 'Motoja e fondacionit'],
    ['تمكين المجتمعات من أجل مستقبل مرن', 'Empowering communities for a resilient future', 'Dayanıklı bir gelecek için toplumları güçlendirmek', 'Fuqizimi i komuniteteve për një të ardhme të qëndrueshme'],
    ['نرعى الأفراد ونمكّنهم في جوانب حياتهم كلها، ونخصّ بالعناية قادة المجتمع والشباب والأسر لأنهم أعمدة التحوّل المجتمعي. نعمل على تعزيز نموّهم الأخلاقي والفكري بالتعليم والمبادرات القائمة على القيم، فنبني ثقافة تعلّم تمتد مدى الحياة، وقيادة ترتكز على الأخلاق.', 'We care for and empower people in every part of life, with particular attention to community leaders, young people and families as the pillars of social change. Through education and values-based initiatives we support their moral and intellectual growth, building a culture of lifelong learning and ethical leadership.', 'Bireyleri hayatın her alanında destekliyor ve güçlendiriyoruz; toplumsal dönüşümün direkleri olan toplum önderlerine, gençlere ve ailelere özel önem veriyoruz. Eğitim ve değer temelli girişimlerle ahlaki ve fikrî gelişimlerini destekleyerek ömür boyu öğrenme kültürü ve ahlaka dayalı liderlik inşa ediyoruz.', 'Kujdesemi dhe fuqizojmë njerëzit në çdo aspekt të jetës, me vëmendje të veçantë për udhëheqësit, të rinjtë dhe familjet si shtylla të ndryshimit shoqëror. Përmes arsimit dhe nismave të bazuara në vlera mbështesim rritjen e tyre morale e intelektuale.'],
    ['لا نكتفي بتزويد الأجيال القادمة بأدوات النجاح الأكاديمي والمهني، بل نهيّئهم لاتخاذ قرارات مسؤولة تنطلق من مبادئ واضحة. وبنهج يجمع المعرفة بالقيم، نساعد الأفراد على أن يكونوا عوامل تغيير إيجابي، قادرين على مواجهة التحديات المحلية والعالمية بحكمة ونزاهة.', 'We do not stop at giving the next generation the tools for academic and professional success; we prepare them to make responsible decisions grounded in clear principles. Joining knowledge with values, we help people become agents of positive change, able to meet local and global challenges with wisdom and integrity.', 'Gelecek nesillere yalnızca akademik ve mesleki başarı araçları sunmakla yetinmiyor, onları açık ilkelere dayanan sorumlu kararlar almaya hazırlıyoruz. Bilgiyi değerlerle buluşturan bir yaklaşımla bireylerin yerel ve küresel sorunlara hikmet ve dürüstlükle karşılık veren olumlu değişim öncüleri olmasına yardım ediyoruz.', 'Nuk mjaftohemi me mjetet e suksesit akademik dhe profesional; i përgatisim brezat e ardhshëm të marrin vendime të përgjegjshme mbi parime të qarta, dhe t’i përballojnë sfidat lokale e globale me urtësi dhe ndershmëri.'],
    ['ونتصدّى للتحديات التي تواجه المجتمعات اليوم، كالتفكك الاجتماعي واتساع الفجوات والتراجع الأخلاقي، بتعزيز التضامن ونشر القيم على نطاق عالمي. نعمل مع شركاء يشاركوننا الرؤية، ونصمّم برامج تلبّي احتياجات الفئات المختلفة، ونبقى ملتزمين بالإنسان أولًا، لتكون القيم واقعًا يعيشه الناس كل يوم.', 'We respond to the challenges communities face today — social fragmentation, widening gaps and moral decline — by strengthening solidarity and spreading values worldwide. We work with partners who share our vision, design programmes for different groups’ needs, and keep people first, so that values become something people live every day.', 'Toplumsal çözülme, derinleşen eşitsizlikler ve ahlaki gerileme gibi bugünün sorunlarına dayanışmayı güçlendirerek ve değerleri dünya ölçeğinde yayarak karşılık veriyoruz. Vizyonumuzu paylaşan ortaklarla çalışıyor, farklı kesimlerin ihtiyaçlarına uygun programlar tasarlıyor ve insanı her zaman önde tutuyoruz.', 'U përgjigjemi sfidave të sotme — shpërbërjes shoqërore, pabarazive në rritje dhe rënies morale — duke forcuar solidaritetin dhe duke përhapur vlerat në botë, me partnerë që ndajnë vizionin tonë dhe me njeriun gjithmonë në radhë të parë.'],
    ['رعاية الأفراد وتمكينهم، ولا سيما قادة المجتمع والشباب والأسر، لتعزيز نموّهم الأخلاقي والفكري بالتعليم والمبادرات القائمة على القيم.', 'To care for and empower people — especially community leaders, young people and families — and strengthen their moral and intellectual growth through education and values-based initiatives.', 'Başta toplum önderleri, gençler ve aileler olmak üzere bireyleri desteklemek ve güçlendirmek; eğitim ve değer temelli girişimlerle ahlaki ve fikrî gelişimlerini artırmak.', 'Të kujdesemi dhe të fuqizojmë njerëzit — sidomos udhëheqësit, të rinjtë dhe familjet — dhe të forcojmë rritjen e tyre morale e intelektuale përmes arsimit dhe nismave të bazuara në vlera.'],
    ['نسعى إلى بناء مجتمعات متماسكة قادرة على مواجهة تحديات العصر، وإلى تعزيز التضامن الاجتماعي ونشر القيم السامية على نطاق عالمي، عبر شراكات استراتيجية وبرامج مبتكرة والتزام ثابت بالإنسان، لعالم يسوده العدل والكرامة والتعاون.', 'We aim to build cohesive communities able to face today’s challenges, and to strengthen social solidarity and spread noble values worldwide — through strategic partnerships, innovative programmes and a steady commitment to people — for a world of justice, dignity and cooperation.', 'Çağın sorunlarına karşı koyabilen bütünleşik toplumlar inşa etmeyi; stratejik ortaklıklar, yenilikçi programlar ve insana bağlılıkla sosyal dayanışmayı güçlendirip yüce değerleri dünyaya yaymayı hedefliyoruz: adalet, onur ve iş birliğinin hâkim olduğu bir dünya için.', 'Synojmë të ndërtojmë komunitete të bashkuara, të forcojmë solidaritetin shoqëror dhe të përhapim vlerat fisnike në botë — përmes partneriteteve strategjike, programeve inovative dhe angazhimit ndaj njeriut — për një botë drejtësie, dinjiteti dhe bashkëpunimi.'],
    ['الفئات المستهدفة', 'Who we serve', 'Hedef kitleler', 'Kë u shërbejmë'],
    ['الأسرة', 'The family', 'Aile', 'Familja'], ['الوحدة الأساسية لتعليم القيم والأخلاق', 'The first school of values and character', 'Değer ve ahlak eğitiminin temel birimi', 'Njësia bazë e edukimit me vlera dhe karakter'],
    ['روّاد المجتمع', 'Community leaders', 'Toplum önderleri', 'Udhëheqësit e komunitetit'], ['القادة الذين يُرجع إليهم في القيم', 'The people others look to on values', 'Değerler konusunda başvurulan önderler', 'Njerëzit te të cilët të tjerët kërkojnë udhëzim për vlerat'],
    ['الشباب', 'Young people', 'Gençler', 'Të rinjtë'], ['عماد المستقبل', 'The backbone of the future', 'Geleceğin dayanağı', 'Shtylla e së ardhmes'],
    ['منظومة التعليم والثقافة', 'Education and culture', 'Eğitim ve kültür sistemi', 'Sistemi i arsimit dhe kulturës'], ['المؤسسات التي تشكّل العقول', 'The institutions that shape minds', 'Zihinleri şekillendiren kurumlar', 'Institucionet që formojnë mendjet'],
    // Board & President's letter
    ['د. أحمد حمدي يلدريم', 'Dr. Ahmet Hamdi Yıldırım', 'Dr. Ahmet Hamdi Yıldırım', 'Dr. Ahmet Hamdi Yıldırım'], ['رئيس الهيئة الاستشارية العليا', 'Chair of the High Advisory Board', 'Yüksek İstişare Kurulu Başkanı', 'Kryetar i Këshillit të Lartë Këshillimor'],
    ['د. حمدي أرسلان', 'Dr. Hamdi Arslan', 'Dr. Hamdi Arslan', 'Dr. Hamdi Arslan'], ['رئيس هيئة المتولّين', 'Chair of the Board of Trustees', 'Mütevelli Heyeti Başkanı', 'Kryetar i Bordit të Besimit'],
    ['د. عبد الصمد كوتشاك', 'Dr. Abdüssamet Koçak', 'Dr. Abdüssamet Koçak', 'Dr. Abdüssamet Koçak'], ['رئيس مجلس الإدارة', 'Chair of the Board of Directors', 'Yönetim Kurulu Başkanı', 'Kryetar i Bordit Drejtues'],
    ['في عصرنا الحالي، يُعدّ تحقيق السلام والوئام بين المجتمعات من أسمى تطلّعات البشر.', 'In our time, peace and harmony between communities are among humanity’s highest aspirations.', 'Çağımızda toplumlar arasında barış ve uyumu sağlamak, insanlığın en yüce özlemlerinden biridir.', 'Në kohën tonë, paqja dhe harmonia mes komuniteteve janë ndër aspiratat më të larta të njerëzimit.'],
    ['غير أن هذه الغاية كثيرًا ما تعترضها عوامل داخلية وخارجية، ومنها نفس الإنسان حين تحول رغباته دون السلام. ومع ذلك، فإن تنمية القيم الفطرية التي يملكها الإنسان، كالحق والعدل والقناعة، وتعزيز مشاعر الأخوّة بين الناس، تجعل بناء مجتمع يسوده الوئام أمرًا ممكنًا. فالإنسان بطبيعته قادر على صنع السلام، كما أنه قادر على هدمه إن اختار ذلك. ولهذا فإن كل خطوة تُتّخذ وكل جهد يُبذل لترسيخ الأخوّة والوحدة والتضامن يقرّبنا من الطمأنينة الدائمة في مجتمعاتنا.', 'Yet this goal is often blocked by inner and outer forces, including our own desires when they stand in the way of peace. Even so, by nurturing the values born in every person — truth, justice and contentment — and strengthening brotherhood between people, a society of harmony becomes possible. People are able by nature to build peace, just as they can destroy it if they choose. Every step taken and every effort made to root brotherhood, unity and solidarity brings our communities closer to lasting peace of mind.', 'Ancak bu hedefin önüne çoğu zaman iç ve dış etkenler çıkar; insanın kendi arzuları da barışa engel olabilir. Yine de insanın fıtratındaki hak, adalet ve kanaat gibi değerleri geliştirmek ve kardeşlik duygularını güçlendirmek, uyum içinde bir toplumu mümkün kılar. İnsan barışı kurmaya da, dilerse yıkmaya da muktedirdir. Bu yüzden kardeşlik, birlik ve dayanışmayı kökleştirmek için atılan her adım bizi kalıcı huzura yaklaştırır.', 'Megjithatë, ky qëllim shpesh pengohet nga faktorë të brendshëm e të jashtëm, përfshirë dëshirat tona. Por duke kultivuar vlerat e lindura në çdo njeri — të vërtetën, drejtësinë dhe kënaqësinë — dhe duke forcuar vëllazërinë, një shoqëri harmonie bëhet e mundur. Çdo hap për rrënjosjen e vëllazërisë, unitetit dhe solidaritetit na afron te qetësia e qëndrueshme.'],
    ['يقول الفارابي: «المجتمع يتلاحم بالمحبة، ويعيش بالعدل». فالمحبة، إلى جانب كونها شعورًا، فضيلةٌ أخلاقية وقوة تربط الناس بعضهم ببعض. وعلينا أن نرعاها ونحافظ على نضارتها، لأنها تعبّر عن رغبة الإنسان في الوحدة والانسجام. وفي الحياة الاجتماعية، حين يرضى كل فرد بحقه، ويحترم حقوق غيره، ويبادر إلى الإحسان متى دعت الحاجة، تصبح هذه المشاعر الركيزة الأساسية للسلام الاجتماعي والعدالة.', 'Al-Farabi wrote: “Society is bound together by love and lives by justice.” Love is more than a feeling; it is a moral virtue and a force that ties people to one another. We must tend it and keep it fresh, for it expresses our longing for unity and harmony. In social life, when each person is content with their due, respects the rights of others and is ready to do good when it is needed, these feelings become the foundation of social peace and justice.', 'Farabi şöyle der: “Toplum sevgiyle kenetlenir, adaletle yaşar.” Sevgi bir duygu olmanın yanında ahlaki bir erdem ve insanları birbirine bağlayan bir güçtür. Onu korumalı ve canlı tutmalıyız; çünkü insanın birlik ve uyum arzusunu ifade eder. Herkes hakkına razı olup başkalarının hakkına saygı gösterdiğinde ve gerektiğinde iyilikte bulunduğunda, bu duygular toplumsal barışın ve adaletin temeli olur.', 'Farabiu shkruan: “Shoqëria mbahet bashkë me dashuri dhe jeton me drejtësi.” Dashuria është më shumë se ndjenjë; është virtyt moral dhe forcë që i lidh njerëzit. Kur secili kënaqet me të drejtën e vet, respekton të drejtat e të tjerëve dhe bën mirë kur duhet, këto ndjenja bëhen themeli i paqes dhe drejtësisë shoqërore.'],
    ['وكلما كانت لغة الحب والاحترام والسلام أعمق في نفوس أفراد المجتمع، زادت قدرتهم على العيش في طمأنينة وعدل. وقد جاءت الأديان والأنبياء والكتب السماوية لإرساء قيم المحبة والسلام والأخوّة، غير أن البشرية لم تبلغ دائمًا المستوى المنشود منها؛ ففي فترات من التاريخ تخلّى الناس عن هذه القيم، فكانت الحروب والفوضى. ومن هنا نرى في عمل الوقف إسهامًا في إعادة هذه القيم إلى حياة الناس.', 'The deeper the language of love, respect and peace runs in a community, the better its people can live in calm and fairness. Faiths, prophets and scriptures came to establish love, peace and brotherhood, yet humanity has not always lived up to them; in some periods people abandoned these values, and war and chaos followed. We see the foundation’s work as a contribution to bringing these values back into people’s lives.', 'Sevgi, saygı ve barış dili toplumun fertlerinde ne kadar derinse, huzur ve adalet içinde yaşama güçleri de o kadar artar. Dinler, peygamberler ve semavi kitaplar sevgi, barış ve kardeşliği tesis etmek için geldi; ancak insanlık her zaman bu seviyeye ulaşamadı ve bu değerlerin terk edildiği dönemlerde savaş ve kaos baş gösterdi. Vakfın çalışmalarını bu değerleri insanların hayatına geri kazandırmaya bir katkı olarak görüyoruz.', 'Sa më thellë të jetë gjuha e dashurisë, respektit dhe paqes në një komunitet, aq më mirë jetojnë njerëzit në qetësi e drejtësi. Fetë, profetët dhe librat e shenjtë erdhën për të vendosur këto vlera, por njerëzimi jo gjithmonë i ka ndjekur. Puna e fondacionit synon t’i kthejë këto vlera në jetën e njerëzve.'],
    // Inner pages — body copy
    ['برنامج العطاء الدوري', 'Regular Giving Programme', 'Düzenli Bağış Programı', 'Programi i Dhurimit të Rregullt'],
    ['صدقة تتجدد وحدها', 'Charity that renews itself', 'Kendiliğinden yenilenen sadaka', 'Sadaka që rinovohet vetë'],
    ['تختار المبلغ والباب مرة واحدة، فيصل عطاؤك إلى الميدان كل شهر أو كل أسبوع دون أن تعود إليه.', 'Choose the amount and the cause once, and your gift reaches the field every month or every week without you having to come back.', 'Tutarı ve alanı bir kez seçin; bağışınız siz tekrar uğraşmadan her ay ya da her hafta sahaya ulaşsın.', 'Zgjidhni shumën dhe kauzën një herë, dhe dhurata juaj arrin në terren çdo muaj ose çdo javë pa pasur nevojë të ktheheni.'],
    ['مورد يُبنى عليه', 'Income to plan around', 'Planlanabilir bir kaynak', 'Burim mbi të cilin planifikohet'],
    ['التزام منتظم يسمح للفرق بالتخطيط للمشاريع طوال العام.', 'A steady commitment lets our teams plan projects all year round.', 'Düzenli bir taahhüt, ekiplerin projeleri yıl boyu planlamasını sağlar.', 'Një angazhim i rregullt u lejon ekipeve të planifikojnë projektet gjatë gjithë vitit.'],
    ['باب تختاره أنت', 'A cause you choose', 'Sizin seçtiğiniz alan', 'Një kauzë që zgjidhni ju'],
    ['الأيتام أو التعليم أو الإغاثة أو المياه أو حيث الحاجة الأشد.', 'Orphans, education, relief, water, or wherever the need is greatest.', 'Yetimler, eğitim, yardım, su ya da ihtiyacın en büyük olduğu yer.', 'Jetimët, arsimi, ndihma, uji, ose aty ku nevoja është më e madhe.'],
    ['تحت تصرفك دائمًا', 'Always in your hands', 'Her zaman sizin elinizde', 'Gjithmonë në duart tuaja'],
    ['تعدّل المبلغ أو توقفه في أي وقت من ملفك الشخصي.', 'Change the amount or stop it at any time from your profile.', 'Tutarı profilinizden dilediğiniz zaman değiştirin ya da durdurun.', 'Ndryshoni shumën ose ndaleni në çdo kohë nga profili juaj.'],
    ['تعرّف على البرنامج ←', 'About the programme →', 'Programı tanıyın →', 'Rreth programit →'],
    ['الباب', 'Cause', 'Alan', 'Kauza'],
    ['المبلغ الأسبوعي', 'Weekly amount', 'Haftalık tutar', 'Shuma javore'],
    ['المبلغ الشهري', 'Monthly amount', 'Aylık tutar', 'Shuma mujore'],
    ['أسبوعيًا', 'Weekly', 'Haftalık', 'Javore'],
    ['ابدأ صدقتك الشهرية', 'Start your monthly gift', 'Aylık sadakanızı başlatın', 'Nisni dhuratën tuaj mujore'],
    ['ابدأ صدقتك الأسبوعية', 'Start your weekly gift', 'Haftalık sadakanızı başlatın', 'Nisni dhuratën tuaj javore'],
    ['دفع آمن ومحمي · يمكنك الإيقاف متى شئت', 'Secure payment · stop whenever you like', 'Güvenli ödeme · dilediğiniz zaman durdurun', 'Pagesë e sigurt · ndaleni kur të doni'],
    ['رعاية الأيتام', 'Orphan care', 'Yetim bakımı', 'Kujdesi për jetimët'],
    ['التعليم والمنح الدراسية', 'Education and scholarships', 'Eğitim ve burslar', 'Arsimi dhe bursat'],
    ['الإغاثة الإنسانية', 'Humanitarian relief', 'İnsani yardım', 'Ndihma humanitare'],
    ['المياه النظيفة والآبار', 'Clean water and wells', 'Temiz su ve kuyular', 'Ujë i pastër dhe puse'],
    ['القرآن والقيم', 'Qur’an and values', 'Kur’an ve değerler', 'Kur’ani dhe vlerat'],
    ['حيث الحاجة الأشد', 'Where the need is greatest', 'İhtiyacın en büyük olduğu yer', 'Aty ku nevoja është më e madhe'],
    ['صدقة جارية', 'Ongoing charity', 'Sadaka-i câriye', 'Sadaka e vazhdueshme'],
    ['بطاقة بنكية', 'Bank card', 'Banka kartı', 'Kartë bankare'],
    ['إنجازاتنا', 'Our achievements', 'Başarılarımız', 'Arritjet tona'],
    ['تبرّع بقيمة محددة تعرف ما تصنعه', 'Give a set amount and know exactly what it provides', 'Ne sağladığını bildiğiniz belirli bir tutar bağışlayın', 'Dhuroni një shumë të caktuar dhe dini çfarë siguron'],
    ['ما أنجزه الوقف بتبرعاتكم، بأرقام من كتالوج الإنجازات 2026', 'What your donations have achieved, in figures from the 2026 achievements catalogue', 'Bağışlarınızla vakfın başardıkları; 2026 başarı kataloğundan rakamlarla', 'Çfarë kanë arritur dhuratat tuaja, me shifra nga katalogu i arritjeve 2026'],
    ['أثرنا بالتفصيل ←', 'Our impact in detail →', 'Etkimiz ayrıntılı →', 'Ndikimi ynë në detaje →'],
    ['ترميم المساجد', 'Mosque restoration', 'Cami onarımı', 'Restaurimi i xhamive'],
    ['مستفيد من مساجد أُعيد ترميمها وتجهيزها في سوريا وغيرها.', 'people served by mosques restored and re-equipped in Syria and elsewhere.', 'Suriye ve başka yerlerde onarılıp donatılan camilerden yararlanan.', 'përfitues nga xhamitë e restauruara në Siri dhe gjetkë.'],
    ['مستفيد من سلال غذائية وُزّعت على الأسر الأكثر حاجة.', 'people reached by food parcels delivered to families most in need.', 'En muhtaç ailelere dağıtılan gıda kolilerinden yararlanan.', 'përfitues nga pakot ushqimore për familjet më në nevojë.'],
    ['المنح التعليمية', 'Education scholarships', 'Eğitim bursları', 'Bursat arsimore'],
    ['طالب دعمهم برنامج المنح الدراسية في مراحل التعليم المختلفة.', 'students supported by the scholarship programme at every level of study.', 'Burs programının farklı eğitim kademelerinde desteklediği öğrenci.', 'studentë të mbështetur nga programi i bursave në çdo nivel.'],
    ['دولة ومجتمعًا', 'countries and communities', 'ülke ve topluluk', 'vende dhe komunitete'],
    ['يصل إليها عمل الوقف في الشرق الأوسط والبلقان وآسيا وأفريقيا.', 'reached by the foundation’s work across the Middle East, the Balkans, Asia and Africa.', 'Vakfın Orta Doğu, Balkanlar, Asya ve Afrika’daki çalışmalarının ulaştığı.', 'ku arrin puna e fondacionit në Lindjen e Mesme, Ballkan, Azi dhe Afrikë.'],
    ['الشروط والأحكام', 'Terms and conditions', 'Şartlar ve koşullar', 'Kushtet dhe afatet'],
    ['شروط التبرع', 'Donation terms', 'Bağış koşulları', 'Kushtet e dhurimit'],
    ['بإتمامك عملية التبرع عبر الموقع، فإنك توافق على الشروط التالية.', 'By completing a donation on this site, you agree to the following terms.', 'Bu sitede bağış yaparak aşağıdaki koşulları kabul etmiş olursunuz.', 'Duke përfunduar një dhurim në këtë faqe, pranoni kushtet e mëposhtme.'],
    ['لوحة الشجرة', 'Tree plaque', 'Ağaç levhası', 'Pllaka e pemës'], ['لوحة البئر', 'Well plaque', 'Kuyu levhası', 'Pllaka e pusit'],
    ['عمل خيري يبقى أثره بعد صاحبه: شجرة تثمر أو بئر تسقي، ولوحة تحمل اسمك أو اسم من تحب.', 'A good deed that outlasts its giver: a fruiting tree or a well that gives water, with a plaque in your name or a loved one’s.', 'Sahibinden sonra da süren bir hayır: meyve veren bir ağaç ya da su veren bir kuyu, adınızı ya da sevdiğinizin adını taşıyan bir levha ile.', 'Një vepër e mirë që mbetet pas dhuruesit: një pemë që jep fryt ose një pus që jep ujë, me pllakë në emrin tuaj ose të të dashurit.'],
    ['ما نقص مالٌ من صدقة', 'Charity never decreases wealth', 'Sadaka malı eksiltmez', 'Sadakaja nuk e pakëson pasurinë'],
    ['ملخص التبرع', 'Donation summary', 'Bağış özeti', 'Përmbledhja e dhurimit'], ['تعديل', 'Edit', 'Düzenle', 'Ndrysho'],
    ['إيصال فوري على بريدك بعد الدفع', 'An instant receipt by email after payment', 'Ödemeden sonra e-postanıza anında makbuz', 'Faturë e menjëhershme me email pas pagesës'],
    ['يُوجَّه كل بند إلى المشروع الذي اخترته', 'Each item goes to the project you chose', 'Her kalem seçtiğiniz projeye gider', 'Çdo zë shkon te projekti që zgjodhët'],
    ['وقف مسجّل رسميًا برقم 3673 منذ 1995', 'Officially registered foundation, No. 3673, since 1995', '1995’ten beri 3673 sicil no. ile resmî kayıtlı vakıf', 'Fondacion i regjistruar zyrtarisht, nr. 3673, që nga 1995'],
    ['تحتاج مساعدة؟', 'Need help?', 'Yardım mı lazım?', 'Keni nevojë për ndihmë?'],
    ['حديث شريف', 'Prophetic hadith', 'Hadis-i şerif', 'Hadith profetik'],
    ['اشترك بمبلغ يناسبك، يتجدد تلقائيًا في الباب الذي تختاره.', 'Choose an amount that suits you; it renews automatically for the cause you pick.', 'Size uygun bir tutarla abone olun; seçtiğiniz alanda kendiliğinden yenilenir.', 'Abonohuni me një shumë që ju përshtatet; rinovohet automatikisht për kauzën që zgjidhni.'],
    ['الباب الذي تُصرف فيه', 'Where it goes', 'Harcanacağı alan', 'Ku shkon'],
    ['تكرار الصدقة', 'Gift frequency', 'Sadaka sıklığı', 'Shpeshtia e dhuratës'],
    ['يبدأ فور الاشتراك', 'Starts when you sign up', 'Kayıt olunca başlar', 'Fillon kur regjistroheni'],
    ['يتجدد بالمبلغ نفسه حتى توقفه أنت · دفع آمن ومحمي', 'Renews at the same amount until you stop it · Secure payment', 'Siz durdurana kadar aynı tutarla yenilenir · Güvenli ödeme', 'Rinovohet me të njëjtën shumë derisa ta ndalni · Pagesë e sigurt'],
    ['صدقتك الشهرية', 'Your monthly gift', 'Aylık sadakanız', 'Dhurata juaj mujore'], ['صدقتك الأسبوعية', 'Your weekly gift', 'Haftalık sadakanız', 'Dhurata juaj javore'],
    ['كيف يعمل البرنامج', 'How it works', 'Program nasıl işler', 'Si funksionon'],
    ['ثلاث خطوات، وتبقى صدقتك مستمرة دون أن تعود إليها.', 'Three steps, and your gift keeps going without you coming back to it.', 'Üç adım; sadakanız siz tekrar uğraşmadan devam eder.', 'Tre hapa, dhe dhurata juaj vazhdon pa u kthyer te ajo.'],
    ['اختر المبلغ والباب', 'Choose the amount and cause', 'Tutarı ve alanı seçin', 'Zgjidhni shumën dhe kauzën'],
    ['حدّد مبلغًا يناسبك، واختر أسبوعيًا أو شهريًا، والباب الذي تريد أن يُصرف فيه.', 'Set an amount that suits you, choose weekly or monthly, and the cause it should go to.', 'Size uygun bir tutar belirleyin, haftalık ya da aylık seçin ve harcanacağı alanı belirleyin.', 'Caktoni një shumë që ju përshtatet, zgjidhni javore ose mujore dhe kauzën.'],
    ['يتجدد تلقائيًا', 'It renews automatically', 'Kendiliğinden yenilenir', 'Rinovohet automatikisht'],
    ['يُخصم المبلغ الأول عند الاشتراك، ثم بالموعد نفسه كل أسبوع أو شهر، ويصلك إيصال بكل دفعة.', 'The first amount is taken when you sign up, then on the same day each week or month, with a receipt every time.', 'İlk tutar kayıtta çekilir, ardından her hafta ya da ay aynı günde; her ödemede makbuz gelir.', 'Shuma e parë merret kur regjistroheni, pastaj në të njëjtën ditë çdo javë ose muaj, me faturë çdo herë.'],
    ['تتابع الأثر', 'Follow the impact', 'Etkiyi takip edin', 'Ndiqni ndikimin'],
    ['نرسل إليك تحديثات من الميدان عن الباب الذي اخترته، وتجد سجل دفعاتك كاملًا في ملفك.', 'We send you field updates on the cause you chose, and your full payment history is in your profile.', 'Seçtiğiniz alandan saha güncellemeleri gönderiyoruz; tüm ödeme geçmişiniz profilinizde.', 'Ju dërgojmë lajme nga terreni për kauzën tuaj, dhe historia e pagesave është në profil.'],
    ['أين يذهب عطاؤك', 'Where your gift goes', 'Bağışınız nereye gider', 'Ku shkon dhurata juaj'],
    ['ستة أبواب يمكنك أن تختار بينها، وكلها تُنفَّذ عبر برامج الوقف القائمة.', 'Six causes to choose from, all delivered through the foundation’s existing programmes.', 'Seçebileceğiniz altı alan; hepsi vakfın mevcut programlarıyla yürütülür.', 'Gjashtë kauza për të zgjedhur, të gjitha përmes programeve ekzistuese të fondacionit.'],
    ['سكن وتعليم ورعاية مستمرة للأطفال الأيتام.', 'Housing, schooling and ongoing care for orphaned children.', 'Yetim çocuklara barınma, eğitim ve sürekli bakım.', 'Strehim, shkollim dhe kujdes i vazhdueshëm për fëmijët jetimë.'],
    ['منح دراسية وترميم مدارس تعيد الطلاب إلى الدراسة.', 'Scholarships and school repairs that bring students back to class.', 'Öğrencileri okula döndüren burslar ve okul onarımları.', 'Bursa dhe riparime shkollash që i kthejnë nxënësit në mësim.'],
    ['سلال غذائية وخبز وحزم شتوية تصل في مواسمها.', 'Food parcels, bread and winter kits delivered in season.', 'Mevsiminde ulaşan gıda kolileri, ekmek ve kış paketleri.', 'Pako ushqimore, bukë dhe pako dimri në kohën e duhur.'],
    ['آبار وسقيا ماء في المناطق الأشد حاجة.', 'Wells and water supply where the need is greatest.', 'En çok ihtiyaç duyulan bölgelerde kuyu ve su.', 'Puse dhe furnizim me ujë aty ku nevoja është më e madhe.'],
    ['حلقات التحفيظ وتأهيل المعلمين والمرشدين.', 'Qur’an circles and training for teachers and guides.', 'Hafızlık halkaları ile öğretmen ve rehber eğitimi.', 'Rrethe Kur’ani dhe trajnim për mësues e udhëzues.'],
    ['يوجّهه الوقف إلى المشروع الأكثر إلحاحًا في حينه.', 'The foundation directs it to the most urgent project at the time.', 'Vakıf onu o an en acil projeye yönlendirir.', 'Fondacioni e drejton te projekti më urgjent në atë kohë.'],
    ['صدقتك تحت تصرفك', 'Your gift, your control', 'Sadakanız sizin kontrolünüzde', 'Dhurata juaj, nën kontrollin tuaj'],
    ['كل شيء تديره من ملفك الشخصي، دون اتصال أو نماذج.', 'You manage everything from your profile — no calls, no forms.', 'Her şeyi profilinizden yönetirsiniz; arama ya da form gerekmez.', 'Gjithçka e menaxhoni nga profili — pa telefonata, pa formularë.'],
    ['تعديل المبلغ أو الباب', 'Change the amount or cause', 'Tutarı ya da alanı değiştirin', 'Ndryshoni shumën ose kauzën'], ['يسري التغيير ابتداءً من الدفعة التالية.', 'The change applies from the next payment.', 'Değişiklik bir sonraki ödemeden itibaren geçerlidir.', 'Ndryshimi vlen nga pagesa e ardhshme.'],
    ['إيقاف مؤقت أو نهائي', 'Pause or stop', 'Geçici ya da kalıcı durdurma', 'Pezulloni ose ndaleni'], ['بضغطة واحدة، ولا تُخصم أي دفعة بعدها.', 'With one tap, and nothing more is taken.', 'Tek dokunuşla; sonrasında ödeme çekilmez.', 'Me një prekje, dhe asgjë më nuk merret.'],
    ['إيصالات وسجل كامل', 'Receipts and full history', 'Makbuzlar ve tam geçmiş', 'Fatura dhe histori e plotë'], ['كل دفعة بإيصال قابل للتحميل.', 'Every payment comes with a downloadable receipt.', 'Her ödeme indirilebilir makbuzla gelir.', 'Çdo pagesë vjen me faturë të shkarkueshme.'],
    ['ما يسأل عنه المتبرعون قبل الاشتراك.', 'What donors ask before signing up.', 'Bağışçıların kayıttan önce sordukları.', 'Çfarë pyesin dhuruesit para regjistrimit.'],
    ['متى يُخصم المبلغ؟', 'When is the amount taken?', 'Tutar ne zaman çekilir?', 'Kur merret shuma?'], ['تُخصم الدفعة الأولى عند الاشتراك، ثم في اليوم نفسه من كل أسبوع أو شهر.', 'The first payment is taken when you sign up, then on the same day each week or month.', 'İlk ödeme kayıtta, ardından her hafta ya da ayın aynı gününde çekilir.', 'Pagesa e parë merret kur regjistroheni, pastaj në të njëjtën ditë çdo javë ose muaj.'],
    ['هل يمكنني إيقاف الاشتراك؟', 'Can I stop my subscription?', 'Aboneliğimi durdurabilir miyim?', 'A mund ta ndal abonimin?'], ['نعم، في أي وقت من ملفك الشخصي، ولا تُخصم أي دفعة بعد الإيقاف.', 'Yes, at any time from your profile, and nothing is taken after you stop.', 'Evet, istediğiniz zaman profilinizden; durdurduktan sonra ödeme çekilmez.', 'Po, në çdo kohë nga profili, dhe asgjë nuk merret pas ndalimit.'],
    ['هل تُحتسب الصدقة الدورية من الزكاة؟', 'Does regular giving count as zakat?', 'Düzenli sadaka zekâttan sayılır mı?', 'A llogaritet dhurimi i rregullt si zekat?'],
    ['حاسبة الزكاة', 'Zakat calculator', 'Zekât hesaplayıcı', 'Llogaritësi i zekatit'],
    ['ثلاثون عامًا من العمل في التعليم وبناء الإنسان', 'Thirty years of work in education and human development', 'Eğitim ve insan inşasında otuz yıl', 'Tridhjetë vjet punë në arsim dhe ndërtimin e njeriut'],
    ['بدأت قصتنا…', 'Our story began…', 'Hikâyemiz başladı…', 'Historia jonë nisi…'],
    ['من أين بدأنا', 'Where we began', 'Nereden başladık', 'Ku filluam'],
    ['وُلدت فكرة الوقف في تركيا، البلد الذي التقت فيه حضارات الشرق والغرب قرونًا، وانتقلت عبره العلوم والأفكار بين الأجيال. انطلقنا من قناعة بسيطة: أن الإنسان هو أساس كل نهضة، وأن بناءه يبدأ من التعليم والمعرفة.', 'The foundation was born in Türkiye, where the civilisations of East and West have met for centuries and knowledge has passed between generations. We started from a simple conviction: people are the basis of every renewal, and building people begins with education.', 'Vakfın fikri, Doğu ile Batı medeniyetlerinin yüzyıllardır buluştuğu ve bilginin nesilden nesle aktığı Türkiye’de doğdu. Basit bir inançla yola çıktık: Her yükselişin temeli insandır ve insanın inşası eğitimle başlar.', 'Ideja e fondacionit lindi në Turqi, ku qytetërimet e Lindjes dhe Perëndimit janë takuar për shekuj. Nisëm nga një bindje e thjeshtë: njeriu është themeli i çdo ringjalljeje, dhe ndërtimi i tij fillon me arsimin.'],
    ['البداية عام 1995', 'The beginning, 1995', 'Başlangıç: 1995', 'Fillimi, 1995'],
    ['قبل ثلاثين عامًا، عام 1995، بدأ الوقف عمله مؤمنًا بأن الشباب المتعلّمين الذين يحملون القيم هم أعمدة المجتمعات الناهضة. فكان التعليم ركيزتنا الأولى، لا بوصفه نقلًا للمعلومات فحسب، بل تكوينًا متكاملًا يجمع العقل والقلب، ويربط العلم بالأخلاق، والتقدّم المادي بالارتقاء الروحي.', 'Thirty years ago, in 1995, the foundation began its work believing that educated young people who hold firm values are the pillars of thriving societies. Education became our first pillar — not merely passing on information, but a whole formation that joins mind and heart, knowledge and character, material progress and spiritual growth.', 'Otuz yıl önce, 1995’te vakıf, değerlere sahip eğitimli gençlerin yükselen toplumların direkleri olduğu inancıyla çalışmaya başladı. Eğitim ilk dayanağımız oldu; yalnızca bilgi aktarımı olarak değil, aklı ve kalbi, ilmi ve ahlakı birleştiren bütüncül bir yetişme olarak.', 'Tridhjetë vjet më parë, në 1995, fondacioni nisi punën duke besuar se të rinjtë e arsimuar me vlera janë shtyllat e shoqërive që përparojnë. Arsimi u bë shtylla jonë e parë — jo vetëm transmetim informacioni, por formim i plotë që bashkon mendjen dhe zemrën, dijen dhe karakterin.'],
    ['تأسيس الأجيال', 'Raising generations', 'Nesillerin yetişmesi', 'Rritja e brezave'],
    ['مرّت أجيال من الشباب ببرامج الوقف، فاكتسبت المعرفة ونشأت على القيم. ومع الأيام صار كثير منهم فاعلين في مجتمعاتهم وقادةً وروّادًا يحملون ما تعلّموه، ولم يقتصر أثرهم على النجاح الأكاديمي أو المهني، بل امتد إلى بناء مجتمعات تقوم على العدالة والشفافية والإحسان.', 'Generations of young people have come through our programmes, gaining knowledge and growing up with values. Over time many became active in their communities as leaders and pioneers, and their impact reached beyond academic or professional success to building communities founded on justice, transparency and kindness.', 'Nesiller boyunca gençler vakfın programlarından geçti, bilgi edindi ve değerlerle yetişti. Zamanla birçoğu toplumunda öncü ve lider oldu; etkileri akademik veya mesleki başarıyla sınırlı kalmayıp adalet, şeffaflık ve ihsan üzerine kurulu toplumlara uzandı.', 'Breza të rinjsh kanë kaluar nëpër programet tona, duke fituar dije dhe duke u rritur me vlera. Me kohë shumë prej tyre u bënë udhëheqës në komunitetet e tyre, dhe ndikimi i tyre shkoi përtej suksesit akademik drejt ndërtimit të komuniteteve mbi drejtësi dhe mirësi.'],
    ['عمل مستمر', 'Continuing the work', 'Süren çalışma', 'Puna vazhdon'],
    ['لم يتوقف العمل عند هذا الحد. فالطلاب الذين نشأوا في رعاية الوقف صاروا اليوم يحملون رسالته، ويجدّدون أساليبها لتواكب تغيّرات العصر مع الحفاظ على ثوابتها. وبهذا اتسعت دائرة العمل لتشمل أفقًا أوسع.', 'The work did not stop there. Students who grew up in the foundation’s care now carry its mission, renewing its methods for a changing world while keeping its principles. And so the work has widened.', 'Çalışma burada durmadı. Vakfın himayesinde yetişen öğrenciler bugün onun misyonunu taşıyor; ilkelerini koruyarak yöntemlerini çağa uygun biçimde yeniliyor. Böylece çalışmanın alanı genişledi.', 'Puna nuk u ndal këtu. Studentët që u rritën nën kujdesin e fondacionit sot mbajnë misionin e tij, duke rinovuar metodat për një botë në ndryshim. Kështu puna u zgjerua.'],
    ['أمام تحديات العالم', 'Facing the world’s challenges', 'Dünyanın sınamaları karşısında', 'Përballë sfidave të botës'],
    ['يعيش العالم اليوم أزمات متتالية: صراعات وحروب، واتساع في رقعة الفقر، وانتشار للتطرف والتعصب. ويرى القائمون على الوقف أن أنجع ما يُواجَه به ذلك هو غرس القيم التي تعيد للمجتمعات أمنها وسلامها، وتحمي الإنسان من الانحراف الفكري والسلوكي.', 'The world faces crisis after crisis: conflict and war, spreading poverty, and rising extremism. We believe the most effective answer is to instil values that restore security and peace to communities and protect people from intellectual and moral drift.', 'Dünya bugün art arda krizler yaşıyor: çatışmalar ve savaşlar, yayılan yoksulluk, aşırılık ve bağnazlık. Vakıf yöneticilerine göre buna en etkili cevap, toplumlara güven ve barışı geri kazandıran değerleri kökleştirmektir.', 'Bota përballet me kriza të njëpasnjëshme: konflikte dhe luftëra, varfëri në rritje dhe ekstremizëm. Besojmë se përgjigjja më e mirë është mbjellja e vlerave që u kthejnë komuniteteve sigurinë dhe paqen.'],
    ['رؤية تتجاوز الحدود', 'A vision beyond borders', 'Sınırları aşan bir vizyon', 'Një vizion përtej kufijve'],
    ['ما زال التعليم الطريق الأنسب لتعزيز هذا الوعي. غير أن الإنسان يحتاج إلى أكثر من العلم ليُبنى بناءً كاملًا: إلى قيم تعزز الروح، وتوجيه يعينه على توظيف معرفته في خدمة مجتمعه. ولذلك توسّع عمل الوقف ليشمل بناء الروح والأخلاق، وتهيئة بيئة مناسبة للتعلّم، وتعزيز التكافل الاجتماعي.', 'Education remains the best way to build this awareness. But people need more than knowledge to grow fully: values that strengthen the spirit, and guidance to put their knowledge to work for their community. So our work grew to include character, good learning environments and social solidarity.', 'Eğitim bu bilinci güçlendirmenin en uygun yolu olmaya devam ediyor. Ancak insanın bütüncül yetişmesi için bilgiden fazlası gerekir: ruhu güçlendiren değerler ve bilgisini toplumu için kullanmasına yardım eden rehberlik. Bu yüzden vakfın çalışmaları ahlakı, uygun öğrenme ortamlarını ve sosyal dayanışmayı da kapsayacak şekilde genişledi.', 'Arsimi mbetet rruga më e mirë për këtë vetëdije. Por njerëzit kanë nevojë për më shumë se dije: vlera që forcojnë shpirtin dhe udhëzim për ta vënë dijen në shërbim të komunitetit. Prandaj puna jonë u zgjerua drejt karakterit, mjediseve të mësimit dhe solidaritetit shoqëror.'],
    ['من تركيا إلى العالم', 'From Türkiye to the world', 'Türkiye’den dünyaya', 'Nga Turqia në botë'],
    ['بدأت رحلة الوقف من تركيا، مهد حضارات عريقة، فصارت جسرًا يربط العالم بالإنسانية والقيم. ولم يعد القائمون على الوقف يرون عملهم محصورًا داخل حدودها، فامتد إلى دول البلقان وآسيا الوسطى وغيرها، ليكون الوقف اليوم أحد جسور التعاون والتفاهم وتعزيز الروابط بين الشعوب.', 'The foundation’s journey began in Türkiye, cradle of ancient civilisations, and became a bridge linking the world through shared humanity and values. Its work now reaches the Balkans, Central Asia and beyond, making the foundation one of the bridges of cooperation and understanding between peoples.', 'Vakfın yolculuğu köklü medeniyetlerin beşiği Türkiye’de başladı ve dünyayı insanlık ve değerlerle birbirine bağlayan bir köprüye dönüştü. Çalışmaları bugün Balkanlar’a, Orta Asya’ya ve ötesine uzanıyor; vakıf halklar arasında iş birliği ve anlayışın köprülerinden biri.', 'Rrugëtimi i fondacionit nisi në Turqi, djep qytetërimesh të lashta, dhe u bë urë që lidh botën me njerëzimin dhe vlerat. Sot puna shtrihet në Ballkan, Azinë Qendrore e më tej, duke e bërë fondacionin një urë bashkëpunimi mes popujve.'],
    ['اعتُمد وقفنا رسميًا وبدأ عمله بموافقة المديرية العامة للأوقاف في الجمهورية التركية بتاريخ 03/11/1995، تحت رقم السجل 3673.', 'Our foundation was officially registered and began its work with the approval of the General Directorate of Foundations of the Republic of Türkiye on 03/11/1995, under registry number 3673.', 'Vakfımız, 03/11/1995 tarihinde Türkiye Cumhuriyeti Vakıflar Genel Müdürlüğü onayıyla 3673 sicil numarasıyla resmen kurulmuş ve faaliyetlerine başlamıştır.', 'Fondacioni ynë u regjistrua zyrtarisht dhe filloi punën me miratimin e Drejtorisë së Përgjithshme të Fondacioneve të Republikës së Turqisë më 03/11/1995, me numër regjistri 3673.'],
    ['وقف التضامن الاجتماعي مؤسسة وقفية تركية مقرّها إسطنبول. نعمل على تفعيل دور روّاد المجتمع من الدعاة والشباب والمؤثرين، ونرعى المبادرات والمشاريع التي تُرسّخ القيم في حياة الناس وتنشرها.', 'Toplumsal Dayanışma Vakfı is a Turkish foundation based in Istanbul. We strengthen the role of community leaders — educators, young people and people of influence — and support initiatives that root values in everyday life.', 'Toplumsal Dayanışma Vakfı, İstanbul merkezli bir Türk vakfıdır. Eğitimciler, gençler ve kanaat önderleri gibi toplum öncülerinin rolünü güçlendiriyor, değerleri hayata taşıyan girişimleri destekliyoruz.', 'Toplumsal Dayanışma Vakfı është një fondacion turk me seli në Stamboll. Forcojmë rolin e udhëheqësve të komunitetit — edukatorëve, të rinjve dhe personave me ndikim — dhe mbështesim nisma që rrënjosin vlerat në jetën e përditshme.'],
    ['نفعّل دور روّاد المجتمع ونعزّزه، ونرعى المبادرات والمشاريع التي تُرسّخ القيم وتنشرها، سعيًا إلى مجتمع متماسك يواجه تحدياته بأخلاقه.', 'We empower community leaders and support initiatives that spread values, working towards a cohesive society that meets its challenges with integrity.', 'Toplum öncülerini güçlendiriyor, değerleri yayan girişimleri destekliyor, zorluklarına ahlakıyla karşılık veren bütünleşik bir toplum için çalışıyoruz.', 'Fuqizojmë udhëheqësit e komunitetit dhe mbështesim nisma që përhapin vlerat, për një shoqëri të bashkuar që i përballon sfidat me integritet.'],
    ['أن نكون الجهة الرائدة في تمكين روّاد المجتمع لتعزيز القيم.', 'To lead in empowering community leaders to strengthen values.', 'Değerleri güçlendirmek için toplum öncülerini destekleyen öncü kurum olmak.', 'Të jemi të parët në fuqizimin e udhëheqësve të komunitetit për forcimin e vlerave.'],
    ['رعاية الأفراد وتمكينهم، وفي مقدّمتهم قادة المجتمع والشباب والأسر، وتعزيز نموّهم الأخلاقي والفكري بالتعليم والمبادرات القائمة على القيم.', 'To care for and empower people — first among them community leaders, young people and families — and support their moral and intellectual growth through education and values-based initiatives.', 'Başta toplum önderleri, gençler ve aileler olmak üzere bireyleri desteklemek; eğitim ve değer temelli girişimlerle ahlaki ve fikrî gelişimlerini güçlendirmek.', 'Të kujdesemi dhe të fuqizojmë njerëzit — në radhë të parë udhëheqësit, të rinjtë dhe familjet — dhe të mbështesim rritjen e tyre morale e intelektuale përmes arsimit.'],
    ['نبني شراكات مع مؤسسات وأفراد يشاركوننا الرؤية، ونعمل معهم على حلول للتحديات المجتمعية تعزّز ثقافة التعاون والمسؤولية المشتركة.', 'We build partnerships with institutions and individuals who share our vision, working together on solutions that foster cooperation and shared responsibility.', 'Vizyonumuzu paylaşan kurum ve kişilerle ortaklıklar kuruyor, iş birliğini ve ortak sorumluluğu güçlendiren çözümler üretiyoruz.', 'Ndërtojmë partneritete me institucione dhe individë që ndajnë vizionin tonë, duke punuar bashkë për zgjidhje që nxisin bashkëpunimin.'],
    ['تبرعاتكم تموّل مشاريع التعليم والإغاثة والرعاية التي ننفّذها، وتصل إلى المحتاجين في أكثر من عشرين دولة ومجتمعًا.', 'Your donations fund our education, relief and care projects, reaching people in need in more than twenty countries and communities.', 'Bağışlarınız eğitim, yardım ve bakım projelerimizi finanse eder; yirmiden fazla ülke ve topluluktaki ihtiyaç sahiplerine ulaşır.', 'Dhuratat tuaja financojnë projektet tona të arsimit, ndihmës dhe kujdesit, duke arritur te nevojtarët në më shumë se njëzet vende.'],
    ['التطوع معنا وقتٌ وجهدٌ يصلان إلى من يحتاجهما. انضم إلى فرقنا الميدانية وساهم في نشر قيم التضامن.', 'Volunteering with us puts your time and effort where they are needed. Join our field teams and help spread solidarity.', 'Bizimle gönüllülük, zamanınızı ve emeğinizi ihtiyaç olan yere taşır. Saha ekiplerimize katılın.', 'Vullnetarizmi me ne e çon kohën dhe përpjekjen tuaj aty ku nevojiten. Bashkohuni me ekipet tona në terren.'],
    ['مسار التنقل', 'Breadcrumb', 'İçerik yolu', 'Shtegu i navigimit'], ['أقسام من نحن', 'About sections', 'Hakkımızda bölümleri', 'Seksionet rreth nesh'],
    ['فريق الوقف في الميدان', 'Foundation team in the field', 'Sahadaki vakıf ekibi', 'Ekipi i fondacionit në terren'], ['كيف تشارك', 'How to take part', 'Nasıl katılırsınız', 'Si të merrni pjesë'],
    ['شاهد قصص المستفيدين من برامجنا في التعليم وبناء الإنسان والتكافل الاجتماعي على قناتنا في يوتيوب.', 'Watch stories from people our education and social-solidarity programmes have reached, on our YouTube channel.', 'Eğitim ve sosyal dayanışma programlarımızdan yararlananların hikâyelerini YouTube kanalımızda izleyin.', 'Shikoni historitë e përfituesve të programeve tona në kanalin tonë në YouTube.'],
    ['من مشاريع الوقف القائمة', 'From our live projects', 'Süren projelerimizden', 'Nga projektet tona në vazhdim'],
    ['مشروع ترميم مدرسة العتيبة للبنين — سوريا', 'Al-Atibah Boys’ School restoration — Syria', 'Utaybe Erkek Okulu restorasyonu — Suriye', 'Restaurimi i shkollës së djemve Al-Atibah — Siri'],
    ['ترميم مدرسة العتيبة للبنين — سوريا', 'Al-Atibah Boys’ School restoration — Syria', 'Utaybe Erkek Okulu restorasyonu — Suriye', 'Restaurimi i shkollës Al-Atibah — Siri'],
    ['ترميم مدرسة العتيبة للبنين يعيد نحو 1,000 طالب إلى مقاعد الدراسة قرب بيوتهم، ويتيح العمل لنحو 40 معلمًا وإداريًا.', 'Restoring Al-Atibah Boys’ School returns about 1,000 pupils to classrooms near home and provides work for around 40 teachers and staff.', 'Utaybe Erkek Okulu’nun restorasyonu yaklaşık 1.000 öğrenciyi evlerine yakın sıralara döndürüyor, 40 öğretmen ve idareciye iş sağlıyor.', 'Restaurimi i shkollës Al-Atibah kthen rreth 1,000 nxënës në klasa pranë shtëpisë dhe krijon punë për rreth 40 mësues e staf.'],
    ['شاهد القصة على يوتيوب', 'Watch the story on YouTube', 'Hikâyeyi YouTube’da izleyin', 'Shikojeni historinë në YouTube'], ['أعمال الترميم في مدرسة العتيبة', 'Restoration work at Al-Atibah school', 'Utaybe okulundaki restorasyon', 'Punimet e restaurimit në shkollën Al-Atibah'],
    ['نسعد بأسئلتكم واقتراحاتكم، ونردّ على كل رسالة.', 'We welcome your questions and suggestions, and we reply to every message.', 'Soru ve önerilerinizi memnuniyetle karşılıyor, her mesajı yanıtlıyoruz.', 'Mirëpresim pyetjet dhe sugjerimet tuaja dhe u përgjigjemi të gjitha mesazheve.'],
    ['التبرع والإيصالات', 'Donations and receipts', 'Bağışlar ve makbuzlar', 'Dhurimet dhe faturat'], ['الإعلام', 'Media', 'Basın', 'Media'], ['قرأت', 'I have read the', 'Okudum:', 'Kam lexuar'],
    ['نص الإفصاح وفق قانون حماية البيانات الشخصية (KVKK)', 'data protection notice (KVKK)', 'KVKK Aydınlatma Metni', 'njoftimin për mbrojtjen e të dhënave (KVKK)'],
    ['، وأوافق على معالجة بياناتي للرد على رسالتي.', ' and agree to my data being processed to answer my message.', ' ve mesajıma yanıt verilmesi için verilerimin işlenmesini kabul ediyorum.', ' dhe pranoj përpunimin e të dhënave për t’iu përgjigjur mesazhit tim.'],
    ['منذ عام 1995 نعمل من إسطنبول على غرس القيم وبناء الإنسان، بالتعليم والتأهيل والرعاية والتكافل، في تركيا وأكثر من عشرين دولة ومجتمعًا حول العالم.', 'Since 1995, from Istanbul, we have worked to instil values and build people — through education, training, care and solidarity — in Türkiye and more than twenty countries and communities.', '1995’ten bu yana İstanbul’dan; eğitim, rehabilitasyon, bakım ve dayanışmayla Türkiye’de ve yirmiden fazla ülkede değerleri ve insanı inşa ediyoruz.', 'Që nga viti 1995, nga Stambolli, punojmë për të mbjellë vlera dhe për të ndërtuar njeriun — përmes arsimit, kujdesit dhe solidaritetit — në Turqi dhe në më shumë se njëzet vende.'],
    ['نرمّم مدارس ومساجد في سوريا ليستقبل أهلها من جديد.', 'We are restoring schools and mosques in Syria so their communities can return.', 'Suriye’de okul ve camileri halkına yeniden kavuşturmak için onarıyoruz.', 'Rindërtojmë shkolla dhe xhami në Siri që komunitetet të kthehen.'],
    ['ترسيخ الأخلاق والمعرفة التي تنتقل من الفرد إلى مجتمعه.', 'Rooting character and knowledge that pass from person to community.', 'Bireyden topluma geçen ahlak ve bilgiyi kökleştirmek.', 'Rrënjosja e karakterit dhe dijes që kalon nga individi te komuniteti.'],
    ['تعليم متكافئ للفئات الأضعف، ورعاية وبيئات تتيح للإنسان أن ينمو.', 'Equal education for the most vulnerable, with care and settings where people can grow.', 'En kırılgan kesimler için eşit eğitim; insanın gelişebileceği bakım ve ortamlar.', 'Arsim i barabartë për më të pambrojturit, me kujdes dhe mjedise ku njerëzit rriten.'],
    ['مهارات تفتح أبواب العمل، وقدرات تدعم القيادة والمشاركة.', 'Skills that open doors to work, and abilities that support leadership and participation.', 'İş kapılarını açan beceriler, liderliği ve katılımı destekleyen yetkinlikler.', 'Aftësi që hapin dyert e punës dhe mbështesin udhëheqjen.'],
    ['تكافل في تفاصيل الحياة: غذاء وماء ورعاية تصل إلى المحتاجين في مواسمها.', 'Solidarity in daily life: food, water and care reaching people in need when it matters.', 'Hayatın içinde dayanışma: gıda, su ve bakım ihtiyaç sahiplerine zamanında ulaşır.', 'Solidaritet në jetën e përditshme: ushqim, ujë dhe kujdes që arrijnë te nevojtarët në kohë.'],
    ['تم جمع', 'Raised', 'Toplanan', 'Mbledhur'], ['الهدف', 'Goal', 'Hedef', 'Objektivi'],
    ['زاد المرشدين', 'Provision for Guides', 'Rehberlerin Azığı', 'Pajisja e udhëzuesve'], ['ترميم مدرسة الإبداع', 'Al-Ibdaa School restoration', 'İbda Okulu restorasyonu', 'Restaurimi i shkollës Al-Ibdaa'],
    ['تأهيل المساجد المتضررة وتجهيزها لرمضان', 'Rehabilitating damaged mosques for Ramadan', 'Hasarlı camilerin Ramazan’a hazırlanması', 'Rehabilitimi i xhamive të dëmtuara për Ramazan'],
    ['ترميم مسجد آل ياسر — سوريا', 'Al Yasir Mosque restoration — Syria', 'Âl-i Yâsir Camii restorasyonu — Suriye', 'Restaurimi i xhamisë Al Jasir — Siri'],
    ['ترميم مدرسة زاكية للبنات وتأهيلها', 'Zakiyah Girls’ School restoration', 'Zakiye Kız Okulu restorasyonu', 'Restaurimi i shkollës së vajzave Zakije'],
    ['بناء دار أيتام — سوريا', 'Building an orphanage — Syria', 'Yetimhane inşası — Suriye', 'Ndërtimi i një jetimoreje — Siri'],
    ['ترميم مدرسة الأمل وتأهيلها — سوريا', 'Al-Amal School restoration — Syria', 'Emel Okulu restorasyonu — Suriye', 'Restaurimi i shkollës Al-Amal — Siri'],
    ['دعم رائد القيم', 'Values Pioneer support', 'Değerler Öncüsü desteği', 'Mbështetje për Pionierin e Vlerave'],
    ['تصفية البرامج', 'Filter programmes', 'Programları filtrele', 'Filtro programet'], ['أعمال ترميم ضمن حملة أمل', 'Restoration work in the Hope campaign', 'Umut kampanyası restorasyon çalışmaları', 'Punime restaurimi në fushatën Shpresë'], ['مبلغ التبرع', 'Donation amount', 'Bağış tutarı', 'Shuma e dhurimit'],
    ['نصل إلى المجتمعات المحتاجة في أكثر من عشرين دولة، ونبقى قريبين من الإنسان أينما كان.', 'We reach communities in need in more than twenty countries, staying close to people wherever they are.', 'Yirmiden fazla ülkede ihtiyaç sahibi topluluklara ulaşıyor, insanın olduğu her yerde yanında oluyoruz.', 'Arrijmë komunitete në nevojë në më shumë se njëzet vende, pranë njerëzve kudo që janë.'],
    ['أرقام من كتالوج إنجازات الوقف 2026، ولكل رقم مصدره.', 'Figures from the Foundation’s 2026 achievements catalogue, each with its source.', 'Vakfın 2026 faaliyet kataloğundan rakamlar; her birinin kaynağı var.', 'Shifra nga katalogu i arritjeve 2026, secila me burimin e vet.'],
    ['صور من مشاريع الوقف كما وثّقها فريقنا، وعلى كل لافتة اسم المشروع ومكانه وعامه.', 'Photos of our projects as documented by our team; every banner shows the project, place and year.', 'Ekibimizin belgelediği proje fotoğrafları; her afişte proje adı, yeri ve yılı yazar.', 'Foto nga projektet tona të dokumentuara nga ekipi; çdo banner tregon projektin, vendin dhe vitin.'],
    ['ترميم المساجد — سوريا 2025', 'Mosque restoration — Syria 2025', 'Cami restorasyonu — Suriye 2025', 'Restaurim xhamish — Siri 2025'], ['سقيا الماء — غزة 2025', 'Water supply — Gaza 2025', 'Su kuyusu — Gazze 2025', 'Furnizim me ujë — Gaza 2025'],
    ['توزيع المصاحف — أفريقيا 2025', 'Qur’an distribution — Africa 2025', 'Mushaf dağıtımı — Afrika 2025', 'Shpërndarje Kur’anësh — Afrikë 2025'], ['توزيع الخبز — سوريا 2025', 'Bread distribution — Syria 2025', 'Ekmek dağıtımı — Suriye 2025', 'Shpërndarje buke — Siri 2025'],
    ['زاد المرشدين — سوريا 2025', 'Provision for Guides — Syria 2025', 'Rehberlerin Azığı — Suriye 2025', 'Pajisja e udhëzuesve — Siri 2025'], ['المشاريع الرمضانية — غزة', 'Ramadan projects — Gaza', 'Ramazan projeleri — Gazze', 'Projektet e Ramazanit — Gaza'],
    ['إفطار صائم — إندونيسيا 2025', 'Iftar meals — Indonesia 2025', 'İftar — Endonezya 2025', 'Iftar — Indonezi 2025'], ['مشاريع الأضاحي — غزة 2025', 'Qurbani projects — Gaza 2025', 'Kurban projeleri — Gazze 2025', 'Projektet e kurbanit — Gaza 2025'],
    ['سوريا', 'Syria', 'Suriye', 'Siria'], ['فلسطين', 'Palestine', 'Filistin', 'Palestina'], ['اليمن', 'Yemen', 'Yemen', 'Jemeni'], ['مصر', 'Egypt', 'Mısır', 'Egjipti'], ['تركيا', 'Türkiye', 'Türkiye', 'Turqia'], ['ألبانيا', 'Albania', 'Arnavutluk', 'Shqipëria'], ['كوسوفا', 'Kosovo', 'Kosova', 'Kosova'], ['مقدونيا', 'North Macedonia', 'Kuzey Makedonya', 'Maqedonia e Veriut'], ['إندونيسيا', 'Indonesia', 'Endonezya', 'Indonezia'], ['بنغلاديش', 'Bangladesh', 'Bangladeş', 'Bangladeshi'], ['الروهينغا', 'Rohingya', 'Arakanlılar', 'Rohingja'], ['أوزبكستان', 'Uzbekistan', 'Özbekistan', 'Uzbekistani'], ['طاجيكستان', 'Tajikistan', 'Tacikistan', 'Taxhikistani'], ['السودان', 'Sudan', 'Sudan', 'Sudani'], ['تشاد', 'Chad', 'Çad', 'Çadi'], ['الكاميرون', 'Cameroon', 'Kamerun', 'Kameruni'], ['توغو', 'Togo', 'Togo', 'Togo'], ['بوركينا فاسو', 'Burkina Faso', 'Burkina Faso', 'Burkina Faso'], ['الصومال', 'Somalia', 'Somali', 'Somalia'], ['بنين', 'Benin', 'Benin', 'Benini'], ['السنغال', 'Senegal', 'Senegal', 'Senegali'], ['تنزانيا', 'Tanzania', 'Tanzanya', 'Tanzania'],
    ['حملة أمل: نرمّم مدارس ومساجد في سوريا لتستقبل أهلها من جديد', 'Hope campaign: restoring schools and mosques in Syria so their communities can return', 'Umut kampanyası: Suriye’de okul ve camileri yeniden yaşanabilir kılıyoruz', 'Fushata Shpresë: rindërtojmë shkolla dhe xhami në Siri që banorët të kthehen'],
    ['حملة أمل: نرمّم مدارس سوريا', 'Hope campaign: rebuilding Syria’s schools', 'Umut kampanyası: Suriye okulları', 'Fushata Shpresë: shkollat e Sirisë'],
    ['ساهم في الحملة', 'Give to the campaign', 'Kampanyaya katkı', 'Kontribuo në fushatë'],
    ['معاً..', 'Together,', 'Birlikte', 'Së bashku,'],
    ['نصنع غداً أفضل', 'a better tomorrow', 'daha iyi bir yarın', 'një e nesërme më e mirë'],
    ['من أجل مجتمعات أكثر عدلاً ورحمة وكرامة', 'For fairer, kinder communities that uphold dignity', 'Daha adil, merhametli ve onurlu toplumlar için', 'Për komunitete më të drejta, më të mëshirshme dhe me dinjitet'],
    ['مجتمعات آمنة بقيم سامية نغرس الأمل، ونصنع مجتمعات تزدهر بالعطاء والأمان.', 'Guided by enduring values, we plant hope and help communities thrive through giving and security.', 'Yüce değerlerle umut ekiyor, iyilik ve güvenle gelişen toplumlar kuruyoruz.', 'Me vlera fisnike mbjellim shpresë dhe ndihmojmë komunitetet të lulëzojnë me bamirësi dhe siguri.'],
    ['رقم السجل الوقفي', 'Foundation registry no.', 'Vakıf sicil no.', 'Nr. i regjistrit'],
    ['دولة ومجتمعًا', 'countries and communities', 'ülke ve topluluk', 'vende dhe komunitete'],
    ['دولة ومجتمعًا حول العالم', 'countries and communities worldwide', 'dünya genelinde ülke ve topluluk', 'vende dhe komunitete në botë'],
    ['عام التأسيس', 'Year founded', 'Kuruluş yılı', 'Viti i themelimit'],
    ['دائرة الخير', 'The circle of good', 'İyilik halkası', 'Rrethi i së mirës'],
    ['تكبر بكم', 'grows with you', 'sizinle büyür', 'rritet me ju'],
    ['اختر المبلغ والوجهة', 'Choose an amount and a cause', 'Tutar ve alan seçin', 'Zgjidhni shumën dhe kauzën'],
    ['خيارات التبرع', 'Donation options', 'Bağış seçenekleri', 'Opsionet e dhurimit'],
    ['وجّه تبرعك إلى', 'Direct your gift to', 'Bağışınızı yönlendirin', 'Drejtojeni dhuratën te'],
    ['الصدقة', 'Sadaqah', 'Sadaka', 'Sadaka'],
    ['بناء دار أيتام في سوريا', 'Building an orphanage in Syria', 'Suriye’de yetimhane inşası', 'Ndërtimi i një jetimoreje në Siri'],
    ['تسديد ديون الغارمين في أفريقيا', 'Settling family debts in Africa', 'Afrika’da borçlu ailelere destek', 'Shlyerja e borxheve të familjeve në Afrikë'],
    ['المبلغ', 'Amount', 'Tutar', 'Shuma'],
    ['التكرار', 'Frequency', 'Sıklık', 'Shpeshtia'],
    ['دفع آمن ومحمي', 'Secure, protected payment', 'Güvenli ödeme', 'Pagesë e sigurt'],
    ['مجتمعات أقوى .. لإنسان', 'Stronger communities,', 'Daha güçlü toplumlar,', 'Komunitete më të forta,'],
    ['أكثر كرامة', 'greater dignity', 'daha onurlu insanlar', 'dinjitet më i madh'],
    ['مستفيد من ترميم المساجد', 'beneficiaries of mosque restoration', 'cami restorasyonundan yararlanan', 'përfitues nga restaurimi i xhamive'],
    ['مستفيد من السلال الغذائية', 'food parcel beneficiaries', 'gıda kolisinden yararlanan', 'përfitues të pakove ushqimore'],
    ['طالب في برنامج المنح التعليمية', 'students on our scholarship programme', 'burs programındaki öğrenci', 'studentë në programin e bursave'],
    ['أرقام مختارة من كتالوج إنجازات الوقف 2026، لكل رقم وحدته', 'Selected figures from the Foundation’s 2026 achievements catalogue', 'Vakfın 2026 faaliyet kataloğundan seçilmiş rakamlar', 'Shifra të zgjedhura nga katalogu i arritjeve 2026'],
    ['برامجنا لبناء حياة أفضل', 'Programmes for a better life', 'Daha iyi bir hayat için programlar', 'Programe për një jetë më të mirë'],
    ['لبناء حياة أفضل', 'for a better life', 'daha iyi bir hayat için', 'për një jetë më të mirë'],
    ['نعمل في مجالات متعددة لتلبية الاحتياجات الإنسانية الأساسية.', 'We work across several fields to meet essential human needs.', 'Temel insani ihtiyaçları karşılamak için birçok alanda çalışıyoruz.', 'Punojmë në disa fusha për të plotësuar nevojat themelore njerëzore.'],
    ['استكشف جميع البرامج ←', 'Explore all programmes →', 'Tüm programları keşfedin →', 'Zbuloni të gjitha programet →'],
    ['فلنكن أملهم.. فتضامننا مستقبلهم', 'Let us be their hope; our solidarity is their future', 'Umutları olalım; dayanışmamız gelecekleridir', 'Të jemi shpresa e tyre; solidariteti ynë është e ardhmja e tyre'],
    ['المسار 01', 'Path 01', 'Yol 01', 'Rruga 01'], ['المسار 02', 'Path 02', 'Yol 02', 'Rruga 02'], ['المسار 03', 'Path 03', 'Yol 03', 'Rruga 03'], ['المسار 04', 'Path 04', 'Yol 04', 'Rruga 04'],
    ['تعلّمٌ يرسّخ الأخلاق، ومعرفة تنتقل من الفرد إلى مجتمعه', 'Learning that roots good character, and knowledge that passes from person to community', 'Ahlakı kökleştiren eğitim, bireyden topluma geçen bilgi', 'Mësim që rrënjos karakterin dhe dije që kalon nga individi te komuniteti'],
    ['تعليم متكافئ للفئات الأضعف، ورعاية تمنح الإنسان مساحة للنمو', 'Equal education for the most vulnerable, and care that gives people room to grow', 'En kırılgan kesimler için eşit eğitim ve gelişime alan açan bakım', 'Arsim i barabartë për më të pambrojturit dhe kujdes që u jep hapësirë për t’u rritur'],
    ['مهارات تفتح فرص العمل، وقدرات تدعم القيادة والمشاركة', 'Skills that open jobs, and abilities that support leadership and participation', 'İş fırsatları açan beceriler, liderliği ve katılımı destekleyen yetkinlikler', 'Aftësi që hapin vende pune dhe mbështesin udhëheqjen dhe pjesëmarrjen'],
    ['التكافل في تفاصيل الحياة: غذاء وماء ورعاية عبر المواسم', 'Solidarity in daily life: food, water and care through every season', 'Günlük hayatta dayanışma: her mevsim gıda, su ve bakım', 'Solidaritet në jetën e përditshme: ushqim, ujë dhe kujdes në çdo stinë']
  ];
  var IDX = { en: 1, tr: 2, sq: 3 };
  var LANG = 'ar';
  try { LANG = localStorage.getItem('tv_lang') || 'ar'; } catch (e) {}
  window.tvI18n = {
    get: function () { return LANG; },
    t: function (s) { return s; },
    set: function (code) {
      try { localStorage.setItem('tv_lang', code); } catch (e) {}
      location.reload();
    }
  };
  if (!IDX[LANG]) return;
  var col = IDX[LANG];
  var map = Object.create(null);
  T = T.filter(function (r) { return r && r.length === 4; });
  for (var i = 0; i < T.length; i++) map[T[i][0].trim()] = T[i][col];
  // Scripts that set text at runtime look strings up here (identity in Arabic).
  window.tvI18n.t = function (s) { var v = map[String(s).trim()]; return v == null ? s : v; };
  var ATTRS = ['placeholder', 'aria-label', 'title'];
  // Arabic writes tanween two ways (اً / ًا). Normalise both sides so one row covers both.
  function norm(s) { return s.replace(/\s+/g, ' ').trim().replace(/اً/g, 'ًا'); }
  for (var key in map) { var nk = norm(key); if (nk !== key) map[nk] = map[key]; }
  var NAMES = { en: 'English', tr: 'Türkçe', sq: 'Shqip' };
  function tr(s) {
    var k = norm(s);
    if (!k) return null;
    if (map[k] !== undefined) return map[k];
    // Counted labels ("7 مشاريع", "4 برامج").
    var m = k.match(/^(\d+) (مشاريع|مشروعًا|برامج)$/);
    if (m) {
      var W = { en: ['projects', 'programmes'], tr: ['proje', 'program'], sq: ['projekte', 'programe'] }[LANG];
      return m[1] + ' ' + (m[2] === 'برامج' ? W[1] : W[0]);
    }
    var p = k.match(/^(\d+)% مكتمل$/);
    if (p) return p[1] + '% ' + { en: 'complete', tr: 'tamamlandı', sq: 'përfunduar' }[LANG];
    // Stat chips ("+50,000 مستفيد").
    var st = k.match(/^\+([\d,]+) (.+)$/);
    if (st) {
      var U = {
        'مستفيد': ['beneficiaries', 'yararlanan', 'përfitues'], 'أسرة': ['families', 'aile', 'familje'], 'طالب': ['students', 'öğrenci', 'studentë'],
        'معلم': ['teachers', 'öğretmen', 'mësues'], 'حلقة': ['circles', 'halka', 'rrethe'], 'مربية': ['carers', 'eğitimci', 'edukatore'],
        'طفل': ['children', 'çocuk', 'fëmijë'], 'نسخة': ['copies', 'nüsha', 'kopje'], 'شاب وفتاة': ['young people', 'genç', 'të rinj'],
        'يتيم شهريًا': ['orphans a month', 'yetim (aylık)', 'jetimë në muaj'], 'طالب وطالبة سنويًا': ['students a year', 'öğrenci (yıllık)', 'nxënës në vit'],
        'طالب وصل إليهم الأثر': ['students reached', 'öğrenciye ulaşıldı', 'nxënës të arritur']
      }[st[2]];
      if (U) return '+' + st[1] + ' ' + U[IDX[LANG] - 1];
    }
    return null;
  }
  // Headings split across nodes («برامجنا <br> لبناء حياة أفضل») match as a whole element first.
  var WHOLE = 'h1,h2,h3,h4,p,a,button,small,label,span,b,li';
  function wholeEl(root) {
    var els = root.querySelectorAll ? root.querySelectorAll(WHOLE) : [];
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.closest('[data-no-i18n]') || el.dataset.i18nDone) continue;
      var kids = el.children, simple = true;
      // A child that holds markup (an <i> wrapping an icon SVG) is not text, and
      // replacing textContent would wipe it — leave those to the per-text-node pass.
      for (var c = 0; c < kids.length; c++) { var tg = kids[c].tagName; if ((tg !== 'BR' && tg !== 'SPAN' && tg !== 'B' && tg !== 'I' && tg !== 'EM') || kids[c].children.length) { simple = false; break; } }
      if (!simple || !kids.length) continue;
      var t = tr(el.textContent);
      if (t !== null) { el.textContent = t; el.dataset.i18nDone = '1'; }
    }
  }
  function walk(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) {
      var p = n.parentElement;
      if (!p || p.closest('script,style,[data-no-i18n]')) continue;
      var t = tr(n.nodeValue);
      if (t !== null) n.nodeValue = n.nodeValue.replace(/\S[\s\S]*\S|\S/, t);
      // In LTR, a leading "+" on figures and the RTL "forward" arrow read backwards.
      else if (/^\s*\+[\d,.]+\s*$/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/\+([\d,.]+)/, '$1+');
      else if (n.nodeValue.indexOf('←') !== -1 && !/[\u0600-\u06FF]/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/←/g, '→');
    }
    var els = root.querySelectorAll ? root.querySelectorAll('[placeholder],[aria-label],[title],[dir="rtl"]') : [];
    for (var j = 0; j < els.length; j++) {
      var el = els[j];
      if (el.getAttribute('dir') === 'rtl') el.setAttribute('dir', 'ltr');
      for (var a = 0; a < ATTRS.length; a++) {
        var v = el.getAttribute(ATTRS[a]);
        if (v) { var tv = tr(v); if (tv !== null) el.setAttribute(ATTRS[a], tv); }
      }
    }
  }
  function run() {
    document.documentElement.lang = LANG;
    document.documentElement.dir = 'ltr';
    wholeEl(document.body);
    walk(document.body);
    var lbl = document.querySelectorAll('.tv-lang .tv-dd-label');
    for (var i = 0; i < lbl.length; i++) if (lbl[i].textContent !== NAMES[LANG]) lbl[i].textContent = NAMES[LANG];
    // The visible language pill carries its own text node; show the active language there too.
    var pills = document.querySelectorAll('.tv-lang, .tv-mrail-btn[data-dropdown="tvLangMenu"]');
    for (var q = 0; q < pills.length; q++) {
      var tw = document.createTreeWalker(pills[q], NodeFilter.SHOW_TEXT, null), tn;
      while ((tn = tw.nextNode())) { var v = norm(tn.nodeValue); if (v === 'العربية' || v === 'English' || v === 'Türkçe' || v === 'Shqip') tn.nodeValue = NAMES[LANG]; }
    }
  }
  // Latin labels are longer and set taller than Arabic, so LTR gets its own nav
  // density and hero line box. Partners/Stories stay reachable in the drawer.
  var css = document.createElement('style');
  css.textContent =
    'html[dir=ltr] .tv-nav{gap:14px}html[dir=ltr] .tv-nav a{font-size:13px;letter-spacing:-.1px}' +
    '@media (max-width:1180px){html[dir=ltr] .tv-nav{gap:10px}html[dir=ltr] .tv-nav a{font-size:12.5px}html[dir=ltr] .tv-nav>a[data-key=partners],html[dir=ltr] .tv-nav>a[data-key=stories]{display:none}}' +
    '@media (max-width:1000px){html[dir=ltr] .tv-nav>a[data-key=contact]{display:none}}' +
    'html[dir=ltr] .hero h1{line-height:1.08;margin-bottom:18px}' +
    // Arabic hero lines are nowrap to hold one line; Latin translations are longer.
    'html[dir=ltr] .th-body,html[dir=ltr] .th-sub,html[dir=ltr] .th-copy p{white-space:normal;text-wrap:pretty}' +
    // Hero in Latin reading order is a true mirror of the Arabic layout: the donate
    // circle leads on the left over the navy side, the copy follows on the right.
    // The grid already follows direction; only the physically placed layers flip.
    'html[dir=ltr] .th-fade{background:linear-gradient(to top,rgba(3,26,54,.4) 0%,rgba(3,26,54,0) 38%),linear-gradient(to left,rgba(3,26,54,.1) 0%,rgba(3,26,54,.22) 50%,rgba(3,26,54,.35) 100%)}' +
    '@media (min-width:900px){html[dir=ltr] .th-fade::before{right:auto;left:0;background:radial-gradient(76.9% 140% at 0% 50%,#031a36 0%,#031a36 82%,rgba(3,26,54,.7) 96%,rgba(3,26,54,0) 118%)}' +
    'html[dir=ltr] .th-fade::after{background:radial-gradient(34% 70% at 8% 45%,rgba(10,63,120,.55),transparent 72%)}}' +
    'html[dir=ltr] .th-orb{right:auto;left:-300px}' +
    'html[dir=ltr] .th-script--b{right:auto;left:-46px;transform:rotate(6deg)}' +
    'html[dir=ltr] .th-script--a{left:auto;right:4%}';
  document.head.appendChild(css);
  var queued = false;
  function schedule() { if (queued) return; queued = true; setTimeout(function () { queued = false; run(); }, 60); }
  function boot() {
    run();
    new MutationObserver(function (list) {
      for (var i = 0; i < list.length; i++) if (list[i].addedNodes.length || list[i].type === 'characterData') { schedule(); return; }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
