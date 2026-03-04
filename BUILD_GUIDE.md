# 🏗️ Birthday Reminder - Complete Build Guide

This guide covers everything you need to build a production-ready APK.

## 📋 Prerequisites Checklist

Before building, ensure you have:

- ✅ Node.js v18+ installed
- ✅ npm v9+ installed
- ✅ All dependencies installed (`npm install`)
- ✅ Android Studio (for local builds)
- ✅ JDK 17+ (for local builds)
- ✅ Expo account (for EAS builds)

## 🚀 Method 1: EAS Build (Recommended)

EAS (Expo Application Services) is the easiest and most reliable way to build production APKs.

### Advantages
- ✅ No local Android setup required
- ✅ Cloud-based building
- ✅ Automatic signing
- ✅ Consistent builds
- ✅ Easy to share

### Step-by-Step

#### 1. Install EAS CLI

```bash
npm install -g eas-cli
```

#### 2. Login to Expo

```bash
eas login
```

If you don't have an account:
- Go to https://expo.dev
- Sign up for free
- Return and run `eas login`

#### 3. Configure Project (First Time Only)

```bash
eas build:configure
```

This creates/updates `eas.json` with build profiles.

#### 4. Build APK

For testing/preview:
```bash
eas build --platform android --profile preview
```

For production:
```bash
eas build --platform android --profile production
```

#### 5. Wait for Build

- Build starts in Expo cloud
- First build: 10-20 minutes
- Subsequent builds: 5-10 minutes
- You'll get a link to track progress

#### 6. Download APK

- Click the link in terminal
- Or visit https://expo.dev/accounts/[your-account]/projects/birthday-reminder/builds
- Download the APK
- Install on Android device

### Build Profiles Explained

**Preview Profile** (`eas.json`):
```json
"preview": {
  "android": {
    "buildType": "apk"
  }
}
```
- Builds APK file
- For testing and distribution
- Can be installed directly

**Production Profile**:
```json
"production": {
  "android": {
    "buildType": "app-bundle"
  }
}
```
- Builds AAB (Android App Bundle)
- For Google Play Store
- Optimized size

## 🔨 Method 2: Local Build

Build APK on your local machine.

### Prerequisites

1. **Android Studio**
   - Download from https://developer.android.com/studio
   - Install with default settings
   - Open once to complete setup

2. **JDK 17+**
   - Check: `java -version`
   - Install if needed: https://adoptium.net/

3. **Environment Variables**
   ```bash
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

### Build Steps

#### 1. Generate Android Project

```bash
npx expo prebuild --platform android
```

This creates the `android/` directory with native code.

#### 2. Navigate to Android Directory

```bash
cd android
```

#### 3. Build Release APK

```bash
./gradlew assembleRelease
```

Or on Windows:
```bash
gradlew.bat assembleRelease
```

#### 4. Find Your APK

Location:
```
android/app/build/outputs/apk/release/app-release.apk
```

#### 5. Install APK

Transfer to device and install, or use:
```bash
adb install app/build/outputs/apk/release/app-release.apk
```

### Signing the APK

For production, you need to sign the APK.

#### Generate Keystore

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore birthday-reminder.keystore -alias birthday-reminder -keyalg RSA -keysize 2048 -validity 10000
```

#### Configure Gradle

Create `android/gradle.properties`:
```properties
MYAPP_UPLOAD_STORE_FILE=birthday-reminder.keystore
MYAPP_UPLOAD_KEY_ALIAS=birthday-reminder
MYAPP_UPLOAD_STORE_PASSWORD=your_password
MYAPP_UPLOAD_KEY_PASSWORD=your_password
```

