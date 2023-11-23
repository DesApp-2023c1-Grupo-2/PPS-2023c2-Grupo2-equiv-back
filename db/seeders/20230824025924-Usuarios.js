'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        dni: 26777239,
        nombre: 'Super',
        apellido: 'Usuario',
        email: 'equivalenciasunahuruniversidad@gmail.com',
        discord: '@superusuariounahur',
        telefono: 1123708547,
        rol: 'superusuario',
        password:
          '$2a$10$qexg1PA7.ftsJhjooL05gusHAe2in.5dgh6J0LmY3s6Sj1Dc1nanK', // unahur
        createdAt: new Date(),
        updatedAt: new Date(),
        estado: 'Habilitado',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};
