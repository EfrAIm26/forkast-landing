# 🔐 Autenticación con GitHub

El push falló porque necesitas autenticarte. Tienes 2 opciones:

## Opción 1: Personal Access Token (RECOMENDADO)

1. **Crea un Personal Access Token:**
   - Ve a: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Nombre: "Forkast Landing"
   - Marca: **repo** (Full control of private repositories)
   - Click "Generate token"
   - **COPIA EL TOKEN** (solo se muestra una vez)

2. **Ejecuta el push:**
   ```powershell
   git push -u origin main
   ```
   
3. Cuando te pida credenciales:
   - **Username:** EfrAlm26
   - **Password:** Pega el Personal Access Token (NO tu password de GitHub)

## Opción 2: GitHub CLI (Más fácil)

```powershell
# Instalar GitHub CLI (si no lo tienes)
winget install --id GitHub.cli

# Login
gh auth login

# Selecciona:
# - GitHub.com
# - HTTPS
# - Login with a web browser
# - Copy el código que te da

# Luego intenta el push de nuevo
git push -u origin main
```

## Opción 3: SSH (Si prefieres)

1. **Genera una SSH key:**
   ```powershell
   ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"
   # Presiona Enter para aceptar la ubicación
   # Presiona Enter para no poner passphrase (o pon una si quieres)
   ```

2. **Copia la clave pública:**
   ```powershell
   cat ~/.ssh/id_ed25519.pub
   # Copia todo el output
   ```

3. **Agrega la clave a GitHub:**
   - Ve a: https://github.com/settings/keys
   - Click "New SSH key"
   - Title: "Forkast Landing"
   - Key: Pega la clave que copiaste
   - Click "Add SSH key"

4. **Cambia el remote a SSH:**
   ```powershell
   git remote set-url origin git@github.com:EfrAlm26/forkast-landing.git
   git push -u origin main
   ```

---

## ✅ Verificación

Después de hacer push, verifica en:
https://github.com/EfrAlm26/forkast-landing

Deberías ver todos tus archivos allí.

---

**Recomendación:** Usa la Opción 1 (Personal Access Token) - es la más rápida y simple.
