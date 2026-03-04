# 📦 Gurnamak Görkezmeleri / Installation Instructions

## Çalt gurnamak / Quick Installation

```bash
# 1. Baglylyklary gurnamak / Install dependencies
npm install

# 2. Programmany başlatmak / Start the app
npm start

# 3. Android-da işletmek / Run on Android
npm run android
```

## Täze baglylyklar / New Dependencies

Bu wersiýada goşulan täze paketler:
New packages added in this version:

### Lokalizasiýa / Localization

- **i18n-js** (^4.4.3) - Lokalizasiýa ulgamy / Localization system
- **expo-localization** (~16.0.8) - Dil goldawy / Language support

### Gurnamak / Installation

```bash
npm install i18n-js@^4.4.3
npx expo install expo-localization
```

Ýa-da ähli baglylyklary birden:
Or install all dependencies at once:

```bash
npm install
```

## Doly baglylyklar sanawy / Full Dependencies List

### Önümçilik baglylyklary / Production Dependencies

```json
{
  "@expo/vector-icons": "^15.0.3",
  "@react-navigation/bottom-tabs": "^7.4.0",
  "@react-navigation/elements": "^2.6.3",
  "@react-navigation/native": "^7.1.8",
  "@react-native-async-storage/async-storage": "~2.2.0",
  "expo": "~54.0.33",
  "expo-constants": "~18.0.13",
  "expo-document-picker": "~13.0.5",
  "expo-file-system": "~18.0.11",
  "expo-font": "~14.0.11",
  "expo-haptics": "~15.0.8",
  "expo-image": "~3.0.11",
  "expo-linking": "~8.0.11",
  "expo-localization": "~16.0.8",
  "expo-notifications": "~0.30.5",
  "expo-router": "~6.0.23",
  "expo-splash-screen": "~31.0.13",
  "expo-status-bar": "~3.0.9",
  "expo-symbols": "~1.0.8",
  "expo-system-ui": "~6.0.9",
  "expo-web-browser": "~15.0.10",
  "i18n-js": "^4.4.3",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "react-native": "0.81.5",
  "react-native-gesture-handler": "~2.28.0",
  "react-native-reanimated": "~4.1.1",
  "react-native-safe-area-context": "~5.6.0",
  "react-native-screens": "~4.16.0",
  "react-native-web": "~0.21.0",
  "react-native-worklets": "0.5.1"
}
```

### Ösüş baglylyklary / Development Dependencies

```json
{
  "@types/react": "~19.1.0",
  "typescript": "~5.9.2",
  "eslint": "^9.25.0",
  "eslint-config-expo": "~10.0.0"
}
```

## Barlamak / Verification

### Gurnamany barlamak / Verify Installation

```bash
# Expo doctor işletmek / Run Expo doctor
npx expo-doctor

# Baglylyklary barlamak / Check dependencies
npm list i18n-js
npm list expo-localization
```

### Lokalizasiýany barlamak / Verify Localization

1. Programmany başladyň / Start the app:
```bash
npm start
```

2. Esasy ekranda "🎉 Doglan günler" görmelidir
   You should see "🎉 Doglan günler" on the home screen

3. Forma türkmen dilinde bolmaly
   The form should be in Turkmen language

## Kynçylyklary çözmek / Troubleshooting

### Baglylyklar gurulmaýar / Dependencies Won't Install

```bash
# Keşi arassalamak / Clear cache
npm cache clean --force

# node_modules pozmak / Remove node_modules
rm -rf node_modules package-lock.json

# Täzeden gurnamak / Reinstall
npm install
```

### i18n-js tapylmaýar / i18n-js Not Found

```bash
# Göni gurnamak / Install directly
npm install i18n-js@^4.4.3

# Ýa-da / Or
npm install --legacy-peer-deps
```

### expo-localization tapylmaýar / expo-localization Not Found

```bash
# Expo install bilen / With Expo install
npx expo install expo-localization

# Ýa-da göni / Or directly
npm install expo-localization@~16.0.8
```

### TypeScript ýalňyşlyklary / TypeScript Errors

```bash
# Type definitions täzelemek / Update type definitions
npm install --save-dev @types/react@~19.1.0

# Täzeden gurnamak / Reinstall
rm -rf node_modules && npm install
```

## Wersiýa barlagy / Version Check

### Node.js wersiýasy / Node.js Version

```bash
node --version
# Gerek: v18.0.0 ýa-da has täze / Required: v18.0.0 or higher
```

### npm wersiýasy / npm Version

```bash
npm --version
# Gerek: v9.0.0 ýa-da has täze / Required: v9.0.0 or higher
```

### Expo CLI wersiýasy / Expo CLI Version

```bash
npx expo --version
# Gerek: Iň täze wersiýa / Required: Latest version
```

## Täze taslama üçin / For New Project

Eger täze taslama döredýän bolsaňyz:
If you're creating a new project:

```bash
# Taslama döretmek / Create project
npx create-expo-app@latest birthday-reminder

# Bukja girmek / Enter directory
cd birthday-reminder

# Baglylyklary gurnamak / Install dependencies
npm install

# Täze baglylyklary goşmak / Add new dependencies
npm install i18n-js@^4.4.3
npx expo install expo-localization
```

## Täzeleme / Update

Eger öňki wersiýadan täzelenýän bolsaňyz:
If you're updating from a previous version:

```bash
# Täze baglylyklary goşmak / Add new dependencies
npm install i18n-js@^4.4.3
npx expo install expo-localization

# Ähli baglylyklary täzelemek / Update all dependencies
npx expo install --fix

# Keşi arassalamak / Clear cache
npx expo start -c
```

## Synag / Testing

### Gurnamany synag etmek / Test Installation

```bash
# Programmany başlatmak / Start the app
npm start

# Android-da synag etmek / Test on Android
npm run android

# Diagnostika / Diagnostics
npx expo-doctor
```

### Lokalizasiýany synag etmek / Test Localization

1. Programmany açyň / Open the app
2. Türkmen dilini barlaň / Check Turkmen language
3. Bildirişleri synag ediň / Test notifications
4. Import funksiýasyny synag ediň / Test import function

## Goldaw / Support

### Resurslar / Resources

- **Expo Docs**: https://docs.expo.dev
- **i18n-js Docs**: https://github.com/fnando/i18n-js
- **React Native Docs**: https://reactnative.dev

### Kömek / Help

Soraglar üçin:
For questions:

1. Resminamalary barlaň / Check documentation
2. `npx expo-doctor` işlediň / Run `npx expo-doctor`
3. Expo forumlarynda soraň / Ask on Expo forums

---

**Bellik / Note**: Ähli baglylyklar dogry gurulandan soň, programma türkmen dilinde işlemäge taýýar!
After all dependencies are properly installed, the app is ready to run in Turkmen language! 🇹🇲
