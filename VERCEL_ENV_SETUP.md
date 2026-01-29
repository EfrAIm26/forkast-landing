# 🔐 Configuración de Variable de Entorno en Vercel

## ⚠️ IMPORTANTE: Renombra la Variable en Vercel

La variable que creaste se llama `apykeyopenrouterfkst`, pero **necesita el prefijo `VITE_`** para funcionar en el frontend.

## 📋 Pasos para Corregir:

### 1. Ve a Vercel → Tu Proyecto → Settings → Environment Variables

### 2. Elimina la variable actual:
- Busca `apykeyopenrouterfkst`
- Click en los 3 puntos (...)
- Click "Delete"

### 3. Crea la variable CORRECTA:
- Click "Add Environment Variable"
- **Key:** `VITE_OPENROUTER_API_KEY`
- **Value:** `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`
- **Environments:** Marca todas (Production, Preview, Development)
- **Sensitive:** ✅ Actívalo (recomendado)
- Click "Save"

### 4. Redeploy:
- Vercel te mostrará un botón "Redeploy"
- Click en "Redeploy"
- O ve a Deployments y haz redeploy manual

---

## ✅ Después del Redeploy:

El chatbot Eva funcionará correctamente usando la variable de entorno segura.

---

## 🔍 Verificación:

Después del deploy, abre la consola del navegador (F12) y verifica que no haya errores relacionados con la API key.

---

## 📝 Nota Técnica:

En Vite, las variables de entorno del frontend **DEBEN** empezar con `VITE_` para estar disponibles en el código del cliente. Sin este prefijo, la variable no será accesible.
