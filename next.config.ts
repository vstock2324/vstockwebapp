import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uqmdwdzmfmvegzpietkc.supabase.co',
        port: '',
        pathname: `/storage/v1/object/public/${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}/**`,
        search: '',
      },
      {
        protocol:"https",
        hostname:"lh3.googleusercontent.com",
        port:"",
        pathname:`/a/**`,
        search:"",
      },
      {
        protocol:"https",
        hostname:"avatar.iran.liara.run",
        port:"",
        pathname:"/public/**",
        search:"",
      },
      {
        protocol:"https",
        hostname:"picsum.photos",
        port:"",
        pathname:"/id/**",
        search:"",
      }
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
};

export default withFlowbiteReact(nextConfig);