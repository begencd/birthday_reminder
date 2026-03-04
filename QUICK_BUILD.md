# ⚡ Çalt Gurluş / Quick Build

## 3 Ädim / 3 Steps

### 1️⃣ Girmek / Login
```bash
eas login
```

### 2️⃣ Gurmak / Build
```bash
npm run build:android
```

### 3️⃣ Göçürip almak / Download
Baglanyşygy açyň we APK göçürip alyň!
Open the link and download APK!

---

## Doly komandlar / Full Commands

```bash
# Synag gurluşy / Preview build
npm run build:android

# Önümçilik gurluşy / Production build
npm run build:production

# Ýa-da göni / Or directly
eas build --platform android --profile preview
eas build --platform android --profile production
```

## Statusy barlamak / Check Status

```bash
# Giriş barlamak / Check login
eas whoami

# Gurluşlary görmek / View builds
eas build:list

# Wersiýa / Version
eas --version
```

## Kynçylyk bar? / Having Issues?

Jikme-jik gollanma / Detailed guide:
- **[BUILD_NOW.md](BUILD_NOW.md)** - Doly görkezmeler / Full instructions
- **[EXPO_BUILD_GUIDE.md](EXPO_BUILD_GUIDE.md)** - Türkmen dilinde / In Turkmen

---

**Bellik / Note**: Ilkinji gezek `eas login` işletmelidir!
You must run `eas login` first time!
