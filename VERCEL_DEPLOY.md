# 🚀 Deploy a Vercel

## ✅ Código ya está en GitHub
- **Repositorio:** https://github.com/EfrAIm26/forkast-landing

## 📋 Pasos para Deploy en Vercel

### Opción 1: Deploy Manual (Más Fácil)

1. **Ve a Vercel:**
   - Abre: https://vercel.com/login
   - Inicia sesión con tu cuenta

2. **Crear Nuevo Proyecto:**
   - Click en "Add New..."
   - Selecciona "Project"

3. **Importar Repositorio:**
   - Busca `forkast-landing`
   - Click en "Import"

4. **Configurar Proyecto:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (por defecto)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. **Deploy:**
   - Click en "Deploy"
   - Espera 2-3 minutos

6. **Tu sitio estará en:**
   - `https://forkast-landing.vercel.app`
   - O un dominio personalizado si lo configuras

---

## 🔧 Variables de Entorno (Importante)

Si necesitas agregar la API key de OpenRouter como variable de entorno:

1. En el proyecto de Vercel, ve a "Settings"
2. Click en "Environment Variables"
3. Agrega:
   - **Name:** `VITE_OPENROUTER_API_KEY`
   - **Value:** `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`

**Nota:** Actualmente la API key está en el código del cliente. Para producción deberías moverla a una función serverless por seguridad.

---

## 📱 Después del Deploy

Tu landing page estará disponible en:
- URL de Vercel: `https://forkast-landing-[tu-proyecto].vercel.app`
- Puedes configurar un dominio custom en Settings → Domains

---

## 🔄 Updates Automáticos

Cada vez que hagas push a la rama `main` en GitHub, Vercel automáticamente:
1. Detecta el cambio
2. Construye el proyecto
3. Despliega la nueva versión

---

## ✅ Verificación

Una vez desplegado, verifica que:
- ✅ El sitio carga correctamente
- ✅ El cambio de idioma funciona (ES/EN)
- ✅ El chatbot Eva responde
- ✅ Las imágenes se cargan correctamente
- ✅ Los links funcionan
