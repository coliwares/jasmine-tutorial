## Kata 1: Unit Testing con Jasmine

<details>
  <summary>Detalles</summary>

### ¿Por que usar pruebas unitarias?

La [Guia de Testing en Angular](https://angular.io/guide/testing) deja en claro que las pruebas unitarias:

  * Permiten entender el código, se pueden usar como parte de la documentación.
  * Evitan romper código existente cuando se realizan cambios.
  * Muestran errores de diseño e implementación, ellos nos fuerzan a mirar nuestro código desde distintos ángulos y apoya a hacerlo mas modular.

### Jasmine
  * Es un framework de testing para JavaScript
  * tiene una sintaxis clara en base a : describe, it, expect

### Modulo de ejemplo

```js
const SuperAwesomeModule = {
  featureA: () => {
    ...
  },
  featureB: () => {
    ...
  }
}
```

### Suites
  * Las suites de prueba comienzan con un "describe"
  * Se basan en una cadena de texto (titulo de la espacificacion de la suite) y una funcion (unidad de codigo a probar)
  * Las suites se pueden anidar

```js
describe('SuperAwesomeModule', () => {
  describe('featureA', () => {

  });

  describe('featureB', () => {

  });
});
```

### Especificaciones
  * Llama a la funcion global de Jasmine `it(<string>, <fn>)`
  * una especificacion puede contener una o mas expectativas
  * expectativa: es una verificacion que puede ser verdadera o false
  * una especificacion con todas sus expectativas verdaderas se marca como aprobada
  * una especificacion con todas sus expectativas falsas se marca como fallida

```js
describe('SuperAwesomeModule', () => {
  describe('featureA', () => {
    it('should calculate some super awesome calculation', () => {
        ...
    });

    it('should also do this correctly', () => {
        ...
    });
  });
});
```

### expectativas y comparativas
  * llama a la funcion global de Jasmine `expect(<actual>).<matcher(expectedValue)>`
  * una comparativa implementa una comparacion booleana entre el valor actual y el valor esperado

```js
describe('SuperAwesomeModule', () => {
  describe('featureA', () => {
    it('should calculate some super awesome calculation', () => {
        expect(SuperAwesomeModule.featureA([1, 2, 4]).toEqual(7);
    });

    it('should also do this correctly', () => {
        expect(SuperAwesomeModule.featureB('...').toBe(true);
    });
  });
});
```

### comparadores incluidos 
```js
expect(foo).toBe(true); 
expect(foo).not.toBe(true);
expect(foo).toEqual(482); 
expect(foo).toBeDefined();
expect(foo).not.toBeDefined();
expect(foo).toBeUndefined();
expect(foo).toBeTruthy(); 
expect(foo).toBeFalsy();
expect(foo).toContain('student'); 
expect(e).toBeLessThan(pi);
expect(pi).toBeGreaterThan(e);
expect(a).toBeCloseTo(b, 2); 
```

### comparadores incluidos: Exceptions
```js
expect(() => {
  foo(1, '2')
}).toThrowError();

expect(() => {
  foo(1, '2')
}).toThrow(new Error('Invalid parameter type.')
```

### Setup y Teardown
```js
describe('ApiService', function() {
  const serviceInTest;

  beforeEach(function() {
    serviceInTest = new ApiService();
  });

  afterEach(function() {
   ...
  });

  it('retrieves data', function() {
    ...
  });

  it('updates data', function() {
    ...
  });
});
```


### Deshabilitar suites/specs
```js
describe('SuperAwesomeModule', () => {
  xdescribe('featureA', () => {
    it('should ...', () => {

    });

    it('should ...', () => {

    });
  });

  describe('featureB', () => {
    xit('should ...', () => {

    });

    it('should ...', () => {

    });
  });
});
```

### Forzar suites/specs
```js
describe('SuperAwesomeModule', () => {
  fdescribe('featureA', () => {
    it('should ...', () => {

    });

    it('should ...', () => {

    });
  });

  describe('featureB', () => {
    fit('should ...', () => {

    });

    it('should ...', () => {

    });
  });
});
```

### Spias
  * las pruebas sobre funciones simuladas se llaman spies.
  * pueden decartar cualquier funcion y hacer un seguimineto de los llamados y de todos los argumentos.
  * Un espía sólo existe en el bloque describe o it en el que está definido y será eliminado después de cada especificación.
```js
describe('SuperAwesomeModule', function() {
  beforeEach(function() {
    // track all calls to SuperAwesomeModule.asyncHelperFunction()
    // and return a mock response
    spyOn(SuperAwesomeModule, 'asyncHelperFunction').and.returnValue(Promise.resolve(mockData))
  });

  describe('featureA', function() {
    it('should ...', function() {
      expect(SuperAwesomeModule.featureA(x)).toBe(y);

      // matchers for spies
      expect(SuperAwesomeModule.asyncHelperFunction).toHaveBeenCalled();
    });
  });
});
```


### soporte asincrono
  * la especificación no se iniciará hasta que se llame a la función terminada en la llamada a beforeEach
   * La especificación no se completará hasta que se llame a done.
   * El tiempo de espera predeterminado es de 5 segundos y se puede anular con jasmine.DEFAULT_TIMEOUT_INTERVAL

```js
describe('long asynchronous specs', function() {
  beforeEach(function(done) {
    done();
  }, 1000);

  it('takes a long time', function(done) {
    setTimeout(function() {
      done();
    }, 9000);
  }, 10000);

  afterEach(function(done) {
    done();
  }, 1000);
});
```

### Kata

Probaremos la implementación de una función `scoreCalculator` (resume puntuaciones) que satisface lo siguiente:
  * `should work with one number`
  * `should work with more than one score`
  * `should treat negative scores as 0`
  * `should return zero with empty input`
</details>
