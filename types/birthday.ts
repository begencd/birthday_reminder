export interface Birthday {
  id: string;
  firstName: string;
  lastName: string;
  date: string; // ISO format YYYY-MM-DD
  notificationId?: string;
  reminderNotificationId?: string;
}

export interface BirthdayFormData {
  firstName: string;
  lastName: string;
  date: Date;
}
