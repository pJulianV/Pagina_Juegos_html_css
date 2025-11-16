/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');

const galeriaHtml = fs.readFileSync(path.resolve(__dirname, '..', 'galeria.html'), 'utf8');
const contactoHtml = fs.readFileSync(path.resolve(__dirname, '..', 'contacto.html'), 'utf8');
const scriptJs = fs.readFileSync(path.resolve(__dirname, '..', 'script.js'), 'utf8');

describe('Galería - filtros', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = galeriaHtml;
    // Cargar script antes de cualquier test
    eval(scriptJs);
  });

  test('filterGallery muestra solo elementos de la categoría seleccionada', () => {
    const items = document.querySelectorAll('.product-1');
    expect(items.length).toBeGreaterThanOrEqual(6);
    
    // aplicar filtro 'accion'
    window.filterGallery('accion');
    const visible = Array.from(items).filter(i => i.style.display !== 'none');
    
    // todos los visibles deben tener data-category accion
    expect(visible.length).toBeGreaterThan(0);
    visible.forEach(v => {
      expect(v.dataset.category).toBe('accion');
    });
  });

  test('filterGallery con "all" muestra todos', () => {
    const items = document.querySelectorAll('.product-1');
    window.filterGallery('all');
    const visible = Array.from(items).filter(i => i.style.display !== 'none');
    expect(visible.length).toBe(items.length);
  });

  test('filterGallery oculta elementos de otras categorías', () => {
    const items = document.querySelectorAll('.product-1');
    const totalItems = items.length;
    
    window.filterGallery('estrategia');
    const visibleEstrategia = Array.from(items).filter(i => i.style.display !== 'none');
    
    // Debe haber menos items visibles que el total
    expect(visibleEstrategia.length).toBeLessThan(totalItems);
    expect(visibleEstrategia.length).toBeGreaterThan(0);
  });

  test('Galería contiene al menos 6 productos', () => {
    const items = document.querySelectorAll('.product-1');
    expect(items.length).toBeGreaterThanOrEqual(6);
  });
});

describe('Contacto - validación', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = contactoHtml;
    eval(scriptJs);
  });

  test('validateEmail rechaza correos vacíos', () => {
    expect(window.validateEmail('')).toBe(false);
  });

  test('validateEmail rechaza correos sin @', () => {
    expect(window.validateEmail('noes-correo')).toBe(false);
  });

  test('validateEmail rechaza correos sin dominio', () => {
    expect(window.validateEmail('usuario@')).toBe(false);
  });

  test('validateEmail acepta correos válidos', () => {
    expect(window.validateEmail('usuario@dominio.com')).toBe(true);
    expect(window.validateEmail('test@test.co')).toBe(true);
    expect(window.validateEmail('nombre.apellido@empresa.org')).toBe(true);
  });

  test('Formulario tiene campo email requerido', () => {
    const emailInput = document.getElementById('email');
    expect(emailInput).not.toBeNull();
    expect(emailInput.hasAttribute('required')).toBe(true);
  });

  test('Formulario tiene campo mensaje', () => {
    const messageInput = document.getElementById('message');
    expect(messageInput).not.toBeNull();
  });

  test('Formulario tiene elemento para mostrar errores', () => {
    const errorElement = document.getElementById('formError');
    expect(errorElement).not.toBeNull();
  });

  test('Formulario tiene elemento para mostrar éxito', () => {
    const successElement = document.getElementById('formSuccess');
    expect(successElement).not.toBeNull();
  });
});
