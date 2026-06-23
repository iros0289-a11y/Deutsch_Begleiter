const STORAGE_KEY = "deutsch-b1-begleiter-progress-v1";

const views = [
  ["dashboard", "Start"],
  ["practice", "Übungen"],
  ["letters", "Briefe"],
  ["reading", "Lesen & Aussprache"],
  ["dialogues", "Dialoge"],
  ["listening", "Hören"],
  ["speaking", "Sprechen & Bilder"],
  ["exams", "DTZ-Prüfungen"],
  ["lid", "Leben in Deutschland"],
  ["analysis", "Analyse"],
];

const officialSources = [
  {
    label: "BAMF: Abschlussprüfung mit Zertifikat",
    url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html",
  },
  {
    label: "g.a.s.t.: Der DTZ auf einen Blick",
    url: "https://www.gast.de/de/forschung-entwicklung/entwicklung/auftraege/deutsch-test-für-zuwanderer-dtz/der-dtz-auf-einen-blick",
  },
  {
    label: "BAMF Online-Testcenter: Einbürgerungstest/Leben in Deutschland",
    url: "https://oet.bamf.de/ords/oetut/f?p=514:1:0",
  },
];

const skillNames = {
  vocabulary: "Wortschatz",
  verbs: "Verben & Zeiten",
  cases: "Artikel, Dativ, Akkusativ",
  sentence: "Satzbau",
  reading: "Lesen",
  dialogue: "Dialoge",
  listening: "Hören",
};

const nouns = [
  ["der Termin", "Termin", "m", "randevu", "Morgen habe ich einen Termin beim Jobcenter."],
  ["die Rechnung", "Rechnung", "f", "fatura", "Die Rechnung ist noch nicht bezahlt."],
  ["das Formular", "Formular", "n", "form", "Bitte füllen Sie das Formular vollständig aus."],
  ["der Antrag", "Antrag", "m", "başvuru", "Ich möchte einen Antrag stellen."],
  ["die Bescheinigung", "Bescheinigung", "f", "belge", "Ich brauche eine Bescheinigung für die Arbeit."],
  ["das Konto", "Konto", "n", "hesap", "Ich eröffne ein Konto bei der Bank."],
  ["der Vermieter", "Vermieter", "m", "ev sahibi", "Der Vermieter repariert die Heizung."],
  ["die Wohnung", "Wohnung", "f", "daire", "Die Wohnung ist hell und ruhig."],
  ["das Zimmer", "Zimmer", "n", "oda", "Das Zimmer ist frei."],
  ["der Arbeitgeber", "Arbeitgeber", "m", "işveren", "Der Arbeitgeber unterschreibt den Vertrag."],
  ["die Ausbildung", "Ausbildung", "f", "meslek eğitimi", "Die Ausbildung beginnt im September."],
  ["das Gehalt", "Gehalt", "n", "maaş", "Das Gehalt kommt am Monatsende."],
  ["der Vertrag", "Vertrag", "m", "sözleşme", "Ich lese den Vertrag genau."],
  ["die Kündigung", "Kündigung", "f", "fesih", "Die Kündigung muss schriftlich sein."],
  ["das Gespräch", "Gespräch", "n", "görüşme", "Das Gespräch dauert zwanzig Minuten."],
  ["der Arzt", "Arzt", "m", "doktor", "Der Arzt untersucht den Patienten."],
  ["die Apotheke", "Apotheke", "f", "eczane", "In der Apotheke kaufe ich Medikamente."],
  ["das Rezept", "Rezept", "n", "reçete", "Das Rezept ist drei Monate gültig."],
  ["der Kindergarten", "Kindergarten", "m", "anaokulu", "Mein Kind geht in den Kindergarten."],
  ["die Schule", "Schule", "f", "okul", "Die Schule beginnt um acht Uhr."],
  ["das Zeugnis", "Zeugnis", "n", "karne", "Das Zeugnis ist wichtig für die Bewerbung."],
  ["der Bus", "Bus", "m", "otobüs", "Der Bus fährt alle zehn Minuten."],
  ["die Haltestelle", "Haltestelle", "f", "durak", "Die Haltestelle ist vor der Bäckerei."],
  ["das Ticket", "Ticket", "n", "bilet", "Das Ticket kostet drei Euro."],
  ["der Kurs", "Kurs", "m", "kurs", "Der Deutschkurs findet am Vormittag statt."],
  ["die Prüfung", "Prüfung", "f", "sınav", "Die Prüfung ist im Juli."],
  ["das Zertifikat", "Zertifikat", "n", "sertifika", "Das Zertifikat zeigt das Niveau B1."],
  ["der Nachbar", "Nachbar", "m", "komşu", "Der Nachbar hilft beim Umzug."],
  ["die Gemeinde", "Gemeinde", "f", "belediye", "Die Gemeinde schickt einen Brief."],
  ["das Amt", "Amt", "n", "resmi daire", "Das Amt hat nur vormittags geöffnet."],
  ["der Ausweis", "Ausweis", "m", "kimlik", "Der Ausweis ist abgelaufen."],
  ["die Versicherung", "Versicherung", "f", "sigorta", "Die Versicherung bezahlt den Schaden."],
  ["das Angebot", "Angebot", "n", "teklif", "Das Angebot ist nur bis Freitag gültig."],
  ["der Einkauf", "Einkauf", "m", "alışveriş", "Der Einkauf ist heute teuer."],
  ["die Bäckerei", "Bäckerei", "f", "fırın", "In der Bäckerei kaufe ich Brot."],
  ["das Brot", "Brot", "n", "ekmek", "Das Brot ist frisch."],
];

const extraWords = [
  ["pünktlich", "dakik", "Der Bus ist heute pünktlich."],
  ["dringend", "acil", "Ich brauche dringend einen Termin."],
  ["schriftlich", "yazılı", "Bitte antworten Sie schriftlich."],
  ["mündlich", "sözlü", "Die mündliche Prüfung dauert ungefähr 16 Minuten."],
  ["gemeinsam", "birlikte", "Wir planen gemeinsam eine Feier."],
  ["selbstständig", "bağımsız", "Ich kann viele Dinge selbstständig erledigen."],
  ["höflich", "nazik", "Im Gespräch bleibe ich höflich."],
  ["zuverlässig", "güvenilir", "Ich bin zuverlässig und arbeite gern im Team."],
  ["erlaubt", "izinli", "Rauchen ist hier nicht erlaubt."],
  ["verboten", "yasak", "Parken ist vor der Einfahrt verboten."],
  ["gültig", "geçerli", "Mein Ausweis ist noch gültig."],
  ["abgelaufen", "süresi dolmuş", "Das Ticket ist abgelaufen."],
  ["beantragen", "başvurmak", "Ich möchte Wohngeld beantragen."],
  ["vereinbaren", "kararlaştırmak", "Wir vereinbaren einen Termin."],
  ["verschieben", "ertelemek", "Ich muss den Termin verschieben."],
  ["absagen", "iptal etmek", "Ich sage den Termin wegen Krankheit ab."],
  ["bestellen", "sipariş etmek", "Ich bestelle zwei Brötchen."],
  ["bezahlen", "ödemek", "Ich bezahle mit Karte."],
  ["erklären", "açıklamak", "Die Lehrerin erklärt die Grammatik."],
  ["unterschreiben", "imzalamak", "Bitte unterschreiben Sie hier."],
  ["kündigen", "feshetmek", "Ich möchte den Vertrag kündigen."],
  ["bewerben", "başvurmak", "Ich bewerbe mich um eine Stelle."],
  ["teilnehmen", "katılmak", "Ich nehme am Integrationskurs teil."],
  ["bestehen", "başarmak", "Ich möchte die B1-Prüfung bestehen."],
  ["verstehen", "anlamak", "Ich verstehe den Brief nicht ganz."],
  ["wiederholen", "tekrar etmek", "Bitte wiederholen Sie den Satz."],
  ["vergleichen", "karşılaştırmak", "Ich vergleiche zwei Angebote."],
  ["beschreiben", "betimlemek", "Ich beschreibe das Foto."],
  ["berichten", "anlatmak", "Ich berichte von meiner Erfahrung."],
  ["vorschlagen", "önermek", "Ich schlage einen Termin vor."],
  ["entscheiden", "karar vermek", "Wir entscheiden zusammen."],
  ["vorbereiten", "hazırlamak", "Ich bereite mich auf die Prüfung vor."],
  ["beanstanden", "şikayet etmek", "Ich beanstande die falsche Rechnung."],
  ["zustimmen", "katılmak", "Ich stimme dem Vorschlag zu."],
  ["ablehnen", "reddetmek", "Ich lehne das Angebot höflich ab."],
  ["sich entschuldigen", "özür dilemek", "Ich entschuldige mich für die Verspätung."],
];

const verbs = [
  ["arbeiten", "çalışmak", "arbeite", "arbeitest", "arbeitet", "habe gearbeitet", "arbeitete", "werde arbeiten"],
  ["kommen", "gelmek", "komme", "kommst", "kommt", "bin gekommen", "kam", "werde kommen"],
  ["gehen", "gitmek", "gehe", "gehst", "geht", "bin gegangen", "ging", "werde gehen"],
  ["fahren", "gitmek/sürmek", "fahre", "fährst", "fährt", "bin gefahren", "fuhr", "werde fahren"],
  ["kaufen", "satın almak", "kaufe", "kaufst", "kauft", "habe gekauft", "kaufte", "werde kaufen"],
  ["bezahlen", "ödemek", "bezahle", "bezahlst", "bezahlt", "habe bezahlt", "bezahlte", "werde bezahlen"],
  ["schreiben", "yazmak", "schreibe", "schreibst", "schreibt", "habe geschrieben", "schrieb", "werde schreiben"],
  ["lesen", "okumak", "lese", "liest", "liest", "habe gelesen", "las", "werde lesen"],
  ["sprechen", "konuşmak", "spreche", "sprichst", "spricht", "habe gesprochen", "sprach", "werde sprechen"],
  ["verstehen", "anlamak", "verstehe", "verstehst", "versteht", "habe verstanden", "verstand", "werde verstehen"],
  ["helfen", "yardım etmek", "helfe", "hilfst", "hilft", "habe geholfen", "half", "werde helfen"],
  ["nehmen", "almak", "nehme", "nimmst", "nimmt", "habe genommen", "nahm", "werde nehmen"],
  ["geben", "vermek", "gebe", "gibst", "gibt", "habe gegeben", "gab", "werde geben"],
  ["finden", "bulmak", "finde", "findest", "findet", "habe gefunden", "fand", "werde finden"],
  ["suchen", "aramak", "suche", "suchst", "sucht", "habe gesucht", "suchte", "werde suchen"],
  ["lernen", "öğrenmek", "lerne", "lernst", "lernt", "habe gelernt", "lernte", "werde lernen"],
  ["fragen", "sormak", "frage", "fragst", "fragt", "habe gefragt", "fragte", "werde fragen"],
  ["antworten", "cevap vermek", "antworte", "antwortest", "antwortet", "habe geantwortet", "antwortete", "werde antworten"],
  ["vereinbaren", "kararlaştırmak", "vereinbare", "vereinbarst", "vereinbart", "habe vereinbart", "vereinbarte", "werde vereinbaren"],
  ["verschieben", "ertelemek", "verschiebe", "verschiebst", "verschiebt", "habe verschoben", "verschob", "werde verschieben"],
  ["absagen", "iptal etmek", "sage ab", "sagst ab", "sagt ab", "habe abgesagt", "sagte ab", "werde absagen"],
  ["beantragen", "başvurmak", "beantrage", "beantragst", "beantragt", "habe beantragt", "beantragte", "werde beantragen"],
  ["erklären", "açıklamak", "erkläre", "erklärst", "erklärt", "habe erklärt", "erklärte", "werde erklären"],
  ["unterschreiben", "imzalamak", "unterschreibe", "unterschreibst", "unterschreibt", "habe unterschrieben", "unterschrieb", "werde unterschreiben"],
  ["kündigen", "feshetmek", "kündige", "kündigst", "kündigt", "habe gekündigt", "kündigte", "werde kündigen"],
  ["bewerben", "başvurmak", "bewerbe mich", "bewirbst dich", "bewirbt sich", "habe mich beworben", "bewarb mich", "werde mich bewerben"],
  ["teilnehmen", "katılmak", "nehme teil", "nimmst teil", "nimmt teil", "habe teilgenommen", "nahm teil", "werde teilnehmen"],
  ["bestehen", "başarmak", "bestehe", "bestehst", "besteht", "habe bestanden", "bestand", "werde bestehen"],
  ["beschreiben", "betimlemek", "beschreibe", "beschreibst", "beschreibt", "habe beschrieben", "beschrieb", "werde beschreiben"],
  ["berichten", "anlatmak", "berichte", "berichtest", "berichtet", "habe berichtet", "berichtete", "werde berichten"],
  ["vorschlagen", "önermek", "schlage vor", "schlägst vor", "schlägt vor", "habe vorgeschlagen", "schlug vor", "werde vorschlagen"],
  ["entscheiden", "karar vermek", "entscheide", "entscheidest", "entscheidet", "habe entschieden", "entschied", "werde entscheiden"],
];

const readingTexts = [
  {
    title: "Termin beim Jobcenter",
    text: "Sehr geehrte Frau Demir, Ihr Termin im Jobcenter findet am Dienstag um 9:30 Uhr statt. Bitte bringen Sie Ihren Ausweis, den Mietvertrag und die letzten Kontoauszüge mit. Wenn Sie krank sind, rufen Sie uns spätestens am Montag an.",
    tr: "Jobcenter randevusu salı saat 9:30'dadır. Kimlik, kira sözleşmesi ve son hesap dökümleri getirilmelidir.",
    questions: [
      ["Wann ist der Termin?", ["Dienstag um 9:30 Uhr", "Montag um 9:30 Uhr", "Freitag um 14:00 Uhr"], 0],
      ["Was soll Frau Demir mitbringen?", ["Ausweis und Unterlagen", "Geburtstagskuchen", "Sportkleidung"], 0],
      ["Was muss sie tun, wenn sie krank ist?", ["Spätestens Montag anrufen", "Einfach zu Hause bleiben", "Erst nach dem Termin schreiben"], 0],
    ],
  },
  {
    title: "Aushang im Haus",
    text: "Liebe Mieterinnen und Mieter, am Donnerstag wird im Hausflur gearbeitet. Zwischen 8 und 13 Uhr kann es laut werden. Bitte stellen Sie in dieser Zeit keine Fahrräder in den Eingang. Vielen Dank für Ihr Verständnis.",
    tr: "Perşembe günü apartman girişinde çalışma var. Saat 8-13 arası gürültü olabilir.",
    questions: [
      ["Wo wird gearbeitet?", ["Im Hausflur", "Im Keller", "Im Garten"], 0],
      ["Wann kann es laut werden?", ["Zwischen 8 und 13 Uhr", "Nach 18 Uhr", "Am Sonntag"], 0],
      ["Was sollen die Mieter nicht tun?", ["Fahrräder in den Eingang stellen", "Fenster öffnen", "Post holen"], 0],
    ],
  },
  {
    title: "Nachricht vom Kindergarten",
    text: "Am Freitag machen die Kinder einen Ausflug zum Spielplatz. Bitte geben Sie Ihrem Kind eine Trinkflasche, wetterfeste Kleidung und ein kleines Frühstück mit. Die Kinder kommen um 13 Uhr zurück.",
    tr: "Cuma günü çocuklar oyun alanına gezi yapacak. Su şişesi, hava koşullarına uygun kıyafet ve kahvaltı getirilmeli.",
    questions: [
      ["Wohin gehen die Kinder?", ["Zum Spielplatz", "Zur Bank", "Zum Bahnhof"], 0],
      ["Was sollen die Eltern mitgeben?", ["Trinkflasche und Frühstück", "Geld für den Bus", "Ein Fahrrad"], 0],
      ["Wann kommen die Kinder zurück?", ["Um 13 Uhr", "Um 8 Uhr", "Um 18 Uhr"], 0],
    ],
  },
  {
    title: "E-Mail an den Arbeitgeber",
    text: "Guten Morgen Herr Schuster, ich bin heute krank und kann leider nicht zur Arbeit kommen. Ich gehe um 10 Uhr zum Arzt und schicke Ihnen danach die Krankmeldung. Freundliche Grüße, Mehmet Yilmaz",
    tr: "Mehmet hastadır, işe gelemeyecektir ve doktor raporunu gönderecektir.",
    questions: [
      ["Warum schreibt Mehmet?", ["Er ist krank", "Er hat Urlaub", "Er sucht eine Wohnung"], 0],
      ["Wann geht er zum Arzt?", ["Um 10 Uhr", "Um 7 Uhr", "Um 18 Uhr"], 0],
      ["Was schickt er später?", ["Die Krankmeldung", "Den Mietvertrag", "Ein Foto"], 0],
    ],
  },
  {
    title: "Hinweis in der Bäckerei",
    text: "Liebe Kundinnen und Kunden, wegen einer Reparatur schließen wir heute schon um 15 Uhr. Morgen sind wir wieder wie gewohnt von 6 bis 18 Uhr für Sie da.",
    tr: "Tamir nedeniyle fırın bugün 15:00'te kapanır. Yarın normal saatlerde açıktır.",
    questions: [
      ["Warum schließt die Bäckerei früher?", ["Wegen einer Reparatur", "Wegen Urlaub", "Wegen einer Prüfung"], 0],
      ["Wann schließt sie heute?", ["Um 15 Uhr", "Um 18 Uhr", "Um 6 Uhr"], 0],
      ["Wann öffnet sie morgen?", ["Um 6 Uhr", "Um 10 Uhr", "Um 15 Uhr"], 0],
    ],
  },
  {
    title: "Brief von der Gemeinde",
    text: "Die Gemeinde lädt alle neuen Bürgerinnen und Bürger am 12. Mai um 17 Uhr zu einer Informationsveranstaltung ein. Sie erhalten Informationen zu Vereinen, Beratungsstellen und Sprachkursen.",
    tr: "Belediye yeni vatandaşları bilgilendirme toplantısına davet ediyor.",
    questions: [
      ["Wer lädt ein?", ["Die Gemeinde", "Die Bank", "Der Vermieter"], 0],
      ["Wozu lädt sie ein?", ["Zu einer Informationsveranstaltung", "Zu einer Prüfung", "Zu einem Arzttermin"], 0],
      ["Welche Informationen gibt es?", ["Vereine, Beratung, Sprachkurse", "Nur Mietpreise", "Nur Busfahrpläne"], 0],
    ],
  },
  {
    title: "Banktermin",
    text: "Ihr Beratungstermin bei der Bank ist am Mittwoch um 11 Uhr. Bitte bringen Sie Ihren Ausweis und Ihre Gehaltsabrechnung mit. Wenn Sie den Termin verschieben möchten, rufen Sie die Nummer 0800 45 67 an.",
    tr: "Banka danışma randevusu çarşamba saat 11'dedir.",
    questions: [
      ["Wann ist der Banktermin?", ["Mittwoch um 11 Uhr", "Dienstag um 8 Uhr", "Freitag um 16 Uhr"], 0],
      ["Was muss man mitbringen?", ["Ausweis und Gehaltsabrechnung", "Krankmeldung und Rezept", "Fahrrad und Helm"], 0],
      ["Was kann man telefonisch machen?", ["Den Termin verschieben", "Brot bestellen", "Den Kurs bestehen"], 0],
    ],
  },
  {
    title: "Kursinformation",
    text: "Der Deutschkurs findet nächste Woche in Raum 204 statt. Der Unterricht beginnt jeden Tag um 8:30 Uhr. Bitte bringen Sie das Kursbuch, ein Heft und einen Stift mit.",
    tr: "Almanca kursu gelecek hafta 204 numaralı odada yapılacaktır.",
    questions: [
      ["Wo findet der Kurs statt?", ["In Raum 204", "Im Rathaus", "In der Apotheke"], 0],
      ["Wann beginnt der Unterricht?", ["Um 8:30 Uhr", "Um 10:30 Uhr", "Um 18 Uhr"], 0],
      ["Was soll man mitbringen?", ["Buch, Heft und Stift", "Nur Essen", "Ein Ticket"], 0],
    ],
  },
  {
    title: "Rezept aus der Apotheke",
    text: "Nehmen Sie die Tabletten zweimal täglich nach dem Essen. Wenn Sie starke Schmerzen oder Fieber bekommen, rufen Sie bitte Ihren Arzt an. Bewahren Sie das Medikament außerhalb der Reichweite von Kindern auf.",
    tr: "Tabletler yemekten sonra günde iki kez alınmalıdır.",
    questions: [
      ["Wie oft soll man die Tabletten nehmen?", ["Zweimal täglich", "Einmal pro Woche", "Alle zwei Stunden"], 0],
      ["Wann soll man den Arzt anrufen?", ["Bei starken Schmerzen oder Fieber", "Wenn das Brot leer ist", "Wenn der Bus kommt"], 0],
      ["Wo soll das Medikament nicht liegen?", ["In Reichweite von Kindern", "Im Schrank", "In der Apotheke"], 0],
    ],
  },
  {
    title: "Wohnungsanzeige",
    text: "Helle 2-Zimmer-Wohnung, 54 Quadratmeter, Balkon, Nähe Bahnhof. Kaltmiete 620 Euro, Nebenkosten 160 Euro. Besichtigung am Samstag nach Vereinbarung.",
    tr: "Aydınlık 2 odalı daire, balkonlu, istasyona yakın.",
    questions: [
      ["Wie groß ist die Wohnung?", ["54 Quadratmeter", "160 Quadratmeter", "620 Quadratmeter"], 0],
      ["Was hat die Wohnung?", ["Einen Balkon", "Einen Garten mit Pool", "Eine Garage für drei Autos"], 0],
      ["Wann ist eine Besichtigung möglich?", ["Am Samstag nach Vereinbarung", "Jeden Sonntag ohne Termin", "Nur nachts"], 0],
    ],
  },
];

while (readingTexts.length < 20) {
  const base = readingTexts[readingTexts.length % 10];
  readingTexts.push({
    ...base,
    title: `${base.title} ${Math.floor(readingTexts.length / 10) + 1}`,
    text: base.text.replace(/\./, ", bitte achten Sie auf die Angaben."),
  });
}

const dialogueScripts = [
  {
    title: "In der Bäckerei",
    tr: "Fırında sipariş verme.",
    lines: ["Guten Morgen, was darf es sein?", "Ich hätte gern zwei Brötchen und ein Vollkornbrot.", "Gern. Möchten Sie das Brot geschnitten?", "Ja, bitte. Was kostet das zusammen?", "Das macht 5 Euro 40."],
  },
  {
    title: "Bei der Bank",
    tr: "Bankada randevu alma.",
    lines: ["Guten Tag, ich möchte ein Konto eröffnen.", "Haben Sie einen Termin?", "Nein, kann ich bitte einen Termin vereinbaren?", "Ja, morgen um 10 Uhr ist noch frei.", "Das passt. Vielen Dank."],
  },
  {
    title: "Beim Vermieter",
    tr: "Ev sahibiyle tamir konuşması.",
    lines: ["Guten Tag, in meiner Wohnung ist die Heizung kaputt.", "Seit wann funktioniert sie nicht?", "Seit gestern Abend.", "Ich schicke morgen einen Handwerker.", "Vielen Dank, das ist sehr freundlich."],
  },
  {
    title: "Im Jobcenter",
    tr: "Jobcenter'da belge sorma.",
    lines: ["Guten Tag, ich habe eine Frage zu meinem Antrag.", "Welche Unterlagen fehlen Ihnen?", "Mir fehlt die Mietbescheinigung.", "Bitte bringen Sie sie bis Freitag mit.", "Ja, das mache ich."],
  },
  {
    title: "Beim Arzt",
    tr: "Doktorda şikayet anlatma.",
    lines: ["Was fehlt Ihnen?", "Ich habe seit drei Tagen Kopfschmerzen.", "Haben Sie auch Fieber?", "Nein, aber ich bin sehr müde.", "Ich untersuche Sie jetzt."],
  },
  {
    title: "Im Supermarkt",
    tr: "Markette ürün sorma.",
    lines: ["Entschuldigung, wo finde ich Reis?", "Reis finden Sie in Gang drei.", "Vielen Dank. Gibt es auch Bulgur?", "Ja, gleich neben dem Reis.", "Super, danke schön."],
  },
  {
    title: "In der Schule",
    tr: "Okulda öğretmenle konuşma.",
    lines: ["Guten Tag, ich möchte über mein Kind sprechen.", "Natürlich, worum geht es?", "Mein Kind versteht die Hausaufgaben nicht.", "Wir können einen Fördertermin vereinbaren.", "Das wäre sehr hilfreich."],
  },
  {
    title: "Beim Arbeitgeber",
    tr: "İşverenle vardiya konuşması.",
    lines: ["Guten Morgen, ich möchte meine Schicht tauschen.", "Warum möchten Sie tauschen?", "Ich habe am Donnerstag einen Arzttermin.", "Dann arbeiten Sie am Freitag später.", "Vielen Dank für Ihr Verständnis."],
  },
  {
    title: "In der Gemeinde",
    tr: "Belediyede kayıt hakkında konuşma.",
    lines: ["Guten Tag, ich möchte mich anmelden.", "Haben Sie Ihren Ausweis dabei?", "Ja, und auch den Mietvertrag.", "Dann füllen Sie bitte dieses Formular aus.", "In Ordnung."],
  },
  {
    title: "Am Bahnhof",
    tr: "Tren istasyonunda bilgi alma.",
    lines: ["Entschuldigung, fährt der Zug nach Köln pünktlich?", "Nein, er hat zehn Minuten Verspätung.", "Von welchem Gleis fährt er?", "Von Gleis sieben.", "Danke für die Auskunft."],
  },
  {
    title: "In der Kita",
    tr: "Anaokulunda çocuğu alma.",
    lines: ["Guten Tag, ich hole meine Tochter ab.", "Sie ist noch im Gruppenraum.", "Hat heute alles gut geklappt?", "Ja, sie hat schön gespielt.", "Das freut mich."],
  },
  {
    title: "In der Apotheke",
    tr: "Eczanede ilaç alma.",
    lines: ["Guten Tag, ich habe ein Rezept.", "Einen Moment bitte.", "Wie nehme ich die Tabletten ein?", "Zweimal täglich nach dem Essen.", "Danke für die Erklärung."],
  },
  {
    title: "Beim Telefonanbieter",
    tr: "Telefon sözleşmesi hakkında konuşma.",
    lines: ["Guten Tag, ich möchte meinen Vertrag kündigen.", "Wie ist Ihre Kundennummer?", "Die Nummer ist 458921.", "Die Kündigung muss schriftlich erfolgen.", "Dann schicke ich heute eine E-Mail."],
  },
  {
    title: "Beim Friseur",
    tr: "Kuaförde randevu.",
    lines: ["Haben Sie heute noch einen Termin frei?", "Um 16 Uhr wäre möglich.", "Das passt mir gut.", "Möchten Sie waschen und schneiden?", "Ja, bitte."],
  },
  {
    title: "Beim Sprachkurs",
    tr: "Dil kursunda sınav hakkında sorma.",
    lines: ["Wann ist die B1-Prüfung?", "Die Prüfung ist am 18. Juli.", "Was sollen wir üben?", "Besonders Hören, Briefe und Sprechen.", "Dann übe ich jeden Tag."],
  },
  {
    title: "Im Bürgerbüro",
    tr: "Vatandaşlık bürosunda kimlik yenileme.",
    lines: ["Guten Tag, mein Ausweis ist abgelaufen.", "Sie brauchen ein biometrisches Foto.", "Kann ich den Antrag heute stellen?", "Ja, bitte ziehen Sie eine Nummer.", "Danke, ich warte hier."],
  },
  {
    title: "Beim Elternabend",
    tr: "Veli toplantısında soru sorma.",
    lines: ["Guten Abend, ich habe eine Frage zur Klassenfahrt.", "Ja, bitte.", "Wie viel kostet die Fahrt?", "Sie kostet 80 Euro.", "Kann ich in zwei Raten bezahlen?"],
  },
  {
    title: "Im Restaurant",
    tr: "Restoranda sipariş verme.",
    lines: ["Guten Abend, haben Sie reserviert?", "Ja, auf den Namen Kaya.", "Hier ist Ihr Tisch.", "Können wir bitte die Speisekarte haben?", "Natürlich, sofort."],
  },
];

const letterPrompts = [
  ["Jobcenter: fehlende Unterlage", "Sie haben vom Jobcenter einen Brief bekommen. Eine Mietbescheinigung fehlt. Schreiben Sie: Warum antworten Sie? Welche Unterlage schicken Sie? Wann schicken Sie sie? Bitten Sie um eine Bestätigung.", "Eksik kira belgesi için Jobcenter'a yazın."],
  ["Gemeinde: Anmeldung", "Sie sind neu in der Stadt. Schreiben Sie an die Gemeinde: Sie möchten sich anmelden, bitten um einen Termin, fragen nach nötigen Unterlagen und nennen Ihre Telefonnummer.", "Belediyeden kayıt randevusu isteyin."],
  ["Vermieter: Heizung kaputt", "Ihre Heizung funktioniert nicht. Schreiben Sie an den Vermieter: Beschreiben Sie das Problem, seit wann es besteht, bitten Sie um Reparatur und schlagen Sie zwei Termine vor.", "Ev sahibine arızalı kalorifer için yazın."],
  ["Arbeitgeber: krank", "Sie sind krank und können nicht arbeiten. Schreiben Sie Ihrem Arbeitgeber: Entschuldigen Sie sich, nennen Sie den Grund, informieren Sie über den Arzttermin und kündigen Sie die Krankmeldung an.", "İşverene hastalık nedeniyle yazın."],
  ["Bewerbung: Praktikum", "Sie möchten ein Praktikum machen. Schreiben Sie an einen Betrieb: Stellen Sie sich kurz vor, nennen Sie Ihre Erfahrung, erklären Sie Ihr Interesse und bitten Sie um ein Gespräch.", "Staj başvurusu yazın."],
  ["Schule: Gespräch wegen Kind", "Ihr Kind hat Probleme in Mathematik. Schreiben Sie an die Lehrerin: Beschreiben Sie die Situation, bitten Sie um ein Gespräch, schlagen Sie Termine vor und fragen Sie nach Unterstützung.", "Öğretmenden görüşme isteyin."],
  ["Kita: Kind krank", "Ihr Kind kann nicht in die Kita kommen. Schreiben Sie: Warum bleibt das Kind zu Hause? Wie lange vermutlich? Fragen Sie nach verpassten Informationen und bedanken Sie sich.", "Anaokuluna hastalık bildirimi yazın."],
  ["Bank: Termin verschieben", "Sie haben einen Banktermin, können aber nicht kommen. Schreiben Sie: Entschuldigen Sie sich, nennen Sie den Grund, bitten Sie um einen neuen Termin und schlagen Sie Zeiten vor.", "Banka randevusunu erteleyin."],
  ["Versicherung: Schaden melden", "In Ihrer Wohnung gab es einen Wasserschaden. Schreiben Sie der Versicherung: Was ist passiert? Wann? Welche Schäden gibt es? Bitten Sie um weitere Informationen.", "Sigortaya hasar bildirimi yazın."],
  ["Kursleitung: Prüfung fragen", "Schreiben Sie an Ihre Kursleitung: Fragen Sie nach dem Prüfungstermin, bitten Sie um Übungsmaterial, nennen Sie Ihre Schwäche und bedanken Sie sich.", "Kurs öğretmenine sınav hakkında yazın."],
  ["Telefonanbieter: Vertrag kündigen", "Sie möchten Ihren Telefonvertrag kündigen. Schreiben Sie: Nennen Sie Kundennummer, Kündigungsdatum, bitten Sie um Bestätigung und fragen Sie nach Rücksendung der Geräte.", "Telefon sözleşmesini feshedin."],
  ["Nachbar: Lärm", "Ihr Nachbar ist abends sehr laut. Schreiben Sie höflich: Beschreiben Sie das Problem, nennen Sie Zeiten, bitten Sie um Ruhe und schlagen Sie ein Gespräch vor.", "Komşuya gürültü hakkında yazın."],
];

while (letterPrompts.length < 42) {
  const base = letterPrompts[letterPrompts.length % 12];
  letterPrompts.push([`${base[0]} ${Math.floor(letterPrompts.length / 12) + 1}`, base[1], base[2]]);
}

const speakingTasks = [
  {
    kind: "intro",
    title: "Vorstellungsrunde",
    prompt: "Stellen Sie sich vor: Name, Herkunft, Wohnort, Familie, Beruf, Deutschkurs, Hobbys und Ziel.",
    tr: "Kendinizi tanıtın: isim, memleket, yaşadığınız yer, aile, meslek, kurs, hobiler ve hedef.",
    expectedKeywords: ["heiße", "komme", "wohne", "familie", "arbeite", "lerne", "deutsch", "ziel"],
  },
  {
    kind: "read",
    title: "Vorlesen: Termin",
    prompt: "Lesen Sie laut vor: Ich habe morgen einen Termin beim Jobcenter. Bitte bringen Sie Ihren Ausweis und den Mietvertrag mit.",
    expectedText: "Ich habe morgen einen Termin beim Jobcenter. Bitte bringen Sie Ihren Ausweis und den Mietvertrag mit.",
    tr: "Randevu metnini sesli okuyun.",
    expectedKeywords: ["termin", "jobcenter", "ausweis", "mietvertrag"],
  },
  {
    kind: "read",
    title: "Vorlesen: Bäckerei",
    prompt: "Lesen Sie laut vor: In der Bäckerei kaufe ich zwei Brötchen und ein Brot. Danach bezahle ich mit Karte.",
    expectedText: "In der Bäckerei kaufe ich zwei Brötchen und ein Brot. Danach bezahle ich mit Karte.",
    tr: "Fırın metnini sesli okuyun.",
    expectedKeywords: ["bäckerei", "brötchen", "brot", "karte"],
  },
];

const pictureTasks = [
  {
    title: "Frau in der Bäckerei",
    image: "assets/photos/bakery.png",
    fallback: "Eine Frau steht in einer Bäckerei und bestellt Brot.",
    tr: "Bir kadın fırında ekmek sipariş ediyor.",
    expectedKeywords: ["frau", "bäckerei", "brot", "bestellt", "kauft", "theke"],
  },
  {
    title: "Kinder auf dem Spielplatz",
    image: "assets/photos/playground.png",
    fallback: "Kinder spielen draußen auf einem Spielplatz.",
    tr: "Çocuklar oyun alanında oynuyor.",
    expectedKeywords: ["kinder", "spielplatz", "spielen", "draußen", "spaß"],
  },
  {
    title: "Paar mit Hund im Wald",
    image: "assets/photos/forest-dog.png",
    fallback: "Ein Paar geht mit einem Hund im Wald spazieren.",
    tr: "Bir çift köpeğiyle ormanda yürüyüş yapıyor.",
    expectedKeywords: ["paar", "hund", "wald", "spazieren", "geht"],
  },
  {
    title: "Auf dem Bahnhof",
    image: "assets/photos/train-station.png",
    fallback: "Eine Familie steht mit Koffern am Bahnhof.",
    tr: "Bir aile denizde tatil yapıyor.",
    expectedKeywords: ["familie", "bahnhof", "koffer", "reise", "fahrplan", "kinder"],
  },
  {
    title: "Geburtstagsfeier",
    image: "assets/photos/birthday.png",
    fallback: "Menschen feiern zusammen Geburtstag.",
    tr: "İnsanlar birlikte doğum günü kutluyor.",
    expectedKeywords: ["geburtstag", "feier", "kuchen", "familie", "freunde"],
  },
];

const listeningSituations = [
  ["Bahnhof", "Achtung an Gleis 3: Der Regionalzug nach Bonn hat heute etwa zehn Minuten Verspätung.", "Welcher Zug hat Verspätung?", ["Der Regionalzug nach Bonn", "Der Bus zur Schule", "Die U-Bahn nach Berlin"], 0],
  ["Arztpraxis", "Guten Tag, Ihre Ärztin ist heute krank. Wir können Ihnen morgen um 11 Uhr einen neuen Termin geben.", "Wann ist der neue Termin?", ["Morgen um 11 Uhr", "Heute um 11 Uhr", "Am Sonntag"], 0],
  ["Bäckerei", "Heute im Angebot: drei Brötchen für einen Euro fünfzig und ein Vollkornbrot für drei Euro.", "Was ist im Angebot?", ["Brötchen und Vollkornbrot", "Milch und Eier", "Fahrkarten"], 0],
  ["Schule", "Der Elternabend beginnt um 18 Uhr in Raum 12. Bitte bringen Sie den ausgefüllten Zettel mit.", "Wo ist der Elternabend?", ["In Raum 12", "In Raum 204", "Im Rathaus"], 0],
  ["Wohnung", "Wegen Reparaturarbeiten gibt es am Freitag von 9 bis 12 Uhr kein warmes Wasser.", "Wann gibt es kein warmes Wasser?", ["Freitag von 9 bis 12 Uhr", "Montag den ganzen Tag", "Heute Abend"], 0],
  ["Jobcenter", "Bitte reichen Sie die fehlenden Unterlagen bis zum 15. Juni ein.", "Bis wann müssen die Unterlagen da sein?", ["Bis zum 15. Juni", "Bis morgen früh", "Bis Dezember"], 0],
  ["Supermarkt", "Kasse drei ist jetzt geöffnet. Sie können auch an Kasse drei bezahlen.", "Was ist geöffnet?", ["Kasse drei", "Die Apotheke", "Der Parkplatz"], 0],
  ["Bus", "Die Linie 42 fährt heute wegen einer Baustelle nur bis zur Haltestelle Rathaus.", "Warum fährt der Bus anders?", ["Wegen einer Baustelle", "Wegen Schnee", "Wegen Ferien"], 0],
  ["Bank", "Ihre neue Bankkarte können Sie ab Montag in der Filiale abholen.", "Was kann man abholen?", ["Die Bankkarte", "Ein Paket", "Ein Rezept"], 0],
  ["Kurs", "Morgen fällt der Deutschkurs aus. Bitte lernen Sie zu Hause die Wörter auf Seite 48.", "Was fällt aus?", ["Der Deutschkurs", "Die Prüfung", "Der Einkauf"], 0],
  ["Apotheke", "Nehmen Sie den Saft morgens und abends nach dem Essen.", "Wann nimmt man den Saft?", ["Morgens und abends", "Nur nachts", "Vor jeder Busfahrt"], 0],
  ["Gemeinde", "Das Bürgerbüro hat am Mittwoch nur bis 12 Uhr geöffnet.", "Wie lange ist geöffnet?", ["Bis 12 Uhr", "Bis 20 Uhr", "Gar nicht"], 0],
];

