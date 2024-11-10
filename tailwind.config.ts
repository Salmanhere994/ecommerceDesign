import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
			extend: {
			  colors: {
				primary: '#0D9488',
				secondary: '#64748B',
				background: '#F8FAFC',
				text: '#1E293B',
				accent: '#F59E0B',
			  },
			},
		  },
      },
    },
  },
  plugins: [],
};
export default config;
