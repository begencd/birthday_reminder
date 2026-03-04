# ✅ Gurluşa Taýýar / Ready to Build

## Häzirki ýagdaý / Current Status

### ✅ Tamamlanan / Completed

1. ✅ **EAS CLI guruldy** / EAS CLI installed
   ```bash
   eas --version
   # eas-cli/18.0.6
   ```

2. ✅ **Taslama sazlandy** / Project configured
   - `app.json` - owner: "begenchdev"
   - `eas.json` - Build profiles configured
   - `package.json` - Build scripts added

3. ✅ **Türkmen dili** / Turkmen language
   - Doly lokalizasiýa / Full localization
   - Ähli tekstler terjime edildi / All text translated

### ⏳ Indiki ädim / Next Step

**Expo hasabyna girmek gerek!**
**You need to login to Expo!**

```bash
eas login
```

## Çalt başlamak / Quick Start

### Hasabyňyz bar bolsa / If you have an account

```bash
# 1. Girmek / Login
eas login

# 2. Gurmak / Build
npm run build:android

# 3. Garaşmak (10-15 minut) / Wait (10-15 minutes)

# 4. Göçürip almak / Download
# Terminal size baglanyşyk berer
# Terminal will give you a link
```

### Hasabyňyz ýok bolsa / If you don't have an account

```bash
# 1. Hasap döretmek / Create account
# Brauzerde açyň / Open in browser:
https://expo.dev/signup

# 2. Girmek / Login
eas login

# 3. Gurmak / Build
npm run build:android
```

## Gurluş komandlary / Build Commands

```bash
# Synag üçin (maslahat berilýär) / For testing (recommended)
npm run build:android

# Önümçilik üçin / For production
npm run build:production

# Keş bilen / With cache clear
eas build --platform android --profile preview --clear-cache
```

## Gurluş prosesi / Build Process

### 1. Gurluş başlaýar / Build starts
```
✔ Build started, it may take a few minutes to complete.

You can monitor the build at:
https://expo.dev/accounts/begenchdev/projects/birthday-reminder/builds/[id]
```

### 2. Gurluş işlenýär / Build in progress
- Wagt: 10-15 minut / Time: 10-15 minutes
- Status: "In Progress"
- Baglanyşykdan yzarlaň / Monitor via link

### 3. Gurluş tamamlandy / Build completed
- Status: "Finished"
- "Download" düwmesi peýda bolýar / "Download" button appears
- APK göçürip alyň / Download APK

## APK paýlaşmak / Share APK

### Usul 1: Baglanyşyk / Method 1: Link
```
https://expo.dev/accounts/begenchdev/projects/birthday-reminder/builds/[id]
```
Bu baglanyşygy paýlaşyň!
Share this link!

### Usul 2: Faýl / Method 2: File
APK faýlyny göni paýlaşyň:
Share APK file directly:
- Google Drive
- Telegram
- WhatsApp
- Email

### Usul 3: QR Kod / Method 3: QR Code
Expo sahypasynda QR kod bar.
QR code available on Expo page.

## Peýdaly baglanyşyklar / Useful Links

### Siziň taslamaňyz / Your project
```
https://expo.dev/accounts/begenchdev/projects/birthday-reminder
```

### Gurluşlar / Builds
```
https://expo.dev/accounts/begenchdev/projects/birthday-reminder/builds
```

### Expo Dashboard
```
https://expo.dev
```

## Kynçylyklary çözmek / Troubleshooting

### "Not logged in"
```bash
eas login
```

### "Owner not found"
`app.json` faýlynda owner barlaň:
Check owner in `app.json`:
```json
{
  "expo": {
    "owner": "begenchdev"
  }
}
```

### "Build failed"
```bash
# Keşi arassalamak / Clear cache
eas build --platform android --profile preview --clear-cache

# Logları barlamak / Check logs
eas build:view [build-id]
```

### Gurluş gaty haýal / Build too slow
Ilkinji gurluş 15-20 minut alyp biler.
First build can take 15-20 minutes.

## Statusy barlamak / Check Status

```bash
# Giriş barlamak / Check login
eas whoami

# Gurluşlary görmek / List builds
eas build:list

# Iň soňky gurluş / Latest build
eas build:list --limit 1

# Gurluş jikme-jiklikleri / Build details
eas build:view [build-id]
```

## Resminamalar / Documentation

### Türkmen dilinde / In Turkmen
- **[BUILD_NOW.md](BUILD_NOW.md)** - Jikme-jik görkezmeler
- **[EXPO_BUILD_GUIDE.md](EXPO_BUILD_GUIDE.md)** - Doly gollanma
- **[SETUP_TURKMEN.md](SETUP_TURKMEN.md)** - Gurnamak gollanmasy
- **[QUICK_BUILD.md](QUICK_BUILD.md)** - Çalt salgylanma

### English
- **[BUILD_GUIDE.md](BUILD_GUIDE.md)** - Complete build guide
- **[SETUP.md](SETUP.md)** - Setup guide

## Indiki ädimler / Next Steps

1. ⏳ **Girmek** / Login
   ```bash
   eas login
   ```

2. ⏳ **Gurmak** / Build
   ```bash
   npm run build:android
   ```

3. ⏳ **Göçürip almak** / Download
   Baglanyşykdan APK göçürip alyň
   Download APK from the link

4. ⏳ **Gurmak** / Install
   APK faýlyny telefonda açyň
   Open APK file on phone

5. ⏳ **Paýlaşmak** / Share
   Baglanyşygy dostlaryňyz bilen paýlaşyň
   Share link with friends

## Kömek / Help

Soraglar üçin:
For questions:

1. **[BUILD_NOW.md](BUILD_NOW.md)** - Doly görkezmeler / Full instructions
2. **Expo Forums**: https://forums.expo.dev
3. **EAS Docs**: https://docs.expo.dev/build/introduction/

---

## Çalt komandlar / Quick Commands

```bash
# Girmek / Login
eas login

# Gurmak / Build
npm run build:android

# Status / Status
eas build:list

# Kömek / Help
eas build --help
```

**Taýýar! Indi gurluş başlaň! 🚀**
**Ready! Start building now! 🚀**
