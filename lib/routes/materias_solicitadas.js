import express from 'express';

import {
  addMateriaSolicitada,
  index,
  show,
  updateMateriaSolicitada,
  deleteMateriaSolicitada,
  materia_carrera,
} from '../controllers/materia_solicitada_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.get('/mat/car', withErrorHandling(materia_carrera)); // devuelve las materias solicitadas de una carrera

router.post('/', withErrorHandling(addMateriaSolicitada));

router.put('/:id', withErrorHandling(updateMateriaSolicitada));

router.delete('/:id', withErrorHandling(deleteMateriaSolicitada));

export default router;
