# 🚀 Häzir Gurmak / Build Now

## Çalt ädimler / Quick Steps

### 1. EAS CLI guruldy ✅
EAS CLI is now installed!

```bash
eas --version
# eas-cli/18.0.6
```

### 2. Expo hasabyna girmek / Login to Expo

Iki usul bar / Two options:

#### Usul A: Hasabyňyz bar bolsa / If you have an account

```bash
eas login
```

Soňra siziň email we parolyňyzy sorar.
It will ask for your email and password.

#### Usul B: Täze hasap döretmek / Create new account

1. Brauzerde açyň / Open in browser:
   ```
   https://expo.dev/signup
   ```

2. Hasap dörediň (mugt!) / Create account (free!)
   - Email giriziň / Enter email
   - Parol dörediň / Create password
   - Tassyklaň / Confirm

3. Soňra giriň / Then login:
   ```bash
   eas login
   ```

### 3. Taslama sazlamak / Configure Project

`app.json` faýlynda `owner` meýdançasyny üýtgediň:
Update the `owner` field in `app.json`:

```json
{
  "expo": {
    "owner": "siziň-expo-ulanyjy-adyňyz"
  }
}
```

Mysal / Example:
```json
{
  "expo": {
    "owner": "begenc-dev"
  }
}
```

### 4. Ilkinji gurluş / First Build

```bash
# Synag gurluşy / Preview build
eas build --platform android --profile preview
```

Ýa-da önümçilik gurluşy / Or production build:
```bash
eas build --platform android --profile production
```

### 5. Garaşmak / Wait

- Gurluş 10-15 minut alar / Build takes 10-15 minutes
- Terminal size baglanyşyk berer / Terminal will give you a link
- Baglanyşygy açyň we göçürip alyň / Open link and download

## Jikme-jik görkezmeler / Detailed Instructions

### Ädim 1: Girmek / Step 1: Login

```bash
eas login
```

Soraglar / Prompts:
```
Email or username: siziň-email@example.com
Password: ********
```

Üstünlikli giriş / Successful login:
```
✔ Logged in as your-username
```

### Ädim 2: Taslama barlamak / Step 2: Verify Project

```bash
# Häzirki bukjada bolmagyňyzy barlaň
# Make sure you're in the project directory
pwd

# Taslama faýllaryny barlaň
# Check project files
ls -la app.json eas.json
```

### Ädim 3: Owner goşmak / Step 3: Add Owner

`app.json` faýlyny açyň we `owner` goşuň:

```json
{
  "expo": {
    "name": "Doglan Gün Ýatlatma",
    "slug": "birthday-reminder",
    "version": "1.0.0",
    "owner": "siziň-ulanyjy-adyňyz",  // ← Bu setiri goşuň / Add this line
    ...
  }
}
```

### Ädim 4: Gurluş başlatmak / Step 4: Start Build

#### Synag üçin / For testing:
```bash
eas build --platform android --profile preview
```

#### Önümçilik üçin / For production:
```bash
eas build --platform android --profile production
```

### Ädim 5: Gurluşy yzarlamak / Step 5: Monitor Build

Terminal size şeýle baglanyşyk berer:
Terminal will show a link like:

```
✔ Build started, it may take a few minutes to complete.

You can monitor the build at:
https://expo.dev/accounts/[hasap]/projects/birthday-reminder/builds/[id]
```

Bu baglanyşygy açyň we gurluşy yzarlaň!
Open this link to monitor the build!

### Ädim 6: APK göçürip almak / Step 6: Download APK

Gurluş tamamlanandan soň:
When build completes:

1. Baglanyşygy açyň / Open the link
2. "Download" düwmesine basyň / Click "Download" button
3. APK faýly göçürip alnar / APK file will download
4. Faýl ady: `build-[id].apk`

## Gurluş profilleri / Build Profiles

### Preview (Maslahat berilýär / Recommended)
```bash
eas build --platform android --profile preview
```
- Çalt gurluş / Fast build
- Synag üçin / For testing
- Paýlaşyp bolýar / Shareable

### Production (Önümçilik)
```bash
eas build --platform android --profile production
```
- Doly gurluş / Full build
- Paýlaşmak üçin / For distribution
- Optimizasiýa edilen / Optimized

### Development (Ösüş)
```bash
eas build --platform android --profile development
```
- Ösüş üçin / For development
- Debug bilen / With debugging

## Kynçylyklar / Troubleshooting

### "Not logged in" ýalňyşlygy

```bash
eas login
```

### "Owner not found" ýalňyşlygy

`app.json` faýlynda `owner` meýdançasyny barlaň:
Check the `owner` field in `app.json`:

```json
{
  "expo": {
    "owner": "dogry-ulanyjy-ady"
  }
}
```

### "Build failed" ýalňyşlygy

```bash
# Keşi arassalamak we täzeden synag etmek
# Clear cache and retry
eas build --platform android --profile preview --clear-cache
```

### Gurluş gaty haýal

Ilkinji gurluş 15-20 minut alyp biler.
First build can take 15-20 minutes.

Soňky gurluşlar has çalt (5-10 minut).
Subsequent builds are faster (5-10 minutes).

## Gurluşdan soň / After Build

### APK gurmak / Install APK

1. APK faýlyny telefona geçiriň / Transfer APK to phone
2. Faýl dolandyryjysynda açyň / Open in file manager
3. "Install" basyň / Tap "Install"
4. "Unknown sources" rugsat beriň / Allow "Unknown sources"
5. Programma gurlar / App will install

### Paýlaşmak / Share

Baglanyşygy paýlaşyň:
Share the link:

```
https://expo.dev/accounts/[hasap]/projects/birthday-reminder/builds/[id]
```

Adamlar bu baglanyşykdan göçürip alyp bilerler!
People can download from this link!

## Peýdaly komandlar / Useful Commands

```bash
# Giriş barlamak / Check login
eas whoami

# Gurluş sanawyny görmek / List builds
eas build:list

# Gurluş statusyny barlamak / Check build status
eas build:view [build-id]

# Çykmak / Logout
eas logout

# Kömek / Help
eas build --help
```

## Indiki ädimler / Next Steps

1. ✅ EAS CLI guruldy / EAS CLI installed
2. ⏳ Expo hasabyna giriň / Login to Expo
3. ⏳ `app.json` faýlynda owner goşuň / Add owner in app.json
4. ⏳ Gurluş başladyň / Start build
5. ⏳ APK göçürip alyň / Download APK
6. ⏳ Paýlaşyň! / Share!

## Kömek / Help

### Resurslar / Resources

- **EAS Docs**: https://docs.expo.dev/build/introduction/
- **Expo Dashboard**: https://expo.dev
- **Expo Forums**: https://forums.expo.dev

### Soraglar / Questions

1. Hasap döretmek / Create account: https://expo.dev/signup
2. Giriş meseleleri / Login issues: `eas login --help`
3. Gurluş meseleleri / Build issues: `eas build --help`

---

## Çalt başlamak / Quick Start

```bash
# 1. Girmek / Login
eas login

# 2. Owner goşmak (app.json faýlynda)
# Add owner (in app.json)

# 3. Gurmak / Build
eas build --platform android --profile preview

# 4. Garaşmak we göçürip almak / Wait and download
```

**Üstünlik! Programmaňyz taýýar! 🎉**
**Success! Your app is ready! 🎉**
