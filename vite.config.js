import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true 
  }, // <-- تم إضافة الفاصلة هنا
  base: '/TO-Do/' // <-- تم تعديل الاسم ليطابق اسم المستودع تماماً
})