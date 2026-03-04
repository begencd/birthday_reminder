# 🚀 Gurnamak Gollanmasy - Türkmen Dilinde

## Barada

Bu gollanma programmany nädip gurnamalydygyny we ulanmalydygyny düşündirýär.

## Taýýynlyk

### Gerek bolan programma üpjünçiligi

- **Node.js**: v18.0.0 ýa-da has täze
- **npm**: v9.0.0 ýa-da has täze
- **Android Studio**: Iň täze wersiýa
- **Expo CLI**: Awtomatik gurular

## Gurnamak ädimleri

### 1-nji ädim: Baglylyklary gurnamak

Taslama bukjasyny açyň we şu komandany işlediň:

```bash
npm install
```

Bu ähli zerur paketleri gurnar:
- React Native 0.81.5
- Expo SDK 54
- TypeScript
- i18n-js (lokalizasiýa üçin)
- expo-localization (dil goldawy üçin)
- AsyncStorage
- Expo Notifications
- Beýleki baglylyklar

### 2-nji ädim: Gurnamany barlamak

```bash
npx expo-doctor
```

Bu komanda umumy meseleleri barlaýar we düzedişleri teklip edýär.

## Programmany işletmek

### Usul 1: Expo Go bilen (Iň aňsat)

1. Android enjamyňyzda Google Play Store-dan Expo Go gurnaň

2. Ösüş serwerini başladyň:
```bash
npm start
```

3. Expo Go programmasy bilen QR kody skan ediň

### Usul 2: Android Emulator bilen

1. Android Studio-ny açyň we emulator başladyň

2. Şu komandany işlediň:
```bash
npm run android
```

Programma awtomatik gurlar we açylar.

### Usul 3: Fiziki enjam bilen (USB Debug)

1. Android enjamyňyzda USB debugging-i açyň

2. Enjamy USB arkaly birikdiriň

3. Şu komandany işlediň:
```bash
npm run android
```

## Türkmen dilini barlamak

### Programma açylanda

1. Programmany işe giriziň
2. Esasy ekranda "🎉 Doglan günler" görmelidir
3. "+" düwmesine basyň
4. Forma türkmen dilinde bolmaly:
   - "Ady"
   - "Familiýasy"
   - "Doglan senesi"

### Bildirişleri barlamak

1. Doglan gün goşuň
2. Bildiriş rugsat beriň
3. Bildirişler türkmen dilinde geler:
   - "🎉 Şu gün doglan gün!"
   - "🎂 Ertir doglan gün!"

### Import funksiýasyny barlamak

1. `sample-birthdays.txt` faýlyny ulanyň
2. Sag ýokarky burçdaky ýüklemek düwmesine basyň
3. Faýly saýlaň
4. Üstünlik habary türkmen dilinde görkeziler

## APK gurmak

### EAS Build bilen (Maslahat berilýär)

#### 1. EAS CLI gurnamak

```bash
npm install -g eas-cli
```

#### 2. Expo hasabyna girmek

```bash
eas login
```

Eger hasabyňyz ýok bolsa:
- https://expo.dev saýtyna gidiň
- Mugt hasap dörediň
- Yzyna dolanyp `eas login` işlediň

#### 3. Taslama sazlamak

`app.json` faýlynda `owner` meýdançasyny üýtgediň:

```json
{
  "expo": {
    "owner": "siziň-expo-ulanyjy-adyňyz"
  }
}
```

#### 4. APK gurmak

Synag üçin:
```bash
eas build --platform android --profile preview
```

Önümçilik üçin:
```bash
eas build --platform android --profile production
```

#### 5. Göçürip almak

- Gurluş 10-15 minut alar
- Terminal size baglanyşyk berer
- Baglanyşygy açyň we APK göçürip alyň
- Ýa-da https://expo.dev/accounts/[hasap]/builds saýtyna gidiň

## Expo Build sahypasyndan göçürip almak

### 1. Gurluş dörediň

```bash
eas build --platform android --profile production
```

### 2. Expo sahypasyna gidiň

1. https://expo.dev saýtyna giriň
2. Hasabyňyza giriň
3. "Projects" → "birthday-reminder" → "Builds"

### 3. APK göçürip alyň

1. Gurluş tamamlanmagyna garaşyň (10-15 minut)
2. "Download" düwmesine basyň
3. APK faýly göçürip alnar

### 4. Paýlaşyň

Baglanyşygy paýlaşyň:
```
https://expo.dev/accounts/[hasap]/projects/birthday-reminder/builds/[id]
```

