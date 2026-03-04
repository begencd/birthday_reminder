# Birthday Reminder - Complete Setup Guide

## 📋 Table of Contents

1. [System Requirements](#system-requirements)
2. [Installation](#installation)
3. [Running the App](#running-the-app)
4. [Building APK](#building-apk)
5. [Features Guide](#features-guide)
6. [Troubleshooting](#troubleshooting)

## System Requirements

### Required Software

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Android Studio**: Latest version (for Android development)
- **Java Development Kit (JDK)**: v17 or higher

### Optional

- **Expo Go App**: For testing on physical device
- **Android Emulator**: For testing without physical device

## Installation

### Step 1: Install Dependencies

Open terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- React Native 0.81.5
- Expo SDK 54
- TypeScript
- AsyncStorage
- Expo Notifications
- Expo Document Picker
- Expo File System
- And all other dependencies

### Step 2: Verify Installation

Check if everything is installed correctly:

```bash
npx expo-doctor
```

This command will check for common issues and suggest fixes.

## Running the App

### Option 1: Using Expo Go (Easiest)

1. Install Expo Go on your Android device from Google Play Store

2. Start the development server:
```bash
npm start
```

3. Scan the QR code with Expo Go app

### Option 2: Using Android Emulator

1. Open Android Studio and start an emulator

2. Run:
```bash
npm run android
```

The app will automatically install and launch on the emulator.

### Option 3: Using Physical Device (USB Debugging)

1. Enable USB debugging on your Android device

2. Connect device via USB

3. Run:
```bash
npm run android
```

## Building APK

### Method 1: EAS Build (Recommended)

EAS (Expo Application Services) is the easiest way to build production-ready APKs.

#### Setup EAS

1. Install EAS CLI globally:
```bash
npm install -g eas-cli
```

2. Login to your Expo account (create one at expo.dev if needed):
```bash
eas login
```

3. Configure your project:
```bash
eas build:configure
```

#### Build APK

For a preview/testing APK:
```bash
eas build --platform android --profile preview
```

For a production APK:
```bash
eas build --platform android --profile production
```

The build process will:
- Upload your code to Expo servers
- Build the APK in the cloud
- Provide a download link when complete

**Note**: First build may take 10-20 minutes. Subsequent builds are faster.

### Method 2: Local Build

For local builds without EAS:

1. Generate native Android project:
```bash
npx expo prebuild --platform android
```

2. Navigate to Android directory:
```bash
cd android
```

3. Build release APK:
```bash
./gradlew assembleRelease
```

4. Find your APK at:
```
android/app/build/outputs/apk/release/app-release.apk
```

**Note**: You may need to generate a signing key for release builds.

## Features Guide

### Adding a Birthday

1. Tap the **+** button (floating action button)
2. Enter first name and last name
3. Tap the date field to open the date picker
4. Select day, month, and year
5. Tap **Save**

### Editing a Birthday

1. Find the birthday card in the list
2. Tap the **pencil icon** on the right
3. Modify the information
4. Tap **Save**

### Deleting a Birthday

1. Find the birthday card in the list
2. Tap the **trash icon** on the right
3. Confirm deletion

### Importing from TXT File

1. Create a TXT file with format: `Lastname_Firstname_DD.MM.YYYY`
2. Save the file on your device
3. In the app, tap the **upload icon** (top right)
4. Select your TXT file
5. Birthdays will be automatically imported

Example file content:
```
Atayew_Begenc_12.05.2001
Annayew_Myrat_03.11.1999
Smith_John_15.03.1995
```

### Notifications

The app will automatically:
- Send a notification at 00:00 (midnight) on each birthday
- Send a reminder notification 24 hours before
- Send a monthly summary on the 1st of each month

**Important**: Grant notification permissions when prompted!

### Dark Mode

The app automatically switches between light and dark themes based on your device's system settings.

## Troubleshooting

### Issue: "npm install" fails

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: "Metro bundler" errors

**Solution**:
```bash
# Clear Metro cache
npx expo start -c
```

### Issue: Notifications not working

**Solutions**:
1. Check notification permissions in device settings
2. Ensure the app is not in battery optimization mode
3. Restart the app after granting permissions

### Issue: Import file not working

**Solutions**:
1. Verify file format: `Lastname_Firstname_DD.MM.YYYY`
2. Ensure each entry is on a new line
3. Check there are no extra spaces or special characters
4. Use UTF-8 encoding for the file

### Issue: Build fails with "Java not found"

**Solution**:
1. Install JDK 17 or higher
2. Set JAVA_HOME environment variable
3. Restart terminal/IDE

### Issue: Android emulator not starting

**Solutions**:
1. Open Android Studio
2. Go to Tools > AVD Manager
3. Create a new virtual device if none exists
4. Ensure virtualization is enabled in BIOS

### Issue: "Expo Go" app shows error

**Solution**:
- Update Expo Go to the latest version from Play Store
- Ensure your device and computer are on the same WiFi network
- Try using tunnel mode: `npx expo start --tunnel`

## Development Commands

```bash
# Start development server
npm start

# Start with cache cleared
npx expo start -c

# Run on Android
npm run android

# Run on iOS (requires Mac)
npm run ios

# Run on web
npm run web

# Check for issues
npx expo-doctor

# Update dependencies
npx expo install --fix
```

## Project Architecture

### Data Flow

1. **Storage Layer** (`utils/storage.ts`)
   - AsyncStorage for persistent data
   - CRUD operations for birthdays

2. **Notification Layer** (`utils/notifications.ts`)
   - Schedule birthday notifications
   - Schedule reminder notifications
   - Schedule monthly summaries

3. **UI Layer** (`components/`, `app/`)
   - React components
   - Theme support
   - Navigation

### File Structure

```
birthday-reminder/
├── app/                        # Expo Router pages
│   ├── (tabs)/                # Tab navigation
│   │   ├── index.tsx          # Home screen (birthday list)
│   │   ├── explore.tsx        # About screen
│   │   └── _layout.tsx        # Tab layout
│   └── _layout.tsx            # Root layout
├── components/                 # Reusable components
│   ├── birthday-card.tsx      # Birthday display card
│   └── birthday-form.tsx      # Add/Edit modal form
├── constants/                  # App constants
│   └── theme.ts               # Colors, spacing, fonts
├── hooks/                      # Custom React hooks
│   └── use-theme.ts           # Theme hook
├── types/                      # TypeScript types
│   └── birthday.ts            # Birthday interface
├── utils/                      # Utility functions
│   ├── storage.ts             # AsyncStorage wrapper
│   ├── notifications.ts       # Notification service
│   ├── fileImport.ts          # TXT file parser
│   └── dateHelpers.ts         # Date calculations
├── assets/                     # Static assets
├── app.json                    # Expo configuration
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
└── eas.json                    # EAS Build config
```

## Performance Tips

1. **Optimize Images**: Use compressed images in assets folder
2. **Lazy Loading**: Components load on demand
3. **Efficient Storage**: AsyncStorage is optimized for small data
4. **Background Notifications**: Scheduled efficiently to save battery

## Security Notes

- All data is stored locally on the device
- No data is sent to external servers
- Notifications are scheduled locally
- File imports are processed on-device

## Next Steps

After setup:
1. Test all features thoroughly
2. Customize theme colors in `constants/theme.ts`
3. Add your own birthdays or import from file
4. Build and share the APK

## Support

For issues:
1. Check this guide first
2. Run `npx expo-doctor` for diagnostics
3. Check Expo documentation: https://docs.expo.dev
4. Check React Native documentation: https://reactnative.dev

## Version Information

- **App Version**: 1.0.0
- **React Native**: 0.81.5
- **Expo SDK**: 54
- **TypeScript**: 5.9.2
- **Node**: 18+ required

---

Happy Birthday Tracking! 🎉
