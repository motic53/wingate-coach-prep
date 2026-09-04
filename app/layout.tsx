import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ווינגייט קואוץ׳ - הכנה למבחנים לשמואל',
  description: 'אפליקציית לימוד חזותית וקולית למבחני הסמכת מאמנים בווינגייט',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-slate-950 text-slate-100 antialiased select-none">
        {children}
      </body>
    </html>
  );
}
