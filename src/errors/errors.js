export function notFound (resource = 'Item') {
  return {
    type: 'not_found',
    message: `${resource} não localizado(a)!`
  };
};

export function conflict (resource = 'Item') {
  return {
      type: 'conflict',
      message: `${resource} já existe!`
  };
};

export function bodyConflict (resource = 'Item') {
  return {
    type: 'conflict',
    message: `${resource} devem ser diferentes!`
  };
};

export function invalidEntity (errors) {
  return {
    type: 'invalid_entity',
    message: errors
  };
};

export function badRequest (error) {
  return {
    type: 'bad_request',
    message: error
  };
};

export function tooManyResults () {
  return {
    type: 'too_many_results',
    message: 'Too Many Results'
  };
};

export const errors = { notFound, conflict, bodyConflict, invalidEntity, badRequest, tooManyResults };