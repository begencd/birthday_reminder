# 🎉 Doglan Gün Ýatlatma / Birthday Reminder

Möhüm seneleri ýatdan çykarmaga kömek edýän häzirki zaman Android programmasy. React Native we Expo bilen döredildi.

A modern, beautiful Android mobile app built with React Native and Expo to help you never forget important birthdays.

## 🌍 Dil / Language

**Programma doly türkmen dilinde işleýär!**
**The app is fully localized in Turkmen language!**

- 🇹🇲 Türkmen dili (esasy)
- 🇬🇧 English (fallback)

## ✨ Aýratynlyklar / Features

- 📝 Doglan günleri goşmak, üýtgetmek we pozmak / Add, edit, and delete birthdays
- 📅 Sene saýlaýjy / Calendar date picker
- 🔔 Doglan günde bildiriş (ýary gijede) / Push notifications at midnight
- ⏰ Bir gün öň ýatlatma / Reminder notifications 1 day before
- 📊 Aýlyk jemleýiş / Monthly summary of upcoming birthdays
- 📁 TXT faýldan import / Import from TXT files
- 🌓 Garaňky/Açyk režim / Dark/Light mode support
- 🎨 Material Design interfeýsi / Beautiful Material Design UI
- 💾 Lokal maglumat saklamak / Local data storage with AsyncStorage
- 📱 Ähli ekran ölçegleri üçin / Fully responsive for all screen sizes

## 🚀 Çalt başlamak / Quick Start

### Taýýynlyk / Prerequisites

- Node.js (v18+)
- npm or yarn
- Android Studio (Android ösüşi üçin / for Android development)
- Expo CLI

### Gurnamak / Installation

```bash
# Baglylyklary gurnamak / Install dependencies
npm install

# Ösüş serwerini başlatmak / Start development server
npm start

# Android-da işletmek / Run on Android
npm run android
```

## 📦 APK gurmak / Building APK

### EAS Build bilen (Maslahat berilýär / Recommended)

```bash
# EAS CLI gurnamak / Install EAS CLI
npm install -g eas-cli

# Girmek / Login
eas login

# APK gurmak / Build APK
eas build --platform android --profile production
```

Jikme-jik maglumat üçin / For detailed instructions:
- **[EXPO_BUILD_GUIDE.md](EXPO_BUILD_GUIDE.md)** - Türkmen dilinde / In Turkmen
- **[BUILD_GUIDE.md](BUILD_GUIDE.md)** - English

## 📋 Import formaty / Import Format

TXT faýl formaty / TXT file format:

```
Familiýa_At_GG.AA.ÝÝÝÝ
Lastname_Firstname_DD.MM.YYYY
```

Mysal / Example (`sample-birthdays.txt`):

```
Atayew_Begenc_12.05.2001
Annayew_Myrat_03.11.1999
Smith_John_15.03.1995
```

## 🛠️ Tehnologiýalar / Tech Stack

- **React Native** 0.81.5
- **Expo SDK** 54
- **TypeScript**
- **AsyncStorage** - Lokal maglumat / Local data persistence
- **Expo Notifications** - Bildirişler / Push notifications
- **Expo Router** - Nawigasiýa / File-based navigation
- **i18n-js** - Lokalizasiýa / Localization
- **Expo Localization** - Dil goldawy / Language support

## 📁 Taslama gurluşy / Project Structure

```
birthday-reminder/
├── app/                    # Ekranlar / Screens
├── components/             # Komponentler / Components
├── locales/                # Terjimeler / Translations
│   ├── tk.json            # Türkmen dili
│   └── en.json            # English
├── utils/                  # Hyzmatlar / Services
├── constants/              # Sazlamalar / Configuration
└── [Resminamalar / Documentation]
```

## 🌍 Lokalizasiýa / Localization

Programma doly türkmen diline terjime edildi:
The app is fully localized in Turkmen:

- ✅ Ähli interfeýs tekstleri / All UI text
- ✅ Bildirişler / Notifications
- ✅ Ýalňyşlyk habarlary / Error messages
- ✅ Forma tassyklamalary / Form validations

Jikme-jik maglumat / For details:
**[TURKMEN_LOCALIZATION.md](TURKMEN_LOCALIZATION.md)**

## 📱 Expo Build sahypasyndan göçürip almak

Programma Expo Build sahypasyndan göçürip alyp bolýar:
The app can be downloaded from Expo builds page:

1. EAS build dörediň / Create EAS build
2. Expo sahypasyna gidiň / Go to Expo dashboard
3. Builds bölüminden göçürip alyň / Download from Builds section

Jikme-jik gollanma / Detailed guide:
**[EXPO_BUILD_GUIDE.md](EXPO_BUILD_GUIDE.md)**

## 📚 Resminamalar / Documentation

### Türkmen dilinde / In Turkmen
- **[TURKMEN_LOCALIZATION.md](TURKMEN_LOCALIZATION.md)** - Lokalizasiýa gollanmasy
- **[EXPO_BUILD_GUIDE.md](EXPO_BUILD_GUIDE.md)** - Expo build gollanmasy

### English
- **[QUICKSTART.md](QUICKSTART.md)** - Quick start guide
- **[SETUP.md](SETUP.md)** - Detailed setup guide
- **[BUILD_GUIDE.md](BUILD_GUIDE.md)** - APK building guide
- **[FEATURES.md](FEATURES.md)** - Feature documentation
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Code structure
- **[INSTALLATION.md](INSTALLATION.md)** - Installation steps
- **[SUMMARY.md](SUMMARY.md)** - Complete summary
- **[DOCS_INDEX.md](DOCS_INDEX.md)** - Documentation index

## 🎨 Ekran görkezişleri / Screenshots

Programma aşakdaky aýratynlyklary hödürleýär:
The app features:
- Arassaçylykly, häzirki zaman kartaly düzüliş / Clean, modern card-based layout
- Ýumşak animasiýalar / Smooth animations and transitions
- Intuitiw sene saýlaýjy / Intuitive date picker
- Owadan garaňky režim / Beautiful dark mode
- Material Design ýörelgeleri / Material Design principles

## 📱 Rugsat / Permissions

- **Bildirişler** - Doglan gün ýatlatmalary üçin / For birthday reminders
- **Faýl ulgamy** - TXT faýl import üçin / For importing TXT files

## 🔧 Kynçylyklary çözmek / Troubleshooting

Jikme-jik maglumat üçin / For detailed troubleshooting:
- **[SETUP.md](SETUP.md)** - English
- **[EXPO_BUILD_GUIDE.md](EXPO_BUILD_GUIDE.md)** - Türkmen dilinde

## 📄 Ygtyýarnama / License

MIT License - Şahsy ýa-da täjirçilik maksatlary üçin erkin ulanyp bilersiňiz.
MIT License - Free to use for personal or commercial purposes.

## 🤝 Goşant goşmak / Contributing

Goşantlar garşy alynýar! Meseleleri we pull request-leri ibermekden çekinmäň.
Contributions are welcome! Feel free to submit issues and pull requests.

---

**React Native we Expo bilen söýgi bilen döredildi ❤️**
**Built with ❤️ using React Native & Expo**

🎂 Doglan günleri hiç wagt ýatdan çykarmaň! 🎉
🎂 Never forget a birthday again! 🎉
