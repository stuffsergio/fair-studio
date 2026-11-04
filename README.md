# Fair Studio

Web corporativa de **Fair Studio**, estudio ficticio de desarrollo de webs y apps móviles (proyecto de Sostenibilidad, 1º DAW).
React + Vite, react-router (HashRouter), motion, Lenis (scroll suave). Iconos Majesticons (icons0.dev, MIT).

- `/` landing corporativa · `/#/politicas` Política ASG y tabla ASG–ODS
- Desarrollo: `npm install && npm run dev`
- Despliegue (solo VPS con Docker): `git pull && docker build -t fair-studio . && docker rm -f fair-studio && docker run -d --name fair-studio --network npm_default --restart unless-stopped fair-studio`