Update `android/app/build.gradle`:
```gradle
android {
    ...
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

#### Build Signed APK

```bash
./gradlew assembleRelease
```

## 📦 Method 3: Expo Build (Legacy)

**Note**: This method is deprecated. Use EAS instead.

```bash
expo build:android
```

## 🎯 Build Optimization

### Reduce APK Size

1. **Enable ProGuard** (in `android/app/build.gradle`):
```gradle
buildTypes {
    release {
        minifyEnabled true
        shrinkResources true
        proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
    }
}
```

2. **Enable App Bundle**:
```bash
eas build --platform android --profile production
```
AAB is smaller than APK.

3. **Remove Unused Resources**:
- Delete unused images from `assets/`
- Optimize images (compress PNGs)

### Improve Performance

1. **Enable Hermes** (already enabled in Expo 54):
```json
// app.json
{
  "expo": {
    "jsEngine": "hermes"
  }
}
```

2. **Enable New Architecture**:
```json
// app.json
{
  "expo": {
    "newArchEnabled": true
  }
}
```

## 🧪 Testing the Build

### Before Building

1. **Test in Development**:
```bash
npm start
npm run android
```

2. **Test All Features**:
- Add/Edit/Delete birthdays
- Import from file
- Notifications
- Dark mode
- Pull to refresh

3. **Check Diagnostics**:
```bash
npx expo-doctor
```

### After Building

1. **Install APK on Device**:
```bash
adb install path/to/app-release.apk
```

2. **Test Production Build**:
- All features work
- Notifications appear
- No crashes
- Performance is good

3. **Test on Multiple Devices**:
- Different Android versions
- Different screen sizes
- Different manufacturers

## 📱 Distribution

### Direct Distribution

1. Upload APK to cloud storage (Google Drive, Dropbox)
2. Share link with users
3. Users download and install
4. May need to enable "Install from Unknown Sources"

### Google Play Store

1. Build AAB:
```bash
eas build --platform android --profile production
```

2. Create Google Play Console account
3. Create new app
4. Upload AAB
5. Fill in store listing
6. Submit for review

### Internal Testing

1. Use EAS Internal Distribution:
```bash
eas build --platform android --profile preview
```

2. Share build link with testers
3. Testers install via Expo Go or direct download

## 🐛 Troubleshooting Builds

### Build Fails: "Java not found"

**Solution**:
```bash
# Install JDK 17
sudo apt install openjdk-17-jdk  # Linux
brew install openjdk@17          # macOS

# Set JAVA_HOME
export JAVA_HOME=/path/to/jdk-17
```

### Build Fails: "Android SDK not found"

**Solution**:
```bash
# Install Android Studio
# Then set ANDROID_HOME
export ANDROID_HOME=$HOME/Android/Sdk
```

### Build Fails: "Gradle error"

**Solution**:
```bash
# Clean Gradle cache
cd android
./gradlew clean

# Rebuild
./gradlew assembleRelease
```

### EAS Build Fails

**Solution**:
```bash
# Check build logs
eas build:list

# Clear EAS cache
eas build --platform android --profile preview --clear-cache
```

### APK Won't Install

**Solution**:
- Enable "Install from Unknown Sources"
- Check Android version compatibility (5.0+)
- Ensure APK is not corrupted
- Try uninstalling old version first

## 📊 Build Comparison

| Method | Difficulty | Time | Requirements | Best For |
|--------|-----------|------|--------------|----------|
| EAS Build | Easy | 10-20 min | Expo account | Most users |
| Local Build | Hard | 5-10 min | Android Studio, JDK | Advanced users |
| Expo Build | Easy | 15-30 min | Expo account | Legacy projects |

## ✅ Pre-Release Checklist

Before distributing your APK:

- [ ] All features tested
- [ ] No console errors
- [ ] Notifications work
- [ ] File import works
- [ ] Dark mode works
- [ ] App doesn't crash
- [ ] Performance is good
- [ ] APK size is reasonable (<50MB)
- [ ] Version number updated
- [ ] App icon looks good
- [ ] Splash screen works
- [ ] Permissions are requested properly

## 🎉 Success!

You now have a production-ready APK of Birthday Reminder!

### Next Steps

1. Install on your device
2. Test thoroughly
3. Share with friends
4. Gather feedback
5. Iterate and improve

### Support

- **EAS Docs**: https://docs.expo.dev/build/introduction/
- **Android Docs**: https://developer.android.com/studio/build
- **Expo Forums**: https://forums.expo.dev/

---

Happy Building! 🚀
