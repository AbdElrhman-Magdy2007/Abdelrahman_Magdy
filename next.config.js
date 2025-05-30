/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ تفعيل الميزات التجريبية (يجب استخدام App Router)
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // دعم رفع ملفات كبيرة حتى 5 ميجابايت
    },
  },

  // ✅ إعدادات الصور – دعم دومينات خارجية ومحلية
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // السماح بالصور من أي موقع HTTPS
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/Uploads/**', // السماح بالصور من public/Uploads أثناء التطوير
      },
    ],
  },

  // ✅ إعدادات Webpack لدعم ملفات الوسائط (فيديو وصور)
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|jpeg|jpg|png|svg|gif)$/i, // دعم تنسيقات شائعة
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]', // مكان التخزين في build النهائي
      },
    });

    return config;
  },
};

module.exports = nextConfig;
