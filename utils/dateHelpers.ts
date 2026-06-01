import { Birthday } from '../types/birthday';

export const dateHelpers = {
  formatDate(dateString: string): string {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  },

  getAge(dateString: string): number {
    const [year, month, day] = dateString.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  },

  getDaysUntilBirthday(dateString: string): number {
    const [, month, day] = dateString.split('-').map(Number);
    const now = new Date();
    // Normalize to midnight to avoid time-of-day affecting the count
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const currentYear = today.getFullYear();
    
    let nextBirthday = new Date(currentYear, month - 1, day);
    
    // If the birthday is earlier today or already passed this year, schedule for next year
    if (nextBirthday < today) {
      nextBirthday = new Date(currentYear + 1, month - 1, day);
    }
    
    const diffTime = nextBirthday.getTime() - today.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  },

  sortByUpcoming(birthdays: Birthday[]): Birthday[] {
    return [...birthdays].sort((a, b) => {
      const daysA = this.getDaysUntilBirthday(a.date);
      const daysB = this.getDaysUntilBirthday(b.date);
      return daysA - daysB;
    });
  },

  /**
   * Parse ISO date string into component parts, avoiding timezone issues
   * that occur with `new Date('YYYY-MM-DD')`.
   */
  parseISODate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
};