while (listeningSituations.length < 36) {
  const base = listeningSituations[listeningSituations.length % 12];
  listeningSituations.push([`${base[0]} ${Math.floor(listeningSituations.length / 12) + 1}`, base[1], base[2], base[3], base[4]]);
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function choice(list, seed = Math.random()) {
  return list[Math.floor(seed * list.length) % list.length];
}

function article(gender, grammaticalCase) {
  const map = {
    m: { nom: "der", akk: "den", dat: "dem" },
    f: { nom: "die", akk: "die", dat: "der" },
    n: { nom: "das", akk: "das", dat: "dem" },
  };
  return map[gender][grammaticalCase];
}

function normalize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[.,!?;:"'()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tokenScore(answer, expected) {
  const answerTokens = new Set(normalize(answer).split(" ").filter(Boolean));
  const expectedTokens = normalize(expected).split(" ").filter(Boolean);
  if (!expectedTokens.length) return 0;
  const hit = expectedTokens.filter((token) => answerTokens.has(token)).length;
  return Math.round((hit / expectedTokens.length) * 100);
}

function buildExercises() {
  const exercises = [];
  nouns.forEach(([full, base, gender, tr, sentence], index) => {
    const other = shuffle(nouns.filter((_, i) => i !== index)).slice(0, 3).map((item) => item[3]);
    exercises.push({
      id: `voc-noun-tr-${index}`,
      skill: "vocabulary",
      type: "mc",
      prompt: `Was bedeutet „${full}“ auf Türkisch?`,
      tr: `„${full}“ kelimesinin Türkçesi nedir?`,
      options: shuffle([tr, ...other]),
      answer: tr,
      explain: sentence,
    });
    exercises.push({
      id: `voc-noun-de-${index}`,
      skill: "vocabulary",
      type: "cloze",
      prompt: `Ergänzen Sie das passende Wort: ${sentence.replace(full, "_____").replace(base, "_____")}`,
      tr: `Uygun Almanca kelimeyi yazın: ${tr}`,
      answer: base,
      explain: `Richtig ist: ${sentence}`,
    });
    ["akk", "dat", "nom"].forEach((gramCase) => {
      const caseLabel = { akk: "Akkusativ", dat: "Dativ", nom: "Nominativ" }[gramCase];
      const stem = base;
      const answer = `${article(gender, gramCase)} ${stem}`;
      const prompts = {
        akk: `Ich sehe _____ ${stem}.`,
        dat: `Ich helfe _____ ${stem}.`,
        nom: `_____ ${stem} ist wichtig.`,
      };
      exercises.push({
        id: `case-${gramCase}-${index}`,
        skill: "cases",
        type: "mc",
        prompt: `${caseLabel}: ${prompts[gramCase]}`,
        tr: `${caseLabel} artikeli seçin.`,
        options: shuffle([
          answer,
          ...shuffle([`der ${stem}`, `die ${stem}`, `das ${stem}`, `den ${stem}`, `dem ${stem}`].filter((option) => option !== answer)).slice(0, 3),
        ]),
        answer,
        explain: `${caseLabel}: ${answer}.`,
      });
    });
  });

  extraWords.forEach(([de, tr, sentence], index) => {
    const wrong = shuffle(extraWords.filter((_, i) => i !== index)).slice(0, 3).map((item) => item[1]);
    exercises.push({
      id: `voc-extra-${index}`,
      skill: "vocabulary",
      type: "mc",
      prompt: `Was bedeutet „${de}“?`,
      tr: `„${de}“ ne demek?`,
      options: shuffle([tr, ...wrong]),
      answer: tr,
      explain: sentence,
    });
    exercises.push({
      id: `voc-extra-cloze-${index}`,
      skill: "vocabulary",
      type: "cloze",
      prompt: `Schreiben Sie das Wort passend zum Satz: ${sentence.replace(de, "_____")}`,
      tr: `Cümleye uygun kelimeyi yazın: ${tr}`,
      answer: de,
      explain: sentence,
    });
  });

  verbs.forEach(([inf, tr, ich, du, er, perfekt, praet, future], index) => {
    const distractors = shuffle(verbs.filter((_, i) => i !== index)).slice(0, 3);
    [
      [`verb-pres-${index}`, "Präsens", `Heute _____ ich im Kurs. (${inf})`, ich, `Bugün için fiili çekimleyin: ${tr}`],
      [`verb-du-${index}`, "Präsens du", `Du _____ morgen zum Amt. (${inf})`, du, `Du biçimini seçin: ${tr}`],
      [`verb-perfect-${index}`, "Perfekt", `Gestern _____ ich viel. (${inf})`, perfekt, `Geçmiş zaman Perfekt kullanın: ${tr}`],
      [`verb-praet-${index}`, "Präteritum", `Letztes Jahr _____ ich oft Deutsch. (${inf})`, praet, `Präteritum kullanın: ${tr}`],
      [`verb-future-${index}`, "Futur I", `Nächste Woche _____ ich mehr. (${inf})`, future, `Gelecek zaman kullanın: ${tr}`],
    ].forEach(([id, tense, prompt, answer, turkish], offset) => {
      const wrong = distractors.map((v) => [v[2], v[5], v[6], v[7]][offset % 4]);
      exercises.push({
        id,
        skill: "verbs",
        type: "mc",
        prompt: `${tense}: ${prompt}`,
        tr: turkish,
        options: shuffle([answer, ...wrong]),
        answer,
        explain: `${inf}: ${answer}`,
      });
    });
  });

  const sentenceTemplates = [
    "Morgen gehe ich zum Arzt",
    "Ich muss den Termin beim Jobcenter verschieben",
    "Am Freitag kaufe ich Brot in der Bäckerei",
    "Die Kinder spielen nachmittags auf dem Spielplatz",
    "Wegen Krankheit kann ich heute nicht arbeiten",
    "Ich möchte einen neuen Termin vereinbaren",
    "Der Vermieter repariert morgen die Heizung",
    "Im Deutschkurs üben wir Briefe und Dialoge",
    "Nach dem Essen nehme ich die Tabletten",
    "Bitte bringen Sie den Ausweis mit",
    "Ich bewerbe mich um eine Stelle als Verkäufer",
    "Weil der Bus spät kommt, rufe ich im Kurs an",
    "Wenn ich Fragen habe, bitte ich um Hilfe",
    "Gestern habe ich eine E-Mail geschrieben",
    "Nächste Woche werde ich mehr sprechen üben",
  ];
  for (let i = 0; i < 64; i += 1) {
    const sentence = sentenceTemplates[i % sentenceTemplates.length];
    exercises.push({
      id: `sentence-${i}`,
      skill: "sentence",
      type: "order",
      prompt: "Bringen Sie die Wörter in die richtige Reihenfolge.",
      tr: "Kelimeleri doğru sıraya koyun.",
      pieces: shuffle(sentence.split(" ")),
      answer: sentence,
      explain: `Richtiger Satz: ${sentence}. Verbposition beachten.`,
    });
  }

  readingTexts.forEach((text, textIndex) => {
    text.questions.forEach(([question, options, answerIndex], questionIndex) => {
      exercises.push({
        id: `reading-${textIndex}-${questionIndex}`,
        skill: "reading",
        type: "reading",
        title: text.title,
        text: text.text,
        prompt: question,
        tr: text.tr,
        options: shuffle(options),
        answer: options[answerIndex],
        explain: `Lesen Sie im Text: ${text.text}`,
      });
    });
  });

  dialogueScripts.forEach((dialogue, index) => {
    exercises.push({
      id: `dialogue-${index}`,
      skill: "dialogue",
      type: "order",
      prompt: `Dialog: ${dialogue.title}. Ordnen Sie die Sätze.`,
      tr: dialogue.tr,
      pieces: shuffle(dialogue.lines),
      answer: dialogue.lines.join(" "),
      explain: dialogue.lines.join(" → "),
    });
  });

  listeningSituations.forEach(([title, audio, question, options, answerIndex], index) => {
    exercises.push({
      id: `listen-${index}`,
      skill: "listening",
      type: "listen",
      title,
      audio,
      prompt: question,
      tr: "Dinleyin ve doğru cevabı seçin.",
      options: shuffle(options),
      answer: options[answerIndex],
      explain: audio,
    });
  });

  return exercises;
}

const exerciseBank = buildExercises();

function buildLidQuestions() {
  const base = [
    ["Welche Farben hat die deutsche Flagge?", ["Schwarz, Rot, Gold", "Blau, Weiß, Rot", "Grün, Weiß, Rot", "Schwarz, Gelb, Blau"], 0, "Bayrağın renkleri: siyah, kırmızı, altın."],
    ["Wie heißt die Verfassung der Bundesrepublik Deutschland?", ["Grundgesetz", "Bundesordnung", "Deutschlandvertrag", "Bürgerbuch"], 0, "Almanya'nın anayasası Grundgesetz'dir."],
    ["Was ist Deutschland?", ["Ein demokratischer und sozialer Bundesstaat", "Eine Monarchie", "Eine Diktatur", "Ein Stadtstaat"], 0, "Almanya demokratik ve sosyal federal devlettir."],
    ["Wer wählt den Deutschen Bundestag?", ["Die wahlberechtigten Bürgerinnen und Bürger", "Nur die Bundesregierung", "Nur die Gerichte", "Die Polizei"], 0, "Bundestag'ı seçme hakkı olan halk seçer."],
    ["Was bedeutet Meinungsfreiheit?", ["Man darf seine Meinung frei sagen, solange man die Rechte anderer achtet.", "Man darf andere beleidigen.", "Nur Politiker dürfen sprechen.", "Zeitungen sind verboten."], 0, "Düşünce özgürlüğü başkalarının haklarına saygıyla kullanılır."],
    ["Welche Staatsform hat Deutschland?", ["Republik", "Königreich", "Sultanat", "Militärstaat"], 0, "Almanya bir cumhuriyettir."],
    ["Wann ist der Tag der Deutschen Einheit?", ["3. Oktober", "1. Mai", "24. Dezember", "9. November"], 0, "Alman Birliği Günü 3 Ekim'dir."],
    ["Was schützt die Menschenwürde?", ["Artikel 1 des Grundgesetzes", "Die Hausordnung", "Der Mietvertrag", "Der Fahrplan"], 0, "İnsan onurunu Temel Yasa'nın 1. maddesi korur."],
    ["Was bedeutet Religionsfreiheit?", ["Jeder darf seine Religion wählen oder keine Religion haben.", "Alle müssen dieselbe Religion haben.", "Religion ist verboten.", "Nur Feiertage sind erlaubt."], 0, "Din özgürlüğü din seçme veya dinsiz olma hakkıdır."],
    ["Was macht der Bundesrat?", ["Er wirkt bei Gesetzen mit und vertritt die Länder.", "Er verkauft Wohnungen.", "Er leitet Schulen direkt.", "Er ist ein Sportverein."], 0, "Bundesrat eyaletleri temsil eder ve yasalarda rol oynar."],
    ["Wer ist für die Einhaltung der Gesetze zuständig?", ["Gerichte und Behörden", "Nur Nachbarn", "Nur Vereine", "Nur private Firmen"], 0, "Mahkemeler ve kurumlar hukuku uygular."],
    ["Was bedeutet Gleichberechtigung?", ["Frauen und Männer haben gleiche Rechte.", "Nur Männer dürfen wählen.", "Nur Frauen dürfen arbeiten.", "Kinder entscheiden Gesetze."], 0, "Kadınlar ve erkekler eşit haklara sahiptir."],
    ["Ab welchem Alter darf man bei Bundestagswahlen wählen?", ["18 Jahre", "12 Jahre", "16 Jahre", "21 Jahre"], 0, "Bundestag seçimlerinde oy yaşı 18'dir."],
    ["Was ist eine Aufgabe der Polizei?", ["Gefahren abwehren und Straftaten verfolgen", "Gesetze beschließen", "Steuern erfinden", "Gerichte ersetzen"], 0, "Polis güvenliği sağlar ve suçları takip eder."],
    ["Welche Pflicht haben Eltern in Deutschland?", ["Sie müssen für ihre Kinder sorgen.", "Sie müssen Kinder nie anmelden.", "Sie dürfen Schulpflicht ignorieren.", "Sie müssen kein Essen geben."], 0, "Ebeveynler çocuklarına bakmakla yükümlüdür."],
    ["Was ist die Schulpflicht?", ["Kinder müssen eine Schule besuchen.", "Nur Erwachsene müssen lernen.", "Schule ist immer freiwillig.", "Schule gibt es nur online."], 0, "Çocuklar okula gitmek zorundadır."],
    ["Was ist ein Rechtsstaat?", ["Der Staat und alle Menschen müssen sich an Gesetze halten.", "Nur Bürger müssen Gesetze beachten.", "Gerichte sind unwichtig.", "Regeln gelten nur manchmal."], 0, "Hukuk devletinde herkes hukuka bağlıdır."],
    ["Was bedeutet Sozialstaat?", ["Der Staat hilft Menschen in Notlagen.", "Der Staat verbietet Hilfe.", "Nur Reiche bekommen Hilfe.", "Kranke müssen allein bleiben."], 0, "Sosyal devlet zor durumda destek verir."],
    ["Welche Institution beschließt Bundesgesetze?", ["Bundestag und Bundesrat wirken mit.", "Nur Sportvereine", "Nur Vermieter", "Nur Schulen"], 0, "Federal yasalarda Bundestag ve Bundesrat rol oynar."],
    ["Was ist eine Kommune?", ["Eine Gemeinde oder Stadt", "Ein Gerichtsurteil", "Ein Bundesland", "Ein Reisepass"], 0, "Kommune belediye veya şehirdir."],
  ];

  const topics = [
    ["Demokratie", "freie Wahlen", "Warum sind freie Wahlen wichtig?", "Damit Bürgerinnen und Bürger politisch mitbestimmen können."],
    ["Grundrechte", "Versammlungsfreiheit", "Was erlaubt die Versammlungsfreiheit?", "Menschen dürfen sich friedlich versammeln."],
    ["Rechtsstaat", "Gerichte", "Warum sind unabhängige Gerichte wichtig?", "Sie entscheiden nach Recht und Gesetz."],
    ["Sozialstaat", "Krankenversicherung", "Warum gibt es Sozialversicherungen?", "Sie helfen bei Krankheit, Arbeitslosigkeit und Alter."],
    ["Geschichte", "Nationalsozialismus", "Warum ist Erinnerung wichtig?", "Damit Demokratie und Menschenrechte geschützt werden."],
    ["Bundesländer", "Föderalismus", "Was bedeutet Föderalismus?", "Bund und Länder teilen sich Aufgaben."],
    ["Europa", "Europäische Union", "Wozu gehört Deutschland?", "Deutschland ist Mitglied der Europäischen Union."],
    ["Familie", "Kinderrechte", "Was schützt Kinder?", "Kinder haben Rechte auf Schutz, Bildung und Fürsorge."],
    ["Arbeit", "Betriebsrat", "Was vertritt ein Betriebsrat?", "Er vertritt Interessen von Beschäftigten im Betrieb."],
    ["Alltag", "Mülltrennung", "Warum trennt man Müll?", "Damit Stoffe wiederverwertet werden können."],
    ["Wahlen", "Parteien", "Was machen Parteien?", "Sie vertreten politische Ziele und stellen Kandidaten auf."],
    ["Religion", "Toleranz", "Was bedeutet Toleranz?", "Andere Überzeugungen werden respektiert."],
    ["Presse", "Pressefreiheit", "Warum ist Pressefreiheit wichtig?", "Medien dürfen unabhängig berichten."],
    ["Ehrenamt", "Vereine", "Was ist ein Ehrenamt?", "Man hilft freiwillig ohne Hauptberuf daraus zu machen."],
    ["Kommunen", "Bürgerbüro", "Was erledigt man im Bürgerbüro?", "Anmeldung, Ausweise und Bescheinigungen."],
  ];

  const questions = base.map(([question, options, answerIndex, tr], index) => ({
    id: `lid-official-like-${index + 1}`,
    question,
    options,
    answer: options[answerIndex],
    tr,
  }));

  let counter = questions.length + 1;
  while (questions.length < 300) {
    const [topic, keyword, question, answer] = topics[questions.length % topics.length];
    const wrongs = shuffle(topics.filter((item) => item[1] !== keyword)).slice(0, 3).map((item) => item[3]);
    questions.push({
      id: `lid-general-${counter}`,
      topic,
      question: `${question} (${keyword})`,
      options: shuffle([answer, ...wrongs]),
      answer,
      tr: `${topic} konusu için açıklama: ${answer}`,
    });
    counter += 1;
  }

  const stateQuestions = [
    ["Berlin", "Wie heißt das Landesparlament von Berlin?", "Abgeordnetenhaus"],
    ["Nordrhein-Westfalen", "Wie heißt die Landeshauptstadt von Nordrhein-Westfalen?", "Düsseldorf"],
    ["Bayern", "Wie heißt die Landeshauptstadt von Bayern?", "München"],
    ["Hamburg", "Was ist Hamburg?", "Ein Stadtstaat"],
    ["Hessen", "Wie heißt die Landeshauptstadt von Hessen?", "Wiesbaden"],
    ["Sachsen", "Wie heißt die Landeshauptstadt von Sachsen?", "Dresden"],
    ["Niedersachsen", "Wie heißt die Landeshauptstadt von Niedersachsen?", "Hannover"],
    ["Rheinland-Pfalz", "Wie heißt die Landeshauptstadt von Rheinland-Pfalz?", "Mainz"],
    ["Brandenburg", "Wie heißt die Landeshauptstadt von Brandenburg?", "Potsdam"],
    ["Schleswig-Holstein", "Wie heißt die Landeshauptstadt von Schleswig-Holstein?", "Kiel"],
  ];
  stateQuestions.forEach(([state, question, answer], index) => {
    questions.push({
      id: `lid-state-${index + 1}`,
      topic: state,
      question,
      options: shuffle([answer, "Berlin", "Hamburg", "Bonn"]),
      answer,
      tr: `${state} eyalet sorusu.`,
    });
  });
  return questions.slice(0, 310);
}

const lidQuestions = buildLidQuestions();

const progress = loadProgress();
const state = {
  view: location.hash.replace("#", "") || "dashboard",
  currentExercise: null,
  currentFilter: "all",
  translationOpen: false,
  orderChosen: [],
  letterIndex: 0,
  exam: null,
  examTimer: null,
  lidQuiz: null,
  lidTimer: null,
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { stats: {}, sessions: [], examResults: [], lidResults: [] };
  } catch {
    return { stats: {}, sessions: [], examResults: [], lidResults: [] };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function normalizeView(view) {
  return views.some(([id]) => id === view) ? view : "dashboard";
}

function setView(view) {
  const nextView = normalizeView(view);
  state.view = nextView;
  if ((location.hash.replace("#", "") || "dashboard") !== nextView) {
    history.pushState(null, "", `#${nextView}`);
  }
  state.translationOpen = false;
  state.orderChosen = [];
  render();
}

function renderNav() {
  const nav = document.querySelector("#nav");
  nav.innerHTML = views.map(([id, label]) => `<button type="button" data-view="${id}" class="${id === state.view ? "active" : ""}">${label}</button>`).join("");
  nav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
}

function statsSummary() {
  const values = Object.values(progress.stats);
  const answered = values.length;
  const correct = values.filter((item) => item.lastCorrect).length;
  const wrong = values.filter((item) => item.wrongCount && !item.lastCorrect).length;
  const percent = answered ? Math.round((correct / answered) * 100) : 0;
  return { answered, correct, wrong, percent };
}

function skillStats() {
  const result = {};
  Object.entries(skillNames).forEach(([key, label]) => {
    const exercises = exerciseBank.filter((item) => item.skill === key);
    const answered = exercises.filter((item) => progress.stats[item.id]);
    const correct = answered.filter((item) => progress.stats[item.id].lastCorrect);
    result[key] = {
      label,
      total: exercises.length,
      answered: answered.length,
      correct: correct.length,
      percent: answered.length ? Math.round((correct.length / answered.length) * 100) : 0,
    };
  });
  return result;
}

function render() {
  state.view = normalizeView(state.view);
  renderNav();
  const app = document.querySelector("#app");
  const renderer = {
    dashboard: renderDashboard,
    practice: renderPractice,
    letters: renderLetters,
    reading: () => renderPractice("reading"),
    dialogues: () => renderPractice("dialogue"),
    listening: () => renderPractice("listening"),
    speaking: renderSpeaking,
    exams: renderExams,
    lid: renderLid,
    analysis: renderAnalysis,
  }[state.view];
  app.innerHTML = renderer();
  bindCurrentView();
  app.focus({ preventScroll: true });
}

function sourceNote() {
  return `<div class="source-note">Prüfungsstruktur nach BAMF/g.a.st.-Informationen. Die DTZ- und LiD-Aufgaben in dieser App sind eigenständige Übungsaufgaben. Offizielle Quellen: ${officialSources.map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`).join(" · ")}</div>`;
}

function renderDashboard() {
  const summary = statsSummary();
  const total = exerciseBank.length + letterPrompts.length + speakingTasks.length + pictureTasks.length + lidQuestions.length + 30;
  return `
    <section class="grid">
      <div class="card span-8">
        <p class="eyebrow">Deutsch lernen mit Unterstützung</p>
        <h2>Für Integrationskurs, DTZ B1 und Alltag in Deutschland</h2>
        <p class="muted">Die App enthält ${exerciseBank.length}+ automatisch rotierende Sprachübungen, ${letterPrompts.length} Briefsituationen, Sprech- und Bildaufgaben, 30 prüfungsnahe DTZ-Sets und ${lidQuestions.length} Fragen im Bereich Leben in Deutschland.</p>
        <div class="actions">
          <button class="primary" data-view="practice" type="button">Weiter üben</button>
          <button class="secondary" data-view="exams" type="button">Prüfung starten</button>
          <button class="ghost" data-view="lid" type="button">LiD-Test üben</button>
        </div>
      </div>
      <div class="card span-4">
        <div class="metric"><span>Fortschritt</span><strong>${summary.percent}%</strong></div>
        <div class="progress-bar" aria-label="Fortschritt"><span style="width:${summary.percent}%"></span></div>
        <p class="muted">${summary.correct} richtig gelöst, ${summary.wrong} warten auf Wiederholung.</p>
      </div>
      <div class="card span-3"><div class="metric"><span>Aufgaben gesamt</span><strong>${total}</strong></div></div>
      <div class="card span-3"><div class="metric"><span>Übungsbank</span><strong>${exerciseBank.length}</strong></div></div>
      <div class="card span-3"><div class="metric"><span>DTZ-Sets</span><strong>30</strong></div></div>
      <div class="card span-3"><div class="metric"><span>LiD-Fragen</span><strong>${lidQuestions.length}</strong></div></div>
      <div class="card span-12">
        <h3>So rotiert die App</h3>
        <p class="muted">Richtig gelöste Aufgaben verschwinden aus der normalen Rotation. Falsch gelöste Aufgaben bleiben im Wiederholungstopf, bis sie richtig beantwortet werden. So bleibt das Training abwechslungsreich und trotzdem freundlich.</p>
        <div class="pill-row">
          ${Object.values(skillNames).map((label) => `<span class="pill">${label}</span>`).join("")}
          <span class="pill">Briefe</span><span class="pill">Aussprache</span><span class="pill">Foto beschreiben</span><span class="pill">Timer-Prüfungen</span>
        </div>
      </div>
      <div class="card span-12">${sourceNote()}</div>
    </section>
  `;
}

function bindCurrentView() {
  document.querySelectorAll("#app [data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  const binders = {
    practice: bindPractice,
    reading: bindPractice,
    dialogues: bindPractice,
    listening: bindPractice,
    letters: bindLetters,
    speaking: bindSpeaking,
    exams: bindExams,
    lid: bindLid,
    analysis: bindAnalysis,
  };
  if (binders[state.view]) binders[state.view]();
}

function selectExercise(filter = state.currentFilter) {
  state.currentFilter = filter;
  const bank = exerciseBank.filter((item) => filter === "all" || item.skill === filter);
  const wrong = bank.filter((item) => progress.stats[item.id]?.wrongCount && !progress.stats[item.id]?.lastCorrect);
  const fresh = bank.filter((item) => !progress.stats[item.id]?.lastCorrect);
  const pool = wrong.length && Math.random() < 0.6 ? wrong : fresh;
  state.currentExercise = pool.length ? choice(pool) : null;
  state.orderChosen = [];
  state.translationOpen = false;
}

function renderPractice(forcedFilter) {
  if (forcedFilter && state.currentFilter !== forcedFilter) selectExercise(forcedFilter);
  if (!state.currentExercise) selectExercise(forcedFilter || state.currentFilter);
  const filterOptions = [["all", "Alle"], ...Object.entries(skillNames).map(([key, label]) => [key, label])]
    .map(([value, label]) => `<option value="${value}" ${state.currentFilter === value ? "selected" : ""}>${label}</option>`).join("");
  return `
    <section class="grid">
      <div class="card span-4">
        <h2>${forcedFilter ? skillNames[forcedFilter] : "Übungen"}</h2>
        <p class="muted">Wählen Sie einen Bereich. Richtig gelöste Aufgaben kommen nicht wieder; falsche Antworten werden gezielt wiederholt.</p>
        ${forcedFilter ? "" : `<label>Bereich<select id="skillFilter">${filterOptions}</select></label>`}
        <div class="actions">
          <button class="primary" id="nextExercise" type="button">Neue Aufgabe</button>
          <button class="ghost" id="toggleTranslation" type="button">Türkisch</button>
        </div>
      </div>
      <div class="card span-8">
        ${state.currentExercise ? renderExercise(state.currentExercise) : renderPracticeComplete()}
      </div>
    </section>
  `;
}

function renderPracticeComplete() {
  return `
    <div class="exercise">
      <h3>Dieser Bereich ist im Moment fertig.</h3>
      <p class="muted">Alle Aufgaben wurden richtig beantwortet. Setzen Sie den Fortschritt zurück, wenn Sie komplett neu starten möchten.</p>
      <button class="danger" id="resetArea" type="button">Fortschritt in diesem Bereich zurücksetzen</button>
    </div>
  `;
}

function renderExercise(exercise) {
  const translation = state.translationOpen ? `<div class="feedback">${escapeHtml(exercise.tr || "Türkische Hilfe ist für diese Aufgabe nicht hinterlegt.")}</div>` : "";
  const header = `<div class="pill-row"><span class="pill">${skillNames[exercise.skill]}</span><span class="pill">${exercise.type}</span></div>${translation}`;
  if (exercise.type === "reading") {
    return `
      <div class="exercise">
        ${header}
        <h3>${escapeHtml(exercise.title)}</h3>
        <p class="prompt">${escapeHtml(exercise.text)}</p>
        <h3>${escapeHtml(exercise.prompt)}</h3>
        ${renderOptions(exercise)}
      </div>
    `;
  }
  if (exercise.type === "listen") {
    return `
      <div class="exercise">
        ${header}
        <h3>${escapeHtml(exercise.title)}</h3>
        <p class="muted">Hören Sie den Text und beantworten Sie die Frage.</p>
        <button class="secondary" id="playAudio" type="button">Hörprobe abspielen</button>
        <p class="prompt">${escapeHtml(exercise.prompt)}</p>
        ${renderOptions(exercise)}
      </div>
    `;
  }
  if (exercise.type === "cloze") {
    return `
      <div class="exercise">
        ${header}
        <p class="prompt">${escapeHtml(exercise.prompt)}</p>
        <div class="input-row">
          <input id="clozeInput" autocomplete="off" placeholder="Antwort schreiben">
          <button class="primary" id="checkCloze" type="button">Prüfen</button>
        </div>
        <div id="exerciseFeedback"></div>
      </div>
    `;
  }
  if (exercise.type === "order") {
    const available = exercise.pieces.filter((piece) => !state.orderChosen.includes(piece));
    return `
      <div class="exercise">
        ${header}
        <p class="prompt">${escapeHtml(exercise.prompt)}</p>
        <h3>Ihre Reihenfolge</h3>
        <div class="drop-row" id="chosenTokens">
          ${state.orderChosen.map((piece, index) => `<button class="token" data-remove-token="${index}" type="button">${escapeHtml(piece)}</button>`).join("")}
        </div>
        <h3>Wörter/Sätze</h3>
        <div class="token-row">
          ${available.map((piece) => `<button class="token" data-token="${escapeHtml(piece)}" type="button">${escapeHtml(piece)}</button>`).join("")}
        </div>
        <div class="actions">
          <button class="primary" id="checkOrder" type="button">Prüfen</button>
          <button class="ghost" id="clearOrder" type="button">Leeren</button>
        </div>
        <div id="exerciseFeedback"></div>
      </div>
    `;
  }
  return `
    <div class="exercise">
      ${header}
      <p class="prompt">${escapeHtml(exercise.prompt)}</p>
      ${renderOptions(exercise)}
    </div>
  `;
}

function renderOptions(exercise) {
  return `<div class="option-list">${exercise.options.map((option) => `<button class="option" data-answer="${escapeHtml(option)}" type="button">${escapeHtml(option)}</button>`).join("")}</div><div id="exerciseFeedback"></div>`;
}

function bindPractice() {
  const filter = document.querySelector("#skillFilter");
  if (filter) {
    filter.addEventListener("change", () => {
      selectExercise(filter.value);
      render();
    });
  }
  document.querySelector("#nextExercise")?.addEventListener("click", () => {
    selectExercise(state.currentFilter);
    render();
  });
  document.querySelector("#toggleTranslation")?.addEventListener("click", () => {
    state.translationOpen = !state.translationOpen;
    render();
  });
  document.querySelector("#playAudio")?.addEventListener("click", () => speak(state.currentExercise.audio));
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => gradeExercise(button.dataset.answer));
  });
  document.querySelector("#checkCloze")?.addEventListener("click", () => {
    gradeExercise(document.querySelector("#clozeInput").value);
  });
  document.querySelector("#clozeInput")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") gradeExercise(event.currentTarget.value);
  });
  document.querySelectorAll("[data-token]").forEach((button) => {
    button.addEventListener("click", () => {
      state.orderChosen.push(button.dataset.token);
      render();
    });
  });
  document.querySelectorAll("[data-remove-token]").forEach((button) => {
    button.addEventListener("click", () => {
      state.orderChosen.splice(Number(button.dataset.removeToken), 1);
      render();
    });
  });
  document.querySelector("#clearOrder")?.addEventListener("click", () => {
    state.orderChosen = [];
    render();
  });
  document.querySelector("#checkOrder")?.addEventListener("click", () => gradeExercise(state.orderChosen.join(" ")));
  document.querySelector("#resetArea")?.addEventListener("click", () => {
    exerciseBank.filter((item) => state.currentFilter === "all" || item.skill === state.currentFilter).forEach((item) => delete progress.stats[item.id]);
    saveProgress();
    selectExercise(state.currentFilter);
    render();
  });
}

function gradeExercise(answer) {
  const exercise = state.currentExercise;
  if (!exercise) return;
  const expected = exercise.answer;
  const correct = normalize(answer) === normalize(expected);
  const options = document.querySelectorAll("[data-answer]");
  options.forEach((button) => {
    if (normalize(button.dataset.answer) === normalize(expected)) button.classList.add("correct");
    if (normalize(button.dataset.answer) === normalize(answer) && !correct) button.classList.add("wrong");
    button.disabled = true;
  });
  recordExercise(exercise, correct);
  const feedback = document.querySelector("#exerciseFeedback");
  if (feedback) {
    feedback.innerHTML = `<div class="feedback ${correct ? "ok" : "bad"}"><strong>${correct ? "Richtig." : "Noch nicht."}</strong><br>Richtige Antwort: ${escapeHtml(expected)}<br>${escapeHtml(exercise.explain || "")}</div>`;
  }
}

function recordExercise(exercise, correct) {
  const item = progress.stats[exercise.id] || {
    skill: exercise.skill,
    correctCount: 0,
    wrongCount: 0,
    lastCorrect: false,
  };
  if (correct) item.correctCount += 1;
  else item.wrongCount += 1;
  item.lastCorrect = correct;
  item.lastAnsweredAt = new Date().toISOString();
  progress.stats[exercise.id] = item;
  progress.sessions.push({ id: exercise.id, skill: exercise.skill, correct, at: item.lastAnsweredAt });
  progress.sessions = progress.sessions.slice(-300);
  saveProgress();
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showModal("<h3>Hören nicht verfügbar</h3><p>Dieser Browser unterstützt keine Sprachausgabe.</p>");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function speakQueue(texts) {
  if (!("speechSynthesis" in window)) {
    showModal("<h3>Hören nicht verfügbar</h3><p>Dieser Browser unterstützt keine Sprachausgabe.</p>");
    return;
  }
  window.speechSynthesis.cancel();
  let index = 0;
  const next = () => {
    if (index >= texts.length) return;
    const utterance = new SpeechSynthesisUtterance(texts[index]);
    utterance.lang = "de-DE";
    utterance.rate = 0.92;
    utterance.onend = () => {
      index += 1;
      setTimeout(next, 650);
    };
    window.speechSynthesis.speak(utterance);
  };
  next();
}

function renderLetters() {
  const [title, prompt, tr] = letterPrompts[state.letterIndex % letterPrompts.length];
  return `
    <section class="grid">
      <div class="card span-5">
        <h2>Briefe schreiben</h2>
        <p class="muted">Üben Sie formelle und halbformelle Schreiben: Jobcenter, Gemeinde, Vermieter, Arbeitgeber, Beruf, Schule, Bank und Alltag.</p>
        <div class="pill-row"><span class="pill">${state.letterIndex + 1} / ${letterPrompts.length}</span><span class="pill">B1-Brief</span></div>
        <div class="actions">
          <button class="primary" id="nextLetter" type="button">Neue Situation</button>
          <button class="ghost" id="letterHelp" type="button">Türkisch</button>
        </div>
      </div>
      <div class="card span-7">
        <h3>${escapeHtml(title)}</h3>
        <p class="prompt">${escapeHtml(prompt)}</p>
        <textarea id="letterText" placeholder="Schreiben Sie hier Ihren Brief. Denken Sie an Anrede, Grund, vier Inhaltspunkte und Gruß."></textarea>
        <div class="actions">
          <button class="primary" id="analyzeLetter" type="button">Brief prüfen</button>
          <button class="secondary" id="sampleLetter" type="button">Muster sehen</button>
        </div>
        <div id="letterResult"></div>
      </div>
    </section>
  `;
}

function bindLetters() {
  document.querySelector("#nextLetter")?.addEventListener("click", () => {
    state.letterIndex = (state.letterIndex + 1) % letterPrompts.length;
    render();
  });
  document.querySelector("#letterHelp")?.addEventListener("click", () => {
    const [, , tr] = letterPrompts[state.letterIndex % letterPrompts.length];
    showModal(`<h3>Türkische Hilfe</h3><p>${escapeHtml(tr)}</p>`);
  });
  document.querySelector("#sampleLetter")?.addEventListener("click", () => {
    const [title] = letterPrompts[state.letterIndex % letterPrompts.length];
    showModal(`<h3>Musterbrief: ${escapeHtml(title)}</h3><p>Sehr geehrte Damen und Herren,</p><p>ich schreibe Ihnen, weil ich zu dieser Situation eine Information geben und um Unterstützung bitten möchte. Der Grund ist wichtig, weil ich die Angelegenheit schnell und korrekt klären möchte.</p><p>Bitte teilen Sie mir mit, welche Unterlagen Sie noch benötigen. Ich kann die fehlenden Dokumente bis Freitag schicken. Außerdem bitte ich um eine kurze Bestätigung per E-Mail.</p><p>Vielen Dank für Ihre Hilfe.</p><p>Mit freundlichen Grüßen<br>Ihr Name</p>`);
  });
  document.querySelector("#analyzeLetter")?.addEventListener("click", () => {
    const text = document.querySelector("#letterText").value;
    const result = analyzeLetterText(text);
    document.querySelector("#letterResult").innerHTML = result;
  });
}

function analyzeLetterText(text) {
  const words = normalize(text).split(" ").filter(Boolean);
  const lower = normalize(text);
  const checks = [
    ["Anrede", /sehr geehrte|hallo|guten tag/i.test(text), "Beginnen Sie mit „Sehr geehrte Damen und Herren,“ oder einer passenden Anrede."],
    ["Gruß", /mit freundlichen grüßen|freundliche grüße|viele grüße/i.test(lower), "Schließen Sie mit einem höflichen Gruß."],
    ["Länge", words.length >= 70, "Für B1 sind oft etwa 80-120 Wörter gut."],
    ["Höflichkeit", /bitte|vielen dank|könnten|möchte|würde/i.test(lower), "Nutzen Sie höfliche Formulierungen."],
    ["Grund", /weil|da|grund|problem|möchte|brauche/i.test(lower), "Nennen Sie klar den Grund des Briefes."],
    ["Termin/Frist", /termin|freitag|montag|datum|uhr|bis|am /i.test(lower), "Nennen Sie Termine oder Fristen möglichst genau."],
  ];
  const passed = checks.filter(([, ok]) => ok).length;
  return `
    <div class="feedback ${passed >= 5 ? "ok" : "bad"}">
      <strong>${passed}/6 Kriterien erfüllt.</strong>
      <ul>${checks.map(([name, ok, tip]) => `<li>${ok ? "✓" : "•"} ${name}: ${ok ? "gut" : tip}</li>`).join("")}</ul>
      <p><strong>Sprachtipp:</strong> Schreiben Sie kurze Sätze. Beispiel: „Ich bitte Sie um einen neuen Termin.“ / „Die Unterlage schicke ich bis Freitag.“</p>
    </div>
  `;
}

function renderSpeaking() {
  return `
    <section class="grid">
      <div class="card span-12">
        <h2>Sprechen, Vorlesen und Fotos beschreiben</h2>
        <p class="muted">Die Aufnahme nutzt die Spracherkennung Ihres Browsers. Auf Android funktioniert das am besten in Chrome. Wenn Spracherkennung nicht verfügbar ist, können Sie den gesprochenen Text eintippen.</p>
      </div>
      <div class="card span-6">
        <h3>Vorstellungsrunde und Vorlesen</h3>
        <div class="list">
          ${speakingTasks.map((task, index) => `
            <div class="list-item">
              <h3>${escapeHtml(task.title)}</h3>
              <p>${escapeHtml(task.prompt)}</p>
              <p class="muted">${escapeHtml(task.tr)}</p>
              <textarea id="speechManual-${index}" placeholder="Aufnahme oder Text erscheint hier"></textarea>
              <div class="actions">
                <button class="primary" data-speech="${index}" type="button">Aufnehmen</button>
                <button class="secondary" data-analyze-speech="${index}" type="button">Analysieren</button>
              </div>
              <div id="speechResult-${index}"></div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="card span-6">
        <h3>Fotoaufgaben</h3>
        <div class="photo-grid">
          ${pictureTasks.map((task, index) => `
            <article class="photo-card">
              <img src="${task.image}" alt="${escapeHtml(task.fallback)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'prompt',textContent:'${escapeHtml(task.fallback)}'}))">
              <div class="body">
                <h3>${escapeHtml(task.title)}</h3>
                <p class="muted">Beschreiben Sie das Foto und erzählen Sie danach kurz von eigenen Erfahrungen.</p>
                <textarea id="pictureManual-${index}" placeholder="Ihre Beschreibung"></textarea>
                <div class="actions">
                  <button class="primary" data-picture-speech="${index}" type="button">Aufnehmen</button>
                  <button class="secondary" data-analyze-picture="${index}" type="button">Analysieren</button>
                </div>
                <div id="pictureResult-${index}"></div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function bindSpeaking() {
  document.querySelectorAll("[data-speech]").forEach((button) => {
    button.addEventListener("click", () => startRecognition(`speechManual-${button.dataset.speech}`));
  });
  document.querySelectorAll("[data-picture-speech]").forEach((button) => {
    button.addEventListener("click", () => startRecognition(`pictureManual-${button.dataset.pictureSpeech}`));
  });
  document.querySelectorAll("[data-analyze-speech]").forEach((button) => {
    const index = Number(button.dataset.analyzeSpeech);
    const task = speakingTasks[index];
    const text = document.querySelector(`#speechManual-${index}`).value;
    document.querySelector(`#speechResult-${index}`).innerHTML = analyzeSpeechText(text, task.expectedKeywords, task.expectedText);
  });
  document.querySelectorAll("[data-analyze-picture]").forEach((button) => {
    const index = Number(button.dataset.analyzePicture);
    const task = pictureTasks[index];
    const text = document.querySelector(`#pictureManual-${index}`).value;
    document.querySelector(`#pictureResult-${index}`).innerHTML = analyzeSpeechText(text, task.expectedKeywords);
  });
}

function startRecognition(targetId) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const target = document.querySelector(`#${targetId}`);
  if (!Recognition) {
    showModal("<h3>Spracherkennung nicht verfügbar</h3><p>Bitte nutzen Sie Chrome auf Android oder tippen Sie den gesprochenen Text ein.</p>");
    return;
  }
  const recognition = new Recognition();
  recognition.lang = "de-DE";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = (event) => {
    target.value = event.results[0][0].transcript;
  };
  recognition.onerror = () => {
    showModal("<h3>Aufnahme nicht erkannt</h3><p>Bitte sprechen Sie langsam und deutlich oder versuchen Sie es noch einmal.</p>");
  };
  recognition.start();
}

function analyzeSpeechText(text, keywords = [], expectedText = "") {
  const words = normalize(text).split(" ").filter(Boolean);
  const lower = normalize(text);
  const hits = keywords.filter((word) => lower.includes(normalize(word)));
  const lengthOk = words.length >= 18 || (expectedText && words.length >= 8);
  const connectors = ["weil", "dass", "wenn", "deshalb", "danach", "zuerst"].filter((word) => lower.includes(word));
  const score = expectedText ? tokenScore(text, expectedText) : Math.round(((hits.length / Math.max(1, keywords.length)) * 70) + (lengthOk ? 20 : 0) + Math.min(10, connectors.length * 5));
  const tips = [];
  if (!lengthOk) tips.push("Sprechen Sie in mehreren vollständigen Sätzen.");
  if (hits.length < Math.ceil(keywords.length / 2)) tips.push(`Nutzen Sie wichtige Wörter: ${keywords.join(", ")}.`);
  if (!connectors.length) tips.push("Verbinden Sie Sätze mit „weil“, „dann“, „danach“ oder „deshalb“.");
  if (!/\b(ich|er|sie|wir|man|die|der|das)\b/i.test(lower)) tips.push("Achten Sie auf ein klares Subjekt im Satz.");
  return `
    <div class="feedback ${score >= 70 ? "ok" : "bad"}">
      <strong>Analyse: ${Math.min(100, score)}%</strong>
      <p>Erkannte Schlüsselwörter: ${hits.length ? hits.join(", ") : "noch keine"}</p>
      <p>${tips.length ? tips.join(" ") : "Sehr gut. Arbeiten Sie jetzt an flüssiger Aussprache und natürlicher Betonung."}</p>
    </div>
  `;
}

function uniqueOptions(options) {
  return [...new Set(options.filter((option) => String(option ?? "").trim()))];
}

function examOrderOptions(item) {
  const answer = item.answer || (item.pieces || []).join(" ");
  const words = answer.split(" ").filter(Boolean);
  if (words.length < 3) return [answer];
  const variants = [
    answer,
    [...words.slice(1), words[0]].join(" "),
    [words[0], ...words.slice(2), words[1]].join(" "),
    [...words].reverse().join(" "),
  ];
  return uniqueOptions(variants).slice(0, 4);
}

function normalizeExamItem(item) {
  const answer = item.answer || "";
  let options = Array.isArray(item.options) ? item.options : [];
  if (!options.length && item.type === "order") {
    options = examOrderOptions(item);
  }
  if (!options.length && answer) {
    options = [answer, "richtig", "falsch"];
  }
  return {
    ...item,
    answer,
    options: shuffle(uniqueOptions([answer, ...options])).slice(0, 4),
  };
}

function buildExam(examNumber) {
  const listening = shuffle(exerciseBank.filter((item) => item.skill === "listening")).slice(0, 20).map(normalizeExamItem);
  const reading = shuffle(exerciseBank.filter((item) => ["reading", "sentence", "cases", "verbs"].includes(item.skill))).slice(0, 25).map(normalizeExamItem);
  const writing = letterPrompts[(examNumber - 1) % letterPrompts.length];
  const speaking = [speakingTasks[0], choice(pictureTasks, examNumber / 30), { title: "Gemeinsam planen", prompt: "Planen Sie mit einer anderen Person eine kleine Feier im Kurs: Termin, Ort, Essen, Aufgaben.", tr: "Kurs için küçük bir kutlamayı planlayın." }];
  return { number: examNumber, listening, reading, writing, speaking, startedAt: Date.now(), duration: 100 * 60 };
}

function renderExams() {
  if (!state.exam) {
    return `
      <section class="grid">
        <div class="card span-7">
          <h2>30 DTZ-Prüfungen</h2>
          <p class="muted">Jedes Set folgt der DTZ-Struktur: Hören 20 Aufgaben, Lesen 25 Aufgaben, Schreiben mit Brief/E-Mail und Sprechen mit Vorstellung, Bild/Situation und gemeinsamer Planung.</p>
          <label>Prüfung auswählen<select id="examNumber">${Array.from({ length: 30 }, (_, i) => `<option value="${i + 1}">Prüfung ${i + 1}</option>`).join("")}</select></label>
          <div class="actions">
            <button class="primary" id="startExam" type="button">Prüfung starten</button>
            <button class="secondary" id="startRandomExam" type="button">Zufällige Prüfung starten</button>
          </div>
          <p class="muted">Wenn der Button einmal nicht reagiert, laden Sie die Seite neu. Die Auswahl bleibt nicht gespeichert, damit jede Prüfung frisch startet.</p>
        </div>
        <div class="card span-5">
          <h3>Bewertung</h3>
          <p class="muted">Hören und Lesen werden automatisch ausgewertet. Schreiben und Sprechen erhalten eine Trainingsanalyse, weil echte DTZ-Bewertung geschulte Bewertende braucht.</p>
          <ul>
            <li>Hören + Lesen: 45 Punkte, B1 ab 33 Punkten.</li>
            <li>Schreiben: Brief mit vier Inhaltspunkten.</li>
            <li>Sprechen: Vorstellung, Foto/Situation, Planung.</li>
          </ul>
        </div>
        <div class="card span-12">${sourceNote()}</div>
      </section>
    `;
  }
  const exam = state.exam;
  return `
    <section class="grid">
      <div class="card span-12">
        <div class="metric"><h2>DTZ-Prüfung ${exam.number}</h2><span class="timer" id="examTimer">${formatTime(remainingExamSeconds())}</span></div>
        <p class="muted">Bearbeiten Sie alle Aufgaben. Die falschen und richtigen Antworten werden nach der Abgabe angezeigt.</p>
        <div class="actions">
          <button class="secondary" id="playAllListening" type="button">Alle Hördialoge nacheinander abspielen</button>
          <button class="ghost" id="stopExamAudio" type="button">Audio stoppen</button>
          <button class="danger" id="cancelExam" type="button">Prüfung verlassen</button>
        </div>
      </div>
      <form id="examForm" class="card span-12">
        <h3>Teil 1: Hören</h3>
        ${exam.listening.map((item, index) => renderExamQuestion(item, index, "hören")).join("")}
        <h3>Teil 2: Lesen</h3>
        ${exam.reading.map((item, index) => renderExamQuestion(item, index + exam.listening.length, "lesen")).join("")}
        <h3>Teil 3: Schreiben</h3>
        <p class="prompt">${escapeHtml(exam.writing[1])}</p>
        <textarea name="writing" placeholder="Schreiben Sie Ihren Brief hier."></textarea>
        <h3>Teil 4: Sprechen</h3>
        ${exam.speaking.map((task) => `<div class="list-item"><strong>${escapeHtml(task.title)}</strong><p>${escapeHtml(task.prompt || task.fallback)}</p></div>`).join("")}
        <div class="actions">
          <button class="primary" type="submit">Prüfung abgeben</button>
        </div>
      </form>
    </section>
  `;
}

function renderExamQuestion(item, index, section) {
  const question = item.type === "reading" ? `${item.title}: ${item.prompt}` : item.prompt;
  const text = item.type === "reading" ? `<p class="muted">${escapeHtml(item.text)}</p>` : "";
  const audioNumber = index + 1;
  const audio = item.type === "listen" ? `
    <div class="audio-card">
      <div>
        <strong>Hördialog ${audioNumber}</strong>
        <span class="pill">einzeln abspielbar</span>
      </div>
      <p class="muted">Hören Sie diesen Dialog separat und beantworten Sie danach die Frage.</p>
      <div class="actions">
        <button class="secondary" type="button" data-play="${escapeHtml(item.audio)}">Hördialog ${audioNumber} abspielen</button>
        <button class="ghost" type="button" data-stop-audio="true">Audio stoppen</button>
      </div>
    </div>
  ` : "";
  return `
    <div class="exam-question">
      <p><strong>${index + 1}. ${escapeHtml(question)}</strong> <span class="pill">${section}</span></p>
      ${text}${audio}
      <div class="option-list">
        ${item.options.map((option) => `<label class="option"><input type="radio" name="q${index}" value="${escapeHtml(option)}"> ${escapeHtml(option)}</label>`).join("")}
      </div>
    </div>
  `;
}

function bindExams() {
  const startSelectedExam = () => {
    const selected = Number(document.querySelector("#examNumber")?.value || 1);
    state.exam = buildExam(selected);
    startExamTimer();
    render();
  };
  document.querySelector("#startExam")?.addEventListener("click", startSelectedExam);
  document.querySelector("#startRandomExam")?.addEventListener("click", () => {
    state.exam = buildExam(Math.floor(Math.random() * 30) + 1);
    startExamTimer();
    render();
  });
  document.querySelector("#cancelExam")?.addEventListener("click", () => {
    clearInterval(state.examTimer);
    stopSpeech();
    state.exam = null;
    render();
  });
  document.querySelectorAll("[data-play]").forEach((button) => {
    button.addEventListener("click", () => {
      stopSpeech();
      speak(button.dataset.play);
    });
  });
  document.querySelectorAll("[data-stop-audio]").forEach((button) => {
    button.addEventListener("click", stopSpeech);
  });
  document.querySelectorAll("[data-exam-record]").forEach((button) => {
    button.addEventListener("click", () => startRecognition(button.dataset.examRecord));
  });
  document.querySelector("#playAllListening")?.addEventListener("click", async () => {
    const audios = state.exam.listening
      .map((item) => item.audio)
      .filter(Boolean)
      .filter((audio, index, all) => all.indexOf(audio) === index);
    speakQueue(audios);
  });
  document.querySelector("#stopExamAudio")?.addEventListener("click", stopSpeech);
  document.querySelector("#examForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    gradeExam(new FormData(event.currentTarget));
  });
}

function startExamTimer() {
  clearInterval(state.examTimer);
  state.examTimer = setInterval(() => {
    const timer = document.querySelector("#examTimer");
    if (timer) timer.textContent = formatTime(remainingExamSeconds());
    if (remainingExamSeconds() <= 0) {
      clearInterval(state.examTimer);
      document.querySelector("#examForm")?.requestSubmit();
    }
  }, 1000);
}

function remainingExamSeconds() {
  if (!state.exam) return 0;
  return Math.max(0, state.exam.duration - Math.floor((Date.now() - state.exam.startedAt) / 1000));
}

function gradeExam(formData) {
  const questions = [...state.exam.listening, ...state.exam.reading];
  let points = 0;
  const rows = questions.map((item, index) => {
    const answer = formData.get(`q${index}`) || "";
    const correct = normalize(answer) === normalize(item.answer);
    if (correct) points += 1;
    return `<tr><td>${index + 1}</td><td>${correct ? "richtig" : "falsch"}</td><td>${escapeHtml(answer || "-")}</td><td>${escapeHtml(item.answer)}</td></tr>`;
  });
  const writingHtml = analyzeLetterText(formData.get("writing") || "");
  const result = { exam: state.exam.number, points, at: new Date().toISOString() };
  progress.examResults.push(result);
  saveProgress();
  clearInterval(state.examTimer);
  state.exam = null;
  showModal(`
    <h3>Prüfung ausgewertet</h3>
    <p><strong>Hören + Lesen: ${points}/45 Punkte.</strong> ${points >= 33 ? "B1-Bereich erreicht." : "Weiter üben; Ziel für B1 sind 33 Punkte."}</p>
    ${writingHtml}
    <table class="table"><thead><tr><th>Nr.</th><th>Status</th><th>Ihre Antwort</th><th>Richtig</th></tr></thead><tbody>${rows.join("")}</tbody></table>
  `);
  render();
}

const dtzListenPart1Pool = [
  {
    audio: "Guten Tag Frau Schmidt. Die Schule schickt Ihnen die Unterlagen für die Anmeldung per Post. Bitte warten Sie auf den Brief und bringen Sie ihn nächste Woche mit.",
    prompt: "Was soll Frau Schmidt machen?",
    options: ["An die Schule schreiben.", "Am Samstag in die Schule kommen.", "Auf einen Brief warten."],
    answer: "Auf einen Brief warten.",
  },
  {
    audio: "Hallo Svetlana, hier ist Anna. Der Film beginnt nicht um halb neun, sondern schon um 20 Uhr. Bitte sei pünktlich am Kino.",
    prompt: "Wann soll Svetlana am Kino sein?",
    options: ["Um 20 Uhr.", "Um kurz vor halb neun.", "Um 20 Uhr 30."],
    answer: "Um 20 Uhr.",
  },
  {
    audio: "Das Bürgeramt hat diese Woche auch am Samstagmittag geöffnet. Sie können ohne Termin zwischen 10 und 13 Uhr kommen.",
    prompt: "Wann hat das Bürgeramt geöffnet?",
    options: ["Täglich bis 18 Uhr.", "Auch samstagmittags.", "Auch samstagabends."],
    answer: "Auch samstagmittags.",
  },
  {
    audio: "Wenn Sie dringend zum Orthopäden müssen, rufen Sie bitte zuerst die andere Nummer auf dem Rezept an. Dort bekommen Sie schneller einen Termin.",
    prompt: "Sie müssen dringend zum Orthopäden. Was sollen Sie tun?",
    options: ["Am 1. März vorbeikommen.", "Am 1. März anrufen.", "Eine andere Nummer anrufen."],
    answer: "Eine andere Nummer anrufen.",
  },
  {
    audio: "Die Straßenbahn 78 fährt heute nicht bis Rosengarten. Bitte steigen Sie an der Haltestelle Friedrichring um.",
    prompt: "Sie wollen zum Rosengarten. Was müssen Sie tun?",
    options: ["An der Haltestelle Friedrichring umsteigen.", "Mit der Straßenbahn 78 weiterfahren.", "Mit der U-Bahn-Linie 1 oder 2 fahren."],
    answer: "An der Haltestelle Friedrichring umsteigen.",
  },
  {
    audio: "Praxis Dr. Weber, guten Tag. Wir müssen Ihren Termin leider verschieben. Die Ärztin ist krank. Bitte rufen Sie uns zurück.",
    prompt: "Wer ruft an?",
    options: ["Eine Apotheke.", "Eine Arztpraxis.", "Eine Versicherung."],
    answer: "Eine Arztpraxis.",
  },
];

const dtzListenPart2Pool = [
  {
    audio: "Verkehrsmeldung: Auf der A 5 liegen Gegenstände auf der Fahrbahn. Bitte fahren Sie langsam und benutzen Sie nach Möglichkeit eine andere Strecke.",
    prompt: "Wo liegen Gegenstände auf der Straße?",
    options: ["Auf der A 3.", "Auf der A 5.", "Auf der A 45."],
    answer: "Auf der A 5.",
  },
  {
    audio: "Das Wetter: Am Sonntag wird es deutlich wärmer. Regen ist erst am Abend möglich. Der Wind bleibt schwach.",
    prompt: "Wie wird das Wetter am Sonntag?",
    options: ["Es wird wärmer.", "Es gibt Regen.", "Es wird sehr windig."],
    answer: "Es wird wärmer.",
  },
  {
    audio: "Nach den Nachrichten hören Sie Tipps für Autobesitzer: Wie bereitet man das Auto auf den Winter vor?",
    prompt: "Was hören Sie?",
    options: ["Verkehrsmeldungen.", "Die Nachrichten.", "Tipps für Autobesitzer."],
    answer: "Tipps für Autobesitzer.",
  },
  {
    audio: "Der Krimi im Abendprogramm fällt heute aus. Einen neuen Sendetermin gibt es noch nicht.",
    prompt: "Wann kann man den Krimi sehen?",
    options: ["Heute um 20.15 Uhr.", "Es gibt noch keinen neuen Termin.", "Morgen."],
    answer: "Es gibt noch keinen neuen Termin.",
  },
  {
    audio: "Wegen eines Brandes bittet die Feuerwehr alle Bewohner des Stadtteils: Bitte stören Sie die Löscharbeiten nicht und bleiben Sie hinter den Absperrungen.",
    prompt: "Die Bewohner des Stadtteils sollen",
    options: ["die Feuerwehr anrufen.", "die Löscharbeiten nicht stören.", "ihre Wohnungen verlassen."],
    answer: "die Löscharbeiten nicht stören.",
  },
  {
    audio: "Am Sonntag sendet Radio West ein Programm für Kinder. Danach folgen internationale Kurzfilme und am Abend ein Musikprogramm.",
    prompt: "Am Sonntag gibt es",
    options: ["ein Musikprogramm.", "ein Programm für Kinder.", "internationale Kurzfilme."],
    answer: "ein Programm für Kinder.",
  },
  {
    audio: "Erwachsene sollten Medinox nur einnehmen, wenn die Ärztin oder der Arzt zugestimmt hat. Lesen Sie die Packungsbeilage genau.",
    prompt: "Wie sollen Erwachsene Medinox einnehmen?",
    options: ["Dreimal am Tag.", "Mit Wasser.", "Nur wenn die Ärztin oder der Arzt zustimmt."],
    answer: "Nur wenn die Ärztin oder der Arzt zustimmt.",
  },
  {
    audio: "In der Lichtburg läuft am Wochenende ein Kinderfilm. Der Krimi kommt erst nächste Woche wieder ins Programm.",
    prompt: "Was läuft in der Lichtburg?",
    options: ["Ein Kinderfilm.", "Ein Krimi.", "Eine Komödie."],
    answer: "Ein Kinderfilm.",
  },
];

const dtzListenPart3Pool = [
  {
    audio: "Kundin: Guten Tag, ich habe mein Fahrrad letzte Woche reparieren lassen. Jetzt funktioniert die Bremse wieder nicht. Verkäufer: Das tut mir leid. Wir können Ihnen für zwei Tage ein Ersatzrad geben und die Reparatur sofort prüfen.",
    tfPrompt: "Die Kundin beschwert sich über eine Reparatur.",
    tfAnswer: "richtig",
    prompt: "Was bietet der Verkäufer an?",
    options: ["Ein neues Fahrrad.", "Ein Ersatzrad.", "Geld für das alte Rad."],
    answer: "Ein Ersatzrad.",
  },
  {
    audio: "Mann: Frau Scholz, ich fahre morgen für eine Woche weg. Könnten Sie bitte nach meinen Blumen sehen? Die Post bleibt im Briefkasten, das ist kein Problem. Frau Scholz: Ja, natürlich.",
    tfPrompt: "Der Sprecher will verreisen.",
    tfAnswer: "richtig",
    prompt: "Worum bittet der Mann Frau Scholz?",
    options: ["Sie soll ihn im Urlaub anrufen.", "Sie soll nach den Blumen sehen.", "Sie soll wichtige Post an seine Adresse schicken."],
    answer: "Sie soll nach den Blumen sehen.",
  },
  {
    audio: "Patientin: Guten Tag, ich habe ein Rezept für dieses Medikament. Apothekerin: Das Medikament ist heute leider nicht da, aber wir bestellen es. Es kostet Sie nichts, die Krankenkasse bezahlt es.",
    tfPrompt: "Sie hören ein Gespräch zwischen einer Patientin und einer Apothekerin.",
    tfAnswer: "richtig",
    prompt: "Was ist richtig?",
    options: ["Das Medikament kostet nichts.", "Das Medikament kann man nicht mehr bekommen.", "Das Medikament ist rezeptfrei."],
    answer: "Das Medikament kostet nichts.",
  },
  {
    audio: "Herr Braun: Kommst du morgen zur Versammlung? Herr Martin: Ich weiss es noch nicht genau. Eigentlich habe ich Urlaub, aber vielleicht muss ich am Nachmittag arbeiten.",
    tfPrompt: "Herr Braun und Herr Martin sind Kollegen.",
    tfAnswer: "richtig",
    prompt: "Kommt Herr Braun zur Versammlung?",
    options: ["Nein, er muss arbeiten.", "Nein, er hat Urlaub.", "Er weiss es noch nicht genau."],
    answer: "Er weiss es noch nicht genau.",
  },
  {
    audio: "Frau: Guten Tag, ich brauche die Tabletten für meinen Vater. Apotheker: Bitte geben Sie ihm mindestens drei Tabletten am Tag, aber nur nach dem Essen. Frau: Gut, ich schreibe es auf.",
    tfPrompt: "Die Frau ist Ärztin.",
    tfAnswer: "falsch",
    prompt: "Die Frau sagt dem Mann, dass",
    options: ["die Tabletten lange wirken.", "er mindestens drei Tabletten nehmen soll.", "er sofort zum Arzt gehen soll."],
    answer: "er mindestens drei Tabletten nehmen soll.",
  },
  {
    audio: "Maria: Meine neue Chefin ist oft arrogant. Früher war sie selbst keine Krankenschwester, trotzdem erklärt sie uns alles sehr streng. Freundin: Das klingt schwer.",
    tfPrompt: "Maria ist unglücklich in ihrem neuen Job.",
    tfAnswer: "richtig",
    prompt: "Maria sagt, dass ihre neue Chefin",
    options: ["jung ist.", "oft arrogant ist.", "selbst keine Krankenschwester war."],
    answer: "oft arrogant ist.",
  },
];

const dtzListenPart4Themes = [
  {
    topic: "Sonntags einkaufen",
    options: [
      "a: Es gibt schon viele Geschäfte, die sonntags offen haben.",
      "b: Im Ausland sind die Geschäfte sonntags geschlossen.",
      "c: In der Zukunft werden die Geschäfte länger offen sein.",
      "d: Man kann sonntags seine Freizeit nicht mehr zusammen verbringen.",
      "e: Schon jetzt haben die Leute zu viel Hektik.",
      "f: Sonntags sollten auch Banken offen haben.",
    ],
    statements: [
      { audio: "Ich finde, der Sonntag sollte ruhig bleiben. Die Menschen haben schon in der Woche genug Hektik.", answer: "e: Schon jetzt haben die Leute zu viel Hektik." },
      { audio: "Wenn alles auch sonntags offen ist, verbringen Familien noch weniger Zeit zusammen.", answer: "d: Man kann sonntags seine Freizeit nicht mehr zusammen verbringen." },
      { audio: "Ich glaube, dass die Geschäfte in einigen Jahren noch länger offen sein werden.", answer: "c: In der Zukunft werden die Geschäfte länger offen sein." },
    ],
  },
  {
    topic: "Kinder und Fernsehen",
    options: [
      "a: Die Sprecherin hat ihren Fernseher verkauft, nachdem sie ein Kind bekam.",
      "b: Wichtig sind eindeutige Regeln beim Fernsehen.",
      "c: Es hängt vom Alter ab, wie viel Kinder fernsehen sollten.",
      "d: Man soll die Kinder nicht allein fernsehen lassen.",
      "e: Ohne Fernsehen würde es keine Probleme mehr geben.",
      "f: Eltern müssen ihr eigenes Fernsehverhalten ändern.",
    ],
    statements: [
      { audio: "Bei uns gibt es klare Zeiten. Meine Kinder wissen genau, wann der Fernseher ausgemacht wird.", answer: "b: Wichtig sind eindeutige Regeln beim Fernsehen." },
      { audio: "Kleine Kinder brauchen Begleitung. Sie sollten nicht allein vor dem Fernseher sitzen.", answer: "d: Man soll die Kinder nicht allein fernsehen lassen." },
      { audio: "Viele Eltern sagen Nein, aber sie schauen selbst den ganzen Abend. Das muss sich zuerst ändern.", answer: "f: Eltern müssen ihr eigenes Fernsehverhalten ändern." },
    ],
  },
];

const dtzWritingSets = [
  {
    aTitle: "Aufgabe A: Erste-Hilfe-Kurs",
    aSituation: "Sie möchten einen Erste-Hilfe-Kurs machen. Sie haben noch Fragen. Schreiben Sie eine E-Mail an Herrn Schmidt vom Weiterbildungszentrum.",
    aPoints: ["Warum Sie einen Erste-Hilfe-Kurs machen möchten", "Ihre Erfahrungen", "Dauer und Termine des Kurses", "Kosten"],
    bTitle: "Aufgabe B: Treppenhaus im Mietshaus",
    bSituation: "Sie wohnen in einem Mietshaus. Alle Mieter müssen das Treppenhaus putzen, aber keiner von Ihren Nachbarn macht es. Schreiben Sie Ihrem Vermieter, Herrn Lehmann, einen Brief.",
    bPoints: ["Grund für Ihr Schreiben", "Wie Sie versucht haben, das Problem selbst zu lösen", "Weitere Probleme im Haus", "Was der Vermieter tun soll"],
  },
  {
    aTitle: "Aufgabe A: Hotel in den Bergen",
    aSituation: "Sie möchten in die Berge fahren. Im Internet haben Sie ein Hotel gefunden. Schreiben Sie eine E-Mail an das Hotel.",
    aPoints: ["Grund für Ihr Schreiben", "Wann Sie fahren möchten und mit wem", "Wie viele Nächte Sie bleiben möchten", "Essen oder Kosten"],
    bTitle: "Aufgabe B: Elternabend und Ausflug",
    bSituation: "Morgen findet ein Elternabend in der Schule Ihres Kindes statt, aber Sie können nicht kommen. Nächste Woche macht die Klasse einen Ausflug. Schreiben Sie dem Lehrer, Herrn Traut, eine E-Mail.",
    bPoints: ["Grund für Ihr Schreiben", "Warum Sie nicht kommen können", "Fragen zum Ausflug", "Bitte um Rückmeldung"],
  },
  {
    aTitle: "Aufgabe A: Sprachkurs wechseln",
    aSituation: "Ihr Deutschkurs ist am Abend. Sie arbeiten jetzt später und können nicht mehr kommen. Schreiben Sie an die Kursleitung.",
    aPoints: ["Grund für Ihr Schreiben", "Ihre neue Arbeitszeit", "Bitte um Wechsel in einen Vormittagskurs", "Frage nach freien Plätzen"],
    bTitle: "Aufgabe B: Lärm im Haus",
    bSituation: "In Ihrem Haus ist es abends sehr laut. Sie haben schon mit den Nachbarn gesprochen, aber es ist nicht besser geworden. Schreiben Sie an die Hausverwaltung.",
    bPoints: ["Grund für Ihr Schreiben", "Wann es laut ist", "Was Sie schon gemacht haben", "Was die Hausverwaltung tun soll"],
  },
];

const dtzPlanningTasks = [
  {
    title: "Gemeinsam etwas planen: Party",
    situation: "Sie haben im Urlaub nette Bekannte kennengelernt. Vor der Abreise möchten Sie eine Abschiedsparty planen.",
    notes: ["Wann?", "Wo?", "Essen", "Getränke", "Wer bezahlt wofür?", "...?"],
  },
  {
    title: "Gemeinsam etwas planen: Ausflug",
    situation: "Sie möchten zusammen mit Ihrem Deutschkurs am Wochenende einen Ausflug machen. Sie beide organisieren die Wanderung.",
    notes: ["Wohin?", "Was besichtigen?", "Übernachten?", "Essen?", "Wer soll kommen?", "...?"],
  },
  {
    title: "Gemeinsam etwas planen: Aufzug kaputt",
    situation: "Sie wohnen im selben Mietshaus. Der Aufzug ist schon wieder kaputt. Sie möchten etwas unternehmen.",
    notes: ["Wem Bescheid sagen?", "Anrufen oder schreiben?", "Was sagen oder schreiben?", "Andere Nachbarn informieren?", "Was tun, wenn nichts passiert?", "...?"],
  },
  {
    title: "Gemeinsam etwas planen: Freundin besuchen",
    situation: "Eine gemeinsame Freundin ist in eine neue Stadt gezogen. Sie möchten die Freundin besuchen und die Stadt besichtigen.",
    notes: ["Wie fahren?", "Wann und wie lange?", "Wo übernachten?", "Was machen?", "Geschenk mitbringen?", "...?"],
  },
];

function dtzPick(list, examNumber, count, offset = 0) {
  return Array.from({ length: count }, (_, index) => list[(examNumber * 5 + offset + index) % list.length]);
}

function dtzQuestion(item, extra = {}) {
  return {
    ...item,
    ...extra,
    options: uniqueOptions(item.options || extra.options || []),
  };
}

function buildDtzListeningSections(examNumber) {
  const part1 = dtzPick(dtzListenPart1Pool, examNumber, 4).map((item) => dtzQuestion(item, { kind: "listen-mc", part: "Hören Teil 1" }));
  const part2 = dtzPick(dtzListenPart2Pool, examNumber, 5, 2).map((item) => dtzQuestion(item, { kind: "listen-mc", part: "Hören Teil 2" }));
  const conversations = dtzPick(dtzListenPart3Pool, examNumber, 4, 4);
  const part3 = conversations.flatMap((item) => [
    {
      kind: "listen-tf",
      part: "Hören Teil 3",
      audio: item.audio,
      prompt: item.tfPrompt,
      options: ["richtig", "falsch"],
      answer: item.tfAnswer,
    },
    dtzQuestion(item, { kind: "listen-mc", part: "Hören Teil 3" }),
  ]);
  const theme = dtzListenPart4Themes[examNumber % dtzListenPart4Themes.length];
  const part4 = theme.statements.map((item) => ({
    kind: "listen-match",
    part: "Hören Teil 4",
    audio: item.audio,
    prompt: "Welche Aussage passt?",
    options: theme.options,
    answer: item.answer,
  }));
  return [
    {
      title: "Hören Teil 1",
      time: "25 Minuten Hören",
      instruction: "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung a, b oder c passt am besten?",
      questions: part1,
    },
    {
      title: "Hören Teil 2",
      time: "25 Minuten Hören",
      instruction: "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe.",
      questions: part2,
    },
    {
      title: "Hören Teil 3",
      time: "25 Minuten Hören",
      instruction: "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben: richtig/falsch und a, b oder c.",
      questions: part3,
    },
    {
      title: "Hören Teil 4",
      time: "25 Minuten Hören",
      instruction: `Sie hören Aussagen zu einem Thema: ${theme.topic}. Welche der Sätze a-f passt zu den Aussagen?`,
      sourceHtml: `<div class="exam-source compact">${theme.options.map((option) => `<p>${escapeHtml(option)}</p>`).join("")}</div>`,
      questions: part4,
    },
  ];
}

function buildDtzReadingSections(examNumber) {
  const guideHtml = `
    <div class="exam-source">
      <h4>Rathaus - Zentralwegweiser</h4>
      <p><strong>4. OG Umweltamt</strong><br>Mülltonnen An- und Abmeldung / Sperrmüll / Sondermüll / Altbatterien<br><strong>Gesundheitsamt</strong><br>Beratung / Ärzte und Krankenhäuser in der Region</p>
      <p><strong>3. OG Standesamt</strong><br>Eheschließung / Geburtsurkunde / Namensführung / Scheidung</p>
      <p><strong>2. OG Sozialamt</strong><br>Soziale Hilfe für Ältere, Geflüchtete und Menschen mit Behinderungen / Mietzuschuss<br><strong>Wohnungsamt</strong><br>Wohngeld / Wohnungsvermittlung / Mietspiegel</p>
      <p><strong>1. OG Jugendamt</strong><br>Kindertagesstätten / Kindergärten / Pflegekinderwesen<br><strong>Verkehrsamt</strong><br>Führerscheinstelle / Kfz-Zulassung / Parkausweise</p>
      <p><strong>EG Bürgeramt</strong><br>Bürgerservice / Beglaubigungen / Führungszeugnisse / Passangelegenheiten / Kopierer / Fundbüro<br><strong>Ausländeramt</strong><br>Visa / Staatsangehörigkeit / Namensrecht</p>
    </div>
  `;
  const part1 = [
    ["Ihre Großmutter kann nicht mehr alleine kochen und putzen.", ["2. OG", "4. OG", "anderes Stockwerk"], "2. OG"],
    ["Sie suchen Informationen über Krankenhäuser in Ihrer Gegend.", ["2. OG", "3. OG", "anderes Stockwerk"], "anderes Stockwerk"],
    ["Sie brauchen einen neuen Führerschein.", ["EG", "1. OG", "anderes Stockwerk"], "1. OG"],
    ["Sie möchten ein wichtiges Dokument kopieren.", ["EG", "2. OG", "anderes Stockwerk"], "EG"],
    ["Sie brauchen eine größere Tonne für Ihren Abfall.", ["EG", "4. OG", "anderes Stockwerk"], "4. OG"],
  ].map(([prompt, options, answer]) => ({ kind: "reading-mc", part: "Lesen Teil 1", prompt, options, answer }));

  const ads = [
    ["a", "Fahrlehrer/in gesucht", "Ausbildung für Klasse BE. Mindestalter 21 Jahre, PKW-Führerschein erforderlich."],
    ["b", "Babysitterkurs", "Kurs für Jugendliche und Erwachsene: Pflege, Ernährung, Notfälle und Spielvorschläge."],
    ["c", "Webentwickler/in", "Ausbildung im Fernunterricht. Realschulabschluss und PC-Grundkenntnisse erforderlich."],
    ["d", "Zeitungsausträger/in", "Nebenjob am Samstagvormittag. Guter Verdienst, frühes Aufstehen nötig."],
    ["e", "Erzieher/in in Teilzeit", "Betreuung und Erziehung der Kinder. Mehrjährige Berufserfahrung erwünscht."],
    ["f", "Aushilfe in Bäckerei", "Täglich von 15 bis 18 Uhr. Freundliche Mitarbeit im Verkauf."],
    ["g", "Bildungsgutschein", "Finanzielle Hilfe für Weiterbildung durch die Agentur für Arbeit."],
    ["h", "Schulabschluss nachholen", "Abendkurs für Erwachsene: Haupt-, Real- oder Fachhochschulreife."],
  ];
  const adHtml = `<div class="exam-ad-grid">${ads.map(([letter, title, text]) => `<article><strong>${letter} ${escapeHtml(title)}</strong><p>${escapeHtml(text)}</p></article>`).join("")}</div>`;
  const part2 = [
    ["Sie möchten in Ihrer Freizeit Kinder betreuen.", ["b", "e", "x"], "b"],
    ["Sie möchten an einer Hochschule studieren, haben aber nur einen Realschulabschluss.", ["c", "h", "x"], "h"],
    ["Sie suchen einen Nebenjob am Wochenende.", ["d", "f", "x"], "d"],
    ["Sie möchten den Führerschein machen.", ["a", "g", "x"], "x"],
    ["Sie möchten eine Ausbildung von zu Hause aus machen.", ["c", "h", "x"], "c"],
  ].map(([prompt, options, answer]) => ({ kind: "reading-match", part: "Lesen Teil 2", prompt, options, answer }));

  const readingTextsForPart3 = [
    {
      title: "Marienstraßen-Fest in Neustadt",
      text: "Am Sonntag findet das Marienstraßen-Fest statt. Die Geschäfte in der Innenstadt sind geöffnet. Wegen vieler Besucher fährt die Buslinie 306 zwischen 10 und 19 Uhr alle 15 Minuten. Besucherinnen und Besucher sollen möglichst mit öffentlichen Verkehrsmitteln kommen.",
      tasks: [
        { prompt: "Am Sonntag fährt die Buslinie 306 öfter als sonst.", options: ["richtig", "falsch"], answer: "richtig" },
        { prompt: "Besucherinnen und Besucher sollen", options: ["ihr Auto in der Innenstadt parken.", "mit öffentlichen Verkehrsmitteln kommen.", "nur die Sonderbusse benutzen."], answer: "mit öffentlichen Verkehrsmitteln kommen." },
      ],
    },
    {
      title: "E-Mail von NetCom",
      text: "Liebe Frau Kim, vielen Dank für Ihren Auftrag. Die Auftragsbestätigung erhalten Sie in den nächsten Tagen per Brief. Unser Techniker kommt am 27.07. zwischen 10:30 und 13:30 Uhr. Bitte bestätigen Sie den Termin über den Link in dieser E-Mail.",
      tasks: [
        { prompt: "Frau Kim bekommt einen neuen Internet-Anschluss.", options: ["richtig", "falsch"], answer: "richtig" },
        { prompt: "Wie soll Frau Kim den Termin bestätigen?", options: ["auf den Link klicken.", "den Online-Service nutzen.", "einen Brief schreiben."], answer: "auf den Link klicken." },
      ],
    },
    {
      title: "Einladung zum Klassenfest",
      text: "Liebe Familie Ivanov, nächsten Monat planen wir ein Klassenfest. Alle Familien sind herzlich eingeladen. Die Teilnahme ist kostenlos, aber alle sollen etwas zu essen oder zu trinken mitbringen. Bitte sagen Sie Bescheid, ob Sie teilnehmen.",
      tasks: [
        { prompt: "Frau Trautmann ist die Lehrerin von Denis.", options: ["richtig", "falsch"], answer: "richtig" },
        { prompt: "Familie Ivanov", options: ["darf zu einer Feier kommen.", "muss in der Schule anrufen.", "soll für Essen bezahlen."], answer: "darf zu einer Feier kommen." },
      ],
    },
  ];
  const part3 = readingTextsForPart3.flatMap((text) => text.tasks.map((task, index) => ({
    kind: index === 0 ? "reading-tf" : "reading-mc",
    part: "Lesen Teil 3",
    sourceTitle: text.title,
    sourceText: text.text,
    ...task,
  })));

  const part4Text = "Die Mittagsbetreuung an der Grundschule findet während der Schulzeit von Montag bis Freitag von 11 bis 14 Uhr statt. Die Gebühren richten sich nach den Besuchstagen. Bei zwei Kindern gibt es 15 Prozent Ermäßigung, bei drei Kindern 50 Prozent. Die Kinder spielen, basteln und lernen Regeln für das Zusammenleben. Die Mittagsbetreuung ist keine Hausaufgabenbetreuung.";
  const part4SourceHtml = `<div class="exam-source"><h4>Mittagsbetreuung an der Grundschule - Elterninformation</h4><p>${escapeHtml(part4Text)}</p></div>`;
  const part4 = [
    { prompt: "Die Mittagsbetreuung ist am Wochenende geschlossen.", answer: "richtig" },
    { prompt: "Bei zwei Kindern bezahlt man die Hälfte.", answer: "falsch" },
    { prompt: "Die Kinder lernen Regeln für das Zusammenleben.", answer: "richtig" },
  ].map((task) => ({ kind: "reading-tf", part: "Lesen Teil 4", options: ["richtig", "falsch"], ...task }));

  const clozeText = `Hotel "Zum Löwen"
Königsberger Str. 5
50876 Köln

Beschwerde

Sehr (0) Damen und Herren,

(40) Frau und ich haben am letzten Wochenende Urlaub in Ihrem Hotel gemacht, aber leider waren wir gar nicht zufrieden. Wir haben Ihr Hotel ausgesucht, (41) die Beschreibung auf Ihrer Webseite sehr gut klang. Dort steht: Die Zimmer sind groß und ruhig. (42) sie waren klein und laut! Außerdem hatten wir während des ganzen Wochenendes (43) warmes Wasser im Badezimmer. (44) haben wir uns natürlich sofort an der Rezeption beschwert.

Wir haben uns sehr geärgert und möchten jetzt unser Geld (45). Bitte überweisen Sie es auf unser Konto.

Mit freundlichen Grüßen
Zhobin Rahbar`;
  const part5SourceHtml = `<div class="exam-source"><h4>Beschwerde</h4><p>${escapeHtml(clozeText).replace(/\n/g, "<br>")}</p></div>`;
  const part5 = [
    ["(40) ... Frau und ich haben am letzten Wochenende Urlaub gemacht.", ["ihre", "meine", "seine"], "meine"],
    ["(41) Wir haben Ihr Hotel gewählt, ... die Beschreibung gut klang.", ["dass", "denn", "weil"], "weil"],
    ["(42) ... die Zimmer waren klein und laut.", ["Aber", "Jedoch", "Obwohl"], "Aber"],
    ["(43) Wir hatten ... warmes Wasser.", ["kein", "leider", "nicht"], "kein"],
    ["(44) ... haben wir uns beschwert.", ["Deshalb", "Obwohl", "Weil"], "Deshalb"],
    ["(45) Wir möchten unser Geld ...", ["haben", "wechseln", "zurück"], "zurück"],
  ].map(([prompt, options, answer]) => ({ kind: "reading-cloze", part: "Lesen Teil 5", prompt, options, answer }));

  return [
    { title: "Lesen Teil 1", time: "45 Minuten Lesen", instruction: "Sie sind im Rathaus und suchen Informationen. In welches Stockwerk gehen Sie?", sourceHtml: guideHtml, questions: part1 },
    { title: "Lesen Teil 2", time: "45 Minuten Lesen", instruction: "Lesen Sie die Situationen und die Anzeigen a-h. Für eine Aufgabe gibt es keine Lösung. Markieren Sie dann x.", sourceHtml: adHtml, questions: part2 },
    { title: "Lesen Teil 3", time: "45 Minuten Lesen", instruction: "Lesen Sie drei Texte. Zu jedem Text gibt es zwei Aufgaben: richtig/falsch und a, b oder c.", questions: part3 },
    { title: "Lesen Teil 4", time: "45 Minuten Lesen", instruction: "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.", sourceHtml: part4SourceHtml, questions: part4 },
    { title: "Lesen Teil 5", time: "45 Minuten Lesen", instruction: "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung a, b oder c passt am besten?", sourceHtml: part5SourceHtml, questions: part5 },
  ];
}

function buildDtzExam(examNumber) {
  const listeningSections = buildDtzListeningSections(examNumber);
  const readingSections = buildDtzReadingSections(examNumber);
  const writing = dtzWritingSets[(examNumber - 1) % dtzWritingSets.length];
  const planning = dtzPlanningTasks[(examNumber - 1) % dtzPlanningTasks.length];
  const picture = choice(pictureTasks, examNumber / 30);
  return {
    number: examNumber,
    listeningSections,
    readingSections,
    listening: listeningSections.flatMap((section) => section.questions),
    reading: readingSections.flatMap((section) => section.questions),
    writing,
    speaking: { picture, planning },
    startedAt: Date.now(),
    duration: 100 * 60,
  };
}

function renderDtzExamSections(sections, startNumber, label) {
  let questionNumber = startNumber;
  return sections.map((section) => {
    return `
      <div class="exam-section">
        <div class="exam-paper-header"><strong>${escapeHtml(section.title)}</strong><span>${escapeHtml(section.time)}</span></div>
        <p class="muted">${escapeHtml(section.instruction)}</p>
        ${section.sourceHtml || ""}
        ${section.questions.map((item) => renderDtzExamQuestion(item, questionNumber++, label)).join("")}
      </div>
    `;
  }).join("");
}

function renderDtzExamQuestion(item, number, label) {
  const audio = item.audio ? `
    <div class="audio-card">
      <div>
        <strong>Hördialog ${number}</strong>
        <span class="pill">einzeln abspielbar</span>
      </div>
      <p class="muted">Hören Sie diese Aufgabe separat.</p>
      <div class="actions">
        <button class="secondary" type="button" data-play="${escapeHtml(item.audio)}">Hördialog ${number} abspielen</button>
        <button class="ghost" type="button" data-stop-audio="true">Audio stoppen</button>
      </div>
    </div>
  ` : "";
  const source = item.sourceText ? `<div class="exam-source compact"><strong>${escapeHtml(item.sourceTitle || "")}</strong><p>${escapeHtml(item.sourceText)}</p></div>` : "";
  const typeLabel = item.kind?.includes("tf") ? "richtig/falsch" : item.kind?.includes("match") ? "zuordnen" : "a/b/c";
  return `
    <div class="exam-question">
      <p><strong>${number}. ${escapeHtml(item.prompt)}</strong> <span class="pill">${label}</span><span class="pill">${typeLabel}</span></p>
      ${audio}${source}
      <div class="option-list exam-options">
        ${item.options.map((option, optionIndex) => `
          <label class="option">
            <input type="radio" name="q${number}" value="${escapeHtml(option)}">
            <span class="abc-option">${String.fromCharCode(97 + optionIndex)}</span> ${escapeHtml(option)}
          </label>
        `).join("")}
      </div>
    </div>
  `;
}

function renderDtzWriting(writing) {
  const renderTask = (letter, title, situation, points) => `
    <label class="exam-writing-choice">
      <input type="radio" name="writingChoice" value="${letter}" ${letter === "A" ? "checked" : ""}>
      <div>
        <h4>${escapeHtml(title)}</h4>
        <p>${escapeHtml(situation)}</p>
        <p><strong>Schreiben Sie etwas zu folgenden Punkten:</strong></p>
        <ul>${points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
      </div>
    </label>
  `;
  return `
    <div class="exam-section">
      <div class="exam-paper-header"><strong>Schreiben</strong><span>30 Minuten</span></div>
      <p class="muted">Wählen Sie Aufgabe A oder Aufgabe B. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie möglichst viel.</p>
      <div class="split">
        ${renderTask("A", writing.aTitle, writing.aSituation, writing.aPoints)}
        ${renderTask("B", writing.bTitle, writing.bSituation, writing.bPoints)}
      </div>
      <textarea name="writing" placeholder="Schreiben Sie Ihren Brief oder Ihre E-Mail hier."></textarea>
    </div>
  `;
}

function renderDtzSpeaking(speaking) {
  const picture = speaking.picture;
  const planning = speaking.planning;
  return `
    <div class="exam-section">
      <div class="exam-paper-header"><strong>Sprechen</strong><span>ca. 16 Minuten</span></div>
      <div class="exam-question">
        <h4>Teil 1: Sich vorstellen</h4>
        <p class="muted">Name, Herkunft, Wohnort, Familie, Beruf, Deutschkurs, Hobbys und Ziel.</p>
      </div>
      <div class="exam-question">
        <h4>Teil 2: Über Erfahrungen sprechen</h4>
        <div class="photo-card">
          <img src="${escapeHtml(picture.image)}" alt="${escapeHtml(picture.title)}">
          <div class="body">
            <strong>${escapeHtml(picture.title)}</strong>
            <p>Was sehen Sie auf dem Foto? Was für eine Situation zeigt das Bild? Welche Erfahrungen haben Sie damit?</p>
          </div>
        </div>
      </div>
      <div class="exam-question">
        <h4>Teil 3: Gemeinsam etwas planen</h4>
        <p>${escapeHtml(planning.situation)}</p>
        <div class="exam-note-card">
          <strong>${escapeHtml(planning.title)}</strong>
          <ul>${planning.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>
        </div>
      </div>
    </div>
  `;
}

function renderDtzExams() {
  if (!state.exam) {
    return `
      <section class="grid">
        <div class="card span-7">
          <h2>30 DTZ-Modelltests</h2>
          <p class="muted">Der Aufbau folgt jetzt dem Schema Ihrer Vorlagen: Hören Teil 1-4, Lesen Teil 1-5, Schreiben Aufgabe A/B und Sprechen Teil 1-3.</p>
          <label>Prüfung auswählen<select id="examNumber">${Array.from({ length: 30 }, (_, i) => `<option value="${i + 1}">Modelltest ${i + 1}</option>`).join("")}</select></label>
          <div class="actions">
            <button class="primary" id="startExam" type="button">Prüfung starten</button>
            <button class="secondary" id="startRandomExam" type="button">Zufällige Prüfung starten</button>
          </div>
        </div>
        <div class="card span-5">
          <h3>Prüfungsaufbau</h3>
          <ul>
            <li>Hören: 20 Aufgaben, ca. 25 Minuten.</li>
            <li>Lesen: 25 Aufgaben, ca. 45 Minuten.</li>
            <li>Schreiben: Aufgabe A oder B, 30 Minuten.</li>
            <li>Sprechen: Vorstellung, Foto/Erfahrung, gemeinsam planen.</li>
          </ul>
        </div>
        <div class="card span-12">${sourceNote()}</div>
      </section>
    `;
  }
  const exam = state.exam;
  return `
    <section class="grid">
      <div class="card span-12">
        <div class="metric"><h2>DTZ-Modelltest ${exam.number}</h2><span class="timer" id="examTimer">${formatTime(remainingExamSeconds())}</span></div>
        <p class="muted">Bearbeiten Sie die Aufgaben wie auf dem Antwortbogen. Am Ende sehen Sie richtige und falsche Antworten.</p>
        <div class="actions">
          <button class="secondary" id="playAllListening" type="button">Alle Hördialoge nacheinander abspielen</button>
          <button class="ghost" id="stopExamAudio" type="button">Audio stoppen</button>
          <button class="danger" id="cancelExam" type="button">Prüfung verlassen</button>
        </div>
      </div>
      <form id="examForm" class="card span-12">
        ${renderDtzExamSections(exam.listeningSections, 1, "hören")}
        ${renderDtzExamSections(exam.readingSections, 21, "lesen")}
        ${renderDtzWriting(exam.writing)}
        ${renderDtzSpeaking(exam.speaking)}
        <div class="actions">
          <button class="primary" type="submit">Prüfung abgeben</button>
        </div>
      </form>
    </section>
  `;
}

function gradeDtzExam(formData) {
  const questions = [...state.exam.listening, ...state.exam.reading];
  let points = 0;
  const rows = questions.map((item, index) => {
    const number = index < state.exam.listening.length ? index + 1 : index + 1;
    const answer = formData.get(`q${number}`) || "";
    const correct = normalize(answer) === normalize(item.answer);
    if (correct) points += 1;
    return `<tr><td>${number}</td><td>${escapeHtml(item.part || "")}</td><td>${correct ? "richtig" : "falsch"}</td><td>${escapeHtml(answer || "-")}</td><td>${escapeHtml(item.answer)}</td></tr>`;
  });
  const writingHtml = analyzeLetterText(formData.get("writing") || "");
  const result = { exam: state.exam.number, points, at: new Date().toISOString() };
  progress.examResults.push(result);
  saveProgress();
  clearInterval(state.examTimer);
  state.exam = null;
  showModal(`
    <h3>Prüfung ausgewertet</h3>
    <p><strong>Hören + Lesen: ${points}/45 Punkte.</strong> ${points >= 33 ? "B1-Bereich erreicht." : "Weiter üben; Ziel für B1 sind 33 Punkte."}</p>
    ${writingHtml}
    <table class="table"><thead><tr><th>Nr.</th><th>Teil</th><th>Status</th><th>Ihre Antwort</th><th>Richtig</th></tr></thead><tbody>${rows.join("")}</tbody></table>
  `);
  render();
}

const dtz100ListenPart1Pool = [
  {
    audio: "Hallo Frau Aydin, hier ist die Kita Sonnental. Für die Anmeldung fehlt noch die Kopie vom Impfpass. Bitte bringen Sie sie bis Dienstag ins Büro.",
    prompt: "Was soll Frau Aydin machen?",
    options: ["Eine Kopie abgeben.", "Die Kita anrufen.", "Am Dienstag zu Hause bleiben."],
    answer: "Eine Kopie abgeben.",
  },
  {
    audio: "Praxis Dr. Keller, guten Tag. Ihr Zahnarzttermin am Montag muss leider auf Mittwoch, 15 Uhr 30 verschoben werden.",
    prompt: "Wann ist der neue Termin?",
    options: ["Montag um 15 Uhr.", "Mittwoch um 15 Uhr 30.", "Freitag um 13 Uhr."],
    answer: "Mittwoch um 15 Uhr 30.",
  },
  {
    audio: "Guten Tag, Ihre Bibliothekskarte ist fertig. Sie können sie morgen ab 10 Uhr an der Information abholen.",
    prompt: "Was kann man abholen?",
    options: ["Eine Fahrkarte.", "Eine Bibliothekskarte.", "Ein Paket."],
    answer: "Eine Bibliothekskarte.",
  },
  {
    audio: "Hallo Herr Demir, wegen der Wohnungsbesichtigung klingeln Sie bitte nicht bei Familie Roth, sondern direkt bei Haus B, Wohnung 14.",
    prompt: "Wo soll Herr Demir klingeln?",
    options: ["Bei Haus B, Wohnung 14.", "Bei Familie Roth.", "Im Erdgeschoss beim Hausmeister."],
    answer: "Bei Haus B, Wohnung 14.",
  },
  {
    audio: "Achtung Kursänderung: Der Deutschkurs findet heute nicht in Raum 5, sondern in Raum 2.12 statt.",
    prompt: "Wo findet der Deutschkurs statt?",
    options: ["In Raum 5.", "In Raum 2.12.", "In der Bibliothek."],
    answer: "In Raum 2.12.",
  },
  {
    audio: "Ihr Paket liegt in der Filiale Marktstraße. Bitte bringen Sie Ihren Ausweis und die Abholnummer mit.",
    prompt: "Was muss man mitbringen?",
    options: ["Ausweis und Abholnummer.", "Mietvertrag und Foto.", "Bargeld und Karte."],
    answer: "Ausweis und Abholnummer.",
  },
  {
    audio: "Jobcenter Ost, guten Tag. Bitte laden Sie die Kontoauszüge nicht einzeln hoch, sondern als eine PDF-Datei.",
    prompt: "Wie sollen die Unterlagen geschickt werden?",
    options: ["Als eine PDF-Datei.", "Als Brief per Post.", "Gar nicht."],
    answer: "Als eine PDF-Datei.",
  },
  {
    audio: "Der Sportverein informiert: Das Probetraining fällt heute aus, weil die Halle repariert wird.",
    prompt: "Warum fällt das Probetraining aus?",
    options: ["Die Halle wird repariert.", "Der Trainer hat Urlaub.", "Es gibt ein Fest."],
    answer: "Die Halle wird repariert.",
  },
  {
    audio: "Apotheke am Markt. Ihr Rezept ist angekommen. Das Medikament ist ab 16 Uhr für Sie bereit.",
    prompt: "Wann ist das Medikament bereit?",
    options: ["Ab 16 Uhr.", "Morgen früh.", "Am Wochenende."],
    answer: "Ab 16 Uhr.",
  },
  {
    audio: "Die Buslinie 18 fährt wegen einer Baustelle nur bis Klinikum Nord. Danach benutzen Sie bitte die Ersatzbusse.",
    prompt: "Bis wohin fährt die Linie 18?",
    options: ["Bis Klinikum Nord.", "Bis Hauptbahnhof.", "Bis Rathausplatz."],
    answer: "Bis Klinikum Nord.",
  },
  {
    audio: "Liebe Eltern, der Elternabend beginnt um 17 Uhr 30 in der Aula. Bitte kommen Sie ohne Kinder.",
    prompt: "Wo findet der Elternabend statt?",
    options: ["In der Aula.", "Im Klassenzimmer 3.", "Im Sekretariat."],
    answer: "In der Aula.",
  },
  {
    audio: "Hausverwaltung Berg, guten Tag. Am Donnerstag werden die Rauchmelder geprüft. Der Techniker kommt zwischen 9 und 12 Uhr.",
    prompt: "Was passiert am Donnerstag?",
    options: ["Die Rauchmelder werden geprüft.", "Die Miete wird bezahlt.", "Der Aufzug wird gestrichen."],
    answer: "Die Rauchmelder werden geprüft.",
  },
  {
    audio: "Ihre neue Bankkarte ist schon da. Den PIN-Brief bekommen Sie getrennt in den nächsten Tagen.",
    prompt: "Was bekommt man später?",
    options: ["Den PIN-Brief.", "Die Bankkarte.", "Die Rechnung."],
    answer: "Den PIN-Brief.",
  },
  {
    audio: "Die Fahrschule startet den neuen Theoriekurs am 4. Mai. Die Anmeldung ist bis Ende April möglich.",
    prompt: "Bis wann kann man sich anmelden?",
    options: ["Bis Ende April.", "Bis 4. Mai.", "Bis morgen."],
    answer: "Bis Ende April.",
  },
  {
    audio: "Ihre Bestellung im Supermarkt kann heute zwischen 18 und 20 Uhr abgeholt werden. Bitte kommen Sie zum Servicepunkt.",
    prompt: "Wo soll man die Bestellung abholen?",
    options: ["Am Servicepunkt.", "An der Bäckerei.", "Im Lager."],
    answer: "Am Servicepunkt.",
  },
  {
    audio: "Das Treffen der Ehrenamtlichen beginnt diesmal schon um 16 Uhr. Der Raum ist im zweiten Stock.",
    prompt: "Wann beginnt das Treffen?",
    options: ["Um 16 Uhr.", "Um 18 Uhr.", "Um 20 Uhr."],
    answer: "Um 16 Uhr.",
  },
];

const dtz100RadioPool = [
  {
    audio: "Die Wetteraussichten: Am Wochenende bleibt es trocken. Am Sonntag steigen die Temperaturen auf 24 Grad.",
    prompt: "Wie wird das Wetter am Sonntag?",
    options: ["Trocken und warm.", "Kalt und regnerisch.", "Sehr windig."],
    answer: "Trocken und warm.",
  },
  {
    audio: "Verkehrsmeldung: Auf der B 17 gibt es nach einem Unfall zwei Kilometer Stau. Bitte fahren Sie vorsichtig.",
    prompt: "Was ist auf der B 17 passiert?",
    options: ["Es gab einen Unfall.", "Die Straße ist frei.", "Ein Markt findet statt."],
    answer: "Es gab einen Unfall.",
  },
  {
    audio: "Das Kino Rex zeigt den Dokumentarfilm nicht heute, sondern erst am nächsten Dienstag um 19 Uhr.",
    prompt: "Wann läuft der Dokumentarfilm?",
    options: ["Nächsten Dienstag um 19 Uhr.", "Heute Abend.", "Am Samstagmittag."],
    answer: "Nächsten Dienstag um 19 Uhr.",
  },
  {
    audio: "Das Stadtbad bleibt morgen geschlossen. Grund ist eine Reparatur an der Pumpe.",
    prompt: "Warum ist das Stadtbad geschlossen?",
    options: ["Wegen einer Reparatur.", "Wegen Ferien.", "Wegen einer Feier."],
    answer: "Wegen einer Reparatur.",
  },
  {
    audio: "Im Klinikum Mitte gibt es heute um 18 Uhr einen kostenlosen Vortrag zum Thema Diabetes.",
    prompt: "Was gibt es im Klinikum?",
    options: ["Einen Vortrag.", "Einen Film.", "Einen Sprachkurs."],
    answer: "Einen Vortrag.",
  },
  {
    audio: "Der Wochenmarkt findet diese Woche nicht auf dem Kirchplatz statt, sondern auf dem Schulhof.",
    prompt: "Wo ist der Wochenmarkt diese Woche?",
    options: ["Auf dem Schulhof.", "Auf dem Kirchplatz.", "Im Rathaus."],
    answer: "Auf dem Schulhof.",
  },
  {
    audio: "Achtung am Hauptbahnhof: Der Regionalexpress nach Lübeck fährt heute von Gleis 8 statt von Gleis 5.",
    prompt: "Von welchem Gleis fährt der Regionalexpress?",
    options: ["Von Gleis 8.", "Von Gleis 5.", "Von Gleis 2."],
    answer: "Von Gleis 8.",
  },
  {
    audio: "In der Stadtbibliothek gibt es am Sonntag eine Lesung für Familien. Beginn ist um 11 Uhr.",
    prompt: "Für wen ist die Lesung?",
    options: ["Für Familien.", "Für Autofahrer.", "Für Ärzte."],
    answer: "Für Familien.",
  },
  {
    audio: "Das Museum am Fluss hat heute freien Eintritt. Kinder und Erwachsene müssen keine Karte kaufen.",
    prompt: "Was ist heute im Museum besonders?",
    options: ["Der Eintritt ist frei.", "Das Museum ist geschlossen.", "Es gibt nur Führungen."],
    answer: "Der Eintritt ist frei.",
  },
  {
    audio: "Unser Radiogewinnspiel startet nach den Nachrichten. Rufen Sie die eingeblendete Nummer an und nennen Sie das Lösungswort.",
    prompt: "Was soll man beim Gewinnspiel machen?",
    options: ["Anrufen und das Lösungswort nennen.", "Eine E-Mail schreiben.", "Ins Studio kommen."],
    answer: "Anrufen und das Lösungswort nennen.",
  },
  {
    audio: "Die Anmeldung für das Schulessen ist nur noch bis Freitag möglich. Danach beginnt die neue Bestellwoche.",
    prompt: "Bis wann kann man Schulessen anmelden?",
    options: ["Bis Freitag.", "Bis Sonntag.", "Bis Monatsende."],
    answer: "Bis Freitag.",
  },
  {
    audio: "Die Polizei warnt vor falschen E-Mails von Banken. Öffnen Sie keine Links und geben Sie keine Daten ein.",
    prompt: "Wovor warnt die Polizei?",
    options: ["Vor falschen E-Mails.", "Vor starkem Regen.", "Vor lauter Musik."],
    answer: "Vor falschen E-Mails.",
  },
  {
    audio: "Wegen Bauarbeiten fährt der Nachtbus heute eine andere Strecke. Die Haltestelle Theater entfällt.",
    prompt: "Welche Haltestelle entfällt?",
    options: ["Theater.", "Schule.", "Nordpark."],
    answer: "Theater.",
  },
  {
    audio: "Die gelben Säcke werden im Stadtteil Süd erst am Freitag abgeholt. Bitte stellen Sie sie nicht früher raus.",
    prompt: "Wann werden die gelben Säcke abgeholt?",
    options: ["Am Freitag.", "Am Montag.", "Heute Abend."],
    answer: "Am Freitag.",
  },
  {
    audio: "Heute Abend hören Sie bei Radio Nord zuerst Nachrichten, danach eine Stunde Musik aus den Achtzigern.",
    prompt: "Was kommt nach den Nachrichten?",
    options: ["Musik.", "Sport.", "Ein Kinderprogramm."],
    answer: "Musik.",
  },
  {
    audio: "Im Fundbüro wurde ein blauer Rucksack abgegeben. Die Besitzerin oder der Besitzer soll einen Ausweis mitbringen.",
    prompt: "Was wurde abgegeben?",
    options: ["Ein blauer Rucksack.", "Ein Fahrrad.", "Ein Schlüsselbund."],
    answer: "Ein blauer Rucksack.",
  },
];

const dtz100ConversationPool = [
  {
    audio: "Kunde: Guten Tag, mein Handy wurde gestern repariert, aber der Bildschirm bleibt schwarz. Mitarbeiterin: Das tut mir leid. Wir prüfen das Gerät noch einmal und geben Ihnen bis morgen Bescheid.",
    tfPrompt: "Der Kunde hat ein Problem mit seinem Handy.",
    tfAnswer: "richtig",
    prompt: "Was macht die Mitarbeiterin?",
    options: ["Sie prüft das Gerät noch einmal.", "Sie verkauft sofort ein neues Handy.", "Sie ruft die Polizei."],
    answer: "Sie prüft das Gerät noch einmal.",
  },
  {
    audio: "Frau: Könnten Sie während unseres Urlaubs die Blumen gießen? Mann: Ja, gern. Soll ich auch den Briefkasten leeren? Frau: Nein, das macht mein Bruder.",
    tfPrompt: "Die Frau fährt in den Urlaub.",
    tfAnswer: "richtig",
    prompt: "Was soll der Mann machen?",
    options: ["Die Blumen gießen.", "Den Briefkasten leeren.", "Den Bruder anrufen."],
    answer: "Die Blumen gießen.",
  },
  {
    audio: "Patient: Ich habe dieses Rezept. Apothekerin: Das Medikament ist da, aber Sie müssen fünf Euro zuzahlen. Patient: Gut, ich bezahle mit Karte.",
    tfPrompt: "Der Patient ist in einer Apotheke.",
    tfAnswer: "richtig",
    prompt: "Was muss der Patient bezahlen?",
    options: ["Fünf Euro.", "Nichts.", "Fünfzig Euro."],
    answer: "Fünf Euro.",
  },
  {
    audio: "Kollegin: Kommst du morgen zur Teambesprechung? Kollege: Leider nicht. Ich muss mit meiner Tochter zum Arzt. Ich schicke aber vorher meine Notizen.",
    tfPrompt: "Der Kollege kommt morgen zur Teambesprechung.",
    tfAnswer: "falsch",
    prompt: "Was schickt der Kollege?",
    options: ["Seine Notizen.", "Eine Rechnung.", "Einen Vertrag."],
    answer: "Seine Notizen.",
  },
  {
    audio: "Mutter: Der Ausflug kostet zwölf Euro. Lehrerin: Ja, aber Geschwister zahlen nur die Hälfte. Bitte geben Sie das Geld bis Mittwoch ab.",
    tfPrompt: "Der Ausflug ist kostenlos.",
    tfAnswer: "falsch",
    prompt: "Bis wann soll das Geld abgegeben werden?",
    options: ["Bis Mittwoch.", "Bis Freitag.", "Bis Monatsende."],
    answer: "Bis Mittwoch.",
  },
  {
    audio: "Mieter: Seit drei Tagen ist der Aufzug kaputt. Hausmeisterin: Die Firma kommt heute Nachmittag. Bitte benutzen Sie bis dahin die Treppe.",
    tfPrompt: "Der Aufzug funktioniert nicht.",
    tfAnswer: "richtig",
    prompt: "Wann kommt die Firma?",
    options: ["Heute Nachmittag.", "Morgen früh.", "Nächste Woche."],
    answer: "Heute Nachmittag.",
  },
  {
    audio: "Kundin: Ich suche eine Jacke für den Regen. Verkäufer: Diese hier ist wasserdicht und gerade im Angebot. Kundin: Dann probiere ich Größe M.",
    tfPrompt: "Die Kundin möchte Schuhe kaufen.",
    tfAnswer: "falsch",
    prompt: "Was probiert die Kundin?",
    options: ["Eine Jacke in Größe M.", "Schuhe in Größe 39.", "Eine Hose."],
    answer: "Eine Jacke in Größe M.",
  },
  {
    audio: "Mann: Ich habe die Mülltonne zu spät rausgestellt. Nachbarin: Kein Problem, morgen kommt die Papierabholung. Die Restmülltonne kommt erst nächste Woche.",
    tfPrompt: "Morgen wird Papier abgeholt.",
    tfAnswer: "richtig",
    prompt: "Was kommt erst nächste Woche?",
    options: ["Die Restmülltonne.", "Die Papierabholung.", "Der Sperrmüll."],
    answer: "Die Restmülltonne.",
  },
  {
    audio: "Teilnehmerin: Ich verstehe die Hausaufgabe nicht. Kursleiter: Bleiben Sie nach dem Kurs zehn Minuten, dann erkläre ich Ihnen die Aufgabe.",
    tfPrompt: "Die Teilnehmerin braucht Hilfe.",
    tfAnswer: "richtig",
    prompt: "Wann bekommt sie Hilfe?",
    options: ["Nach dem Kurs.", "Vor dem Frühstück.", "Am Sonntag."],
    answer: "Nach dem Kurs.",
  },
  {
    audio: "Vater: Kann mein Sohn morgen beim Training mitmachen? Trainerin: Ja, aber er braucht Hallenschuhe und eine Trinkflasche.",
    tfPrompt: "Der Sohn darf beim Training mitmachen.",
    tfAnswer: "richtig",
    prompt: "Was braucht der Sohn?",
    options: ["Hallenschuhe und eine Trinkflasche.", "Ein Fahrrad.", "Einen Arztbrief."],
    answer: "Hallenschuhe und eine Trinkflasche.",
  },
  {
    audio: "Kundin: Der Kühlschrank ist erst zwei Monate alt und macht laute Geräusche. Mitarbeiter: Wir schicken Ihnen morgen einen Techniker.",
    tfPrompt: "Der Kühlschrank ist sehr alt.",
    tfAnswer: "falsch",
    prompt: "Wer kommt morgen?",
    options: ["Ein Techniker.", "Eine Nachbarin.", "Ein Fahrer."],
    answer: "Ein Techniker.",
  },
  {
    audio: "Freundin: Hast du schon ein Geschenk für Selma? Freund: Ja, ich habe ein Buch gekauft. Blumen bringe ich auch mit.",
    tfPrompt: "Der Mann hat schon ein Geschenk gekauft.",
    tfAnswer: "richtig",
    prompt: "Was hat er gekauft?",
    options: ["Ein Buch.", "Eine Tasche.", "Ein Ticket."],
    answer: "Ein Buch.",
  },
];

const dtz100ListenThemes = [
  {
    topic: "Öffentliche Verkehrsmittel",
    options: [
      "a: Bus und Bahn sparen oft Geld.",
      "b: Man braucht mehr sichere Radwege.",
      "c: Für ältere Menschen sind kurze Wege wichtig.",
      "d: Fahrpläne müssen besser erklärt werden.",
      "e: Autos bleiben auf dem Land oft notwendig.",
      "f: Kinder sollten früh lernen, selbstständig zu fahren.",
    ],
    statements: [
      { audio: "Ich fahre gern mit dem Bus, weil eine Monatskarte günstiger ist als Benzin und Parken.", answer: "a: Bus und Bahn sparen oft Geld." },
      { audio: "In meinem Dorf gibt es nur morgens und abends einen Bus. Ohne Auto komme ich nicht zur Arbeit.", answer: "e: Autos bleiben auf dem Land oft notwendig." },
      { audio: "Viele Menschen verstehen die Automaten nicht. Die Informationen müssten einfacher sein.", answer: "d: Fahrpläne müssen besser erklärt werden." },
      { audio: "Wenn Kinder den Schulweg kennen, werden sie sicherer und selbstständiger.", answer: "f: Kinder sollten früh lernen, selbstständig zu fahren." },
      { audio: "Für meine Mutter ist wichtig, dass die Haltestelle nicht weit weg ist.", answer: "c: Für ältere Menschen sind kurze Wege wichtig." },
      { audio: "Mehr Leute würden mit dem Fahrrad fahren, wenn es bessere Wege gäbe.", answer: "b: Man braucht mehr sichere Radwege." },
    ],
  },
  {
    topic: "Gesund leben",
    options: [
      "a: Bewegung im Alltag hilft sehr.",
      "b: Gemeinsames Kochen macht gesünderes Essen leichter.",
      "c: Schlaf ist genauso wichtig wie Sport.",
      "d: Man sollte kleine Ziele setzen.",
      "e: Kinder brauchen gute Vorbilder.",
      "f: Zu viel Stress macht krank.",
    ],
    statements: [
      { audio: "Ich steige eine Haltestelle früher aus und gehe den Rest zu Fuß. Das ist einfach und hilft.", answer: "a: Bewegung im Alltag hilft sehr." },
      { audio: "Wenn wir mit den Kindern zusammen kochen, essen sie mehr Gemüse.", answer: "b: Gemeinsames Kochen macht gesünderes Essen leichter." },
      { audio: "Viele nehmen sich zu viel vor. Besser ist ein kleines Ziel pro Woche.", answer: "d: Man sollte kleine Ziele setzen." },
      { audio: "Ich merke sofort, wenn ich zu wenig schlafe. Dann bin ich unkonzentriert.", answer: "c: Schlaf ist genauso wichtig wie Sport." },
      { audio: "Eltern können nicht nur reden. Sie müssen selbst zeigen, was gesund ist.", answer: "e: Kinder brauchen gute Vorbilder." },
      { audio: "Dauernder Druck im Beruf kann auch den Körper krank machen.", answer: "f: Zu viel Stress macht krank." },
    ],
  },
  {
    topic: "Nachbarschaft",
    options: [
      "a: Ein kurzer Gruß verbessert das Zusammenleben.",
      "b: Regeln im Haus sollten klar sein.",
      "c: Hilfe unter Nachbarn spart Zeit.",
      "d: Lärm muss man zuerst freundlich ansprechen.",
      "e: Gemeinsame Feste schaffen Kontakt.",
      "f: Nicht jeder möchte engen Kontakt.",
    ],
    statements: [
      { audio: "Man muss nicht viel reden. Schon ein freundliches Guten Morgen macht die Stimmung besser.", answer: "a: Ein kurzer Gruß verbessert das Zusammenleben." },
      { audio: "Bei uns weiß niemand, wann die Waschküche frei ist. Ein Plan wäre gut.", answer: "b: Regeln im Haus sollten klar sein." },
      { audio: "Meine Nachbarin nimmt manchmal Pakete an. Das ist für mich eine große Hilfe.", answer: "c: Hilfe unter Nachbarn spart Zeit." },
      { audio: "Wenn Musik zu laut ist, sollte man zuerst ruhig klingeln und sprechen.", answer: "d: Lärm muss man zuerst freundlich ansprechen." },
      { audio: "Seit dem Hoffest kennen wir die Leute im Haus viel besser.", answer: "e: Gemeinsame Feste schaffen Kontakt." },
      { audio: "Ich bin freundlich, aber nach der Arbeit brauche ich Ruhe und möchte nicht jeden Abend Besuch.", answer: "f: Nicht jeder möchte engen Kontakt." },
    ],
  },
];

function dtz100Pick(list, examNumber, count, offset = 0) {
  return Array.from({ length: count }, (_, index) => list[(examNumber * 3 + offset + index) % list.length]);
}

function dtz100Question(item, part, kind) {
  return {
    ...item,
    part,
    kind,
    options: uniqueOptions(item.options),
  };
}

function buildDtzListeningSections(examNumber) {
  const part1 = dtz100Pick(dtz100ListenPart1Pool, examNumber, 10).map((item) => dtz100Question(item, "Hören Teil 1", "listen-mc"));
  const part2 = dtz100Pick(dtz100RadioPool, examNumber, 10, 4).map((item) => dtz100Question(item, "Hören Teil 2", "listen-mc"));
  const part3 = dtz100Pick(dtz100ConversationPool, examNumber, 7, 2).flatMap((item) => [
    {
      kind: "listen-tf",
      part: "Hören Teil 3",
      audio: item.audio,
      prompt: item.tfPrompt,
      options: ["richtig", "falsch"],
      answer: item.tfAnswer,
    },
    dtz100Question(item, "Hören Teil 3", "listen-mc"),
  ]);
  const theme = dtz100ListenThemes[(examNumber - 1) % dtz100ListenThemes.length];
  const part4 = theme.statements.map((item) => ({
    kind: "listen-match",
    part: "Hören Teil 4",
    audio: item.audio,
    prompt: "Welche Aussage passt?",
    options: theme.options,
    answer: item.answer,
  }));
  return [
    { title: "Hören Teil 1", time: "25 Minuten Hören", instruction: "Sie hören zehn Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung a, b oder c passt am besten?", questions: part1 },
    { title: "Hören Teil 2", time: "25 Minuten Hören", instruction: "Sie hören zehn kurze Informationen aus Radio, Bahnhof, Stadt oder Alltag. Wählen Sie die passende Lösung.", questions: part2 },
    { title: "Hören Teil 3", time: "25 Minuten Hören", instruction: "Sie hören sieben Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben: richtig/falsch und a, b oder c.", questions: part3 },
    {
      title: "Hören Teil 4",
      time: "25 Minuten Hören",
      instruction: `Sie hören Aussagen zu einem Thema: ${theme.topic}. Welche der Sätze a-f passt zu den Aussagen?`,
      sourceHtml: `<div class="exam-source compact">${theme.options.map((option) => `<p>${escapeHtml(option)}</p>`).join("")}</div>`,
      questions: part4,
    },
  ];
}

const dtz100ServiceGuides = [
  {
    title: "Servicezentrum Nordstadt",
    sourceHtml: `
      <div class="exam-source">
        <h4>Servicezentrum Nordstadt - Wegweiser</h4>
        <p><strong>4. Stock Umweltservice</strong><br>Abfallkalender / Sperrmüll / Energiesparberatung<br><strong>Gesundheitsberatung</strong><br>Impfberatung / Pflegeberatung / Krankenhäuser in der Nähe</p>
        <p><strong>3. Stock Standesamt</strong><br>Geburtsurkunden / Eheschließung / Namensänderung</p>
        <p><strong>2. Stock Sozialservice</strong><br>Grundsicherung / Hilfe für ältere Menschen / Mietberatung<br><strong>Wohnberatung</strong><br>Wohnberechtigungsschein / Wohnungsvermittlung</p>
        <p><strong>1. Stock Familienbüro</strong><br>Kita-Plätze / Elterngeld / Schulbetreuung<br><strong>Verkehrsstelle</strong><br>Führerschein / Parkausweise / Fahrradregistrierung</p>
        <p><strong>Erdgeschoss Bürgerbüro</strong><br>Ausweise / Meldebescheinigung / Kopierer / Fundbüro<br><strong>Migrationsberatung</strong><br>Aufenthalt / Beratung zu Kursen / Formulare</p>
      </div>
    `,
    questions: [
      ["Sie brauchen eine Meldebescheinigung.", ["Erdgeschoss", "2. Stock", "anderes Stockwerk"], "Erdgeschoss"],
      ["Sie suchen einen Kita-Platz für Ihr Kind.", ["1. Stock", "3. Stock", "anderes Stockwerk"], "1. Stock"],
      ["Sie möchten wissen, wann Sperrmüll abgeholt wird.", ["4. Stock", "Erdgeschoss", "anderes Stockwerk"], "4. Stock"],
      ["Sie brauchen Hilfe beim Thema Aufenthalt.", ["3. Stock", "Erdgeschoss", "anderes Stockwerk"], "Erdgeschoss"],
      ["Sie möchten Ihren Führerschein verlängern.", ["1. Stock", "2. Stock", "anderes Stockwerk"], "1. Stock"],
      ["Sie möchten eine Geburtsurkunde beantragen.", ["3. Stock", "Erdgeschoss", "anderes Stockwerk"], "3. Stock"],
      ["Sie suchen Informationen zur Pflege Ihrer Mutter.", ["4. Stock", "2. Stock", "anderes Stockwerk"], "4. Stock"],
      ["Sie haben einen Schlüssel gefunden.", ["Erdgeschoss", "1. Stock", "anderes Stockwerk"], "Erdgeschoss"],
    ],
  },
  {
    title: "Bürgerhaus Hafenstadt",
    sourceHtml: `
      <div class="exam-source">
        <h4>Bürgerhaus Hafenstadt - Informationen</h4>
        <p><strong>3. Etage Weiterbildung</strong><br>Sprachkurse / Computerkurse / Prüfungsanmeldung</p>
        <p><strong>2. Etage Beratung</strong><br>Schuldnerberatung / Familienberatung / Seniorenhilfe</p>
        <p><strong>1. Etage Kultur und Freizeit</strong><br>Vereine / Sportangebote / Musikschule / Ehrenamt</p>
        <p><strong>Erdgeschoss Service</strong><br>Anmeldung / Kopierer / Fundsachen / öffentliche Telefone</p>
      </div>
    `,
    questions: [
      ["Sie möchten sich zu einer Deutschprüfung anmelden.", ["3. Etage", "1. Etage", "anderes Stockwerk"], "3. Etage"],
      ["Sie suchen einen Sportverein.", ["1. Etage", "2. Etage", "anderes Stockwerk"], "1. Etage"],
      ["Sie brauchen einen Kopierer.", ["Erdgeschoss", "3. Etage", "anderes Stockwerk"], "Erdgeschoss"],
      ["Sie möchten Schuldenberatung.", ["2. Etage", "1. Etage", "anderes Stockwerk"], "2. Etage"],
      ["Sie möchten in der Musikschule fragen.", ["1. Etage", "Erdgeschoss", "anderes Stockwerk"], "1. Etage"],
      ["Sie haben Ihre Tasche verloren.", ["Erdgeschoss", "2. Etage", "anderes Stockwerk"], "Erdgeschoss"],
      ["Sie suchen einen Computerkurs.", ["3. Etage", "2. Etage", "anderes Stockwerk"], "3. Etage"],
      ["Sie möchten Beratung für ältere Angehörige.", ["2. Etage", "3. Etage", "anderes Stockwerk"], "2. Etage"],
    ],
  },
];

const dtz100AdSets = [
  {
    sourceHtml: `
      <div class="exam-ad-grid">
        <article><strong>a Seniorenbegleitung gesucht</strong><p>Sie besuchen ältere Menschen, gehen spazieren und helfen beim Einkaufen. Zwei Nachmittage pro Woche.</p></article>
        <article><strong>b Lagerhilfe am Abend</strong><p>Minijob von 18 bis 21 Uhr. Pakete sortieren, gute Deutschkenntnisse nicht erforderlich.</p></article>
        <article><strong>c Online-Kurs Buchhaltung</strong><p>Fernkurs mit Zertifikat. Start jeden Monat, Unterricht bequem von zu Hause.</p></article>
        <article><strong>d Sprachcafé International</strong><p>Jeden Mittwoch kostenlos sprechen, neue Leute kennenlernen und Deutsch üben.</p></article>
        <article><strong>e Ausbildung Pflegeassistenz</strong><p>Einjährige Ausbildung, Praktikum im Seniorenheim, Mindestalter 18 Jahre.</p></article>
        <article><strong>f Fahrradwerkstatt Praktikum</strong><p>Praktikum für handwerklich interessierte Personen. Reparaturen lernen, Montag bis Freitag.</p></article>
        <article><strong>g Kinderbetreuung Wochenende</strong><p>Familie sucht Betreuung für zwei Kinder samstags von 10 bis 15 Uhr.</p></article>
        <article><strong>h Mathe-Nachhilfe</strong><p>Schülerinnen und Schüler suchen Unterstützung. Erfahrung im Unterrichten erwünscht.</p></article>
      </div>
    `,
    questions: [
      ["Sie möchten von zu Hause aus lernen.", ["c", "d", "x"], "c"],
      ["Sie suchen einen Nebenjob am Samstag.", ["g", "b", "x"], "g"],
      ["Sie möchten beruflich mit älteren Menschen arbeiten.", ["a", "e", "x"], "e"],
      ["Sie möchten kostenlos Deutsch sprechen üben.", ["d", "h", "x"], "d"],
      ["Sie interessieren sich für Fahrradreparaturen.", ["f", "b", "x"], "f"],
      ["Sie suchen einen Job nur am Abend.", ["b", "g", "x"], "b"],
      ["Sie möchten Nachhilfe in Englisch geben.", ["h", "a", "x"], "x"],
      ["Sie möchten ältere Menschen besuchen und begleiten.", ["a", "e", "x"], "a"],
    ],
  },
];

const dtz100ReadingTexts = [
  {
    title: "Parkfest am See",
    text: "Am Samstag findet im Stadtpark ein Fest für Familien statt. Es gibt Musik, Spiele und einen kleinen Markt. Wegen weniger Parkplätze empfiehlt die Stadt, mit Bus oder Fahrrad zu kommen. Kinder unter zwölf Jahren zahlen keinen Eintritt.",
    tasks: [
      { prompt: "Kinder unter zwölf Jahren müssen Eintritt bezahlen.", options: ["richtig", "falsch"], answer: "falsch" },
      { prompt: "Besucherinnen und Besucher sollen möglichst", options: ["mit Bus oder Fahrrad kommen.", "mit dem Auto direkt zum See fahren.", "nur am Abend kommen."], answer: "mit Bus oder Fahrrad kommen." },
    ],
  },
  {
    title: "Brief der Stadtwerke",
    text: "Sehr geehrte Kundin, sehr geehrter Kunde, wir lesen am 12. August die Wasserzähler ab. Wenn Sie nicht zu Hause sind, können Sie den Stand online eintragen oder die Karte in den Briefkasten werfen.",
    tasks: [
      { prompt: "Die Stadtwerke möchten den Wasserzählerstand wissen.", options: ["richtig", "falsch"], answer: "richtig" },
      { prompt: "Wenn man nicht zu Hause ist, kann man", options: ["den Stand online eintragen.", "die Rechnung bar bezahlen.", "den Termin löschen."], answer: "den Stand online eintragen." },
    ],
  },
  {
    title: "Projektwoche in der Schule",
    text: "Liebe Eltern, nächste Woche findet eine Projektwoche zum Thema Umwelt statt. Die Kinder brauchen wetterfeste Kleidung. Am Freitag präsentieren die Klassen ihre Ergebnisse in der Aula.",
    tasks: [
      { prompt: "Die Projektwoche hat das Thema Umwelt.", options: ["richtig", "falsch"], answer: "richtig" },
      { prompt: "Am Freitag sollen die Eltern", options: ["in die Aula kommen.", "Sportkleidung kaufen.", "die Schule putzen."], answer: "in die Aula kommen." },
    ],
  },
  {
    title: "Wohnungsanzeige",
    text: "Helle Zwei-Zimmer-Wohnung in ruhiger Lage, 52 Quadratmeter, Balkon, Nähe Straßenbahn. Besichtigung nur nach telefonischer Vereinbarung. Haustiere nach Absprache möglich.",
    tasks: [
      { prompt: "Die Wohnung hat einen Balkon.", options: ["richtig", "falsch"], answer: "richtig" },
      { prompt: "Für eine Besichtigung muss man", options: ["telefonisch einen Termin machen.", "sofort vorbeikommen.", "eine E-Mail an die Schule schreiben."], answer: "telefonisch einen Termin machen." },
    ],
  },
  {
    title: "Information der Bahn",
    text: "Wegen Bauarbeiten fährt der Zug nach Kassel heute nur bis Minden. Reisende nach Kassel steigen dort in einen Ersatzbus um. Die Fahrkarten bleiben gültig.",
    tasks: [
      { prompt: "Die Fahrkarten sind weiter gültig.", options: ["richtig", "falsch"], answer: "richtig" },
      { prompt: "Reisende nach Kassel müssen in Minden", options: ["in einen Ersatzbus umsteigen.", "ein neues Ticket kaufen.", "im Zug bleiben."], answer: "in einen Ersatzbus umsteigen." },
    ],
  },
  {
    title: "Bibliothek verlängert Öffnungszeiten",
    text: "Ab Juni ist die Bibliothek dienstags und donnerstags bis 19 Uhr geöffnet. Für die Ausleihe brauchen Erwachsene einen gültigen Ausweis. Kinder bis 14 Jahre lesen kostenlos.",
    tasks: [
      { prompt: "Die Bibliothek ist ab Juni an zwei Tagen länger geöffnet.", options: ["richtig", "falsch"], answer: "richtig" },
      { prompt: "Erwachsene brauchen für die Ausleihe", options: ["einen gültigen Ausweis.", "eine Schulbescheinigung.", "eine Anmeldung beim Sportverein."], answer: "einen gültigen Ausweis." },
    ],
  },
  {
    title: "Sportkurs im Familienzentrum",
    text: "Der neue Rückenkurs beginnt am Montag um 18 Uhr. Bitte bringen Sie bequeme Kleidung, ein Handtuch und etwas zu trinken mit. Die erste Stunde ist kostenlos.",
    tasks: [
      { prompt: "Die erste Stunde kostet nichts.", options: ["richtig", "falsch"], answer: "richtig" },
      { prompt: "Zum Kurs soll man", options: ["bequeme Kleidung mitbringen.", "einen Kuchen backen.", "die Kinder anmelden."], answer: "bequeme Kleidung mitbringen." },
    ],
  },
  {
    title: "Essensplan der Kita",
    text: "Liebe Eltern, bitte bestellen Sie das Mittagessen für Ihr Kind bis Donnerstag 12 Uhr. Bei Krankheit melden Sie Ihr Kind bis 8 Uhr ab, sonst müssen wir das Essen berechnen.",
    tasks: [
      { prompt: "Bei Krankheit muss man das Kind bis 8 Uhr abmelden.", options: ["richtig", "falsch"], answer: "richtig" },
      { prompt: "Das Mittagessen muss man bis", options: ["Donnerstag 12 Uhr bestellen.", "Freitag 18 Uhr bestellen.", "Montag 8 Uhr abholen."], answer: "Donnerstag 12 Uhr bestellen." },
    ],
  },
  {
    title: "Abfallkalender",
    text: "Im Mai werden die Biotonnen im Bezirk West immer montags geleert. Sperrmüll muss mindestens zwei Wochen vorher angemeldet werden. Elektrogeräte werden nicht mitgenommen.",
    tasks: [
      { prompt: "Elektrogeräte werden beim Sperrmüll mitgenommen.", options: ["richtig", "falsch"], answer: "falsch" },
      { prompt: "Sperrmüll muss man", options: ["mindestens zwei Wochen vorher anmelden.", "jeden Montag rausstellen.", "im Bürgerbüro bezahlen."], answer: "mindestens zwei Wochen vorher anmelden." },
    ],
  },
  {
    title: "Formular in der Arztpraxis",
    text: "Neue Patientinnen und Patienten füllen bitte vor dem ersten Termin den Gesundheitsbogen aus. Bringen Sie außerdem Ihre Versicherungskarte und eine Liste Ihrer Medikamente mit.",
    tasks: [
      { prompt: "Neue Patienten sollen einen Gesundheitsbogen ausfüllen.", options: ["richtig", "falsch"], answer: "richtig" },
      { prompt: "Zum ersten Termin soll man", options: ["die Versicherungskarte mitbringen.", "einen Mietvertrag zeigen.", "ein Foto hochladen."], answer: "die Versicherungskarte mitbringen." },
    ],
  },
];

const dtz100InfoTexts = [
  {
    title: "Hausordnung - Kurzinfo",
    text: "Die Ruhezeiten sind von 13 bis 15 Uhr und von 22 bis 7 Uhr. Fahrräder dürfen nur im Fahrradraum stehen. Der Kellerflur muss frei bleiben. Bei Problemen informieren Sie zuerst die Hausverwaltung.",
    questions: [
      ["Nach 22 Uhr soll es im Haus ruhig sein.", "richtig"],
      ["Fahrräder dürfen im Kellerflur stehen.", "falsch"],
      ["Bei Problemen soll man zuerst die Hausverwaltung informieren.", "richtig"],
      ["Die Mittagsruhe beginnt um 12 Uhr.", "falsch"],
      ["Der Fahrradraum darf benutzt werden.", "richtig"],
      ["Der Kellerflur soll frei bleiben.", "richtig"],
    ],
  },
  {
    title: "Elterninformation zur Ferienbetreuung",
    text: "Die Ferienbetreuung findet von 8 bis 15 Uhr statt. Frühstück bringen die Kinder selbst mit, Mittagessen wird angeboten. Eine Anmeldung ist nur online möglich. Bei Abmeldung nach Kursbeginn wird die Gebühr nicht zurückgezahlt.",
    questions: [
      ["Die Ferienbetreuung endet um 15 Uhr.", "richtig"],
      ["Das Frühstück wird von der Schule bezahlt.", "falsch"],
      ["Man kann sich nur online anmelden.", "richtig"],
      ["Nach Kursbeginn bekommt man die Gebühr immer zurück.", "falsch"],
      ["Mittagessen wird angeboten.", "richtig"],
      ["Die Betreuung beginnt um 7 Uhr.", "falsch"],
    ],
  },
];

const dtz100ClozeSets = [
  {
    title: "E-Mail an die Hausverwaltung",
    text: `Sehr geehrte Damen und Herren,

(1) einigen Tagen ist das Licht im Treppenhaus kaputt. Das ist besonders abends gefährlich, (2) man die Stufen schlecht sieht. Ich habe schon mit dem Hausmeister gesprochen, (3) leider ist noch nichts passiert. Bitte schicken Sie (4) Elektriker. Außerdem ist die Haustür oft offen, (5) das Schloss nicht richtig schließt. Ich bitte Sie (6) eine schnelle Reparatur. Können Sie mir bitte (7), wann jemand kommt? Vielen Dank (8) Ihre Hilfe.

Mit freundlichen Grüßen`,
    questions: [
      ["(1) ... einigen Tagen", ["Seit", "Vor", "Nach"], "Seit"],
      ["(2) ... man die Stufen schlecht sieht.", ["weil", "aber", "denn"], "weil"],
      ["(3) ... leider ist noch nichts passiert.", ["aber", "dass", "oder"], "aber"],
      ["(4) Bitte schicken Sie ... Elektriker.", ["einen", "eine", "ein"], "einen"],
      ["(5) ... das Schloss nicht richtig schließt.", ["weil", "obwohl", "deshalb"], "weil"],
      ["(6) Ich bitte Sie ... eine schnelle Reparatur.", ["um", "für", "mit"], "um"],
      ["(7) Können Sie mir bitte ...", ["mitteilen", "sagen mich", "holen"], "mitteilen"],
      ["(8) Vielen Dank ... Ihre Hilfe.", ["für", "an", "bei"], "für"],
    ],
  },
  {
    title: "Anfrage an eine Sprachschule",
    text: `Sehr geehrte Damen und Herren,

ich interessiere mich (1) einen B1-Kurs am Vormittag. Zurzeit arbeite ich nachmittags, (2) ich nur morgens Zeit habe. Können Sie mir bitte schreiben, (3) der nächste Kurs beginnt? Ich möchte auch wissen, (4) viele Teilnehmer im Kurs sind und (5) der Kurs mit einer Prüfung endet. Ich habe schon A2 gemacht, (6) ich brauche noch viel Übung beim Schreiben. Bitte schicken Sie mir (7) Informationen per E-Mail.

Mit freundlichen (8)`,
    questions: [
      ["(1) ich interessiere mich ... einen B1-Kurs", ["für", "an", "mit"], "für"],
      ["(2) ..., ich nur morgens Zeit habe.", ["deshalb", "trotzdem", "oder"], "deshalb"],
      ["(3) ..., der nächste Kurs beginnt?", ["wann", "weil", "dass"], "wann"],
      ["(4) ... viele Teilnehmer", ["wie", "was", "wer"], "wie"],
      ["(5) ... der Kurs mit einer Prüfung endet.", ["ob", "aber", "nach"], "ob"],
      ["(6) ..., ich brauche noch viel Übung.", ["aber", "denn", "wenn"], "aber"],
      ["(7) Bitte schicken Sie mir ... Informationen.", ["weitere", "weiter", "weit"], "weitere"],
      ["(8) Mit freundlichen ...", ["Grüßen", "Gruß", "Grüße"], "Grüßen"],
    ],
  },
];

function buildDtzReadingSections(examNumber) {
  const guide = dtz100ServiceGuides[(examNumber - 1) % dtz100ServiceGuides.length];
  const part1 = guide.questions.map(([prompt, options, answer]) => ({ kind: "reading-mc", part: "Lesen Teil 1", prompt, options, answer }));
  const ads = dtz100AdSets[(examNumber - 1) % dtz100AdSets.length];
  const part2 = ads.questions.map(([prompt, options, answer]) => ({ kind: "reading-match", part: "Lesen Teil 2", prompt, options, answer }));
  const selectedTexts = dtz100Pick(dtz100ReadingTexts, examNumber, 5, 3);
  const sourceHtml = `<div class="exam-ad-grid">${selectedTexts.map((item, index) => `<article><strong>Text ${index + 1}: ${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p></article>`).join("")}</div>`;
  const part3 = selectedTexts.flatMap((text, textIndex) => text.tasks.map((task, taskIndex) => ({
    kind: taskIndex === 0 ? "reading-tf" : "reading-mc",
    part: "Lesen Teil 3",
    prompt: `Text ${textIndex + 1}: ${task.prompt}`,
    options: task.options,
    answer: task.answer,
  })));
  const info = dtz100InfoTexts[(examNumber - 1) % dtz100InfoTexts.length];
  const part4 = info.questions.map(([prompt, answer]) => ({ kind: "reading-tf", part: "Lesen Teil 4", prompt, options: ["richtig", "falsch"], answer }));
  const cloze = dtz100ClozeSets[(examNumber - 1) % dtz100ClozeSets.length];
  const part5 = cloze.questions.map(([prompt, options, answer]) => ({ kind: "reading-cloze", part: "Lesen Teil 5", prompt, options, answer }));
  return [
    { title: "Lesen Teil 1", time: "45 Minuten Lesen", instruction: `Sie suchen Informationen im ${guide.title}. Wählen Sie das passende Stockwerk oder den passenden Bereich.`, sourceHtml: guide.sourceHtml, questions: part1 },
    { title: "Lesen Teil 2", time: "45 Minuten Lesen", instruction: "Lesen Sie die Situationen und die Anzeigen a-h. Für eine Aufgabe kann auch x richtig sein.", sourceHtml: ads.sourceHtml, questions: part2 },
    { title: "Lesen Teil 3", time: "45 Minuten Lesen", instruction: "Lesen Sie fünf kurze Texte. Zu jedem Text gibt es zwei Aufgaben.", sourceHtml, questions: part3 },
    { title: "Lesen Teil 4", time: "45 Minuten Lesen", instruction: "Lesen Sie die Information. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.", sourceHtml: `<div class="exam-source"><h4>${escapeHtml(info.title)}</h4><p>${escapeHtml(info.text)}</p></div>`, questions: part4 },
    { title: "Lesen Teil 5", time: "45 Minuten Lesen", instruction: "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung passt am besten?", sourceHtml: `<div class="exam-source"><h4>${escapeHtml(cloze.title)}</h4><p>${escapeHtml(cloze.text).replace(/\n/g, "<br>")}</p></div>`, questions: part5 },
  ];
}

const dtz100WritingPool = [
  { title: "Kursbescheinigung", situation: "Sie brauchen für das Jobcenter eine Bescheinigung über Ihren Deutschkurs. Schreiben Sie an die Kursleitung.", points: ["Warum Sie schreiben", "Welche Bescheinigung Sie brauchen", "Bis wann Sie sie brauchen", "Bitte um Rückmeldung"] },
  { title: "Termin beim Vermieter", situation: "In Ihrer Wohnung ist das Fenster kaputt. Schreiben Sie Ihrem Vermieter.", points: ["Grund für Ihr Schreiben", "Was kaputt ist", "Wann Sie zu Hause sind", "Bitte um Reparatur"] },
  { title: "Kind krank", situation: "Ihr Kind kann morgen nicht in die Schule gehen. Schreiben Sie eine E-Mail an die Lehrerin.", points: ["Grund für das Fehlen", "Wie lange Ihr Kind zu Hause bleibt", "Frage nach Hausaufgaben", "Dank und Gruß"] },
  { title: "Probearbeit absagen", situation: "Sie können zu einer Probearbeit nicht kommen. Schreiben Sie dem Arbeitgeber.", points: ["Warum Sie schreiben", "Warum Sie nicht kommen können", "Bitte um neuen Termin", "Entschuldigung"] },
  { title: "Nachfrage bei der Gemeinde", situation: "Sie möchten einen Termin im Bürgerbüro online buchen, aber es funktioniert nicht. Schreiben Sie an die Gemeinde.", points: ["Problem erklären", "Welchen Termin Sie brauchen", "Ihre freien Zeiten", "Bitte um Hilfe"] },
  { title: "Beschwerde Lieferung", situation: "Sie haben Möbel bestellt, aber ein Teil fehlt. Schreiben Sie an den Kundenservice.", points: ["Bestellung nennen", "Problem erklären", "Was Sie erwarten", "Bitte um schnelle Antwort"] },
  { title: "Kita-Platz", situation: "Sie suchen einen Kita-Platz für Ihr Kind. Schreiben Sie an das Familienbüro.", points: ["Warum Sie schreiben", "Alter Ihres Kindes", "Ab wann Sie den Platz brauchen", "Bitte um Informationen"] },
  { title: "Arzttermin verschieben", situation: "Sie haben einen Arzttermin, können aber nicht kommen. Schreiben Sie an die Praxis.", points: ["Grund für Ihr Schreiben", "Warum Sie nicht kommen können", "Bitte um neuen Termin", "Ihre Telefonnummer"] },
  { title: "Nachbarschaftslärm", situation: "Im Haus ist es nachts oft laut. Schreiben Sie an die Hausverwaltung.", points: ["Was passiert", "Wann es laut ist", "Was Sie schon versucht haben", "Was die Hausverwaltung tun soll"] },
  { title: "Sprachkurs wechseln", situation: "Ihr aktueller Kurs ist am Abend, aber Sie arbeiten jetzt abends. Schreiben Sie an die Schule.", points: ["Ihre Situation", "Warum der Abendkurs nicht mehr passt", "Wunsch nach Vormittagskurs", "Frage nach freien Plätzen"] },
  { title: "Rechnung unklar", situation: "Sie haben eine Rechnung bekommen und verstehen einen Betrag nicht. Schreiben Sie an die Firma.", points: ["Rechnung nennen", "Was unklar ist", "Bitte um Erklärung", "Ihre Kundennummer"] },
  { title: "Urlaub beantragen", situation: "Sie möchten im Sommer Urlaub nehmen. Schreiben Sie Ihrem Arbeitgeber.", points: ["Wann Sie Urlaub möchten", "Warum der Zeitraum wichtig ist", "Vertretung vorschlagen", "Bitte um Bestätigung"] },
  { title: "Elternabend", situation: "Sie können nicht zum Elternabend kommen. Schreiben Sie dem Lehrer.", points: ["Grund für Ihr Schreiben", "Warum Sie nicht kommen", "Fragen zum Thema", "Bitte um Informationen"] },
  { title: "Hotelanfrage", situation: "Sie planen ein Wochenende in einer anderen Stadt. Schreiben Sie an ein Hotel.", points: ["Wann Sie kommen möchten", "Wie viele Personen", "Frage nach Frühstück", "Frage nach Kosten"] },
  { title: "Sportkurs", situation: "Sie möchten einen Sportkurs besuchen und haben Fragen. Schreiben Sie an den Verein.", points: ["Warum Sie schreiben", "Welche Erfahrung Sie haben", "Frage nach Terminen", "Frage nach Kosten"] },
  { title: "Dokument verloren", situation: "Sie haben im Bus Ihre Tasche verloren. Schreiben Sie an das Fundbüro.", points: ["Was Sie verloren haben", "Wann und wo", "Beschreibung der Tasche", "Bitte um Nachricht"] },
];

const dtz100IntroPool = [
  { title: "Sich vorstellen", prompt: "Sprechen Sie über Name, Herkunft, Wohnort, Familie, Arbeit, Deutschkurs und Ziele.", expectedKeywords: ["heiße", "komme", "wohne", "familie", "arbeite", "deutsch", "ziel"] },
  { title: "Mein Alltag", prompt: "Erzählen Sie kurz über einen normalen Tag: Morgen, Arbeit oder Kurs, Familie, Freizeit.", expectedKeywords: ["morgens", "arbeite", "kurs", "familie", "freizeit", "abends"] },
  { title: "Deutsch lernen", prompt: "Erzählen Sie, warum Sie Deutsch lernen und was Ihnen leicht oder schwer fällt.", expectedKeywords: ["deutsch", "lernen", "schwer", "leicht", "sprechen", "prüfung"] },
  { title: "Beruf und Zukunft", prompt: "Erzählen Sie, was Sie beruflich machen oder später machen möchten.", expectedKeywords: ["beruf", "arbeiten", "ausbildung", "zukunft", "möchte"] },
  { title: "Familie und Wohnen", prompt: "Erzählen Sie über Ihre Familie, Ihre Wohnung und Ihre Umgebung.", expectedKeywords: ["familie", "wohnung", "wohne", "stadt", "nachbarn"] },
  { title: "Freizeit", prompt: "Erzählen Sie, was Sie in Ihrer Freizeit gern machen und warum.", expectedKeywords: ["freizeit", "gern", "sport", "spazieren", "freunde"] },
  { title: "Einkaufen", prompt: "Erzählen Sie, wo und wann Sie einkaufen und worauf Sie achten.", expectedKeywords: ["einkaufen", "supermarkt", "preis", "qualität", "bezahlen"] },
  { title: "Gesundheit", prompt: "Erzählen Sie, was Sie für Ihre Gesundheit tun.", expectedKeywords: ["gesund", "arzt", "sport", "essen", "schlafen"] },
];

const dtz100PlanningPool = [
  { title: "Gemeinsam etwas planen: Kursfest", situation: "Sie möchten mit Ihrem Deutschkurs ein kleines Fest organisieren.", notes: ["Wann?", "Wo?", "Essen und Getränke", "Musik", "Wer bringt was mit?", "...?"], expectedKeywords: ["wann", "wo", "essen", "getränke", "musik", "bringen"] },
  { title: "Gemeinsam etwas planen: Ausflug", situation: "Sie planen mit einer anderen Person einen Ausflug am Wochenende.", notes: ["Wohin?", "Wie fahren?", "Kosten", "Essen", "Treffpunkt", "...?"], expectedKeywords: ["wohin", "fahren", "kosten", "essen", "treffpunkt"] },
  { title: "Gemeinsam etwas planen: Nachbarhilfe", situation: "Eine ältere Nachbarin braucht Hilfe beim Einkaufen. Planen Sie gemeinsam.", notes: ["Wann helfen?", "Wer kauft ein?", "Was wird gebraucht?", "Bezahlung", "Weitere Hilfe", "...?"], expectedKeywords: ["helfen", "einkaufen", "wann", "bezahlen", "nachbarin"] },
  { title: "Gemeinsam etwas planen: Kindergeburtstag", situation: "Sie möchten einen Kindergeburtstag vorbereiten.", notes: ["Ort", "Zeit", "Einladungen", "Essen", "Spiele", "...?"], expectedKeywords: ["ort", "zeit", "einladung", "essen", "spiele"] },
  { title: "Gemeinsam etwas planen: Wohnungsproblem", situation: "Der Aufzug im Haus ist wieder kaputt. Sie möchten gemeinsam reagieren.", notes: ["Wen informieren?", "Anrufen oder schreiben?", "Was sagen?", "Nachbarn informieren", "Wenn nichts passiert?", "...?"], expectedKeywords: ["aufzug", "hausverwaltung", "anrufen", "schreiben", "nachbarn"] },
  { title: "Gemeinsam etwas planen: Besuch im Krankenhaus", situation: "Eine Freundin liegt im Krankenhaus. Planen Sie den Besuch.", notes: ["Wann besuchen?", "Wer kommt mit?", "Geschenk", "Anfahrt", "Wie lange bleiben?", "...?"], expectedKeywords: ["besuch", "krankenhaus", "geschenk", "fahrt", "zeit"] },
  { title: "Gemeinsam etwas planen: Lerngruppe", situation: "Sie möchten vor der Prüfung eine Lerngruppe organisieren.", notes: ["Wann lernen?", "Wo treffen?", "Welche Themen?", "Material", "Wer erklärt was?", "...?"], expectedKeywords: ["lernen", "prüfung", "themen", "material", "treffen"] },
  { title: "Gemeinsam etwas planen: Umzug", situation: "Eine Person aus dem Kurs zieht um. Planen Sie die Hilfe.", notes: ["Termin", "Transport", "Wer hilft?", "Kisten", "Essen für Helfer", "...?"], expectedKeywords: ["umzug", "transport", "helfen", "kisten", "termin"] },
];

function makeDtzWritingTasks(examNumber) {
  return dtz100Pick(dtz100WritingPool, examNumber, 8, 5);
}

function makeDtzSpeakingTasks(examNumber) {
  const intros = dtz100Pick(dtz100IntroPool, examNumber, 4).map((item) => ({ type: "intro", ...item }));
  const photos = dtz100Pick(pictureTasks, examNumber, 4, 2).map((item) => ({ type: "photo", title: item.title, image: item.image, expectedKeywords: item.expectedKeywords }));
  const plans = dtz100Pick(dtz100PlanningPool, examNumber, 4, 4).map((item) => ({ type: "plan", ...item }));
  return [...intros, ...photos, ...plans];
}

function buildDtzExam(examNumber) {
  const listeningSections = buildDtzListeningSections(examNumber);
  const readingSections = buildDtzReadingSections(examNumber);
  const writingTasks = makeDtzWritingTasks(examNumber);
  const speakingTasksForExam = makeDtzSpeakingTasks(examNumber);
  return {
    number: examNumber,
    listeningSections,
    readingSections,
    listening: listeningSections.flatMap((section) => section.questions),
    reading: readingSections.flatMap((section) => section.questions),
    writingTasks,
    speakingTasks: speakingTasksForExam,
    totalTasks: 100,
    startedAt: Date.now(),
    duration: 120 * 60,
  };
}

function renderDtzWriting(writingTasks) {
  return `
    <div class="exam-section">
      <div class="exam-paper-header"><strong>Schreiben</strong><span>30 Minuten</span></div>
      <p class="muted">Bearbeiten Sie die Schreibaufgaben. Achten Sie auf Anrede, Gruß, passende Reihenfolge und klare Sätze.</p>
      ${writingTasks.map((task, index) => `
        <div class="exam-question">
          <h4>${81 + index}. ${escapeHtml(task.title)}</h4>
          <p>${escapeHtml(task.situation)}</p>
          <p><strong>Schreiben Sie etwas zu folgenden Punkten:</strong></p>
          <ul>${task.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
          <textarea name="writing${index}" placeholder="Ihre Antwort zu Aufgabe ${81 + index}"></textarea>
        </div>
      `).join("")}
    </div>
  `;
}

function renderDtzSpeaking(speakingTasksForExam) {
  const renderTask = (task, index) => {
    const number = 89 + index;
    const textareaId = `examSpeaking-${index}`;
    if (task.type === "photo") {
      return `
        <div class="exam-question">
          <h4>${number}. Teil 2: Über Erfahrungen sprechen</h4>
          <div class="photo-card">
            <img src="${escapeHtml(task.image)}" alt="${escapeHtml(task.title)}" loading="lazy">
            <div class="body">
              <strong>${escapeHtml(task.title)}</strong>
              <textarea id="${textareaId}" name="speaking${index}" placeholder="Ihre Beschreibung und eigene Erfahrung"></textarea>
              <div class="actions"><button class="secondary" type="button" data-exam-record="${textareaId}">Aufnehmen</button></div>
            </div>
          </div>
        </div>
      `;
    }
    if (task.type === "plan") {
      return `
        <div class="exam-question">
          <h4>${number}. Teil 3: Gemeinsam etwas planen</h4>
          <p>${escapeHtml(task.situation)}</p>
          <div class="exam-note-card">
            <strong>${escapeHtml(task.title)}</strong>
            <ul>${task.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>
          </div>
          <textarea id="${textareaId}" name="speaking${index}" placeholder="Ihre Planung oder Stichpunkte"></textarea>
          <div class="actions"><button class="secondary" type="button" data-exam-record="${textareaId}">Aufnehmen</button></div>
        </div>
      `;
    }
    return `
      <div class="exam-question">
        <h4>${number}. Teil 1: Sich vorstellen</h4>
        <p>${escapeHtml(task.prompt)}</p>
        <textarea id="${textareaId}" name="speaking${index}" placeholder="Ihre mündliche Antwort"></textarea>
        <div class="actions"><button class="secondary" type="button" data-exam-record="${textareaId}">Aufnehmen</button></div>
      </div>
    `;
  };
  return `
    <div class="exam-section">
      <div class="exam-paper-header"><strong>Sprechen und Fotoaufgaben</strong><span>ca. 20 Minuten Training</span></div>
      <p class="muted">Sprechen Sie möglichst frei. Bei Fotoaufgaben gibt es keine Beschreibung unter dem Bild: Sie beschreiben selbst, was Sie sehen und welche Erfahrungen Sie damit haben.</p>
      ${speakingTasksForExam.map(renderTask).join("")}
    </div>
  `;
}

function renderDtzExams() {
  if (!state.exam) {
    return `
      <section class="grid">
        <div class="card span-7">
          <h2>30 DTZ-Modelltests mit je 100 Aufgaben</h2>
          <p class="muted">Jede Prüfung mischt Hören, Lesen, Schreiben, Foto beschreiben und Sprechen. Die Inhalte sind neu erstellt und orientieren sich nur am Konzept der DTZ-Prüfung.</p>
          <label>Prüfung auswählen<select id="examNumber">${Array.from({ length: 30 }, (_, i) => `<option value="${i + 1}">Modelltest ${i + 1}</option>`).join("")}</select></label>
          <div class="actions">
            <button class="primary" id="startExam" type="button">Prüfung starten</button>
            <button class="secondary" id="startRandomExam" type="button">Zufällige Prüfung starten</button>
          </div>
        </div>
        <div class="card span-5">
          <h3>Prüfungsaufbau</h3>
          <ul>
            <li>Hören: 40 Aufgaben, einzeln abspielbar.</li>
            <li>Lesen: 40 Aufgaben mit Wegweisern, Anzeigen, Texten und Lücken.</li>
            <li>Schreiben: 8 Aufgaben mit Briefen und E-Mails.</li>
            <li>Sprechen/Fotos: 12 Aufgaben mit Vorstellung, Foto und gemeinsamer Planung.</li>
          </ul>
        </div>
        <div class="card span-12">${sourceNote()}</div>
      </section>
    `;
  }
  const exam = state.exam;
  return `
    <section class="grid">
      <div class="card span-12">
        <div class="metric"><h2>DTZ-Modelltest ${exam.number}</h2><span class="timer" id="examTimer">${formatTime(remainingExamSeconds())}</span></div>
        <p class="muted">100 Aufgaben: 40 Hören, 40 Lesen, 8 Schreiben, 12 Sprechen/Fotos. Am Ende sehen Sie die richtigen und falschen Antworten.</p>
        <div class="actions">
          <button class="secondary" id="playAllListening" type="button">Alle Hördialoge nacheinander abspielen</button>
          <button class="ghost" id="stopExamAudio" type="button">Audio stoppen</button>
          <button class="danger" id="cancelExam" type="button">Prüfung verlassen</button>
        </div>
      </div>
      <form id="examForm" class="card span-12">
        ${renderDtzExamSections(exam.listeningSections, 1, "hören")}
        ${renderDtzExamSections(exam.readingSections, 41, "lesen")}
        ${renderDtzWriting(exam.writingTasks)}
        ${renderDtzSpeaking(exam.speakingTasks)}
        <div class="actions">
          <button class="primary" type="submit">Prüfung abgeben</button>
        </div>
      </form>
    </section>
  `;
}

function gradeDtzExam(formData) {
  const questions = [...state.exam.listening, ...state.exam.reading];
  let points = 0;
  const rows = questions.map((item, index) => {
    const number = index + 1;
    const answer = formData.get(`q${number}`) || "";
    const correct = normalize(answer) === normalize(item.answer);
    if (correct) points += 1;
    return `<tr><td>${number}</td><td>${escapeHtml(item.part || "")}</td><td>${correct ? "richtig" : "falsch"}</td><td>${escapeHtml(answer || "-")}</td><td>${escapeHtml(item.answer)}</td></tr>`;
  });
  const writingFeedback = state.exam.writingTasks.map((task, index) => {
    const text = formData.get(`writing${index}`) || "";
    return `<div class="feedback-block"><h4>${81 + index}. ${escapeHtml(task.title)}</h4>${analyzeLetterText(text)}</div>`;
  }).join("");
  const speakingFeedback = state.exam.speakingTasks.map((task, index) => {
    const text = formData.get(`speaking${index}`) || "";
    return `<div class="feedback-block"><h4>${89 + index}. ${escapeHtml(task.title)}</h4>${analyzeSpeechText(text, task.expectedKeywords || [])}</div>`;
  }).join("");
  const result = { exam: state.exam.number, points, at: new Date().toISOString() };
  progress.examResults.push(result);
  saveProgress();
  clearInterval(state.examTimer);
  state.exam = null;
  showModal(`
    <h3>Prüfung ausgewertet</h3>
    <p><strong>Automatisch ausgewertet: ${points}/80 Punkte.</strong> ${points >= 60 ? "Sehr guter Bereich." : points >= 52 ? "Solider Bereich, weiter an den Fehlern üben." : "Bitte die falschen Antworten gezielt wiederholen."}</p>
    <p class="muted">Schreiben und Sprechen werden als Lernanalyse bewertet, weil sie freie Antworten sind.</p>
    <details open><summary>Richtige und falsche Antworten anzeigen</summary>
      <table class="table"><thead><tr><th>Nr.</th><th>Teil</th><th>Status</th><th>Ihre Antwort</th><th>Richtig</th></tr></thead><tbody>${rows.join("")}</tbody></table>
    </details>
    <h4>Analyse Schreiben</h4>
    ${writingFeedback}
    <h4>Analyse Sprechen und Fotos</h4>
    ${speakingFeedback}
  `);
  render();
}

buildExam = buildDtzExam;
renderExams = renderDtzExams;
gradeExam = gradeDtzExam;

function renderLid() {
  if (!state.lidQuiz) {
    return `
      <section class="grid">
        <div class="card span-7">
          <h2>Leben in Deutschland</h2>
          <p class="muted">Trainieren Sie mit ${lidQuestions.length} LiD-Übungsfragen. Für den echten Test sind 33 Fragen in 60 Minuten vorgesehen; bestanden ist der Orientierungskurstest ab 15 richtigen Antworten, für den Einbürgerungsnachweis ab 17.</p>
          <div class="split">
            <label>Anzahl Fragen<select id="lidCount"><option value="33">33 Fragen</option><option value="80">80 Fragen</option><option value="20">20 Fragen kurz</option></select></label>
            <label>Zeit<select id="lidMinutes"><option value="60">60 Minuten</option><option value="30">30 Minuten</option><option value="15">15 Minuten</option></select></label>
          </div>
          <div class="actions">
            <button class="primary" id="startLid" type="button">LiD-Test starten</button>
            <a class="ghost" href="https://oet.bamf.de/ords/oetut/f?p=514:1:0" target="_blank" rel="noreferrer">Offiziellen BAMF-Katalog öffnen</a>
          </div>
        </div>
        <div class="card span-5">
          <h3>Hinweis zum amtlichen Katalog</h3>
          <p class="muted">Das BAMF stellt 310 zugelassene Prüfungsfragen bereit. Diese App ist dafür vorbereitet, einen amtlichen JSON/CSV-Fragenblock einzuspielen. Der enthaltene Katalog ist ein prüfungsnaher Trainingskatalog mit 310 Fragen.</p>
        </div>
      </section>
    `;
  }
  return `
    <section class="grid">
      <div class="card span-12">
        <div class="metric"><h2>LiD-Test</h2><span class="timer" id="lidTimer">${formatTime(remainingLidSeconds())}</span></div>
        <p class="muted">${state.lidQuiz.questions.length} Fragen. Am Ende sehen Sie richtige und falsche Antworten.</p>
      </div>
      <form id="lidForm" class="card span-12">
        ${state.lidQuiz.questions.map((item, index) => `
          <div class="exam-question">
            <p><strong>${index + 1}. ${escapeHtml(item.question)}</strong></p>
            <button class="ghost" data-lid-tr="${index}" type="button">Türkisch</button>
            <div class="option-list">
              ${item.options.map((option) => `<label class="option"><input type="radio" name="lid${index}" value="${escapeHtml(option)}"> ${escapeHtml(option)}</label>`).join("")}
            </div>
          </div>
        `).join("")}
        <div class="actions"><button class="primary" type="submit">Test auswerten</button><button class="danger" id="cancelLid" type="button">Abbrechen</button></div>
      </form>
    </section>
  `;
}

function bindLid() {
  document.querySelector("#startLid")?.addEventListener("click", () => {
    const count = Number(document.querySelector("#lidCount").value);
    const minutes = Number(document.querySelector("#lidMinutes").value);
    state.lidQuiz = {
      questions: shuffle(lidQuestions).slice(0, Math.min(count, lidQuestions.length)),
      startedAt: Date.now(),
      duration: minutes * 60,
    };
    startLidTimer();
    render();
  });
  document.querySelector("#cancelLid")?.addEventListener("click", () => {
    clearInterval(state.lidTimer);
    state.lidQuiz = null;
    render();
  });
  document.querySelectorAll("[data-lid-tr]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const item = state.lidQuiz.questions[Number(button.dataset.lidTr)];
      showModal(`<h3>Türkische Hilfe</h3><p>${escapeHtml(item.tr)}</p>`);
    });
  });
  document.querySelector("#lidForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    gradeLid(new FormData(event.currentTarget));
  });
}

