import AsyncStorage from '@react-native-async-storage/async-storage';
import { Birthday } from '../types/birthday';

const STORAGE_KEY = '@birthdays';

export const storageService = {
  async getBirthdays(): Promise<Birthday[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading birthdays:', error);
      return [];
    }
  },

  async saveBirthdays(birthdays: Birthday[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(birthdays));
    } catch (error) {
      console.error('Error saving birthdays:', error);
      throw error;
    }
  },

  async addBirthday(birthday: Birthday): Promise<void> {
    const birthdays = await this.getBirthdays();
    birthdays.push(birthday);
    await this.saveBirthdays(birthdays);
  },

  async updateBirthday(id: string, updatedBirthday: Birthday): Promise<void> {
    const birthdays = await this.getBirthdays();
    const index = birthdays.findIndex(b => b.id === id);
    if (index !== -1) {
      birthdays[index] = updatedBirthday;
      await this.saveBirthdays(birthdays);
    }
  },

  async deleteBirthday(id: string): Promise<void> {
    const birthdays = await this.getBirthdays();
    const filtered = birthdays.filter(b => b.id !== id);
    await this.saveBirthdays(filtered);
  }
};
