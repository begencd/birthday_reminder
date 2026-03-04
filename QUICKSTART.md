# 🚀 Birthday Reminder - Quick Start Guide

Get up and running in 5 minutes!

## ⚡ Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the app
npm start

# 3. Run on Android
npm run android
```

That's it! The app will launch on your Android device or emulator.

## 📱 Testing on Physical Device

### Option 1: Expo Go (Easiest - No Build Required)

1. Install **Expo Go** from Google Play Store
2. Run `npm start` in your project
3. Scan the QR code with Expo Go
4. App loads instantly!

### Option 2: Development Build

1. Connect your Android device via USB
2. Enable USB debugging in Developer Options
3. Run `npm run android`
4. App installs and launches automatically

## 🏗️ Building APK (Production)

### Quick Build with EAS

```bash
# Install EAS CLI
npm install -g eas-cli

# Login (create account at expo.dev if needed)
eas login

# Build APK
eas build --platform android --profile preview
```

Wait 10-15 minutes, then download your APK from the provided link!

## 📋 What You Get

✅ **Full-featured birthday reminder app**
- Add/Edit/Delete birthdays
- Smart notifications (birthday, reminder, monthly)
- Import from TXT files
- Dark/Light mode
- Beautiful Material Design UI

✅ **Production-ready code**
- TypeScript
- Clean architecture
- Reusable components
- Comprehensive error handling

✅ **Complete documentation**
- README.md - Overview
- SETUP.md - Detailed setup
- FEATURES.md - Feature documentation
- INSTALLATION.md - Installation guide
- PROJECT_STRUCTURE.md - Code structure

## 🎯 Key Features to Test

1. **Add Birthday**: Tap the + button
2. **Import File**: Use `sample-birthdays.txt` included in project
3. **Notifications**: Grant permissions when prompted
4. **Dark Mode**: Change system theme to see it switch
5. **Edit/Delete**: Tap icons on birthday cards

## 📁 Important Files

- `app/(tabs)/index.tsx` - Main screen
- `components/birthday-card.tsx` - Birthday card
- `components/birthday-form.tsx` - Add/Edit form
- `utils/notifications.ts` - Notification logic
- `utils/storage.ts` - Data persistence
- `sample-birthdays.txt` - Test import file

## 🔧 Common Commands

```bash
# Start development server
npm start

# Clear cache and start
npx expo start -c

# Run on Android
npm run android

# Check for issues
npx expo-doctor

# Build APK locally
npx expo prebuild --platform android
cd android && ./gradlew assembleRelease
```

## 🐛 Quick Troubleshooting

**Problem**: Dependencies won't install
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Problem**: Metro bundler errors
```bash
npx expo start -c
```

**Problem**: Notifications not working
- Grant notification permissions in app
- Check device notification settings
- Restart the app

**Problem**: Import not working
- Check file format: `Lastname_Firstname_DD.MM.YYYY`
- Ensure UTF-8 encoding
- One entry per line

## 📖 Need More Help?

- **Detailed Setup**: See `SETUP.md`
- **All Features**: See `FEATURES.md`
- **Installation**: See `INSTALLATION.md`
- **Code Structure**: See `PROJECT_STRUCTURE.md`

## 🎉 Sample Data

Use the included `sample-birthdays.txt` to test the import feature:

```
Atayew_Begenc_12.05.2001
Annayew_Myrat_03.11.1999
Smith_John_15.03.1995
Johnson_Emma_22.07.1998
Williams_Michael_08.12.1992
```

## ✨ Next Steps

1. ✅ Install dependencies
2. ✅ Run the app
3. ✅ Test all features
4. ✅ Import sample data
5. ✅ Build APK
6. ✅ Share with friends!

## 🌟 Pro Tips

- Use `npm start` and press `a` for Android
- Press `r` to reload the app during development
- Press `m` to toggle menu
- Use Expo Go for fastest testing
- Build with EAS for production APK

---

**Ready to go?** Run `npm install && npm start` and you're live! 🚀

For questions or issues, check the detailed documentation files.

Happy Birthday Tracking! 🎂🎉