function startLidTimer() {
  clearInterval(state.lidTimer);
  state.lidTimer = setInterval(() => {
    const timer = document.querySelector("#lidTimer");
    if (timer) timer.textContent = formatTime(remainingLidSeconds());
    if (remainingLidSeconds() <= 0) {
      clearInterval(state.lidTimer);
      document.querySelector("#lidForm")?.requestSubmit();
    }
  }, 1000);
}

function remainingLidSeconds() {
  if (!state.lidQuiz) return 0;
  return Math.max(0, state.lidQuiz.duration - Math.floor((Date.now() - state.lidQuiz.startedAt) / 1000));
}

function gradeLid(formData) {
  let points = 0;
  const rows = state.lidQuiz.questions.map((item, index) => {
    const answer = formData.get(`lid${index}`) || "";
    const correct = normalize(answer) === normalize(item.answer);
    if (correct) points += 1;
    return `<tr><td>${index + 1}</td><td>${correct ? "richtig" : "falsch"}</td><td>${escapeHtml(answer || "-")}</td><td>${escapeHtml(item.answer)}</td></tr>`;
  });
  const count = state.lidQuiz.questions.length;
  const passOrientation = count === 33 ? points >= 15 : points / count >= 15 / 33;
  const passCitizenship = count === 33 ? points >= 17 : points / count >= 17 / 33;
  progress.lidResults.push({ points, count, at: new Date().toISOString() });
  saveProgress();
  clearInterval(state.lidTimer);
  state.lidQuiz = null;
  showModal(`
    <h3>LiD-Test ausgewertet</h3>
    <p><strong>${points}/${count} richtig.</strong></p>
    <p>${passOrientation ? "Orientierungskurs-Ziel erreicht." : "Für den Orientierungskurs weiter üben."} ${passCitizenship ? "Einbürgerungsnachweis-Ziel erreicht." : "Für den Einbürgerungsnachweis weiter üben."}</p>
    <table class="table"><thead><tr><th>Nr.</th><th>Status</th><th>Ihre Antwort</th><th>Richtig</th></tr></thead><tbody>${rows.join("")}</tbody></table>
  `);
  render();
}

