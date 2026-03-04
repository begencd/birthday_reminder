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
    const [year, month, day] = dateString.split('-').map(Number);
    const today = new Date();
    const currentYear = today.getFullYear();
    
    let nextBirthday = new Date(currentYear, month - 1, day);
    
    if (nextBirthday < today) {
      nextBirthday = new Date(currentYear + 1, month - 1, day);
    }
    
    const diffTime = nextBirthday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  },

  sortByUpcoming(birthdays: any[]): any[] {
    return [...birthdays].sort((a, b) => {
      const daysA = this.getDaysUntilBirthday(a.date);
      const daysB = this.getDaysUntilBirthday(b.date);
      return daysA - daysB;
    });
  }
};
