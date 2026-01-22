# ✅ Comandos CORRECTOS para Autenticación GitHub

## 🔍 Problema Identificado
El nombre del paquete en winget es **`GitHub.CLI`** (con punto y mayúsculas), NO `GitHub.cli`

## 📝 Comandos Paso a Paso

### Opción 1: Instalar GitHub CLI con winget

**Comando 1: Instalar GitHub CLI**
```powershell
winget install --id GitHub.CLI --accept-source-agreements --accept-package-agreements
```

**Comando 2: Verificar instalación**
```powershell
gh --version
```

**Comando 3: Login**
```powershell
gh auth login
```
Sigue las instrucciones:
- Selecciona: `GitHub.com` (Enter)
- Selecciona: `HTTPS` (Enter)  
- Selecciona: `Login with a web browser` (Enter)
- Presiona Enter para abrir navegador
- Copia el código y pégalo en GitHub

**Comando 4: Verificar autenticación**
```powershell
gh auth status
```

**Comando 5: Hacer push**
```powershell
git push -u origin main
```

---

## Opción 2: Descargar GitHub CLI Manualmente (Si winget no funciona)

1. **Descarga el instalador:**
   - Ve a: https://cli.github.com/
   - Click "Download for Windows"
   - Ejecuta el instalador `.msi`

2. **Después de instalar, ejecuta:**
```powershell
gh auth login
```

3. **Sigue los mismos pasos del Comando 3 arriba**

---

## Opción 3: Personal Access Token (MÁS SIMPLE - Sin instalar nada)

**Paso 1: Crear token (en navegador)**
1. Ve a: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Nombre: `Forkast Landing`
4. Marca: **repo**
5. Click "Generate token"
6. **COPIA EL TOKEN** (empieza con `ghp_...`)

**Comando 1: Configurar credenciales**
```powershell
git config --global credential.helper manager-core
```

**Comando 2: Hacer push**
```powershell
git push -u origin main
```

Cuando te pida:
- **Username:** `EfrAlm26`
- **Password:** Pega el token (NO tu password de GitHub)

---

## ✅ Recomendación

**Usa la Opción 3 (Personal Access Token)** - Es la más rápida y no requiere instalar nada.
