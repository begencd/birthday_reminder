# 📱 Expo Build Gollanmasy - Programmany Göçürip almak

## Barada

Bu gollanma Expo Build sahypasyndan programmany nädip göçürip almalydygyny düşündirýär.

## EAS Build Konfigurasiýasy

Programma Expo Application Services (EAS) arkaly gurulýar. Bu size programmany bulutda gurmaga we göçürip almaga mümkinçilik berýär.

## Ilkinji gezek sazlamak

### 1. Expo hasaby dörediň

```bash
# Expo hasaby bar bolsa
eas login

# Täze hasap döretmek üçin
# https://expo.dev saýtyna gidiň we hasap dörediň
```

### 2. Taýýynlyk

`app.json` faýlynda `owner` meýdançasyny üýtgediň:

```json
{
  "expo": {
    "owner": "siziň-expo-ulanyjy-adyňyz"
  }
}
```

## Programma gurmak

### Önümçilik APK gurmak

```bash
eas build --platform android --profile production
```

Bu komanda:
1. Kodyňyzy Expo bulutyna ýükleýär
2. Android APK gurýar
3. Göçürip almak üçin baglanyşyk berýär

### Synag APK gurmak

```bash
eas build --platform android --profile preview
```

Bu has çalt we synag üçin amatly.

### Ösüş APK gurmak

```bash
eas build --platform android --profile development
```

Bu ösüş üçin aýratyn gurluş.

## Gurluş profilleri

### Production (Önümçilik)
- **Ulanylyşy**: Google Play Store üçin
- **Faýl görnüşi**: APK
- **Paýlaşyş**: Internal (içerki)
- **Wagt**: 10-15 minut

### Preview (Synag)
- **Ulanylyşy**: Synag we paýlaşmak üçin
- **Faýl görnüşi**: APK
- **Paýlaşyş**: Internal (içerki)
- **Wagt**: 10-15 minut

### Development (Ösüş)
- **Ulanylyşy**: Ösüş we debug üçin
- **Faýl görnüşi**: APK
- **Paýlaşyş**: Internal (içerki)
- **Wagt**: 10-15 minut

## Programmany göçürip almak

### 1. Gurluş başlady

Komanda işledenden soň, terminal size baglanyşyk berer:

```
✔ Build started, it may take a few minutes to complete.

You can monitor the build at:
https://expo.dev/accounts/[hasap]/projects/birthday-reminder/builds/[id]
```

### 2. Gurluş sahypasyna gidiň

Baglanyşygy açyň ýa-da:
1. https://expo.dev saýtyna gidiň
2. Hasabyňyza giriň
3. "Projects" bölümine gidiň
4. "birthday-reminder" saýlaň
5. "Builds" bölümine gidiň

### 3. Gurluş tamamlanmagyna garaşyň

Gurluş statusy:
- 🟡 **In Queue** - Nobatda
- 🔵 **In Progress** - Işlenýär
- 🟢 **Finished** - Tamamlandy
- 🔴 **Failed** - Şowsuz boldy

### 4. APK göçürip alyň

Gurluş tamamlanandan soň:
1. "Download" düwmesine basyň
2. APK faýly göçürip alnar
3. Faýl ady: `build-[id].apk`

## Programmany gurmak

### Android enjamda

1. APK faýlyny telefona geçiriň
2. Faýl dolandyryjysynda açyň
3. "Install" basyň
4. "Unknown sources" rugsat beriň (gerek bolsa)
5. Programma gurlar

### ADB arkaly

```bash
adb install build-[id].apk
```

## Programmany paýlaşmak

### 1. Göni baglanyşyk

Expo size paýlaşmak üçin baglanyşyk berýär:

```
https://expo.dev/accounts/[hasap]/projects/birthday-reminder/builds/[id]
```

Bu baglanyşygy paýlaşyň, adamlar göçürip alyp bilýärler.

### 2. QR kod

Expo sahypasynda QR kod bar. Ony skan edip, göçürip alyp bilerler.

### 3. Faýl paýlaşmak

APK faýlyny göni paýlaşyň:
- Google Drive
- Dropbox
- Telegram
- WhatsApp

## Gurluş sazlamalary

### app.json

```json
{
  "expo": {
    "name": "Doglan Gün Ýatlatma",
    "slug": "birthday-reminder",
    "version": "1.0.0",
    "owner": "siziň-ulanyjy-adyňyz",
    "android": {
      "package": "com.birthdayreminder.app"
    }
  }
}
```

### eas.json

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

## Gurluş statusyny barlamak

### Komanda arkaly

```bash
eas build:list
```

Bu ähli gurluşlaryň sanawyny görkezýär.

### Sahypa arkaly

1. https://expo.dev/accounts/[hasap]/builds
2. Ähli gurluşlary görüň
3. Statusy barlaň
4. Göçürip alyň

## Täze wersiýa çykarmak

### 1. Wersiýa belgisini täzeläň

`app.json` faýlynda:

```json
{
  "expo": {
    "version": "1.0.1"
  }
}
```

### 2. Täze gurluş dörediň

```bash
eas build --platform android --profile production
```

### 3. Paýlaşyň

Täze APK baglanyşygyny paýlaşyň.

## Meşhur soraglar

### Gurluş näçe wagt alýar?

Ilkinji gurluş: 15-20 minut
Soňky gurluşlar: 10-15 minut

### Gurluş şowsuz boldy, näme etmeli?

1. Gurluş loglaryna serediň
2. Ýalňyşlygy düzediň
3. Täzeden synag ediň

```bash
eas build --platform android --profile preview --clear-cache
```

### APK gurulmaýar, näme etmeli?

1. EAS CLI täzeläň:
```bash
npm install -g eas-cli@latest
```

2. Hasabyňyzy barlaň:
```bash
eas whoami
```

3. Täzeden synag ediň

### Gurluş baglanyşygy işlemeýär?

1. Hasabyňyza giriň
2. Builds sahypasyna gidiň
3. Göni göçürip alyň

## Maslahatlar

### ✅ Ilkinji gezek

1. Preview profili bilen başlaň
2. Synag ediň
3. Soňra production gurluş dörediň

### ✅ Çalt gurluş

```bash
# Keş arassalamak
eas build --platform android --profile preview --clear-cache

# Lokal gurluş (has çalt)
npx expo prebuild
cd android && ./gradlew assembleRelease
```

### ✅ Paýlaşmak

1. Expo baglanyşygyny ulanyň
2. QR kod paýlaşyň
3. APK faýlyny göni paýlaşyň

## Goldaw

### Resmi resurslar

- **EAS Docs**: https://docs.expo.dev/build/introduction/
- **Expo Forums**: https://forums.expo.dev/
- **Discord**: https://chat.expo.dev/

### Ýalňyşlyklar

Eger ýalňyşlyk ýüze çyksa:
1. Gurluş loglaryna serediň
2. Expo forumlarynda soraň
3. GitHub issue dörediň

---

**Bellik**: Bu programma Expo Build arkaly aňsatlyk bilen gurulýar we paýlaşylýar! 📱
