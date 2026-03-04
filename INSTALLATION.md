# Birthday Reminder - Installation Guide

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Android Studio (for Android development)
- Expo CLI

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

This will start the Expo development server. You can then:
- Press `a` to open on Android emulator
- Scan QR code with Expo Go app on your physical device

### 3. Run on Android

```bash
npm run android
```

## Building APK

### Option 1: Using EAS Build (Recommended)

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure build:
```bash
eas build:configure
```

4. Build APK:
```bash
eas build --platform android --profile preview
```

The APK will be available for download from the Expo dashboard.

### Option 2: Local Build

1. Generate Android project:
```bash
npx expo prebuild --platform android
```

2. Build APK:
```bash
cd android
./gradlew assembleRelease
```

The APK will be located at: `android/app/build/outputs/apk/release/app-release.apk`

## Permissions

The app requires the following permissions:
- Notifications (for birthday reminders)
- Storage (for importing TXT files)

These are automatically requested when needed.

## Importing Birthdays

1. Create a TXT file with the format:
```
Lastname_Firstname_DD.MM.YYYY
```

Example:
```
Atayew_Begenc_12.05.2001
Annayew_Myrat_03.11.1999
Smith_John_15.03.1995
```

2. In the app, tap the upload icon in the top right
3. Select your TXT file
4. Birthdays will be automatically imported

## Features

- ✅ Add/Edit/Delete birthdays
- ✅ Calendar date picker
- ✅ Notifications at 00:00 on birthday
- ✅ Reminder 1 day before
- ✅ Monthly summary of upcoming birthdays
- ✅ Import from TXT file
- ✅ Dark/Light mode support
- ✅ Material Design UI
- ✅ AsyncStorage for data persistence

## Troubleshooting

### Notifications not working
- Make sure you've granted notification permissions
- Check that notifications are enabled in device settings

### Import not working
- Verify file format matches: `Lastname_Firstname_DD.MM.YYYY`
- Ensure each entry is on a new line
- Check date format is DD.MM.YYYY

### Build errors
- Clear cache: `npx expo start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Update Expo: `npm install expo@latest`

## Tech Stack

- React Native 0.81.5
- Expo SDK 54
- TypeScript
- AsyncStorage
- Expo Notifications
- Expo Router
- Expo Document Picker
- Expo File System

## Project Structure

```
birthday-reminder/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Main birthdays list
│   │   ├── explore.tsx        # About/Info screen
│   │   └── _layout.tsx        # Tab navigation
│   └── _layout.tsx            # Root layout
├── components/
│   ├── birthday-card.tsx      # Birthday card component
│   └── birthday-form.tsx      # Add/Edit form
├── constants/
│   └── theme.ts               # Theme colors & styles
├── hooks/
│   └── use-theme.ts           # Theme hook
├── types/
│   └── birthday.ts            # TypeScript types
├── utils/
│   ├── storage.ts             # AsyncStorage service
│   ├── notifications.ts       # Notification service
│   ├── fileImport.ts          # File import service
│   └── dateHelpers.ts         # Date utilities
└── assets/                    # Images and icons
```

## Support

For issues or questions, please check the documentation or create an issue in the repository.
