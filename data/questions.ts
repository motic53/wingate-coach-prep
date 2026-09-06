/* eslint-disable */
// @ts-nocheck
import { DIAGRAMS_LIBRARY } from './diagrams';
import { ANATOMY_1_QUESTIONS } from './anatomy1';
import { ANATOMY_2_QUESTIONS } from './anatomy2';
import { PHYSIO_1_QUESTIONS } from './physio1';
import { PHYSIO_2_QUESTIONS } from './physio2';

export { DIAGRAMS_LIBRARY };

// איחוד כל המודולים למאגר אחד מלא ושלם
export const ALL_WINGATE_QUESTIONS = [
  ...ANATOMY_1_QUESTIONS,
  ...ANATOMY_2_QUESTIONS,
  ...PHYSIO_1_QUESTIONS,
  ...PHYSIO_2_QUESTIONS
];
