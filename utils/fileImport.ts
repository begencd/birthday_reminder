import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { Birthday } from '../types/birthday';

export const fileImportService = {
  async importFromTxtFile(): Promise<Birthday[]> {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'text/plain',
        copyToCacheDirectory: true,
      });

      if (result.canceled || !result.assets || result.assets.length === 0) {
        return [];
      }

      const fileUri = result.assets[0].uri;
      const content = await FileSystem.readAsStringAsync(fileUri);
      
      return this.parseTxtContent(content);
    } catch (error) {
      console.error('Error importing file:', error);
      throw new Error('Failed to import file. Please check the file format.');
    }
  },

  parseTxtContent(content: string): Birthday[] {
    const lines = content.split('\n').filter(line => line.trim());
    const birthdays: Birthday[] = [];

    for (const line of lines) {
      try {
        const parts = line.trim().split('_');
        if (parts.length !== 3) continue;

        const [lastName, firstName, dateStr] = parts;
        const dateParts = dateStr.split('.');
        
        if (dateParts.length !== 3) continue;

        const [day, month, year] = dateParts.map(p => parseInt(p, 10));
        
        if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12) {
          continue;
        }

        const isoDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        birthdays.push({
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          date: isoDate,
        });
      } catch (error) {
        console.error('Error parsing line:', line, error);
      }
    }

    return birthdays;
  }
};