function renderAnalysis() {
  const skills = Object.values(skillStats()).sort((a, b) => a.percent - b.percent);
  const weakest = skills.slice(0, 3);
  const strongest = skills.slice(-3).reverse();
  const summary = statsSummary();
  return `
    <section class="grid">
      <div class="card span-12">
        <h2>Analyse des Deutschstands</h2>
        <p class="muted">Die Analyse basiert auf gelösten Aufgaben, Prüfungen und LiD-Tests auf diesem Gerät.</p>
      </div>
      <div class="card span-4"><div class="metric"><span>Gesamtquote</span><strong>${summary.percent}%</strong></div></div>
      <div class="card span-4"><div class="metric"><span>Richtig gelöst</span><strong>${summary.correct}</strong></div></div>
      <div class="card span-4"><div class="metric"><span>Wiederholen</span><strong>${summary.wrong}</strong></div></div>
      <div class="card span-6">
        <h3>Stärken</h3>
        <div class="list">${strongest.map(renderSkillRow).join("")}</div>
      </div>
      <div class="card span-6">
        <h3>Schwächen</h3>
        <div class="list">${weakest.map(renderSkillRow).join("")}</div>
      </div>
      <div class="card span-12">
        <h3>Empfehlung</h3>
        <p>${recommendation(weakest[0])}</p>
        <div class="actions">
          <button class="primary" data-view="practice" type="button">Schwäche üben</button>
          <button class="secondary" data-view="letters" type="button">Brief trainieren</button>
          <button class="ghost" id="resetAll" type="button">Fortschritt zurücksetzen</button>
        </div>
      </div>
      <div class="card span-12">
        <h3>Letzte Prüfungen</h3>
        <p class="muted">DTZ: ${progress.examResults.slice(-5).map((r) => `Prüfung ${r.exam}: ${r.points}/45`).join(" · ") || "noch keine"}<br>LiD: ${progress.lidResults.slice(-5).map((r) => `${r.points}/${r.count}`).join(" · ") || "noch keine"}</p>
      </div>
    </section>
  `;
}

