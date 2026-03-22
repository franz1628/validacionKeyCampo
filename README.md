# validCampoFranz

### Teclas permitidas en campos de texto

Plugin de jQuery simple y eficiente para restringir los caracteres que se pueden ingresar en campos de texto (`input`). Permite validar en tiempo real tanto la escritura manual como el pegado de texto.

---

## Características

- 🎯 **Validación en tiempo real**: Filtra caracteres no permitidos mientras el usuario escribe.
- 📋 **Control de pegado**: Limpia automáticamente el contenido si se detectan caracteres inválidos al pegar.
- ⌨️ **Soporte para teclas de navegación**: Respeta teclas como Backspace, Delete, Tab, y flechas de dirección.
- ⚡ **Ligero**: Sin dependencias externas más allá de jQuery.

## Requisitos

- [jQuery](https://jquery.com/) (probado con v3.7.1)

## Instalación

1. Descarga el archivo `validCampoFranz.js`.
2. Inclúyelo en tu proyecto después de la librería jQuery:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="path/to/validCampoFranz.js"></script>
```

## Uso

Para usar el plugin, simplemente llama a `.validCampoFranz()` sobre un elemento de entrada, pasando una cadena con los caracteres permitidos.

### Solo letras y espacios
```javascript
$('#miCampo1').validCampoFranz(' abcdefghijklmnñopqrstuvwxyzáéiou');
```

### Solo números
```javascript
$('#miCampo2').validCampoFranz('0123456789');
```

---

## Parámetros

| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| `allowedChars` | `string` | Una cadena que contiene todos los caracteres que el campo debe aceptar. |

## Demo

Puedes ver un ejemplo funcional abriendo el archivo `demo.html` en tu navegador.