import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ווינגייט קואוץ׳ - שמואל',
  description: 'הכנה למבחני הסמכת מאמנים בווינגייט',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
