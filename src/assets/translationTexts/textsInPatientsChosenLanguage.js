const textsInPatientsChosenLanguage = {
  en: {
    registrationScreen: {
      heading: "Welcome!",
      subheading: "Please provide your personal information:",
      "p.1": "Personal Information",
      "p.1.1": "Given Name",
      "p.1.2": "Family Name",
      "p.1.3": "Insurance Number",
      "p.1.4": "Date of Birth",
      "p.1.5": "Gender",
      "p.male": "Male",
      "p.female": "Female",
      "p.other": "Other",
    },
    previewScreen: {
      heading: "Welcome to your Computed Tomography Examination!",
      text: "Please take a seat in the waiting area. During the waiting time, you can watch an educational video or read information material. Then please fill out the questionnaire",
      watchVideo: "Watch Video",
      readInformation: "Read Information",
    },
    videoScreen: {
      "v.1": "Information Leaflet",
      readInfoBtn: "Read Information",
      video: require("../videos/English.mp4"),
    },
    informationScreen: {
      information: {
        "i.1": "Dear Patient!",
        "i.1.1":
          "You were referred for computer tomography (CT) by your attending doctor. For your information, please read this text and answer the questions on page 2. Afterwards, you will be informed about all important facts and have the opportunity to ask questions.",
        "i.2": "What is computer tomography?",
        "i.2.1":
          "Computer tomography (CT) is a special X-ray examination used to make cross-sectional images of the body. This way, important information on the location of the disease centres can be obtained. This is of crucial importance for further treatment.",
        "i.3": "How is the examination carried out?",
        "i.3.1":
          "The examination takes about 10-15 minutes. During the examination, you lie on a special examination table that moves through the opening on the CT device. Throughout the examination you are monitored by qualified personnel and connected with them via an intercom system.",
        "i.4": "What do I have to do?",
        "i.4.1":
          "In order to achieve optimal image quality, we ask you to remain still during the entire examination. In some cases, we may ask you to follow instructions (e.g.: inhale, exhale, hold breath, do not swallow, etc.).",
        "i.5": "Risk of X-rays:",
        "i.5.1":
          "In very rare cases, X-rays in high doses can contribute to tumour development. In general, the risk of CT X-rays is very low and depends on the type and number of CT and X-ray examinations performed. You have been referred to this CT scan by your attending doctor because this examination is important for diagnosis and the information cannot be obtained by another examination.",
        "i.6": "Why contrast agent?",
        "i.6.1":
          "Contrast agents can increase the information significance of many CT scans and help your doctors to better recognize pathological changes. Contrast agents are administered as infusions into an arm vein during the examination.",
        "i.7": "Can there be complications?",
        "i.7.1":
          "As with any injection, pain, bruising and, very rarely, infection can occur at the injection site. During the application, many people experience warmth and a bitter taste in their mouths. Scientific studies show that more than 99% of all patients tolerate the contrast agents used well. Seldom (about 1 in 400) there is a slight drop in blood pressure and thus slight discomfort such as nausea or pain. Very rarely (about 1 in 10,000) there are severe side effects such as shortness of breath, drop in blood pressure, cardiac arrhythmia or cramps. As with almost any medical procedure, life-threatening complications are possible, but extremely unlikely. If you experience any side effects, immediate medical assistance is always available.",
        "i.7.2":
          "In rare cases, contrast agent may leak into the arm at the injection site. This leads to painful swelling that can sometimes last for days and must be treated. If you feel pain or swelling of your arm during the examination, please notify the medical technician who carries out the examination immediately - even during the examination.",
      },
    },
    questionnaireScreen: {
      questionnaire: {
        "q.1":
          "Please answer the following questions to the best of your knowledge.",
        "q.1.1": "Size (cm)",
        "q.1.2": "Weight (kg)",
        "q.1.3": "Is there a possibility of pregnancy?",
        "q.2": "Did you have one of these examinations before?",
        "q.2.1": "Computer tomography (CT)",
        "q.2.2": "Vascular X-ray (Angiography / Cardiac Catheter)",
        "q.2.3": "Kidney X-ray (Urography)",
        "q.2.4": "Leg vein imaging (phlebography)",
        "q.3":
          "Did you experience any side-effects after the administration of contrast agents? If so, which ones?",
        "q.3.1": "Nausea/Vomiting/Suffocation",
        "q.3.2": "Asthma attack / shortness of breath",
        "q.3.3": "Rash",
        "q.3.4": "Seizures / unconsciousness",
        "q.3.5": "Shivering attacks",
        "q.4": "Do you suffer from any of the following medical conditions?",
        "q.4.1": "Allergies that require treatment?",
        "q.4.2": "of the heart?",
        "q.4.3": "of the kidney / adrenal gland?",
        "q.4.4": "of the thyroid gland?",
        "q.4.5": "Diabetes?",
        "q.4.6": "Myasthenia gravis? (specific muscle disease)",
        "q.5":
          "Please answer the following questions to the best of your knowledge.",
        "q.5.1": "If yes, which diabetes medications do you take?",
        "q.5.2": "Do you carry a pacemaker?",
        "q.yes": "Yes",
        "q.no": "No",
        "q.unknown": "asked but unknown",
        "q.idk": "I don't know",
      },
    },
    navigationButtons: {
      "n.next": "Next",
      "n.back": "Back",
    },
    overviewSectionHeadings: {
      "oSH.1": "Personal Information",
      "oSH.2": "Previous Examinations",
      "oSH.3": "Side Effects",
      "oSH.4": "Medical Conditions",
      "oSH.5": "Additional Information",
    },
    consentScreen: {
      "c.1": "Consent",
      "c.1.1": "The patient agrees to the examination: ",
      "c.2.1": "Signature",
      "c.2.1":
        "By signing, I confirm that I have read and understood the text in this form. I have answered the questions to the best of my knowledge and belief. In a personal talk, the risks were explained to me and my additional questions were answered satisfactorily. I agree that the suggested examination should be carried out",
      clear: "Clear",
      signature: "Signature of the patient and/or his/her legal representative",
    },
  },
  de: {
    registrationScreen: {
      heading: "Willkommen!",
      subheading: "Bitte geben Sie Ihre persönlichen Daten an:",
      "p.1": "Persönliche Angaben",
      "p.1.1": "Vorname",
      "p.1.2": "Nachname",
      "p.1.3": "Versicherungsnummer",
      "p.1.4": "Geburtsdatum",
      "p.1.5": "Geschlecht",
      "p.male": "Männlich",
      "p.female": "Weiblich",
      "p.other": "Divers",
    },
    previewScreen: {
      heading: "Willkommen zu Ihrer Computertomographie-Untersuchung!",
      text: "Bitte nehmen Sie im Wartebereich Platz. Während der Wartezeit können Sie sich ein Informationsvideo ansehen oder Informationsmaterial lesen. Anschließend füllen Sie bitte den Fragebogen aus.",
      watchVideo: "Video ansehen",
      readInformation: "Information lesen",
    },
    videoScreen: {
      "v.1": "Informationsblatt",
      readInfoBtn: "Information lesen",
      video: require("../videos/German.mp4"),
    },
    informationScreen: {
      information: {
        "i.1": "Sehr geehrte Patientin! Sehr geehrter Patient!",
        "i.1.1":
          "Sie sind von Ihrer behandelnden Ärztin/Ihrem behandelnden Arzt zu einer Computertomographie (CT) – Untersuchung überwiesen worden. Zu Ihrer Information ersuchen wir Sie höflich, diesen Text zu lesen und die Fragen auf Seite 2 zu beantworten. Im Rahmen eines Aufklärungsgespräches werden Sie danach über alle wichtigen Fakten aufgeklärt und bekommen die Möglichkeit, Fragen zu stellen.",
        "i.2": "Was ist eine Computertomographie?",
        "i.2.1":
          "Die Computertomographie (CT) ist eine spezielle Röntgenuntersuchung, mit der Querschnittsbilder des Körpers angefertigt werden. Dadurch können wichtige Informationen über die Lage von Krankheitsherden gewonnen werden. Dies ist für die weitere Behandlung oft von entscheidender Bedeutung.",
        "i.3": "Wie läuft die Untersuchung ab?",
        "i.3.1":
          "Die Untersuchung dauert ca. 10–15 Minuten. Während der Untersuchung liegen Sie auf einem speziellen Untersuchungstisch, der sich durch die Öffnung des CT-Gerätes bewegt. Sie sind während der gesamten Untersuchung unter Aufsicht von Fachpersonal und mit diesem über eine Sprechanlage verbunden.",
        "i.4": "Was muss ich tun?",
        "i.4.1":
          "Um eine optimale Qualität der Bilder zu erzielen, bitten wir Sie höflich, während der gesamten Untersuchung ruhig liegen zu bleiben. Bei manchen Untersuchungen werden wir Sie eventuell bitten, Anweisungen (z.B.: Einatmen, Ausatmen, Luftanhalten, nicht Schlucken, etc.) zu befolgen.",
        "i.5": "Risiko der Röntgenstrahlen:",
        "i.5.1":
          "In seltensten Fällen können Röntgenstrahlen in hohen Dosen zur Entstehung von Tumoren beitragen. Insgesamt ist das Risiko durch die bei der CT angewendeten Röntgenstrahlen sehr gering und hängt von der Art und Anzahl der durchgeführten CT- und Röntgenuntersuchungen ab. Sie sind zu dieser CT-Untersuchung von Ihrer behandelnden Ärztin/Ihrem behandelnden Arzt überwiesen worden, weil diese Untersuchung diagnostisch wichtig ist und die Information nicht mit einer anderen Untersuchung gewonnen werden kann.",
        "i.6": "Wozu Kontrastmittel?",
        "i.6.1":
          "Kontrastmittel können die Aussagekraft vieler CT-Untersuchungen steigern und helfen Ihren Ärztinnen und Ärzten, krankhafte Veränderungen besser zu erkennen. Kontrastmittel wird während der Untersuchung als Infusion in eine Vene im Arm verabreicht.",
        "i.7": "Kann es Komplikationen geben?",
        "i.7.1":
          "An der Einstichstelle kann es – wie bei jeder Spritze – zu Schmerzen, einem Bluterguss und sehr selten zu einer Infektion kommen. Viele Menschen empfinden während der Anwendung ein Wärmegefühl und einen bitteren Geschmack im Mund. Wissenschaftliche Untersuchungen zeigen, dass mehr als 99% der Patientinnen und Patienten das verwendete Kontrastmittel gut vertragen. Selten (etwa 1 in 400) kommt es zu einem leichten Absinken des Blutdrucks und dadurch zu geringen Beschwerden wie Übelkeit oder Schmerzen. Sehr selten (etwa 1 in 10.000) sind schwere Nebenwirkungen wie Atemnot, Blutdruckabfall, Herzrhythmusstörungen oder Krämpfe. Wie bei fast jedem medizinischen Eingriff ist eine lebensbedrohliche Komplikation möglich, jedoch äußerst unwahrscheinlich. Sollten bei Ihnen Nebenwirkungen auftreten, steht sofortige ärztliche Hilfe jederzeit zur Verfügung.",
        "i.7.2":
          "Selten kann es zum Austritt von Kontrastmittel an der Injektionsstelle in den Arm kommen. Dies führt zu einer schmerzhaften Schwellung, die manchmal auch über Tage anhalten und eine Behandlung notwendig machen kann. Falls Sie während der Untersuchung Schmerzen oder eine Schwellung des Armes verspüren, verständigen Sie bitte sofort – noch während der Untersuchung – das medizinisch-technische Fachpersonal, das die Untersuchung durchführt.",
      },
    },
    questionnaireScreen: {
      questionnaire: {
        "q.1": "Bitte beantworten Sie die folgenden Fragen nach bestem Wissen.",
        "q.1.1": "Größe (cm)",
        "q.1.2": "Gewicht (kg)",
        "q.1.3": "Besteht die Möglichkeit einer Schwangerschaft?",
        "q.2": "Hatten Sie eine dieser Untersuchungen zuvor?",
        "q.2.1": "Computertomographie (CT)",
        "q.2.2": "Gefäßröntgen (Angiographie / Herzkatheter)",
        "q.2.3": "Nierenröntgen (Urographie)",
        "q.2.4": "Darstellung der Beinvenen (Phlebographie)",
        "q.3":
          "Haben Sie nach der Verabreichung von Kontrastmitteln Nebenwirkungen bemerkt? Wenn ja, welche?",
        "q.3.1": "Übelkeit / Erbrechen / Würgegefühl",
        "q.3.2": "Asthmaanfall / Atemnot",
        "q.3.3": "Hautausschlag",
        "q.3.4": "Krampfanfälle / Bewusstlosigkeit",
        "q.3.5": "Schüttelfrost",
        "q.4": "Leiden Sie an einer der folgenden Erkrankungen?",
        "q.4.1": "Allergien, die einer Behandlung bedürfen?",
        "q.4.2": "des Herzens?",
        "q.4.3": "der Niere / Nebenniere?",
        "q.4.4": "der Schilddrüse?",
        "q.4.5": "Diabetes?",
        "q.4.6": "Myasthenia gravis? (spezielle Muskelerkrankung)",
        "q.5": "Bitte beantworten Sie die folgenden Fragen nach bestem Wissen.",
        "q.5.1": "Wenn ja, welche Diabetesmedikamente nehmen Sie?",
        "q.5.2": "Tragen Sie einen Herzschrittmacher?",
        "q.yes": "Ja",
        "q.no": "Nein",
        "q.unknown": "gefragt aber unbekannt",
        "q.idk": "Weiß ich nicht",
      },
    },
    navigationButtons: {
      "n.next": "Weiter",
      "n.back": "Zurück",
    },
    overviewSectionHeadings: {
      "oSH.1": "Persönliche Angaben",
      "oSH.2": "Voruntersuchungen",
      "oSH.3": "Nebenwirkungen",
      "oSH.4": "Erkrankungen",
      "oSH.5": "Zusätzliche Informationen",
    },
    consentScreen: {
      "c.1": "Einverständniserklärung",
      "c.1.1": "Die Patientin/der Patient stimmt der Untersuchung zu: ",
      "c.2.1": "Unterschrift",
      "c.2.1":
        "Durch meine Unterschrift bestätige ich, dass ich den Text dieses Formulars gelesen und verstanden habe. Ich habe die Fragen nach bestem Wissen beantwortet. In einem persönlichen Gespräch wurden mir die Risiken erklärt und meine weiteren Fragen sind ausreichend beantwortet worden. Ich stimme der Durchführung der vorgeschlagenen Untersuchung zu.",
      clear: "Löschen",
      signature:
        "Unterschrift der Patientin/des Patienten und/oder seines/ihres gesetzlichen Vertreters",
    },
  },
  pl: {
    registrationScreen: {
      heading: "Witamy!",
      subheading: "Prosimy o podanie danych osobowych:",
      "p.1": "Dane osobowe",
      "p.1.1": "Imię",
      "p.1.2": "Nazwisko",
      "p.1.3": "Numer ubezpieczenia",
      "p.1.4": "Data urodzenia",
      "p.1.5": "Płeć",
      "p.male": "Mężczyzna",
      "p.female": "Kobieta",
      "p.other": "Inna",
    },
    previewScreen: {
      heading: "Witamy na badaniu tomografii komputerowej!",
      text: "Prosimy usiąść w poczekalni. Podczas oczekiwania można obejrzeć film edukacyjny lub przeczytać materiały informacyjne. Następnie prosimy wypełnić ankietę.",
      watchVideo: "Obejrzyj film",
      readInformation: "Przeczytaj informacje",
    },
    videoScreen: {
      "v.1": "Ulotka informacyjna",
      readInfoBtn: "Przeczytaj informacje",
      video: require("../videos/Polish.mp4"),
    },
    informationScreen: {
      information: {
        "i.1": "Szanowna Pacjentko! Szanowny Pacjencie!",
        "i.1.1":
          "Otrzymałaś/eś skierowanie od swojego prowadzącego lekarza na badanie przy użyciu tomografii komputerowej (TK). Prosimy o przeczytanie poniższego tekstu i odpowiedzenie na pytania na stronie 2. Podczas rozmowy informacyjnej przedstawimy wszystkie najważniejsze fakty i odpowiemy na wszelkie pytania.",
        "i.2": "Czym jest tomografia komputerowa?",
        "i.2.1":
          "Tomografia komputerowa (TK) to specjalne badanie rentgenowskie, za pomocą którego tworzony jest obraz poprzeczny ciała. To pozwala na uzyskanie ważnych informacji o lokalizacji ognisk chorobowych. Ma to często decydujące znaczenie dla dalszego procesu leczenia.",
        "i.3": "Jak przebiega badanie?",
        "i.3.1":
          "Badanie trwa ok. 10-15 minut. Pacjent podczas badania leży na specjalnym stole, który przesuwa się przez otwór urządzenia TK. Przez cały czas badania pacjent jest pod obserwacją specjalistycznego personelu i komunikuje się z nim przez zestaw głośnomówiący.",
        "i.4": "Co muszę zrobić?",
        "i.4.1":
          "W celu uzyskania optymalnej jakości zdjęć bardzo prosimy o nieruszanie się podczas badania. Podczas niektórych badań możemy Cię poprosić o postępowanie zgodnie ze wskazówkami (np. nabranie powietrza do płuc, wydmuchanie powietrza, nie połykanie śliny itp.).",
        "i.5": "Ryzyko promieni rentgenowskich",
        "i.5.1":
          "W niektórych przypadkach wysokie dawki promieni rentgenowskich mogą prowadzić do powstania nowotworu. W sumie ryzyko w przypadku stosowanych podczas TK promieni rentgenowskich jest bardzo niskie i zależy od rodzaju i ilości przeprowadzonych badań TK i rentgenowskich. Lekarz prowadzący skierował Panią/Pana na badanie TK, ponieważ to badanie jest ważne pod kątem diagnostycznym i dostarcza informacji, których nie można uzyskać poprzez inne badanie.",
        "i.6": "Do czego służy kontrast?",
        "i.6.1":
          "Kontrast może zwiększyć skuteczność wielu badań TK i pomaga lekarzom w lepszym rozpoznawaniu zmian chorobowych. Kontrast jest podawany podczas badania w formie zastrzyku do żyły w ramieniu.",
        "i.7": "Czy mogą wystąpić komplikacje?",
        "i.7.1":
          "W miejscu wkucia - jak przy każdym zastrzyku - może być odczuwany ból, może dojść do wylewu krwi lub w bardzo rzadkich przypadkach do infekcji. Wiele osób podczas stosowania kontrastu odczuwa ciepło i gorzki posmak w ustach. Badania naukowe pokazują, że ponad 99% pacjentów dobrze toleruje stosowany środek kontrastowy. W rzadkich przypadkach (ok. 1 na 400) dochodzi do lekkiego spadku ciśnienia krwi i do związanych z tym lekkich dolegliwości, jak mdłości lub bóle. Bardzo rzadko (ok. 1 na 10 000) występują poważne skutki uboczne, jak duszności, spadek ciśnienia, zakłócenia rytmu serca lub drgawki. Jak w przypadku każdej medycznej ingerencji, możliwe są zagrażające życiu komplikacje, występują one jednak niezwykle rzadko.",
        "i.7.2":
          "Gdy u Pani/Pana wystąpią skutki uboczne, w każdej chwili dostępna jest natychmiastowa pomoc lekarska. Rzadko może dojść do wycieku środka kontrastowego w miejscu jego wstrzyknięcia. To prowadzi do bolesnego obrzęku, który czasem może się utrzymywać przez kilka dni i wymagać leczenia. Gdy podczas badania poczuje Pani/Pan ból lub powstanie obrzęku ramienia, należy natychmiast – jeszcze w trakcie badania – powiadomić o tym personel medyczno-techniczny, który przeprowadza badanie.",
      },
    },
    questionnaireScreen: {
      questionnaire: {
        "q.1":
          "Proszę odpowiedzieć na poniższe pytania zgodnie z najlepszą wiedzą.",
        "q.1.1": "Wzrost (cm)",
        "q.1.2": "Waga (kg)",
        "q.1.3": "Czy istnieje możliwość ciąży?",
        "q.2": "Czy miał(a) Pan(i) wcześniej któreś z tych badań?",
        "q.2.1": "Tomografia komputerowa (CT)",
        "q.2.2": "RTG naczyń (angiografia / cewnik sercowy)",
        "q.2.3": "RTG nerek (urografia)",
        "q.2.4": "Obrazowanie żył nóg (flebografia)",
        "q.3":
          "Czy doświadczył(a) Pan(i) jakichkolwiek skutków ubocznych po podaniu środków kontrastowych? Jeśli tak, to jakich?",
        "q.3.1": "Nudności / wymioty / uczucie dławienia",
        "q.3.2": "Napad astmy / duszność",
        "q.3.3": "Wysypka",
        "q.3.4": "Drgawki / utrata przytomności",
        "q.3.5": "Dreszcze",
        "q.4": "Czy cierpi Pani/Pan na którąkolwiek z poniższych chorób?",
        "q.4.1": "Alergie wymagające leczenia?",
        "q.4.2": "serca?",
        "q.4.3": "nerki / nadnercza?",
        "q.4.4": "tarczycy?",
        "q.4.5": "Cukrzyca?",
        "q.4.6": "Myasthenia gravis? (specyficzna choroba mięśni)",
        "q.5":
          "Proszę odpowiedzieć na poniższe pytania zgodnie z najlepszą wiedzą.",
        "q.5.1": "Jeśli tak, jakie leki przeciwcukrzycowe Pan(i) przyjmuje?",
        "q.5.2": "Czy nosi Pan(i) rozrusznik serca?",
        "q.yes": "Tak",
        "q.no": "Nie",
        "q.unknown": "zapytano, ale nie wiadomo",
        "q.idk": "Nie wiem",
      },
    },
    navigationButtons: {
      "n.next": "Dalej",
      "n.back": "Wstecz",
    },
    overviewSectionHeadings: {
      "oSH.1": "Dane osobowe",
      "oSH.2": "Poprzednie badania",
      "oSH.3": "Skutki uboczne",
      "oSH.4": "Choroby",
      "oSH.5": "Dodatkowe informacje",
    },
    consentScreen: {
      "c.1": "Zgoda",
      "c.1.1": "Pacjentka/Pacjent wyraża zgodę na badanie: ",
      "c.2.1": "Podpis",
      "c.2.1":
        "Swoim podpisem potwierdzam, że zapoznałam/em się ze zrozumieniem z tekstem tego formularza.Odpowiedzi na pytania udzieliłam/em zgodnie z moją wiedzą. Podczas osobistej rozmowy objaśniono mi zagrożenia i udzielono pełnej odpowiedzi na moje pytania. Zgadzam się na wykonanie zalecanego badania.",
      clear: "Wyczyść",
      signature:
        "Podpis pacjentki/pacjenta i/lub jej/jego przedstawiciela prawnego",
    },
  },
};

export { textsInPatientsChosenLanguage };
