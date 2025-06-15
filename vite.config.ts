import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react()],
	assetsInclude: ["**/*.mp4"],
	build: {
		assetsDir: "assets",
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name?.split(".") || [];
					const extType = info[info.length - 1];
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						return `assets/images/[name]-[hash][extname]`;
					}
					if (/mp4|webm|ogg|mp3|wav|flac|aac/i.test(extType)) {
						return `assets/media/[name]-[hash][extname]`;
					}
					return `assets/[name]-[hash][extname]`;
				},
			},
		},
	},
});