function renderSkillRow(skill) {
  return `
    <div class="list-item">
      <strong>${escapeHtml(skill.label)}</strong>
      <div class="progress-bar"><span style="width:${skill.percent}%"></span></div>
      <p class="muted">${skill.correct}/${skill.answered || 0} richtig beantwortet, ${skill.total} Aufgaben im Bereich.</p>
    </div>
  `;
}

function recommendation(weakest) {
  if (!weakest || !weakest.answered) return "Starten Sie mit Wortschatz, Artikeln und kurzen Sätzen. Danach Briefe und Hörverstehen trainieren.";
  const text = {
    vocabulary: "Üben Sie jeden Tag 15 Minuten Wortschatz mit ganzen Beispielsätzen.",
    verbs: "Trainieren Sie Präsens, Perfekt, Präteritum und Futur mit kurzen Alltagssätzen.",
    cases: "Wiederholen Sie Artikel, Akkusativ und Dativ. Sprechen Sie die Beispielsätze laut.",
    sentence: "Achten Sie auf Verbposition: Aussage Satz 2, Nebensatz am Ende.",
    reading: "Lesen Sie kurze Briefe und markieren Sie Datum, Ort, Frist und Aufgabe.",
    dialogue: "Sprechen Sie Dialoge laut nach und lernen Sie typische höfliche Sätze.",
    listening: "Hören Sie kurze Ansagen mehrmals und notieren Sie Zahlen, Zeiten und Orte.",
  }[Object.keys(skillNames).find((key) => skillNames[key] === weakest.label)];
  return text || "Üben Sie weiter in kurzen Einheiten und wiederholen Sie nur falsche Aufgaben.";
}

