import type { Metadata } from 'next';
import BookContent from './BookContent';

export const metadata: Metadata = {
  title: 'Book Your Appointment — LBL Aesthetics & Laser',
  description: 'Book your appointment at LBL Aesthetics & Laser in Essex. Choose from our wide range of aesthetic and laser treatments.',
};

export default function BookPage() {
  return <BookContent />;
}
