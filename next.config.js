// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig


module.exports = {
  env: {
      DB_LOCAL_URI: 'mongodb://localhost:27017/nextcommerce',
      DB_URI: '3000',

      STRIPE_API_KEY: '',
      STRIPE_SECRET_KEY: '',

      STRIPE_WEBHOOK_SECRET: '',

      CLOUDINARY_CLOUD_NAME: '',
      CLOUDINARY_API_KEY: '',
      CLOUDINARY_API_SECRET: '',

      SMTP_HOST: "smtp.mailtrap.io",
      SMTP_PORT: "2525",
      SMTP_USER: "c82cb55c320d79",
      SMTP_PASSWORD: "0f52fb2ae2f2cb",
      SMTP_FROM_EMAIL: "noreply@deluccis.com",
      SMTP_FROM_NAME: "Deluccis",

      NEXTAUTH_URL: '',
  },
  images: {
      domains: ['res.cloudinary.com'],
      domains: ['flowbite.com'],
      domains: ['images.pexels.com'],
  },
}