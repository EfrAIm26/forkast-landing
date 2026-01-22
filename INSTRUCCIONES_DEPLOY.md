# 🚀 INSTRUCCIONES PARA SUBIR A GITHUB Y DESPLEGAR EN VERCEL

## ✅ TODO LISTO EN TU COMPUTADORA

El proyecto está:
- ✅ Con todas las fotos correctas del equipo (Gonzalo, Mohit, Joseph)
- ✅ Con foto correcta de Eva
- ✅ Con fotos AI para testimoniales
- ✅ Git inicializado y commit hecho
- ✅ Listo para push

## 📝 PASO 1: Crear Repositorio en GitHub

1. Ve a: https://github.com/new
2. **Repository name:** `forkast-landing`
3. **Description:** `Landing page profesional para Forkast con chatbot Eva IA`
4. Deja en **Public** (o Private si prefieres)
5. **NO marques** "Initialize this repository with a README"
6. Click en **"Create repository"**

## 🔗 PASO 2: Conectar y Subir

Una vez creado el repositorio, ejecuta estos comandos en tu terminal (PowerShell):

```powershell
cd C:\Proyectos\Forkast

# Verificar que el remote esté configurado
git remote -v

# Si no está configurado, agregarlo:
git remote add origin https://github.com/EfrAlm26/forkast-landing.git

# Subir el código
git push -u origin main
```

Si te pide credenciales:
- **Username:** EfrAlm26
- **Password:** Usa un Personal Access Token (no tu password de GitHub)

### Crear Personal Access Token (si es necesario):
1. Ve a: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Dale un nombre: "Forkast Landing Deploy"
4. Marca el checkbox: **repo** (Full control of private repositories)
5. Click "Generate token"
6. **COPIA EL TOKEN** y úsalo como password

## 🌐 PASO 3: Desplegar en Vercel

### Opción A: Desde la Web (MÁS FÁCIL)

1. Ve a: https://vercel.com/new
2. Haz login con tu cuenta
3. Click en "Import Git Repository"
4. Busca tu repositorio: `EfrAlm26/forkast-landing`
5. Click "Import"
6. **Project Name:** `forkast-landing`
7. **Framework Preset:** Vite
8. Build settings (ya están configuradas en vercel.json):
   - Build Command: `npm run build`
   - Output Directory: `dist`
9. Click **"Deploy"**

### Opción B: Desde la CLI

```powershell
# Instalar Vercel CLI (si no la tienes)
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 🎉 LISTO!

Tu landing page estará en: `https://forkast-landing.vercel.app`

O el dominio que Vercel te asigne.

## 🔧 Configuración de Dominio Personalizado (Opcional)

Si tienes un dominio propio (ej: forkast.me):

1. En Vercel → Settings → Domains
2. Agrega tu dominio
3. Configura los DNS según las instrucciones de Vercel

---

## 📊 Estado Actual

✅ Código listo y commiteado
✅ vercel.json configurado
✅ README.md con documentación completa
✅ .gitignore configurado
✅ Todas las imágenes correctas

❌ Pendiente: Crear repo en GitHub
❌ Pendiente: Push a GitHub
❌ Pendiente: Deploy a Vercel

## 🆘 Si Tienes Problemas

### Problema: "Repository not found"
**Solución:** Crea el repositorio en GitHub primero (Paso 1)

### Problema: "Permission denied"
**Solución:** Usa Personal Access Token en lugar de password

### Problema: Vercel no encuentra el build
**Solución:** El vercel.json ya está configurado, debería funcionar automáticamente

---

## 📧 Contacto

Si algo no funciona, avísame y te ayudo a resolverlo.

**¡Todo está listo para deployar!** 🚀