Adamlar bu baglanyşykdan göçürip alyp bilerler!

## Programmany gurmak

### Android enjamda

1. APK faýlyny telefona geçiriň
2. Faýl dolandyryjysynda açyň
3. "Install" basyň
4. "Unknown sources" rugsat beriň (gerek bolsa)
5. Programma gurlar

### ADB arkaly

```bash
adb install path/to/app.apk
```

## Aýratynlyklary synag etmek

### 1. Doglan gün goşmak

1. "+" düwmesine basyň
2. Ady we familiýany giriziň
3. Senäni saýlaň
4. "Ýatda sakla" basyň

### 2. Faýl import

1. Sag ýokarky burçdaky ýüklemek düwmesine basyň
2. `sample-birthdays.txt` faýlyny saýlaň
3. Doglan günler import edilýär

### 3. Bildirişler

1. Bildiriş rugsat beriň
2. Doglan gün goşuň
3. Bildirişler meýilleşdiriler

### 4. Garaňky režim

1. Enjamyň ulgam sazlamalaryna gidiň
2. Garaňky režimi açyň
3. Programma awtomatik üýtgär

## Kynçylyklary çözmek

### "npm install" işlemeýär

**Çözgüt**:
```bash
# npm keşini arassalamak
npm cache clean --force

# node_modules we package-lock.json pozmak
rm -rf node_modules package-lock.json

# Täzeden gurnamak
npm install
```

### Metro bundler ýalňyşlyklary

**Çözgüt**:
```bash
# Metro keşini arassalamak
npx expo start -c
```

### Bildirişler işlemeýär

**Çözgütler**:
1. Enjam sazlamalarynda bildiriş rugsat barlaň
2. Programmanyň batareýa optimizasiýasynda däldigini barlaň
3. Rugsat berensoň programmany täzeden başladyň

### Import faýl işlemeýär

**Çözgütler**:
1. Faýl formatyny barlaň: `Familiýa_At_GG.AA.ÝÝÝÝ`
2. Her ýazgynyň täze setirde bolmagyny barlaň
3. Artykmaç boşluklaryň ýa-da aýratyn nyşanlaryň ýokdugyny barlaň
4. Faýl üçin UTF-8 kodlamasyny ulanyň

### Gurluş şowsuz bolýar

**Çözgüt**:
```bash
# EAS CLI täzelemek
npm install -g eas-cli@latest

# Hasaby barlamak
eas whoami

# Keş bilen täzeden synag etmek
eas build --platform android --profile preview --clear-cache
```

## Ösüş komandlary

```bash
# Ösüş serwerini başlatmak
npm start

# Keş bilen başlatmak
npx expo start -c

# Android-da işletmek
npm run android

# Meseleleri barlamak
npx expo-doctor

# Baglylyklary täzelemek
npx expo install --fix
```

## Lokalizasiýa

### Türkmen dilini üýtgetmek

`utils/i18n.ts` faýlynda:

```typescript
i18n.locale = 'tk';  // Türkmen (esasy)
i18n.locale = 'en';  // Iňlis (ätiýaçlyk)
```

### Täze terjime goşmak

1. `locales/tk.json` faýlyna açar goşuň:
```json
{
  "mySection": {
    "myKey": "Meniň tekstim"
  }
}
```

2. Kodda ulanyň:
```typescript
import i18n from '../utils/i18n';
const text = i18n.t('mySection.myKey');
```

Jikme-jik maglumat üçin:
**[TURKMEN_LOCALIZATION.md](TURKMEN_LOCALIZATION.md)**

## Goldaw

### Resurslar

- **Expo Docs**: https://docs.expo.dev
- **React Native Docs**: https://reactnative.dev
- **EAS Build**: https://docs.expo.dev/build/introduction/

### Kömek gerek bolsa

1. Bu gollanmany barlaň
2. `npx expo-doctor` işlediň
3. Expo forumlarynda soraň
4. GitHub issue dörediň

## Indiki ädimler

Gurnamadan soň:
1. ✅ Ähli aýratynlyklary synag ediň
2. ✅ `sample-birthdays.txt` import ediň
3. ✅ Bildirişleri barlaň
4. ✅ Garaňky režimi synag ediň
5. ✅ APK guruň
6. ✅ Dostlaryňyz bilen paýlaşyň!

---

**Bellik**: Bu programma doly türkmen dilinde işleýär we Expo Build arkaly aňsatlyk bilen paýlaşylyp bilner! 🇹🇲 📱