function bindAnalysis() {
  document.querySelector("#resetAll")?.addEventListener("click", () => {
    if (confirm("Wirklich den gesamten Fortschritt löschen?")) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function showModal(html) {
  const template = document.querySelector("#modalTemplate");
  const node = template.content.firstElementChild.cloneNode(true);
  node.querySelector(".modal-body").innerHTML = html;
  node.querySelector(".modal-close").addEventListener("click", () => node.remove());
  node.addEventListener("click", (event) => {
    if (event.target === node) node.remove();
  });
  document.body.appendChild(node);
}

window.addEventListener("hashchange", () => {
  state.view = normalizeView(location.hash.replace("#", "") || "dashboard");
  state.currentExercise = null;
  render();
});

window.addEventListener("popstate", () => {
  state.view = normalizeView(location.hash.replace("#", "") || "dashboard");
  state.currentExercise = null;
  render();
});

let deferredInstallPrompt = null;
const installButton = document.querySelector("#installBtn");

function showInstallHelp() {
  const publicUrl = location.protocol === "https:" ? location.href : "den späteren öffentlichen HTTPS-Link";
  showModal(`
    <h3>App auf Android installieren</h3>
    <p>Dieser Browser kann den Installationsdialog nicht automatisch öffnen. Das passiert oft im In-App-Browser oder bei einer lokalen Vorschau.</p>
    <ol>
      <li>Öffnen Sie ${escapeHtml(publicUrl)} in Chrome auf dem Android-Handy.</li>
      <li>Tippen Sie oben rechts auf das Drei-Punkte-Menü.</li>
      <li>Wählen Sie „App installieren“ oder „Zum Startbildschirm hinzufügen“.</li>
      <li>Bestätigen Sie die Installation.</li>
    </ol>
    <p><strong>Wichtig:</strong> Für Außenstehende braucht die App zuerst einen öffentlichen HTTPS-Link, zum Beispiel über Netlify, Vercel, GitHub Pages oder Firebase Hosting.</p>
  `);
}

if (installButton) {
  installButton.classList.remove("hidden");
  installButton.textContent = "Installieren / Anleitung";
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (installButton) installButton.textContent = "App installieren";
});

installButton?.addEventListener("click", async () => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    showModal("<h3>Bereits installiert</h3><p>Die App läuft bereits im App-Modus.</p>");
    return;
  }
  if (!deferredInstallPrompt) {
    showInstallHelp();
    return;
  }
  try {
    await deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (choice.outcome === "accepted") {
      showModal("<h3>Installation gestartet</h3><p>Der Browser richtet die App jetzt auf dem Gerät ein.</p>");
    } else {
      showInstallHelp();
    }
  } catch {
    showInstallHelp();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

render();

/*
  Neue DTZ/B1-Lernstruktur.
  Dieser Block übernimmt die Anzeige der App mit prüfungsnahen, aber eigenen Aufgaben.
*/
(() => {
  const SMART_VERSION = "20260623-dtz-neu-klein";
  const smartAudio = new Map();
  const smartReading = new Map();
  const smartExamStore = new Map();
  const smartViews = [
    { id: "dashboard", label: "Start" },
    { id: "practice", label: "Übungen" },
    { id: "photos", label: "Fotos" },
    { id: "reading", label: "Lesen" },
    { id: "listening", label: "Hören" },
    { id: "dialogues", label: "Dialoge" },
    { id: "letters", label: "Briefe" },
    { id: "exams", label: "DTZ Prüfung" },
    { id: "grammar", label: "Grammatik" },
    { id: "analysis", label: "Analyse" },
    { id: "lid", label: "Leben in Deutschland" },
  ];

  const smartRuntime = {
    photoIndex: Number(localStorage.getItem("dtzSmartPhotoIndex") || 0),
    grammarIndex: Number(localStorage.getItem("dtzSmartGrammarIndex") || 0),
    readingIndex: Number(localStorage.getItem("dtzSmartReadingIndex") || 0),
    listeningIndex: Number(localStorage.getItem("dtzSmartListeningIndex") || 0),
    dialogueIndex: Number(localStorage.getItem("dtzSmartDialogueIndex") || 0),
    activeExam: Number(localStorage.getItem("dtzSmartExamNumber") || 1),
    activeLetter: 0,
  };

  const h = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const slug = (text) => String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const clean = (text) => String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zäöüß0-9\s-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const pick = (items, index) => items[((index % items.length) + items.length) % items.length];
  const pickMany = (items, start, count) => Array.from({ length: count }, (_, offset) => pick(items, start + offset));

  const progressKey = "dtzSmartProgress";
  const smartProgress = JSON.parse(localStorage.getItem(progressKey) || '{"answered":0,"correct":0,"recordings":0,"photos":0,"reading":0,"dialogs":0,"exams":0}');

  function saveSmartProgress() {
    localStorage.setItem(progressKey, JSON.stringify(smartProgress));
  }

  function remember(key, value) {
    localStorage.setItem(key, String(value));
  }

  const photoGroups = [
    {
      base: "bakery",
      titles: ["In der Bäckerei", "Beim Frühstück einkaufen", "An der Verkaufstheke", "Etwas bestellen"],
      keywords: ["bäckerei", "theke", "bestellen", "brot", "brötchen", "verkäufer", "kundin", "bezahlen", "einkaufen"],
    },
    {
      base: "playground",
      titles: ["Auf dem Spielplatz", "Kinder am Nachmittag", "Familien im Park", "Freizeit mit Kindern"],
      keywords: ["kinder", "spielplatz", "spielen", "park", "eltern", "freizeit", "draußen", "sicherheit", "familie"],
    },
    {
      base: "forest",
      titles: ["Spaziergang im Wald", "Mit dem Hund unterwegs", "Freizeit in der Natur", "Ein Paar geht spazieren"],
      keywords: ["wald", "hund", "spazieren", "paar", "natur", "freizeit", "weg", "frische luft", "erholung"],
    },
    {
      base: "station",
      titles: ["Am Bahnhof", "Eine Reise beginnt", "Warten auf den Zug", "Unterwegs mit öffentlichen Verkehrsmitteln"],
      keywords: ["bahnhof", "zug", "gleis", "warten", "reise", "fahrkarte", "fahrplan", "koffer", "pendeln"],
    },
    {
      base: "birthday",
      titles: ["Eine Geburtstagsfeier", "Familie feiert zusammen", "Kuchen und Gäste", "Ein besonderer Tag"],
      keywords: ["geburtstag", "feier", "familie", "gäste", "kuchen", "geschenke", "zusammen", "einladen", "freude"],
    },
  ];

  const smartPhotoTasks = photoGroups.flatMap((group, groupIndex) => group.titles.map((title, variantIndex) => {
    const number = groupIndex * 4 + variantIndex + 1;
    return {
      id: `photo-${number}`,
      title,
      image: `assets/photos/photo-${String(number).padStart(2, "0")}.jpg`,
      keywords: group.keywords,
      prompt: "Beschreiben Sie das Foto. Teilen Sie Ihre Erfahrung dazu. Vergleichen Sie die Situation mit Ihrem Heimatland.",
      tr: "Fotoğrafı anlatın. Bu konuyla ilgili kendi deneyiminizi paylaşın. Bu durumu memleketinizle karşılaştırın.",
    };
  }));

  const readingPractice = [
    {
      title: "Mitteilung der Hausverwaltung",
      text: "Liebe Mieterinnen und Mieter, am Donnerstag wird im Haus das Wasser zwischen 9 und 13 Uhr abgestellt. Bitte planen Sie Ihren Vormittag entsprechend. Wenn Sie kleine Kinder oder pflegebedürftige Angehörige versorgen, melden Sie sich bitte bis Mittwoch im Büro. Danach können wir leider keine besondere Hilfe mehr organisieren.",
      questions: [
        ["Wann gibt es kein Wasser?", ["Am Donnerstagvormittag", "Am Mittwochabend", "Am Freitagmittag"], "Am Donnerstagvormittag"],
        ["Wer soll sich im Büro melden?", ["Personen mit besonderem Bedarf", "Alle Besucher", "Nur neue Mieter"], "Personen mit besonderem Bedarf"],
        ["Was bedeutet die Mitteilung?", ["Man soll rechtzeitig planen", "Man soll sofort ausziehen", "Man bekommt eine neue Wohnung"], "Man soll rechtzeitig planen"],
      ],
      keywords: ["donnerstag", "wasser", "neun", "dreizehn", "büro", "melden", "hilfe"],
    },
    {
      title: "E-Mail vom Kindergarten",
      text: "Sehr geehrte Eltern, nächste Woche besucht die Gruppe den Stadtpark. Die Kinder brauchen eine Trinkflasche, wetterfeste Kleidung und eine kleine Brotdose. Bitte geben Sie Ihrem Kind kein Geld mit. Bei starkem Regen bleibt die Gruppe in der Einrichtung und macht dort ein Bewegungsangebot.",
      questions: [
        ["Was sollen die Kinder mitbringen?", ["Trinkflasche und Brotdose", "Geld und Spielzeug", "Pass und Foto"], "Trinkflasche und Brotdose"],
        ["Was passiert bei starkem Regen?", ["Die Gruppe bleibt im Kindergarten", "Der Ausflug dauert länger", "Die Eltern müssen mitkommen"], "Die Gruppe bleibt im Kindergarten"],
        ["Warum ist der Text wichtig?", ["Er informiert über Vorbereitung", "Er kündigt eine Prüfung an", "Er ist eine Rechnung"], "Er informiert über Vorbereitung"],
      ],
      keywords: ["eltern", "stadtpark", "trinkflasche", "kleidung", "brotdose", "regen"],
    },
    {
      title: "Information der Volkshochschule",
      text: "Der neue B1-Abendkurs beginnt am 12. August. Der Unterricht findet montags und mittwochs von 18 bis 21 Uhr statt. Wenn Sie Kinderbetreuung brauchen, sprechen Sie bitte vor der Anmeldung mit der Beratung. Die Prüfung ist nicht automatisch im Kurs enthalten.",
      questions: [
        ["Wann findet der Unterricht statt?", ["Montags und mittwochs abends", "Jeden Morgen", "Nur am Wochenende"], "Montags und mittwochs abends"],
        ["Was muss man wegen Kinderbetreuung tun?", ["Vorher mit der Beratung sprechen", "Direkt zur Prüfung gehen", "Eine E-Mail an die Bank schreiben"], "Vorher mit der Beratung sprechen"],
        ["Was steht über die Prüfung?", ["Sie ist nicht automatisch enthalten", "Sie ist kostenlos für alle", "Sie beginnt am ersten Kurstag"], "Sie ist nicht automatisch enthalten"],
      ],
      keywords: ["abendkurs", "august", "montag", "mittwoch", "beratung", "prüfung"],
    },
    {
      title: "Aushang im Jobcenter",
      text: "Am Freitag bleibt die Eingangszone wegen einer internen Schulung geschlossen. Termine bei persönlichen Ansprechpartnern finden trotzdem statt. Wenn Sie nur Unterlagen abgeben möchten, nutzen Sie bitte den Briefkasten am Eingang oder laden Sie die Dokumente online hoch.",
      questions: [
        ["Was ist am Freitag geschlossen?", ["Die Eingangszone", "Alle Arztpraxen", "Die Schule"], "Die Eingangszone"],
        ["Welche Termine finden statt?", ["Termine bei Ansprechpartnern", "Keine Termine", "Nur Online-Kurse"], "Termine bei Ansprechpartnern"],
        ["Wie kann man Unterlagen abgeben?", ["Briefkasten oder online", "Nur telefonisch", "Beim Vermieter"], "Briefkasten oder online"],
      ],
      keywords: ["freitag", "eingangszone", "schulung", "termine", "unterlagen", "briefkasten", "online"],
    },
    {
      title: "Brief vom Energieanbieter",
      text: "Sehr geehrte Kundin, Ihr Abschlag wird ab September angepasst, weil der Verbrauch im letzten Jahr höher war. Sie können den neuen Betrag im Kundenportal prüfen. Wenn Sie Fragen haben, erreichen Sie unseren Service montags bis freitags von 8 bis 18 Uhr.",
      questions: [
        ["Warum wird der Abschlag angepasst?", ["Wegen höherem Verbrauch", "Wegen Umzug", "Wegen Urlaub"], "Wegen höherem Verbrauch"],
        ["Wo kann man den Betrag prüfen?", ["Im Kundenportal", "Im Rathaus", "In der Apotheke"], "Im Kundenportal"],
        ["Wann ist der Service erreichbar?", ["Montag bis Freitag", "Nur Sonntag", "Jeden Abend bis Mitternacht"], "Montag bis Freitag"],
      ],
      keywords: ["kundin", "abschlag", "september", "verbrauch", "kundenportal", "service"],
    },
    {
      title: "Nachricht der Arztpraxis",
      text: "Guten Tag, Ihre Blutwerte sind angekommen. Die Ärztin möchte die Ergebnisse persönlich mit Ihnen besprechen. Bitte rufen Sie uns heute bis 16 Uhr an, damit wir einen Termin für die nächste Woche vereinbaren können.",
      questions: [
        ["Was soll die Person tun?", ["In der Praxis anrufen", "Medikamente kaufen", "Zur Bank gehen"], "In der Praxis anrufen"],
        ["Warum soll sie anrufen?", ["Wegen eines Besprechungstermins", "Wegen einer Bewerbung", "Wegen einer Reise"], "Wegen eines Besprechungstermins"],
        ["Bis wann soll sie anrufen?", ["Bis 16 Uhr", "Bis 20 Uhr", "Erst nächste Woche"], "Bis 16 Uhr"],
      ],
      keywords: ["arztpraxis", "blutwerte", "ärztin", "ergebnisse", "anrufen", "termin"],
    },
  ];

  const listeningPractice = [
    {
      title: "Ansage im Bürgeramt",
      audio: "Willkommen im Bürgeramt. Wegen einer technischen Störung können heute keine Personalausweise ausgegeben werden. Bereits vereinbarte Beratungstermine finden statt. Für neue Termine nutzen Sie bitte unser Online-Portal.",
      questions: [
        ["Was ist heute nicht möglich?", ["Personalausweise ausgeben", "Beratungstermine besuchen", "Online Termine buchen"], "Personalausweise ausgeben"],
        ["Welche Termine finden statt?", ["Vereinbarte Beratungstermine", "Alle neuen Termine", "Keine Termine"], "Vereinbarte Beratungstermine"],
        ["Wie bekommt man neue Termine?", ["Über das Online-Portal", "Nur per Brief", "Am Bahnhof"], "Über das Online-Portal"],
      ],
    },
    {
      title: "Radiomeldung Verkehr",
      audio: "Auf der A5 Richtung Süden gibt es nach einem Unfall acht Kilometer Stau. Bitte fahren Sie besonders vorsichtig. Wer zum Flughafen möchte, sollte die S-Bahn nutzen, denn die Parkplätze am Terminal sind heute fast voll.",
      questions: [
        ["Was ist auf der A5 passiert?", ["Ein Unfall", "Ein Streik", "Ein Konzert"], "Ein Unfall"],
        ["Was wird für den Weg zum Flughafen empfohlen?", ["Die S-Bahn", "Das Fahrrad", "Ein Taxi vom Rathaus"], "Die S-Bahn"],
        ["Warum soll man nicht mit dem Auto fahren?", ["Die Parkplätze sind fast voll", "Die Straße ist gesperrt für immer", "Es gibt kostenloses Benzin"], "Die Parkplätze sind fast voll"],
      ],
    },
    {
      title: "Telefonansage einer Praxis",
      audio: "Sie sind mit der Praxis Dr. Weber verbunden. Am Mittwoch bleibt die Praxis wegen Fortbildung geschlossen. In dringenden Fällen wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst unter 116 117.",
      questions: [
        ["Wann ist die Praxis geschlossen?", ["Am Mittwoch", "Am Montag", "Am Samstag"], "Am Mittwoch"],
        ["Warum ist die Praxis geschlossen?", ["Wegen Fortbildung", "Wegen Renovierung", "Wegen Urlaub aller Patienten"], "Wegen Fortbildung"],
        ["Wohin soll man sich in dringenden Fällen wenden?", ["An den Bereitschaftsdienst", "An den Vermieter", "An die Schule"], "An den Bereitschaftsdienst"],
      ],
    },
    {
      title: "Nachricht im Deutschkurs",
      audio: "Liebe Teilnehmerinnen und Teilnehmer, morgen beginnt der Unterricht erst um zehn Uhr. Ihre Lehrerin ist vorher in einer Besprechung. Bitte bringen Sie das Arbeitsblatt zum Thema Wohnen mit.",
      questions: [
        ["Wann beginnt der Unterricht?", ["Um zehn Uhr", "Um acht Uhr", "Um zwölf Uhr"], "Um zehn Uhr"],
        ["Warum beginnt er später?", ["Die Lehrerin hat eine Besprechung", "Der Raum ist kaputt", "Die Prüfung fällt aus"], "Die Lehrerin hat eine Besprechung"],
        ["Was sollen die Teilnehmenden mitbringen?", ["Das Arbeitsblatt", "Eine Geburtsurkunde", "Ein Geschenk"], "Das Arbeitsblatt"],
      ],
    },
    {
      title: "Ansage im Supermarkt",
      audio: "Liebe Kundinnen und Kunden, an Kasse drei können Sie heute nur mit Karte bezahlen. Wenn Sie bar zahlen möchten, nutzen Sie bitte Kasse eins oder zwei. Vielen Dank für Ihr Verständnis.",
      questions: [
        ["Was gilt an Kasse drei?", ["Nur Kartenzahlung", "Nur Barzahlung", "Nur Rückgabe"], "Nur Kartenzahlung"],
        ["Wo kann man bar bezahlen?", ["An Kasse eins oder zwei", "Am Ausgang", "Im Lager"], "An Kasse eins oder zwei"],
        ["An wen richtet sich die Ansage?", ["An Kundinnen und Kunden", "An Ärztinnen", "An Schülerinnen"], "An Kundinnen und Kunden"],
      ],
    },
    {
      title: "Schulnachricht",
      audio: "Guten Morgen, hier ist die Grundschule Nord. Der Elternabend für Klasse 3b findet nicht heute, sondern nächste Woche Dienstag um 19 Uhr statt. Bitte bestätigen Sie kurz per E-Mail, ob Sie kommen können.",
      questions: [
        ["Wann findet der Elternabend statt?", ["Nächsten Dienstag um 19 Uhr", "Heute um 19 Uhr", "Morgen früh"], "Nächsten Dienstag um 19 Uhr"],
        ["Was sollen Eltern tun?", ["Per E-Mail bestätigen", "Geld überweisen", "Die Klasse putzen"], "Per E-Mail bestätigen"],
        ["Für welche Klasse ist die Nachricht?", ["Klasse 3b", "Klasse 1a", "Alle Abschlussklassen"], "Klasse 3b"],
      ],
    },
  ];

  const dialoguePractice = [
    {
      title: "In der Bank: Konto und Karte",
      lines: [
        "Guten Tag, ich habe einen Termin wegen meines Girokontos.",
        "Guten Tag. Haben Sie Ihren Ausweis dabei?",
        "Ja, hier ist mein Ausweis. Außerdem funktioniert meine Bankkarte nicht.",
        "Ich sehe nach. Die Karte wurde aus Sicherheitsgründen gesperrt.",
        "Was muss ich jetzt machen?",
        "Ich bestelle Ihnen eine neue Karte. Sie bekommen sie in etwa fünf Werktagen.",
        "Kann ich bis dahin Geld abheben?",
        "Ja, mit Ihrem Ausweis können Sie am Schalter Geld abheben.",
      ],
      questions: [
        ["Warum ist die Kundin in der Bank?", ["Wegen Konto und Karte", "Wegen einer Wohnung", "Wegen eines Arzttermins"], "Wegen Konto und Karte"],
        ["Was bekommt sie?", ["Eine neue Karte", "Einen Mietvertrag", "Eine Fahrkarte"], "Eine neue Karte"],
        ["Wie kann sie vorher Geld bekommen?", ["Am Schalter mit Ausweis", "Nur online", "Gar nicht"], "Am Schalter mit Ausweis"],
      ],
    },
    {
      title: "Beim Vermieter: Heizung kaputt",
      lines: [
        "Guten Abend, hier spricht Yilmaz aus der dritten Etage.",
        "Guten Abend, worum geht es?",
        "Unsere Heizung funktioniert seit gestern nicht mehr.",
        "Haben Sie schon geprüft, ob die Sicherung eingeschaltet ist?",
        "Ja, das habe ich geprüft. Das Problem ist nur im Wohnzimmer.",
        "Dann schicke ich morgen Vormittag den Hausmeister vorbei.",
        "Das passt. Können Sie mir bitte ungefähr sagen, wann er kommt?",
        "Zwischen neun und elf Uhr. Ich gebe ihm Ihre Telefonnummer.",
      ],
      questions: [
        ["Was ist kaputt?", ["Die Heizung", "Der Aufzug", "Das Fenster"], "Die Heizung"],
        ["Wer soll kommen?", ["Der Hausmeister", "Die Lehrerin", "Der Bäcker"], "Der Hausmeister"],
        ["Wann soll er kommen?", ["Zwischen neun und elf Uhr", "Heute Abend um acht", "Erst nächste Woche"], "Zwischen neun und elf Uhr"],
      ],
    },
    {
      title: "In der Bäckerei: Bestellung",
      lines: [
        "Guten Morgen, ich möchte bitte sechs Brötchen und ein Vollkornbrot.",
        "Gerne. Soll das Brot geschnitten werden?",
        "Ja, bitte. Haben Sie auch etwas ohne Zucker?",
        "Wir haben heute Dinkelstangen ohne Zuckerzusatz.",
        "Dann nehme ich zwei davon. Was kostet alles zusammen?",
        "Das macht 9 Euro 80.",
        "Kann ich mit Karte bezahlen?",
        "Ja, natürlich. Bitte halten Sie die Karte an das Gerät.",
      ],
      questions: [
        ["Was kauft die Person?", ["Brot, Brötchen und Dinkelstangen", "Medikamente", "Fahrkarten"], "Brot, Brötchen und Dinkelstangen"],
        ["Was fragt sie zusätzlich?", ["Ob es etwas ohne Zucker gibt", "Ob die Praxis geöffnet ist", "Ob der Zug kommt"], "Ob es etwas ohne Zucker gibt"],
        ["Wie möchte sie bezahlen?", ["Mit Karte", "Mit einem Gutschein", "Per Rechnung"], "Mit Karte"],
      ],
    },
    {
      title: "Im Jobcenter: Unterlagen",
      lines: [
        "Guten Tag, ich habe einen Brief bekommen und verstehe nicht alles.",
        "Zeigen Sie mir bitte den Brief. Es geht um Ihre fehlenden Unterlagen.",
        "Welche Unterlagen fehlen denn?",
        "Wir brauchen die Lohnabrechnung vom Mai und den Mietvertrag.",
        "Kann ich die Dokumente online hochladen?",
        "Ja, oder Sie geben Kopien am Empfang ab.",
        "Bis wann muss ich das erledigen?",
        "Bitte spätestens bis zum 30. dieses Monats.",
      ],
      questions: [
        ["Was fehlt?", ["Lohnabrechnung und Mietvertrag", "Geburtsurkunde und Foto", "Führerschein"], "Lohnabrechnung und Mietvertrag"],
        ["Wie kann man die Dokumente abgeben?", ["Online oder am Empfang", "Nur in der Schule", "Nur beim Arzt"], "Online oder am Empfang"],
        ["Bis wann?", ["Bis zum 30. dieses Monats", "Erst nächstes Jahr", "Sofort innerhalb einer Minute"], "Bis zum 30. dieses Monats"],
      ],
    },
    {
      title: "In der Apotheke: Medikament",
      lines: [
        "Guten Tag, ich habe ein Rezept von meiner Ärztin.",
        "Einen Moment bitte. Das Medikament ist leider nicht vorrätig.",
        "Kann ich es trotzdem heute bekommen?",
        "Wir können es bestellen. Es ist morgen ab 11 Uhr da.",
        "Muss ich etwas dazu bezahlen?",
        "Ja, die Zuzahlung beträgt fünf Euro.",
        "Dann komme ich morgen wieder.",
        "Gerne. Bringen Sie bitte diesen Abholschein mit.",
      ],
      questions: [
        ["Was hat die Person dabei?", ["Ein Rezept", "Einen Mietvertrag", "Eine Fahrkarte"], "Ein Rezept"],
        ["Wann ist das Medikament da?", ["Morgen ab 11 Uhr", "Heute sofort", "In zwei Wochen"], "Morgen ab 11 Uhr"],
        ["Was soll sie mitbringen?", ["Den Abholschein", "Ein Geschenk", "Eine Brotdose"], "Den Abholschein"],
      ],
    },
    {
      title: "In der Schule: Gespräch mit dem Lehrer",
      lines: [
        "Guten Tag, ich wollte wegen des Ausflugs nächste Woche sprechen.",
        "Guten Tag. Was möchten Sie wissen?",
        "Mein Sohn hat eine Allergie. Kann er trotzdem mitfahren?",
        "Ja, bitte geben Sie uns die Informationen schriftlich.",
        "Soll ich auch Medikamente mitgeben?",
        "Nur wenn der Arzt das empfiehlt. Wir bewahren sie sicher auf.",
        "Vielen Dank. Ich schreibe Ihnen heute noch eine E-Mail.",
        "Sehr gut. Dann können wir alles rechtzeitig planen.",
      ],
      questions: [
        ["Worüber sprechen sie?", ["Über einen Ausflug und eine Allergie", "Über eine Wohnung", "Über einen Banktermin"], "Über einen Ausflug und eine Allergie"],
        ["Was soll schriftlich gegeben werden?", ["Informationen zur Allergie", "Eine Kündigung", "Eine Rechnung"], "Informationen zur Allergie"],
        ["Was macht der Elternteil später?", ["Eine E-Mail schreiben", "Eine Reise buchen", "Die Klasse streichen"], "Eine E-Mail schreiben"],
      ],
    },
  ];

  const grammarTopics = [
    {
      title: "Artikel und Fälle",
      de: "Im Deutschen verändern sich Artikel nach Geschlecht, Zahl und Fall. Nach vielen Verben steht Akkusativ: Ich sehe den Mann. Nach anderen Verben oder Präpositionen steht Dativ: Ich helfe dem Mann.",
      tr: "Almancada artikeller cinsiyete, çoğula ve hâle göre değişir. Bazı fiillerden sonra Akkusativ gelir: Ich sehe den Mann. Bazı fiillerden veya edatlardan sonra Dativ gelir: Ich helfe dem Mann.",
    },
    {
      title: "Satzbau",
      de: "Im Hauptsatz steht das konjugierte Verb meistens auf Position 2. Bei weil, dass, wenn, obwohl steht das konjugierte Verb am Ende des Nebensatzes.",
      tr: "Ana cümlede çekimli fiil genellikle ikinci sıradadır. weil, dass, wenn, obwohl gibi yan cümlelerde çekimli fiil cümlenin sonunda olur.",
    },
    {
      title: "Zeiten",
      de: "Im Alltag nutzt man oft Perfekt: Ich habe gearbeitet. Für Berichte und offizielle Texte kommt auch Präteritum vor: Ich war krank. Wichtig ist, logisch zu erzählen.",
      tr: "Günlük konuşmada sıkça Perfekt kullanılır: Ich habe gearbeitet. Resmi metinlerde veya anlatılarda Präteritum da görülür: Ich war krank. Önemli olan mantıklı anlatmaktır.",
    },
    {
      title: "Verben mit Präposition",
      de: "Viele Verben brauchen feste Präpositionen: warten auf, sprechen mit, sich kümmern um, teilnehmen an. Diese Verbindung muss man zusammen lernen.",
      tr: "Birçok fiil sabit edatlarla kullanılır: warten auf, sprechen mit, sich kümmern um, teilnehmen an. Bunları birlikte öğrenmek gerekir.",
    },
    {
      title: "Schreiben B1",
      de: "Ein guter Brief hat Anrede, Grund, alle Inhaltspunkte, klare Bitten oder Fragen und einen passenden Gruß. Die Sätze müssen nicht sehr schwer sein, aber vollständig und höflich.",
      tr: "İyi bir mektupta hitap, yazma nedeni, tüm içerik maddeleri, açık rica veya sorular ve uygun kapanış olur. Cümleler çok zor olmak zorunda değildir, ama tam ve kibar olmalıdır.",
    },
  ];

  const grammarTemplates = [
    { prompt: "Morgen ___ ich beim Bürgeramt einen Termin. (haben)", options: ["habe", "hat", "haben"], answer: "habe", tr: "Yarın belediyede randevum var." },
    { prompt: "Die Kundin fragt, ___ sie mit Karte bezahlen kann.", options: ["ob", "weil", "wenn"], answer: "ob", tr: "Müşteri kartla ödeme yapıp yapamayacağını soruyor." },
    { prompt: "Ich warte seit zehn Minuten ___ den Bus.", options: ["auf", "mit", "für"], answer: "auf", tr: "Otobüsü on dakikadır bekliyorum." },
    { prompt: "Der Hausmeister hilft ___ neuen Mieterin.", options: ["der", "die", "das"], answer: "der", tr: "Kapıcı yeni kiracıya yardım ediyor." },
    { prompt: "Bitte bringen Sie ___ Mietvertrag zur Beratung mit.", options: ["den", "dem", "der"], answer: "den", tr: "Lütfen danışmaya kira sözleşmesini getirin." },
    { prompt: "Ich konnte gestern nicht kommen, ___ mein Kind krank war.", options: ["weil", "denn", "oder"], answer: "weil", tr: "Dün gelemedim çünkü çocuğum hastaydı." },
    { prompt: "Nach dem Kurs ___ wir gemeinsam die Hausaufgaben gemacht. (haben)", options: ["haben", "sind", "hat"], answer: "haben", tr: "Kurstan sonra birlikte ödev yaptık." },
    { prompt: "Der Termin findet ___ nächsten Dienstag statt.", options: ["am", "im", "um"], answer: "am", tr: "Randevu gelecek salı gerçekleşiyor." },
    { prompt: "Bitte sagen Sie mir, ___ die Unterlagen vollständig sind.", options: ["ob", "denn", "aber"], answer: "ob", tr: "Lütfen belgelerin tam olup olmadığını söyleyin." },
    { prompt: "Wir müssen die Dokumente bis Freitag ___. (abgeben)", options: ["abgeben", "geben ab", "abgegeben"], answer: "abgeben", tr: "Belgeleri cumaya kadar teslim etmeliyiz." },
    { prompt: "Wenn der Zug Verspätung hat, ___ ich Sie an.", options: ["rufe", "anrufe", "rufen"], answer: "rufe", tr: "Tren gecikirse sizi ararım." },
    { prompt: "Ich interessiere mich ___ einen Deutschkurs am Abend.", options: ["für", "an", "bei"], answer: "für", tr: "Akşam Almanca kursuyla ilgileniyorum." },
    { prompt: "Die Ärztin hat gesagt, dass ich mehr Wasser ___ soll. (trinken)", options: ["trinken", "trinke", "getrunken"], answer: "trinken", tr: "Doktor daha çok su içmem gerektiğini söyledi." },
    { prompt: "Im Rathaus suche ich ___ Informationen über Wohngeld.", options: ["nach", "mit", "aus"], answer: "nach", tr: "Belediyede kira yardımı hakkında bilgi arıyorum." },
    { prompt: "Könnten Sie mir bitte sagen, ___ der Kurs kostet?", options: ["was", "wie viel", "wo"], answer: "wie viel", tr: "Kursun ne kadar tuttuğunu söyleyebilir misiniz?" },
    { prompt: "Der Brief wurde ___ die Hausverwaltung geschickt.", options: ["an", "auf", "um"], answer: "an", tr: "Mektup apartman yönetimine gönderildi." },
    { prompt: "Ich habe den Antrag gestern online ___. (ausfüllen)", options: ["ausgefüllt", "ausfüllen", "fülle aus"], answer: "ausgefüllt", tr: "Başvuruyu dün online doldurdum." },
    { prompt: "Trotz der Verspätung ___ der Termin noch statt.", options: ["findet", "hat", "geht"], answer: "findet", tr: "Gecikmeye rağmen randevu yine de gerçekleşiyor." },
    { prompt: "Wir sprechen heute ___ unsere Erfahrungen in Deutschland.", options: ["über", "von", "nach"], answer: "über", tr: "Bugün Almanya'daki deneyimlerimiz hakkında konuşuyoruz." },
    { prompt: "Die Kinder dürfen im Park spielen, ___ ein Erwachsener dabei ist.", options: ["wenn", "obwohl", "denn"], answer: "wenn", tr: "Bir yetişkin yanlarındaysa çocuklar parkta oynayabilir." },
  ];

  const smartGrammarTasks = Array.from({ length: 420 }, (_, index) => {
    const base = pick(grammarTemplates, index);
    return {
      ...base,
      id: `grammar-${index + 1}`,
      title: `Übung ${index + 1}`,
      prompt: base.prompt,
      explanation: "Achten Sie auf die Bedeutung des Satzes, die Stellung des Verbs und die passende Ergänzung.",
    };
  });

  const practiceFocusBlocks = [
    {
      title: "Satzbau und Reihenfolge",
      subtitle: "Wählen Sie den Satz, der in einer B1-Prüfung natürlich und richtig klingt.",
      tasks: [
        {
          prompt: "Sie berichten von einem Termin. Welche Reihenfolge ist richtig?",
          options: ["Morgen muss ich zum Jobcenter gehen.", "Muss ich morgen zum Jobcenter gehen.", "Ich morgen muss zum Jobcenter gehen."],
          answer: "Morgen muss ich zum Jobcenter gehen.",
          tr: "Yarın Jobcenter'a gitmem gerekiyor.",
        },
        {
          prompt: "Der Satz beginnt mit einer Zeitangabe. Welche Lösung passt?",
          options: ["Am Samstag besucht meine Schwester uns.", "Am Samstag meine Schwester besucht uns.", "Meine Schwester uns besucht am Samstag."],
          answer: "Am Samstag besucht meine Schwester uns.",
          tr: "Cumartesi günü kız kardeşim bizi ziyaret ediyor.",
        },
        {
          prompt: "Welche Nebensatzform ist richtig?",
          options: ["Ich bleibe zu Hause, weil mein Sohn krank ist.", "Ich bleibe zu Hause, weil ist mein Sohn krank.", "Ich bleibe zu Hause, mein Sohn weil krank ist."],
          answer: "Ich bleibe zu Hause, weil mein Sohn krank ist.",
          tr: "Oğlum hasta olduğu için evde kalıyorum.",
        },
        {
          prompt: "Welche Frage ist höflich und richtig aufgebaut?",
          options: ["Könnten Sie mir bitte sagen, wann der Kurs beginnt?", "Könnten Sie bitte sagen mir, wann beginnt der Kurs?", "Sie könnten mir bitte sagen, wann beginnt der Kurs?"],
          answer: "Könnten Sie mir bitte sagen, wann der Kurs beginnt?",
          tr: "Kursun ne zaman başladığını bana söyleyebilir misiniz?",
        },
        {
          prompt: "Welche Reihenfolge passt zu einem offiziellen Brief?",
          options: ["Deshalb bitte ich Sie um einen neuen Termin.", "Ich bitte deshalb Sie um einen Termin neuen.", "Um einen neuen Termin ich Sie deshalb bitte."],
          answer: "Deshalb bitte ich Sie um einen neuen Termin.",
          tr: "Bu nedenle sizden yeni bir randevu rica ediyorum.",
        },
      ],
    },
    {
      title: "Verschiedene Zeiten",
      subtitle: "Entscheiden Sie aus dem Zusammenhang, welche Verbform in die Lücke gehört.",
      tasks: [
        {
          prompt: "Gestern ___ ich den Antrag online ausgefüllt. (haben)",
          options: ["habe", "hatte", "werde"],
          answer: "habe",
          tr: "Dün başvuruyu çevrim içi doldurdum.",
        },
        {
          prompt: "Nächste Woche ___ wir den Mietvertrag unterschreiben. (werden)",
          options: ["werden", "sind", "haben"],
          answer: "werden",
          tr: "Gelecek hafta kira sözleşmesini imzalayacağız.",
        },
        {
          prompt: "Als ich in Deutschland angekommen bin, ___ ich noch wenig Deutsch. (sprechen)",
          options: ["sprach", "spreche", "gesprochen"],
          answer: "sprach",
          tr: "Almanya'ya geldiğimde çok az Almanca konuşuyordum.",
        },
        {
          prompt: "Seit sechs Monaten ___ Leyla einen Integrationskurs. (besuchen)",
          options: ["besucht", "besuchte", "hat besucht"],
          answer: "besucht",
          tr: "Leyla altı aydır entegrasyon kursuna gidiyor.",
        },
        {
          prompt: "Bevor ich zur Arbeit gegangen bin, ___ ich mein Kind in die Kita gebracht. (haben)",
          options: ["habe", "bin", "werde"],
          answer: "habe",
          tr: "İşe gitmeden önce çocuğumu kreşe götürdüm.",
        },
      ],
    },
    {
      title: "Adjektive und Endungen",
      subtitle: "Achten Sie auf Artikel, Fall und Endung. Die Sätze sind aus Alltag und Prüfungssituationen.",
      tasks: [
        {
          prompt: "Ich suche eine ___ Wohnung in der Nähe der Schule.",
          options: ["kleine", "kleiner", "kleinen"],
          answer: "kleine",
          tr: "Okulun yakınında küçük bir daire arıyorum.",
        },
        {
          prompt: "Bitte bringen Sie den ___ Ausweis mit.",
          options: ["gültigen", "gültige", "gültiger"],
          answer: "gültigen",
          tr: "Lütfen geçerli kimliği yanınızda getirin.",
        },
        {
          prompt: "Mit einem ___ Formular geht die Anmeldung schneller.",
          options: ["vollständigen", "vollständige", "vollständiges"],
          answer: "vollständigen",
          tr: "Eksiksiz bir formla kayıt daha hızlı olur.",
        },
        {
          prompt: "Wir haben gestern ein ___ Gespräch mit der Lehrerin geführt.",
          options: ["wichtiges", "wichtige", "wichtigen"],
          answer: "wichtiges",
          tr: "Dün öğretmenle önemli bir görüşme yaptık.",
        },
        {
          prompt: "Die ___ Nachbarin hilft manchmal beim Übersetzen.",
          options: ["nette", "netten", "netter"],
          answer: "nette",
          tr: "Nazik komşu bazen çeviride yardım ediyor.",
        },
      ],
    },
    {
      title: "Dativ und Akkusativ",
      subtitle: "Lesen Sie genau: Wer bekommt etwas? Wohin geht die Bewegung? Wo ist etwas?",
      tasks: [
        {
          prompt: "Der Mitarbeiter erklärt ___ Kundin den Antrag.",
          options: ["der", "die", "den"],
          answer: "der",
          tr: "Çalışan, müşteriye başvuruyu açıklıyor.",
        },
        {
          prompt: "Ich lege den Brief auf ___ Tisch.",
          options: ["den", "dem", "der"],
          answer: "den",
          tr: "Mektubu masanın üstüne koyuyorum.",
        },
        {
          prompt: "Der Brief liegt auf ___ Tisch.",
          options: ["dem", "den", "die"],
          answer: "dem",
          tr: "Mektup masanın üstünde duruyor.",
        },
        {
          prompt: "Die Ärztin gibt ___ Patienten ein Rezept.",
          options: ["dem", "den", "der"],
          answer: "dem",
          tr: "Doktor hastaya reçete veriyor.",
        },
        {
          prompt: "Wir besuchen morgen ___ neuen Nachbarn.",
          options: ["den", "dem", "der"],
          answer: "den",
          tr: "Yarın yeni komşuyu ziyaret ediyoruz.",
        },
      ],
    },
    {
      title: "Artikel, Präpositionen und Verbindungen",
      subtitle: "Diese Formen kommen oft in Briefen, Dialogen, Lesen und Hören vor.",
      tasks: [
        {
          prompt: "Ich interessiere mich ___ den Abendkurs an der VHS.",
          options: ["für", "mit", "bei"],
          answer: "für",
          tr: "Halk eğitim merkezindeki akşam kursuyla ilgileniyorum.",
        },
        {
          prompt: "Bitte schicken Sie die Unterlagen ___ die Ausländerbehörde.",
          options: ["an", "auf", "bei"],
          answer: "an",
          tr: "Lütfen belgeleri yabancılar dairesine gönderin.",
        },
        {
          prompt: "Wir sprechen heute ___ unsere Erfahrungen im Beruf.",
          options: ["über", "nach", "bei"],
          answer: "über",
          tr: "Bugün iş hayatındaki deneyimlerimiz hakkında konuşuyoruz.",
        },
        {
          prompt: "Die Familie wartet ___ einen Termin beim Kinderarzt.",
          options: ["auf", "um", "mit"],
          answer: "auf",
          tr: "Aile çocuk doktorundan randevu bekliyor.",
        },
        {
          prompt: "Ich nehme ___ einem Computerkurs teil.",
          options: ["an", "auf", "für"],
          answer: "an",
          tr: "Bir bilgisayar kursuna katılıyorum.",
        },
      ],
    },
  ];

  const letterTasks = [
    {
      title: "E-Mail an den Vermieter",
      situation: "Die Heizung in Ihrer Wohnung funktioniert seit drei Tagen nicht. Schreiben Sie an Ihren Vermieter.",
      points: ["Grund für Ihr Schreiben", "Seit wann das Problem besteht", "Was Sie bereits versucht haben", "Bitte um schnellen Termin"],
    },
    {
      title: "E-Mail an das Jobcenter",
      situation: "Sie haben einen Brief bekommen, verstehen aber nicht, welche Unterlagen fehlen. Schreiben Sie an Ihre Sachbearbeiterin.",
      points: ["Warum Sie schreiben", "Welche Stelle im Brief unklar ist", "Bitte um Erklärung", "Vorschlag für einen Termin"],
    },
    {
      title: "Nachricht an die Schule",
      situation: "Ihr Kind kann morgen nicht am Ausflug teilnehmen, weil es krank ist. Schreiben Sie an den Lehrer.",
      points: ["Grund für Ihr Schreiben", "Warum Ihr Kind nicht kommen kann", "Frage zu verpassten Informationen", "Bitte um Rückmeldung"],
    },
    {
      title: "E-Mail an einen Arbeitgeber",
      situation: "Sie haben eine Einladung zum Vorstellungsgespräch, aber der Termin passt nicht. Schreiben Sie höflich zurück.",
      points: ["Dank für die Einladung", "Warum der Termin nicht passt", "Alternativen vorschlagen", "Interesse an der Stelle zeigen"],
    },
    {
      title: "Beschwerde an ein Hotel",
      situation: "Im Hotel war das Zimmer laut und nicht sauber. Schreiben Sie eine Beschwerde.",
      points: ["Wann Sie dort waren", "Welche Probleme es gab", "Wie Sie reagiert haben", "Was Sie jetzt möchten"],
    },
  ];

  const examListeningPool = [
    ["Sie hören eine Ansage im Rathaus.", "Was soll man bei verlorenen Dokumenten tun?", ["Zum Bürgeramt gehen", "Zum Sportverein gehen", "Einen Kuchen backen"], "Zum Bürgeramt gehen", "Wenn Sie Ihren Ausweis verloren haben, melden Sie sich bitte zuerst im Bürgeramt im Erdgeschoss. Dort bekommen Sie weitere Informationen."],
    ["Sie hören eine Nachricht der Schule.", "Was sollen Eltern mitbringen?", ["Den unterschriebenen Zettel", "Eine neue Fahrkarte", "Ein Geschenk"], "Den unterschriebenen Zettel", "Bitte geben Sie Ihrem Kind morgen den unterschriebenen Zettel für den Wandertag mit. Ohne Unterschrift kann Ihr Kind nicht teilnehmen."],
    ["Sie hören eine Verkehrsmeldung.", "Was sollen Autofahrer tun?", ["Eine Umleitung nutzen", "Am Flughafen warten", "Die Polizei anrufen"], "Eine Umleitung nutzen", "Auf der B9 ist die rechte Spur gesperrt. Bitte nutzen Sie die ausgeschilderte Umleitung über die Innenstadt."],
    ["Sie hören eine Ansage im Supermarkt.", "Was ist heute günstiger?", ["Frisches Obst", "Fahrkarten", "Winterjacken"], "Frisches Obst", "Heute erhalten Sie in unserer Obstabteilung zwanzig Prozent Rabatt auf Äpfel, Birnen und Trauben."],
    ["Sie hören eine Praxisansage.", "Was sollen Patienten ohne Termin tun?", ["Vorher anrufen", "Direkt kommen", "Zum Jobcenter gehen"], "Vorher anrufen", "Patientinnen und Patienten ohne Termin bitten wir, zuerst telefonisch Kontakt aufzunehmen. So vermeiden wir lange Wartezeiten."],
    ["Sie hören eine Nachricht vom Vermieter.", "Was wird repariert?", ["Der Aufzug", "Der Kühlschrank", "Die Kaffeemaschine"], "Der Aufzug", "Am Montag wird der Aufzug gewartet. Zwischen 8 und 12 Uhr kann er deshalb nicht benutzt werden."],
    ["Sie hören eine Radiomeldung.", "Worum geht es?", ["Um das Wetter", "Um eine Hochzeit", "Um einen Mietvertrag"], "Um das Wetter", "Am Wochenende wird es deutlich kühler. In höheren Lagen kann es am Sonntag sogar schneien."],
    ["Sie hören eine Nachricht einer Freundin.", "Warum ruft sie an?", ["Sie möchte den Termin verschieben", "Sie hat eine Wohnung gekauft", "Sie braucht einen Pass"], "Sie möchte den Termin verschieben", "Hallo, ich schaffe es heute leider nicht um fünf. Können wir uns vielleicht um halb sieben treffen?"],
    ["Sie hören eine Meldung im Zug.", "Was müssen Reisende tun?", ["In einen anderen Zug umsteigen", "Im Zug sitzen bleiben", "Eine neue Wohnung suchen"], "In einen anderen Zug umsteigen", "Wegen einer Störung endet dieser Zug heute in Neustadt. Reisende nach Bonn steigen bitte auf Gleis 4 um."],
    ["Sie hören eine Ansage in der Bibliothek.", "Was ist neu?", ["Längere Öffnungszeiten am Samstag", "Keine Bücher mehr", "Nur Eintritt mit Ausweis"], "Längere Öffnungszeiten am Samstag", "Ab nächster Woche ist die Bibliothek samstags bis 16 Uhr geöffnet. Die Rückgabe ist auch außerhalb der Öffnungszeiten möglich."],
  ];

  const examReadingPool = [
    ["Rathaus - Wegweiser", "Sie brauchen eine Meldebescheinigung. Wohin gehen Sie?", ["Bürgeramt", "Umweltamt", "Sporthalle"], "Bürgeramt", "Bürgeramt: Meldebescheinigungen, Ausweise, Beglaubigungen. Umweltamt: Abfall und Sperrmüll."],
    ["Anzeige", "Sie möchten am Wochenende nebenbei arbeiten. Welche Anzeige passt?", ["Aushilfe im Café samstags gesucht", "Mathekurs am Mittwoch", "Wohnung im dritten Stock"], "Aushilfe im Café samstags gesucht", "Café am Markt sucht freundliche Aushilfe für Samstag und Sonntag von 10 bis 15 Uhr."],
    ["E-Mail", "Warum schreibt Frau Demir?", ["Sie bestätigt einen Termin", "Sie kündigt eine Wohnung", "Sie verkauft ein Auto"], "Sie bestätigt einen Termin", "Sehr geehrte Damen und Herren, vielen Dank für Ihren Vorschlag. Den Termin am 14. Mai um 10 Uhr bestätige ich gern."],
    ["Information", "Was gilt für die Mittagsbetreuung?", ["Sie findet nur an Schultagen statt", "Sie ist jeden Sonntag offen", "Sie ersetzt den Unterricht"], "Sie findet nur an Schultagen statt", "Die Betreuung findet während der Schulzeit von Montag bis Freitag statt. In den Ferien bleibt sie geschlossen."],
    ["Brief", "Was möchte der Kunde?", ["Eine Erstattung", "Eine Einladung", "Eine Beratung zur Ausbildung"], "Eine Erstattung", "Leider entsprach das Zimmer nicht der Beschreibung. Deshalb bitte ich um Erstattung eines Teils des Preises."],
    ["Aushang", "Was sollen Bewohner tun?", ["Den Keller bis Freitag räumen", "Neue Möbel kaufen", "Die Schule anrufen"], "Den Keller bis Freitag räumen", "Wegen Brandschutz müssen alle privaten Gegenstände bis Freitag aus dem Kellerflur entfernt werden."],
    ["Kursprogramm", "Wer kann teilnehmen?", ["Erwachsene mit A2-Kenntnissen", "Nur Kinder unter 10", "Nur Personen mit Führerschein"], "Erwachsene mit A2-Kenntnissen", "Der B1-Vorbereitungskurs richtet sich an Erwachsene, die bereits A2 abgeschlossen haben."],
    ["Nachricht", "Was soll Herr Kaya mitbringen?", ["Seine Unterlagen", "Ein Geschenk", "Einen Kuchen"], "Seine Unterlagen", "Bitte bringen Sie zum Beratungstermin Ihren Pass, den Mietvertrag und die letzten Lohnabrechnungen mit."],
    ["Lückentext", "Welche Lösung passt?", ["weil", "trotzdem", "oder"], "weil", "Ich kann heute nicht zum Kurs kommen, ___ mein Kind krank ist."],
    ["Mietshaus", "Was ist das Problem?", ["Die Mülltonnen sind überfüllt", "Der Kurs beginnt später", "Die Bankkarte funktioniert"], "Die Mülltonnen sind überfüllt", "Bitte stellen Sie keinen weiteren Müll neben die Tonnen. Die Tonnen werden erst am Donnerstag geleert."],
  ];

  const examDialogPool = dialoguePractice.flatMap((dialogue) => dialogue.questions.map((question, index) => ({
    title: dialogue.title,
    prompt: question[0],
    options: question[1],
    answer: question[2],
    context: dialogue.lines.slice(Math.max(0, index * 2), Math.max(4, index * 2 + 4)).join(" "),
  })));

  const examWritePool = [
    ["Schreiben Aufgabe A", "Sie möchten einen Erste-Hilfe-Kurs machen und haben Fragen. Schreiben Sie eine E-Mail an das Weiterbildungszentrum.", ["Warum Sie den Kurs machen möchten", "Ihre bisherigen Erfahrungen", "Dauer und Termine", "Kosten"]],
    ["Schreiben Aufgabe B", "Im Mietshaus wird das Treppenhaus nicht geputzt. Schreiben Sie an Ihren Vermieter.", ["Grund für Ihr Schreiben", "Was Sie schon versucht haben", "Weitere Probleme im Haus", "Was der Vermieter tun soll"]],
    ["Schreiben Aufgabe A", "Sie möchten mit Ihrer Familie im Sommer in ein Hotel fahren. Schreiben Sie eine Anfrage.", ["Grund für Ihr Schreiben", "Wann und wie viele Personen", "Fragen zu Zimmern und Essen", "Bitte um Antwort"]],
    ["Schreiben Aufgabe B", "Sie können nicht zum Elternabend kommen. Schreiben Sie an die Lehrerin.", ["Grund für Ihr Schreiben", "Warum Sie nicht kommen können", "Fragen zum Ausflug", "Bitte um Rückmeldung"]],
    ["Schreiben Aufgabe A", "Sie haben im Internet einen gebrauchten Kinderwagen gekauft, aber er ist beschädigt angekommen. Schreiben Sie an den Verkäufer.", ["Was Sie gekauft haben", "Welches Problem es gibt", "Was Sie erwarten", "Frist für Antwort"]],
  ];

  const examPlanPool = [
    ["Gemeinsam einen Ausflug planen", ["Wohin fahren?", "Wann und wie lange?", "Was mitnehmen?", "Wer bezahlt was?", "Was tun bei schlechtem Wetter?"]],
    ["Eine Abschiedsfeier planen", ["Wann feiern?", "Wo feiern?", "Essen und Getränke?", "Wer wird eingeladen?", "Musik oder Spiele?"]],
    ["Nachbarschaftshilfe organisieren", ["Wer braucht Hilfe?", "Was muss erledigt werden?", "Wer übernimmt welche Aufgabe?", "Wann treffen?", "Wie informieren?"]],
    ["Einen Kursabschluss feiern", ["Ort", "Zeit", "Essen", "Einladung", "Kosten teilen"]],
    ["Eine Reise zu einer Freundin planen", ["Verkehrsmittel", "Übernachtung", "Geschenk", "Programm", "Kosten"]],
  ];

  function smartSpeak(text) {
    if (!("speechSynthesis" in window)) {
      showPlainModal("Hören", "Die Sprachausgabe ist in diesem Browser nicht verfügbar. Bitte nutzen Sie Chrome oder Edge.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  function smartRecord(targetId, label = "Aufnahme") {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const target = document.getElementById(targetId);
    if (!target) return;
    if (!Recognition) {
      showPlainModal(label, "Die Aufnahme ist in diesem Browser nicht verfügbar. Auf Android bitte Chrome verwenden. Sie können den gesprochenen Text auch eintippen.");
      return;
    }
    const recognition = new Recognition();
    recognition.lang = "de-DE";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      target.value = event.results[0][0].transcript;
      smartProgress.recordings += 1;
      saveSmartProgress();
    };
    recognition.onerror = () => showPlainModal(label, "Die Sprache wurde nicht sicher erkannt. Bitte langsam und deutlich sprechen und noch einmal versuchen.");
    recognition.start();
  }

  function showPlainModal(title, body) {
    if (typeof showModal === "function") {
      showModal(`<h3>${h(title)}</h3><p>${h(body)}</p>`);
    } else {
      alert(`${title}\n\n${body}`);
    }
  }

  function scoreSpeech(text, keywords = [], minWords = 25) {
    const normalized = clean(text);
    const words = normalized.split(" ").filter(Boolean);
    const hits = keywords.filter((word) => normalized.includes(clean(word)));
    const connectors = ["weil", "deshalb", "danach", "zuerst", "außerdem", "aber", "wenn", "dass", "obwohl"].filter((word) => normalized.includes(word));
    const sections = [
      normalized.includes("ich") || normalized.includes("meine") || normalized.includes("bei mir"),
      normalized.includes("heimat") || normalized.includes("türkei") || normalized.includes("land") || normalized.includes("früher"),
      normalized.includes("foto") || normalized.includes("bild") || normalized.includes("sehe") || normalized.includes("situation"),
    ].filter(Boolean).length;
    const score = clamp(Math.round((hits.length / Math.max(1, keywords.length)) * 45 + Math.min(25, words.length) + connectors.length * 5 + sections * 10), 0, 100);
    const tips = [];
    if (words.length < minWords) tips.push("Sprechen Sie etwas ausführlicher, mindestens drei bis fünf Sätze.");
    if (sections < 3) tips.push("Nennen Sie Bildbeschreibung, eigene Erfahrung und Vergleich mit dem Heimatland.");
    if (hits.length < Math.ceil(keywords.length / 3)) tips.push("Verwenden Sie mehr passende Details zum Foto oder Text.");
    if (!connectors.length) tips.push("Verbinden Sie Sätze mit weil, deshalb, danach, außerdem oder aber.");
    return { score, hits, tips };
  }

  function feedbackBox(result, title = "Auswertung") {
    return `
      <div class="smart-feedback ${result.score >= 70 ? "ok" : "warn"}">
        <strong>${h(title)}: ${result.score}%</strong>
        <p>Erkannte wichtige Wörter: ${result.hits.length ? h(result.hits.join(", ")) : "noch zu wenige"}</p>
        <p>${result.tips.length ? h(result.tips.join(" ")) : "Sehr gut. Die Aufgabe enthält die wichtigsten Punkte."}</p>
      </div>
    `;
  }

  function translationButton(text, id) {
    return `
      <button class="ghost small" type="button" data-toggle-translation="${h(id)}">Türkisch anzeigen</button>
      <p id="${h(id)}" class="translation hidden">${h(text)}</p>
    `;
  }

  function renderHero() {
    const focusPracticeCount = practiceFocusBlocks.reduce((sum, block) => sum + block.tasks.length, 0);
    const totalPractice = smartGrammarTasks.length + focusPracticeCount + smartPhotoTasks.length + readingPractice.length + listeningPractice.length + dialoguePractice.length + letterTasks.length + 30 * 100;
    return `
      <section class="hero-panel">
        <div>
          <p class="eyebrow">DTZ B1 und Integrationskurs</p>
          <h2>Deutsch lernen wie in der Prüfung, aber Schritt für Schritt.</h2>
          <p>Die App enthält prüfungsnahe Übungen zum Lesen, Hören, Schreiben und Sprechen. Fotos werden ohne Lösungstext gezeigt, damit Lernende selbst beschreiben, Erfahrungen erzählen und vergleichen.</p>
          <div class="actions">
            <button class="primary" type="button" data-go="exams">DTZ Prüfung starten</button>
            <button class="ghost" type="button" data-go="photos">Fotoübung öffnen</button>
          </div>
        </div>
        <div class="stat-grid">
          <div><strong>${totalPractice}+</strong><span>Aufgaben und Prüfungsteile</span></div>
          <div><strong>30</strong><span>DTZ-Prüfungen mit je 100 Aufgaben</span></div>
          <div><strong>20</strong><span>Fotoaufgaben mit Aufnahme</span></div>
          <div><strong>B1</strong><span>Grammatik, Wortschatz und Alltag</span></div>
        </div>
      </section>
    `;
  }

  function renderDashboard() {
    return `
      ${renderHero()}
      <section class="grid">
        ${[
          ["photos", "Fotos beschreiben", "20 echte Bildaufgaben: beschreiben, Erfahrung erzählen, Heimatland vergleichen."],
          ["reading", "Lesen + Vorlesen", "B1-Texte lesen, Fragen beantworten und laut vorlesen mit Auswertung."],
          ["listening", "Hören", "Ansagen und Dialoge mit jeweils mehreren Fragen."],
          ["dialogues", "Dialoge", "Komplexe Alltagssituationen in richtiger Reihenfolge und mit Verständnisfragen."],
          ["practice", "Allgemeine Übungen", "Lücken, Satzbau, Artikel, Dativ, Akkusativ und Verben ohne direkte Lösungshinweise."],
          ["exams", "DTZ Prüfung", "30 komplette Prüfungen mit 100 Aufgaben, Zeitgefühl und Auswertung."],
          ["grammar", "Grammatik erklärt", "Kurze Erklärungen mit Türkisch-Button."],
          ["analysis", "Analyse", "Stärken, Schwächen und nächste Lernschritte."],
        ].map(([id, title, body]) => `
          <article class="card span-3">
            <h3>${h(title)}</h3>
            <p>${h(body)}</p>
            <button type="button" data-go="${h(id)}">Öffnen</button>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderPhotos() {
    const task = pick(smartPhotoTasks, smartRuntime.photoIndex);
    return `
      <section class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">Sprechen Teil 2</p>
            <h2>${h(task.title)}</h2>
          </div>
          <span>Foto ${smartRuntime.photoIndex + 1} von ${smartPhotoTasks.length}</span>
        </div>
        <div class="photo-task-card">
          <img src="${h(task.image)}" alt="${h(task.title)}" loading="eager">
          <div>
            <h3>Aufgabe</h3>
            <p>${h(task.prompt)}</p>
            ${translationButton(task.tr, `tr-photo-${task.id}`)}
            <div class="record-box">
              <button class="primary" type="button" data-record-target="photoAnswer-${h(task.id)}">Mündlich aufnehmen</button>
              <textarea id="photoAnswer-${h(task.id)}" rows="7" placeholder="Oder den gesprochenen Text hier eintippen..."></textarea>
              <div class="actions">
                <button type="button" data-evaluate-photo="${h(task.id)}">Auswerten und nächstes Foto</button>
                <button class="ghost" type="button" data-next-photo>Überspringen</button>
              </div>
              <div id="photoFeedback-${h(task.id)}"></div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderReading() {
    const task = pick(readingPractice, smartRuntime.readingIndex);
    const readId = `read-${smartRuntime.readingIndex}`;
    smartReading.set(readId, task);
    return `
      <section class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">Lesen und Vorlesen</p>
            <h2>${h(task.title)}</h2>
          </div>
          <span>Aufgabe ${smartRuntime.readingIndex + 1} von ${readingPractice.length}</span>
        </div>
        <article class="read-box">
          <p>${h(task.text)}</p>
        </article>
        <h3>Fragen zum Text</h3>
        ${task.questions.map((question, questionIndex) => renderQuestion(`reading-${smartRuntime.readingIndex}-${questionIndex}`, question[0], question[1], question[2])).join("")}
        <div class="record-box">
          <h3>Vorlesen aufnehmen</h3>
          <p>Lesen Sie den Text laut vor. Danach prüft die App, ob wichtige Wörter und genug Text erkannt wurden.</p>
          <button class="primary" type="button" data-record-target="readingAnswer-${readId}">Vorlesen aufnehmen</button>
          <textarea id="readingAnswer-${readId}" rows="6" placeholder="Hier erscheint die Aufnahme als Text..."></textarea>
          <div class="actions">
            <button type="button" data-evaluate-reading="${h(readId)}">Vorlesen auswerten</button>
            <button class="ghost" type="button" data-next-reading>Nächster Text</button>
          </div>
          <div id="readingFeedback-${h(readId)}"></div>
        </div>
      </section>
    `;
  }

  function renderListening() {
    const task = pick(listeningPractice, smartRuntime.listeningIndex);
    const audioId = `listen-${smartRuntime.listeningIndex}`;
    smartAudio.set(audioId, task.audio);
    return `
      <section class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">Hören</p>
            <h2>${h(task.title)}</h2>
          </div>
          <span>Aufgabe ${smartRuntime.listeningIndex + 1} von ${listeningPractice.length}</span>
        </div>
        <div class="audio-card">
          <div>
            <strong>Hörtext</strong>
            <button class="primary" type="button" data-play-audio="${h(audioId)}">Abspielen</button>
          </div>
          <p class="muted">Hören Sie den Text und beantworten Sie danach alle Fragen.</p>
        </div>
        ${task.questions.map((question, questionIndex) => renderQuestion(`listen-${smartRuntime.listeningIndex}-${questionIndex}`, question[0], question[1], question[2])).join("")}
        <div class="actions">
          <button type="button" data-check-section="listen-${smartRuntime.listeningIndex}">Antworten prüfen</button>
          <button class="ghost" type="button" data-next-listening>Nächste Höraufgabe</button>
        </div>
        <div id="sectionFeedback-listen-${smartRuntime.listeningIndex}"></div>
      </section>
    `;
  }

  function renderDialogues() {
    const task = pick(dialoguePractice, smartRuntime.dialogueIndex);
    const shuffled = [...task.lines].sort((a, b) => clean(a).localeCompare(clean(b)));
    return `
      <section class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">Dialoge B1</p>
            <h2>${h(task.title)}</h2>
          </div>
          <span>Dialog ${smartRuntime.dialogueIndex + 1} von ${dialoguePractice.length}</span>
        </div>
        <p>Bringen Sie den Dialog vom Anfang bis zum Ende in eine sinnvolle Reihenfolge.</p>
        <div class="dialogue-builder">
          <div>
            <h3>Sätze auswählen</h3>
            ${shuffled.map((line, index) => `<button class="dialogue-line" type="button" data-add-dialogue="${index}" data-line="${h(line)}">${h(line)}</button>`).join("")}
          </div>
          <div>
            <h3>Ihre Reihenfolge</h3>
            <ol id="chosenDialogue"></ol>
            <div class="actions">
              <button type="button" data-check-dialogue>Reihenfolge prüfen</button>
              <button class="ghost" type="button" data-clear-dialogue>Zurücksetzen</button>
            </div>
            <div id="dialogueFeedback"></div>
          </div>
        </div>
        <h3>Fragen zum Dialog</h3>
        ${task.questions.map((question, questionIndex) => renderQuestion(`dialogue-${smartRuntime.dialogueIndex}-${questionIndex}`, question[0], question[1], question[2])).join("")}
        <div class="actions">
          <button type="button" data-check-section="dialogue-${smartRuntime.dialogueIndex}">Fragen prüfen</button>
          <button class="ghost" type="button" data-next-dialogue>Nächster Dialog</button>
        </div>
        <div id="sectionFeedback-dialogue-${smartRuntime.dialogueIndex}"></div>
      </section>
    `;
  }

  function renderPractice() {
    const visible = pickMany(smartGrammarTasks, smartRuntime.grammarIndex, 12);
    return `
      <section class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">Allgemeine Übungen</p>
            <h2>Lücken, Satzbau und richtige Form</h2>
          </div>
          <span>rotierende Aufgaben</span>
        </div>
        <p>Wählen Sie die logisch passende Lösung. Die Aufgabe nennt nicht direkt die Grammatikregel, damit Sie wie in der Prüfung aus dem Satz heraus entscheiden.</p>
        <div class="practice-focus-grid">
          ${practiceFocusBlocks.map((block, blockIndex) => `
            <article class="practice-focus-card">
              <div>
                <h3>${h(block.title)}</h3>
                <p>${h(block.subtitle)}</p>
              </div>
              ${block.tasks.map((task, taskIndex) => `
                <div class="practice-mini">
                  <p>${h(task.prompt)}</p>
                  ${renderInlineOptions(`focus-${blockIndex}-${taskIndex}`, task.options, task.answer)}
                  ${translationButton(task.tr, `tr-focus-${blockIndex}-${taskIndex}`)}
                </div>
              `).join("")}
            </article>
          `).join("")}
        </div>
        <h3 class="section-title">Weitere rotierende Aufgaben</h3>
        ${visible.map((task, index) => `
          <article class="smart-question">
            <strong>${h(task.title)}</strong>
            <p>${h(task.prompt)}</p>
            ${renderInlineOptions(`grammar-${task.id}`, task.options, task.answer)}
            ${translationButton(task.tr, `tr-${task.id}`)}
          </article>
        `).join("")}
        <div class="actions">
          <button type="button" data-check-grammar>Antworten prüfen</button>
          <button class="ghost" type="button" data-next-grammar>Neue Aufgaben</button>
        </div>
        <div id="grammarFeedback"></div>
      </section>
    `;
  }

  function renderLetters() {
    return `
      <section class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">Schreiben</p>
            <h2>Briefe und E-Mails</h2>
          </div>
          <span>30 Minuten üben</span>
        </div>
        <p>Wählen Sie eine Aufgabe. Schreiben Sie höflich, vollständig und mit Anrede und Gruß.</p>
        <div class="grid">
          ${letterTasks.map((task, index) => `
            <article class="card span-6">
              <h3>${h(task.title)}</h3>
              <p>${h(task.situation)}</p>
              <ul>${task.points.map((point) => `<li>${h(point)}</li>`).join("")}</ul>
              <textarea id="letter-${index}" rows="8" placeholder="Sehr geehrte Damen und Herren,..."></textarea>
              <button type="button" data-check-letter="${index}">Brief auswerten</button>
              <div id="letterFeedback-${index}"></div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderGrammar() {
    return `
      <section class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">Grammatik erklärt</p>
            <h2>Kurze Erklärungen für B1</h2>
          </div>
          <span>mit Türkisch-Button</span>
        </div>
        <div class="grid">
          ${grammarTopics.map((topic, index) => `
            <article class="card span-6">
              <h3>${h(topic.title)}</h3>
              <p>${h(topic.de)}</p>
              ${translationButton(topic.tr, `grammar-topic-${index}`)}
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderLiD() {
    const questions = (typeof lidQuestions !== "undefined" && Array.isArray(lidQuestions) ? lidQuestions : []).slice(0, 80);
    return `
      <section class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">Leben in Deutschland</p>
            <h2>Testfragen üben</h2>
          </div>
          <span>80 Fragen in 60 Minuten möglich</span>
        </div>
        <p>Die Fragen rotieren. Nach dem Prüfen sehen Sie richtige und falsche Antworten.</p>
        ${questions.length ? questions.slice(0, 20).map((question, index) => renderQuestion(`lid-${index}`, question.q || question.question, question.options || [], question.answer)).join("") : "<p>Die Fragen werden geladen.</p>"}
        <div class="actions">
          <button type="button" data-check-section="lid">Antworten prüfen</button>
        </div>
        <div id="sectionFeedback-lid"></div>
      </section>
    `;
  }

  function renderAnalysis() {
    const total = Math.max(1, smartProgress.answered);
    const percent = Math.round((smartProgress.correct / total) * 100);
    const strengths = [];
    const weak = [];
    if (percent >= 70) strengths.push("Multiple-Choice-Aufgaben werden sicherer beantwortet.");
    else weak.push("Antworten bei Lesen/Hören noch langsamer prüfen.");
    if (smartProgress.recordings >= 5) strengths.push("Mündliche Aufgaben werden aktiv geübt.");
    else weak.push("Mehr Vorlesen und Fotoaufgaben aufnehmen.");
    if (smartProgress.exams >= 1) strengths.push("Sie haben schon eine vollständige Prüfung gestartet.");
    else weak.push("Mindestens eine DTZ-Prüfung komplett durchführen.");
    return `
      <section class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">Entwicklungsstand</p>
            <h2>Analyse Deutschkenntnisse</h2>
          </div>
          <span>${percent}% aktuelle Trefferquote</span>
        </div>
        <div class="grid">
          <article class="card span-6">
            <h3>Stärken</h3>
            <ul>${(strengths.length ? strengths : ["Sie haben mit dem Lernen begonnen."]).map((item) => `<li>${h(item)}</li>`).join("")}</ul>
          </article>
          <article class="card span-6">
            <h3>Nächste Schritte</h3>
            <ul>${(weak.length ? weak : ["Weiter regelmäßig DTZ-Prüfungen und freie Sprache üben."]).map((item) => `<li>${h(item)}</li>`).join("")}</ul>
          </article>
        </div>
      </section>
    `;
  }

  function renderQuestion(name, prompt, options, answer) {
    return `
      <fieldset class="smart-question" data-question="${h(name)}" data-answer="${h(answer)}">
        <legend>${h(prompt)}</legend>
        ${options.map((option, optionIndex) => `
          <label>
            <input type="radio" name="${h(name)}" value="${h(option)}">
            <span>${String.fromCharCode(97 + optionIndex)}) ${h(option)}</span>
          </label>
        `).join("")}
        <p class="answer-line hidden"></p>
      </fieldset>
    `;
  }

  function renderInlineOptions(name, options, answer) {
    return `
      <div class="option-row" data-inline-question="${h(name)}" data-answer="${h(answer)}">
        ${options.map((option) => `<button type="button" data-inline-answer="${h(option)}">${h(option)}</button>`).join("")}
        <span class="answer-line"></span>
      </div>
    `;
  }

  function buildSmartExam(number) {
    if (smartExamStore.has(number)) return smartExamStore.get(number);
    let taskNumber = 1;
    const listening = pickMany(examListeningPool, number * 3, 30).map((item, index) => ({
      number: taskNumber++,
      part: index < 4 ? "Hören Teil 1" : index < 9 ? "Hören Teil 2" : index < 17 ? "Hören Teil 3" : "Hören Teil 4",
      title: item[0],
      prompt: item[1],
      options: item[2],
      answer: item[3],
      audio: item[4],
    }));
    const reading = pickMany(examReadingPool, number * 5, 30).map((item, index) => ({
      number: taskNumber++,
      part: index < 5 ? "Lesen Teil 1" : index < 10 ? "Lesen Teil 2" : index < 18 ? "Lesen Teil 3" : index < 24 ? "Lesen Teil 4" : "Lesen Teil 5",
      title: item[0],
      prompt: item[1],
      options: item[2],
      answer: item[3],
      text: item[4],
    }));
    const readAloud = pickMany(readingPractice, number, 10).map((item) => ({
      number: taskNumber++,
      part: "Vorlesen",
      title: item.title,
      text: item.text,
      keywords: item.keywords,
    }));
    const dialogue = pickMany(examDialogPool, number * 7, 10).map((item) => ({
      number: taskNumber++,
      part: "Dialoge",
      title: item.title,
      text: item.context,
      prompt: item.prompt,
      options: item.options,
      answer: item.answer,
    }));
    const writing = pickMany(examWritePool, number, 5).map((item) => ({
      number: taskNumber++,
      part: "Schreiben",
      title: item[0],
      situation: item[1],
      points: item[2],
    }));
    const photoTasks = pickMany(smartPhotoTasks, number * 3, 3).map((item) => ({
      number: taskNumber++,
      part: "Sprechen Teil 2",
      ...item,
    }));
    const introTasks = [
      "Stellen Sie sich kurz vor: Name, Herkunft, Familie, Beruf oder Kurs.",
      "Erzählen Sie, warum Sie Deutsch lernen und welche Ziele Sie haben.",
      "Berichten Sie über eine Alltagssituation, in der Deutsch wichtig war.",
      "Vergleichen Sie das Lernen in Deutschland mit dem Lernen in Ihrem Heimatland.",
    ].map((text) => ({ number: taskNumber++, part: "Sprechen Teil 1", title: "Vorstellen", prompt: text, keywords: ["ich", "deutsch", "lernen", "familie", "arbeit", "kurs"] }));
    const plan = pick(examPlanPool, number);
    const planTasks = Array.from({ length: 8 }, (_, index) => ({
      number: taskNumber++,
      part: "Sprechen Teil 3",
      title: plan[0],
      prompt: index === 0 ? "Planen Sie gemeinsam. Nutzen Sie die Notizen." : plan[1][index % plan[1].length],
      notes: plan[1],
      keywords: ["planen", "vorschlag", "ich", "wir", "können", "termin"],
    }));
    const exam = { number, tasks: [...listening, ...reading, ...readAloud, ...dialogue, ...writing, ...photoTasks, ...introTasks, ...planTasks] };
    smartExamStore.set(number, exam);
    return exam;
  }

  function renderExams() {
    const exam = buildSmartExam(smartRuntime.activeExam);
    if (!state.activeDtzExam && !location.hash.includes("exam-active")) {
      return `
        <section class="exam-paper">
          <div class="exam-paper-header">
            <div>
              <p class="eyebrow">Prüfungstraining</p>
              <h2>DTZ-Prüfung mit 100 Aufgaben</h2>
            </div>
            <span>30 Varianten</span>
          </div>
          <p>Jede Prüfung enthält Hören, Lesen, Vorlesen, Dialoge, Schreiben und Sprechen mit drei Fotoaufgaben. Die Aufgaben sind nicht aus den Vorlagen kopiert, aber im gleichen Prüfungskonzept aufgebaut.</p>
          <label class="select-row">
            Prüfung wählen
            <select id="smartExamSelect">
              ${Array.from({ length: 30 }, (_, index) => `<option value="${index + 1}" ${smartRuntime.activeExam === index + 1 ? "selected" : ""}>Prüfung ${index + 1}</option>`).join("")}
            </select>
          </label>
          <button id="startExam" class="primary" type="button">Prüfung starten</button>
        </section>
      `;
    }
    return renderActiveExam(exam);
  }

  function renderActiveExam(exam) {
    smartAudio.clear();
    smartReading.clear();
    const groups = [
      ["Hören", exam.tasks.filter((task) => task.part.startsWith("Hören"))],
      ["Lesen", exam.tasks.filter((task) => task.part.startsWith("Lesen"))],
      ["Vorlesen", exam.tasks.filter((task) => task.part === "Vorlesen")],
      ["Dialoge", exam.tasks.filter((task) => task.part === "Dialoge")],
      ["Schreiben", exam.tasks.filter((task) => task.part === "Schreiben")],
      ["Sprechen", exam.tasks.filter((task) => task.part.startsWith("Sprechen"))],
    ];
    return `
      <form id="smartExamForm" class="exam-paper">
        <div class="exam-paper-header">
          <div>
            <p class="eyebrow">DTZ Prüfung ${exam.number}</p>
            <h2>100 Aufgaben</h2>
          </div>
          <button class="ghost" type="button" data-exit-exam>Prüfung verlassen</button>
        </div>
        ${groups.map(([title, tasks]) => renderExamGroup(title, tasks, exam.number)).join("")}
        <div class="exam-submit">
          <button class="primary" type="submit">Prüfung auswerten</button>
        </div>
        <div id="examResult"></div>
      </form>
    `;
  }

  function renderExamGroup(title, tasks, examNumber) {
    return `
      <section class="exam-section">
        <div class="section-ribbon">${h(title)}</div>
        ${tasks.map((task) => renderExamTask(task, examNumber)).join("")}
      </section>
    `;
  }

  function renderExamTask(task, examNumber) {
    if (task.audio) {
      const audioId = `exam-${examNumber}-audio-${task.number}`;
      smartAudio.set(audioId, task.audio);
      return `
        <article class="exam-task" data-exam-task="${task.number}" data-answer="${h(task.answer)}" data-kind="auto">
          <h3>${task.number}. ${h(task.part)}</h3>
          <p>${h(task.title)}</p>
          <button class="small" type="button" data-play-audio="${h(audioId)}">Hördialog ${task.number} abspielen</button>
          ${renderQuestion(`exam-${task.number}`, task.prompt, task.options, task.answer)}
        </article>
      `;
    }
    if (task.part.startsWith("Lesen")) {
      return `
        <article class="exam-task" data-exam-task="${task.number}" data-answer="${h(task.answer)}" data-kind="auto">
          <h3>${task.number}. ${h(task.part)}</h3>
          <div class="read-box compact"><strong>${h(task.title)}</strong><p>${h(task.text)}</p></div>
          ${renderQuestion(`exam-${task.number}`, task.prompt, task.options, task.answer)}
        </article>
      `;
    }
    if (task.part === "Vorlesen") {
      const readId = `exam-read-${examNumber}-${task.number}`;
      smartReading.set(readId, task);
      return `
        <article class="exam-task" data-exam-task="${task.number}" data-kind="free">
          <h3>${task.number}. Vorlesen</h3>
          <div class="read-box compact"><p>${h(task.text)}</p></div>
          <button class="small" type="button" data-record-target="answer-${readId}">Vorlesen aufnehmen</button>
          <textarea id="answer-${readId}" rows="4" data-free-task="${task.number}" data-keywords="${h(task.keywords.join("|"))}" placeholder="Aufnahme oder Text..."></textarea>
        </article>
      `;
    }
    if (task.part === "Dialoge") {
      return `
        <article class="exam-task" data-exam-task="${task.number}" data-answer="${h(task.answer)}" data-kind="auto">
          <h3>${task.number}. Dialog</h3>
          <div class="read-box compact"><p>${h(task.text)}</p></div>
          ${renderQuestion(`exam-${task.number}`, task.prompt, task.options, task.answer)}
        </article>
      `;
    }
    if (task.part === "Schreiben") {
      return `
        <article class="exam-task" data-exam-task="${task.number}" data-kind="free">
          <h3>${task.number}. ${h(task.title)}</h3>
          <p>${h(task.situation)}</p>
          <ul>${task.points.map((point) => `<li>${h(point)}</li>`).join("")}</ul>
          <textarea rows="7" data-free-task="${task.number}" data-keywords="${h(task.points.join("|"))}" placeholder="Schreiben Sie Ihren Text..."></textarea>
        </article>
      `;
    }
    if (task.part === "Sprechen Teil 2") {
      return `
        <article class="exam-task photo-exam-task" data-exam-task="${task.number}" data-kind="free">
          <h3>${task.number}. ${h(task.part)}: ${h(task.title)}</h3>
          <img src="${h(task.image)}" alt="${h(task.title)}" loading="eager">
          <p>${h(task.prompt)}</p>
          <button class="small" type="button" data-record-target="exam-photo-${task.number}">Mündlich aufnehmen</button>
          <textarea id="exam-photo-${task.number}" rows="5" data-free-task="${task.number}" data-keywords="${h(task.keywords.join("|"))}" placeholder="Aufnahme oder Text..."></textarea>
        </article>
      `;
    }
    if (task.part === "Sprechen Teil 3") {
      return `
        <article class="exam-task" data-exam-task="${task.number}" data-kind="free">
          <h3>${task.number}. ${h(task.part)}</h3>
          <p>${h(task.prompt)}</p>
          <div class="note-card">${(task.notes || []).map((note) => `<span>${h(note)}</span>`).join("")}</div>
          <button class="small" type="button" data-record-target="exam-speak-${task.number}">Antwort aufnehmen</button>
          <textarea id="exam-speak-${task.number}" rows="4" data-free-task="${task.number}" data-keywords="${h(task.keywords.join("|"))}" placeholder="Aufnahme oder Text..."></textarea>
        </article>
      `;
    }
    return `
      <article class="exam-task" data-exam-task="${task.number}" data-kind="free">
        <h3>${task.number}. ${h(task.part)}</h3>
        <p>${h(task.prompt)}</p>
        <button class="small" type="button" data-record-target="exam-speak-${task.number}">Antwort aufnehmen</button>
        <textarea id="exam-speak-${task.number}" rows="4" data-free-task="${task.number}" data-keywords="${h(task.keywords.join("|"))}" placeholder="Aufnahme oder Text..."></textarea>
      </article>
    `;
  }

  function checkSection(prefix) {
    const questions = [...document.querySelectorAll(`[data-question^="${CSS.escape(prefix)}"]`)];
    let correct = 0;
    questions.forEach((field) => {
      const name = field.dataset.question;
      const answer = field.dataset.answer;
      const checked = document.querySelector(`input[name="${CSS.escape(name)}"]:checked`);
      const line = field.querySelector(".answer-line");
      if (checked && checked.value === answer) {
        correct += 1;
        field.classList.add("is-correct");
        field.classList.remove("is-wrong");
        line.textContent = "Richtig.";
      } else {
        field.classList.add("is-wrong");
        field.classList.remove("is-correct");
        line.textContent = `Richtig wäre: ${answer}`;
      }
      line.classList.remove("hidden");
    });
    smartProgress.answered += questions.length;
    smartProgress.correct += correct;
    saveSmartProgress();
    const target = document.getElementById(`sectionFeedback-${prefix}`);
    if (target) target.innerHTML = `<div class="smart-feedback ${correct === questions.length ? "ok" : "warn"}">${correct} von ${questions.length} richtig.</div>`;
  }

  function gradeExam(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const questions = [...form.querySelectorAll(".smart-question")];
    let correct = 0;
    questions.forEach((field) => {
      const name = field.dataset.question;
      const answer = field.dataset.answer;
      const checked = form.querySelector(`input[name="${CSS.escape(name)}"]:checked`);
      const line = field.querySelector(".answer-line");
      if (checked && checked.value === answer) {
        correct += 1;
        field.classList.add("is-correct");
        field.classList.remove("is-wrong");
        if (line) line.textContent = "Richtig.";
      } else {
        field.classList.add("is-wrong");
        field.classList.remove("is-correct");
        if (line) line.textContent = `Richtig wäre: ${answer}`;
      }
      if (line) line.classList.remove("hidden");
    });
    const freeTasks = [...form.querySelectorAll("[data-free-task]")];
    const freeFeedback = freeTasks.map((textarea) => {
      const taskNumber = textarea.dataset.freeTask;
      const keywords = (textarea.dataset.keywords || "").split("|").filter(Boolean);
      const result = scoreSpeech(textarea.value, keywords, 18);
      return `<li>Aufgabe ${taskNumber}: ${result.score}% - ${result.tips.length ? h(result.tips[0]) : "gut bearbeitet"}</li>`;
    }).join("");
    smartProgress.answered += questions.length;
    smartProgress.correct += correct;
    smartProgress.exams += 1;
    saveSmartProgress();
    const percent = Math.round((correct / Math.max(1, questions.length)) * 100);
    document.getElementById("examResult").innerHTML = `
      <div class="smart-feedback ${percent >= 65 ? "ok" : "warn"}">
        <h3>Auswertung</h3>
        <p>Automatisch bewertete Aufgaben: ${correct} von ${questions.length} richtig (${percent}%).</p>
        <p>Freie Aufgaben werden nach Inhalt, Länge, wichtigen Wörtern und Struktur eingeschätzt.</p>
        <ul>${freeFeedback}</ul>
      </div>
    `;
  }

  const chosenDialogue = [];

  function bindSmartView() {
    document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.go)));
    document.querySelectorAll("[data-toggle-translation]").forEach((button) => button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.toggleTranslation);
      if (!target) return;
      target.classList.toggle("hidden");
      button.textContent = target.classList.contains("hidden") ? "Türkisch anzeigen" : "Türkisch ausblenden";
    }));
    document.querySelectorAll("[data-record-target]").forEach((button) => button.addEventListener("click", () => smartRecord(button.dataset.recordTarget, "Aufnahme")));
    document.querySelectorAll("[data-play-audio]").forEach((button) => button.addEventListener("click", () => smartSpeak(smartAudio.get(button.dataset.playAudio) || "")));
    document.querySelectorAll("[data-check-section]").forEach((button) => button.addEventListener("click", () => checkSection(button.dataset.checkSection)));
    document.querySelectorAll("[data-next-photo]").forEach((button) => button.addEventListener("click", () => {
      smartRuntime.photoIndex = (smartRuntime.photoIndex + 1) % smartPhotoTasks.length;
      remember("dtzSmartPhotoIndex", smartRuntime.photoIndex);
      render();
    }));
    document.querySelectorAll("[data-evaluate-photo]").forEach((button) => button.addEventListener("click", () => {
      const task = smartPhotoTasks.find((item) => item.id === button.dataset.evaluatePhoto);
      const textarea = document.getElementById(`photoAnswer-${task.id}`);
      const result = scoreSpeech(textarea.value, task.keywords, 28);
      document.getElementById(`photoFeedback-${task.id}`).innerHTML = feedbackBox(result, "Fotoanalyse");
      smartProgress.photos += 1;
      saveSmartProgress();
      if (result.score >= 55) {
        setTimeout(() => {
          smartRuntime.photoIndex = (smartRuntime.photoIndex + 1) % smartPhotoTasks.length;
          remember("dtzSmartPhotoIndex", smartRuntime.photoIndex);
          render();
        }, 1400);
      }
    }));
    document.querySelectorAll("[data-evaluate-reading]").forEach((button) => button.addEventListener("click", () => {
      const task = smartReading.get(button.dataset.evaluateReading);
      const textarea = document.getElementById(`readingAnswer-${button.dataset.evaluateReading}`);
      const result = scoreSpeech(textarea.value, task.keywords, 18);
      document.getElementById(`readingFeedback-${button.dataset.evaluateReading}`).innerHTML = feedbackBox(result, "Vorlesen");
      smartProgress.reading += 1;
      saveSmartProgress();
    }));
    document.querySelectorAll("[data-next-reading]").forEach((button) => button.addEventListener("click", () => {
      smartRuntime.readingIndex = (smartRuntime.readingIndex + 1) % readingPractice.length;
      remember("dtzSmartReadingIndex", smartRuntime.readingIndex);
      render();
    }));
    document.querySelectorAll("[data-next-listening]").forEach((button) => button.addEventListener("click", () => {
      smartRuntime.listeningIndex = (smartRuntime.listeningIndex + 1) % listeningPractice.length;
      remember("dtzSmartListeningIndex", smartRuntime.listeningIndex);
      render();
    }));
    document.querySelectorAll("[data-next-dialogue]").forEach((button) => button.addEventListener("click", () => {
      smartRuntime.dialogueIndex = (smartRuntime.dialogueIndex + 1) % dialoguePractice.length;
      remember("dtzSmartDialogueIndex", smartRuntime.dialogueIndex);
      render();
    }));
    document.querySelectorAll("[data-inline-answer]").forEach((button) => button.addEventListener("click", () => {
      const row = button.closest("[data-inline-question]");
      row.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      row.dataset.selected = button.dataset.inlineAnswer;
    }));
    document.querySelectorAll("[data-check-grammar]").forEach((button) => button.addEventListener("click", () => {
      const rows = [...document.querySelectorAll("[data-inline-question]")];
      let correct = 0;
      rows.forEach((row) => {
        const ok = row.dataset.selected === row.dataset.answer;
        if (ok) correct += 1;
        row.classList.toggle("is-correct", ok);
        row.classList.toggle("is-wrong", !ok);
        row.querySelector(".answer-line").textContent = ok ? "Richtig." : `Richtig wäre: ${row.dataset.answer}`;
      });
      smartProgress.answered += rows.length;
      smartProgress.correct += correct;
      saveSmartProgress();
      document.getElementById("grammarFeedback").innerHTML = `<div class="smart-feedback ${correct >= rows.length * 0.7 ? "ok" : "warn"}">${correct} von ${rows.length} richtig.</div>`;
    }));
    document.querySelectorAll("[data-next-grammar]").forEach((button) => button.addEventListener("click", () => {
      smartRuntime.grammarIndex = (smartRuntime.grammarIndex + 12) % smartGrammarTasks.length;
      remember("dtzSmartGrammarIndex", smartRuntime.grammarIndex);
      render();
    }));
    document.querySelectorAll("[data-check-letter]").forEach((button) => button.addEventListener("click", () => {
      const task = letterTasks[Number(button.dataset.checkLetter)];
      const textarea = document.getElementById(`letter-${button.dataset.checkLetter}`);
      const result = scoreSpeech(textarea.value, [...task.points, "sehr geehrte", "mit freundlichen grüßen"], 45);
      document.getElementById(`letterFeedback-${button.dataset.checkLetter}`).innerHTML = feedbackBox(result, "Brief");
    }));
    document.querySelectorAll("[data-add-dialogue]").forEach((button) => button.addEventListener("click", () => {
      chosenDialogue.push(button.dataset.line);
      const list = document.getElementById("chosenDialogue");
      list.innerHTML = chosenDialogue.map((line) => `<li>${h(line)}</li>`).join("");
    }));
    document.querySelectorAll("[data-clear-dialogue]").forEach((button) => button.addEventListener("click", () => {
      chosenDialogue.length = 0;
      document.getElementById("chosenDialogue").innerHTML = "";
      document.getElementById("dialogueFeedback").innerHTML = "";
    }));
    document.querySelectorAll("[data-check-dialogue]").forEach((button) => button.addEventListener("click", () => {
      const task = pick(dialoguePractice, smartRuntime.dialogueIndex);
      const correct = task.lines.filter((line, index) => chosenDialogue[index] === line).length;
      const score = Math.round((correct / task.lines.length) * 100);
      document.getElementById("dialogueFeedback").innerHTML = `<div class="smart-feedback ${score >= 70 ? "ok" : "warn"}">${correct} von ${task.lines.length} Sätzen stehen an der richtigen Stelle.</div>`;
      smartProgress.dialogs += 1;
      saveSmartProgress();
    }));
    const select = document.getElementById("smartExamSelect");
    if (select) select.addEventListener("change", () => {
      smartRuntime.activeExam = Number(select.value);
      remember("dtzSmartExamNumber", smartRuntime.activeExam);
    });
    const startExam = document.getElementById("startExam");
    if (startExam) startExam.addEventListener("click", () => {
      state.activeDtzExam = smartRuntime.activeExam;
      if (typeof history !== "undefined") history.replaceState(null, "", "#exams/exam-active");
      render();
    });
    document.querySelectorAll("[data-exit-exam]").forEach((button) => button.addEventListener("click", () => {
      state.activeDtzExam = null;
      if (typeof history !== "undefined") history.replaceState(null, "", "#exams");
      render();
    }));
    const examForm = document.getElementById("smartExamForm");
    if (examForm) examForm.addEventListener("submit", gradeExam);
  }

  function normalizeView(view) {
    const id = String(view || "dashboard").split("/")[0].replace("#", "");
    return smartViews.some((item) => item.id === id) ? id : "dashboard";
  }

  renderNav = function renderSmartNav() {
    const nav = document.getElementById("nav");
    if (!nav) return;
    nav.innerHTML = smartViews.map((view) => `<button type="button" class="${state.view === view.id ? "active" : ""}" data-view="${h(view.id)}">${h(view.label)}</button>`).join("");
    nav.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  };

  setView = function setSmartView(view) {
    state.view = normalizeView(view);
    if (state.view !== "exams") state.activeDtzExam = null;
    if (typeof history !== "undefined") history.replaceState(null, "", `#${state.view}`);
    render();
  };

  render = function renderSmartApp() {
    state.view = normalizeView(state.view || (location.hash ? location.hash.slice(1) : "dashboard"));
    const app = document.getElementById("app");
    if (!app) return;
    smartAudio.clear();
    smartReading.clear();
    renderNav();
    const viewMap = {
      dashboard: renderDashboard,
      practice: renderPractice,
      photos: renderPhotos,
      reading: renderReading,
      listening: renderListening,
      dialogues: renderDialogues,
      letters: renderLetters,
      exams: renderExams,
      grammar: renderGrammar,
      analysis: renderAnalysis,
      lid: renderLiD,
    };
    app.innerHTML = (viewMap[state.view] || renderDashboard)();
    bindSmartView();
    app.focus?.();
  };

  window.addEventListener("hashchange", () => {
    state.view = normalizeView(location.hash.slice(1));
    render();
  });

  render();
})();
