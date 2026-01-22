# 🔐 Comandos para Autenticación GitHub - Paso a Paso

## Opción 1: GitHub CLI (MÁS FÁCIL) ⭐

### Paso 1: Verificar si tienes GitHub CLI instalado
```powershell
gh --version
```

### Paso 2A: Si NO tienes GitHub CLI, instálalo
```powershell
winget install --id GitHub.CLI --accept-source-agreements --accept-package-agreements
```

**O si prefieres descargarlo manualmente:**
- Ve a: https://cli.github.com/
- Descarga el instalador para Windows
- Ejecuta el instalador

### Paso 2B: Si ya lo tienes, continúa con el login
```powershell
gh auth login
```

### Paso 3: Sigue las instrucciones interactivas
Cuando ejecutes `gh auth login`, te preguntará:

1. **¿Qué cuenta quieres usar?**
   - Selecciona: `GitHub.com` (presiona Enter)

2. **¿Cuál es tu protocolo preferido?**
   - Selecciona: `HTTPS` (presiona Enter)

3. **¿Cómo quieres autenticarte?**
   - Selecciona: `Login with a web browser` (presiona Enter)

4. **Presiona Enter para abrir GitHub en tu navegador**
   - Se abrirá tu navegador automáticamente
   - Copia el código que aparece en la terminal
   - Pégalo en la página de GitHub que se abrió
   - Click "Authorize"

### Paso 4: Verificar que funcionó
```powershell
gh auth status
```

### Paso 5: Hacer el push
```powershell
git push -u origin main
```

---

## Opción 2: Personal Access Token (Si prefieres no usar CLI)

### Paso 1: Crear el token (en el navegador)
1. Ve a: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Nombre: `Forkast Landing`
4. Expiración: `90 days` (o el que prefieras)
5. Marca: **repo** (Full control of private repositories)
6. Click "Generate token"
7. **COPIA EL TOKEN** (empieza con `ghp_...`)

### Paso 2: Configurar Git Credential Manager
```powershell
git config --global credential.helper manager-core
```

### Paso 3: Hacer el push (te pedirá credenciales)
```powershell
git push -u origin main
```

Cuando te pida:
- **Username:** `EfrAlm26`
- **Password:** Pega el token que copiaste (NO tu password de GitHub)

---

## ✅ Verificación Final

Después del push exitoso, verifica en:
https://github.com/EfrAlm26/forkast-landing

Deberías ver todos tus archivos allí.

---

**Recomendación:** Usa la Opción 1 (GitHub CLI) - es más fácil y automática.
