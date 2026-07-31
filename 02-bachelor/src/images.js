// Fotos libres (Unsplash CDN). Se sirven optimizadas vía parámetros de imgix.
const u = (id, w = 1600) => `https://images.unsplash.com/${id}?w=${w}&q=70&auto=format&fit=crop`

export const IMG = {
  // Campos / cosecha / gente
  heroCampo: u('photo-1717316941896-190fa0a48492', 2200),
  campoAncho: u('photo-1774343837058-01115f35eb81', 2000),
  cosecha: u('photo-1507662228758-08d030c4820b', 2000),
  familia: u('photo-1535379453347-1ffd615e2e08'),
  agricultor: u('photo-1605000797499-95a51c5269ae'),

  // Galpón / logística
  galpon: u('photo-1587293852726-70cdb56c2866', 2000),
  logistica: u('photo-1542838132-92c53300491e', 2000),
  deposito: u('photo-1553413077-190dd305871c', 2000),

  // Ajos
  ajoBlanco: u('photo-1540148426945-6cf22a6b2383'),
  ajoColorado: u('photo-1625229466998-42ee9c597290'),

  // Otros productos
  cebolla: u('photo-1518977956812-cd3dbadaaf31'),
  zapallo: u('photo-1570586437263-ab629fccc818'),
  ajoBoutique: u('photo-1587049332298-1c42e83937a7'),
  ajoManojo: u('photo-1587049693270-c7560da11218'),
  ajoPila: u('photo-1615477550927-6ec8445fcfe6'),
  ajoCabezas: u('photo-1559454473-27bc85c67728'),
  ajoTrenza: u('photo-1636210589096-a53d5dacd702'),

  // Derivados / especias
  polvo: u('photo-1581600140682-d4e68c8cde32'),
  especias: u('photo-1506368249639-73a05d6f6488'),
  pasta: u('photo-1606914469633-bd39206ea739'),
  molido: u('photo-1509358271058-acd22cc93898'),
}
